import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer, Marker } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

import mapMarkerImg from '../images/mapMarker.svg';

import '../styles/pages/orphanages-map.css';

function OrphanagesMap() {
  return (
    <div id='page-map'>
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy"/>

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita 😄</p>
        </header>

        <footer>
          <strong>São José dos Campos</strong>
          <span>São Paulo</span>
        </footer>
      </aside>

      <Map
        center={[-23.0149411,-45.5157686]}
        zoom={15}
        style={{ width: "100%", height: "100%" }}
      >
        {/*<TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />*/}
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />
        </Map>

      <Link to='' className='create-orphanage'>
        <FiPlus size={32} color='#FFF' />
      </Link>
    </div>
  );
}

export default OrphanagesMap;