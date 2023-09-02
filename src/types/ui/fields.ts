export type TField = HTMLInputElement | HTMLTextAreaElement

export type TTextarea = {
  value: string
  placeholder?: string
  onChange: (value: string) => void
  onBlur?: (value: string) => void
  onKeyDown?: (event: React.KeyboardEvent<HTMLTextAreaElement>) => void
}

export type TInput = {
  value: string
  placeholder?: string
  onChange: (value: string) => void
}

export type TFieldSearch = TInput & {
  onClear: () => void
  onSearch?: () => void
}
