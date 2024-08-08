import React, { memo } from 'react'
import type { ReactNode } from 'react'
import { ArtistListWrapper } from './style'
import { AppShallowEqual, useAppSelector } from '@/hooks'
import Headerv4 from '@/components/area-header-v4'
// import ArtistCardv2 from '../artist-card-v22'
import ArtistCard from '../artist-card-v11'
// import { Divider } from 'antd'

interface IProps {
  children?: ReactNode
}

const ArtistList: React.FC<IProps> = () => {
  const { artistList, artistheader } = useAppSelector(
    (state) => ({
      artistList: state.artist.artistList,
      artistheader: state.artist.artistheader
    }),
    AppShallowEqual
  )
  // 默认的推荐歌手标题
  const defaultHeader = '推荐歌手'

  return (
    <ArtistListWrapper className="artist">
      <Headerv4 title={artistheader || defaultHeader} moreText="更多 &gt;" />
      <div className="content">
        {artistList &&
          artistList.map((item, index) => {
            return <ArtistCard key={index} info={item} />
          })}
      </div>
      {/* <Divider dashed /> */}
    </ArtistListWrapper>
  )
}

export default memo(ArtistList)
