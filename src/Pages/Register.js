import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import '../App.css'

function Register() {
  return (
    <div className = "regiterDiv">
      <Form className = "registerForm">
      
      <div className="RegisterForm">
      <FloatingLabel controlId="floatingInput" label="First Name" >
         <Form.Control type="text" placeholder="name@example.com" />
       </FloatingLabel>
     
       <FloatingLabel controlId="floatingInput" label="Last Name" >
         <Form.Control type="text" placeholder="name@example.com" />
       </FloatingLabel>
     
    
       <FloatingLabel controlId="floatingInput" label="Email" >
         <Form.Control type="email" placeholder="name@example.com" />
       </FloatingLabel>
     
    
       <FloatingLabel controlId="floatingInput" label="Phone" >
         <Form.Control type="text" placeholder="name@example.com" />
       </FloatingLabel>
     
    
     
       <FloatingLabel controlId="floatingPassword" label="Password">
         <Form.Control type="password" placeholder="Password" />
       </FloatingLabel>
     
      </div>
     <Button style = {{
       width:'25%',
       boxShadow:' 1px 1px 3px'

     }} variant="secondary" type="submit">
       Submit
     </Button>
   </Form>
    </div>
  );
}

export default Register;