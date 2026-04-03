// // import Example from "./example";

// import { useState } from "react";

// // function Header(props){
// //     let name = "Sadaf";
// //     return (
// //         <>
// //         <h1 style={
// //             {
// //                 textAlign:"center",
// //                 fontSize:"25px",
// //                 fontFamily:"mono",
// //                 fontSize:"bold"
// //             }
// //         }>{ props.text}</h1>
// //         <h1 style={
// //             {
// //                 textAlign:"center",
// //                 fontFamily:"monospace"
// //             }
// //         }>افغانیستان یکی  از کشور های آسیای میانه و جنوبی است که تاریخ بیسار کهن و فرهنگ غنی دارد این کشور در چهار راه کهن تمدن ها قرار گرفته و در طول تاریخ محل رفت و آمد اقوام تاجران و فرهنگ های مختلف بوده است</h1>
// //         <Example/>
// //         </>
// //     );
// // }
// // export default Header;


// function example1(){
//     const [value,setValue]= useState("");
//     return(
//         <div>
//             <h1 style={
//                 {
//                     margin:"20px",
//                     fontSize:"30px",
//                     color:"purple",
//                     border:"1px solid",
//                     padding:"10px 8px",
//                     width:"40%",
//                     borderRadius:"8px"
//                 }
//             }>{value}</h1>
//             <input type="text" valueimport { useState } from "react"={value}style={
//                 {
//                     width:"40%",
//                     border:"1px solid purple",
//                     borderRadius:"7px",
//                     padding:"15px 0",
//                     margin:"20px ",
            
//                 }
//             } onChange={(e)=>setValue(e.target.value)}  />
//         </div>
//     )
// }
// export default example1;
function Header(){
    return (
        <div>
            <nav>
                <a href="about">About</a>
                <a href="contact">Contact</a>
                <a href="services">Services</a>
                <a href="tamas">Tamas</a>
            </nav>
        </div>
    )
}
export default Header;