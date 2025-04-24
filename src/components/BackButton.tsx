import * as React from "react";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function BackButton() {
  
    const navigate = useNavigate();

  return (
    <button onClick={() => navigate(-1)} className="page-button"><ArrowBackIcon fontSize="large" /></button>
  );
}
