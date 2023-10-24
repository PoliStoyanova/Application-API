import React, { useState, useEffect } from "react";
import axios from 'axios';

export default function Home() {
    const [fact, setFact] = useState('');

    useEffect(() => {
        const limit = 10
        const apiKey = '2zXgNc48A2ifNnmneLC1+A==SVoBVMsP38UI7pUH';
        const headres = {
            'X-Api-Key': apiKey,
        };

        axios.get('https://api.api-ninjas.com/v1/facts?limit=' + limit, {headres})
          .then((response) => {
            setFact(response.data.fact);
          })

    }, []);

    return (
        <div>
            <h2>Home</h2>
            <p>{fact}</p>
        </div>
    );
}