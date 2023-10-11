import {
  GoogleMap,
  MarkerF,
  useLoadScript
} from "@react-google-maps/api";

const Map = (props) => {

  console.log(props);
  // laod script for google map
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) return <div>Loading....</div>;

  const lat = 46.836015
  const lng = 17.4310329
  // static lat and lng
  const center = { lat: lat, lng: lng };

  return (
    <>
      <GoogleMap
        zoom={12}
        center={center}
        mapTypeId='terrain'
        mapContainerClassName="map"
        options={{
          disableDefaultUI: true,
          mapTypeControl: false
        }}
        mapContainerStyle={{ width: "100%", height: "500px", margin: "auto" }}
      >
        <MarkerF
          position={{ lat: props.lat, lng: props.lng }}
          icon={"assets/house_pin.png"}
        />
      </GoogleMap>
      {/* map component  */}
    </>
  );
};

export default Map;