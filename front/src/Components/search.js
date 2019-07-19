import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import '../App.css';

const mapStateToProps = state => ({
    listOfRegion: state.listOfRegion,
    region: state.region,
    circusByRegionId: state.circusByRegionId,
  })

const Search = ({ listOfRegion, dispatch, region, circusByRegionId  }) => {
  return ( 
    <div>
      <h5>Rechercher un cirque</h5>
      <select id="region-select" 
              className="select-bar" 
              onChange={e => 
                  axios.get(`http://localhost:8000/regions/${e.target.value}/circus`)
                  .then(response => dispatch({type: 'STORE_CIRCUS_BY_REGION_ID', circusByRegionId:response.data}))  
              }
            
              >
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
          {circusByRegionId.map(circus => (<div className="card" key={circus.id}>
            <img src="https://www.seine-maritime-tourisme.com/fr/ambassadeur-76/images/lettre%20ambassadeurs/3-Elbeuf-cirque-1A-OT-Rouen-JF.jpg" className="card-img-top" alt="..."/>
          <div className="card-body">
            <h6 className="card-title">{circus.name}</h6>
              <p className="card-text">{circus.presentation}</p>
              <p>Adresse : {circus.adress}</p>
              <button>Reserver</button>
          </div>
          </div>))}
        </div>  
      </div>
    </div>
  );
};
    
export default connect(mapStateToProps)(Search);
