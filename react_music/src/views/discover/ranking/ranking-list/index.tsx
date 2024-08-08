import React, { memo } from 'react'
import type { ReactNode } from 'react'
import { RankingListWrapper } from './style'
import SongHeader from '../song-header'
import { AppShallowEqual, useAppSelector } from '@/hooks'
import { formatTimeToMinute, getSizeImage } from '@/utils/format'

interface IProps {
  children?: ReactNode
}

const RankingList: React.FC<IProps> = () => {
  const { rankingdetail } = useAppSelector(
    (state) => ({
      rankingdetail: state.ranking.rankingdetail
    }),
    AppShallowEqual
  )

  const { tracks } = rankingdetail.tracks || []

  return (
    <RankingListWrapper className="RankingList-box">
      <SongHeader />
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
          <tbody>
            {tracks &&
              tracks.map((item: any, index: any) => {
                return (
                  <tr className="" key={item.id}>
                    <td>
                      <div className="rank-num">
                        <span className="num">{index + 1}</span>
                        <span className="new sprite_icon2"></span>
                      </div>
                    </td>
                    <td>
                      <div className="song-name">
                        {index < 3 ? <img src={getSizeImage(item.al.picUrl, 50)} alt="" /> : null}
                        <span className="play sprite_table"></span>
                        <span className="name">{item.name}</span>
                      </div>
                    </td>
                    <td>{formatTimeToMinute(item.dt)}</td>
                    <td>{item.ar[0].name}</td>
                  </tr>
                )
              })}
          </tbody>
        </table>
      </div>
    </RankingListWrapper>
  )
}

export default memo(RankingList)
