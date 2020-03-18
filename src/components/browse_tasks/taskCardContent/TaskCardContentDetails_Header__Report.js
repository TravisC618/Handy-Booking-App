import React from "react";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import "../../../css/browse_tasks/TaskCardContentDetails_Header__Report.css";

export default function TaskReport() {
  const preventDefault = event => event.preventDefault();

  return (
    <div className="TaskReport">
      <Link href="#" onClick={preventDefault} underline="none">
        <Typography
          variant="button"
          display="block"
          gutterBottom
          color="textSecondary"
        >
          Report this task
        </Typography>
      </Link>
    </div>
  );
}
