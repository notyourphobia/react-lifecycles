import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import 'bootstrap/dist/css/bootstrap.min.css';

export class FormComp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            preTextGlobal: '',
            textGloblaTitle: '',
            handleClickCall: false
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    componentDidMount() {
        console.log('Rendered Form')
    }
    handleChange(event){
        let string = event.target.value;
        this.setState({
            title: string,
        })
    }
        handleClick() {
            if (this.state.textGloblaTitle !== this.state.title){
            this.setState({
                textGloblaTitle: this.state.title,
                handleClickCall: true
            })
        }
    }
    componentDidUpdate() {
        if(this.state.handleClickCall){
            console.log('Title changed')
        }
    }
    // handleChange(event){
    //     let string = event.target.value;
    //     this.setState({
    //         title: string,
    //         preTextGlobal: this.state.textGloblaTitle,
    //     })
    // }
    //     handleClick() {
    //         if (this.state.textGloblaTitle !== this.state.title){
    //         this.setState({
    //             textGloblaTitle: this.state.title
    //         })
    //     }
    // }
    // componentDidUpdate() {
    //     if(this.state.preTextGlobal !== this.state.textGloblaTitle){
    //         console.log('Title changed')
    //     }
    // }
    render() {
        return (
            <Container className='py-5 '>
                <Form>
                    <Form.Group>
                        <Col className='text-center'>
                            <Form.Label htmlFor='myform'>
                                <h1>{this.state.textGloblaTitle}</h1>
                            </Form.Label>
                        </Col>
                        <Form.Control
                            size="lg"
                            type="text"
                            id='myform'
                            ref='myform'
                            name='myform'
                            placeholder="Some random text..."
                            onChange={this.handleChange} />
                    </Form.Group>
                    <Col className='text-center'>
                        <Button variant="success" type='button' onClick={this.handleClick}>
                            Submit
                        </Button>
                    </Col>
                </Form>
            </Container>
        );
    }
}

export default FormComp;
