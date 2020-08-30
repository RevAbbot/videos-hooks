import { useState, useEffect } from "react";
import youtube from "../apis/YouTube";

const useVideos = (defaultSearchTerm) => {
  const KEY = "AIzaSyBc9DmmZy3nx0esgvhcS_-8v2JL2n6GR4U";
  const [videos, setVideos] = useState([]);

  //
  //  Empty array indicates the useEffect will run only at first render,
  //  making it roughly equivalent to the componentDidMount lifecycle method.

  useEffect(() => {
    //   console.log("useEffect " + defaultSearchTerm);
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const search = async (searchString) => {
    const response = await youtube.get("/search", {
      params: {
        q: searchString,
        part: "snippet",
        maxResults: 5,
        type: "video",
        key: KEY,
      },
    });

    //   console.log(response.data.items);
    setVideos(response.data.items);
  };

  return [videos, search];
};

export default useVideos;
