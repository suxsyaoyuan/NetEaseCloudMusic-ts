import React, { memo } from 'react'
import type { ReactNode } from 'react'
import { Headerv2 } from './style'
import { Link } from 'react-router-dom'

interface IProps {
  children?: ReactNode
  title?: string
  keywords?: string[]
  moreText?: string
  moreLink?: string
}

const AreaHeaderv2: React.FC<IProps> = (props) => {
  const { title = '默认标题', moreText = '更多', moreLink = '/' } = props
  return (
    <Headerv2 className="header">
      <h3 className="title">{title}</h3>
      <Link className="more" to={moreLink}>
        {moreText}
      </Link>
    </Headerv2>
  )
}

export default memo(AreaHeaderv2)
