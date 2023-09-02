import React, { useState } from 'react'
import { TInput } from 'types/ui/fields'
import './input-transparent.scss'

const InputTransparent: React.FC<TInput> = ({
  value: initValue,
  placeholder,
  onChange,
}) => {
  const [value, setValue] = useState<string>(initValue)

  const handlerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setValue(value)
    onChange(value)
  }

  return (
    <input
      className="input-transparent"
      value={value}
      placeholder={placeholder}
      onChange={handlerChange}
    />
  )
}

export default InputTransparent
