import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { Accordion, Card, Row, Col } from 'react-bootstrap';
import Avatar from 'react-avatar';
import './project.css';
import { Router, Link } from '@reach/router'
import Issues from './Issues';
import Newissue from './Newissue';

export default class Project extends Component {

    constructor(props) {
        super(props)

        this.state = {
            issues: [{ title: "first issue", author: "Ranjith", date: "03/24/2020", hours: 10 }]
        };
        console.log(this.state.issues);
    }

    Addissue = (issue) => {
        this.setState(prevState => ({
            issues: [...prevState.issues, issue]
        }));

        console.log(this.state.issues);

    }



    render() {

        return (

            <div>
                <div className="layout_page" style={{marginLeft:"25px"}}>
                    <div className="sidebar">
                        <div className="side_scroll">
                            <div className="side_header">
                                <a title="CL_task" href="/project" className="sidebar_a">
                                    <div className="avatar_container">
                                        <div className="avatar">C</div>
                                    </div>
                                    <div className="sidebar_context_title">
                                        CL_task
                        </div>
                                </a>
                            </div>


                            <ul className="sidebar_toplevel_item">
                                <Accordion>
                                    <li className="sidebar_li">

                                        <Card>
                                            <Accordion.Toggle as={Card.Header} eventKey="0">
                                                <a className="sidebar_a txtHvr" href="#">
                                                <i class="fa fa-home sideNavIcon"></i>
                                                    <span className="nav_item_names sideNavLink">
                                                        Project Overview
                                                    </span>
                                                </a>
                                            </Accordion.Toggle>
                                            <ul className="sidebar_sublevel_items">
                                                {/* <li className="flyout_items">
                            <a className="flyout_items_a" href="#">
                                <strong className="flyout_items_strong">
                                    Project Overview
                                </strong>
                            </a>
                        </li> */}
                                                <Accordion.Collapse eventKey="0">
                                                    <Card.Body>
                                                        {/* <li className="flyout_divider"></li> */}
                                                        <li className="sublevel_inner">
                                                            <a className="sublevel_a" href="#">
                                                                <span className="sublevel_span ml-20 ">Details</span>
                                                            </a>
                                                        </li>

                                                        {/* <li className="flyout_divider"></li> */}
                                                        <li className="sublevel_inner">
                                                            <a className="sublevel_a" href="#">
                                                                <span className="sublevel_span ml-20 ">Activity</span>
                                                            </a>
                                                        </li>
                                                        {/* <li className="flyout_divider"></li> */}
                                                        <li className="sublevel_inner">
                                                            <a className="sublevel_a" href="#">
                                                                <span className="sublevel_span ml-20 ">Release</span>
                                                            </a>
                                                        </li>
                                                    </Card.Body>
                                                </Accordion.Collapse>

                                            </ul>
                                        </Card>
                                    </li>

                                    <li className="sidebar_li">

                                        <ul className="sidebar_sublevel_items">
                                            <Card>
                                                <Accordion.Toggle as={Card.Header} eventKey="1">
                                                    <div className="sidebar_a"> 
                                                    
                                                        <span className="nav_item_names">
                                                        
                                                            <Link to="issues" className="sideNavLink txtHvr"><i class="fa fa-clone sideNavIcon"></i>Issues</Link>
                                                        </span>
                                                    </div>
                                                </Accordion.Toggle>
                                                <ul className="sidebar_sublevel_items">
                                                    <Accordion.Collapse eventKey="1">
                                                        <Card.Body>
                                                            <li className="flyout_divider"></li>
                                                            <li className="sublevel_inner">
                                                                <a className="sublevel_a" href="#">
                                                                    <span className="sublevel_span ml-20 ">List</span>
                                                                </a>
                                                            </li>

                                                            <li className="flyout_divider"></li>
                                                            <li className="sublevel_inner">
                                                                <a className="sublevel_a" href="#">
                                                                    <span className="sublevel_span ml-20 ">Boards</span>
                                                                </a>
                                                            </li>
                                                            <li className="flyout_divider"></li>
                                                            <li className="sublevel_inner">
                                                                <a className="sublevel_a" href="#">
                                                                    <span className="sublevel_span ml-20 ">Labels</span>
                                                                </a>
                                                            </li>
                                                            <li className="flyout_divider"></li>
                                                            <li className="sublevel_inner">
                                                                <a className="sublevel_a" href="#">
                                                                    <span className="sublevel_span ml-20 ">Service Desk</span>
                                                                </a>
                                                            </li>
                                                            <li className="flyout_divider"></li>
                                                            <li className="sublevel_inner">
                                                                <a className="sublevel_a" href="#">
                                                                    <span className="sublevel_span ml-20 ">Milestoness</span>
                                                                </a>
                                                            </li>
                                                        </Card.Body>
                                                    </Accordion.Collapse>

                                                </ul>

                                            </Card>
                                        </ul>

                                    </li>
                                </Accordion>
                            </ul>


                        </div>

                    </div>
                    <Router>
                        <Issues path="issues" issues={this.state.issues} />
                        <Newissue path="issues/new" Addissue={this.Addissue} />
                    </Router>
                </div>

            </div>
        );

    }

}