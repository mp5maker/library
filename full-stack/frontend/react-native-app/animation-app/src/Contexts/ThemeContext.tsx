import * as React from 'react'

interface ThemeContextInterface {
    theme: string,
    setTheme: (params: any) => any,
}

export const ThemeContext = React.createContext<Partial<ThemeContextInterface>>({})