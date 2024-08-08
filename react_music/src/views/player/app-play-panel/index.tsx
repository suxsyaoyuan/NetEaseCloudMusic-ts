import LyricPanel from '@/views/player/app-play-panel/lyric-panel'
import PlayHeader from '@/views/player/app-play-panel/play-header'
import PlayList from '@/views/player/app-play-panel/play-list'
import { PlayPanelWrapper } from '@/views/player/app-play-panel/style'
import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const PlayPanel: FC<IProps> = () => {
  return (
    <PlayPanelWrapper>
      <PlayHeader />
      <div className="main">
        <img
          className="image"
          src="https://p4.music.126.net/qeN7o2R3_OTPhghmkctFBQ==/764160591569856.jpg"
          alt=""
        />
        <PlayList />
        <LyricPanel />
      </div>
    </PlayPanelWrapper>
  )
}

export default memo(PlayPanel)
