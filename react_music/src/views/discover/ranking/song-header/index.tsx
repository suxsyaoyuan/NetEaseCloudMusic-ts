import React from 'react'
import { AppShallowEqual, useAppSelector } from '@/hooks'
import { HeaderWrapper } from './style'
import { memo } from 'react'

export default memo(function SongHeader() {
  const { rankingdetail } = useAppSelector(
    (state) => ({
      rankingdetail: state.ranking.rankingdetail
    }),
    AppShallowEqual
  )

  return (
    <HeaderWrapper>
      <div className="left">
        <h3 className="title">歌曲列表</h3>
        <div className="count">{rankingdetail.trackCount}首歌</div>
      </div>
      <div className="right">
        <span>播放：</span>
        <span className="count">{rankingdetail.playCount}</span>
        <span>次</span>
      </div>
    </HeaderWrapper>
  )
})
