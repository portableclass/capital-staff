import React from 'react';

import { useState, useEffect, useMemo } from 'react';

import Header from '../Header'
import Table from './../table/Table';


export const Users = () => {

    const columns = React.useMemo(
        () => [
            
            {
                Header: 'Id',
                accessor: 'id',
            },
            {
                Header: 'Username',
                accessor: 'username',
            },
            {
                Header: 'Имя',
                accessor: 'name',
            },
            {
                Header: 'Фамилия',
                accessor: 'surname',
            }
            ,

        ], []
    )

    const sourceData = React.useMemo(() => [
        {
            id: 0,
            username: 'root',
            name: 'Сергей',
            surname: 'Сергеев',
        },
    ], [])

    const [data, setData] = useState(sourceData)

    const buttons = [
        'read',
        'delete',
    ]

    const [windowName, setWindowName] = useState('Список')

    return (
        <>
            <div style={{display: 'flex'}}>
                <Header title={'Пользователи'} window={windowName}/>
            </div>

            <Table
                columns={columns}
                data={data}
                buttons = {buttons}
                title = "Пользователи"
                pathSvg = "M13.07 10.41A5 5 0 0 0 13.07 4.59A3.39 3.39 0 0 1 15 4A3.5 3.5 0 0 1 15 11A3.39 3.39 0 0 1 13.07 10.41M5.5 7.5A3.5 3.5 0 1 1 9 11A3.5 3.5 0 0 1 5.5 7.5M7.5 7.5A1.5 1.5 0 1 0 9 6A1.5 1.5 0 0 0 7.5 7.5M16 17V19H2V17S2 13 9 13 16 17 16 17M14 17C13.86 16.22 12.67 15 9 15S4.07 16.31 4 17M15.95 13A5.32 5.32 0 0 1 18 17V19H22V17S22 13.37 15.94 13Z"
                onDataChange={setData}
                onModeChange={setWindowName}
            />
        </>
    )
}