import "./style.css";
function teacher({teacher}){
    return (
    <div>
        <h1>Teachers Information</h1>
        <div className="">
            {teacher.length >0 &&(
                <div className="parent">
                    {props.teacher.map(t=>{
                     <div className="box">
                        <h1>{t.name}</h1>
                        <h1>{t.lastName}</h1>
                        <h1>{t.age}</h1>
                     </div>
                    })}
                </div>
            )}
        </div>
    </div>
    )
} 
export default teacher;