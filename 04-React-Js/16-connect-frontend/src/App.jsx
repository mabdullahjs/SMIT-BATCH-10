import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'

const App = () => {
  const [student, setStudent] = useState(null);

  const email = useRef();
  const name = useRef();
  const age = useRef();

  useEffect(() => {
    axios.get('http://localhost:3000/api/v1/students')
      .then((res) => {
        console.log(res.data.student)
        setStudent(res.data.student)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])



  const addStudent = (event) => {
    event.preventDefault()
    console.log(typeof +age.current.value)
    axios.post('http://localhost:3000/api/v1/students', {
      email: email.current.value,
      age: +age.current.value,
      name: name.current.value
    }).then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err);
    })
  }

  const getSingleStudent = (id) => {
    axios.get(`http://localhost:3000/api/v1/students/${id}`)
      .then((res) => {
        console.log(res.data.student);
      }).catch((err) => {
        console.log(err);
      })
  }

  return (
    <>
      <form onSubmit={addStudent}>
        <input type="text" placeholder='name' ref={name} />
        <input type="email" placeholder='email' ref={email} />
        <input type="number" placeholder='age' ref={age} />
        <button type='submit'>addStudent</button>
      </form>
      {student ? student.map((item) => {
        return <h1 style={{ cursor: 'pointer' }} onClick={() => getSingleStudent(item._id)} key={item._id}> {item.name}</h1>
      }) : <h1>Loading...</h1>}
    </>
  )
}

export default App