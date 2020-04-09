import React, { Component } from 'react';
import { Button, Form, Nav, Navbar, FormControl, OverlayTrigger, Tooltip } from 'react-bootstrap';

function renderTooltip2(props) {
    return (
        <Tooltip id="button-tooltip" {...props}>
            New
        </Tooltip>
    );
}
function renderTooltip3(props) {
    return (
        <Tooltip id="button-tooltip" {...props}>
            Issues
        </Tooltip>
    );
}
function renderTooltip4(props) {
    return (
        <Tooltip id="button-tooltip" {...props}>
            Merge requests
        </Tooltip>
    );
}
function renderTooltip5(props) {
    return (
        <Tooltip id="button-tooltip" {...props}>
            To-Do List
        </Tooltip>
    );
}

function NavbarComp() {
    return (
        
            <Navbar expand="lg">
                <Navbar.Brand href="#home">THIS</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/"><Button style={{color:"blue"}}>Projects &nbsp;<i class="fa fa-angle-down"></i></Button></Nav.Link>
                        <Nav.Link href="/groups"><Button>Groups &nbsp;<i class="fa fa-angle-down"></i></Button></Nav.Link>
                        <Nav.Link href="/more"><Button>More &nbsp;<i class="fa fa-angle-down"></i></Button></Nav.Link>

    
                    </Nav>
                    <Nav>
                    <OverlayTrigger
                            placement="bottom"
                            delay={{ show: 50, hide: 50 }}
                            overlay={renderTooltip2}
                        >
                        
                            <Nav.Link href="/more"><Button><i class="fa fa-plus-square">  &nbsp;<i class="fa fa-angle-down"></i></i></Button></Nav.Link>
                       
                    </OverlayTrigger>
                    </Nav>

                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    </Form>
                    <Nav>
                    <OverlayTrigger
                            placement="bottom"
                            delay={{ show: 50, hide: 50 }}
                            overlay={renderTooltip3}
                        >
                        
                        <Nav.Link href="/more"><Button><i class="fa fa-clone"></i></Button></Nav.Link>
                       
                    </OverlayTrigger>
                    <OverlayTrigger
                            placement="bottom"
                            delay={{ show: 50, hide: 50 }}
                            overlay={renderTooltip4}
                        >
                        
                        <Nav.Link href="/more"><Button><i class="fa fa-random"></i></Button></Nav.Link>
                       
                    </OverlayTrigger>
                    <OverlayTrigger
                            placement="bottom"
                            delay={{ show: 50, hide: 50 }}
                            overlay={renderTooltip5}
                        >
                        
                        <Nav.Link href="/more"><Button><i class="fa fa-check-square-o"></i></Button></Nav.Link>
                       
                    </OverlayTrigger>
                        <Nav.Link href="/more"><Button><i class="fa fa-question-circle"></i> &nbsp;<i class="fa fa-angle-down"></i>
                        </Button></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        

    )
}

export default NavbarComp;