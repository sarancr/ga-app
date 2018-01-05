import React, {Compopnent, Component} from 'react';
import DrillDownView from '../containers/DrillDownView';
import {LineChart,Line,Tooltip,XAxis,YAxis,CartesianGrid} from 'recharts';


export default class  DrillDownGraph extends Component{
    render(){
        return(
            <div>
                <LineChart width={600} height={300} data={this.props.value}>
                <XAxis dataKey="date"/>
                <YAxis/>
                <CartesianGrid strokeDasharray="3 3"/>
                <Line type='monotone' datakey={this.props.field} stroke='#8884d8' strokeWidth={2} />
                    </LineChart>
            </div>
        );
    }
            





}
