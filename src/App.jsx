import "./style.css";
import StudentList from "./todo-list";
function App(){
  const list = [
    {
      id:1,
      name:"Ali",
      Age:17,
      Gender:"male"
    },
    {
      id:2,
      name:"Ali reza",
      Age:18,
      Gender:"male"
    },
    {
      id:3,
      name:"Alima",
      Age:17,
      Gender:"Female"
    },
    {
      id:4,
      name:"Adila",
      Age:19,
      Gender:"Female"
    },
  ];
  let teacherList = [
   {
    id:1,
    name:"Sadaf",
    lastName:"Qurbani",
    Age:30,
   },
   {
    id:1,
    name:"Sadaf",
    lastName:"Qurbani",
    Age:30,
   },
   {
    id:2,
    name:"Setara",
    lastName:"Mahmodi",
    Age:30,
   },
   {
    id:3,
    name:"Shamsia",
    lastName:"Baquri",
    Age:24,
   },
  ];
  return <div>
    <nav>
      <h1>Todo List</h1>
      <button>Save</button>
    </nav>
    {/* <StudentList stList={list}/> */}
    <teacher teacher={teacherList}/>
  </div>
}
export default App;