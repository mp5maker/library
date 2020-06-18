import * as React from 'react'
import propTypes from 'prop-types'

interface FooterPropsInterface {

}

const Footer:React.FC<FooterPropsInterface> = ({}: any) => {
    const [state, setState] = React.useState({})

    React.useEffect(() => {

    }, [])

    return (
        <React.Fragment>
            <div className={`Footer-container`}>

            </div>
        </React.Fragment>
    )
}

Footer.defaultProps = {

}

Footer.propTypes = {

}

export default Footer