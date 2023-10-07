import axios from "axios";
import React, { useEffect, useState } from "react";
import "./styles.css";

const UserProfile = () => {
  const [gitUserData, setGitUserData] = useState({});

  useEffect(() => {
    const getGitUser = async () => {
      const response = await axios.get(`https://api.github.com/users/Kolosafo`);
      console.log("USER IS HERE", response.data);
      setGitUserData(response.data);
      return response.data;
    };
    getGitUser().catch((e) => console.error(e));
  }, []);
  return (
    <div className="user-profile-main-cont">
      <div className="top-cont">
        <img
          src={gitUserData.avatar_url}
          className="user-avatar-img"
          alt="user-img"
        />{" "}
        <div className="name-cont">
          <span>{gitUserData.login}</span>
          <h2>{gitUserData.name}</h2>
          <h3>{gitUserData.location}</h3>
          <div className="follow-cont">
            <span className="followers">
              Followers: {gitUserData.followers}
            </span>
            <span>Following: {gitUserData.following}</span>
          </div>
          <a
            className="view-ongit-a"
            href={gitUserData.html_url}
            target="_blank"
            rel="noreferrer"
          >
            View on GitHub
          </a>
        </div>
      </div>
      <div className="bottom-cont">
        <h3>{gitUserData.bio}</h3>
      </div>
    </div>
  );
};

export default UserProfile;
