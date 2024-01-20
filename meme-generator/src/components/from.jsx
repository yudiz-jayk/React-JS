import { useEffect, useState } from 'react'


function Form() {
    const [meme, setMeme] = useState({ firstName: "", lastName: "", imageUrl: "https://i.imgflip.com/30b1gx.jpg" })

    const [memeData, setMemeData] = useState([])


    useEffect(() => {
        async function fetchData() {
            let data = await fetch('https://api.imgflip.com/get_memes')
            data = await data.json()
            console.log(data);
            
            setMemeData(data.data.memes)
        }

        fetchData()
    },[])

    function changeStatus(e) {
        const { name, value } = e.target
        setMeme((prevState) => {
            return { ...prevState, [name]: value }
        })
    }

    function generateMemeImage() {
        setMeme((prevState) => {
            return { ...prevState, imageUrl: memeData[Math.floor(Math.random() * 100)].url }
        })
    }


    return (
        <>
            <div className="form">

                <div className="fields">

                    <div className="field">
                        <label htmlFor="firstName">Top Text</label>
                        <input type="text" name="firstName" id="firstName" value={meme.firstName} onChange={changeStatus} />
                    </div>

                    <div className="field">
                        <label htmlFor="lastName">Bottom Text</label>
                        <input type="text" name="lastName" id="lastName" value={meme.lastName} onChange={changeStatus} />
                    </div>

                </div>



                <input type="button" value="Generate a new meme image" className="memeSubmitButton" onClick={generateMemeImage} />

            </div>

            <div className="meme">
                <img src={meme.imageUrl} alt="meme img`" />
                <h1 className="meme--text top">{meme.firstName}</h1>
                <h1 className="meme--text bottom">{meme.lastName}</h1>
            </div>
        </>




    )
}

export default Form