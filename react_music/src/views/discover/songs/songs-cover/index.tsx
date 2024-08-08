import React, { memo } from 'react'
import { getSizeImage, getCount } from '@/utils/format'
import { SongsCoverWrapper } from './style'

interface Props {
  info: {
    picUrl: string
    coverImgUrl: string
    playCount: number
    name: string
    creator?: {
      nickname: string
    }
    copywriter?: string
    id?: string
  }
}

const SongsCover: React.FC<Props> = (props) => {
  const { info } = props
  const creator = info && info.creator && info.creator.nickname
  const create = info.copywriter || creator
  const id = info && info.id
  const playCount = info && info.playCount

  return (
    <SongsCoverWrapper rel="noopener noreferrer" href={`#/discover/playlist?id=${id}`}>
      <div className="cover-top">
        <img src={getSizeImage(info?.picUrl || info?.coverImgUrl, 140)} alt="" />
        <div className="cover sprite_cover">
          <div className="info sprite_cover">
            <span>
              <i className="sprite_icon erji"></i>
              {getCount(playCount)}
            </span>
            <i className="sprite_icon play"></i>
          </div>
        </div>
      </div>
      <div className="cover-bottom text-nowrap">{info.name}</div>
      <div className="cover-source text-nowrap">by {create}</div>
    </SongsCoverWrapper>
  )
}

export default memo(SongsCover)
