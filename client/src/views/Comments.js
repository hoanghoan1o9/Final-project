// import React,{useState} from "react";
// import { TextareaAutosize, Button } from "@material-ui/core";
// import axios from "axios";

// const Comments = () => {

//   const [Comment,setComment] = useState("")

//   const handleChange = (e) => {
//     setComment(e.currentTarget.value)
//   }

//   const onSubmit =(e) => {
//     e.preventDefault();

//     const variable = {
//       content: Comment,
//       Writer: 
//     }
//   }

//   return (
//     <div>
//       <br />
//       <p>Replies</p>
//       <hr />
//       {/* comments list */}
//       {/* root comment form    */}

//       <form style={{ display: "flex" }} onSubmit={onSubmit}>
//         <TextareaAutosize
//           // aria-label="minimum height"
//           minRows={3}
//           placeholder="Comments"
//           style={{ width: "100%", borderRadius: "5px" }}
//           onChange={handleChange}
//           value={Comment}
//         />
//         <br />
//         <Button variant="outlined" style={{ width: "20%", height: "72px" }}>
//           Submit{" "}
//         </Button>
//       </form>
//     </div>
//   );
// };
// export default Comments;
