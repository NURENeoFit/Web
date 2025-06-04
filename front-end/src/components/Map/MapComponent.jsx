"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect } from "react";

import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

const fixLeafletIcons = () => {
    const DefaultIcon = L.Icon.Default;
    DefaultIcon.mergeOptions({
        iconUrl: icon,
        shadowUrl: iconShadow,
    });
};

export default function MapComponent() {
    useEffect(() => {
        fixLeafletIcons();
    }, []);

    return (
        <MapContainer
            center={[49.9545, 36.3145]}
            zoom={16}
            style={{ height: "100%", width: "100%" }}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[49.9545, 36.3145]}>
                <Popup>Спортивний зал</Popup>
            </Marker>
        </MapContainer>
    );
}
