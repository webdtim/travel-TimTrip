import React, { memo, useEffect, useState } from 'react'
import Btn from 'UI/button/Btn'
import { ReactComponent as SearchIcon } from 'uploads/search.svg'
import { ReactComponent as CloseIcon } from 'uploads/add.svg'
import type { TFieldSearch } from 'types/ui/fields'
import './field-search.scss'

const FieldSearch: React.FC<TFieldSearch> = ({
  value: initValue,
  onChange,
  onSearch,
  onClear,
  placeholder = 'поиск',
}) => {
  const [value, setValue] = useState(initValue)
  useEffect(() => {
    setValue(initValue)
  }, [initValue])

  const handlerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setValue(value)
    onChange(value)
  }
  const MemoizedBtn = memo(Btn)

  return (
    <div className="field-search">
      <MemoizedBtn
        onClick={onSearch}
        className="field-search__btn"
        modifiers={['transparent']}
        width="min-width"
      >
        <SearchIcon />
      </MemoizedBtn>
      <input
        className="field-search__input"
        value={value}
        placeholder={placeholder}
        onChange={handlerChange}
        type="search"
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="none"
        spellCheck="false"
        title="Поиск"
        role="searchbox"
        aria-label="Поиск"
      />
      <MemoizedBtn
        className="field-search__btn field-search__close"
        onClick={onClear}
        modifiers={['transparent']}
        width="min-width"
      >
        <CloseIcon />
      </MemoizedBtn>
    </div>
  )
}

export default FieldSearch
