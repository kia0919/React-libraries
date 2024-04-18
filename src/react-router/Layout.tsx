import React from 'react'
import { Outlet } from 'react-router'

export default function Layout() {
    // <Outlet /> :
    // - 부모 <Route>에 해당 컴포넌트가 element로 등록되었을 때 자식 <Route>의
    // - Element가 해당 위치에 표시되도록 하는 컴포넌트 
  return (
    <>
        <h2 style={{ color:'red' }}>Router</h2>

        <Outlet />
    </>
  )
}