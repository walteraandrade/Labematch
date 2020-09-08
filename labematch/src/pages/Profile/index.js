import React, { useState, useEffect } from "react";
import "./style.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import EditIcon from "@material-ui/icons/Edit";
import Recommendations from "../../components/Recommendations";
import { fetchProfile } from "../../global/functions/apiHandler";
import { gateKeeper } from "../../global/functions/authentification";
import { useHistory } from "react-router-dom";

function Profile() {
  const history = useHistory();
  const [nameBar, setNameBar] = useState(true);
  const [emailBar, setEmailBar] = useState(true);
  const [pictureBar, setPictureBar] = useState(true);
  const [profile, setProfile] = useState({});
  const genres = profile.favGenres;

  const getProfile = async () => {
    const token = window.localStorage.getItem("token");
    await fetchProfile(token).then((res) => setProfile(res.data.user));

    return profile;
  };

  useEffect(() => {
    gateKeeper(history);
    getProfile();
  }, []);

  return (
    <div className="profileContainer">
      <Header />
      {profile ? (
        <main>
          <section id="upperBody">
            <div className="dataBox">
              {nameBar ? (
                <p
                  onClick={() => {
                    setNameBar(!nameBar);
                  }}
                >
                  {profile.name}
                </p>
              ) : (
                <form>
                  <input placeholer="type your name" />
                </form>
              )}
              <EditIcon
                onClick={() => {
                  setNameBar(!nameBar);
                }}
              />
            </div>
            <div className="dataBox">
              {emailBar ? (
                <p
                  onClick={() => {
                    setEmailBar(!emailBar);
                  }}
                >
                  {profile.email}
                </p>
              ) : (
                <form>
                  <input />
                </form>
              )}
              <EditIcon
                onClick={() => {
                  setEmailBar(!emailBar);
                }}
              />
            </div>
            <div className="dataBox">
              {pictureBar ? (
                <p
                  onClick={() => {
                    setPictureBar(!pictureBar);
                  }}
                >
                  Picture
                </p>
              ) : (
                <form>
                  <input />
                </form>
              )}
              <EditIcon
                onClick={() => {
                  setPictureBar(!pictureBar);
                }}
              />
            </div>
            <div className="genreBox">
              {genres ? (
                genres.map((genre) => {
                  return <span>{genre}</span>;
                })
              ) : (
                <p>loading</p>
              )}
            </div>
            <img src={profile.picture} alt="profile" />
          </section>
          <section id="savedSongs">
            <Recommendations />
          </section>
        </main>
      ) : (
        <p>loading...</p>
      )}
      <Footer />
    </div>
  );
}

export default Profile;
