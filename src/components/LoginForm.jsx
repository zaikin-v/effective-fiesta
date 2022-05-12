import {
    Button,
    Form,
    FormControl,
    FormFloating, FormGroup,
    FormLabel,
    Image,
} from "react-bootstrap";
import React from 'react';

import { authActions } from "../actions";
import {connect} from "react-redux";

const formStyle = {
    width: '300px',
    marginLeft: '42%',
    marginTop: '8%',
    marginBottom: '8%'
};

class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(e) {
        console.log(e.target)
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log("dsadadas")
        this.setState({submitted: true});
        const {username, password} = this.state;
        const {dispatch} = this.props;
        if (username && password) {
            console.log("dasdsa")
            dispatch(authActions.login(username, password));
        }
    }

    render() {
        const { loggingIn } = this.props;
        const { username, password, submitted } = this.state;
        console.log(this.state)
        return (
            <div className="form-sign" style={formStyle}>
                <Form className="form-sign" onSubmit={this.handleSubmit}>
                    <Image className="mb-4"
                           src="https://img.icons8.com/metro/452/cat.png"
                           width="72"
                           height="57"/>
                    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                        <FormGroup>
                        <FormLabel>Email address</FormLabel>
                        <FormControl name='username' type="text" placeholder="name@example.com" value={username} onChange={this.handleChange}/>
                        {submitted && !username &&
                            <div className="help-block">Password is required</div>
                        }
                        </FormGroup>
                            <FormGroup>

                            <FormLabel>Password</FormLabel>
                            <FormControl name='password' type="text" placeholder="Password" value={password} onChange={this.handleChange}/>
                            {submitted && !password &&
                                <div className="help-block">Password is required</div>
                            }
                            </FormGroup>
                    <Form.Check type="checkbox" label="Запомнить меня"></Form.Check>
                    <FormGroup>
                        <Button type="submit" variant="primary" onSubmit={this.handleSubmit}>Login</Button>
                    </FormGroup>
                </Form>
            </div>

        )
    }
}


function mapStateToProps(state) {
    const { loggingIn } = state.authentication;
    return {
        loggingIn
    };
}

export default connect(mapStateToProps)(LoginForm);
