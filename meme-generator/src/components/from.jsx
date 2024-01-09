function Form() {
    return (
        <div className="form">

            <div className="fields">

                <div className="field">
                    <label htmlFor="Top text">Top Text</label>
                    <input type="text" name="ttext" id="ttext" />
                </div>

                <div className="field">
                    <label htmlFor="Bottumn text">Bottom Text</label>
                    <input type="text" name="ttext" id="ttext" />
                </div>

            </div>



            <input type="button" value="Generate a new meme image" className="memeSubmitButton" />

        </div>
    )
}

export default Form