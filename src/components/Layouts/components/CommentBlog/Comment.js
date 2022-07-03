import React from 'react';
import {useEffect, useState} from 'react';
const Comment = (props) => {
    const [state, setState] = useState(-1);
    function setUpReaction() {
        setState(1);
    }
    function setDownReaction() {
        setState(0);
    }
    function sendReaction() {
        fetch('http://127.0.0.1:8000/api/reactBlog')
    }
    return <div className="mb-5">
                                <div className='AvtAndName'>
                                        <img src="https://i.imgur.com/hczKIze.jpg" width="35" className="user-img rounded-circle m-2 col-xs-2" />
                                        <p className="d-inline font-weight-bold text-primary">james_olesenn</p>
                                </div>
                                <div className="card p-3 rounded-pill d-flex justify-content-between">
                                    <div className="user flex-row align-items-center">
                                        <div className='contentComment mt-1'> 
                                            <p className="font-weight-bold">{props.comment}</p>  
                                        </div>                     
                                    </div>
                                </div>
                                <div className='row float-end mt-3'>
                                    <div className='col-4'>
                                        <button className="btn btn-block btn-info btn-sm">edit</button>
                                    </div>
                                    <div className='col-4'>
                                        <button className="btn btn-block btn-info btn-sm">delete</button>
                                    </div>
                                </div>
                                <div className='d-flex post-reaction mt-3'>
                                    <div className='d-flex align-items-center'>
                                        <button className={state == 1 ? 'text-primary bg-transparent' : 'bg-transparent'}>
                                            <i className='fa-regular fa-thumbs-up'></i>
                                        </button>
                                        <span className='sum-like ms-1'>100</span>
                                    </div>
                                    <div className='d-flex align-items-center ms-3'>  
                                        <button className={state == 0 ? 'text-primary bg-transparent' : 'bg-transparent'}>
                                        <i className='fa-regular fa-thumbs-down'></i>
                                        </button>
                                        <span className='sum-dislike ms-1'>15</span>
                                    </div> 
                                </div>
                            </div>
}

export default Comment;