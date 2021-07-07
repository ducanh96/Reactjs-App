import {React, Fragment} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home';
import App from './App';
import Posts from './Posts';
import Post from './Post';
import Login from './Login';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

const MyApp = () => {
  return (
    <Router>
      <section>
        <nav>
          <span>
            <Link to="/home">Home</Link>
          </span>

          <span>
            <Link to="/posts">Posts</Link>
          </span>
          <span>
            <Link to="home">Profile</Link>
          </span>
          <span>
            <Link to="/login">Login</Link>
          </span>
        </nav>
        <section>
      <Fragment>
        <Route exact path="/home" component={Home} />
        <Route exact path="/" component={Home} />
        <Route exact path="/posts" component={Posts} />
        <Route path="/posts/:id" component={Post} />
        <Route path="/login" component={Login} />
      </Fragment>
        </section>
      </section>
    </Router>
  )
}

ReactDOM.render(
  <MyApp></MyApp>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
