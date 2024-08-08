import React, { memo } from 'react'
import type { ReactNode } from 'react'
import { Headerv4 } from './style'
import { Link } from 'react-router-dom'

interface IProps {
  children?: ReactNode
  title?: string
  keywords?: string[]
  moreText?: string
  moreLink?: string
}

const AreaHeaderv4: React.FC<IProps> = (props) => {
  const { title = '默认标题', keywords = [], moreText = '更多 &gt;', moreLink = '/' } = props
  return (
    <Headerv4 className="header">
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
      </div>
    </Headerv4>
  )
}

export default memo(AreaHeaderv4)
