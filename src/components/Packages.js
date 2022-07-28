import "./Packages.css"

import React from 'react'
import { Link } from "react-router-dom"

const Packages = () => {
  return (
    <div className="Packages">
        <div className="card-container">
            <div className="card-1">
                <h3>Silver</h3>
                <span className="bar"></span>
                <p className="btc">$500</p>
                <p>- 3 Days -</p>
                <p>- Transport -</p>
                <p>- Louge -</p>
                <p>- Food -</p>
                <p>- Fun Activities -</p>
                <Link to="/Booking" className="btn-1">Book Now</Link>
            </div>
            <div className="card-2">
                <h3>Gold</h3>
                <span className="bar"></span>
                <p className="btc">$1000</p>
                <p>- 7 Days -</p>
                <p>- Transport -</p>
                <p>- Louge -</p>
                <p>- Food -</p>
                <p>- Fun Activities -</p>
                <Link to="/Booking" className="btn-1">Book Now</Link>
            </div>
            <div className="card-3">
                <h3>Diamond</h3>
                <span className="bar"></span>
                <p className="btc">$2000</p>
                <p>-  14 Days -</p>
                <p>- Transport -</p>
                <p>- Louge -</p>
                <p>- Food -</p>
                <p>- Fun Activities -</p>
                <Link to="/Booking" className="btn-1">Book Now</Link>
            </div>
        </div>
    </div>
  )
}

export default Packages