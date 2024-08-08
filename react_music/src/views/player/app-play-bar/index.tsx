import React, { memo, useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import { AppPlayerWrapper } from './style'
import { Slider, message } from 'antd'
import classNames from 'classnames'
import AppPlayPanel from '@/views/player/app-play-panel'

import { AppShallowEqual, useAppDispatch, useAppSelector } from '@/hooks'
import { getSizeImage, formatTimeToMinute, getPlayUrl } from '@/utils'
import {
  changeCurrentLyricIndexAction,
  changePlayModeAction,
  changeShowBottomAction,
  fetchChangeSongAction
} from '@/store/modules/player'

interface IProps {
  children?: ReactNode
}

const AppPlayer: React.FC<IProps> = () => {
  // 获取歌曲数据
  const { currentSong, currentLyrics, lyricIndex, playList, playMode, showBottom } = useAppSelector(
    (state) => ({
      currentSong: state.player.currentSong,
      playMode: state.player.playMode,
      currentLyrics: state.player.currentLyrics,
      lyricIndex: state.player.lyricIndex,
      showBottom: state.player.showBottom,
      playList: state.player.playList
    }),
    AppShallowEqual
  )
  const dispatch = useAppDispatch()
  const [messageApi, contextHolder] = message.useMessage() // 全局展示操作反馈信息

  // 音乐播放器实例
  const audioRef = useRef<HTMLAudioElement>(null)

  // 状态
  const [isPlaying, setIsPlaying] = useState(false) // 是否播放
  const [progress, setProgress] = useState(0) // 进度
  const [isSlider, setIsSlider] = useState(false) // 进度条
  const [duration, setDuration] = useState(0) // 音乐总时间
  const [currentTime, setCurrentTime] = useState(0) // 音乐播放时间
  const [isShowLyrics, setIsShowLyrics] = useState(true)
  const [showPanel, setShowPanel] = useState(false)

  /* 组件内的副作用操作 */
  useEffect(() => {
    if (!audioRef.current) return
    audioRef.current.src = getPlayUrl(currentSong.id)
    audioRef.current
      .play()
      .then(() => {
        setIsPlaying(true)
      })
      .catch((err) => {
        setIsPlaying(false)
        console.log('歌曲播放失败：', err)
      })
    // 获取总时长  毫秒的
    setDuration(currentSong?.dt)
  }, [currentSong])

  // 方法
  /* 音乐播放的进度处理 */
  function handleTimeUpDate() {
    // 获取当前的播放时间 秒
    if (!audioRef.current) return
    const currentTime = audioRef.current?.currentTime * 1000
    //  只有在没有拖拽状态的时候去更新
    if (!isSlider) {
      // 计算进度
      const progress = (currentTime / duration) * 100
      setProgress(progress)
      setCurrentTime(currentTime)
    }
    // 根据当前时间匹配歌词
    if (!isShowLyrics) {
      messageApi.destroy('lyric')
    }
    // 逻辑上最后一句匹配不上 默认最后一句 就可以了 但是0-1=-1要return掉
    let index = currentLyrics.length - 1
    // 遍历所有歌词 找到时间大于现在时间的
    for (let i = 0; i < currentLyrics.length; i++) {
      const lyric = currentLyrics[i]
      if (lyric.time > currentTime) {
        index = i - 1
        break
      }
    }
    // 匹配上对应的歌词的index 只打印一次
    if (lyricIndex === index || index === -1) return
    dispatch(changeCurrentLyricIndexAction(index))
    // 展示歌词
    isShowLyrics &&
      currentLyrics[index]?.text &&
      messageApi.open({
        content: currentLyrics[index]?.text,
        key: 'lyric',
        duration: 0 // 不消失
      })
  }

  function handleOnChange(value: number) {
    // 来回拖拽的时候 处于拖拽状态 不改变歌曲播放状态 搞个状态记录
    setIsSlider(true)
    setProgress(value)
    // 获取value对应位置的时间 根据拖拽的位置改变当前播放时间 不涉及音乐播放
    const currentTime = (value / 100) * duration
    setCurrentTime(currentTime)
  }

  function handleSliderAfterChange(value: number) {
    // 设置当前播放的时间
    if (!audioRef.current) return
    const currentTime = (value / 100) * duration
    audioRef.current.currentTime = currentTime / 1000
    // 改变播放时间与状态
    setCurrentTime(currentTime)
    setProgress(value)
    setIsSlider(false)
  }

  /* 播放/暂停/下一首 */
  const handlerChangePlay = (flag: string) => {
    if (flag === 'play') {
      setIsPlaying(!isPlaying)
      // 猜测：playing的值已经改变了，但是由于react的机制需要在DOM
      isPlaying
        ? audioRef.current?.pause()
        : audioRef.current
            ?.play()
            .then(() => {
              setIsPlaying(true)
            })
            .catch((err) => {
              setIsPlaying(false)
              console.log('歌曲播放失败：', err)
            })
    } else if (flag === 'prev') {
      dispatch(fetchChangeSongAction(false))
    } else if (flag === 'next') {
      dispatch(fetchChangeSongAction(true))
    }
  }

  /* 音乐播放结束 */
  const handleEnded = () => {
    if (playMode === 2) {
      audioRef.current!.currentTime = 0
      audioRef.current?.play()
    } else {
      // 切换音乐
      dispatch(fetchChangeSongAction(true))
    }
  }

  // 音乐模式切换
  const handleChangePlayMode = () => {
    // 0 1 2
    let newPlayMode = playMode + 1
    if (newPlayMode > 2) newPlayMode = 0
    dispatch(changePlayModeAction(newPlayMode))
  }
  const handleShowLyric = () => {
    setIsShowLyrics(!isShowLyrics)
  }
  // 显示bottom
  const handleShowBottom = () => {
    dispatch(changeShowBottomAction(!showBottom))
  }
  // 显示panel
  const handleShowPanel = () => {
    setShowPanel(!showPanel)
    setIsShowLyrics(showPanel)
  }

  return (
    <>
      {contextHolder}
      <AppPlayerWrapper className="player sprite_playbar" playMode={playMode}>
        <div className="end-l player-bar" onClick={handleShowBottom}>
          <button className="btn player-bar"></button>
        </div>
        {showBottom && (
          <>
            <div className="content wrap-v2">
              <div className="control">
                <button
                  className="btn sprite_playbar pre"
                  onClick={() => handlerChangePlay('prev')}
                ></button>
                <button
                  className={classNames('btn sprite_playbar', isPlaying ? 'pause' : 'play')}
                  onClick={() => handlerChangePlay('play')}
                ></button>
                <button
                  className="btn sprite_playbar next"
                  onClick={() => handlerChangePlay('next')}
                ></button>
              </div>

              <div className="head">
                <img className="image" src={getSizeImage(currentSong?.al?.picUrl, 34)} alt="" />
                <a href="/player" className="mask player-bar"></a>
              </div>

              <div className="playcontent">
                <div className="info">
                  <span className="name">{currentSong?.al?.name}</span>
                  <span className="ar">
                    {currentSong?.ar?.map((item: any, index: number) => (
                      <div className="a" key={item.id}>
                        <span>{item.name}</span>
                        {index < currentSong.ar.length - 1 && <span className="line">/</span>}
                      </div>
                    ))}
                  </span>
                  <span className="src player-bar"></span>
                </div>

                <div className="progress">
                  {/* 定义一个状态 随着音乐的播放改变 */}
                  <Slider
                    value={progress}
                    step={0.4}
                    tooltip={{ formatter: null }}
                    onChange={handleOnChange}
                    onAfterChange={handleSliderAfterChange}
                  />
                  <div className="time">
                    <span className="current">{formatTimeToMinute(currentTime)}</span>
                    <span className="divider">/</span>
                    <span className="duration">{formatTimeToMinute(duration)}</span>
                  </div>
                </div>
              </div>

              <div className="operator">
                <div className="left">
                  <button className="btn pip" onClick={handleShowLyric}></button>
                  <button className="btn sprite_playbar favor"></button>
                  <button className="btn sprite_playbar share"></button>
                </div>
                <div className="right sprite_playbar">
                  <button className="sprite_playbar btn volume"></button>
                  <button
                    className="sprite_playbar btn loop"
                    onClick={handleChangePlayMode}
                  ></button>
                  <button className="sprite_playbar btn playlist" onClick={handleShowPanel}>
                    {playList.length}
                  </button>
                </div>
              </div>
              <div className="lock"></div>
            </div>

            {/* 播放器 */}
            <audio ref={audioRef} autoPlay onTimeUpdate={handleTimeUpDate} onEnded={handleEnded} />
          </>
        )}
        {showPanel && <AppPlayPanel />}
      </AppPlayerWrapper>
    </>
  )
}

export default memo(AppPlayer)
