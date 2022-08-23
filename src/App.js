import React from 'react';
// Hooks
import useWindowSize from "./hooks/useWindowSize";
// Components
import Header from './components/header/Header';
// Images
import heroImageDesktop from './images/image-hero-desktop.png';
import heroImageMobile from './images/image-hero-mobile.png';
import databiz from './images/client-databiz.svg';
import audiophile from './images/client-audiophile.svg';
import meet from './images/client-meet.svg';
import maker from './images/client-maker.svg';

const App = () => {
  const { width, height } = useWindowSize();

  return (
    <>
      <Header />
      <main>
        <section className='hero-section'>
          <div className="container-sm">
            <div className="even-columns gap-lg align-end">
              <div>
                <h1 className="fs-primary-heading fw-bold">Make remote work</h1>
                <p className='padding-block-500 text-secondary'> Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
                <button className='button'>Learn more</button>
                <div className="clients align-center margin-top-lg">
                  <img src={databiz} alt="" />
                  <img src={audiophile} alt="" />
                  <img src={meet} alt="" />
                  <img src={maker} alt="" />
                </div>
              </div>
              <img src={width >= 800 ? heroImageDesktop : heroImageMobile} alt="" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
