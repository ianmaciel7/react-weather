import { API_URL, API_KEY } from "../helpers/config";

const apiSettings = {
  fetchCity: async (city) => {
    const endpoint = `${API_URL}/weather?q=${city}&appid=${API_KEY}`;
    return await fetch(endpoint).then((response) => {
      if (response.ok) return response.json();
      else throw response.cod;
    });
  },
};

export default apiSettings;
