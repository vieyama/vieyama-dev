import type {SetStateAction} from "react";
import {useMemo, useState} from "react";

import {GoogleMap, MarkerF, useLoadScript} from "@react-google-maps/api";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";

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

  const mapCenters = useMemo(
    () => ({lat: latLong.lat, lng: latLong.long}),
    [latLong],
  );

  const mapOptions = useMemo<google.maps.MapOptions>(
    () => ({
      disableDefaultUI: true,
      clickableIcons: true,
      scrollwheel: true,
    }),
    [],
  );

  const {isLoaded} = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_API_KEY_GOOGLE_MAPS as string,
    libraries: libraries as Libraries,
  });

  const [address, setAddress] = useState("");
  const handleChangeAddress = (newAddress: SetStateAction<string>) => {
    setAddress(newAddress);
  };
  const handleSelectAddress = (newAddress: SetStateAction<string>) => {
    setAddress(newAddress);
    geocodeByAddress(newAddress as string)
      .then((results) => getLatLng(results[0]))
      .then((result) => {
        setLatLong({
          lat: result?.lat,
          long: result?.lng,
        });

        onChangeLatLong?.({
          lat: result?.lat,
          long: result?.lng,
        });
      })
      .catch((error) => console.error("Error", error));
  };

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  return (
    <div className="w-full">
      {allowToChangePointing && isLoaded ? (
        <>
          {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
          {/* @ts-nocheck */}
          <PlacesAutocomplete
            value={address}
            onChange={handleChangeAddress}
            onSelect={handleSelectAddress}>
            {({
              getInputProps,
              suggestions,
              getSuggestionItemProps,
              loading,
            }) => (
              <div>
                <input
                  {...getInputProps({
                    placeholder: "Search Places ...",
                    className: "location-search-input",
                  })}
                />
                <div className="autocomplete-dropdown-container">
                  {loading && <div>Loading...</div>}
                  {suggestions.map((suggestion) => {
                    const className = suggestion.active
                      ? "suggestion-item--active"
                      : "suggestion-item";
                    const style = suggestion.active
                      ? {
                          backgroundColor: "#fafafa",
                          height: 50,
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                        }
                      : {
                          backgroundColor: "#ffffff",
                          border: "1px solid #f0f0f0",
                          display: "flex",
                          alignItems: "center",
                          height: 50,
                          cursor: "pointer",
                        };
                    return (
                      // eslint-disable-next-line react/jsx-key
                      <div
                        {...getSuggestionItemProps(suggestion, {
                          className,
                          style,
                        })}>
                        <span>{suggestion.description}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </PlacesAutocomplete>
        </>
      ) : null}
      <GoogleMap
        options={mapOptions}
        zoom={14}
        center={mapCenters}
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
