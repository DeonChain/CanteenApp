import React from 'react'
import About from './About'
import './home.css'
import Wallet from './Wallet'
import {useSelector} from 'react-redux'


export default function Home() {
  const user = useSelector((state)=>state.user)

  
  return (
    <div className='homeElement'>
          <div id="top">
        <div className="homeElement">
            <div className="row">
                <div className="col-lg-4">
                    <div className="left-content">
                        <div className="inner-content">
                            <h4>KlassyCafe</h4>
                            <h6>THE BEST EXPERIENCE</h6>
                            <div className="main-white-button scroll-to-section">
                              {
                                !user?
                                <Wallet/>
                                : <h1>Visit Profile page</h1>
                              }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-8">
                    <div className="main-banner header-text">
                        <div className="Modern-Slider">
                          <div className="item">
                            <div className="img-fill">
                                <img className='mainimg' src="assets/images/slide-01.jpg" alt=""/>
                            </div>
                          </div>
                          <div className="item">
                            <div className="img-fill">
                                <img className='mainimg' src="assets/images/slide-02.jpg" alt=""/>
                            </div>
                          </div>
                          <div className="item">
                            <div className="img-fill">
                                <img className='mainimg' src="assets/images/slide-03.jpg" alt=""/>
                            </div>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <About/>
    </div>
  )
}
