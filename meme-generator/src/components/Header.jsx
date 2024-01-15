function Header({test}) {
   test = 'sdfds'
    return (
        <nav>
            <div className="icongroup">
                <img src="./memegenerator.png" alt="meme icon" className="memeicon" />
                 <h1>{test}</h1>
            </div>
        </nav>
    )
}

export default Header