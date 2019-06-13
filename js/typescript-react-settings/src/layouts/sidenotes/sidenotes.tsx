import * as React from 'react'

import { ThemeContext } from '../../contexts/ThemeContext';

interface SideNoteStateInterface {}
interface SideNotePropsInterface {}

class SideNote extends React.Component<SideNotePropsInterface, SideNoteStateInterface> {
    static contextType = ThemeContext;

    render() {
        const { isLightTheme, light, dark } = this.context;
        const theme = isLightTheme ? light : dark;

        return (
            <div>
                <h4>
                    Sidenotes
                </h4>
                <p style={{
                    backgroundColor: theme.ui,
                    color: theme.syntax
                }}>
                    Waiting for the list
                </p>
            </div>
        )
    }
}

export const SideNoteAlternative: React.SFC<{}> = () => {
    return (
        <ThemeContext.Consumer>
            {
                (context) => {
                    const { isLightTheme, light, dark } = context;
                    const theme = isLightTheme ? light : dark;

                    return (
                        <p style={{
                            backgroundColor: theme.ui,
                            color: theme.syntax
                        }}>
                            Holy Moly
                        </p>
                    )
                }
            }
        </ThemeContext.Consumer>
    )
}

export default SideNote;