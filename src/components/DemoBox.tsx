import * as React from "react";
import { useNavigate } from "react-router-dom";
import { Project } from "../pages/SpecificListPage";

interface DemoBoxProps {
  project: Project;
  extras?: HomePageDemoBoxExtras;
}

interface HomePageDemoBoxExtras {
  img: string;
  imgAlt: string;
  classes: string
}

export default function DemoBox({ project, extras }: DemoBoxProps) {
  const navigate = useNavigate();

  return (
    <div
      className="demo-box"
      onClick={() => {
        navigate(`/info/${project.tag}`);
      }}
    >
      {extras && <img src={require(`../assets/sketches/${extras.img}`)} alt={extras.imgAlt} className={`demo-box-extra-img ${extras.classes}`}/>}
      <img
        src={`/media/${project.folder}/${project.image}.png`}
        alt={project.alt}
        unselectable="on"
      />
      <h3>{project.subtitle}</h3>
    </div>
  );
}
