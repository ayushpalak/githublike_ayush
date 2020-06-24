import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import LeftProfile from "./LeftProfile";
class ProfileScreen extends Component {
  render() {
    return (
      <Grid container spacing={0} style={{ marginTop: "10%" }}>
        <Grid item xs={12} sm={2}></Grid>
        <Grid item xs={12} sm={2}>
          <LeftProfile />
        </Grid>
        <Grid item xs={12} sm={8}>
          <p> Main Content </p>
        </Grid>
      </Grid>
    );
  }
}

export default ProfileScreen;
