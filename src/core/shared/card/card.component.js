import React from 'react'

const Card = ({ children, style }) => {
    return (
        <div style={style} className='p-3 border shadow-sm d-flex flex-column'>
            {children}
        </div>
    )
}

export default Card
