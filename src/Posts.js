import logo from './images/diaphragm2.png';
import React, { useState, useEffect } from "react";
import "./Posts.scss";
import Menu from './components/Menu';
import Cards from './components/Cards';
import Collections from './components/Collections';
import axios from "axios";


function Post() {

    const [image, setImage] = useState("Wedding");
    const [collections] = useState(["wedding", "outdoors", "portraits", "travel", "pets", "christmas", "products", "halloween"]);
    const accessKey = "P2sswu0-xQxMqIFxlmuaJK6054S9E03enrtTqF93z9Q";
    const [result, setResult] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        const url = `https://api.unsplash.com/search/photos?page=${page}&query=${image}&client_id=${accessKey}`
        axios.get(url).then((response) => {
            setResult(response.data.results);
        });
    }, [image]);

    const handleChange = (event) => {
        setImage(event.currentTarget.id);
    };

    return (
        <div className="post">
            <header className="heading">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>PhotoSearch</h1>
            </header>

            <Collections
                handleChange={handleChange}
                collections={collections}
            ></Collections>


            <Cards result={result}></Cards>
            <Menu></Menu>
        </div >
    );
}

export default Post;
