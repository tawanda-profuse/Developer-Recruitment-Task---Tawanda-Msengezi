import { Outlet } from 'react-router-dom'
import classNameMerge from '../utils/classNameMerge'
import type { ReactNode } from 'react'
import Navbar from '../components/organisms/Navbar'
import Footer from '../components/organisms/Footer'
import Chat from '../components/organisms/Chat'

const MainLayout = ({
  className,
  children
}: {
  className?: string
  children?: ReactNode
}) => {
  return (
    <>
      <div className={classNameMerge(className)}>
        {/* main content area */}
        <Navbar />
        {children || <Outlet />}
        <Footer/>
        <Chat/>
      </div>
    </>
  )
}

export default MainLayout
