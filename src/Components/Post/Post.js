import React, { Component } from 'react';
import './Post.css';
import { Avatar, ListItem } from '@material-ui/core';
import love from '../../images/love.svg'
import comment from '../../images/comment.svg'
import share from '../../images/share.svg'

class Post extends Component {
    constructor(props) {
        super(props)
        this.state = {
            commentList: []
        }
    }
    componentDidMount() {
        this.getComments();
    }
    getComments = () => {
        let data = [
            {
                "username": "Krissh",
                "commentId": "1",
                "timestamp": "121542156",
                "description": "Comment 1"
            },
            {
                "username": "Aadu",
                "commentId": "1",
                "timestamp": "121542156",
                "description": "Comment 2"
            },
            {
                "username": "seku",
                "commentId": "1",
                "timestamp": "121542156",
                "description": "Comment 3"
            }
        ];
        this.setState({ commentList: data });
    }

    render() {
        return (
            <div className='post_container'>
                <div className='post_header'>
                    <Avatar className='post_image' src={this.props.profileImage} />
                    <div className='post_username'>{this.props.userName}</div>
                </div>

                {/* Images */}
                <div>
                    <img src={this.props.postImage} width="615px"></img>
                </div>

                <div>
                    <div style={{ "marginLeft": "10px" }}>
                        <img src={love} className="post_reactimage" />
                        <img src={comment} className="post_reactimage" />
                        <img src={share} className="post_reactimage" />
                    </div>
                    <div style={{ "fontWeight": "bold", "marginLeft": "15px" }}>
                        {this.props.likes} likes
                    </div>
                </div>

                {/* Comment */}
                <div>
                    <div>{
                        this.state.commentList.map((item, index)=>(
                        <div classaName="post_comment">{item.username}:{item.description}</div>
                        ))
                    }
                    </div>

                    <input type="text" className="post_addcomment" placeholder='Add a comment...' />
                </div>
            </div>
        );
    }
}

export default Post;
