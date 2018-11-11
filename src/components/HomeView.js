import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as blogActions from '../reducers/actions/blogActions';

function BlogItem(blog) {
  console.log(blog.blog);
  return (
    <div className="blog-item">
      <p>{blog.blog.title}</p>
    </div>
  );
}

class HomeView extends Component {
  componentDidMount() {
    this.props.getBlogList();
  }

  blogList() {
    const list = [];
    for (let i = 0; i < this.props.blog.length; i += 1) {
      list.push(<BlogItem key={this.props.blog[i]._id} blog={this.props.blog[i]} />);
    }
    return list;
  }

  render() {
    return (
      <div className="home-main">
        <h1>HomePage</h1>
        {this.blogList()}
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
