import React, { memo } from 'react'
import type { ReactNode } from 'react'

interface IProps {
  children?: ReactNode
  // ReactElement|string|...
}

// FC：FunctionComponent 指定Template为函数组件类型 传入泛型参数 指定props应该有的类型
const Template: React.FC<IProps> = () => {
  return <div>Template</div>
}

export default memo(Template)
