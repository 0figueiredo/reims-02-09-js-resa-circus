import React from 'react';
import { connect } from 'react-redux';
import '../App.css';

const mapStateToProps = state => ({
    listOfRegion: state.listOfRegion,
    region: state.region,
    circusByRegionId: state.circusByRegionId,
  })

const Search = ({ listOfRegion, dispatch,  }) => {
  return ( 
    <div>
      <h5>Rechercher un cirque</h5>
      <select id="region-select" className="select-bar" onChange={e => dispatch({type:'SAVE_REGION', region:(e.target.value)})}>
          <option value="">
              Choisissez une région
        </option>
        {listOfRegion.map(region =>( 
            <option 
            key={region.id}
            id={region.id}
            value={region.id}
            >
            {(region.name)}
            </option>
        ))} 
      </select>
      <div className="container">
        <div className="row">
          <div className="card">
            <img src="https://www.toutelarussie.com/userfiles/images/russia/theatres/moscow/yury_nikulins_circus.jpg" className="card-img-top" alt="..."/>
          <div className="card-body">
            <h6 className="card-title">Circus</h6>
              <p className="card-text">Cirque de la Famille ...</p>
              <button>Reserver</button>
          </div>
          </div>
          <div className="card">
            <img src="https://www.toutelarussie.com/userfiles/images/russia/theatres/moscow/great_moscow_circus.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
            <h6 className="card-title">Circus</h6>
              <p className="card-text">Cirque de la Famille ...</p>
              <button>Reserver</button>
            </div>
          </div>
        </div>  
      </div>
    </div>
  );
};
    
export default connect(mapStateToProps)(Search);
