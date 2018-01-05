import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import TabularView from '../containers/TabularView'
import Currency from './Currency';
import { FormattedNumber } from 'react-intl';

const columns = [{
    Header: 'Manufacturer',
    accessor: 'mfg'
},
{
    Header: 'Net Win %',
    accessor: 'netWinPerc',
    Cell: row => <span>{row.value}%</span>
},
{
    Header: 'Coin In %',
    accessor: 'coinInPerc',
    Cell: row => <span>{row.value}%</span>
},
{
    Header: 'Theoretical Win %',
    accessor: 'theoWinPerc'
},
{
    Header: 'Machine Days %',
    accessor: 'machineDaysPerc'
},
{
    Header: 'Handle Pulls %',
    accessor: 'handlePullsPerc'
},
{
    Header: 'Net Win Total',
    accessor: 'coinIn',
    Cell: row => <Currency value={row.value}/>
},
{
    Header: 'Coin In Total',
    accessor: 'coinIn',
    Cell: row => <Currency value={row.value}/>
},
{
    Header: 'Theoretical Win Total',
    accessor: 'coinIn',
    Cell: row => <Currency value={row.value}/>
},
{
    Header: 'Handle Pulls Total',
    accessor: 'coinIn',
    Cell: row => <Currency value={row.value}/>
},
{
    Header: 'Machine Days Total',
    accessor: 'coinIn',
    Cell: row => <FormattedNumber value={row.value}/>
},]

export default class TabularData extends Component {

    render() {
        if (!this.props.data || this.props.data === null)
            return <div></div>
        return (
            <div> 
                <ReactTable
                data={this.props.data}
                columns={columns} />
            </div>

        );




    }








}
