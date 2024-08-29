import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
// import { categoryUrl } from "../app_data/api_urls";

const Categories = () => {
  const [data, setData] = useState();

  const getData = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setData(response.data);
    } catch (err) {

    }

  }





  useEffect(() => {
    getData();

  }, []);

  // const person = {
  //   // address: {
  //   //   city: 'ktm'
  //   // }
  // };

  // console.log(person.address);

  console.log(data);
  return (
    <div>


      {data?.categories.map((cata, i) => {
        return <h1 key={i}>{cata.title}</h1>
      })}




    </div>
  )
}
export default Categories
