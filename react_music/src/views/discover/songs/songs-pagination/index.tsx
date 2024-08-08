import React, { memo } from 'react'
import { Pagination } from 'antd'
import { PaginationWrapper } from './style'

interface IProps {
  currentPage: number
  total: number
  onPageChange: (page: number) => void
  pageSize: number
}

const SongsPagination: React.FC<IProps> = ({ currentPage, total, onPageChange }) => {
  // render function
  function itemRender(current: number, type: string, originalElement: React.ReactNode) {
    if (type === 'prev') {
      return <button className="control prev"> &lt; 上一页</button>
    }
    if (type === 'next') {
      return <button className="control next">上一页 &gt;</button>
    }
    return originalElement
  }

  return (
    <PaginationWrapper>
      <Pagination
        className="pagination"
        size="small"
        current={currentPage}
        defaultCurrent={1}
        total={total}
        pageSize={35}
        showSizeChanger={false}
        itemRender={itemRender}
        onChange={onPageChange}
      />
    </PaginationWrapper>
  )
}

export default memo(SongsPagination)
