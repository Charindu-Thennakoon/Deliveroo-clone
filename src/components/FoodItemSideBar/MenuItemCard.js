import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems } from "../../redux/itemsSlice";
import MenuItemCategory from "./MenuItemCategory";

function MenuItemCard() {
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

  // Group items by category
  const groupedItems = items.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  return (
    <div>
      {Object.keys(groupedItems).map((category) => (
        <MenuItemCategory
          key={category}
          category={category}
          items={groupedItems[category]}
        />
      ))}
    </div>
  );
}

export default MenuItemCard;
