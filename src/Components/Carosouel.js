import React from 'react'
import "./Main.css"
const Carosouel = () => {
  return (
    <div id="carouselExampleFade" class="carousel slide carousel-fade  " data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
     <h1>White Web</h1>
     <h4>Technologies</h4>
     <h3>Web development , Web Design , App development</h3>
     <button>Connect us now</button>
    </div>
    <div class="carousel-item">
    <h1>Singh</h1>
    </div>
    <div class="carousel-item">
    <h1>Rajput</h1>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon prev-icons" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next prev-icons" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  )
}

export default Carosouel
