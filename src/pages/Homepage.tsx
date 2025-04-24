import * as React from "react";
import { Link } from "react-router-dom";

export default function Homepage() {
  
  return (
    <div>
        <h1>Homepage</h1>
        <Link to={"/development"}>Development</Link><br/>
        <Link to={"/design"}>Design</Link><br/>
        <Link to={"/art"}>Art</Link><br/>
        <Link to={"/info/abc"}>Info about ABC</Link><br/>
        <Link to={"/info/sharks"}>Info about Sharks</Link><br/>
    </div>
  );
}
