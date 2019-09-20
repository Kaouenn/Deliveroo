import React from "react";
import Menu from "./Menu";
import MenuLoader from "./MenuLoader";

const Content = props => {
  const { menu, addItem } = props;
  return (
    <div className="Content">
      <div className="Content--center">
        {menu === null ? (
          <MenuLoader />
        ) : (
          <Menu menu={menu} addItem={addItem} />
        )}
      </div>
    </div>
  );
};

export default Content;
