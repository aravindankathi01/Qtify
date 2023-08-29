import React, { useEffect, useState } from "react";
import NavBar from "./Components/NavBar/NavBar";
import HeroSection from "./Components/HeroSection/HeroSection";
import Section from "./Components/Section/Section";
import fetchApi from "./api/api";
import styles from "./App.module.css";
import SongsSection from "./Components/SongsSection/SongsSection";
import FrequentlyAsked from "./Components/FrequentlyAsked/FrequentlyAsked";

const App = () => {
  const [topAlbumsData, setTopAlbumsData] = useState([]);
  const [newAlbumsData, setNewAlbumsData] = useState([]);
  const [allSongs, setAllSongs] = useState([]);

  useEffect(() => {
    generateTopAlbums();
    generateNewAlbums();
    generateAllSongs();
  }, []);

  const generateTopAlbums = async () => {
    const data = await fetchApi("/albums/top");
    setTopAlbumsData(data);
    // console.log("TopAlbums>>>>", data);
  };

  const generateNewAlbums = async () => {
    const data = await fetchApi("/albums/new");
    setNewAlbumsData(data);
    // console.log("NewAlbums>>>>", data);
  };

  const generateAllSongs = async () => {
    const data = await fetchApi("/songs");
    setAllSongs(data);
    console.log("All", data);
  };

  return (
    <>
      <NavBar data={topAlbumsData} />
      <HeroSection />
      <div className={styles.sectionWrapper}>
        <Section title='Top Albums' data={topAlbumsData} type='album' />
        <Section title='New Albums' data={newAlbumsData} type='album' />
        <SongsSection title='Songs' data={allSongs} type='songs' />
      </div>
      <FrequentlyAsked />
    </>
  );
};

export default App;
