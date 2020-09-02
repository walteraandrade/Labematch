import React, { useState } from "react";
import "./style.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import EditIcon from "@material-ui/icons/Edit";
import Recommendations from "../../components/Recommendations";

function Profile() {
  const [nameBar, setNameBar] = useState(true);
  const [emailBar, setEmailBar] = useState(true);
  const [pictureBar, setPictureBar] = useState(true);
  const [genresBar, setGenresBar] = useState(true);

  return (
    <div className="profileContainer">
      <Header />
      <section id="upperBody">
        <div className="dataBox">
          {nameBar ? (
            <p
              onClick={() => {
                setNameBar(!nameBar);
              }}
            >
              Name
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
              Email
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
        <div className="dataBox">
          {genresBar ? (
            <p
              onClick={() => {
                setGenresBar(!genresBar);
              }}
            >
              Main genres
            </p>
          ) : (
            <form>
              <input />
            </form>
          )}
          <EditIcon
            onClick={() => {
              setGenresBar(!genresBar);
            }}
          />
        </div>
        <img
          src="https://images.unsplash.com/photo-1593359863503-f598684c806f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          alt="profile"
        />
      </section>
      <section id="savedSongs">
        <Recommendations />
      </section>
      <Footer />
    </div>
  );
}

export default Profile;
