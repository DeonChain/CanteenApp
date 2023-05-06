import React, { useEffect, useState } from 'react'
import {useSelector} from 'react-redux'
import { useDispatch } from 'react-redux'
import {Add} from './states/reducers/Transactions'

export default function Feedback() {
  const dispatch = useDispatch();
  const transactions = useSelector((state)=>state.transactions)

  const [mealRating,setmealRating] = useState("9")
  const [timeRating,setTimeRating] = useState("9")
  const [staffRating,setStaffRating] = useState("9")

  return (
    <div>

          <section class="section" id="reservation">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 align-self-center">
                    <div class="left-text-content">
                        <div class="section-heading">
                            <h6>Any Problems? Let us know</h6>
                            <h2>Here is a Feedback box which tracks all your complaints</h2>
                        </div>
                        <p>In Case you wanted to sort something mutually or you have a special request to consider. Feel Free to contact us</p>
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="phone">
                                    <i class="fa fa-phone"></i>
                                    <h4>Phone Numbers</h4>
                                    <span><a href="#">080-090-0990</a><br></br><a href="#">080-090-0881</a></span>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="message">
                                    <i class="fa fa-envelope"></i>
                                    <h4>Emails</h4>
                                    <span><a href="#">hello@Klassy.com</a><br></br><a href="#">suggestions@klassy.com</a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="contact-form">
                        <form id="contact">
                          <div class="row">
                            <div class="col-lg-12">
                                <h4>Canteen Weekly Feedback</h4>
                            </div>
                            <div class="col-md-12 col-sm-">
                              <fieldset>
                                <select name="meal-rating" id="meal-rating" onChange={(e)=>setmealRating(e.target.value)}>
                                    <option value="0" autoFocus>Overall Meal Rating</option>
                                    <option value="1" name="1" id="1">1</option>
                                    <option value="2" name="2" id="2">2</option>
                                    <option value="3" name="3" id="3">3</option>
                                    <option value="4" name="4" id="4">4</option>
                                    <option value="5" name="5" id="5">5</option>
                                    <option value="6" name="6" id="6">6</option>
                                    <option value="7" name="7" id="7">7</option>
                                    <option value="8" name="8" id="8">8</option>
                                    <option value="9" name="9" id="9">9</option>
                                    <option value="10" name="10" id="10">10</option>
                                </select>
                              </fieldset>
                            </div>
                            <div class="col-md-12 col-sm-12">
                              <fieldset>

                    
                                <select name="time-rating" id="time-rating" onChange={(e)=>setTimeRating(e.target.value)}>
                                    <option value="0" autoFocus>Food on Time? Rate</option>
                                    <option value="1" name="1" id="1">1</option>
                                    <option value="2" name="2" id="2">2</option>
                                    <option value="3" name="3" id="3">3</option>
                                    <option value="4" name="4" id="4">4</option>
                                    <option value="5" name="5" id="5">5</option>
                                    <option value="6" name="6" id="6">6</option>
                                    <option value="7" name="7" id="7">7</option>
                                    <option value="8" name="8" id="8">8</option>
                                    <option value="9" name="9" id="9">9</option>
                                    <option value="10" name="10" id="10">10</option>
                                </select>
                              </fieldset>
                            </div>
                            <div class="col-md-12 col-sm-12">
                              <fieldset>
                                <select name="staff-behaviour" id="staff-behaviour" onChange={(e)=>setStaffRating(e.target.value)}>
                                    <option value="0">Staff Behavior? Rate</option>
                                    <option value="1" name="1" id="1">1</option>
                                    <option value="2" name="2" id="2">2</option>
                                    <option value="3" name="3" id="3">3</option>
                                    <option value="4" name="4" id="4">4</option>
                                    <option value="5" name="5" id="5">5</option>
                                    <option value="6" name="6" id="6">6</option>
                                    <option value="7" name="7" id="7">7</option>
                                    <option value="8" name="8" id="8">8</option>
                                    <option value="9" name="9" id="9">9</option>
                                    <option value="10" name="10" id="10">10</option>
                                </select>
                              </fieldset>
                            </div>


                            {/* <button onClick={()=>dispatch(Add(transactions))}>Click to add transaction</button> */}

                            {/* <div class="col-lg-6 col-sm-12">
                              <fieldset>
                                <input name="name" type="text" id="name" placeholder="Your Name*" required=""/>
                              </fieldset>
                            </div>
                            <div class="col-lg-6 col-sm-12">
                              <fieldset>
                              <input name="email" type="text" id="email" pattern="[^ @]*@[^ @]*" placeholder="Your Email Address" required=""/>
                            </fieldset>
                            </div>
                            <div class="col-lg-6 col-sm-12">
                              <fieldset>
                                <input name="phone" type="text" id="phone" placeholder="Phone Number*" required=""/>
                              </fieldset>
                            </div>
                            <div class="col-md-6 col-sm-12">
                              <fieldset>
                                <select value="number-guests" name="number-guests" id="number-guests">
                                    <option value="number-guests">Number Of Guests</option>
                                    <option name="1" id="1">1</option>
                                    <option name="2" id="2">2</option>
                                    <option name="3" id="3">3</option>
                                    <option name="4" id="4">4</option>
                                    <option name="5" id="5">5</option>
                                    <option name="6" id="6">6</option>
                                    <option name="7" id="7">7</option>
                                    <option name="8" id="8">8</option>
                                    <option name="9" id="9">9</option>
                                    <option name="10" id="10">10</option>
                                    <option name="11" id="11">11</option>
                                    <option name="12" id="12">12</option>
                                </select>
                              </fieldset>
                            </div>
                            <div class="col-lg-6">
                                <div id="filterDate2">    
                                  <div class="input-group date" data-date-format="dd/mm/yyyy">
                                    <input  name="date" id="date" type="text" class="form-control" placeholder="dd/mm/yyyy"/>
                                    <div class="input-group-addon" >
                                      <span class="glyphicon glyphicon-th"></span>
                                    </div>
                                  </div>
                                </div>   
                            </div>
                            <div class="col-md-6 col-sm-12">
                              <fieldset>
                                <select value="time" name="time" id="time">
                                    <option value="time">Time</option>
                                    <option name="Breakfast" id="Breakfast">Breakfast</option>
                                    <option name="Lunch" id="Lunch">Lunch</option>
                                    <option name="Dinner" id="Dinner">Dinner</option>
                                </select>
                              </fieldset>
                            </div> */}
                            <div class="col-lg-12">
                              <fieldset>
                                <textarea name="message" rows="6" id="message" placeholder="Message" required=""></textarea>
                              </fieldset>
                            </div>
                            <div class="col-lg-12">
                              <fieldset>
                                <button type="submit" id="form-submit" class="main-button-icon" onClick={()=>dispatch(Add(`type-weekly review && meal-rating ${mealRating}`))}>Submit Feedback</button>
                              </fieldset>
                            </div>
                          </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}
