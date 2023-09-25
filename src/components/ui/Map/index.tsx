"use client";

import {useMemo, useState} from "react";

import {GoogleMap, MarkerF, useLoadScript} from "@react-google-maps/api";
import Autocomplete from "react-google-autocomplete";

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
  const [latLongDefault, setLatLongDetault] = useState(latlong);
  const [latLongChanges, setLatLongChanges] = useState(latLongDefault);

  const libraries = useMemo(() => ["places"], []);

  const mapCentersDefault = useMemo(
    () => ({lat: latLongDefault.lat, lng: latLongDefault.long}),
    [latLongDefault],
  );

  const mapCentersChanges = useMemo(
    () => ({lat: latLongChanges.lat, lng: latLongChanges.long}),
    [latLongChanges],
  );

  const mapOptions = useMemo<google.maps.MapOptions>(
    () => ({
      disableDefaultUI: true,
      clickableIcons: true,
      scrollwheel: true,
      fullscreenControl: allowToChangePointing,
    }),
    [allowToChangePointing],
  );

  const {isLoaded} = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_API_KEY_GOOGLE_MAPS as string,
    libraries: libraries as Libraries,
  });

  const handleSelectAddress = (place: google.maps.places.PlaceResult) => {
    const lat = place?.geometry?.location?.lat();
    const long = place?.geometry?.location?.lng();

    setLatLongDetault({
      lat: lat as number,
      long: long as number,
    });
    setLatLongChanges({
      lat: lat as number,
      long: long as number,
    });

    onChangeLatLong?.({
      lat: lat as number,
      long: long as number,
    });
  };

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  return (
    <div className="w-full">
      {allowToChangePointing && isLoaded ? (
        <>
          <Autocomplete
            apiKey={process.env.NEXT_PUBLIC_API_KEY_GOOGLE_MAPS as string}
            onPlaceSelected={handleSelectAddress}
            className="mb-3.5 block h-9 w-full rounded-lg border border-gray-300 bg-white p-2.5 text-base text-gray-900 outline-none placeholder:text-gray-400 focus:border-blue-500 disabled:bg-gray-200"
          />
        </>
      ) : null}
      <GoogleMap
        options={mapOptions}
        zoom={14}
        center={mapCentersDefault}
        onClick={(e) => {
          if (allowToChangePointing) {
            setLatLongChanges({
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
        <MarkerF position={mapCentersChanges} />
      </GoogleMap>
    </div>
  );
};

export default GoogleMaps;
