import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { useState } from 'react';
import "leaflet/dist/leaflet.css";
import { useMapEvents } from 'react-leaflet/hooks'
import "./Map.css"
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

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
            <Popup>Your Location</Popup>
        </ Marker>
    )
}


const GeneralMap = ({ locations }) => {

    return (
        <MapContainer center={{ lat: 51, lng: -0.09 }} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <LocationMarker />
            {locations && locations.map((loc) => {
                let position = null;
                if (loc.location) {
                    if (Array.isArray(loc.location) && loc.location.length >= 2) {
                        // Array format: [lat, lng]
                        position = [loc.location[0], loc.location[1]];
                    } else if (typeof loc.location === 'object' && loc.location.lat !== undefined && loc.location.lng !== undefined) {
                        // Object format: {lat, lng}
                        position = [loc.location.lat, loc.location.lng];
                    }
                }
                
                // Only render marker if we have valid position data
                if (!position) return null;
                
                return (
                    <Marker key={loc._id || loc.id} position={position}>
                        <Popup>{loc.name || 'Location'}</Popup>
                    </Marker>
                );
            })}

        </MapContainer>
    );
};

export default GeneralMap;