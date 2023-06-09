import axios from "axios";

const URL =
  "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

const rapid_api_key = process.env.REACT_APP_RAPID_API_KEY;

const options = {
  params: {
    bl_latitude: "11.847676",
    tr_latitude: "12.838442",
    bl_longitude: "109.095887",
    tr_longitude: "109.149359",
  },
  headers: {
    "X-RapidAPI-Key": rapid_api_key,
    "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
  },
};

export const getLocationData = async () => {
  try {
    const {
      data: { data },
    } = await axios.get(URL, options);
    return data;
  } catch (error) {
    console.log(error);
  }
};
