import config from "../config/config";

export function URLBuild(base, params) {
  var url = new URL(base);

  Object.keys(params).forEach(key => {
    if (Array.isArray(params[key])) {
      params[key].forEach((val) => {
        if (val) {
          url.searchParams.append(key + '[]', val);
        }
      })
    } else {
      if (params[key]) {
        url.searchParams.append(key, params[key])
      }
    }
  });

  return url.toString();
}


const Fetcher = {
  request: async (method, path, body = null, headers = {}, retry = 0) => {
    let accessToken = localStorage.getItem('idToken');

    if (!(accessToken)) {
      throw new Error('Not Connected !')
    }

    headers = Object.assign({}, headers, {
      Authorization: accessToken,
      "Content-Type": "application/json",
    });

    return await fetch(config.apiGateway.URL + path, { method, headers, body })
      .then(async (res) => {
        if (res.status < 200 || res.status >= 300)
          throw res;
        return await res.json(); // {status: res.status, ...res.json()};
      })
      .catch(async err => {
        // TODO: handle 401
        if (err.status === 401) {
          //   if (retry == 0) {
          //     let user = await OidcUtils.refreshSignIn();
          //     if (!user)
          //         throw new Error('Unauthorized');
          //     return await Fetcher.request(method, path, body, headers, retry + 1);
          //   } else {
          //     await OidcUtils.logout(false);
          //     throw new Error('Unauthorized')
          //   }
        }
        throw err;
      });
  },

  get: async (path, headers = {}) => Fetcher.request('GET', path, null, headers),
  post: async (path, data = {}, headers = {}) => Fetcher.request('POST', path, JSON.stringify(data), headers),
  put: async (path, data = {}, headers = {}) => Fetcher.request('PUT', path, JSON.stringify(data), headers),
  patch: async (path, data = {}, headers = {}) => Fetcher.request('PATCH', path, JSON.stringify(data), headers),
  delete: async (path, headers = {}) => Fetcher.request('DELETE', path, null, headers)
};

export default Fetcher;