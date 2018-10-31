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
      const response = await this.genericFetchGet(GlobalVars.blogRoutes.getPublishedList);
      return response.json();
    } catch (err) {
      return console.error(err);
    }
  }
}

export default BaseApiHandler;
