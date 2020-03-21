import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import {Link} from 'react-router-dom';
import './project.css';
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
                <ul className="sidebar_toplevel_item">
                    <li className="sidebar_li">
                        <a className="sidebar_a" href="#">

<span className="nav_item_names">
    Project Overview
</span>
                        </a>
                        <ul className="sidebar_sublevel_items">
                            {/* <li className="flyout_items">
                                <a className="flyout_items_a" href="#">
                                    <strong className="flyout_items_strong">
                                        Project Overview
                                    </strong>
                                </a>
                            </li> */}
<li className="flyout_divider"></li>
<li className="sublevel_inner">
    <a className="sublevel_a" href="#">
        <span className="sublevel_span">Details</span>
    </a>
</li>

<li className="flyout_divider"></li>
<li className="sublevel_inner">
    <a className="sublevel_a" href="#">
        <span className="sublevel_span">Activity</span>
    </a>
</li>
<li className="flyout_divider"></li>
<li className="sublevel_inner">
    <a className="sublevel_a" href="#">
        <span className="sublevel_span">Release</span>
    </a>
</li>
       
                        </ul>
                    </li>
<li className="sidebar_li">
                        <a className="sidebar_a" href="#">

<span className="nav_item_names">
    Issues
</span>
                        </a>
                        <ul className="sidebar_sublevel_items">
                            {/* <li className="flyout_items">
                                <a className="flyout_items_a" href="#">
                                    <strong className="flyout_items_strong">
                                        Project Overview
                                    </strong>
                                </a>
                            </li> */}
<li className="flyout_divider"></li>
<li className="sublevel_inner">
    <a className="sublevel_a" href="#">
        <span className="sublevel_span">List</span>
    </a>
</li>

<li className="flyout_divider"></li>
<li className="sublevel_inner">
    <a className="sublevel_a" href="#">
        <span className="sublevel_span">Boards</span>
    </a>
</li>
<li className="flyout_divider"></li>
<li className="sublevel_inner">
    <a className="sublevel_a" href="#">
        <span className="sublevel_span">Labels</span>
    </a>
</li>
<li className="flyout_divider"></li>
<li className="sublevel_inner">
    <a className="sublevel_a" href="#">
        <span className="sublevel_span">Service Desk</span>
    </a>
</li>
<li className="flyout_divider"></li>
<li className="sublevel_inner">
    <a className="sublevel_a" href="#">
        <span className="sublevel_span">Milestones</span>
    </a>
</li>
                        </ul>
                    </li>
<li>bkjbkljn</li>
                </ul>

                </div>
            </div>
        </div>
       </div>
     );

 }

}