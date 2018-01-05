import React, { Component } from 'react';
import { connect } from 'react-redux';
import DrillDownGraph from '../components/DrillDownGraph';

class DrillDownView extends Component {
    render() {
        if (!this.props.aggr || this.props.aggr === null)
            return <div></div>
        return (
            <div>
                <DrillDownGraph value={this.props.aggr}
                    field="netWin" />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { aggr: state.metrics == null ? null : state.metrics.aggr }
}

export default connect(mapStateToProps)(DrillDownView);