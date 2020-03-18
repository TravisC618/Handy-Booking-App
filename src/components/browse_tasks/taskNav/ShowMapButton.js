import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import "../../../css/browse_tasks/TypeButton.css";
import { TASK_URL } from "../../../routes/URLMAP";

export default function ShowMapButton() {
  return (
    <div>
      <Button color="primary">
        <Link to={`${TASK_URL}`} className="showMapLink">
          Show Map
        </Link>
      </Button>
    </div>
  );
}
