import { useState} from 'react';
import { useTable } from 'react-table';

import { ButtonTable } from './ButtonTable';
import LineChart from '../LineChart';
import CRUDTable from './CRUDTable';
import '../../assets/styles/css/table.css';



export default function Table({ columns, data,
    buttons,
    title = 'Tittle',
    pathSvg = 'M13.07 10.41A5 5 0 0 0 13.07 4.59A3.39 3.39 0 0 1 15 4A3.5 3.5 0 0 1 15 11A3.39 3.39 0 0 1 13.07 10.41M5.5 7.5A3.5 3.5 0 1 1 9 11A3.5 3.5 0 0 1 5.5 7.5M7.5 7.5A1.5 1.5 0 1 0 9 6A1.5 1.5 0 0 0 7.5 7.5M16 17V19H2V17S2 13 9 13 16 17 16 17M14 17C13.86 16.22 12.67 15 9 15S4.07 16.31 4 17M15.95 13A5.32 5.32 0 0 1 18 17V19H22V17S22 13.37 15.94 13Z',
    rowsDisplayed = 5,
    onDataChange,
    onModeChange,
}) {
    const mediaQuery = window.matchMedia('(min-width: 1024px)');
    // const [data, setData] = useState(sourceData)
    // const data = sourceData
    const mode = { table: 'table', update: 'update', create: 'create', statistics: "statistics", read: 'read' };
    const [tableMode, setTableMode] = useState(mode.table)
    const handleTableMode = (value) => {
        switch (value) {
        case mode.table: onModeChange('Список'); break;
        case mode.update: onModeChange('Изменить'); break;
        case mode.create: onModeChange('Добавить'); break;
        case mode.read: onModeChange('Просмотр'); break;
        case mode.statistics: onModeChange('График'); break;
        default: break;
        }
        setTableMode(value)
    }
    const onButtonAction = (btn, row) => {
        setSelectedRow(row)
        switch (btn) {
        case 'create': handleTableMode(mode.create); break
        case 'read': handleTableMode(mode.read); break
        case 'update': handleTableMode(mode.update); break
        case 'delete': onDataChange(data.filter(item => item !== selectedRow.original)); break
        case 'statistics': handleTableMode(mode.statistics); break
        default: break
        }
    }

    const [selectedRow, setSelectedRow] = useState([])
    const handleRowUpdate = (value) => {
        onDataChange(data.filter(item => item = item === selectedRow.original ? value : item).Array)
    }
    const handleRowCreate = (value) => {
        
    }

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({
        columns,
        data,
    })

    const pagesCount = Math.ceil(rows.length / rowsDisplayed)
    const [currentPage, setPage] = useState(1)
    const tempRows = rows.filter(
        e => (currentPage * rowsDisplayed) - rowsDisplayed <= e.index && e.index < currentPage * rowsDisplayed
    )

    return (
        <>
            {tableMode === mode.table &&
                <div className="table-wrapper" >
                    <div className="table-header-wrapper">
                        <div className="table-header">
                            <span className="table-ico">
                                <svg viewBox="0 0 24 24" width="16" height="16" className="inline-block">
                                    <path d={pathSvg} />
                                </svg>
                            </span>
                            <h3>{title}</h3>
                        </div>
                        <div className="action-add">
                            <ButtonTable type="create" onBtnClick={onButtonAction.bind(null, 'create')} />
                        </div>
                    </div>
                    {mediaQuery.matches &&
                        <table className="table" {...getTableProps()}>
                            <thead>
                                {headerGroups.map(headerGroup => (
                                    <tr
                                        {...headerGroup.getHeaderGroupProps()}
                                        key={headerGroup.getHeaderGroupProps().key}
                                    >
                                        {headerGroup.headers.map(column => (
                                            <th {...column.getHeaderProps()}>
                                                {column.render('Header')}
                                            </th>
                                        ))}
                                        <th />
                                    </tr>
                                ))}
                            </thead>
                            <tbody {...getTableBodyProps()}>
                                {tempRows.map(row => {
                                    prepareRow(row)
                                    return (
                                        <tr
                                            {...row.getRowProps()}
                                            key={row.getRowProps().key}
                                            onClick={() => setSelectedRow(row)}
                                        >
                                            {row.cells.map(cell => {
                                                return <td
                                                    {...cell.getCellProps()}
                                                    key={cell.getCellProps().key}
                                                >
                                                    {cell.render('Cell')}
                                                </td>
                                            })}

                                            <td>
                                                <div className="actions-wrapper">
                                                    {buttons.map(btn => {
                                                        return <ButtonTable
                                                            type={btn}
                                                            href={'#row' + row.id}
                                                            onBtnClick={onButtonAction.bind(null, btn, row)}
                                                            key={row.getRowProps().key + btn}
                                                        />
                                                    })}
                                                </div>
                                            </td>
                                        </tr> 
                                    )
                                })}
                            </tbody>
                        </table>
                    } 
                    {!mediaQuery.matches &&
                        <table className="table" {...getTableProps()}>
                            {tempRows.map(row => {
                                prepareRow(row)
                                return (
                                    <tbody
                                        {...row.getRowProps()}
                                        onClick={() => setSelectedRow(row)}
                                        style={{ borderBottom: '3px solid #b3f2db', marginTop: '5px' }}
                                    >
                                        {row.cells.map(cell => {
                                            return <tr
                                                style={{ display: 'flex', justifyContent: 'space-between' }}
                                                key={row.getRowProps().key + cell.getCellProps().key}
                                            >
                                                <td
                                                    {...cell.column.getHeaderProps()}
                                                    style={{ display: 'flex', fontFamily: 'TTHoves-DemiBold', alignItems: 'center' }}
                                                    key={row.getRowProps().key + cell.column.render('Header')}
                                                >
                                                    {cell.column.render('Header')}
                                                </td>
                                                <td
                                                    {...cell.getCellProps()}
                                                    style={{ display: 'flex', alignItems: 'center' }}
                                                    key={row.getRowProps().key + cell.render('Cell')}
                                                >
                                                    {cell.render('Cell')}
                                                </td>
                                            </tr>
                                        })}
                                        <tr style={{display: 'flex', alignItems: 'center', padding: '0'}}>
                                            <td>
                                                <div className="actions-wrapper" style={{float: 'left'}}>
                                                    {buttons.map(btn => {
                                                        return <ButtonTable
                                                            type={btn}
                                                            href={'#row' + row.id}
                                                            onBtnClick={onButtonAction.bind(null, btn)}
                                                            key={row.getRowProps().key + btn}
                                                        />
                                                    })}
                                                </div>
                                            </td>
                                            <td> </td>
                                        </tr>
                                    </tbody> 
                                )
                            })}
                        </table>
                    } 
                    <div className="pagination-wrapper">
                        <div className="page-switch">
                            {
                                Array.from({ length: pagesCount >= 1 ? pagesCount : 1 }, (_, index) => index + 1)
                                    .map(page => {
                                        return <a
                                            href={'#' + page}
                                            onClick={() => setPage(page)}
                                            key={page}
                                            className={page === currentPage ? 'active-action' : 'page-link'}>
                                            <span>
                                                {page}
                                            </span>
                                        </a>
                                    })
                            }
                        </div>
                        <div className="page-info">
                            <p>{'Page ' + currentPage + ' of ' + (pagesCount >= 1 ? pagesCount : 1)}</p>
                        </div>
                    </div>
                </div >
            }
            {(tableMode === mode.update || tableMode === mode.create || tableMode === mode.read) &&
                <CRUDTable
                    columns={columns}
                    row={selectedRow.original !== undefined ? selectedRow.original : rows[0]}
                    handleUpdate={handleRowUpdate}
                    handleCreate={handleRowCreate}
                    tableMode={handleTableMode}
                    mode={tableMode}
                />
            }
            {tableMode === mode.statistics &&
                <LineChart
                    title={`Statistics of ${title}`}
                    legendTitle={title}
                />
            }
        </>       
    )
}