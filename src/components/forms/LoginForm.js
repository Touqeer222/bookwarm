import React from "react";
import { Form, Button } from "semantic-ui-react";
import Validator from "validator";
import InlineError from "../messages/InlineError";
import PropTypes from "prop-types";

class LoginForm extends React.Component {
  state = {
    data: {
      email: "",
      password: ""
    },
    loading: false,
    errors: {}
  };

  onChange = e =>
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });
  onSubmit = () => {
    const errors = this.validate(this.state.data);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      this.props.submit(this.state.data);
    }
  };
  validate = data => {
    const errors = {};
    if (!data.password) errors.password = "Password cannot be blank";
    if (!Validator.isEmail(data.email)) errors.email = "Email is not correct";

    return errors;
  };
  render() {
    const { data, errors } = this.state;
    return (
      <div>
        Login Form
        <Form onSubmit={this.onSubmit}>
          <Form.Field error={!!errors.email}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="example@example.com"
              value={data.email}
              onChange={this.onChange}
            />
          </Form.Field>
          {errors.email && <InlineError text={errors.email} />}
          <Form.Field error={!!errors.email}>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              value={data.password}
              onChange={this.onChange}
            />
          </Form.Field>
          {errors.password && <InlineError text={errors.password} />}
          <br />
          <Button primary>Login</Button>
        </Form>
      </div>
    );
  }
}

LoginForm.propTypes = {
  submit: PropTypes.func.isRequired
};

export default LoginForm;
