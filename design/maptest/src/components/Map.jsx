/* global kakao */
import React, { useEffect, useState } from "react";
import { markerData } from "./markerData";

const { kakao } = window;

const Map = () => {
  const [map, setMap] = useState(null);

  //처음 지도 그리기
  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
    };
    const kakaoMap = new kakao.maps.Map(container, options);
    setMap(kakaoMap);
  }, []);

  const imageSrc =
    "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

  var imageSize = new kakao.maps.Size(24, 35);

  var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

  markerData.forEach((el) => {
    // 마커를 생성합니다
    new kakao.maps.Marker({
      //마커가 표시 될 지도
      map: map,
      //마커가 표시 될 위치
      position: new kakao.maps.LatLng(el.lat, el.lng),
      //마커에 hover시 나타날 title
      title: el.title,
      image: markerImage,
    });
  });

  return (
    <div
      style={{
        width: "100%",
        display: "inline-block",
        marginLeft: "5px",
        marginRight: "5px",
      }}
    >
      <div id="map" style={{ width: "75%", height: "750px" }}></div>
    </div>
  );
};

export default Map;
