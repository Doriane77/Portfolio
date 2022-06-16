import React from "react";
import Icon from "../Icon/Icon";

import HTML from "../../Images/Logos/HTML.png";
import CSS from "../../Images/Logos/CSS.png";
import JS from "../../Images/Logos/JS.png";
import ReactLogo from "../../Images/Logos/logo-react.png";
import ReactNative from "../../Images/Logos/ReactNative.png";
import NodeJsLogo from "../../Images/Logos/nodejs.png";
// Outil img
import MongoDB from "../../Images/Logos/mongoDB.jpg";

function Languages({ languages }) {
  const { react, html, css, js, nodejs, reactNative, mongodb } = languages;
  return (
    <div className="Languages">
      {html ? <Icon images={HTML} name={"HTML"} /> : ""}
      {css ? <Icon images={CSS} name={"CSS"} /> : ""}
      {js ? <Icon images={JS} name={"JS"} /> : ""}
      {react ? <Icon images={ReactLogo} name={"React"} /> : ""}
      {reactNative ? <Icon images={ReactNative} name={"React Native"} /> : ""}
      {nodejs ? <Icon images={NodeJsLogo} name={"NodeJs"} /> : ""}
      {mongodb ? <Icon images={MongoDB} name={"Mongo DB"} /> : ""}
    </div>
  );
}

export default Languages;
