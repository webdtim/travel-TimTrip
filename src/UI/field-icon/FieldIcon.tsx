import InputTransparent from 'UI/input-transparent/InputTransparent'
import React, { memo, useState } from 'react'
import { TInput } from 'types/ui/fields'
import './field-icon.scss'

interface FieldIconProps extends TInput {
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
}

const FieldIcon: React.FC<FieldIconProps> = ({
  Icon,
  value: initValue,
  onChange,
  placeholder,
}) => {
  const [value, setValue] = useState<string>(initValue)
  const MemoizedIcon = memo(Icon)

  const handlerChange = (value: string) => {
    setValue(value)
    onChange(value)
  }

  return (
    <div className="field-icon">
      <InputTransparent
        value={value}
        placeholder={placeholder}
        onChange={handlerChange}
      />
      <div className="field-icon__fake">
        <span className="field-icon__text">{value || placeholder}</span>
        <MemoizedIcon />
      </div>
    </div>
  )
}

export default FieldIcon
