import React, { use, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import "leaflet/dist/leaflet.css";


function App() {


  const TASHKENT_COORDINATES = [41.311081, 69.240562];


  const ROUTE_COORDINATES = [
    [41.311081, 69.240562], // Начальная точка (центр Ташкента)
    [41.3123, 69.2791], // Вторая точка (например, площадь Амир Темура)
    [41.3100, 69.2400], // Третья точка
    [41.3140, 69.2450], // Четвертая точка
  ];


  const [d, setD] = useState("")

  // const getRouteCoordinates = async () => {
  //   try {
  //     const response = await fetch(
  //       'http://router.project-osrm.org/route/v1/driving/69.240562,41.311081;69.279145,41.312344?steps=true'
  //     );
      
  //     if (!response.ok) {
  //       throw new Error('Network response was not ok');
  //     }
      
  //     const data = await response.json();
      
  //     // Извлекаем координаты шагов маршрута
  //     const route = data.routes[0].legs[0].steps;
  //     const coordinates = route.map(step => [
  //       step.maneuver.location[1], // Долгота
  //       step.maneuver.location[0]  // Широта
  //     ]);
      
  //     return coordinates;
  //   } catch (error) {
  //     console.error('Error fetching route', error);
  //   }
  // };

  // getRouteCoordinates().then(coordinates => {
  //   console.log(coordinates); // Это будет массив с координатами
  //   setD(coordinates)
  // });
  

  return (
    <div style={{ width: "500px", height: "500px" }}>
      <MapContainer
        center={TASHKENT_COORDINATES}
        zoom={12}
        style={{ width: "100%", height: "100%" }}
        attributionControl={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution=""
        />
        {/* Добавляем линию маршрута */}
        <Polyline positions={ROUTE_COORDINATES} color="blue" weight={4} opacity={0.7} />
      </MapContainer>
    </div>
  );
}

export default App;
