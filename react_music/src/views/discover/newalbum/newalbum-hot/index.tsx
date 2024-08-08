import React, { memo } from 'react'
import type { ReactNode } from 'react'
import { HotAlbumWrapper } from './style'
import { AppShallowEqual, useAppSelector } from '@/hooks'
import Headerv4 from '@/components/area-header-v4'
import NewAlbumItem from '../newalbum-item'

interface IProps {
  children?: ReactNode
}

const NaHot: React.FC<IProps> = () => {
  const { hotAlbum } = useAppSelector(
    (state) => ({
      hotAlbum: state.newalbum.hotAlbum
    }),
    AppShallowEqual
  )

  return (
    <HotAlbumWrapper className="hotalbum">
      <Headerv4 title="热门新碟" moreText="" />
      <div className="content">
        {hotAlbum &&
          hotAlbum.slice(0, 10).map((item: any, index: any) => {
            // size={130} width={153} bgp="-845px"
            return <NewAlbumItem key={index} info={item} />
          })}
      </div>
    </HotAlbumWrapper>
  )
}

export default memo(NaHot)
