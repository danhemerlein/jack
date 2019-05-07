import React from "react";

const MainView = ({ model }) => {
  if (!model || model.isError) return <h1>Oops, something went wrong!</h1>;
  return (
    <div>
      Jack's Website lol
    </div>
  );
};

export default MainView;