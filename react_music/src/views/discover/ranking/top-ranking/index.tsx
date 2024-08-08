import React, { memo } from 'react'
import type { ReactNode } from 'react'
import { TopRankingWrapper } from './style'
import { AppShallowEqual, useAppSelector } from '@/hooks'
import { formatMonthDay } from '@/utils/format'
import SongOperationBar from '../operation-bar'

interface IProps {
  children?: ReactNode
}

const TopRanking: React.FC<IProps> = () => {
  const { rankingdetail } = useAppSelector(
    (state) => ({
      rankingdetail: state.ranking.rankingdetail
    }),
    AppShallowEqual
  )

  return (
    <TopRankingWrapper className="TopRanking-box">
      <div className="image">
        <img src={rankingdetail.coverImgUrl} alt="" />
        <span className="image_cover">封面</span>
      </div>
      <div className="info">
        <div className="title">{rankingdetail?.name}</div>
        <div className="time">
          <i className="clock sprite_icon2"></i>
          <div>最近更新：</div>
          {formatMonthDay(rankingdetail?.updateTime)}
          <div className="update-f">({'每日更新:TODO'})</div>
        </div>
        <SongOperationBar
          favorTitle={`(${rankingdetail.subscribedCount})`}
          shareTitle={`(${rankingdetail.shareCount})`}
          downloadTitle="下载"
          commentTitle={`(${rankingdetail.commentCount})`}
        />
      </div>
    </TopRankingWrapper>
  )
}

export default memo(TopRanking)
