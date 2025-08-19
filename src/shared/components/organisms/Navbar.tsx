import { Link } from 'react-router-dom'
import ICON_SRC_MAPPING from '../../constants/iconSrcMapping'
import { useState } from 'react'

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)
  return (
    <nav
      className={`bg-black flex justify-end gap-8 md:justify-between w-full text-white py-4 px-10 ${
        showNavbar ? 'fixed top-0 z-50' : ''
      }`}
    >
      <Link to='/'>
        <img src={ICON_SRC_MAPPING['logo']} alt='logo' className='w-[8rem]' />
      </Link>
      <div
        className={`text-xl md:text-[1rem] flex gap-8 flex-col md:flex-row fixed md:relative bg-black h-screen md:h-auto w-full md:w-auto z-50 md:top-0 md:translate-0 transition-all duration-500 ${
          showNavbar
            ? 'translate-y-10 left-0 text-center justify-center py-4 overflow-y-auto'
            : '-translate-y-full -translate-x-full'
        }`}
      >
        {[
          { text: 'SS', link: '/' },
          { text: 'FW', link: '/' },
          { text: 'PANTS', link: '/' },
          { text: 'T-Shirt', link: '/' },
          { text: 'SALE', link: '/' },
          { text: 'COLLECTION', link: '/' },
          { text: 'COMMUNITY', link: '/' }
        ].map((item, index) => (
          <Link to={item.link} key={index} className='hover:underline'>
            {item.text}
          </Link>
        ))}
      </div>
      <div className='flex gap-2 md:gap-4'>
        <button className='hover:bg-[var(--primary)] transition-all cursor-pointer'>
          <img src={ICON_SRC_MAPPING['basket']} alt='' />
        </button>
        <button className='hover:bg-[var(--primary)] transition-all cursor-pointer hidden md:block'>
          <img src={ICON_SRC_MAPPING['user']} alt='' />
        </button>
        <button className='hover:bg-[var(--primary)] transition-all cursor-pointer'>
          <img src={ICON_SRC_MAPPING['search']} alt='' />
        </button>
        <button className='hover:bg-[var(--primary)] transition-all cursor-pointer hidden md:block'>
          로그아웃
        </button>
        <button
          className='block md:hidden hover:bg-[var(--primary)] transition-all cursor-pointer'
          onClick={() => setShowNavbar(!showNavbar)}
        >
          <img src={ICON_SRC_MAPPING['bars']} alt='' />
        </button>
      </div>
    </nav>
  )
}

export default Navbar
