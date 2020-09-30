import React, { Component } from "react";
import { Grid, Button } from "@material-ui/core";
import { Redirect, Link } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataList: [],
      status: false,
    };
  }

  componentDidMount() {
    this.setState({
      dataList: localStorage.employee ? JSON.parse(localStorage.employee) : [],
    });
  }

  deleteLastRow = async () => {
    let newDataList = this.state.dataList;
    newDataList.pop();

    //POST API
    try {
      localStorage.employee = JSON.stringify(newDataList);

      await this.setState({
        dataList: newDataList,
        status: true,
      });
    } catch (error) {
      alert("Error!!");
    }
  };

  checkSatus = () => {
    console.log(this.state.status);
  };
  render() {
    return (
      <div className="homepage-div">
        <Grid container>
          <Grid item xs={6}>
            <div>
              <h2 class="elementor-heading-title elementor-size-default-1">
                Get to know
                <br />
                the person, <br />
                not the profile.
              </h2>
              <h2 class="elementor-heading-title elementor-size-default-2">
                Employees Maintainance.{" "}
              </h2>
              <Button
                onClick={() => <Redirect to="/register" />}
                id="download-btn-home"
              >
                Register
              </Button>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div>
              <img
                src="https://www.getfilteroff.com/assets/Group-33.png"
                class="attachment-full size-full"
                alt=""
                loading="lazy"
              />
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Home;
