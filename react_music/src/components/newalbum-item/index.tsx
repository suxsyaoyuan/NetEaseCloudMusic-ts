import React, { memo } from 'react'
import type { ReactNode } from 'react'
import { AlbumItemBox } from './style'
import { getSizeImage } from '@/utils/format'

interface IProps {
  children?: ReactNode
  itemData: any
}

const AlbumItem: React.FC<IProps> = (props) => {
  const { itemData } = props
  return (
    <AlbumItemBox className="Albumitem">
      <div className="top">
        <div className="cover sprite_cover"></div>
        <img src={getSizeImage(itemData.picUrl, 100)} alt="" />
        {/* <div className="cover-bottom recommend-top-bg"></div> */}
        <a className="play sprite_icon"></a>
      </div>
      <div className="info">
        <div className="name">{itemData.name}</div>
        <div className="artist-name">{itemData.artist.name}</div>
      </div>
    </AlbumItemBox>
  )
}

export default memo(AlbumItem)
