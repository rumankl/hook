import axios from "axios"
import { useEffect, useState } from "react";

const Othe = () => {
  const [c, setC] = useState([]);



  const getData = async () => {

    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setC(response.data);
    } catch (err) {
      // console.log('lio');
    }
  }


  useEffect(() => {
    getData();
    console.log('hello');
  }, []);

  console.log('sello');






  return (
    <div>


      <h1>hello jee</h1>

    </div>
  )
}
export default Othe


// import axios from "axios"
// import { useEffect, useState } from "react";

// const HomePage = () => {

//   const [toggle, setToggle] = useState(false);

//   const change = () => {
//     setToggle((prev) => !prev);
//   }

//   // const [c, setC] = useState([]);



//   // const getData = async () => {

//   //   try {
//   //     const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
//   //     setC(response.data);
//   //   } catch (err) {
//   //     // console.log('lio');
//   //   }
//   // }


//   // useEffect(() => {
//   //   getData();
//   //   console.log('hello');
//   // }, []);

//   // console.log('sello');






//   return (
//     <div>
//       <button onClick={change}>Change To {`${toggle}`}</button>

//       {toggle ? <h1>hello jee</h1> : null}

//     </div>
//   )
// }
// export default HomePage