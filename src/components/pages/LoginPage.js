import React from "react";
import LoginForm from "../forms/LoginForm";

class HomePage extends React.Component {
  submit = data => {
    console.log(data);
  };
  render() {
    return (
      <div>
        LoginPage
        <LoginForm submit={this.submit} />
      </div>
    );
  }
}

export default HomePage;
