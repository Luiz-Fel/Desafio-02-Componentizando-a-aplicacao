import { useState } from "react";
import { useEffect } from "react";

interface Genre {
  name: string,
  title: string,
  id: number,
}

export function SideBar() {
  
  const [genres, setGenres] = useState<Genre[]>([]);

  useEffect(() => {
    fetch('http://localhost:3333/genres', {

    })
    .then(response => response.json())
    .then(data => setGenres(data))
  })



  return (
      genres  
  );

}