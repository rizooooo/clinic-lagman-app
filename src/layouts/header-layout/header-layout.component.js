import React from 'react'
import { Header } from '../../core/shared'

const HeaderLayout = ({ children }) => {
    return (
        <>
            <div className='sticky-top mb-3'>
                <Header />
            </div>
            {children}
        </>
    )
}

export default HeaderLayout
