export const generateId = (name?: string): string =>
  `${name ? name + '_' : ''}${Date.now().toString(36)}`
