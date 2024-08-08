import { useAppDispatch } from '@/hooks/store'
import { fetchPlayListDetailAction, fetchRecommendDataAction } from '@/store/modules/recommend'
import React, { memo, useEffect } from 'react'
import type { ReactNode } from 'react'
import TopBanner from './01-top-banner'
import HotRecommend from './02-hot-recommend'
import NewAblum from './03-new-album'
import RankingList from './04-ranking-list'
import UserLogin from './05-user-login'
import SignedArtist from './06-signed-artist'
import HotDj from './07-hot-dj'

import { RecommendMainWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const Recommend: React.FC<IProps> = () => {
  /* 发起action（获取数据） */
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchRecommendDataAction())
    dispatch(fetchPlayListDetailAction())
  }, [])

  return (
    <div className="recommend-box">
      <TopBanner />
      <RecommendMainWrapper className="recommend-main wrap-v2">
        <div className="recommend-left">
          <HotRecommend />
          <NewAblum />
          <RankingList />
        </div>
        <div className="recommend-right">
          <UserLogin />
          <SignedArtist />
          <HotDj />
        </div>
      </RecommendMainWrapper>
    </div>
  )
}

export default memo(Recommend)
