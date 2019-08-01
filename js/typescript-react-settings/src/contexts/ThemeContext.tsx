import * as React from 'react';

export const ThemeContext = React.createContext({
    isLightTheme: false,
    light: { syntax: "#555", ui: "#ddd", bg: "#eee" },
    dark: { syntax: "#ddd", ui: "#333", bg: "#555" },
    themeToggler: () => {}
});

interface ThemeContextProviderPropsInterface {
    children: React.ReactNode
}
interface ThemeContextProviderStateInterface {
    isLightTheme: boolean,
    light: any,
    dark: any
}


class ThemeContextProvider extends React.Component<ThemeContextProviderPropsInterface, ThemeContextProviderStateInterface>{
    constructor(props: ThemeContextProviderPropsInterface) {
        super(props)
        this.state = {
            isLightTheme: true,
            light: { syntax: "#555", ui: "#ddd", bg: "#eee"},
            dark: { syntax: "#ddd", ui: "#333", bg: "#555"}
        }
        this.themeToggler = this.themeToggler.bind(this)
    }

    themeToggler() {
        this.setState({
            isLightTheme: !this.state.isLightTheme
        })
    }

    render() {
        return (
            <ThemeContext.Provider value={{...this.state, themeToggler: this.themeToggler}}>
                { this.props.children }
            </ThemeContext.Provider>
        )
    }
}

export default ThemeContextProvider;