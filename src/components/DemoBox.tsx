import * as React from "react";
import { useNavigate } from "react-router-dom";
import { Project } from "../pages/SpecificListPage";

interface DemoBoxProps {
  project: Project;
}

export default function DemoBox({ project }: DemoBoxProps) {
  const navigate = useNavigate();

  return (
    <div
      className="demo-box"
      onClick={() => {
        navigate(`/info/${project.tag}`);
      }}
    >
      <img
        src={`/media/${project.folder}/${project.image}.png`}
        alt={project.alt}
        unselectable="on"
      />
      <h3>{project.subtitle}</h3>
    </div>
  );
}
