import React, { memo, useRef, useEffect } from 'react'
import type { ReactNode, ElementRef } from 'react'
import { TopDjradioWrapper } from './style'
import { Carousel } from 'antd'
import { AppShallowEqual, useAppSelector } from '@/hooks/store'
import { useAppDispatch } from '@/hooks/store'
import { getRadioCategories, changeCurrentIdAction } from '@/store/modules/djradio'
import classnames from 'classnames'
import { NavLink } from 'react-router-dom'

interface IProps {
  children?: ReactNode
}

const TopDjradio: React.FC<IProps> = () => {
  /* redux */
  const { categories, currentId } = useAppSelector(
    (state) => ({
      categories: state.djradio.categories,
      currentId: state.djradio.currentId
    }),
    AppShallowEqual
  )

  // hooks
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getRadioCategories())
  }, [dispatch])

  const bannerRef = useRef<ElementRef<typeof Carousel>>(null)
  function handlePreClick() {
    bannerRef.current?.prev()
  }
  function handleNextClick() {
    bannerRef.current?.next()
  }

  return (
    <TopDjradioWrapper className="TopDjradio-box">
      <button className="sprite_02 arrow arrow-left" onClick={handlePreClick}></button>
      <div className="content">
        <div className="banner">
          <Carousel ref={bannerRef} dots={false} speed={1000}>
            {[0, 1].map((item: any) => {
              return (
                <div key={item} className="category-page">
                  {Array.isArray(categories) &&
                    categories.slice(item * 18, (item + 1) * 18).map((item: any) => {
                      return (
                        <div
                          key={item.id}
                          onClick={() => dispatch(changeCurrentIdAction(item.id))}
                          className={classnames('category-item', {
                            active: currentId === item.id
                          })}
                        >
                          <NavLink to={`/discover/djradio?id=${item.id}`}>
                            <div
                              className={'image ' + (item.id === currentId ? 'img' : '')}
                              style={{
                                backgroundImage: 'url(' + item.Image + ')'
                              }}
                            ></div>
                          </NavLink>
                          <div className="name">{item.tag}</div>
                          {/* <div className="image" imgUrl={item.picWebUrl}></div>
                        <span>{item.name}</span> */}
                        </div>
                      )
                    })}
                </div>
              )
            })}
          </Carousel>
        </div>
      </div>
      <button className="sprite_02 arrow arrow-right" onClick={handleNextClick}></button>
    </TopDjradioWrapper>
  )
}

export default memo(TopDjradio)
