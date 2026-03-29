import "./nav.css";
const navBar = ()=>{
   const navStyle={ 
    backgroundColor:"purple",
    color:"white",
    justifyContent:"space-between",
    display:"flex",

   } 
   const ulStyle={
    display:"felx",
    justifyContent:"space-between",
    gap:"8px",
    alignItems:"center",
   }
    const navList = [
   {
    text:"Home",
    href:"/home"
   },
   {
    text:"About",
    href:"/about"
   },
   {
    text:"Contact",
    href:"/contact"
   },
   {
    text:"Services",
    href:"/services"
   },
    ];
    return(
        <nav style={navStyle}>
        <h1 style={
            {
                padding:"4px 11px",
                fontFamily:"mono"
            }
        }>Logo</h1>  
        <ul style={
            {
                display:"flex",
                gap:"33px",
                justifyContent:"space-between"
            }
        }>
            {navList.map((item)=>(
                <li style={
                    {
                        listStyleType:"none",
                    }
                } key={item.href}>
                    <a style={
                        {
                            textDecoration:"none",
                            color:"white",
                            fontSize:"20px",
                            padding:"10px",
                        }
                    } href={item.href}>{item.text}</a>
                </li>
            ))}
        </ul>
        </nav>
    );
};
export default navBar;