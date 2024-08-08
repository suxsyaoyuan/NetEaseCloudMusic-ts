import React, { memo } from 'react'
import type { ReactNode } from 'react'
import { SignedArtistWrapper } from './style'
import AreaHeaderv2 from '@/components/area-header-v2'
import { AppShallowEqual, useAppSelector } from '@/hooks/store'
import { getSizeImage } from '@/utils/format'

interface IProps {
  children?: ReactNode
}

const SignedArtist: React.FC<IProps> = () => {
  const { settleSingers } = useAppSelector(
    (state) => ({
      settleSingers: state.recommend.settleSingers
    }),
    AppShallowEqual
  )
  return (
    <SignedArtistWrapper className="signedartist-box">
      <AreaHeaderv2 title="入驻歌手" moreText="查看全部 &gt;" moreLink="/discover/artist" />
      <ul className="list">
        {settleSingers.map((item: any) => {
          return (
            <li key={item.id}>
              <a href="#" className="item">
                <img src={getSizeImage(item.picUrl, 62)} alt="" />
                <div className="info">
                  <h4 className="name">{item.name}</h4>
                  <div className="alias">{item.alias.join(' ')}</div>
                </div>
              </a>
            </li>
          )
        })}
      </ul>
      <div className="apply">
        <a href="/abc">申请成为网易音乐人</a>
      </div>
    </SignedArtistWrapper>
  )
}

export default memo(SignedArtist)
