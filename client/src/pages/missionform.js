import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css' ;
import axios from 'axios';
import React,{useEffect , useState} from 'react';
import { useNavigate } from 'react-router-dom';


function Missionform() {
    const options = ["Completed", "Ongoing" ,"Abandoned" , "Upcoming"] ;
    const navigate = useNavigate();


    const [csrfToken, setCsrfToken] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('') ;
    const [imageurl, setImageurl] = useState('') ;
    //  const [options,setOptions] = useState('') 
    useEffect(() => {
        const fetchCsrfToken = async () => {
          try {
            const response = await axios.get('http://localhost:5000/csrf-token',{ withCredentials: true });
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
            'http://localhost:5000/admin/postmission',
            { title, description,status,imageurl},
            {
              headers: {
                'X-CSRF-Token': csrfToken,
              },
              withCredentials: true, // Important for CSRF cookie-based tokens
            }
          );
          if(response.data.loggedIn==false)
          {
            alert('Login required')
            navigate('/login') ;
          }
          else if(response.data.admin==false)
          {
            alert('Only Admin can Post') ;
          }
          else
          {
            alert(response.data.status) ;
          }
        } catch (error) {
          console.error('Error submitting form:', error);
        }
      };
  return (
    <div className='login'>
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="string" placeholder="Enter title" value={title} onChange={(e) => setTitle(e.target.value)} />
      </Form.Group>
        
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Image URL</Form.Label>
        <Form.Control type="string" placeholder="Enter image URL" value={imageurl} onChange={(e) => setImageurl(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Description</Form.Label>
        <Form.Control  as="textarea" rows={3} placeholder="Typehere" value={description} onChange={(e) => setDescription(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail" >
        <Form.Label style={{margin:"10px"}}>Status</Form.Label>
        <input
                list="status"
                id="status-input"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                placeholder="Choose status"
            />
            <datalist id="status">
                {options.map((option, index) => (
                    <option key={index} value={option} />
                ))}
            </datalist>
      </Form.Group>

     
      <Button variant="primary" type="submit" >
        Submit
      </Button>
    </Form>
    </div>
  );
}

export default Missionform;