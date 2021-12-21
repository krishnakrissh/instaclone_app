import { Avatar } from '@material-ui/core';
import React, { Component } from 'react';
import "./StatusBar.css";
import statusimg from "../../images/pp1.png"


class StatusBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            statusList: []
        }
    }

    componentDidMount(){
        this.getData()
    }

    getData = () => {
        let data = [
            {
                "username": "Krishna",
                "imageUrl": "../../images/pp1.png"
            }, {
                "username": "saravana",
                "imageUrl": "../../images/pp1.png"
            },
            {
                "username": "jagu",
                "imageUrl": "../../images/pp1.png"
            }, {
                "username": "seku",
                "imageUrl": "../../images/pp1.png"
            },
            {
                "username": "prem_appa",
                "imageUrl": "../../images/pp1.png"
            }, {
                "username": "kannappa",
                "imageUrl": "../../images/pp1.png"
            },
            {
                "username": "Krishna",
                "imageUrl": "../../images/pp1.png"
            }, {
                "username": "saravana",
                "imageUrl": "../../images/pp1.png"
            }
        ]
        this.setState({statusList: data});
    }

    render() {
        return (
            <div>
                <div className="statusbar_container">
                    {
                        this.state.statusList.map((item, index) =>
                            <div class="status">
                                <Avatar className="statusbar_status" src={statusimg} />
                                <div className="statusbar_text">{item.username}</div>
                            </div>
                        )
                    }
                </div>
            </div>
        );
    }
}

export default StatusBar;
