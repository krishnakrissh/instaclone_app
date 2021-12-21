import React, { Component } from 'react';
import './Post.css';
import { Avatar } from '@material-ui/core';
import postimage from '../../images/post.jpg'
import love from '../../images/love.svg'
import comment from '../../images/comment.svg'
import share from '../../images/share.svg'

class Post extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <div className='post_container'>
                <div className='post_header'>
                    <Avatar className='post_image' src='' />
                    <div className='post_username'> username </div>
                </div>

                {/* Images */}
                <div>
                    <img src={postimage} width="615px"></img>
                </div>


                <div>
                    <div style={{ "marginLeft": "10px" }}>
                        <img src={love} className="post_reactimage" />
                        <img src={comment} className="post_reactimage" />
                        <img src={share} className="post_reactimage" />
                    </div>
                    <div style={{"fontWeight":"bold","marginLeft":"15px"}}>
                        548 likes
                    </div>
                </div>

                {/* Comment */}
                <div>
                    <div className="post_comment">super macha</div>
                    <div>super macha</div>
                    <div className="post_comment">super macha</div>
                    <div>super macha</div>
                    <input type="text" className="post_addcomment" placeholder='Add a comment...' />
                </div>
            </div>
        );
    }
}

export default Post;
