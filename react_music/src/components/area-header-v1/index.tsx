import React, { memo } from 'react'
import type { ReactNode } from 'react'
import { Headerv1 } from './style'
import { Link } from 'react-router-dom'

interface IProps {
  children?: ReactNode
  title?: string
  keywords?: string[]
  moreText?: string
  moreLink?: string
}

const AreaHeaderv1: React.FC<IProps> = (props) => {
  const { title = '默认标题', keywords = [], moreText = '更多', moreLink = '/' } = props
  return (
    <Headerv1 className="header sprite_02">
      <div className="left">
        <h3 className="title">{title}</h3>
        <div className="tab">
          {keywords.map((item) => {
            return (
              <div className="item" key={item}>
                <span className="text">{item}</span>
                <span className="line">|</span>
                {/* {index < keywords.length - 1 && <span className="line">|</span>} */}
              </div>
            )
          })}
        </div>
      </div>
      <div className="right">
        <Link className="more" to={moreLink}>
          {moreText}
        </Link>
        <i className="icon sprite_02"></i>
      </div>
    </Headerv1>
  )
}

export default memo(AreaHeaderv1)
