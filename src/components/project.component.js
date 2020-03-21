import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import {Link} from 'react-router-dom';
import './navbar.css';
import "bootstrap/dist/css/bootstrap.min.css";

export default class project extends Component {
    render() {

     return (
       <div className="container">
        <div className="layout_page">
            <div className="sidebar">
                <div className="side_scroll">
                    <div className="side_header">
                        <a title="CL_task" href="/project" className="sidebar_a">
                            <div className="avatar_container">
                                <div className="avatar">C</div>
                            </div>
                            <div className="sidebar-context-title">
                                CL_task
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
       </div>
     );

 }

}