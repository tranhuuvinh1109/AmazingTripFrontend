import React, { useState } from 'react';
import './LeftContent.scss';
import Bottom from './Bottom';
import Top from './Top';
// const [description, setDescription] = useState();


function LeftContent() {
    return (
        <div className="center-left">
            <Top />
            <Bottom />
        </div>
    )
}

export default LeftContent;