import React from "react";
import { useSelector } from "react-redux";
import ProfileForm from "./ProfileForm";

export default function ProfileN() {
  const userDetails = useSelector((state) => state.userDetails);

  return (
    <div>
      <section class="section" id="offers">
        <div class="container">
          <h1>Hi {userDetails[0]}</h1>
          <br />
          <br />
          <br />
          <ProfileForm />
          <br />
          <br />
          <br />
          <div class="row">
            <div class="col-lg-4 offset-lg-4 text-center">
              <div class="section-heading">
                <h6>Klassy Week </h6>
                <h2>This Week’s Special Meal Offers</h2>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-lg-12">
              <div class="row" id="tabs">
                <div class="col-lg-12">
                  <div class="heading-tabs">
                    <div class="row">
                      <div class="col-lg-6 offset-lg-3">
                        <ul>
                          <li>
                            <img src="assets/images/tab-icon-01.png" alt="" />
                            Breakfast
                          </li>
                          <li>
                            <img src="assets/images/tab-icon-02.png" alt="" />
                            Lunch
                          </li>
                          <li>
                            <img src="assets/images/tab-icon-03.png" alt="" />
                            Dinner
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-lg-12">
                  <section class="tabs-content">
                    <article id="tabs-1">
                      <div class="row">
                        <div class="col-lg-6">
                          <div class="row">
                            <div class="left-list">
                              <div class="col-lg-12">
                                <div class="tab-item">
                                  <img
                                    src="assets/images/tab-item-01.png"
                                    alt=""
                                  />
                                  <h4>Fresh Chicken Salad</h4>
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur koit
                                    adipiscing elit, sed do.
                                  </p>
                                  <div class="price">
                                    <h6>$10.50</h6>
                                  </div>
                                </div>
                              </div>
                              <div class="col-lg-12">
                                <div class="tab-item">
                                  <img
                                    src="assets/images/tab-item-02.png"
                                    alt=""
                                  />
                                  <h4>Orange Juice</h4>
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur koit
                                    adipiscing elit, sed do.
                                  </p>
                                  <div class="price">
                                    <h6>$8.50</h6>
                                  </div>
                                </div>
                              </div>
                              <div class="col-lg-12">
                                <div class="tab-item">
                                  <img
                                    src="assets/images/tab-item-03.png"
                                    alt=""
                                  />
                                  <h4>Fruit Salad</h4>
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur koit
                                    adipiscing elit, sed do.
                                  </p>
                                  <div class="price">
                                    <h6>$9.90</h6>
                                  </div>
                                </div>
                              </div>
                              <div class="col-lg-12">
                                <div class="tab-item">
                                  <img
                                    src="assets/images/tab-item-03.png"
                                    alt=""
                                  />
                                  <h4>Fruit Salad</h4>
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur koit
                                    adipiscing elit, sed do.
                                  </p>
                                  <div class="price">
                                    <h6>$9.90</h6>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="col-lg-6">
                          <div class="row">
                            <div class="right-list">
                              <div class="col-lg-12">
                                <div class="tab-item">
                                  <img
                                    src="assets/images/tab-item-04.png"
                                    alt=""
                                  />
                                  <h4>Eggs Omelette</h4>
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur koit
                                    adipiscing elit, sed do.
                                  </p>
                                  <div class="price">
                                    <h6>$6.50</h6>
                                  </div>
                                </div>
                              </div>
                              <div class="col-lg-12">
                                <div class="tab-item">
                                  <img
                                    src="assets/images/tab-item-05.png"
                                    alt=""
                                  />
                                  <h4>Dollma Pire</h4>
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur koit
                                    adipiscing elit, sed do.
                                  </p>
                                  <div class="price">
                                    <h6>$5.00</h6>
                                  </div>
                                </div>
                              </div>
                              <div class="col-lg-12">
                                <div class="tab-item">
                                  <img
                                    src="assets/images/tab-item-06.png"
                                    alt=""
                                  />
                                  <h4>Omelette & Cheese</h4>
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur koit
                                    adipiscing elit, sed do.
                                  </p>
                                  <div class="price">
                                    <h6>$4.10</h6>
                                  </div>
                                </div>
                              </div>
                              <div class="col-lg-12">
                                <div class="tab-item">
                                  <img
                                    src="assets/images/tab-item-03.png"
                                    alt=""
                                  />
                                  <h4>Fruit Salad</h4>
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur koit
                                    adipiscing elit, sed do.
                                  </p>
                                  <div class="price">
                                    <h6>$9.90</h6>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
