import React from 'react'
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';

const Map = ReactMapboxGl({
  accessToken:
    'pk.eyJ1Ijoiam1vczEyMyIsImEiOiJjazNiaTRjcnEwbTJ5M2RrM2ZkZWxwazN0In0.IuK6kWPBjc8lq2nHbkw0QA'
});

class About extends React.Component {
  constructor() {
    super()
    this.state = {
      lng: 52.247012,
      lat: 21.062927,
      zoom: 13
    }
  }

  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <Map
        style="mapbox://styles/mapbox/streets-v9"
        center = {position}
        containerStyle={{
          height: '100vh',
          width: '100vw'
        }}
      >
        <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
          <Feature coordinates={[52.247012,21.062927]} />
        </Layer>
      </Map>
    );
  }
}


export default About;