import React from 'react';
import { FaList, FaPlus } from "react-icons/fa";

const items = [
    {
        name: 'List Of Patients',
        route: '/patient',
        icon: <FaList />
    },
    {
        name: 'Add a Patient',
        route: '/patient/add',
        icon: <FaPlus />
    }
];

export default items;