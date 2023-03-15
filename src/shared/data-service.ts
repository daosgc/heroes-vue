import { supabaseInstance } from "../supabase/supabaseClient";

const getHeroes = async () => {
  try {
    const { error, data } = await supabaseInstance.from("heroes").select();
    if (error) console.error(error.message);
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const getHero = async (id: number) => {
  try {
    const { error, data } = await supabaseInstance
      .from("heroes")
      .select()
      .eq("id", id);
    if (error) console.error(error.message);
    return data[0];
  } catch (error) {
    console.error(error);
    return null;
  }
};

const updateHero = async (hero) => {
  try {
    const { error, data } = await supabaseInstance
      .from("heroes")
      .update(hero)
      .eq("id", hero.id);
    if (error) console.error(error.message);
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const dataService = {
  getHeroes,
  getHero,
  updateHero,
};
