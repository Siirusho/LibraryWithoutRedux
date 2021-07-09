import React from "react";
import BookList from "../../booklist/BookList";
import InvalidData from "./InvalidData";

class Form extends React.Component {
  render() {
    const {
      email,
      password,
      status,
      handleEmail,
      handlePassword,
      handlelogin
    } = this.props;
    return (
      <>
        {status === "succeeded" ? (
          <BookList />
        ) : (
          <div className="App">
            <h1>Library</h1>
            <form onSubmit={handlelogin}>
              <input
                className="input"
                value={email}
                onChange={handleEmail}
                placeholder="Enter email"
              />
              <input
                className="input"
                value={password}
                onChange={handlePassword}
                placeholder="Enter Password"
                type="password"
              />
              {status === "failed" ? <InvalidData /> : ""}

              <button id="btn">Log in</button>
            </form>
          </div>
        )}
      </>
    );
  }
}
export default Form;
