import React, { memo, useEffect } from 'react'
import type { ReactNode } from 'react'
import { NewalbumWrapper } from './style'
import HotAlbum from './newalbum-hot'
import NewAlbumAll from './newalbum-all'
import { useAppDispatch } from '@/hooks/store'
import { getHotNewAlbum, fetchAllAlbum } from '@/store/modules/newalbum'

interface IProps {
  children?: ReactNode
}

const Newalbum: React.FC<IProps> = () => {
  /* 发起action（获取数据）
  确保在组件加载后立即获取数据 从而解决了可能的数据获取延迟或异步操作未执行的问题 */
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getHotNewAlbum())
    dispatch(fetchAllAlbum(1))
  }, [])

  return (
    <NewalbumWrapper className="Newalbum-box wrap-v2">
      <HotAlbum />
      <NewAlbumAll />
    </NewalbumWrapper>
  )
}

export default memo(Newalbum)
