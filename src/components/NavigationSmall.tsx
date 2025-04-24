import * as React from "react";
import { useNavigate } from "react-router-dom";
import AppsIcon from "@mui/icons-material/Apps";

interface NavigationProps {
  isRight: Boolean;
}

export default function NavigationSmall({isRight}: NavigationProps) {
  const navigate = useNavigate();

  // TODO
  return (
    <button onClick={() => navigate(-1)} className={isRight ? "page-button top-right": "page-button"}>
      <AppsIcon fontSize="large" />
    </button>
  );
}
