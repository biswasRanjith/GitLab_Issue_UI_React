import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ReactDOM from "react-dom";
import {Link} from 'react-router-dom';
import './createissues.css';
import "bootstrap/dist/css/bootstrap.min.css";

export default class Home extends Component {



    render() {
        return (
            <div className="content_wrapper">
                <div className="mobile_overlay"></div>
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
                </div>

                <div className="container_fulid">
                    <div className="content">
                        <div className="flash_container">
                        </div>
                        <h3 className="page_title">New Issue</h3>
                        <hr></hr>
                        <form className="issue_form" id="new_issue" action="" method="post">
                            <input name="utf8" type="hidden"></input>
                            <div className="form_group">
                                <label className="col_form_label">Title</label>
                                <div className="col_sm_10">
                                    <input required="required" maxLength="255" autoFocus="autofocus" autoComplete="off" className="form_control" placeholder="Title" dir="auto" size="255" type="text" name="issue" id="issue_title"></input>
                                        <p className="form_text">
"Add" < a tabIndex="-1" href="https://gitlab.com/help/user/project/description_templates">description templates</a> 
"to help your contributors communicate effectively!"
                                        </p>
                                </div>
                            </div>
<div className="form_group">
    <label className="col_form_label" for="Issue decription">Description </label>
    <div className="col_sm_10">
        <div className="md_area">
            <div className="md_header">
                <ul className="nav_tabs">
                    <li className="md_header_tab">
                        <button className="js_md_write_button" tabIndex="-1">*****70
                            Write
                        </button>
                    </li>

                </ul>
            </div>
        </div>
        </div> 
            </div> 
                        </form>
                    </div>
                </div>
            </div>

        )
    }
}