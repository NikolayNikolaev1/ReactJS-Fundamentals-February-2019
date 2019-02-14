import React, { Component } from 'react';
import './App.css';

const Contact = () => (<div class="contact" data-id="id">
  <span class="avatar small">&#9787;</span>
  <span class="title">Ivan Ivanov</span>
</div>);

// ReactDom.render(
//   <Contact/>,
//   document.getElementById('root')
// );

class App extends Component {
  render() {
    return (
      <div class="container">
        <header>&#9993; Contact Book</header>
        <div id="book">
          <div id="list">
            <h1>Contacts</h1>
            <div class="content">

              <div class="contact" data-id="id">
                <span class="avatar small">&#9787;</span>
                <span class="title">Jordan Kirov</span>
              </div>

              <div class="contact" data-id="id">
                <span class="avatar small">&#9787;</span>
                <span class="title">Maria Petrova</span>
              </div>
            </div>
          </div>
          
        </div>
        <footer>Contact Book SPA &copy; 2017</footer>
      </div>
    );
  }
}

export default App;
