import Input from '../atoms/inputs/Input'
import Label from '../atoms/Label'
import ErrorMessage from '../atoms/ErrorMessage'
import type { InputFieldProps } from '../../types/types'

const InputField = ({
  label,
  name,
  type = 'text',
  placeholder,
  value,
  error,
  onChange
}: InputFieldProps) => {
  return (
    <div className='flex gap-8 w-full md:w-[80%] md:items-center flex-col md:flex-row'>
      <Label htmlFor={name}>{label}</Label>
      <div className='flex flex-col w-full gap-1'>
        <Input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          hasError={!!error}
        />
        <ErrorMessage message={error} />
      </div>
    </div>
  )
}

export default InputField
