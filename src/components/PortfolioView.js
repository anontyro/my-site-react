import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as blogActions from '../reducers/actions/blogActions';

class PortfolioView extends Component {
    componentDidMount() {
      this.props.getBlogList();
    }
  
    render() {
      return (
        <h1>Portfolio</h1>
      );
    }
  }
  
  const mapStateToProps = state => ({
    blog: state.blog.blogList,
  });
  
  const mapDispatchToProps = dispatch => ({
    getBlogList: () => dispatch(blogActions.fetchBlogList()),
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(PortfolioView);
  