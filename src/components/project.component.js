import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { Accordion, Card, Row, Col} from 'react-bootstrap';
import Avatar from 'react-avatar';
import './project.css';
import { Router, Link } from '@reach/router'
import Issues from './Issues';
import Newissue from './Newissue';

export default class Project extends Component {

constructor(props) {
    super(props)

    this.state = {
         issues:[{title:"first issue",author:"Ranjith", date:"03/24/20", hours:10}]
    };
    console.log(this.state.issues);
}

Addissue=(issue)=>{
    this.setState(prevState=>({
        issues:[...prevState.issues,issue]
    }));

    console.log(this.state.issues);

}



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
                        <Accordion defaultActiveKey="0">
                      
                        <ul className="sidebar_toplevel_item">
                            
                            <li className="sidebar_li">
                            <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="0">
                                <a className="sidebar_a" href="#">
                                
                                    <span className="nav_item_names">
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
                                    </Card.Body>
                                    </Accordion.Collapse>
                        
                                </ul>
                                </Card>
                            </li>
                            <Card>
                            <li className="sidebar_li">
                            
                            <ul className="sidebar_sublevel_items">
          
                            <Accordion.Toggle as={Card.Header} eventKey="0">
                                <div className="sidebar_a">
                            <span className="nav_item_names">
                                <Link to="issues">Issues</Link>
                                </span>
                                </div>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                        <ul className="sidebar_sublevel_items">
                                
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
                                                <span className="sublevel_span">Milestoness</span>
                                            </a>
                                        </li>
                                       
                                    </ul>
                                    </Card.Body>
                                    </Accordion.Collapse>
                                    </ul>
                                   
                                </li>
                                </Card>
                            </ul>
                            
                            </Accordion> 
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