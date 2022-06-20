import React from 'react';
import Left from './Left';
import Right from './Right';
import './HeaderAddress.scss'

function HeaderAddress() {
    return (
        <div className="Top">
            <Left />
            <Right />
        </div>
    )
}

export default HeaderAddress;