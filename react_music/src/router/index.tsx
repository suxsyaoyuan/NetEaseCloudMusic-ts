import React, { lazy } from 'react'
// tsx中使用jsx语法 得导入react
import { Navigate } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'
const Mine = lazy(() => import('@/views/mine'))
const Discover = lazy(() => import('@/views/discover'))
const Focus = lazy(() => import('@/views/focus'))
const Recommend = lazy(() => import('@/views/discover/recommend'))
const Songs = lazy(() => import('@/views/discover/songs'))
const Djradio = lazy(() => import('@/views/discover/djradio'))
const Artist = lazy(() => import('@/views/discover/artist'))
const Ranking = lazy(() => import('@/views/discover/ranking'))
const Newalbum = lazy(() => import('@/views/discover/newalbum'))
// const AlbumDetail = lazy(() => import('@/components/album-detail'))

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/discover" />
  },
  {
    path: '/discover',
    element: <Discover />,
    children: [
      { path: '/discover', element: <Navigate to="/discover/recommend" /> },
      // 这个地方用双引号是因为相当于在设置jsx属性中的value
      { path: '/discover/songs', element: <Songs /> },
      { path: '/discover/djradio', element: <Djradio /> },
      { path: '/discover/ranking', element: <Ranking /> },
      { path: '/discover/artist', element: <Artist /> },
      { path: '/discover/newalbum', element: <Newalbum /> },
      { path: '/discover/recommend', element: <Recommend /> }
    ]
  },
  {
    path: '/mine',
    element: <Mine />
  },
  {
    path: '/focus',
    element: <Focus />
  }
]
export default routes
