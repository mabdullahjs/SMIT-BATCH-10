import React, { useRef, useState } from 'react'
import Buttons from '../components/Button'
import { db } from '../config/firebase/firebaseConfig'
import { collection, addDoc } from "firebase/firestore";


const Home = () => {
  const [data, setData] = useState([])
  const ref = useRef()
  async function RenderTodo(event) {
    event.preventDefault()
    console.log(ref.current.value);
    setData(ref.current.value)
    console.log(data)


    try {
      const docRef = await addDoc(collection(db, "todo"), {
        todo: ref.current.value
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  return (
    <>
      <form onSubmit={RenderTodo}>
        <input type="text" placeholder="enter todo" ref={ref} />
        <input type="submit" value="add todo" />
      </form>
      <ul>
        {data.map((el, ind) => (
          <li key={ind}>{el}</li>
        ))}
      </ul>
    </>
  )
}

export default Home