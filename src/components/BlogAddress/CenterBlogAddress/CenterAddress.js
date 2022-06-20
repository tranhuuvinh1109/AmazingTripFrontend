import React from 'react';
import Left from './Left/LeftContent';
import Right from './Right/Right';
import './CenterAddress.scss'

function CenterAddress() {
    return (
        <div className="center">
            <Left />
            <Right />
        </div>

    )
}

export default CenterAddress;