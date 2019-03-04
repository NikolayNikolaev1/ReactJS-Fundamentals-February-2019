import React, { Component } from "react";
import "./App.css";
import Article from "../Article/Article";
import RegisterForm from "../RegisterForm/RegisterForm";
import Navigation from "../Navigation/Navigation";
import warningWrapper from "../../hocs/warningWrapper";
import errorHandlingWrapper from "../../hocs/errorHandlingWrapper";

const ArticleWithWarning = errorHandlingWrapper(warningWrapper(Article));
const RegisterFormWithWarning = warningWrapper(RegisterForm);
const NavigationWithWarning = warningWrapper(Navigation);

class App extends Component {
  render() {
    return (
      <section className="App">
        <ArticleWithWarning />
        <RegisterFormWithWarning />
        <NavigationWithWarning />
      </section>
    );
  }
}

export default App;
