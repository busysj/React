import { useEffect, useState } from "react";
import axios from "axios";
import MapTest from "./MapTest";

const ApiTest = () => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://api.visitkorea.or.kr/openapi/service/rest/GoCamping/basedList?ServiceKey=DBx1v7ble2j4MNFWznYeeM5wQYthH5QTVeMOTXn5H%2FxvLP7Bbaa8IZvKxHq8r0425fyEMXvrs32EFDRIALvz5A%3D%3D&numOfRows=10&pageNo=1&MobileOS=AND&MobileApp=appName&_type=json"
        );
        setItem(response.data.response.body.items.item[0]);
        console.log(response);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  if (!item) {
    return null;
  }

  return (
    <div>
      {item.map((m) => (
        <MapTest key={m.contentId} item={m} />
      ))}
    </div>
  );
};

export default ApiTest;
