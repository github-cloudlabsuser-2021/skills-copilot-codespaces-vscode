import { useState } from 'react';
import ReactMarkdown from 'react-markdown';

export default function MarkdownEditor() {
    const [markdown, setMarkdown] = useState('type markdown here');

    const handleChange = (event) => {
        setMarkdown(event.target.value);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <textarea
                value={markdown}
                onChange={handleChange}
                style={{ width: '80%', height: '200px', marginBottom: '20px' }}
            />
            <div style={{ width: '80%', border: '1px solid #ddd', padding: '10px' }}>
                <ReactMarkdown>{markdown}</ReactMarkdown>
            </div>
        </div>
    );
}
function reverseSentence(sentence) {
    return sentence
        .split(' ')
        .reverse()
        .join(' ')
        .replace(/^\w/, (c) => c.toUpperCase());
}

console.log(reverseSentence("hello world"));

function generateCheckDigit(key) {
    if (key.length !== 20 || !/^\d+$/.test(key)) {
        throw new Error('Key must be a 20-digit numeric string');
    }

    let sum = 0;
    for (let i = 0; i < key.length; i++) {
        sum += parseInt(key[i], 10) * (i + 1);
    }

    const checkDigit = sum % 10;
    return key + checkDigit;
}

console.log(generateCheckDigit("25483985323755428192"));

