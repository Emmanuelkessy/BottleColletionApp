import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";


const Home = function () {

  

    return(
    <>
        <Navbar/>
        <section id="content">
            <div className="row-content">
            <div className="col-md-12 ">
            <h1 className="row-content-text">RECYCLING PLASTIC BOTTLES FOR A CLEANER TOMORROW </h1>
            </div>
            </div>
    
            <div id="inspirationCarousel" data-interval="3000" className="carousel slide" data-ride="carousel" data-touch="true">
  <div className="carousel-inner">
    <div className="carousel-item active" >
      <p className="carousel-paragraph">"Transform waste into opportunity, one bottle at a time. Choose to recycle, choose to make a difference.<br/>Together, we can create a world without plastic waste."</p>
    </div>
    <div className="carousel-item">
      <p className="carousel-paragraph">"Give plastic bottles a new life, recycle today! Be the change - recycle your bottles for a greener future. <br/> Every bottle counts - join the recycling movement."</p>
    </div>
    <div className="carousel-item">
    <p className="carousel-paragraph">"Recycling bottles: a small step for you, a giant leap for the environment.<br/> Your actions today shape tomorrow's sustainable world."</p>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-target="#inspirationCarousel" data-slide="prev">
    <span className="carousel-control-prev-icon" ></span>
  </button>
  <button className="carousel-control-next" type="button" data-target="#inspirationCarousel" data-slide="next">
    <span className="carousel-control-next-icon" ></span>
  </button>
</div>
        </section>

    <section id="decription">
        <div className="description-content">
            <h2>
                Welcome to the companion site for the FYP project <br/>Plastic bottle collection device with incentives
            </h2>
            <p>This companion site server as a point to check user's collected points</p>
        </div>
    </section>
    <Footer/>
    </>    
    )
}

export default Home;