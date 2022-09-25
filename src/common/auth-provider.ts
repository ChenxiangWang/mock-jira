const localStorageKey = "__auth_provider_token__";
const apiUrl = process.env.REACT_APP_API_URL;
export const getToken = () => window.localStorage.getItem(localStorageKey);


export const handleUserResponse = (user : {token: string}) => {
  window.localStorage.setItem(localStorageKey, user.token || '');
}
export const login = (data: {usernmae: string, password: string}) => {
  return fetch(apiUrl + "/login", {
    method: 'POST',
    headers: {
      "Context-type": "application/json",
    },
    body: JSON.stringify(data)
  }).then(async (res) => {
    if (res.ok) {
      return handleUserResponse(await res.json());
    }
  })
}

export const register = (data: {usernmae: string, password: string}) => {
  return fetch(apiUrl + "/resgiter", {
    method: 'POST',
    headers: {
      "Context-type": "application/json",
    },
    body: JSON.stringify(data)
  }).then(async (res) => {
    if (res.ok) {
      return handleUserResponse(await res.json());
    }
  })
}

export const logout = () => window.localStorage.removeItem(localStorageKey);
