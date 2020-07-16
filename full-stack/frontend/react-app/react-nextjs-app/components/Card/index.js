import React from 'react'


export const Card = ({ theme, colors }) => {
    return (
        <>
            <div
                style={{
                    borderRadius: `5px`,
                    background: colors[theme].backgroundColor,
                    color: colors[theme].primaryColor,
                    width: `300px`,
                    height: `300px`,
                    boxShadow: `0 1px 15px 0 ${colors[theme].boxShadowColor}`
                }}
                className="card-container">
                Hello
            </div>
        </>
    )
}

export default Card