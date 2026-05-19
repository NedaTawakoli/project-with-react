function Q14(props){
    return(
        <div style={{display:"grid",width:"100%"}}>
            {props.stList.map((person)=>(
                <div style={{width:"30%",border:"1px solid",backgroundColor:"black",color:"purple",margin:"20px 30pc",borderRadius:"8px",textAlign:"center"}} key={person.id}>
                    <h1>{person.name}</h1>
                    <h3>{person.lastName}</h3>
                </div>

            ))}
        </div>
    )
}
export default Q14;