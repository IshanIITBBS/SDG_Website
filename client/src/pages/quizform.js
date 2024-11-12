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
    const [question, setQuestion] = useState('');
    const [optionA, setOptionA] = useState('');
    const [optionB, setOptionB] = useState('');
    const [optionC, setOptionC] = useState('');
    const [optionD, setOptionD] = useState('');
    const [answer, setAnswer] = useState('') ;

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
            `${globalVariable}//admin/postquiz`,
            { question,optionA,optionB,optionC,optionD,answer },
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
        <Form.Label>Question</Form.Label>
        <Form.Control type="string" placeholder="Enter Question" value={question} onChange={(e) => setQuestion(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Option a</Form.Label>
        <Form.Control type="string" placeholder="Enter Option" value={optionA} onChange={(e) => setOptionA(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Option b</Form.Label>
        <Form.Control type="string" placeholder="Enter Option" value={optionB} onChange={(e) => setOptionB(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Option c</Form.Label>
        <Form.Control type="string" placeholder="Enter Option" value={optionC} onChange={(e) => setOptionC(e.target.value)} />
      </Form.Group>
        
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Option d</Form.Label>
        <Form.Control type="string" placeholder="Enter Optiom" value={optionD} onChange={(e) => setOptionD(e.target.value)} />
      </Form.Group>
     
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Answer Option Index</Form.Label>
        <Form.Control type="string" placeholder="Enter answer" value={answer} onChange={(e) => setAnswer(e.target.value)} />
      </Form.Group>
      <Button variant="primary" type="submit" >
        Submit
      </Button>
    </Form>
    </div>
  );
}

export default Noticeform;