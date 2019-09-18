import React from "react";
import TopBar from "./TopBar";
import RestaurantInfos from "./RestaurantInfos";
import RestaurantInfosLoader from "./RestaurantInfosLoader";

const Header = props => {
  const { restaurant, isLoading } = props;

  return (
    <header className="Header">
      <TopBar />
      {isLoading === true ? (
        <RestaurantInfosLoader />
      ) : (
        <RestaurantInfos
          name={restaurant.name}
          description={restaurant.description}
          cover={restaurant.picture}
        />
      )}
    </header>
  );
};

export default Header;
