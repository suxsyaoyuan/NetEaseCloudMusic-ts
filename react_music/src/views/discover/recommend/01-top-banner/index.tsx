import { useAppSelector, AppShallowEqual } from '@/hooks/store'
import React, { memo, useCallback, useRef, useState } from 'react'
import type { ReactNode, ElementRef } from 'react'
import { Carousel } from 'antd'
import classNames from 'classnames'

import { TopBannerWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const TopBanner: React.FC<IProps> = () => {
  /* 从store中获取数据 */
  const { banners } = useAppSelector(
    (state) => ({
      banners: state.recommend.banners
    }),
    AppShallowEqual
  )

  const [currentIndex, setCurrentIndex] = useState(0)
  /* 如果ref绑定的是组件 组件类型用ElementRef
  定义内部数据 初始化为null 不能undefined */
  const bannerRef = useRef<ElementRef<typeof Carousel>>(null)

  /* 事件处理函数 */
  const handleBeforeChange = useCallback((current: number, next: number) => {
    setTimeout(() => {
      setCurrentIndex(next)
    }, 0)
    // setCurrentIndex(-1)
  }, [])

  function handleAfterChange(current: number) {
    setCurrentIndex(current)
  }

  /* 获取背景图片 */
  const bgImgUrl =
    banners?.[currentIndex] && banners?.[currentIndex].imageUrl + '?imageView&blur=40x20&quot'

  function handlePreClick() {
    bannerRef.current?.prev()
  }
  function handleNextClick() {
    bannerRef.current?.next()
  }

  // 处理点击dot事件
  const handleDotClick = (index: number) => {
    bannerRef.current?.goTo(index, false)
  }

  return (
    <TopBannerWrapper
      className="banner-box"
      style={{ background: `url('${bgImgUrl}') center center / 6000px` }}
    >
      <div className="banner wrap-v2">
        <div className="banner-left">
          {/* effect='fade' 轮播图淡入淡出 */}
          <Carousel
            autoplay
            autoplaySpeed={2000}
            ref={bannerRef}
            effect="fade"
            beforeChange={handleBeforeChange}
            afterChange={handleAfterChange}
            dots={false}
          >
            {/* ref绑定了组件 需要指定类型 */}
            {banners.map((item) => {
              return (
                <div className="item" key={item.imageUrl}>
                  <img className="image" src={item.imageUrl} alt={item.typeTitle} />
                </div>
              )
            })}
          </Carousel>
          <ul className="dots">
            {banners &&
              banners.map((item, index) => {
                return (
                  <li key={item.imageUrl}>
                    <span
                      className={classNames('dots-item', { active: index === currentIndex })}
                      key={item.imageUrl}
                      onClick={() => handleDotClick(index)}
                    ></span>
                  </li>
                )
              })}
          </ul>
        </div>
        <div className="banner-right">
          <a href={'https://music.163.com/#/download'} rel="noreferrer" target="_blank"></a>
        </div>
        <div className="banner-button">
          <button className="btn btn-left" onClick={handlePreClick}></button>
          <button className="btn btn-right" onClick={handleNextClick}></button>
        </div>
      </div>
    </TopBannerWrapper>
  )
}
export default memo(TopBanner)
