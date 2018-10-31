import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actionList from '../actions/actions';

class HomeView extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <div className="home-main">
        <h1>HomePage</h1>
      </div>
    );
  }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);