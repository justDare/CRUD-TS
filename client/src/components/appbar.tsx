import React from "react";

// Material
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const Appbar: React.FC = () => {
  return (
    <AppBar position="fixed" className="app-bar">
      <Toolbar>
        <Typography variant="h6" className="user">
          JS Full Stack CRUD
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;
