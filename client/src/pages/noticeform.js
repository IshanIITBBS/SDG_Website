import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import React,{useEffect , useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './noticeform.css'
import { useGlobalContext } from '../globalcontext';
function Noticeform() {
    
    const navigate = useNavigate();

    const { globalVariable, setGlobalVariable } = useGlobalContext();
    const [csrfToken, setCsrfToken] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('') ;
    
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
            `${globalVariable}/admin/postnotice`,
            { title, description,date },
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
        <Form.Label>Title</Form.Label>
        <Form.Control type="string" placeholder="Enter title" value={title} onChange={(e) => setTitle(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Typehere" value={description} onChange={(e) => setDescription(e.target.value)} className='textarea'/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Date Posted</Form.Label>
        <Form.Control type="string" placeholder="Enter title" value={date} onChange={(e) => setDate(e.target.value)} />
      </Form.Group>

     
      <Button variant="primary" type="submit" >
        Submit
      </Button>
    </Form>
    </div>
  );
}

export default Noticeform;