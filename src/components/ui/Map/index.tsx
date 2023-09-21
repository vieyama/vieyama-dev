import {useMemo, useState} from "react";

import {GoogleMap, MarkerF, useLoadScript} from "@react-google-maps/api";

import type {Libraries} from "@react-google-maps/api";

export type LatlongType = {lat: number; long: number};

const GoogleMaps = ({
  latlong,
  onChangeLatLong,
  allowToChangePointing,
}: {
  latlong: LatlongType;
  onChangeLatLong?: (latlong: LatlongType) => void;
  allowToChangePointing?: boolean;
}) => {
  const [latLong, setLatLong] = useState(latlong);

  const libraries = useMemo(() => ["places"], []);
  const mapCenter = useMemo(
    () => ({lat: latlong.lat, lng: latlong.long}),
    [latlong],
  );

  const mapCenters = useMemo(
    () => ({lat: latLong.lat, lng: latLong.long}),
    [latLong],
  );

  const mapOptions = useMemo<google.maps.MapOptions>(
    () => ({
      disableDefaultUI: true,
      clickableIcons: true,
      scrollwheel: false,
    }),
    [],
  );

  const {isLoaded} = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_API_KEY_GOOGLE_MAPS as string,
    libraries: libraries as Libraries,
  });

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  return (
    <div className="w-full">
      <GoogleMap
        options={mapOptions}
        zoom={14}
        center={mapCenter}
        onClick={(e) => {
          if (allowToChangePointing) {
            setLatLong({
              lat: e.latLng?.lat() as number,
              long: e.latLng?.lng() as number,
            });
            onChangeLatLong?.({
              lat: e.latLng?.lat() as number,
              long: e.latLng?.lng() as number,
            });
          }
        }}
        mapTypeId={google.maps.MapTypeId.ROADMAP}
        mapContainerStyle={{width: "100%", height: "240px"}}>
        <MarkerF position={mapCenters} />
      </GoogleMap>
    </div>
  );
};

export default GoogleMaps;
