import cn from 'classnames'
import { TBtn } from 'types/ui/button'
import './btn.scss'

const Btn: React.FC<TBtn> = ({
  as: BtnTag = 'button',
  width,
  height,
  modifiers,
  className,
  children,
  ...otherProps
}) => {
  const classNamesModifiers = modifiers?.map((name) => 'btn--' + name)
  const listOfClassNames = cn('btn', classNamesModifiers, {
    [`btn--${width}`]: width,
    [`${className}`]: className,
  })

  return (
    <BtnTag className={listOfClassNames} style={{ height }} {...otherProps}>
      {children}
    </BtnTag>
  )
}

export default Btn
