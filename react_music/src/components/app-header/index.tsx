import React, { memo } from 'react'
import type { ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import { SearchOutlined } from '@ant-design/icons'
import { Input } from 'antd'
import { HeaderLeft, HeaderRight, HeaderWrapper } from './style'
import headerTitle from '@/assets/data/header-titles.json'

interface IProps {
  children?: ReactNode
}

const AppHeader: React.FC<IProps> = () => {
  //定义组件内部的状态

  // 组件的展示逻辑 定义函数
  /* function showItem(item: any) {
    if (item.type === 'path') {
      return (
        <NavLink to={item.link} className={({ isActive }) => (isActive ? 'active' : '')}>
          {item.title}
          <span className="icon"></span>
        </NavLink>
      )
    } else {
      return (
        <a href={item.link} rel="noreferrer" target="_blank">
          {item.title}
        </a>
      )
    }
  } */

  return (
    <HeaderWrapper className="app-header">
      <div className="header-content wrap-v1">
        <HeaderLeft>
          <a href="/#" className="logo sprite_01">
            网易云音乐
          </a>
          <div className="title-list">
            {/* 将结构里面数据定义到一个json文件中进行管理 */}
            {headerTitle.map((item) => {
              return (
                <div className="item" key={item.title}>
                  {/* 也可以定义个函数做判断  {showItem(item)}*/}
                  {item.type === 'path' && (
                    <NavLink
                      to={item.link}
                      className={({ isActive }) => (isActive ? 'active' : '')}
                    >
                      {item.title}
                      <span className="icon sprite_01"></span>
                    </NavLink>
                  )}
                  {/* navlink自动有active */}
                  {item.type !== 'path' && (
                    <a href={item.link} rel="noreferrer" target="_blank">
                      {item.title}
                    </a>
                  )}
                </div>
              )
            })}
          </div>
        </HeaderLeft>
        <HeaderRight>
          <div className="input">
            <Input
              className="search"
              placeholder="音乐/视频/电台/用户"
              prefix={<SearchOutlined />}
            />
          </div>
          <span className="center">创作者中心</span>
          <span className="login">登录</span>
        </HeaderRight>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  )
}

export default memo(AppHeader)
