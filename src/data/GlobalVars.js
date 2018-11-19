const GlobalVars = {
  apiRoot: 'https://rfl5jsmj0m.execute-api.ap-southeast-1.amazonaws.com/',
  baseRoutes: {
    develop: 'dev/',
    production: 'prod/',
  },
  authRoutes: {
    login: 'login',
    userUpdate: 'user',
    updatePassword: 'updatepassword',
  },
  blogRoutes: {
    getPublishedList: 'blog',
    getAllBlogs: 'blog/all',
    getBlogBySlug: 'blog/find/',
    createBlog: 'blog',
    updateBlog: 'blog',
    deleteBlog: 'blog/',
  },
  resumeRoutes: {
    getCurrentResume: 'resume',
    getAllResumes: 'resumes',
    createResume: 'resume',
    updateResume: 'resume',
    patchSelectedResumse: 'resume',
    deleteResume: 'resume/',
  },
};

export default GlobalVars;
