import { DiscoverWrapper } from '@/views/discover/style'
import React, { Suspense, memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import discoverMenus from '@/assets/data/discover-menus.json'

interface IProps {
  children?: ReactNode
}

const Discover: FC<IProps> = () => {
  const handleScroll = () => {
    const backToTop = document.querySelector('.backtop') as HTMLElement
    backToTop.style.display = window.scrollY > 25 ? 'block' : 'none'
  }

  // 添加滚动事件监听器
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <DiscoverWrapper className="discover-box">
      <div className="discover-header">
        <div className="content wrap-v1">
          <div className="discover-nav">
            {discoverMenus.map((item: any) => {
              return (
                <div className="item" key={item.title}>
                  <NavLink
                    to={item.link}
                    className={({ isActive }) => (isActive ? 'active' : undefined)}
                  >
                    {item.title}
                  </NavLink>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <div className="discover-main">
        <Suspense fallback="">
          <Outlet />
        </Suspense>
        <a className="backtop" href="javascript:scroll(0,0)">
          返回顶部
        </a>
      </div>
    </DiscoverWrapper>
  )
}

export default memo(Discover)
