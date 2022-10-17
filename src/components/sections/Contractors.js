import React from 'react';
import { useState } from 'react';
import Header from '../Header'
import Table from './../table/Table';

export const Contractors = () => {

    const columns = React.useMemo(
        () => [
            {
                Header: 'Наименование',
                accessor: 'name',
            },
            {
                Header: 'ИНН',
                accessor: 'inn',
            },
            {
                Header: 'Статус',
                accessor: 'status',
            },
        ], []
    )

    const sourceData = React.useMemo(() => [
        {
            name: 'ООО \'AAA\'',
            inn: '782384950248',
            status: 'Согласовано',
        },
        {
            name: 'ООО \'BBB\'',
            inn: '783485729394',
            status: 'Не согласовано',
        },
        {
            name: 'ООО \'ССС\'',
            inn: '784657389457',
            status: 'Согласовано',
        },
        {
            name: 'ООО \'DDD\'',
            inn: '783849283701',
            status: 'Не согласовано',
        },
        {
            name: 'ООО \'EEE\'',
            inn: '784637489201',
            status: 'Согласовано',
        },
        {
            name: 'ООО \'FFF\'',
            inn: '785192037182',
            status: 'Не согласовано',
        },
        {
            name: 'ООО \'GGG\'',
            inn: '784612032943',
            status: 'Согласовано',
        },
        {
            name: 'ООО \'HHH\'',
            inn: '783748001927',
            status: 'Не согласовано',
        },
        {
            name: 'ООО \'III\'',
            inn: '787201019283',
            status: 'Согласовано',
        },
        {
            name: 'ООО \'JJJ\'',
            inn: '780492837461',
            status: 'Не согласовано',
        },
        {
            name: 'ООО \'KKK\'',
            inn: '788372601928',
            status: 'Согласовано',
        },
        {
            name: 'ООО \'LLL\'',
            inn: '789984736475',
            status: 'Не согласовано',
        },
    ], [])

    const buttons = [
        'read',
        'delete',
    ]

    const [data, setData] = useState(sourceData)
    const [windowName, setWindowName] = useState('Список')

    return (
        <>
            <div style={{ display: 'flex' }}>
                <Header title={'Подрядчики'} window={windowName}/>
            </div>

            <Table
                columns={columns}
                data={data}
                buttons = {buttons}
                title="Подрядчики"
                pathSvg="M5,3V21H11V17.5H13V21H19V3H5M7,5H9V7H7V5M11,5H13V7H11V5M15,5H17V7H15V5M7,9H9V11H7V9M11,9H13V11H11V9M15,9H17V11H15V9M7,13H9V15H7V13M11,13H13V15H11V13M15,13H17V15H15V13M7,17H9V19H7V17M15,17H17V19H15V17Z"
                onDataChange={setData}
                onModeChange={setWindowName}
            />
        </>
    )
}