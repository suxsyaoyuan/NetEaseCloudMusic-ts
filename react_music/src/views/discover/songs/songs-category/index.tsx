import React, { memo } from 'react'
import type { ReactNode } from 'react'
import { useAppDispatch } from '@/hooks/store'
import { AppShallowEqual, useAppSelector } from '@/hooks'
import { CategoryWrapper } from './style'
import { setCurrentCategory, getSongList } from '@/store/modules/songs'

interface IProps {
  children?: ReactNode
  // itemData: any
}

const SongsCategory: React.FC<IProps> = () => {
  // const { itemData } = props
  const { category } = useAppSelector(
    (state) => ({
      category: state.songs.category
    }),
    AppShallowEqual
  )
  // console.log(category)

  const dispatch = useAppDispatch()
  function selectCategory(name: any) {
    dispatch(setCurrentCategory(name))
    dispatch(getSongList(0))
  }

  return (
    <CategoryWrapper>
      <div className="arrow sprite_icon"></div>
      <h3 className="top">
        <a className="link" onClick={() => selectCategory('全部')}>
          <span>全部风格</span>
        </a>
      </h3>
      <div className="category">
        {category.map((item, index) => {
          return (
            <dl key={item.name} className={'item' + index}>
              <dt>
                <i className="icon sprite_icon2"></i>
                <span>{item.name}</span>
              </dt>
              <dd>
                {item.subs.map((sItem: { name: any }) => {
                  return (
                    <div
                      className="item"
                      key={sItem.name}
                      onClick={() => selectCategory(sItem.name)}
                    >
                      <span className="link">{sItem.name}</span>
                      <span className="divider">|</span>
                    </div>
                  )
                })}
              </dd>
            </dl>
          )
        })}
      </div>
    </CategoryWrapper>
  )
}

export default memo(SongsCategory)
