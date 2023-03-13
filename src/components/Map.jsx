import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup
} from "react-simple-maps";

const Map = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-279.0, 21.0, 0],
        center: [15, -3],
        scale: 800
      }}
      style={{width: "100%", height: "100%"}}
    >
      <Geographies
        geography="./features.json"
        fill="#1b1b53"
        stroke="#ffffff"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[-71, -30]}
        dx={-90}
        dy={-30}
        connectorProps={{
          stroke: "#d3b9b4",
          strokeWidth: 3,
          strokeLinecap: "round"
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="#ffffff">
          {"Chile"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default Map;
