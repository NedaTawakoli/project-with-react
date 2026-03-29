const navBar = ()=>{
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
        <nav>
        <h1>Logo</h1>  
        <ul>
            {navList.map((item)=>(
                <li key={item.href}>
                    <a href={item.href}>{item.text}</a>
                </li>
            ))}
        </ul>
        </nav>
    );
};
export default navBar;