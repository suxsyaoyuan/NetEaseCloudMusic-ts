import React, { memo, useEffect } from 'react'
import type { ReactNode } from 'react'
import { useAppDispatch } from '@/hooks/store'
import { getLefts } from '@/store/modules/ranking'
import { RankingWrapper } from './style'
import LeftRanking from './left-ranking'
import TopRanking from './top-ranking'
import RankingList from './ranking-list'

interface IProps {
  children?: ReactNode
}

const Ranking: React.FC<IProps> = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getLefts())
  }, [dispatch])

  return (
    <div className="Ranking-box">
      <RankingWrapper className="Ranking-box-main wrap-v2">
        <div className="ranking-left">
          <LeftRanking />
        </div>
        <div className="ranking-right">
          <TopRanking />
          <RankingList />
        </div>
      </RankingWrapper>
    </div>
  )
}

export default memo(Ranking)
