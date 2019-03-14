import React, { Component } from "react";
import API from "../utils/API";
import Card from "../components/Card";
import Alert from "../components/Alert";

class Discover extends Component {
    state = {
        image: "",
        match: false,
        matchCount: 0
    };

    ComponentDidMount() {
        this.loadNextBook();
    }

    handleBtnClick = event => {

    }
};

export default Discover;