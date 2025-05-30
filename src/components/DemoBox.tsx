import * as React from "react";
import { useNavigate } from "react-router-dom";
import { Project } from "../pages/SpecificListPage";

interface DemoBoxProps {
  project: Project;
  img?: string;
}

export default function DemoBox({ project, img }: DemoBoxProps) {
  const navigate = useNavigate();

  return (
    <div
      className="demo-box"
      onClick={() => {
        navigate(`/info/${project.tag}`);
      }}
    >
      {img ?? <></> /* put image here that should follow the box */}
      <img
        src={`/media/${project.folder}/${project.image}.png`}
        alt={project.alt}
        unselectable="on"
      />
      <h3>{project.subtitle}</h3>
    </div>
  );
}
