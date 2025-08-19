import carouselImg1 from '../assets/images/carousel-img1.png'
import carouselImg2 from '../assets/images/carousel-img2.png'
import carouselImg3 from '../assets/images/carousel-img3.png'
import carouselImg4 from '../assets/images/carousel-img4.png'
import ProductGrid from '../shared/components/organisms/ProductGrid'
import ICON_SRC_MAPPING from '../shared/constants/iconSrcMapping'

const Home = () => {
  return (
    <>
      <header className='h-[90dvh] w-full home-header relative'>
        <h1 className='text-white text-2xl md:text-4xl text-wrap w-2/4 absolute top-2/4 right-20 header-h1'>
          Performance-Ready Apparel for Work & Beyond
        </h1>
        <img
          src={ICON_SRC_MAPPING['indicator']}
          alt=''
          className='absolute bottom-8 left-2/4 -translate-x-2/4'
        />
      </header>
      <section className='py-16'>
        <div className='max-w-5xl mx-auto px-4 '>
          <h2>스타일과 실용성을 모두 담은 시즌 셀렉션</h2>
          <div className='overflow-x-auto md:overflow-hidden scrollbar-none'>
            <div className='flex w-5xl gap-4 items-end justify-between my-4'>
              {[
                {
                  img: carouselImg1,
                  alt: '계절에 구애받지 않고 편하게 입을 수 있는 아노락'
                },
                {
                  img: carouselImg2,
                  alt: '가볍고 뛰어난 보온성을 자랑하는 방한조끼'
                },
                { img: carouselImg3, alt: '포근한 따뜻함이 필요할 때 플리스' },
                { img: carouselImg4, alt: '' }
              ].map((item, index) => (
                <div
                  className='relative cursor-pointer w-full md:w-1/4'
                  key={`carousel-${index}`}
                >
                  <h3 className='absolute top-2 left-2 w-2/4 font-semibold'>
                    {item.alt}
                  </h3>
                  <img
                    src={item.img}
                    alt={item.alt}
                    className={`${
                      index === 3
                        ? 'w-[20rem] h-[20rem] md:w-[25rem] md:h-[25rem] card-radius'
                        : 'w-[20rem] h-[20rem]'
                    } object-cover`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <img src={ICON_SRC_MAPPING['indicator']} alt='' className='mx-auto' />
      </section>
      <section className='py-16'>
        <div className='px-4'>
          <ProductGrid />
        </div>
        <div className='my-16 px-4'>
          <ProductGrid />
        </div>
      </section>
      <section className='py-16'>
        <div className='max-w-5xl mx-auto bg-black text-white p-8 h-[50dvh] flex flex-col justify-center gap-4'>
          <h2 className='text-2xl font-bold'>B2B 전문 의류 쇼핑몰!</h2>
          <h3 className='text-2xl font-bold'>
            15년 이상의 노하우로 믿고 거래 하세요
          </h3>
          <p>수많은 기업이 선택한 신뢰받는 쇼핑 소식, 지금 만나보세요</p>
        </div>
      </section>
    </>
  )
}

export default Home
