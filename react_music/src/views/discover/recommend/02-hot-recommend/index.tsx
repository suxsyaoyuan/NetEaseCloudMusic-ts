import React, { memo } from 'react'
import type { ReactNode } from 'react'
import { HotRecommendWrapper } from './style'
import AreaHeaderv1 from '@/components/area-header-v1'
import SongItemv1 from '@/components/song-item'
import { AppShallowEqual, useAppSelector } from '@/hooks/store'

interface IProps {
  children?: ReactNode
}

const HotRecommend: React.FC<IProps> = () => {
  const { hotRecommends } = useAppSelector(
    (state) => ({
      hotRecommends: state.recommend.hotRecommends
    }),
    AppShallowEqual
  )

  return (
    <HotRecommendWrapper className="hotrecommend-box">
      <AreaHeaderv1
        title="热门推荐"
        keywords={['华语', '流行', '摇滚', '民谣', '电子']}
        moreLink="/discover/songs"
      />
      <div className="content">
        {hotRecommends?.map((item: any) => {
          return (
            <div className="item" key={item.id}>
              <SongItemv1 itemData={item} />
              {/* SongItemv1接收一个属性 把数据传过去 */}
            </div>
          )
        })}
      </div>
    </HotRecommendWrapper>
  )
}

export default memo(HotRecommend)
