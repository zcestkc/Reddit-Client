import React from 'react';
import './Comment.css';
import Avatar from '../Avatar/Avatar';

const Comment = (props) => {
    const { comment } = props;
    return (
        <div className="comment">
            <div classname="comment-metadata">
                <Avatar name={comment.author} />
                <p className="comment-author">{comment.author}</p>
                <p className="comment-created-time">
                    {comment.created_utc}
                </p>
            </div>
            {comment.body}
        </div>
    )
}

export default Comment;