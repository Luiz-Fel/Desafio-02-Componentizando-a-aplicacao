import { useState, useEffect } from "react";



export function Content() {
  
  const [contentList, setContentList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3333/movies', {

    })
    .then(response => response.json())
    .then(data => setContentList(data))
   });


  return contentList;

}