import React, { memo } from 'react'
import type { ReactNode } from 'react'
import { HotDjWrapper } from './style'
import AreaHeaderV2 from '@/components/area-header-v2'
import { AppShallowEqual, useAppSelector } from '@/hooks/store'
import { getSizeImage } from '@/utils/format'

interface IProps {
  children?: ReactNode
}

const HotDj: React.FC<IProps> = () => {
  const { settleSingers } = useAppSelector(
    (state) => ({
      settleSingers: state.recommend.settleSingers
    }),
    AppShallowEqual
  )
  return (
    <HotDjWrapper className="HotDj-box">
      <AreaHeaderV2 title="热门主播" moreText="" moreLink="/discover/djradio" />
      <ul className="list">
        {settleSingers.map((item: any) => {
          return (
            <li key={item.id}>
              <a href="#" className="item">
                <img src={getSizeImage(item.picUrl, 40)} alt="" />
                <div className="info">
                  <h4 className="name">{item.name}</h4>
                  <div className="alias">{item.alias.join(' ')}</div>
                </div>
              </a>
            </li>
          )
        })}
      </ul>
    </HotDjWrapper>
  )
}

export default memo(HotDj)
