import { useState } from "react";
import {useNavigate} from "react-router-dom"
function Navbar (){
  const navigate = useNavigate();
  const [phone, setPhone] = useState('');

  function handleSubmit(e){
    e.preventDefault();
    navigate(`/details?phone=${phone}`);
  }
return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="/">Bottle Collection</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <form className="form-inline my-2 my-lg-0 ml-auto" onSubmit={handleSubmit}>
      <input className="form-control mr-sm-2" type="search" placeholder="Search" value={phone} onChange={(e)=>{setPhone(e.target.value)}}/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>

)
}
export default Navbar; 