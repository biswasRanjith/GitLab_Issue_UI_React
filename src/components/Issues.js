import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ReactDOM from "react-dom";
import './project.css';
import { Link } from "@reach/router";
import newissue from './createIssue.component'

function Issues() {
    return (
        <div>
            <div className="content_wrapper" id="Issues" name="issues">

                <div className="mobile_layover"></div>
                <div className="alret_wrapper">
                    <nav className="breadcrumbs" role="navigation">
                        <div className="breadcrumbs_container">
                            <button className="toggle_mobile_nav" name="button" type="button">
                                <span className="sr_only">Open Slider</span>
                                <i aria-hidden="true" data-hidden="true" className="fa_fa_bars"></i>
                            </button>
                            <div className="breadcrumbs_links">
                                <ul className="list_unstyled">
                                    <li>
                                        <a href="/">ranjithbiswas755/</a>
                                    </li>
                                    <li>
                                        <a href="/">CL_task/</a>
                                    </li>
                                    <li>
                                        <a href="/project">Issues</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <div className="d_flex"></div>
                    <div className=""> </div>
                </div>
                <div className="container_fluid">
                    <div className="content" id="content-body">
                        <div className="flash_container">
                        </div>
                        <div className="text_content">
                            <h4> this is an issue tracker</h4>
                            <p> Issues can be bugs, tasks or ideas to be discussed. Also, issues are searchable and filterable.</p>
                        </div>
                        <div className="text_center">
                            
                            <a className="btn_sucess" title="New issue" id="new-issue-link">
                            <Link to="/newissue">
                                New Issue
                            </Link>
                            </a>
                            
                        </div>

                    </div>
                </div>

            </div>
           
        </div>
    )
}

export default Issues
