import React, { memo, useEffect } from 'react'
import type { ReactNode } from 'react'
import { LeftRankingWrapper } from './style'
import classNames from 'classnames'
import { AppShallowEqual, useAppDispatch, useAppSelector } from '@/hooks/store'
import { getSizeImage } from '@/utils/format'
import { changeCurrentIndexAction, getTops } from '@/store/modules/ranking'

interface IProps {
  children?: ReactNode
}

const LeftRanking: React.FC<IProps> = () => {
  const { leftlist, currentIndex } = useAppSelector(
    (state) => ({
      leftlist: state.ranking.leftlist,
      currentIndex: state.ranking.currentIndex
    }),
    AppShallowEqual
  )
  const dispatch = useAppDispatch()

  // hooks
  useEffect(() => {
    const id = leftlist[currentIndex] && leftlist[currentIndex].id
    if (!id) return
    dispatch(getTops(id))
  }, [leftlist, dispatch, currentIndex])

  // handle function
  const hanldeItemClick = (index: number) => {
    dispatch(changeCurrentIndexAction(index))
    const id = leftlist[currentIndex].id
    dispatch(getTops(id))
  }

  return (
    <LeftRankingWrapper className="LeftRanking-box">
      {leftlist.map((item: any, index: number) => {
        return (
          <div key={item.id}>
            {(index === 0 || index === 4) && (
              <div className="header">{index === 0 ? '云音乐特色榜' : '全球媒体榜'}</div>
            )}
            <ul
              className={classNames('item', { active: index === currentIndex })}
              onClick={() => hanldeItemClick(index)}
            >
              <li>
                <img src={getSizeImage(item.coverImgUrl, 40)} alt="" />
                <div className="info">
                  <h4 className="name">{item.name}</h4>
                  <div className="update">{item.updateFrequency}</div>
                </div>
              </li>
            </ul>
          </div>
        )
      })}
    </LeftRankingWrapper>
  )
}

export default memo(LeftRanking)
