import React from 'react';
import {useEffect, useState} from 'react';
import Comment from "./Comment"
import CommentForm from "./commentForm"
import classNames from 'classnames/bind';
import styles from './CommentBlog.module.scss';

const cx = classNames.bind(styles);

const Comments = (props)=>{
    const [commentsBlog, setCommentsBlog] = useState([]);
    const [value, setValue] = useState('');
    var raw = JSON.stringify({
        "blog_id": 1,
        "id_user": 2,
        "comment_blog_content": value,
        "comment_blog_image": 'https://bcp.cdnchinhphu.vn/Uploaded/tranducmanh/2021_06_22/HaTinh.jpg'
    })
    var obj = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: raw,
        redirect: 'follow'
    }
    useEffect(()=> {
        fetch('http://127.0.0.1:8000/api/commentsBlog/1').then((response)=>{
            if (!response.ok) {
                throw Error(response.statusText);
              }
              // Read the response as json.
              return response.json();
            //setCommentsBlog(resolve.data);
        }).then((responseJSON)=>{
            setCommentsBlog(responseJSON.data);
        });
    }, []);
    function handleChange(e){
        setValue(e.target.value)
        console.log(value);
    }
    function sendComment(){
        fetch('http://127.0.0.1:8000/api/createCommentBlog', obj).then((response)=>{return response.json()}).then((responseJSON)=>{setValue(''); setCommentsBlog(responseJSON.data)});
    }
    return <div className='comments'>
                <div className='user-comment row'>
                    <div className='col-1'>
                    <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/281896920_534554055067659_2103376413571668716_n.jpg?stp=dst-jpg_s206x206&_nc_cat=101&ccb=1-7&_nc_sid=aee45a&_nc_ohc=j7BNtyGXhXAAX_hRifl&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVLnllXQKcQizy9OEzLQUonG7eViUgPq4ynxejsTjcQClQ&oe=62D02342"
                        alt="" className='rounded-circle d-inline' width={50}  />
                    </div>
                    <div className='col flex d-inline write-comment d-flex justify-content-between'>
                    <input value={value} type="text" className="w-100 rounded" onChange={handleChange} placeholder="     Viết bình luận ..." />
                    </div>
                </div>
                <div>
                    <button onClick={sendComment} className='bg-transparent float-end mt-3 mr-3'><i className="h3 fa-solid fa-paper-plane"></i></button>
                </div>
                <div className='listComments mt-3'>
                    <div className="row  d-flex justify-content-center">
                        <div className="col-md-12 mt-3">
                            {
                            commentsBlog.map((item)=>(
                            <Comment comment={item.comment_blog_content} key={item.comment_blog_id}/>
                            )
                            )}
                        </div>
                    </div>
                </div>
            </div>
}

export default Comments;
