import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import './style/app.css';
import contacts from './data/contacts.json';

const htmlArray = [];

contacts.forEach((contact, index) => {
    htmlArray.push(<div key={index} className="contact" data-id="id">
        <span className="avatar small">&#9787;</span>
        <span className="title">{contact.firstName} {contact.lastName}</span>
    </div>);
});

const Main = () => (
    <div className="container">
        <header>&#9993; Contact Book</header>
        <div id="book">
            <div id="list">
                <h1>Contacts</h1>
                <div className="content">
                    <Contacts />
                </div>
            </div>
            <Details />
        </div>
    </div>
);

const Contacts = () => (
    htmlArray
);

const Details = () => (
    <div id="details">
        <h1>Details</h1>
        <div class="content">
            <div class="info">
                <div class="col">
                    <span class="avatar">&#9787;</span>
                </div>
                <div class="col">
                    <span class="name">Ivan</span>
                    <span class="name">Ivanov</span>
                </div>
            </div>
            <div class="info">
                <span class="info-line">&phone; 0887 123 456</span>
                <span class="info-line">&#9993; i.ivanov@gmail.com</span>
            </div>
        </div>
    </div>
);

ReactDOM.render(
    <Main />,
    document.getElementById('root')
);

//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
