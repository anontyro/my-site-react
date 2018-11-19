import GlobalVars from '../../data/GlobalVars';

class BaseApiHandler {
  baseHeader = (method = 'GET') => {
    const headers = new Headers();
    headers.set('Content-Type', 'application/json');
    const options = {
      method,
      mode: 'cors',
      headers,
    };
    return options;
  }

  genericFetchGet = async (endpoint) => {
    const uri = GlobalVars.apiRoot + endpoint;

    try {
      const response = await fetch(uri, this.baseHeader());
      return response.json();
    } catch (err) {
      return console.error(err);
    }
  }

  getBlogList = async () => {
    try {
      const response = await this.genericFetchGet(
        GlobalVars.baseRoutes.develop + GlobalVars.blogRoutes.getPublishedList,
      );
      return response;
    } catch (err) {
      return console.error(err);
    }
  }

  getCurrentResume = async () => {
    try {
      const response = await this.genericFetchGet(
        GlobalVars.blogRoutes.develop + GlobalVars.resumeRoutes.getCurrentResume,
      );
      return response;
    } catch (err) {
      return console.error(err);
    }
  }

}

export default BaseApiHandler;
