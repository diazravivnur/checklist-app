// import { useState } from "react";

// import { Form, Button } from "react-bootstrap";
// import { API, setAuthToken } from "../../config/api";

// const register = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [username, setFullName] = useState("");
//   const [message, setMessage] = useState("");
//   const handleRegister = async (e) => {
//     e.preventDefault();

//     try {
//       const users = { email, password, fullName };
//       const config = { headers: { "Content-Type": "application/json" } };
//       const body = JSON.stringify(users);
//       const response = await API.post("/register", body, config);
//       console.log(response);
//       if (response.data.status === "Success") {
//         setMessage("Email successfully registered");
//       } else {
//         setMessage(response.data.message);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   return (
//     <div>
//       <Form>
//         <Form.Group className="mb-3" controlId="formBasicEmail">
//           <Form.Label>Email address</Form.Label>
//           <Form.Control type="email" placeholder="Enter email" />
//           <Form.Text className="text-muted">
//             We'll never share your email with anyone else.
//           </Form.Text>
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="formBasicPassword">
//           <Form.Label>Password</Form.Label>
//           <Form.Control type="password" placeholder="Password" />
//         </Form.Group>
//         <Form.Group className="mb-3" controlId="formBasicCheckbox">
//           <Form.Check type="checkbox" label="Check me out" />
//         </Form.Group>
//         <Button variant="primary" type="submit">
//           Submit
//         </Button>
//       </Form>
//     </div>
//   );
// };

// export default register;
