import React from 'react';
import { useEffect, useState } from 'react';
import Comment from "./Comment"
import CommentForm from "./commentForm"
import classNames from 'classnames/bind';
import styles from './CommentBlog.module.scss';

const cx = classNames.bind(styles);

const Comments = (props) => {
    const [commentsBlog, setCommentsBlog] = useState([]);
    const [value, setValue] = useState('');
    const raw = JSON.stringify({
        "blog_id": 1,
        "id_user": 2,
        "comment_blog_content": value,
        "comment_blog_image": 'https://bcp.cdnchinhphu.vn/Uploaded/tranducmanh/2021_06_22/HaTinh.jpg'
    })
    const obj = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: raw,
        redirect: 'follow'
    }
    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/commentsBlog/1').then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            // Read the response as json.
            return response.json();
            //setCommentsBlog(resolve.data);
        }).then((responseJSON) => {
            setCommentsBlog(responseJSON.data);
        });
    }, []);

    return (
        <div className='listComments mt-3'>
            <div className="row  d-flex justify-content-center">
                <div className="col-md-12 mt-3">
                    {
                        commentsBlog.map((item) => (
                            <Comment comment={item.comment_blog_content} key={item.comment_blog_id} />
                        )
                        )}
                </div>
            </div>
        </div>
    )
}

export default Comments;
