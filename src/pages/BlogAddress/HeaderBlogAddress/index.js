import React from 'react';
import Left from './Left';
import Right from './Right';

function HeaderAddress() {
    return (
        <div className="d-flex justify-content-between p-1 mb-2">
            <Left />
            <Right />
        </div>
    )
}

export default HeaderAddress;