import React, { memo } from 'react'

import { AlbumDetailWrapper } from './style'
import AlbumHeader from './album-header'
// import AlbumMain from "./album-main";
// import AlbumRight from "./album-right";

const AlbumDetail: React.FC = () => {
  return (
    <AlbumDetailWrapper className="wrap-v2 wrap-back">
      <div className="left wrap-v3">
        <AlbumHeader />
        {/* <AlbumMain /> */}
      </div>
      <div className="right wrap-v4">{/* <AlbumRight /> */}</div>
    </AlbumDetailWrapper>
  )
}
export default memo(AlbumDetail)
