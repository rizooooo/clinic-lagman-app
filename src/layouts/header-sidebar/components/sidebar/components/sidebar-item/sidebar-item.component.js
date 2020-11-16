import React from 'react'
import { NavLink, useRouteMatch } from 'react-router-dom'
import { Collapse } from 'reactstrap'



const SidebarItem = ({ route, items, isOpen }) => {
    const match = useRouteMatch(`/${route}`)

    const onOpenCollapse = () => {
        console.log(match, 'onOpenCollapse')
        if (isOpen) {
            return true;
        }
        if (match) {
            return true
        }

        if (isOpen && match) {
            return true;
        }

        return false
    }
    return (
        <Collapse isOpen={onOpenCollapse()}>
            <div className='pl-5 d-flex flex-column'>
                {items && items.length > 0 && items.map(d => (
                    <NavLink activeClassName='font-italic font-weight-bold' key={d.name} to={d.route} className='py-3 text-white d-flex align-items-center'>
                        <span>{d.name}</span>
                    </NavLink>
                ))}
            </div>
        </Collapse>
        // <div>Yow</div>
    )
}

export default SidebarItem
