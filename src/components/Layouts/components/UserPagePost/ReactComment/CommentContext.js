import { useState, createContext } from 'react';
import getImage from '../../../../../hooks/getImage';

const CommentContext = createContext()

function CommentProvider({ children }) {

    const [commentsBlog, setCommentsBlog] = useState([]);

    // Reset comment Data after
    const handleResetCommentData = (id) => {
        const obj = commentsBlog.filter(obj => obj.comment_blog_id != id);
        setCommentsBlog([...obj])
    }

    const value = {
        commentsBlog,
        setCommentsBlog,
        handleResetCommentData
    }

    return (
        <CommentContext.Provider value={value}>
            {children}
        </CommentContext.Provider>
    )
}

export { CommentContext, CommentProvider}