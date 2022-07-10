const URL = 'https://www.balldontlie.io/api/v1';

export const getTeam = (per_page: number, page: number) => {
  return fetch(`${URL}/teams?page=${page}&per_page=${per_page}`)
    .then(response => {
      if (!response.ok) {
        return Promise.reject();
      }

      return response.json();
    });
};

export const getPlayers = (per_page: number, page: number) => {
  return fetch(`${URL}/players?page=${page}&per_page=${per_page}`)
    .then(response => {
      if (!response.ok) {
        return Promise.reject();
      }

      return response.json();
    });
};

export const addTeam = (team: newTeam) => {
  // eslint-disable-next-line no-console
  console.log(team);

  return fetch('https://www.balldontlie.io/api/v1/teams', {
    method: 'POST',
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
    body: JSON.stringify(team),
  })
    .then(response => {
      if (!response.ok) {
        return Promise.reject();
      }

      return response.json();
    });
};
