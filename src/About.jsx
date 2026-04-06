import Nav from "./navbar";

function AboutPage(){
    return(
        <>
        <div>
            <Nav/>
            <h1 style={
      {
        textAlign:"center",
         border:"1px solid",
         width:"fit-content",
         margin:"20px auto",
         borderRadius:"5px",
         color:"purple",
         padding:"15px"
      }}>This is the About Page</h1>
        </div>
        </>
    )
}
export default AboutPage;