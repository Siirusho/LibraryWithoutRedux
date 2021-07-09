import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./login/App";
import BookList from "./booklist/BookList";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
