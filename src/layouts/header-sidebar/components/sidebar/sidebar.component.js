import React, { useContext, useEffect, useState } from 'react'
import { sidebar_items } from '../../constants/sidebar.data'
import { useHistory, useRouteMatch } from 'react-router-dom';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { SidebarHeader, SidebarItem, SidebarParent } from './components';
const SidebarComponent = ({ sidebarToggled }) => {



    const [toggle, setToggle] = useState(null);
    const { push } = useHistory();




    const onRoute = (route) => push('/' + route);

    const onClickItem = (a) => {
        if (a.items && a.items.length > 0) {
            if (toggle && toggle.name === a.name) {
                setToggle({
                    name: a.name,
                    toggled: !toggle.toggled
                })
            } else {
                setToggle({
                    name: a.name,
                    toggled: true
                })
            }
        } else {
            onRoute(a.route);
        }
    }

    // const getActivePath = useCallback(() => {
    //     const index = sidebar_items.findIndex(item => {
    //         if (item.items) {
    //             const route = item.items.some(i => pathname.toLowerCase().includes(i.route.toLowerCase()));
    //             if (route) {
    //                 return true;
    //             }
    //             return false;
    //         } else {
    //             return -1;
    //         }
    //     })

    //     if (index !== -1) {
    //         const { name } = sidebar_items[index];
    //         setToggle({
    //             name,
    //             toggled: true
    //         });
    //     }
    // }, [pathname])

    // useEffect(() => {
    //     getActivePath();
    // }, [getActivePath])




    return (
        <div className='sticky-top sidebar-container' style={{ width: sidebarToggled ? '280px' : '50px' }}>
            <SidebarHeader sidebarToggled={sidebarToggled} />
            <div className='d-flex flex-column pl-3'>
                {
                    sidebar_items.map(s => (
                        <div key={s.name} >
                            <SidebarParent onClickItem={onClickItem} item={s} sidebarToggled={sidebarToggled} toggle={toggle} />
                            <SidebarItem route={s.route} items={s.items} isOpen={toggle && toggle.toggled && toggle.name === s.name} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default SidebarComponent
