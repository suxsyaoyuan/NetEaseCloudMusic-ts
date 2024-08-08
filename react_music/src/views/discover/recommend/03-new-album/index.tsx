import React, { memo, useRef } from 'react'
import type { ReactNode, ElementRef } from 'react'
import { Carousel } from 'antd'
import { NewAblumWrapper } from './style'
import AreaHeaderv1 from '@/components/area-header-v1'
import AlbumItem from '@/components/newalbum-item'
import { AppShallowEqual, useAppSelector } from '@/hooks/store'

interface IProps {
  children?: ReactNode
}

const NewAblum: React.FC<IProps> = () => {
  const bannerRef = useRef<ElementRef<typeof Carousel>>(null)
  /* 获取数据 */
  const { newAlbums } = useAppSelector(
    (state) => ({
      newAlbums: state.recommend.newAlbums
    }),
    AppShallowEqual
  )

  /* 事件处理函数 */
  function handlePreClick() {
    bannerRef.current?.prev()
  }
  function handleNextClick() {
    bannerRef.current?.next()
  }
  return (
    <NewAblumWrapper className="NewAblum-box">
      <AreaHeaderv1 title="新碟上架" moreLink="/discover/newalbum" />
      <div className="content">
        <button className="sprite_02 arrow arrow-left" onClick={handlePreClick}></button>
        <div className="banner">
          <Carousel ref={bannerRef} dots={false} speed={1000}>
            {/* newAlbums有12个数组 0-11 splice (0,5)(5,10) item页码0,1 (item*5,(item+1)*5) */}
            {[0, 1].map((item) => {
              return (
                <div key={item}>
                  {/* 这个组件会自带样式 嵌套一层 */}
                  <div className="album-list">
                    {newAlbums?.slice(item * 5, (item + 1) * 5).map((album) => {
                      return <AlbumItem key={album.id} itemData={album} />
                      /* 把album作为itemData传过去给newalbum-item */
                    })}
                  </div>
                </div>
              )
            })}
          </Carousel>
        </div>
        <button className="sprite_02 arrow arrow-right" onClick={handleNextClick}></button>
      </div>
    </NewAblumWrapper>
  )
}

export default memo(NewAblum)
