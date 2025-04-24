import * as React from "react";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

interface DemoBoxProps {
  img: String;
  alt: String;
  title: String;
}

export default function DemoBox({img, alt, title} : DemoBoxProps) {

  return (
    <button onClick={() => {}} className="page-button"><ArrowBackIcon fontSize="large" /></button>
  );
}
