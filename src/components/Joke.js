import axios from 'axios';
import  {useState} from "react"


const Joke = () => {

    const [ajoke,setJoke] = useState("")

    const getJoke = async()=>{
    const reqData = {
        headers:{
            "Accept": "application/json"
        }
    }
        const response = await axios.get('https://icanhazdadjoke.com/',reqData)
        const resData = response.data
        console.log(resData)
        setJoke(resData.joke)
    }

        return (
            <div>
                <button onClick={getJoke}>GET A JOKE!</button>
                <h1>Your joke is: {ajoke}</h1>
            </div>
        )
}

export default Joke
