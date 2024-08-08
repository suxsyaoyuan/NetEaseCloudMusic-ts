import React, { memo, useEffect, useState, useCallback } from 'react'
import type { ReactNode } from 'react'
import { ArtistCategoryWrapper } from './style'
import { useAppDispatch } from '@/hooks/store'
import { getArtistCategoryAction, getArtistHeaderAction } from '@/store/modules/artist'
import { NavLink } from 'react-router-dom'
import { getQueryObject } from '@/utils/format'
import { singerCategories } from '@/assets/data/local-data'

interface IProps {
  children?: ReactNode
}

const ArtistCategory: React.FC<IProps> = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { type, area } = getQueryObject()
  const dispatch = useAppDispatch()
  useEffect(() => {
    //   默认获取的信息
    const params = {
      limit: 100,
      offset: 0,
      type,
      area,
      initial: '-1' // 如果这是一个常量，可以直接传递
    }
    dispatch(getArtistCategoryAction(params))
  }, [dispatch, type, area])

  const clickItem = useCallback(
    (id: number, name: any) => {
      if (id !== currentIndex) {
        setCurrentIndex(id)
      }
      const params = {
        limit: 100,
        offset: 0,
        type,
        area,
        initial: '-1' // 同样确保传递对象
      }
      dispatch(getArtistCategoryAction(params))
      dispatch(getArtistHeaderAction(name))
    },
    [currentIndex, dispatch, type, area]
  )

  return (
    <ArtistCategoryWrapper>
      {singerCategories &&
        singerCategories.map((item, index) => {
          return (
            <div className="content" key={index}>
              <div className="header">{item.title}</div>
              {item &&
                item.artists.map((items, index) => {
                  return (
                    <NavLink
                      to={`/discover/artist?type=${items.type}&area=${item.area}`}
                      key={index}
                      className="link"
                    >
                      <div
                        className={'tag singer ' + (items.id === currentIndex ? 'bgc' : '')}
                        onClick={() => clickItem(items.id ?? 0, items.name)}
                      >
                        {items.name}
                      </div>
                    </NavLink>
                  )
                })}
            </div>
          )
        })}
    </ArtistCategoryWrapper>
  )
}

export default memo(ArtistCategory)
