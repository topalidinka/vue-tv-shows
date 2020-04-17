const api = {

  get: async (url, customHeaders = {}) => {
    const defaultHeaders = {
      'Content-Type': 'application/json;charset=utf-8',
      'X-Requested-With': 'XMLHttpRequest',
    };
    const headers = Object.assign(defaultHeaders, customHeaders);
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers,
      });

      const json = await response.json();
      if (response.ok) {
        return json;
      }
      const errorData = {
        code: response.status,
        status: 'error',
        messages: json.messages,
      };
      api.errorCallback(errorData);
      return errorData;
    } catch (err) {
      const errorData = {
        code: 'network',
        status: 'error',
        error: 'Network error',
      };
      api.errorCallback(errorData);
      return errorData;
    }
  },

  post: async (url, params = {}, customHeaders = {}) => {
    const defaultHeaders = {
      'X-Requested-With': 'XMLHttpRequest',
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    };
    const headers = Object.assign(defaultHeaders, customHeaders);
    const body = (params instanceof FormData) ? params : JSON.stringify(params);
    if (params instanceof FormData === false) {
      headers['Content-Type'] = 'application/json;charset=utf-8';
    }
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers,
        body,
      });
      const json = await response.json();
      if (response.ok) {
        return json;
      }
      const errorData = {
        code: response.status,
        status: 'error',
        messages: json.messages,
      };
      api.errorCallback(errorData);
      return errorData;
    } catch (err) {
      const errorData = {
        code: 'network',
        status: 'error',
        error: 'Network error',
      };
      api.errorCallback(errorData);
      return errorData;
    }
  },

  put: async (url, params = {}, customHeaders = {}) => {
    const defaultHeaders = {
      'X-Requested-With': 'XMLHttpRequest',
    };
    const headers = Object.assign(defaultHeaders, customHeaders);
    const body = (params instanceof FormData) ? params : JSON.stringify(params);
    if (params instanceof FormData === false) {
      headers['Content-Type'] = 'application/json;charset=utf-8';
    }

    try {
      const response = await fetch(url, {
        method: 'PUT',
        headers,
        body,
      });

      const json = await response.json();
      if (response.ok) {
        return json;
      }
      const errorData = {
        code: response.status,
        status: 'error',
        messages: json.messages,
      };
      api.errorCallback(errorData);
      return errorData;
    } catch (err) {
      const errorData = {
        code: 'network',
        status: 'error',
        error: 'Network error',
      };
      api.errorCallback(errorData);
      return errorData;
    }
  },

  delete: async (url, params = {}, customHeaders = {}) => {
    const defaultHeaders = {
      'X-Requested-With': 'XMLHttpRequest',
    };
    const headers = Object.assign(defaultHeaders, customHeaders);

    const body = (params instanceof FormData) ? params : JSON.stringify(params);
    if (params instanceof FormData === false) {
      headers['Content-Type'] = 'application/json;charset=utf-8';
    }
    try {
      const response = await fetch(url, {
        method: 'DELETE',
        headers,
        body,
      });

      const json = await response.json();
      if (response.ok) {
        return json;
      }
      const errorData = {
        code: response.status,
        status: 'error',
        messages: json.messages,
      };
      api.errorCallback(errorData);
      return errorData;
    } catch (err) {
      const errorData = {
        code: 'network',
        status: 'error',
        error: 'Network error',
      };
      api.errorCallback(errorData);
      return errorData;
    }
  },

  errorCallback: (error) => {
    console.log(error);
    // TODO
  },

};

export default api;
