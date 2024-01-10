// ItemList.js
import React, { useState, useEffect } from "react";
import { List, ListItem, ListItemText } from "@mui/material";
//import mokData from "../../data/data1.json";
const SingleItem2 = () => {
  const [data1, setData] = useState([]);

  useEffect(() => {
    // Fetch data from the JSON file using the native fetch API
    const fetchData = async () => {
      try {
        const response = await fetch("/data/data1.json");
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Run the effect only once when the component mounts

  return (
    <List>
      {data1.map((item) => (
        <ListItem key={item.id}>
          <ListItemText primary={item.name} />
        </ListItem>
      ))}
    </List>
  );
};

export default SingleItem2;
