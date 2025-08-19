import { Link } from 'react-router-dom'

const NotFound404 = () => {
  return (
    <main className='flex flex-col items-center justify-center min-h-screen text-white bg-black gap-8'>
      <h1 className='text-[var(--primary)] font-bold text-4xl'>Page Not Found</h1>
      <p>The page you have requested does not exist.</p>
      <p>
        You can go the home page by{' '}
        <Link to='/main' className='underline text-[var(--primary)]'>
          clicking here
        </Link>
        .
      </p>
    </main>
  )
}

export default NotFound404
