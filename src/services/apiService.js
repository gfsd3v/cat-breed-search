//import { store } from "../../store";
import axios from "axios";

class Api {
  static endPointBaseUrl = `https://api.thecatapi.com/v1`;

  static defaultHeaders = () => {
    const headers = {
      "x-api-key": "6c9d277d-5fb2-4944-99ae-ea2234a4e57b"
    };

    return headers;
  };

  /**
   * Creates a instance with the api information's
   */
  static initialize = () => {
    const instance = axios.create({
      baseURL: Api.endPointBaseUrl,
      headers: Api.defaultHeaders()
    });

    return instance;
  };
}

export default Api;
