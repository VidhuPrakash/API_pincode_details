import { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [pin,setPin]=useState('');
  const [data,setData] =useState(null);
  
  const pinChange = (event) => {
    setPin(event.target.value);
    console.log(pin);
  };
  
  const fetchData = async()=>{
    try{
      const response = await axios.get(`https://api.postalpincode.in/pincode/${pin}`);
      setData(response.data);
    }catch(error){
      alert(error);
    }

  }
  
  return (
    <div className="App">
      <input type='text' value={pin} onChange={pinChange} />
      <button onClick={fetchData}>Search</button>
     {data && data[0].PostOffice && data[0].PostOffice.map((postOffice, index) => (
  <div key={index} className='box'>
    <p>Name: {postOffice.Name}</p>
    <p>BranchType: {postOffice.BranchType}</p>
    <p>Circle: {postOffice.Circle}</p>
    <p>District: {postOffice.District}</p>
    <p>Division: {postOffice.Division}</p>
    <p>State: {postOffice.State}</p>
  </div>
))}
    </div>
  );
}

export default App;
