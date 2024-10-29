// src/components/RandomFact.js
import React, { useEffect, useState } from 'react';

function RandomFact() {
    const [fact, setFact] = useState('');

    useEffect(() => {
        fetchRandomFact();
    }, []);

    const fetchRandomFact = async () => {
        try {
            const response = await fetch('https://uselessfacts.jsph.pl/api/v2/facts/random?language=en', {
                headers: {
                    'Accept': 'application/json'
                }
            });
            const data = await response.json();
            setFact(data.text);  // 'text' contains the useless fact
        } catch (error) {
            console.error('Error fetching the fact:', error);
            setFact('Could not load a fact right now, try again later!');
        }
    };

    return (
        <div>
            <h2>Random Fact of the Day</h2>
            <p>{fact}</p>
        </div>
    );
}

export default RandomFact;
