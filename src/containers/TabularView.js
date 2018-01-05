import React, { Component } from 'react';
import { connect } from 'react-redux';
import TabularData from '../components/TabularData';


class TabularView extends Component {
    render() {

        return (

            <div>  <TabularData
                data={this.props.mfgmix} />  </div>
        );

    }

}

function mapStateToProps(state) {
    return { mfgmix: state.metrics == null ? null : state.metrics.mfgmix }
}

export default connect(mapStateToProps)(TabularView);
