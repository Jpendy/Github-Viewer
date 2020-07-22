
export const getUserInfo = userName => {
  return fetch(`https://cors-anywhere.herokuapp.com/https://api.github.com/users/${userName}`, {
    Headers: {
      Origin: null
    }
  })
    .then(res => res.json());
};

export const getUserRepos = userName => {
  return fetch(`https://cors-anywhere.herokuapp.com/https://api.github.com/users/${userName}/repos`, {
    Headers: {
      Origin: null
    }
  })
    .then(res => res.json());
};
