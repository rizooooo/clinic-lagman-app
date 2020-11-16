import React from 'react'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'
import { useRouteMatch } from 'react-router-dom'

const SidebarParent = ({ onClickItem, item: s, sidebarToggled, toggle }) => {
    const match = useRouteMatch({
        path: '/' + s.route
    })

    console.log(match, 'match', s.route)
    return (
        <div onClick={() => onClickItem(s)} className='py-3 d-flex align-items-center justify-content-between clickable pr-3' style={{ borderRight: match ? '5px solid white': undefined }}>
            <div className='d-flex align-items-center'>
                {s.icon}
                {sidebarToggled &&
                    <span className={`ml-3 text-white text-nowrap ${match && 'font-weight-bold'}`}>{s.name}</span>
                }

            </div>
            {
                s.items && s.items.length > 0 && <div>
                    {toggle && toggle.name === s.name && toggle.toggled === true ? <FaAngleUp /> : <FaAngleDown />}
                </div>
            }
        </div>
    )
}

export default SidebarParent
