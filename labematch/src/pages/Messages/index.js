import React from "react";
import "./style.css";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ContactCard from "../../components/ContactCard";

function Messages() {
  return (
    <div className="messagesContainer">
      <Header />
      <ContactCard />
      <Footer />
    </div>
  );
}

export default Messages;
