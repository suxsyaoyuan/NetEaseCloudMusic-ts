import React, { memo } from 'react'
import { getSizeImage } from '@/utils/format' // 获取图像大小的工具
import { NewAlbumWrapper } from './style' // 引入组件的样式

interface Props {
  info: {
    picUrl: string // 专辑封面图片 URL
    id: string // 专辑 ID
    name: string // 专辑名称
    artist: {
      name: string // 艺术家名称
    } | null // 艺术家可能为空
    ar?: {
      // 可选的艺术家列表
      id: string
      name: string
    }[]
  }
}

const NewAlbumItem: React.FC<Props> = (props) => {
  const { info } = props

  return (
    <NewAlbumWrapper>
      <div className="album-image">
        <img src={getSizeImage(info.picUrl, 130)} alt="" />
        <a
          rel="noopener noreferrer"
          href={`#/discover/album/detail?id=${info.id}`}
          className="cover image_cover"
        ></a>
        <div className="play sprite_icon"></div>
      </div>
      <div className="album-info">
        <div className="name text-nowrap">{info.name}</div>
        {info.artist && (
          <div className="artist text-nowrap">
            {info.artist.name ||
              info?.ar?.map((item) => {
                return <span key={item.id}>{item.name}</span>
              })}
          </div>
        )}
      </div>
    </NewAlbumWrapper>
  )
}

export default memo(NewAlbumItem)
