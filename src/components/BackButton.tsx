import * as React from "react";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function BackButton({isTop} : {isTop: Boolean}) {
  
    const navigate = useNavigate();

  return (
    <button onClick={() => navigate(-1)} className={isTop ? "page-button" : "in-page-btn"}><ArrowBackIcon fontSize="large" /></button>
  );
}
