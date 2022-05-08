import React from 'react';
import './Blog.css'
const Blog = () => {
    return (
        <div className='container' >
            <h1> This is blog component!!</h1>
            <h3>1. The difference between JavaScript and nodes?</h3>
            <p>Ans: JavaScript is a simple programming language that runs in any browser JavaScript Engine. Whereas Node JS is an interpreter or running environment for a JavaScript programming language that holds many excesses, it requires libraries that can easily be accessed from JavaScript programming for better use.</p>
            <br />
            <h3>2. The difference between sql and nosql databases.</h3>
            <p>Ans: SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
            <br />
            <h3>3. What is the purpose of jwt and how it works?</h3>
            <p> Ans:
                JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.
                <br />
                JWT differ  from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.</p>
        </div>
    );
};

export default Blog;