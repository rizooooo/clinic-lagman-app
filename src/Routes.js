import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { RouteLayout } from './core/shared'
import { HeaderLayout } from './layouts'
import { AddPatient, ListPatient } from './screens'

const Routes = () => {
    // return (
    //     <Switch>
    //         <Route exact path={'/'} component={ListPatient} />
    //         <Route exact path={'/add'} component={AddPatient} />
    //     </Switch>
    // )
    return (
        <Switch>
            <RouteLayout
                exact
                path={'/'}
                layout={HeaderLayout}
                component={ListPatient}
            />
            <RouteLayout
                path={'/add'}
                layout={HeaderLayout}
                component={AddPatient}
            />
        </Switch>
    )
}

const RouteController = () => {
    return (
        <Routes />
    )
}

export default RouteController
