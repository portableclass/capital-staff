import Header from "./Header";
import Table from "./Table";
import React from 'react';



// import styled from "styled-components";

// const Styles = styled.div`
//     padding: 24px;
//     background-color: #FAFAFA;

//     table {
//         dispaly
//         border: 1px solid lightgray;
//     }
// `

export const Organization = () => {

    const columns1 = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
          field: 'firstName',
          headerName: 'First name',
          width: 150,
          editable: true,
        },
        {
          field: 'lastName',
          headerName: 'Last name',
          width: 150,
          editable: true,
        },
        {
          field: 'age',
          headerName: 'Age',
          type: 'number',
          width: 110,
          editable: true,
        },
        {
          field: 'fullName',
          headerName: 'Full name',
          description: 'This column has a value getter and is not sortable.',
          sortable: false,
          width: 160,
          valueGetter: (params) =>
            `${params.getValue(params.id, 'firstName') || ''} ${
              params.getValue(params.id, 'lastName') || ''
            }`,
        },
    ]

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
            // {
            //     Header: 'Hello',
            //     columns: [
            //         {
            //             Header: 'Age',
            //             accessor: 'age1'
            //         },
            //         {
            //             Header: 'Visits',
            //             accessor: 'visits1'
            //         },
            //         {
            //             Header: 'Status',
            //             accessor: 'status1'
            //         },
            //         {
            //             Header: 'Name',
            //             accessor: 'name1'
            //         }
            //     ]
            // }
        ], []
    )

    const data1 = React.useMemo(() => [{
        id: 1,
        lastName: "asd",
        firstName: "as",
        age: 30
    },
    {
        id: 2,
        lastName: "asd",
        firstName: "as",
        age: 30
    },
    {
        id: 2,
        lastName: "asd",
        firstName: "as",
        age: 30
    }
    ], [])

    const data = React.useMemo(() => [
    {
        id: 1,
        name: "Главстрой",
    },
    {
        id: 2,
        name: "Капитал кадры",
    }
    ], [])

    return (
        <>
            <div style={{display: "flex"}}>
                
                <Header title={"Организация"} />
                
            </div>

            <Table
                columns={columns}
                data={data}
                props={
                    {
                        title: "Организация",
                        pathSvg: "M18,15H16V17H18M18,11H16V13H18M20,19H12V17H14V15H12V13H14V11H12V9H20M10,7H8V5H10M10,11H8V9H10M10,15H8V13H10M10,19H8V17H10M6,7H4V5H6M6,11H4V9H6M6,15H4V13H6M6,19H4V17H6M12,7V3H2V21H22V7H12Z"
                    }
                }
            />
        </>
    )
}

// export default function Organization() {
//     return (
//         <>
//             <div style={{fontSize: '60px', display: "flex", width: "200px", height: "100px"}}>
                
//             <Header title={"Organization"}/>
                
//             </div> 
//         </>
//     )
// }