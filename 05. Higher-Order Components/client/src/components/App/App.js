import React, { Component } from "react";
import "./App.css";
import Article from "../Article/Article";
import RegisterForm from "../RegisterForm/RegisterForm";
import Navigation from "../Navigation/Navigation";
import BindingForm from "../BindingForm/BindingForm";
import warningWrapper from "../../hocs/warningWrapper";
import errorHandlingWrapper from "../../hocs/errorHandlingWrapper";

const ArticleWithWarning = errorHandlingWrapper(warningWrapper(Article));
const RegisterFormWithWarning = warningWrapper(RegisterForm);
const NavigationWithWarning = warningWrapper(Navigation);

class App extends Component {
  onSubmit(e, data) {
    e.preventDefault();
    console.log(data);
  }
  render() {
    return (
      <section className="App">
        <BindingForm onSubmit={this.onSubmit}>
          <h1>Create Article</h1>
          <input type="text" name="title" placeholder="title" />
          <input type="text" name="description" placeholder="description" />
        </BindingForm>
        <BindingForm onSubmit={this.onSubmit}>
          <h1>Login Form</h1>
          <input type="text" name="username" placeholder="username" />
          <input type="password" name="password" placeholder="password" />
        </BindingForm>
        <ArticleWithWarning />
        <RegisterFormWithWarning />
        <NavigationWithWarning />
      </section>
    );
  }
}

export default App;
