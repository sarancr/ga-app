import { FormattedNumber } from 'react-intl';
import React from 'react';

const Currency = (props) => {
    return <FormattedNumber value={props.value} style="currency" currency='USD'/>
}

export default Currency;