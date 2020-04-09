import React from 'react'
import { Button, Container, Row, Col, DropdownButton, Dropdown,Tooltip, Form,OverlayTrigger, FormControl,InputGroup} from 'react-bootstrap';
import { Router, Link } from '@reach/router'
import Issuecontent from './Issuecontent';
import './project.css';

function renderTooltip(props) {
    return (
        <Tooltip id="button-tooltip" {...props}>
            subscribe to rss
        </Tooltip>
    );
}

function renderTooltip1(props) {
    return (
        <Tooltip id="button-tooltip" {...props}>
            subscribe to calendar
        </Tooltip>
    );
}

function renderTooltip2(props) {
    return (
        <Tooltip id="button-tooltip" {...props}>
            Export as csv
        </Tooltip>
    );
}

function renderTooltip3(props) {
    return (
        <Tooltip id="button-tooltip" {...props}>
            Import csv
        </Tooltip>
    );
}



function Issues(props) {
    const issues=props.issues;
    console.log(issues);
    return (
        <div style={{marginRight:"30px"}}>
            <div className="content_fulid">
            <div className="content">
            <div className="breadCrumbs">
                <div className="breadcrumbs_container">
                    <div className="breadcrumbs_links">
                        <ul className="list_unstyled">
                            <li>
                                <a className="breadcrumbs_links_a" href="#">ranjithbiswas755 >

                                </a>
                            </li>
                            <li>
                                <a className="breadcrumbs_links_a" href="#">CL_task >

                                </a>
                            </li>
                            <li>
                                <a className="breadcrumbs_links_a" href="#">Issues

                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            <hr />
            <Row>
                <Col>
                
                            <a className="active_a">
                                <span>Open</span>
                            </a> &nbsp;
                            <a>
                                <span>Closed</span>
                            </a> &nbsp;
                            <a>
                                <span>All</span>
                            </a>
                    
                </Col> 
    <Col></Col>
            <Col sm="20">  
            <OverlayTrigger placement="bottom" delay={{ show: 50, hide: 50 }} overlay={renderTooltip}>
            <button className="button_tool"><i class="fa fa-rss"></i></button></OverlayTrigger> &nbsp;
            <OverlayTrigger placement="bottom" delay={{ show: 50, hide: 50 }} overlay={renderTooltip1}>
            <button className="button_tool"><i class='far fa-calendar'style={{color:"grey"}}></i></button></OverlayTrigger> &nbsp; 
            <OverlayTrigger placement="bottom" delay={{ show: 50, hide: 50 }} overlay={renderTooltip2}>
            <button className="button_tool"><i class='fas fa-upload' style={{color:"grey"}}></i></button></OverlayTrigger>
            <OverlayTrigger placement="bottom" delay={{ show: 50, hide: 50 }} overlay={renderTooltip3}> 
            <button className="button_tool"> <i class='fas fa-download' style={{color:"grey"}}></i></button></OverlayTrigger>&nbsp;
            <button className="button_tool">Edit Issues</button> &nbsp;             
                    <Link to="new"><Button variant="success" >New issue</Button></Link>
                </Col> 
            </Row>
            <hr />
            <div style={{colo:"#2e2e2e"}}>
            <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text id="inputGroup-sizing-default">Recent Searches <i class="fa fa-angle-down"></i></InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl
      aria-label="Default"
      aria-describedby="inputGroup-sizing-default"
      placeholder="searches"
    /> &nbsp;
    <InputGroup.Prepend>
      <InputGroup.Text id="inputGroup-sizing-default" style={{backgroundColor:"white"}}>Created Date <i class="fa fa-angle-down"></i></InputGroup.Text>
    </InputGroup.Prepend>
    <button>
    <i class='fas fa-sort-amount-down-alt'></i></button>
      </InputGroup>
      </div>
                  
            <hr/>
            { issues.map((issue,index)=><Issuecontent key={index} issue={issue} index={index} />)}
            
            </div>
            </div>
            </div> 
            </div>
    )
}

export default Issues
