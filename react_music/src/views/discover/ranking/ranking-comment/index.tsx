import React, { memo } from 'react'
import type { ReactNode } from 'react'
import { RankingListWrapper } from './style'
import AreaHeaderv4 from '@/components/area-header-v4'
// import SongItemv1 from '@/components/song-item-v1'
// import { AppShallowEqual, useAppSelector } from '@/hooks'
// import { formatTimeToMinute, getSizeImage } from '@/utils/format'

interface IProps {
  children?: ReactNode
}

const RankingList: React.FC<IProps> = () => {
  // const { rankingdetail } = useAppSelector(
  //   (state) => ({
  //     rankingdetail: state.ranking.rankingdetail
  //   }),
  //   AppShallowEqual
  // )

  return (
    <RankingListWrapper className="RankingList-box">
      <AreaHeaderv4
        title="歌曲列表"
        keywords={['100首歌']}
        moreLink="/discover/songs"
        moreText="播放：5806027776次"
      />
      <div className="play-list">
        <table>
          <thead>
            <tr className="header">
              <th className="ranking"></th>
              <th className="title">标题</th>
              <th className="duration">时长</th>
              <th className="singer">歌手</th>
            </tr>
          </thead>
        </table>
      </div>
      <AreaHeaderv4 title="评论" keywords={['共220491条评论']} moreLink="/discover/songs" />
    </RankingListWrapper>
  )
}

export default memo(RankingList)
