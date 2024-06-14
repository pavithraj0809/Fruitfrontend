import React,{useState} from "react";
import axios from 'axios';
import "./components/services.css";

const Services = () => {
  
    const [name,setName]=useState('');
    const[email,setEmail]=useState('');
    const[phone,setPhone]=useState('');
    const[address,setAddress]=useState('');
    const[city,setCity]=useState('');
    const[zipcode,setZipcode]=useState('');
    const[state,setState]=useState('');
    const[country,setCountry]=useState('');
  function saveData() {
    const formData = { name, email,phone,address,city,zipcode,state,country}; // Create an object containing all form data

    axios.post('http://localhost:3001/api/postdata',formData)

    .then((res)=>{
        alert(JSON.stringify(res))
    }).catch((err)=>{
        alert(JSON.stringify(err))
    })
    alert('save data called')

  }
  return (
    <>
    <h1 className="ordernow p-2">Order Your Fruitzzs</h1>
      <form>
        <div class="row formwidth mt-3">
          <div className="form-group">
            <label for="name">Name :</label>
            <input
              type="text"
              className="form-control"value={name}              
                //onChange={handleMobileNumberChange}

              onChange={(event)=>setName(event.target.value)}
              id="name"
              placeholder="Enter Your Name"
            />
          </div>
          <div className="form-group mt-3">
            <label for="email">Email Address :</label>
            <input
              type="email"
              className="form-control" value={email} onChange={(event)=>setEmail(event.target.value)}
              id="email"
              placeholder="Enter Your Email"
            />
          </div>
          <div className="form-group mt-3">
            <label for="phone">Mobile Number :</label>
            <input
              type="number"
              className="form-control"
              value={phone} onChange={(event)=>setPhone(event.target.value)}
              id="phone"
              // placeholder="+91"
              
            />
          </div>
          <div className="form-group mt-3">
            <label for="address">Address :</label>
            <input
              type="text"
              className="form-control"
              value={address} onChange={(event)=>setAddress(event.target.value)}
              id="address"
              placeholder="Enter your Address"
            />
          </div>
          <div className="form-group mt-3">
            <label for="city">City :</label>
            <input
              type="text"
              className="form-control" 
              value={city} onChange={(event)=>setCity(event.target.value)}
              id="city"
              placeholder="Enter your City"
            />
          </div>
          <div className="form-group mt-3">
            <label for="zipcode">Zip Code :</label>
            <input
              type="number"
              className="form-control"
              value={zipcode} onChange={(event)=>setZipcode(event.target.value)}
              id="zipcode"
              placeholder="Enter your zipcode"
            />
          </div>

          <div className="form-group mt-3">
            <label for="state">State :</label>
            <input
              type="text"
              className="form-control"
              value={state} onChange={(event)=>setState(event.target.value)}
              id="state"
              placeholder="Enter your State"
            />
          </div>

          <div className="form-group mt-3">
            <label for="country">Country:</label>
            <input
              type="text"
              className="form-control" 
              value={country} onChange={(event)=>setCountry(event.target.value)}
              id="country"
              placeholder="Enter your Country"
            />
          </div>
        </div>
        <div class="row button mt-5">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <button
              className="btn bg-primary text-white order"
              onClick={saveData}>
              Place Order
            </button>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <button className="btn bg-warning text-white Reset">Reset</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Services;
