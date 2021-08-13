import React from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
} from "react-router-dom";
// import ReactDOM from "react-dom";
import "./App.css";

// Components can be define like this when there are large contents
// const Home = () => <h1>Home Component</h1>;
// const About = () => <h1>About Component</h1>;
// const NotFound = () => <h2>Not found</h2>;
const Content = (_) => (
  <div className="list-group">
    <NavLink
      className="list-group-item"
      exact
      activeClassName="active"
      to="/content/sports"
    >
      Sports
    </NavLink>
    <NavLink
      className="list-group-item"
      activeClassName="active"
      to="/content/city"
    >
      City
    </NavLink>
    <Route path="/content/:contentName" component={ContentDetails}></Route>
  </div>
);
const ContentDetails = (props) => (
  <div>
    {props.match.params.contentName ? (
      <div>
        <img
          src={
            "http://lorempixel.com/400/200/" +
            props.match.params.contentName +
            "/1/"
          }
          alt=""
        />
      </div>
    ) : (
      ""
    )}
  </div>
);
const Links = () => {
  return (
    <div className="list-group">
      <NavLink
        className="list-group-item"
        exact
        activeClassName="active"
        to="/"
      >
        Home
      </NavLink>
      <NavLink className="list-group-item" activeClassName="active" to="/about">
        About
      </NavLink>
      <NavLink
        className="list-group-item"
        activeClassName="active"
        to="/content"
      >
        Content
      </NavLink>
    </div>
  );
};

const App = () => (
  <Router>
    <div className="row">
      <section className="col-sm-4">
        <Links />
      </section>
      <section className="col-sm-8">
        <Switch>
          <Route
            exact
            path="/"
            component={() => <h1>Home Component</h1>}
          ></Route>
          <Route
            path="/about"
            component={() => <h1>About Component</h1>}
          ></Route>
          <Route path="/content" component={Content}></Route>
          <Route component={() => <h1>Not Found</h1>}></Route>
        </Switch>
      </section>
    </div>
  </Router>
);

export default App;
