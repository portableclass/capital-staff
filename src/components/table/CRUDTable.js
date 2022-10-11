import '../../assets/styles/css/crudTable.css';
import { useState} from 'react';

export default function CRUDTable({ columns, row, handleUpdate, tableMode, mode, handleCreate }) {

    const [tempRow, setTempRow] = useState(row)
    // const [value, setValue] = useState("")

    const handleEdit = (column, event) => {
        // console.log(event.target.value)
        tempRow[column.accessor] = event.target.value
        setTempRow(tempRow)
    }

    const saveData = () => {
        switch (mode) {
        case 'update': handleUpdate(tempRow); break
        case 'create': handleCreate(tempRow); break
        default: break;
        }
        tableMode('table')
    }

    return (
        <>
            <div className="update-table-wrapper">
                {(mode === 'update' || mode === 'read') && 
                    <div>
                        {
                            columns.map((column, index) => (
                                <div style={{marginBottom: '24px'}} key={index}>
                                    <h3>{column.Header}</h3>
                                    <input type="text" readOnly={mode === 'read'} defaultValue={tempRow[column.accessor]} onChange={handleEdit.bind(null, column)} />
                                </div>
                            ))   
                        }
                    </div>
                }
                {mode === 'create' &&
                    <div>
                        {
                            columns.map((column, index) => (
                                <div style={{marginBottom: '24px'}} key={index}>
                                    <h3>{column.Header}</h3>
                                    <input type="text" readOnly={false} defaultValue={tempRow[column.accessor] = ''} onChange={handleEdit.bind(null, column)} />
                                </div>
                            ))   
                        }
                    </div>
                }
                {(mode === 'update' || mode === 'create') &&
                    <button type="button" onClick={saveData}>
                        Сохранить
                    </button>
                }
                <button type="button" onClick={() => tableMode('table')}>
                    Вернуться
                </button>
            </div>
        </>
    )
}