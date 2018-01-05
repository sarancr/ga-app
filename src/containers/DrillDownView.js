import React, { Component } from 'react';
import { connect } from 'react-redux';
import DrillDownGraph from '../components/DrillDownGraph';

class DrillDownView extends Component {
    render() {
        const field = this.props.match ? this.props.match.params.field : null;
        console.log(field);

        if (field === null || !this.props.aggr || this.props.aggr === null)
            return <div></div>
        return (
            <div className = "content">
                <div className="page-title">DrillDown View</div>
                <DrillDownGraph value={this.props.aggr}
                    field= { field } />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { aggr: state.metrics == null ? null : state.metrics.aggr }
}

export default connect(mapStateToProps)(DrillDownView);