import React from "react";
import './App.css';
import TestJSON from './files/test.json';
import ReactHtmlParser from 'react-html-parser'; 

console.log(TestJSON.data.children);
function App(){
    return(
        <div className="container">
        <h1>Contenterra React Challenge - Sridhar Rambhatla</h1><br></br>
        <div className="cards">
        {
        TestJSON.data.children.map(record => {
            return(
                <div className="card">
                <br></br><strong>Title :</strong> { record.data.title}<br></br>
                <br></br><strong>SelfText :</strong> {ReactHtmlParser(ReactHtmlParser (record.data.selftext_html))}<br></br>
                <br></br><strong>URL :</strong> { record.data.url}<br></br>
                <br></br><strong>Score :</strong> { record.data.score }<br></br>
                </div>
            )
        })
        }
        </div>
        </div>
    );
}
export default App;