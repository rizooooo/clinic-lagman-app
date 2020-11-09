import React from 'react'

const Card = ({ children }) => {
    return (
        <div className='d-flex flex-column p-3 border shadow-sm'>
            {children}
        </div>
    )
}

export default Card
