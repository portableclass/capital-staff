import { useState } from 'react';
import { useTable } from 'react-table';
import { ButtonTable } from './ButtonTable';
import '../assets/styles/css/table.css';



export default function Table({ columns, data,
    buttons,
    title = "Tittle",
    pathSvg = "M13.07 10.41A5 5 0 0 0 13.07 4.59A3.39 3.39 0 0 1 15 4A3.5 3.5 0 0 1 15 11A3.39 3.39 0 0 1 13.07 10.41M5.5 7.5A3.5 3.5 0 1 1 9 11A3.5 3.5 0 0 1 5.5 7.5M7.5 7.5A1.5 1.5 0 1 0 9 6A1.5 1.5 0 0 0 7.5 7.5M16 17V19H2V17S2 13 9 13 16 17 16 17M14 17C13.86 16.22 12.67 15 9 15S4.07 16.31 4 17M15.95 13A5.32 5.32 0 0 1 18 17V19H22V17S22 13.37 15.94 13Z",
    rowsDisplayed = 5
}) {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = useTable({
        columns,
        data
    })

    const pagesCount = Math.ceil(rows.length / rowsDisplayed)

    const [currentPage, setPage] = useState(1)
    const handlePage = (page) => {setPage(page)}

    const tempRows = rows.filter(
        e => (currentPage * rowsDisplayed) - rowsDisplayed <= e.index && e.index < currentPage * rowsDisplayed
    )

    return (
        <div className="table-wrapper">
            <div className="table-header-wrapper">
                <div className="table-header">
                    <span className="table-ico">
                        <svg viewBox="0 0 24 24" width="16" height="16" className="inline-block">
                            <path d={ pathSvg } />
                        </svg>
                    </span>
                    <h3>{title}</h3>
                </div>
                <div className="action-add">
                    <ButtonTable type="create" />
                </div>
            </div>
            <table className="table" {...getTableProps()}>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps()}>
                                    { column.render('Header') }
                                </th>
                            ))}
                            <th/>
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {tempRows.map(row => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()} key={row.id}>
                                {row.cells.map(cell => {
                                    return <td {...cell.getCellProps()}>
                                        {cell.render('Cell')}
                                    </td>
                                })}
                                <td>
                                    <div className="actions-wrapper">
                                        {buttons.map(btn => {
                                            return <ButtonTable type={btn} />
                                        })}
                                    </div>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <div className="pagination-wrapper">
                <div className="page-switch">
                    {
                        Array.from({ length: pagesCount }, (_, index) => index + 1)
                            .map(page => {
                                if (page === currentPage) {
                                    return <a  href={"#" + page} onClick={() => handlePage(page)} style={{border: "3px solid black"}}>
                                                <span>
                                                    {page}
                                                </span>
                                            </a>
                                }
                                else {
                                    return <a href={"#" + page} onClick={() => handlePage(page)}>
                                                <span>
                                                    {page}
                                                </span>
                                            </a>
                                }
                            })
                    }
                </div>
                <div className="page-info">
                    <p>{ "Page " + currentPage + " of " + pagesCount }</p>
                </div>
            </div>
        </div>        
    )
}