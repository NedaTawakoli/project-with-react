function Users({user,value}){
    return(
    <div style={{border:"1px solid",borderRadius:"8px",padding:"20px"}}>
        <h1 style={{fontSize:"35px",fontWeight:"bold"}}>{user.name}</h1>
        <div style={{display:"flex",justifyContent:"space-between"}}>
            <p>{user.email}</p>
            <p style={{color:"gray",textDecoration:"underline"}}>{user.phone}</p>
        </div>
    </div>
    )
}
export default Users;