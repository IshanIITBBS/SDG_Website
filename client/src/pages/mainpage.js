import React, { useState, useEffect }  from 'react';
import IntroVideo from './intro';
import axios from 'axios';
 

function Mainpage(){

    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Fetch products from backend
        axios.get('http://localhost:5000/') // Adjust if frontend/backend hosted differently
            .then(response => setProducts(response.data))
            .catch(error => console.error('Error fetching products:', error));
    }, []);


const [showIntro, setShowIntro] = useState(true);

    // Skip the intro video when the "Skip" button is clicked
    const handleSkipIntro = () => {
        setShowIntro(false);
    };

    // Automatically skip the intro after 10 seconds (optional)
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowIntro(false);
        }, 10000); // 10 seconds
        return () => clearTimeout(timer);
    }, []);

        return (
        <div className="App">
            {showIntro ? (
                <IntroVideo onSkip={handleSkipIntro} />
            ) : (
               <>{products}</>
            )}
        </div>
    );
};

export default Mainpage;
