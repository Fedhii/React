import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';

import MarkerManager from './../../util/marker_manager';

const getCoordsObj = latLng => ({
  lat: latLng.lat(),
  lng: latLng.lng()
});

const mapOptions = {
  center: { lat: 37.7758, lng: -122.435 },
  zoom: 13
};

class BenchMap extends React.Component {
    componentDidMount() {
      const map = this.refs.map;
      this.map = new google.maps.Map(this.mapNode, mapOptions)
      this.MarkerManager = new MarkerManager(this.map);
    };

    componentDidUpdate() {
      this.registerListeners();
      this.MarkerManager.updateMarkers(this.props.benches)
    }

    registerListeners() {
      google.maps.event.addListener(this.map, 'idle', () => {
        const { north, south, east, west } = this.map.getBounds().toJSON();
        const bounds = {
          northEast: { lat: north, lgn: east},
          southWest: { lat: south, lng: west } };
        this.props.updateFilter('bounds', bounds)
      })
    }

    handleClick(coords) {
      this.props.history.push({
        pathname: 'benches/new',
        search: `lat=${coords.lat}&lng=${coords.lng}`
      });
    }

    render() {
      return (
          <div className="map-container" ref="map">
            <div ref={ map => this.mapNode = map }>

            </div>

          </div>
      )
    }
}

export default withRouter(BenchMap);
