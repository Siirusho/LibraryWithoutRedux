import "./style.css";
import React from "react";
import Form from "./components/Form";
import BookList from "../booklist/BookList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      status: " "
    };
  }
  handleEmail = (e) => {
    this.setState({
      email: e.target.value
    });
  };

  handlePassword = (e) => {
    this.setState({
      password: e.target.value
    });
  };

  handlelogin = () => {
    if (this.state.email === "1" && this.state.password === "1") {
      this.setState({
        status: "succeeded"
      });
    } else {
      this.setState({
        status: "failed"
      });
    }
  };
  logout = () => {
    this.setState({
      status: "",
      email: "",
      password: ""
    });
  };
  render() {
    if (this.state.status === "succeeded") {
      return <BookList logout={this.logout} />;
    }
    return (
      <Form
        email={this.state.email}
        password={this.state.password}
        status={this.state.status}
        handleEmail={this.handleEmail}
        handlePassword={this.handlePassword}
        handlelogin={this.handlelogin}
      />
    );
  }
}

export default App;
