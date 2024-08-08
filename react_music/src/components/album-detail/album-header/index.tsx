import React, { memo, useEffect } from 'react'
import { AppShallowEqual, useAppSelector, useAppDispatch } from '@/hooks'
import { getAlbumDetailAction } from '@/store/modules/newalbumdetail'
import { getQueryObject, formatMonthDay, getSizeImage } from '@/utils'
import { AlbumHeaderWrapper } from './style'
// import ThemeHeaderControl from "@/components/theme-header-control";

const AlbumHeader: React.FC = () => {
  const { albumInfo } = useAppSelector(
    (state) => ({
      albumInfo: state.newalbumdetail.albumInfo
    }),
    AppShallowEqual
  )
  // 假设你要访问的属性都在第一个对象中
  const albumInfoItem = albumInfo && albumInfo[0] // 获取数组中的第一个对象

  // 然后，检查该对象是否存在，以避免在对象为 null 或 undefined 时引发错误
  const name = albumInfoItem && albumInfoItem.name
  const time = albumInfoItem && albumInfoItem.publishTime
  const create = albumInfoItem && albumInfoItem.artist && albumInfoItem.artist.name
  const desc = albumInfoItem && albumInfoItem.description
  const picUrl = albumInfoItem && albumInfoItem.picUrl
  // const company = albumInfo && albumInfo.company

  // 如果你需要访问嵌套在 info 属性中的属性，也需要相应地处理
  // const item = albumInfoItem && albumInfoItem.info
  // const comment = item && item.commentCount
  // const share = item && item.shareCount

  const dispatch = useAppDispatch()
  const { id } = getQueryObject()
  useEffect(() => {
    dispatch(getAlbumDetailAction(id))
  }, [dispatch, id])

  return (
    <AlbumHeaderWrapper>
      <div className="header">
        <div className="image sprite_cover">
          <img src={getSizeImage(picUrl, 177)} alt="" />
        </div>
        <div className="info">
          <div className="tag">
            <div className="icon sprite_icon2"></div>
            <div className="name">{name}</div>
          </div>
          <div className="singer">
            歌手:
            <a
              rel="noopener noreferrer"
              href={`#/discover/artist/detail?id=${3684}`}
              className="link"
            >
              {create}
            </a>
          </div>
          <div className="time">发行时间：{formatMonthDay(time)}</div>
          {/* <div className="compony">发行公司：{compony}</div> */}
          {/* <div className="control">
            <ThemeHeaderControl comment={comment} share={share} />
          </div> */}
        </div>
      </div>
      <div className="desc">
        <div className="title">专辑介绍：</div>
        <div className="text">{desc}</div>
      </div>
    </AlbumHeaderWrapper>
  )
}

export default memo(AlbumHeader)
