import React, {
  useState,
  useRef,
  useLayoutEffect,
  forwardRef,
  useImperativeHandle,
} from 'react'
import getMainBehaviors from 'utils/helpers/getMainBehaviors'
import { TTextarea } from 'types/ui/fields'
import { TFieldBehaviors } from 'types/imperative_behaviors/behaviors'
import './textarea.scss'

const AutoResizeTextarea = forwardRef<TFieldBehaviors | undefined, TTextarea>(
  ({ value: initValue, onChange, onBlur, onKeyDown, placeholder }, ref) => {
    const [value, setValue] = useState<string>(initValue)
    const textareaRef = useRef<HTMLTextAreaElement>(null)

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      const value = event.target.value
      setValue(value)
      onChange(value)
    }
    const handleBlur = (event: React.FocusEvent<HTMLTextAreaElement>) => {
      if (onBlur) onBlur(event.target.value)
    }

    useLayoutEffect(() => {
      if (textareaRef.current) {
        textareaRef.current.style.height = 'auto'
        textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
      }
    }, [value])

    useImperativeHandle(
      ref,
      () => {
        if (textareaRef.current) return getMainBehaviors(textareaRef.current)
      },
      []
    )

    return (
      <textarea
        className="textarea"
        ref={textareaRef}
        value={value}
        placeholder={placeholder}
        rows={1}
        onChange={handleChange}
        onBlur={handleBlur}
        onKeyDown={onKeyDown}
      />
    )
  }
)

export default AutoResizeTextarea
