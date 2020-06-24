import React, { Component } from "react";
import axios from "axios";
import { LEFT_PROILE_URL } from "../constants/url";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import PeopleIcon from "@material-ui/icons/People";
import StarBorderIcon from "@material-ui/icons/StarBorder";

class LeftProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiData: ""
    };
  }

  componentDidMount = () => {
    axios
      .get(LEFT_PROILE_URL)
      .then(res => {
        this.setState({
          apiData: res.data
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="flex-start"
        spacing={0}
      >
        <Grid item xs={12}>
          {/* <image style={{ width: 100, height: 100 }} src={this.state.apiData.avatar_url}></Image> */}
          <Grid container direction="row" justify="center" alignItems="center">
            <Avatar
              alt="user profile picture"
              src={this.state.apiData.avatar_url}
              style={{ width: "200px", height: "200px" }}
            />
          </Grid>
        </Grid>
        {/* Username */}
        <Grid item xs={12} style={{ marginBottom: "-12%" }}>
          <h2>{this.state.apiData.name}</h2>
        </Grid>
        {/* userid */}
        <Grid item xs={12} style={{ marginBottom: "-8%" }}>
          <h3 style={{ color: "grey" }}>{this.state.apiData.login}</h3>
        </Grid>
        {/* BIO */}
        <Grid item xs={12}>
          <p>{this.state.apiData.bio}</p>
        </Grid>
        {/* follow button */}
        <Grid item xs={12}>
          <Button variant="contained" style={{ backgroundColor: "#fafbfc" }}>
            Follow
          </Button>
        </Grid>
        {/* follow status */}
        <Grid item xs={12}>
          <Grid
            container
            direction="row"
            spacing={1}
            justify="flex-start"
            alignItems="flex-start"
          >
            <Grid item>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                <PeopleIcon />
                <p style={{ color: "grey" }}>
                  {this.state.apiData.followers} followers
                </p>
              </Grid>
            </Grid>
            <Grid item>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={1}
              >
                <Grid item>
                  <p>{this.state.apiData.following}</p>
                </Grid>
                <Grid item>
                  <p style={{ color: "grey" }}>followers</p>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                <StarBorderIcon />
                <p>{this.state.apiData.public_repos}</p>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {/* other details  */}
        <Grid item xs={12}>
          <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="flex-start"
            spacing={0}
          >
            <p style={{ marginBottom: "-10%" }}>{this.state.apiData.company}</p>
            <p style={{ marginBottom: "-10%" }}>
              {this.state.apiData.location}
            </p>
            <p style={{ marginBottom: "-10%" }}>{this.state.apiData.email}</p>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default LeftProfile;
