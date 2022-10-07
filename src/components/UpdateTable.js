import '../assets/styles/css/updateTable.css';
import { useState} from 'react';

export default function UpdateTable({ columns, row, handleUpdate, tableMode, mode, handleCreate }) {

    const [tempRow, setTempRow] = useState(row)
    // const [value, setValue] = useState("")

    const handleEdit = (column, event) => {
        // console.log(event.target.value)
        tempRow[column.accessor] = event.target.value
        setTempRow(tempRow)
    }

    const saveData = () => {
        switch (mode) {
            case "update": handleUpdate(tempRow); break
            case "create": handleCreate(tempRow); break
            default: break;
        }
        tableMode("table")
    }

    return (
        <>
            <div className="update-table-wrapper">
                {/* {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
                        {headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps()}>
                                {column.render('Header')}
                            </th>
                        ))}
                        <th />
                    </tr>
                ))} */}
                {mode === "update" && 
                    <div>
                        {
                            columns.map((column, index) => (
                                <div style={{marginBottom: "24px"}} key={index}>
                                    <h3>{column.Header}</h3>
                                    {/* {console.log(row)} */}
                                    <input type="text" readOnly={false} defaultValue={tempRow[column.accessor]} onChange={handleEdit.bind(null, column)} />
                                </div>
                                ))   
                        }
                        <button type="button" onClick={saveData}>
                            Сохранить
                        </button>
                    </div>
                }
                {mode === "create" &&
                    <div>
                        {
                            columns.map((column, index) => (
                                <div style={{marginBottom: "24px"}} key={index}>
                                    <h3>{column.Header}</h3>
                                    <input type="text" readOnly={false} defaultValue={tempRow[column.accessor] = ""} onChange={handleEdit.bind(null, column)} />
                                    {console.log(tempRow)}
                                </div>
                                ))   
                        }
                        <button type="button" onClick={saveData}>
                            Добавить
                        </button>
                    </div>
                }
                <button type="button" onClick={() => tableMode("table")}>
                    Вернуться
                </button>
                {/* {console.log(tempRow.allCells.)} */}
                {/* {tempRow.allCells.map(item => console.log(item.column.Header))} */}
            </div>
        </>
    )
}