import axios from "axios";
import React, { useState } from "react";
import "./form.css";

const Form = () => {
  const [name, setName] = useState("");

  const handleCreateMember = async (e) => {
    e.preventDefault();

    await axios({
      method: "post",
      url: `http://localhost:4000/api/member`,
      withCredentials: true,
      data: {
        name,
      },
    })
      .then((res) => {
        console.log(res);
        window.location = "/";
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="form">
      {/* New member form */}
      <h2 className="formTitle">Ajouter un(e) Argonaute</h2>
      <form action="" onSubmit={handleCreateMember} className="formNewMember">
        <label className="formLabel" htmlFor="name">
          Nom de l&apos;Argonaute
        </label>
        <input
          className="formInput"
          id="name"
          name="name"
          type="text"
          placeholder="Charalampos"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input type="submit" className="formButton" value="Envoyer" />
      </form>
    </div>
  );
};

export default Form;
