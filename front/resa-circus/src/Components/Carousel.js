import React from 'react';

const Carousel = () => {
  return (
    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://marquetingdecontinguts.com/wp-content/uploads/2019/07/cirque-du-soleil-900x300.jpeg" className="d-block w-100" alt="..."/>
        </div>
          <div className="carousel-item">
            <img src="https://rushtix.com/wp-content/uploads/2016/11/circe.jpg" className="d-block w-100" alt="..."/>
          </div>
            <div className="carousel-item">
              <img src="http://velauxgym.fr/wp-content/uploads/2016/09/a-ze-tissu-2-900x300.jpg" className="d-block w-100" alt="..."/>
            </div>
      </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
    </div>
  );
};
                              
export default Carousel;
