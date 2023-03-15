import axios, * as others from "axios";

import { API } from "./config";

const getHeroes = async () => {
  // cant just return this, because its not what we want
  // return response.data;
  // but what if there is bad data in the response?
  // let data = response.data;
  // Let's parse it better
  try {
    const response = await axios.get(`${API}/heroes.json`);

    let data = parseList(response);
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const getHero = async (id) => {
  try {
    const response = await axios.get(`${id}.json`);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const updateHero = async (hero) => {
  try {
    const response = await axios.get(`${hero.id}.json`);
    const updatedHero = { ...response.data, ...hero };
    return updatedHero;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const parseList = (response) => {
  if (response.status !== 200) throw Error(response.message);
  if (!response.data) return [];
  let list = response.data;
  if (typeof list !== "object") {
    list = [];
  }
  return list;
};

export const data = {
  getHeroes,
  getHero,
  updateHero,
};
