import React, { useContext, useEffect, useState } from "react";
import "./css/Home.scss";
import Navigation from "../fragment/Navigation";
import MobileTopNavigation from "../fragment/MobileTopNavigation";
import SideBar from "../fragment/SideBar";
import FooterMusicPlayer from "../fragment/FooterMusicPlayer";
import BottomNavigationMobile from "../fragment/BottomNavigationMobile";
import MusicCardContainer from "../fragment/MusicCardContainer";
import { useSelector } from "react-redux";
import { ThemeContext } from "../../api/Theme";
import CurrentPlayingLarge from "../fragment/CurrentPlayingLarge";
import { Skeleton } from "@material-ui/lab";

function Home() {
  const [screenSize, setScreenSize] = useState(undefined);
  const [currMusic, setCurrMusic] = useState(null);
  const [Page] = useState(<MusicCardContainer />);

  useEffect(() => {
    function handleResize() {
      setScreenSize(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const useStyle = useContext(ThemeContext);
  const { playing, bannerOpen } = useSelector((state) => state.musicReducer);

  useEffect(() => {
    setCurrMusic(playing);
  }, [playing]);

  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div style={useStyle.component} className={"home-container"}>
      {!loaded ? (
        <div className="Home-skeleton">
          <Skeleton animation="wave" variant="rect" height="100vh" />
        </div>
      ) : (
        <>
          {screenSize <= 970 ? <MobileTopNavigation /> : <Navigation />}
          <section className={"home-music-container"}>
            <div className="sidebar-home">
              <SideBar />
            </div>
            <div className="main-home">{Page}</div>
          </section>
          {bannerOpen && (
            <section className="current-large-banner">
              <CurrentPlayingLarge />
            </section>
          )}
          {currMusic && <FooterMusicPlayer music={currMusic} />}
          {screenSize <= 970 && <BottomNavigationMobile />}
        </>
      )}
    </div>
  );
}

export default Home;
