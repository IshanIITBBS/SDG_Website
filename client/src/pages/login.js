import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css' ;
import axios from 'axios';
import React,{useEffect , useState} from 'react';
import { useGlobalContext } from '../globalcontext';


function Login() {

    const [csrfToken, setCsrfToken] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { globalVariable, setGlobalVariable } = useGlobalContext();
    useEffect(() => {
        const fetchCsrfToken = async () => {
          try {
            const response = await axios.get(`${globalVariable}/csrf-token`,{ withCredentials: true });
            setCsrfToken(response.data.csrfToken);
          } catch (error) {
            console.error('Error fetching CSRF token:', error);
          }
        };
        fetchCsrfToken();
      }, []);
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
          const response = await axios.post(
            `${globalVariable}/login`,
            { email, password },
            {
              headers: {
                'X-CSRF-Token': csrfToken,
              },
              withCredentials: true, // Important for CSRF cookie-based tokens
            }
          );
          console.log(response.data);
          alert(response.data.status) ;
        } catch (error) {
          console.error('Error submitting form:', error);
        }
      };

  return (
    <div className='login'>
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit" >
        Submit
      </Button>
    </Form>
    </div>
  );
}

export default Login;