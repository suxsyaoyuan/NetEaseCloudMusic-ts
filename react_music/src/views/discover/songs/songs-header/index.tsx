import React, { memo, useState } from 'react'
import type { ReactNode } from 'react'
import { HeaderSong } from './style'
import SongsCategory from '../songs-category'

interface IProps {
  children?: ReactNode
}

const AreaHeaderSong: React.FC<IProps> = () => {
  const [showCategory, setShowCategory] = useState(false)

  return (
    <HeaderSong className="header">
      <div className="left">
        <h3 className="title">全部</h3>
        <a className="select" onClick={() => setShowCategory(!showCategory)}>
          <span>
            选择分类
            <em className="icon"></em>
          </span>
        </a>
        {showCategory ? <SongsCategory /> : null}
      </div>
      <div className="right btn">
        <a className="hot" href="#">
          热门
        </a>
      </div>
    </HeaderSong>
  )
}

export default memo(AreaHeaderSong)
