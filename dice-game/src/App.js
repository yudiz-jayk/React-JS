
import { useEffect, useState } from "react";
import Dice from "./components/Dice";

function App() {

  const [dices, setDices] = useState(() => getAllDices())
  const [gameStatus, setGameStatus] = useState(false)

  useEffect(() => {
    const checkIsGmaeDone = dices?.every(ele => ele.number === dices[0].number && ele.hold === true)
    if (checkIsGmaeDone) setGameStatus(true)
  }, [dices])

  function getAllDices() {
    const dices = []
    for (let i = 0; i < 10; i++) {
      const params = {}
      params.id = i
      params.hold = false
      params.number = Math.floor(Math.random() * 6) + 1;
      dices.push(params)
    }

    console.log({ dices });

    return dices
  }


  function markHold(id) {
    setDices((oldDicesVal) => {
      const newDices = oldDicesVal.map(ele => {
        if (ele.id === id) {
          ele.hold = !ele.hold
        }
        return ele
      })
      return newDices
    })
  }

  function rollDice() {
    setDices((oldDicesVal) => {
      if (gameStatus) {
        setDices(getAllDices())
        setGameStatus(false)

      } else {
        const newDices = oldDicesVal.map(ele => {
          if (ele.hold !== true) ele.number = Math.floor(Math.random() * 6) + 1;
          return ele
        })
        return newDices
      }


    })
  }

  return (
    <div className="container">
      <h1>Roll Dice Game</h1>

      <div className="gamecontainer">

        <div className="diceContainer">
          {dices?.map(ele => {
            return <Dice key={ele.id} id={ele.id} number={ele.number} isHold={ele.hold} holdDiceFunction={markHold} />
          })}
        </div>


        <button onClick={rollDice}>{!gameStatus ? 'Roll Dice' : 'Reset Game'}</button>

      
  {gameStatus ? <div class="pyro">
          <div class="before"></div>
          <div class="after"></div>
        </div> : ""}


      </div>





    </div>
  );
}

export default App;
