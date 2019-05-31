import { LoopingRhombusesSpinner, FlowerSpinner, FulfillingSquareSpinner, TrinityRingsSpinner } from 'react-epic-spinners';
import React from 'react';
import { connect } from 'react-redux';

function Auth() {
    return <React.Fragment>
        <LoopingRhombusesSpinner color='green' />
        <FulfillingSquareSpinner color='purple' />
        <LoopingRhombusesSpinner color='green' />
        <TrinityRingsSpinner color='purple' />
        <FlowerSpinner color='black' />
        <TrinityRingsSpinner color='purple' />
        <LoopingRhombusesSpinner color='green' />
        <FulfillingSquareSpinner color='purple' />
        <LoopingRhombusesSpinner color='green' />
    </React.Fragment>
}

export default connect(null)(Auth)