import React, { Component } from 'react'
import { Button, Container, Row, Col, Form } from 'react-bootstrap';
import Markdown from './Markdown';
import { Link } from '@reach/router';
import './project.css';

class Newissue extends Component {

    constructor(props) {
        super(props)

        this.state = {
            title: "",
            description: "",
            checkbox: false,
            milestone: "",
            labels: "",
            weight: "",
            date: "",
            Addissue: props.Addissue
        }
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleCheckbox = (event) => {
        this.setState({ checkbox: !this.state.checkbox });
    }

    handleSubmit = (event) => {

        var hours= new Date();
        var issue = {
            title: this.state.title,
            checkbox: this.state.checkbox,
            milestone: this.state.milestone,
            labels: this.state.labels,
            weight: this.state.weight,
            date: this.state.date,
            hours: hours.getHours()
        }
        this.state.Addissue(issue);
    }


    render() {
        return (
            <Container-fulid>
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
                                <a className="breadcrumbs_links_a" href="#">Issues >

                                </a>
                            </li>
                            <li>
                                <a className="breadcrumbs_links_a" href="#">New

                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            <hr />
<h4>New Issue</h4>
                <Form>
                    <hr />
                    <Form.Group as={Row} >
                        <Form.Label column sm="2">
                            Title
                    </Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" placeholder="Title" name="title" value={this.state.title} onChange={this.handleChange} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} >
                        <Form.Label column sm="2">Description</Form.Label>
                        <Col sm="10">
                            <Markdown />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formBasicCheckbox">
                        <Col sm="2"></Col>
                        <Col sm="10">
                            <Form.Check type="checkbox" label="Check me out" name="checkbox" value={this.state.checkbox} onChange={this.handleCheckbox} />
                        </Col>
                    </Form.Group>
                    <hr />
                    <Row>
                        <Col sm="6">
                            <Form.Group as={Row} >
                                <Form.Label column sm="4">Assignee</Form.Label>
                                <Col sm="8">
                                    <Form.Control as="select" placeholder="Assignee" name="assignee" value={this.state.assignee} onChange={this.handleChange}>
                                        <option>Unassigned</option>
                                        <option>Ranjith</option>
                                    </Form.Control>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} >
                                <Form.Label column sm="4">Milestone</Form.Label>
                                <Col sm="8">
                                    <Form.Control as="select" placeholder="Milestone" name="milestone" value={this.state.milestone} onChange={this.handleChange}>
                                        <option>No Milestones</option>
                                        <option>Milestones 1</option>
                                    </Form.Control>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} >
                                <Form.Label column sm="4">Labels</Form.Label>
                                <Col sm="8">
                                    <Form.Control as="select" placeholder="Labels" name="labels" value={this.state.labels} onChange={this.handleChange}>
                                        <option>No Labels</option>
                                        <option>Labels 1</option>
                                    </Form.Control>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} >
                                <Form.Label column sm="4">Weight</Form.Label>
                                <Col sm="8">
                                    <Form.Control type="text" placeholder="Enter a number" name="weight" value={this.state.Weight} onChange={this.handleChange} />
                                </Col>
                            </Form.Group>
                        </Col>
                        <Col sm="5">
                            <Form.Group as={Row} >
                                <Form.Label column sm="4">Assignee</Form.Label>
                                <Col sm="8">
                                    <Form.Control type="date" name="date" value={this.state.date} onChange={this.handleChange} />
                                </Col>
                            </Form.Group>
                        </Col>
                    </Row>
                    <hr />
                    <Link to="../"><Button variant="success" onClick={this.handleSubmit}>Submit issue</Button>
                    </Link>
                </Form>
            </Container-fulid>
        )
    }
}

export default Newissue
