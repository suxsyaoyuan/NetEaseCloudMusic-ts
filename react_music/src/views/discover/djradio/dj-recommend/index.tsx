import React, { memo, useEffect } from 'react'
import type { ReactNode } from 'react'
import { ProgramRecommendWrapper } from './style'
import AreaHeaderv4 from '@/components/area-header-v4'
import { AppShallowEqual, useAppSelector } from '@/hooks/store'
import { useAppDispatch } from '@/hooks/store'
import { getRadioRecommend } from '@/store/modules/djradio'

interface IProps {
  children?: ReactNode
}

const ProgramRecommend: React.FC<IProps> = () => {
  const { currentId, recommends } = useAppSelector(
    (state) => ({
      recommends: state.djradio.recommends,
      currentId: state.djradio.currentId
    }),
    AppShallowEqual
  )

  // hooks
  const dispatch = useAppDispatch()
  useEffect(() => {
    if (currentId === 0) return
    dispatch(getRadioRecommend())
  }, [dispatch, currentId])

  // console.log(recommends)

  return (
    <ProgramRecommendWrapper className="ProgramRecommend-box">
      <AreaHeaderv4 title="推荐节目" moreText="更多 &gt;" moreLink="/discover/djradio" />
      <div className="content">
        {Array.isArray(recommends) &&
          recommends?.map((item: any) => {
            return (
              <ul className="list" key={item.id}>
                <li className="item">
                  <img className="img"></img>
                  <div className="info">
                    <h4 className="title">{item.title}</h4>
                    <h4 className="desc">{item.desc}</h4>
                  </div>
                  <div className="blog">
                    <a href="#/discover/ranking">音乐播客</a>
                  </div>
                </li>
              </ul>
            )
          })}
      </div>
    </ProgramRecommendWrapper>
  )
}
// return (
//   <div className="item" key={item.id}>
//     <SongItemv1 itemData={item} />
//     {/* 把数据传过去 SongItemv1接收属性*/}
//   </div>
// )

export default memo(ProgramRecommend)
