import React from 'react';
import get from 'utils/get';

import HomePage from 'components/HomePage';

const MainView = ({ model }) => {
  if (!model || model.isError) return <h1>Oops, something went wrong!</h1>;
  let homePage = [];
  let music = [];
   for (let i = 0; i < model.length; i++) {
     const element = model[i];

    if ('artist' in element.fields) {
      music.push(element);
    } else {
      homePage = element;
    }
   }

  return (
    <div className='MainView'>
      <HomePage
        firstName={get(homePage, 'fields.firstName', {})}
        lastName={get(homePage, 'fields.lastName', {})}
        backgroundImage={get(homePage, 'fields.backgroundImage', {})}
        projects={get(homePage, 'fields.projects.fields', [])}
        tunes={music}
        bio={get(homePage, 'fields.bio')}
        subTitleOne={get(homePage, 'fields.subTitleOne')}
        subTitleTwo={get(homePage, 'fields.subTitleTwo')}
        subTitleThree={get(homePage, 'fields.subTitleThree')}
        subTitleFour={get(homePage, 'fields.subTitleFour')}
        artworkArray={get(homePage, 'fields.musicArtwork')}
        cta={get(homePage, 'fields.projectCardCta')}
        font={get(homePage, 'fields.font')}
        backgroundTexture={get(homePage, 'fields.backgroundTexture')}
        >
      </HomePage>
    </div>
  );
};

export default MainView;
