import { useState, type ChangeEvent, type FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ICON_SRC_MAPPING from '../shared/constants/iconSrcMapping'
import { toast } from 'react-toastify'

import InputField from '../shared/components/molecules/InputField'
import Button from '../shared/components/atoms/buttons/Button'
import PasswordField from '../shared/components/molecules/PasswordField'

const Login = () => {
  const [formData, setFormData] = useState({ username: '', password: '' })
  const [errors, setErrors] = useState({ username: '', password: '' })
  const navigate = useNavigate()
  const [isPending, setIsPending] = useState(false)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setErrors({ username: '', password: '' })
    setIsPending(true)

    if (!formData.username) {
      setErrors(prev => ({ ...prev, username: 'Username is required' }))
      setIsPending(false)
      return
    }
    if (formData.password.length < 8) {
      setErrors(prev => ({
        ...prev,
        password: 'Password should be more than 8 characters'
      }))
      setIsPending(false)
      return
    }

    // 3-second timeout to simulate API request
    setTimeout(() => {
      setIsPending(false)
      toast.success('Successfully logged in!')
      navigate('/main')
    }, 3000)
  }

  return (
    <main className='bg-[var(--off-white)] w-full min-h-screen flex flex-col items-center justify-center gap-4 overflow-x-hidden'>
      <form
        className='flex flex-col gap-6 w-full md:w-2/4 justify-center items-center p-6 md:p-12 mx-auto bg-white rounded-md'
        onSubmit={handleSubmit}
      >
        <img src={ICON_SRC_MAPPING['logo']} alt='Logo' className='my-8' />
        <p><strong className='text-red-500'>*</strong>{" "}Enter username <strong>user@email.com</strong> and password <strong>123456789</strong></p>
        <InputField
          label='Username'
          name='username'
          placeholder='Enter your username'
          value={formData.username}
          error={errors.username}
          onChange={handleChange}
        />

        <PasswordField
          label='Password'
          name='password'
          placeholder='Enter your password'
          value={formData.password}
          error={errors.password}
          onChange={handleChange}
        />

        <div className='flex justify-between w-full md:w-[80%] flex-wrap gap-4'>
          <div className='flex gap-2'>
            <input
              type='checkbox'
              id='accept'
              className='p-1 w-4 accent-[var(--primary)]'
            />
            <label htmlFor='accept'>Lorem, ipsum.</label>
          </div>
          <Link to='/signup' className='underline text-[var(--primary)]'>
            Lorem ipsum dolor sit amet.
          </Link>
        </div>

        <Button type='submit' variant='primary' isDisabled={isPending}>
          {isPending ? 'Please wait...' : 'Submit'}
        </Button>
        <Button type='button' variant='secondary'>
          Cancel
        </Button>
      </form>

      <p className='w-[90%] text-center mb-4'>
        Copyright &copy; WWW.Idsb2bmall.com All right reserved
      </p>
    </main>
  )
}

export default Login
