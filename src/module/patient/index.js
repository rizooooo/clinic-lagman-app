import React from 'react'
import { Route, Switch } from 'react-router-dom';
import { AddPatient, ViewPatient, ListPatient } from './screens'

const BASE_URL = '/patient';

const Routes = [
    {
        name: 'Add Patient',
        component: AddPatient,
        path: '/create',
        exact: true
    },
    {
        name: 'View Patient',
        component: ViewPatient,
        path: '/:id',
        exact: true
    },
    {
        name: 'List Patient',
        component: ListPatient,
        path: '/',
        exact: true
    },
]

const PatientRoutes = () => {
    return (
        <Switch>
            {Routes.map(r => <Route exact={r.exact} key={r.name} component={r.component} path={`${BASE_URL}${r.path}`} />)}
        </Switch>
    )
}

export default PatientRoutes
