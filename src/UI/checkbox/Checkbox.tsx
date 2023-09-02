import React, { useState } from 'react'
import { TCheckbox } from 'types/ui/checkbox'

const Checkbox: React.FC<TCheckbox> = ({ checked, onChange }) => {
  const [isChecked, setIsChecked] = useState<boolean>(checked)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked)
    onChange(event.target.checked)
  }

  return (
    <label>
      <input type="checkbox" checked={isChecked} onChange={handleChange} />
    </label>
  )
}

export default Checkbox
