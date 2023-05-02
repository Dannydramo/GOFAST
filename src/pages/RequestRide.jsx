import React, { Fragment, useContext, useRef, useEffect } from "react";
import AuthContext from "../context/AuthContext";
import Payment from "../components/BookingRidePage/Payment";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import Logo from "../images/favicon.png";
import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";
import "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css";
import MapboxNavigationControl from "mapbox-gl/dist/mapbox-gl.js";

mapboxgl.accessToken = import.meta.env.VITE_MAP_BOX_API_KEY;

// npm install mapbox-gl@1.13.0

const RequestRide = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const mapContainer = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [-73.985664, 40.748514],
      zoom: 12,
    });

    const navControl = new mapboxgl.NavigationControl({
      showCompass: true,
      showZoom: true,
      visualizePitch: true,
    });

    map.addControl(navControl, "top-right");

    const directions = new MapboxDirections({
      accessToken: mapboxgl.accessToken,
      unit: "metric",
      profile: "mapbox/driving-traffic",
    });
    map.addControl(directions, "top-left");
  }, []);

  useEffect(() => {
    toast.success(`Welcome ${user.displayName}`);
  }, [user.displayName]);

  return (
    <Fragment>
      <section className="w-[100vw] h-[100vh] relative flex flex-col bg-transparent">
        {/* <Link to="/">
          <img src={Logo} alt="" className="absolute top-8 left-8 z-10" />
        </Link> */}
        {/* ====== MAP COMPONENT =========*/}
        <div
          className="absolute h-[100vh] sm:h-[100vh] w-[100vw] top-0 left-0 z-[5]"
          ref={mapContainer}
        ></div>
        <div className="w-[90%] md:w-[50%] mx-auto">
          {" "}
          <Payment />
        </div>
      </section>
    </Fragment>
  );
};

export default RequestRide;
