import React, { memo, useState } from 'react'
import { NaAllWrapper } from './style'
import { AppShallowEqual, useAppSelector, useAppDispatch } from '@/hooks'
import NewAlbumItem from '../newalbum-item'
import NAPagination from '../newalbum-pagination'
import { fetchAllAlbum } from '@/store/modules/newalbum'
import AreaHeaderv4 from '@/components/area-header-v4'

const NewAlbumAll: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1)
  // topAlbum
  const { allAlbum, totalAlbum } = useAppSelector(
    (state) => ({
      allAlbum: state.newalbum.allAlbum,
      totalAlbum: state.newalbum.totalAlbum
    }),
    AppShallowEqual
  )

  const dispatch = useAppDispatch()
  const changePage = (page: number) => {
    setCurrentPage(page)
    dispatch(fetchAllAlbum(page))
  }

  return (
    <NaAllWrapper>
      <AreaHeaderv4
        title="全部新碟"
        keywords={['全部', '华语', '欧美', '韩国', '日本']}
        moreText=""
      />
      <div className="album-list">
        {allAlbum &&
          allAlbum.map((item: any, index: any) => {
            return <NewAlbumItem key={index} info={item} />
          })}
      </div>
      <div className="pageNation">
        {/* 分页 */}
        <NAPagination
          currentPage={currentPage}
          pageSize={40}
          total={totalAlbum}
          onPageChange={(currentPage) => changePage(currentPage)}
        />
      </div>
    </NaAllWrapper>
  )
}

export default memo(NewAlbumAll)
