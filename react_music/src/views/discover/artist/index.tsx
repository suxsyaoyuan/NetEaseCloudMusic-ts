import React, { memo } from 'react'
import type { ReactNode } from 'react'
import { ArtistWrapper } from './style'
import ArtistCategory from './artist-category'
import ArtistList from './artist-list'

interface IProps {
  children?: ReactNode
}

const ArtistBox: React.FC<IProps> = () => {
  return (
    <ArtistWrapper className="artist-box wrap-v2">
      <ArtistCategory />
      <ArtistList />
    </ArtistWrapper>
  )
}

export default memo(ArtistBox)
