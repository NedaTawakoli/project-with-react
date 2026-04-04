// const navBar = ()=>{
//     const navList = [
//    {
//     text:"Home",
//     href:"/home"
//    },
//    {
//     text:"About",
//     href:"/about"
//    },
//    {
//     text:"Contact",
//     href:"/contact"
//    },
//    {
//     text:"Services",
//     href:"/services"
//    },
//     ];
//     return(
//         <nav>
//         <h1>Logo</h1>  
//         <ul>
//             {navList.map((item)=>(
//                 <li key={item.href}>
//                     <a href={item.href}>{item.text}</a>
//                 </li>
//             ))}
//         </ul>
//         </nav>
//     );
// };

import { Link } from "react-router-dom";

// export default navBar;
function Nav(){
    const list = [
        {
            link:"/",
            name:"Home Page"
        },
        {
            link:"/about",
            name:"About Page"
        },
        {
            link:"/services",
            name:"Services Page"
        },
    ];
    return(
        <>
        <nav>
            <h3>Logo</h3>
            <ul>
              {list.map((item)=>(
                <li>
                    <Link to={item.link}>{item.name}</Link>
                </li>
              ))}
            </ul>
        </nav>
        </>
    )
}
export default Nav;