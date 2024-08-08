import React, { memo } from 'react'
import type { ReactNode } from 'react'
import { RankingListWrapper } from './style'
import AreaHeaderv1 from '@/components/area-header-v1'
import { AppShallowEqual, useAppSelector } from '@/hooks/store'
import RankingListItem from '@/components/ranking-item'

interface IProps {
  children?: ReactNode
}

const RankingList: React.FC<IProps> = () => {
  /* 获取数据 */
  const { ranking } = useAppSelector(
    (state) => ({
      ranking: state.recommend.allRankingData
    }),
    AppShallowEqual
  )

  return (
    <RankingListWrapper className="RankingList-box">
      <AreaHeaderv1 title="榜单" moreLink="/discover/ranking" />
      <div className="content">
        {ranking?.map((item) => {
          return <RankingListItem key={item.id} itemData={item} />
        })}
      </div>
    </RankingListWrapper>
  )
}

export default memo(RankingList)
