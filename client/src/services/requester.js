const requester = async (method, url, data) => {
  const options = {};

  if (method !== "GET") {
    options.method = method;

    if (data) {
      options.headers = {
        "content-type": "application/json",
      };

      options.body = JSON.stringify(data);
    }
  }

  const serializedAuth = localStorage.getItem("auth");
  if (serializedAuth) {
    const auth = JSON.parse(serializedAuth);

    if (auth.accessToken) {
      options.headers = {
        ...options.headers,
        "X-Authorization": auth.accessToken,
      };
    }
  }
  try {
    const response = await fetch(url, options);

    if (response.status === 204) {
      return {};
    }

    const result = await response.json();

    if (!response.ok) {
      throw result;
    }

    return result;
  } catch (error) {
    alert(error.message);
    throw error;
  }
};

export const requestFactory = () => {
  return {
    get: requester.bind(null, "GET"),
    post: requester.bind(null, "POST"),
    put: requester.bind(null, "PUT"),
    patch: requester.bind(null, "PATCH"),
    delete: requester.bind(null, "DELETE"),
  };
};
