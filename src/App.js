import "./App.css";
import Header from "./Header";
import Todos from "./Todos";
import {Todoitem} from "./Todoitem";
import Footer from "./Footer";
import React,{ useState } from "react";

function App() {
  let onDelete = (todo) => {
    console.log("I am completed of todo",todo);
    unsetTodos(todos.filter((e)=>{
      return e!==todo;
    }))
  }
  const [todos,unsetTodos] = useState( [
    {
      sno: 1,
      title: "Properly Learn and Master the Basics of a Language" ,
      desc: "Properly master the syntax and fundamentals of a popular language with help of HackerRank or GeeksforGeeks."
    },
    {
      sno: 2,
      title: "Learn and Master the Basics of Data Structure and Algorithms" ,
      desc: "Choose from the free playlists of Anuj Bhaiya or Striver or Aditya Verma and learn the most important data structure topics of Data Structure and Algorithms."
    },
    {
      sno: 3,
      title: "Acquire a Skill like Machine Learning or Web Developement" ,
      desc: "Learn one skill at a time from a specific website.For example learn Machine Learning from Andrew Ng on Youtube or Web Developement from Coding with Harry or from the app called Mimo available on Play Store."
    },
    {
      sno: 4,
      title: "Acquire a Skill like Machine Learning or Web Developement" ,
      desc: "Learn one skill at a time from a specific website.For example learn Machine Learning from Andrew Ng on Youtube or Web Developement from Coding with Harry or from the app called Mimo available on Play Store."
    }

  ]
  )
  return (
    <>
    <Header title="MCA Roadmap"/>
    <Todos  />
    <Todoitem todos={todos} onDelete={onDelete}/>
    <Footer />
    </>
  );
}

export default App;
