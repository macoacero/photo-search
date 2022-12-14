import "./Home.scss";

function Home() {

    return (
        <div className="home">
            <div className="home-text">
                <h1>PhotoSearch</h1>
                <p>Find your best photographer in the city</p>
                <div className="search-but"></div>
                <a href={`posts`}>Search</a>
            </div>
        </div>
    );
}

export default Home;
