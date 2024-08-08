import React, { memo } from 'react'
import { ArtistCardWrapper } from './style'
import { getSizeImage } from '@/utils/format'

// 定义预期属性的接口
interface ArtistInfo {
  name: string // 必填属性
  img1v1Url?: string // 可选属性
  picUrl?: string // 可选属性
  id: number // 必填属性
}

interface IProps {
  info: ArtistInfo // 组件需要的属性
}

const ArtistCard: React.FC<IProps> = (props) => {
  const { info } = props
  console.log(info)
  const name = info?.name
  const picUrl = info?.img1v1Url || info?.picUrl || ''
  const id = info?.id
  return (
    <ArtistCardWrapper>
      <a rel="noopener noreferrer" href={`#/discover/artist/detail?id=${id}`}>
        <div className="image">
          <img src={getSizeImage(picUrl, 130)} alt="" />
        </div>
        <div className="info">
          <div className="name">{name}</div>
          <div className="tag sprite_icon2"></div>
        </div>
      </a>
    </ArtistCardWrapper>
  )
}

export default memo(ArtistCard)
