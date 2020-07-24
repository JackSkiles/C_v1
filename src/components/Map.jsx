import React, { Component } from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

class Map extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentLocation: {
                lat: -32.397,
                lng: 150.644
            }
        }
    }
    render() {
        return (
            <div>
                <GoogleMap
                    defaultZoom={8}
                    defaultCenter={{ lat: -34.397, lng: 150.644 }}
                    center = {this.state.currentLocation}
                >
                    <Marker position={this.state.currentLocation} />
                </GoogleMap>
            </div>
        )
    }
}
const ConnectedMap = withScriptjs(withGoogleMap(Map))

ConnectedMap.defaultProps = {
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAR0V4owyRtwnQWLQcGfkCehEYZzPeTp5o",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100%` }} />,
    mapElement: <div style={{ height: `100%` }} />,
}

// const mapStateToProps = (state) => {
//     return {
//         latitude: state.latitude,
//         longitude: state.longitude
//     }
// }

// const mapDispatchToProps = {
//     location
// }

// export default connect(mapStateToProps, mapDispatchToProps)(ConnectedMap);

export default ConnectedMap;