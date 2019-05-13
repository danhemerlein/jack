import React from "react";
import get from "utils/get";

import HomePage from 'components/HomePage';

const MainView = ({ model }) => {
  if (!model || model.isError) return <h1>Oops, something went wrong!</h1>;
  console.log(model);
  return (
    <div className="MainView">
      <HomePage
        firstName={get(model, "fields.firstName", {})}
        lastName={get(model, "fields.lastName", {})}
        backgroundImage={get(model, "fields.backgroundImage", {})}
        projects={get(model, "fields.projects.fields", [])}
        tunes={get(model, 'fields.tunes')}
        bio={get(model, 'fields.bio')}
        subTitleOne={get(model, 'fields.subTitleOne')}
        subTitleTwo={get(model, 'fields.subTitleTwo')}
        subTitleThree={get(model, 'fields.subTitleThree')}
        subTitleFour={get(model, 'fields.subTitleFour')}
        >
      </HomePage>
    </div>
  );
};

export default MainView;
