import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";

import ContactList from "./Components/ContactList";
import AddOrEditContact from "./Components/AddOrEditContact";

const app = () => {
  return (
    <Provider store={store}>
      <Router>
        <Link to="/">
          <h1 className="text-center text-primary my-5">My Contact</h1>
        </Link>
        <div className=" d-flex justify-content-center">
          <Link to="/contact-list">
            <button className="btn btn-outline-info mr-2 px-4">
              Contact List
            </button>
          </Link>
          <Link to="/ajouter-contact">
            <button className="btn btn-outline-info ml-2">
              Add Contact App
            </button>
          </Link>
        </div>

        <Route exact path="/contact-list" component={ContactList} />
        <Route exact path="/ajouter-contact" component={AddOrEditContact} />
        <Route exact path="/edit-contact/:id" component={AddOrEditContact} />
      </Router>
    </Provider>
  );
};

export default app;
