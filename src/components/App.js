// create your App component here
import React, {useState, useEffect} from "react";

const App = () => {
    const [image, setImage] = useState("");
    const [isReceived, setIsReceived] = useState(false);
    useEffect(() =>{
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((response) => response.json())
        .then ((data) => {
            setImage(data.message);
            setIsReceived(true);
        }) 
        .catch ((error) => console.error("Error fetching the image:", error));
    }, []);
    return (
        isReceived ? <img src = {image} alt =  "A Random Dog"/> : <p>Loading...</p>
    );
};
export default App;