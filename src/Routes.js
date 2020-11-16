import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { RouteLayout } from './core/shared'
import { FullscreenLayout, HeaderLayout, HeaderSidebarLayout } from './layouts'
import { PatientModule } from './module'
import { AddPatient, ListPatient, SignIn, ViewPatient } from './screens'

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
                path={['/patient']}
                layout={HeaderSidebarLayout}
                component={PatientModule}
            />
            <RouteLayout
                exact
                path={'/sign-in', '/'}
                layout={FullscreenLayout}
                component={SignIn}
            />
            {/* <RouteLayout
                path={'/patient/add'}
                layout={HeaderLayout}
                component={AddPatient}
            />
            <RouteLayout
                path={'/patient/:id'}
                layout={HeaderLayout}
                component={ViewPatient}
            /> */}
        </Switch>
    )
}

const RouteController = () => {
    return (
        <Routes />
    )
}

export default RouteController
