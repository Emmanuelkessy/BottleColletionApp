import { useEffect, useState } from "react";
import firebase from "../firebase";
import { useLocation } from "react-router-dom";
import Navbar from "../components/navbar";
const Details = function () {
    const [points, setPoints] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('')
    const location = useLocation();
    useEffect(()=>{
    const phone = new URLSearchParams(location.search).get("phone")
    setPhoneNumber(phone);
    if(phone){
    const databaseRef = firebase.database().ref(phone)
    databaseRef.on('value',(snapshot)=>{
        const data = snapshot.val();
       setPoints(data);
    })
}
},[location.search]);
    return(
        <>
        <Navbar/>
        <div className="jumbotron jumbotron-fluid">
  <div className="container">
    <h1 className="display-4">Phone Number: {phoneNumber || 'N/A'}</h1>
    <p className="lead jumbotron">You have {points || '0'} points</p>
  </div>
</div>
        </>
    )
}

export default Details;