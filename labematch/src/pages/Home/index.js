import React from "react";
import PictureFrame from "../../components/PictureFrame";
import { useHistory, Link } from "react-router-dom";
import "./style.css";

export function Home() {
  const history = useHistory();
  return (
    <div className="homeContainer">
      <section className="pictureContainer">
        <PictureFrame
          link="https://images.unsplash.com/photo-1593659238861-ee6e27fb9855?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
          alt="drummer"
        />
        <PictureFrame
          link="https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
          alt="girl dj"
        />
      </section>
      <main>
        <h1>Welcome to Labematch!</h1>
        <button>
          <Link to="/login">Login</Link>
        </button>
        <button>
          <Link to="/signup">Sign up</Link>
        </button>
      </main>
    </div>
  );
}

export default Home;
