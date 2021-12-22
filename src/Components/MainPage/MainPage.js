import React, { Component } from 'react';
import './MainPage.css';
import Post from '../Post/Post';

class MainPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            postArray: []
        }
    }

    componentDidMount() {
        this.getPost();
    }

    getPost() {
        let data = [
            {
                "postId": "1",
                "userName": "Krishna",
                "postImage": "https://wallpaperaccess.com/full/323408.jpg",
                "timeStamp": "675867576",
                "likes": "763"
            },
            {
                "postId": "1",
                "userName": "seku",
                "postImage": "https://wallpaperaccess.com/full/408982.jpg",
                "timeStamp": "675867576",
                "likes": "763"
            },
            {
                "postId": "1",
                "userName": "aadu",
                "postImage": "https://cdn.vox-cdn.com/thumbor/2n-5muv52m1dN_fDVWot_YM7AOk=/0x26:640x453/1400x1400/filters:focal(0x26:640x453):format(jpeg)/cdn.vox-cdn.com/assets/3715801/amazing_spider_man_2.jpg",
                "timeStamp": "675867576",
                "likes": "763"
            }
        ];
        this.setState({ postArray: data });
    }

    render() {
        return (
            <div>
                {
                    this.state.postArray.map((item, index) => (
                        <Post id={item.postId} userName={item.userName} postImage={item.postImage} likes={item.likes} />
                    ))
                }
            </div>
        );
    }
}

export default MainPage;
