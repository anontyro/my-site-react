import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as blogActions from '../reducers/actions/blogActions';

class HomeView extends Component {
  componentDidMount() {
    this.props.getBlogList();
  }

  render() {
    return (
      <div className="home-main">
        <h1>HomePage</h1>
        <p>
          {this.props.blog}
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  blog: state.blog.blogList,
});

const mapDispatchToProps = dispatch => ({
  getBlogList: () => dispatch(blogActions.fetchBlogList()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);
