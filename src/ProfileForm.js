import React from "react";
import { useState } from "react";

export default function ProfileForm() {
  const [userName, setUserName] = useState("");
  return (
    <div className="profile-form">
      <div className="col-lg-9">
        <div className="contact-form">
          <div className="row">
            <div className="col-lg-12">
              <br />
              <h4>Setup your Profile</h4>
              <br />
              <br />
            </div>
            <div className="col-lg-12"></div>
            <div className="col-lg-6 col-sm-12">
              <label htmlFor="public">Your Public Address </label>
            </div>
            <div className="col-lg-6 col-sm-12 addressbox">
              <p>0x91b72178cac935f30979dfbd9d04017184d1e7d9 </p>
            </div>
            <div className="col-lg-6 col-sm-12">
              <label htmlFor="username">Username </label>
            </div>
            <div className="col-lg-6 col-sm-12">
              <fieldset>
                <input
                  name="username"
                  type="text"
                  id="email"
                  pattern="[^ @]*@[^ @]*"
                  placeholder={userName}
                  required=""
                  onChange={(e) => setUserName(e.target.value)}
                />
              </fieldset>
            </div>
            <div className="col-lg-6 col-sm-12">
              <label htmlFor="username">Enter Employee Id </label>
            </div>
            <div className="col-lg-6 col-sm-12">
              <fieldset>
                <input
                  name="employeeId"
                  type="text"
                  id="email"
                  pattern="[^ @]*@[^ @]*"
                  placeholder={userName}
                  required=""
                  onChange={(e) => setUserName(e.target.value)}
                />
              </fieldset>
            </div>
            <div className="col-lg-6 col-sm-12">
              <label htmlFor="public">Your Meal Type </label>
            </div>
            <div className="col-lg-6 col-sm-12">
              <fieldset>
                <select name="meal-rating" id="meal-rating">
                  <option value="1" name="1" id="1">
                    Veg
                  </option>
                  <option value="2" name="2" id="2">
                    NonVeg
                  </option>
                  <option value="3" name="3" id="3">
                    Vegan
                  </option>
                </select>
              </fieldset>
            </div>
            <div className="col-lg-12 col-sm-12">
            <br/><br/>
              <button className="proSub" type="submit">Submit </button>
              <br/><br/><br/>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
