import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { useState, useEffect } from 'react';
// import "leaflet/dist/leaflet.css";
import { useMapEvents } from 'react-leaflet/hooks'



function LocationMarker() {
    const [position, setPosition] = useState(null);
    const map = useMapEvents({
        click() {
            map.locate()
        },
        locationfound(e) {
            setPosition(e.latlng)
            map.flyTo(e.latlng, map.getZoom())
        },
    })

    return position === null ? null : (
        <Marker position={position}>
            <Popup>Your location</Popup>
        </ Marker>
    )
}


const GeneralMap = () => {

    return (
        <MapContainer center={{ lat: 51, lng: -0.09 }} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <LocationMarker/>
        </MapContainer>
    );
};

export default GeneralMap;