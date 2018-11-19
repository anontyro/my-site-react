import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
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
    const { getBlogList } = this.props;
    getBlogList();
  }

  blogList() {
    const { blog } = this.props;

    const list = [];
    for (let i = 0; i < blog.length; i += 1) {
      /* eslint-disable no-underscore-dangle */
      list.push(<BlogItem key={blog[i]._id} blog={blog[i]} />);
    }
    return list;
  }

  render() {
    const { blog } = this.props;

    return (
      <div className="home-main">
        <h1>HomePage</h1>
        {blog && this.blogList()}
      </div>
    );
  }
}

HomeView.propTypes = {
  getBlogList: PropTypes.func.isRequired,
  blog: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};

const mapStateToProps = state => ({
  blog: state.blog.blogList,
});

const mapDispatchToProps = dispatch => ({
  getBlogList: () => dispatch(blogActions.fetchBlogList()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);
