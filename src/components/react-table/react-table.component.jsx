import React, { useEffect } from 'react'
import styled from 'styled-components';
import makeData from './data'
import Table, {
    SliderColumnFilter,
    NumberRangeColumnFilter,
    SelectColumnFilter,
    filterGreaterThan,
    InputSearchColumnFilter
} from './table.component'

import { CustomData } from './custom-data-for-pbshmi'
import './react-table.styles.scss'

const ReactTableComponent = () => {

    useEffect(() => {
        console.log(makeData(1))
    }, [])

    const columns = React.useMemo(
        () => [
            {
                Header: 'Events',
                columns: [
                    {
                        Header: 'Num',
                        accessor: 'num'
                    },
                    {
                        Header: 'Description',
                        accessor: 'description',
                        Filter: InputSearchColumnFilter
                    },
                    {
                        Header: 'Status',
                        accessor: 'status',
                        Filter: SelectColumnFilter,
                    },

                    {
                        Header: 'Time',
                        accessor: 'time',
                        Filter: InputSearchColumnFilter,
                    },
                    {
                        Header: 'Amount',
                        accessor: 'amount',
                    },
                    {
                        Header: 'Hour',
                        accessor: 'hour',
                        Filter: InputSearchColumnFilter,
                    },
                    {
                        Header: 'Minute',
                        accessor: 'minute',
                        Filter: InputSearchColumnFilter,
                    },
                    {
                        Header: 'Area',
                        accessor: 'area',
                        Filter: InputSearchColumnFilter,
                    },
                
                ],
            },
            
        ],
        []
    )

    // const data = React.useMemo(() => makeData(100000), [])

    return (
        <div className="trend-page">
            <div className="table-wrapper">
                <Styles>
                    <Table columns={columns} data={CustomData} />
                </Styles>
            </div>
        </div>
    )
}

const Styles = styled.div`
   text-align: left;
   direction: ltr; 
  padding: 1rem;

  table {
    text-align: left;
    direction: ltr; 
    border-spacing: 0;
    border: 1px solid black;

    tbody tr:nth-child(even){
        background-color: #f2f2f2;
    }

    thead tr:first-child {
        background-color: red;
    }

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`

export default ReactTableComponent
