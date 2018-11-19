import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as resumeActions from '../reducers/actions/resumeActions';

class ResumeView extends Component {
  componentDidMount() {
    const { getCurrentResume } = this.props;
    getCurrentResume();
  }

  render() {
    const { currentResume } = this.props;
    console.log(currentResume);
    return (
      <h1>Resume</h1>
    );
  }
}

ResumeView.defaultProps = {
  currentResume: [],
};

ResumeView.propTypes = {
  getCurrentResume: PropTypes.oneOfType([PropTypes.func]).isRequired,
  currentResume: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

const mapStateToProps = state => ({
  currentResume: state.resume.currentResume,
});

const mapDispatchToProps = dispatch => ({
  getCurrentResume: () => dispatch(resumeActions.fetchCurrentResume()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ResumeView);
