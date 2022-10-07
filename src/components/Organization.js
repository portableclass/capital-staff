import Header from "./Header";
import Table from "./Table";
import React from 'react';
import { useState, useEffect, useMemo } from 'react';

export const Organization = () => {

    const columns = React.useMemo(
        () => [
            
                {
                    Header: 'Id',
                    accessor: 'id'
                },
                {
                    Header: 'Наименование',
                    accessor: 'name'
                },
                {
                    Header: 'Город',
                    accessor: 'city'
                },
                {
                    Header: 'Создано',
                    accessor: 'created'
                }
            ,

        ], []
    )

    // const columns = useMemo(
    //     () => [
            
    //         {
    //             Header: 'юзерайди',
    //             accessor: 'userId'
    //         },
    //         {
    //             Header: 'айди',
    //             accessor: 'id'
    //         },
    //         {
    //             Header: 'титл',
    //             accessor: 'title'
    //         },
    //         {
    //             Header: 'комплитед',
    //             accessor: 'completed'
    //         }

    //     ], []
    // )

    const sourceData = useMemo(() => [
    {
        id: 1,
        name: "Главстрой",
    },
    {
        id: 2,
        name: "Капитал кадры",
    },
    {
        id: 3,
        name: "Капитал кадры",
    },
    {
        id: 4,
        name: "Капитал кадрыКапитал кадрыКапитал кадрыКапитал кадры",
    },
    {
        id: 5,
        name: "Капитал кадры",
    },
    {
        id: 6,
        name: "Капитал кадры",
    },
    {
        id: 7,
        name: "Капитал кадры",
    },
    {
        id: 8,
        name: "Капитал кадры",
    },
    {
        id: 9,
        name: "Капитал кадры",
    },
    {
        id: 10,
        name: "Капитал кадры",
    },
    {
        id: 11,
        name: "Капитал кадры",
    },
    {
        id: 12,
        name: "Капитал кадры",
    },
    {
        id: 13,
        name: "Капитал кадры",
    },
    {
        id: 14,
        name: "Капитал кадры",
    },
    // {
    //     id: 20,
    //     name: "Капитал кадры",
    // },
    // {
    //     id: 30,
    //     name: "Капитал кадры",
    // },
    // {
    //     id: 40,
    //     name: "Капитал кадрыКапитал кадрыКапитал кадрыКапитал кадры",
    // },
    // {
    //     id: 50,
    //     name: "Капитал кадры",
    // },
    // {
    //     id: 60,
    //     name: "Капитал кадры",
    // },
    // {
    //     id: 70,
    //     name: "Капитал кадры",
    // },
    // {
    //     id: 80,
    //     name: "Капитал кадры",
    // },
    // {
    //     id: 90,
    //     name: "Капитал кадры",
    // },
    // {
    //     id: 100,
    //     name: "Капитал кадры",
    // },
    // {
    //     id: 110,
    //     name: "Капитал кадры",
    // },
    // {
    //     id: 130,
    //     name: "Капитал кадры",
    // },
    // {
    //     id: 140,
    //     name: "Капитал кадры",
    // },
    ], [])

    // const [data, setData] = useState([ 
    //     //{id: 1, completed: false, title: 'play videogames'}, 
    //     //{id: 2, completed: true, title: 'find a job'}, 
    //     //{id: 3, completed: false, title: 'to die in agony'} 
    //     ]) 
 
    // useEffect(() => { 
    //     fetch('https://jsonplaceholder.typicode.com/todos?_limit=29') 
    //     .then(response => response.json()) 
    //     .then(data => { 
    //         setData(data); 
    //     }) 
    // }, []) 
    
    const [data, setData] = useState(sourceData)

    const buttons = [
        "statistics",
        "update",
        "delete"
    ]

    const [windowName, setWindowName] = useState("Список")

    return (
        <>
            <Header title={"Организация"} window={windowName} />

            <Table
                columns={columns}
                data={data}
                buttons = {buttons}
                title = "Организация"
                pathSvg="M18,15H16V17H18M18,11H16V13H18M20,19H12V17H14V15H12V13H14V11H12V9H20M10,7H8V5H10M10,11H8V9H10M10,15H8V13H10M10,19H8V17H10M6,7H4V5H6M6,11H4V9H6M6,15H4V13H6M6,19H4V17H6M12,7V3H2V21H22V7H12Z"
                onDataChange={setData}
                onModeChange={setWindowName}
            />
        </>
    )
}