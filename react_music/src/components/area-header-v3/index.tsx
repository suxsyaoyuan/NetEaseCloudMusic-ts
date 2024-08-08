import React, { memo } from 'react'
import type { ReactNode } from 'react'
import { Headerv3 } from './style'
import { Link } from 'react-router-dom'

interface IProps {
  children?: ReactNode
  title?: string
  keywords?: string[]
  moreText?: string
  moreLink?: string
}

const AreaHeaderv3: React.FC<IProps> = (props) => {
  const { title = '默认标题', moreText = '更多', moreLink = '/' } = props
  return (
    <Headerv3 className="header">
      <h3 className="title">{title}</h3>
      <Link className="more" to={moreLink}>
        {moreText}
      </Link>
    </Headerv3>
  )
}

export default memo(AreaHeaderv3)
