import React, { memo } from 'react'
import type { ReactNode } from 'react'
import { SongItem } from './style'
import { getCount, getSizeImage } from '@/utils/format'

interface IProps {
  children?: ReactNode
  itemData: any
}

const SongItemv1: React.FC<IProps> = (props) => {
  const { itemData } = props
  return (
    <SongItem className="songitem">
      <div className="top">
        <img src={getSizeImage(itemData.picUrl, 140)} alt="" />
        <div className="cover sprite_cover">
          <div className="info sprite_cover">
            <span>
              <i className="headset sprite_icon"></i>
              <span className="count">{getCount(itemData.playCount)}</span>
            </span>
            <i className="play sprite_icon"></i>
          </div>
        </div>
      </div>
      <div className="bottom"> {itemData.name}</div>
    </SongItem>
  )
}

export default memo(SongItemv1)
