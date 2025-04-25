import * as React from "react";
import { useNavigate } from "react-router-dom";

interface DemoBoxProps {
  tag: string;
  img: string;
  alt: string;
  title: string;
}

export default function DemoBox({ tag, img, alt, title }: DemoBoxProps) {
  const navigate = useNavigate();

  return (
    <div
      className="demo-box"
      onClick={() => {
        navigate(`/info/${tag}`);
      }}
    >
      <img
        src={require(`../assets/media/development/${img}.png`)}
        alt={alt}
        unselectable="on"
      />
      <h3>{title}</h3>
    </div>
  );
}
