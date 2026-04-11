 function StudentList(stList){
    return <div className="parent">
   {stList.length > 0 && stList.map(item=>(
    <div className="box" key={item.id}>
        <h1>{ item.name }</h1>
        <h2>{ item.Age }</h2>
        <h2>{ item.Gender }</h2>
    </div>
   ))}
   {stList.length == 0 &&(
    <div className="error">
        No student exists yet
    </div>
   )}
    </div>
}
export default StudentList;