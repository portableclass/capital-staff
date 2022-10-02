import Header from "./Header"
import Table from "./Table";
import React from 'react';

export const Workers = () => {

    const columns = React.useMemo(
        () => [
            
                {
                    Header: 'Id',
                    accessor: 'id'
                },
                {
                    Header: 'Имя',
                    accessor: 'name'
                },
                {
                    Header: 'Статус',
                    accessor: 'status'
                },
                {
                    Header: 'Подрядчик',
                    accessor: 'contractor'
                }
            ,

        ], []
    )

    const data = React.useMemo(() => [
        {
            id: 10,
            name: "Сергеев Сергей",
            status: "Принят",
            contractor: "ООО 'AAA'"
        },
        {
            id: 20,
            name: "Кириллов Кирилл",
            status: "Принят",
            contractor: "ООО 'BBB'"
        },
        {
            id: 30,
            name: "Александров Александр",
            status: "Принят",
            contractor: "ООО 'CCC'"
        },
        {
            id: 40,
            name: "Павлов Павел",
            status: "Принят",
            contractor: "ООО 'DDD'"
        },
        {
            id: 50,
            name: "Егоров Егор",
            status: "Принят",
            contractor: "ООО 'EEE'"
        },
        {
            id: 60,
            name: "Петров Петр",
            status: "Принят",
            contractor: "ООО 'FFF'"
        },
        {
            id: 70,
            name: "Иванов Иван",
            status: "Принят",
            contractor: "ООО 'GGG'"
        },
    ], [])

    const buttons = [
        "read",
        "delete"
    ]

    return (
        <>
            <div style={{display: "flex"}}>
                <Header title={"Сотрудники"} />
            </div>

            <Table
                columns={columns}
                data={data}
                buttons = {buttons}
                title = "Сотрудники"
                pathSvg = "M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"
            />
        </>
    )
}