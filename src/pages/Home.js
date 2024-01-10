// import React, { useState, useEffect } from "react";
// import { Card, CardContent, Typography } from "@mui/material";

// export default function Home() {
//   const [items, setItems] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("data/data2.json");
//         const jsonData = await response.json();
//         setItems(jsonData);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   const groupedItems = items.reduce((acc, item) => {
//     if (!acc[item.category]) {
//       acc[item.category] = [];
//     }
//     acc[item.category].push(item);
//     return acc;
//   }, {});

//   return (
//     <div>
//       <h2>Data</h2>
//       {Object.keys(groupedItems).map((category) => (
//         <div key={category}>
//           <h3>{category}</h3>
//           {groupedItems[category].map((item) => (
//             <Card key={item.id} style={{ marginBottom: "10px" }}>
//               <CardContent>
//                 <Typography variant="h5" component="div">
//                   Name: {item.name}
//                 </Typography>
//                 <Typography color="textSecondary">Kal: {item.kal}</Typography>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// }
// src/Home.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems } from "../redux/itemsSlice";
import { Card, CardContent, Typography } from "@mui/material";

export default function Home() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items.items);
  const status = useSelector((state) => state.items.status);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchItems());
    }
  }, [status, dispatch]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error loading data.</div>;
  }

  const groupedItems = items.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  return (
    <div>
      <h2>Data</h2>
      {Object.keys(groupedItems).map((category) => (
        <div key={category}>
          <h3>{category}</h3>
          {groupedItems[category].map((item) => (
            <Card key={item.id} style={{ marginBottom: "10px" }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  Name: {item.name}
                </Typography>
                <Typography color="textSecondary">Kal: {item.kal}</Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      ))}
    </div>
  );
}
