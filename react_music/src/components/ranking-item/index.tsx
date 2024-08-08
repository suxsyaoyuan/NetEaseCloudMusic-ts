import React, { memo } from 'react'
import type { ReactNode } from 'react'
import { RankingListItemWrapper } from './style'
import { getSizeImage } from '@/utils/format'
import { useAppDispatch } from '@/hooks'
import { fetchCurrentSongAction } from '@/store/modules/player'

interface IProps {
  children?: ReactNode
  itemData: any
}

const RankingListItem: React.FC<IProps> = (props) => {
  const { itemData } = props //从props获取
  const { tracks = [] } = itemData

  const dispatch = useAppDispatch()
  function handlePlay(id: number) {
    dispatch(fetchCurrentSongAction(id))
  }

  return (
    <RankingListItemWrapper className="RankingListItem-box">
      <div className="top">
        <div className="image">
          <img src={getSizeImage(itemData.coverImgUrl, 80)} alt="" />
          <a href="#" className="sprite_cover"></a>
        </div>
        <div className="desc">
          <h3 className="name">{itemData.name}</h3>
          <div className="icon">
            <button className="btn play sprite_02">播放</button>
            <button className="btn favor sprite_02">收藏</button>
          </div>
        </div>
      </div>
      <div className="list">
        {tracks?.slice(0, 10).map((item: any, index: number) => {
          return (
            <ul className="list-item" key={item.id}>
              <li className="index">{index + 1}</li>
              <li className="info">
                <li className="name">{item.name}</li>
                <li className="operate">
                  <button className="btn play sprite_02" onClick={() => handlePlay(item.id)}>
                    播放
                  </button>
                  <button className="btn add sprite_icon2">添加</button>
                  <button className="btn favor sprite_02">收藏</button>
                </li>
              </li>
            </ul>
          )
        })}
      </div>
      <div className="footer">
        <a href="#/discover/ranking">查看全部 &gt;</a>
      </div>
    </RankingListItemWrapper>
  )
}

export default memo(RankingListItem)
