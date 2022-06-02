import React, { useEffect, useState } from "react";
import axios from "axios";
import MemberShow from "./MemberShow.js";
import "./members.css";

const Members = () => {
  const [members, setMembers] = useState("");

  useEffect(() => {
    getMembers();
  }, []);

  const getMembers = async () => {
    await axios({
      method: "get",
      url: `http://localhost:4000/api/member`,
      withCredentials: true,
    })
      .then((res) => {
        console.log(res.data);
        const allMembers = res.data;
        setMembers(allMembers);
      })
      .catch((err) => console.log("Une erreur est survenue : " + err));
  };

  return <MemberShow members={members} />;
};

export default Members;
