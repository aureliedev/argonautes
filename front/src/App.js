import React from "react";
import Header from "./composents/header/Header";
import Form from "./composents/Main/form/Form";
import Members from "./composents/Main/members/Members";
import Footer from "./composents/footer/Footer";
import "./app.css";

function App() {
  return (
    <div className="body">
      <Header />
      <Form />
      <Members />
      <Footer />
    </div>
  );
}

export default App;
