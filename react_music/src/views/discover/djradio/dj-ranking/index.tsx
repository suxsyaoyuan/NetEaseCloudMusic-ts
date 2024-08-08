import React, { memo } from 'react'
import type { ReactNode } from 'react'
import { ProgressRankingWrapper } from './style'
import AreaHeaderv4 from '@/components/area-header-v4'
import SongItemv1 from '@/components/song-item'

// import { AppShallowEqual, useAppSelector } from '@/hooks/store'

interface IProps {
  children?: ReactNode
}

const ProgressRanking: React.FC<IProps> = () => {
  // const { ProgressRankings } = useAppSelector(
  //   (state) => ({
  //     ProgressRankings: state.recommend.ProgressRankings
  //   }),
  //   AppShallowEqual
  // )
  return (
    <ProgressRankingWrapper className="ProgressRanking-box">
      <AreaHeaderv4 title="节目排行榜" moreText="更多 &gt;" moreLink="/discover/djradio" />
      <div className="content">
        {[]?.map((item: any) => {
          return (
            <div className="item" key={item.id}>
              <SongItemv1 itemData={item} />
              {/* 把数据传过去 SongItemv1接收属性*/}
            </div>
          )
        })}
      </div>
    </ProgressRankingWrapper>
  )
}

export default memo(ProgressRanking)
