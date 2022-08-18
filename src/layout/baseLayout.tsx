import React from 'react'
import { Outlet } from "react-router-dom";
function baseLayout() {
  return (
    <div>
        baseLayout
        <Outlet />
    </div>
  )
}

export default baseLayout
