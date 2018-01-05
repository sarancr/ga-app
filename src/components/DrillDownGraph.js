import React, { Component } from 'react';
import DrillDownView from '../containers/DrillDownView';
import {LineChart,Line,Tooltip,XAxis,YAxis,CartesianGrid, Legend} from 'recharts';


export default class  DrillDownGraph extends Component{
    render(){
        return(
            <div>
                <LineChart width={1400} height={300} data={this.props.value}
                     margin={{top: 5, right: 30, left: 20, bottom: 5}} >
                    <XAxis dataKey="date"/>
                    <YAxis/>
                    <Tooltip/>
                    <Legend />
                    <CartesianGrid strokeDasharray="3 3"/>
                    <Line type="monotone" dataKey={this.props.field} stroke="#8884d8" />
                </LineChart>
            </div>
        );
    }
            





}
