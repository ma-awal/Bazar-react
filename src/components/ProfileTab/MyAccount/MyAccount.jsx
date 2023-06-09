import React from 'react';
import './My_account.css';
import { FaUser } from 'react-icons/fa';
const MyAccount = () => {
  return (
    <>
      <div className="My_account p-4   ">
        <h2 className=" text-center text-lg-start ">My account</h2>
        <form action="" className=" py-3   ">
          <div className="  text-center mb-4">
            <FaUser className="  icon rounded-circle  " />
            <h6 className=" mt-2 m-0 ">Awal</h6>
          </div>
          <div className="input_filed   row    ">
            <div className="input_form col-12 col-md-6">
              <div>
                <label htmlFor="name">Name</label>
                <input
                  type="name"
                  className="name form-control   "
                  id="name"
                  name="name"
                  placeholder="Name"
                />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="email form-control"
                  id="email"
                  name="email"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="input_form col-12 col-md-6">
              <div>
                <label htmlFor="password">Old Password</label>
                <input
                  type="password"
                  className="oldPassword form-control"
                  id="oldPassword"
                  name="oldPassword"
                  placeholder="Old password"
                />
              </div>
              <div>
                <label htmlFor="newPassword">New Password</label>
                <input
                  type="email"
                  className="newPassword form-control"
                  id="newPassword"
                  name="newPassword"
                  placeholder="New passwrod"
                />
              </div>
            </div>
          </div>
          <div className="  text-center   ">
            <button className="  btn btn-sm " type="submit">
              Save Change
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default MyAccount;
