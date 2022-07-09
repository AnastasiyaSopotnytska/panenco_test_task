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
