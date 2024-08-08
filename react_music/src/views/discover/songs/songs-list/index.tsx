// SongsList.tsx
import React, { useState, useEffect, memo } from 'react'
import { SongsListWrapper } from './style'
import { AppShallowEqual, useAppSelector } from '@/hooks'
import { useAppDispatch } from '@/hooks/store'
import { useLocation } from 'react-router-dom' // 引入路由钩子
import { getQueryObject } from '@/utils/format'
import SongsCover from '@/views/discover/songs/songs-cover'
import SongsPagination from '@/views/discover/songs/songs-pagination'
import { getSongList } from '@/store/modules/songs'
import { Skeleton } from 'antd'

const SongsList: React.FC = () => {
  const location = useLocation()
  const { albumName } = getQueryObject(location.search)

  const [currentPage, setCurrentPage] = useState(1)

  const { categorySongs } = useAppSelector(
    (state) => ({
      categorySongs: state.songs.categorySongs
    }),
    AppShallowEqual
  )

  const songList = categorySongs.playlists || []
  const total = categorySongs.total || 0
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getSongList(currentPage))
  }, [currentPage, dispatch, albumName])

  const onPageChange = (page: number) => {
    setCurrentPage(page)
  }

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0)
    }
  }

  return (
    <SongsListWrapper>
      {!songList.length ? (
        <Skeleton active />
      ) : (
        <div className="songs-list">
          {songList.map((item: any) => (
            <SongsCover info={item} key={item.id} />
          ))}
        </div>
      )}
      <SongsPagination
        currentPage={currentPage}
        total={total}
        pageSize={35}
        onPageChange={(page) => {
          onPageChange(page)
          scrollToTop()
        }}
      />
    </SongsListWrapper>
  )
}

export default memo(SongsList)
