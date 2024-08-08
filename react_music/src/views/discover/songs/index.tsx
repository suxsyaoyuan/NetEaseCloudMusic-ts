// Songs.tsx
import React, { memo } from 'react'
import type { ReactNode } from 'react'
import { SongsWrapper } from './style'
import HeaderSong from '@/views/discover/songs/songs-header'
import SongsList from '@/views/discover/songs/songs-list'

interface IProps {
  children?: ReactNode
}

const Songs: React.FC<IProps> = () => {
  return (
    <SongsWrapper className="Songs-box wrap-v3">
      <HeaderSong />
      <SongsList />
    </SongsWrapper>
  )
}

export default memo(Songs)
