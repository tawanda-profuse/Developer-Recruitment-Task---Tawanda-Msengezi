import { Link } from 'react-router-dom'
import ICON_SRC_MAPPING from '../../constants/iconSrcMapping'

const Footer = () => {
  return (
    <footer className='bg-[#1A1A1A] w-full flex justify-between flex-wrap gap-12 p-12 text-[#B2B2B2]'>
      <div className='grid gap-4 my-2'>
        <Link to='/' className='mb-8'>
          <img src={ICON_SRC_MAPPING['logo']} alt='' />
        </Link>
        {[
          {
            text: '대표이사 : 장창진',
            link: '/'
          },
          { text: '사업자등록번호 : 201-86-15245', link: '/' },
          { text: '서울특별시 중구 다산로 139 (랜더스빌딩) 6층', link: '/' },
          { text: '통신판매업신고 : 중구 제0575호', link: '/' },
          { text: '개인정보보호책임자 : 최주연', link: '/' }
        ].map((item, index) => (
          <Link
            to={item.link}
            key={`${index}-footer`}
            className='hover:underline'
          >
            {item.text}
          </Link>
        ))}
        <p className='text-sm'>
          Copyright © WWW.ldsb2bmall.com All right reserved
        </p>
      </div>
      <div className='flex flex-wrap gap-8 items-start'>
        <div className='grid gap-4'>
          <h3 className='text-white text-lg font-bold'>대표 번호 및 AS 문의</h3>
          <h3 className='text-white text-lg font-bold'>1661-6244</h3>
          {[
            {
              text: '평일 : 09:00 ~ 18:00',
              link: '/'
            },
            {
              text: '기관 : 기업은행',
              link: '/'
            },
            {
              text: '계좌번호 : 213-111127-04-035',
              link: '/'
            },
            {
              text: '예금주 : (주)랜더스',
              link: '/'
            }
          ].map((item, index) => (
            <Link
              to={item.link}
              key={`${index}-footer-2`}
              className='hover:underline'
            >
              {item.text}
            </Link>
          ))}
        </div>
        <div className='grid gap-4'>
          <p>개인정보처리방침 이용약관</p>
          <div className='flex gap-2'>
            <img
              src={ICON_SRC_MAPPING['instagram']}
              alt='Instagram'
              className='w-[2rem] h-[2rem] transition-all hover:scale-[1.1] cursor-pointer'
            />
            <img
              src={ICON_SRC_MAPPING['facebook']}
              alt='Facebook'
              className='w-[2rem] h-[2rem] transition-all hover:scale-[1.1] cursor-pointer'
            />
            <img
              src={ICON_SRC_MAPPING['youtube']}
              alt='YouTube'
              className='w-[2rem] h-[2rem] transition-all hover:scale-[1.1] cursor-pointer'
            />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
