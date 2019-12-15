import React, { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import {Link} from "react-router-dom"
import { getcontact, deleteContact } from "../Actions";

const ContactList = () => {
  const isloading = useSelector(state => state.isloading)
  const contacts = useSelector(state => state.contacts)

  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getcontact());
  }, [dispatch]);
  return isloading ? (
    <h1 className="text-center text-info mt-5">Is Loading</h1>
  ) : (
    <div className="d-flex">
      {contacts.map(el => (
        <div
          className="card m-5 text-center"
          style={{ width: "18rem" }}
          key={el._id}
        >
          <div className="card-body">
            <h5 className="card-title">Name: {el.name}</h5>
            <h5 className="card-title">Tel: {el.tel}</h5>
            <h5 className="card-title">Email: {el.email}</h5>
            <Link to={`/edit-contact/${el._id}`}>
              <button className="btn btn-primary mr-3">Update</button>
            </Link>

            <button
              className="btn btn-danger ml-3"
              onClick={() => {
                deleteContact(el._id);
              }}
            >
              delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactList
