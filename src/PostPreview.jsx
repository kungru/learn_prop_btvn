import React from 'react';

const PostPreview = (props) => {
    return (
        <div>
            <div className="post-preview">
                {props.check ? (<a href="post.html">
                    <h2 className="post-title">{props.title}</h2>
                    <h3 className="post-subtitle">{props.subtitle}</h3>
                </a>
                ) : props.title && !props.subtitle ? (
                    <a href="post.html">
                <h2 className="post-title">{props.title}</h2> </a>): (
                    <h3 className="post-subtitle">{props.subtitle}</h3>)}
                <p className="post-meta">
                     Posted by {" "}<a href="#!">Start Bootstrap</a>{" "}
                    on September 24, 2022
                </p>
            </div>
            {/* Divider*/}
            <hr className="my-4" />
        </div>
    )
};

export default PostPreview;