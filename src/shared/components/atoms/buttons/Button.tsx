import type { ButtonProps } from '../../../types/types'

const Button = ({
  children,
  variant = 'primary',
  className,
  isDisabled,
  ...props
}: ButtonProps) => {
  const base = `w-full md:w-[80%] rounded-md p-4 text-xl transition-all cursor-pointer ${
    isDisabled ? "cursor-not-allowed" : "cursor-pointer"
  }`
  const variants = {
    primary: 'bg-[#cccccc] hover:bg-[var(--primary)] border-none outline-none',
    secondary: 'border-2 border-[#D9D9D9] bg-white hover:bg-gray-100',
    danger: 'bg-[var(--danger)] text-white hover:opacity-90'
  }
  const disabledStyle = 'opacity-50'

  return (
    <button
      className={`${base} ${variants[variant]} ${
        isDisabled ? disabledStyle : ''
      } ${className || ''}`}
      {...props}
      disabled={isDisabled}
    >
      {children}
    </button>
  )
}

export default Button
