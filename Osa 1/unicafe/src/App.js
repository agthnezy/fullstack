import React, { useState } from 'react'

  const Header = (props) => {
    return (<h1>{props.text}</h1>)
  }
  const StatisticsLine = (props) => {
    const kaikkiPalautteet = props.palautteet[0] + props.palautteet[1] + props.palautteet[2];

    if(kaikkiPalautteet > 0){
        return (
            <div>
                <table>
                    <tbody>
                        <StatisticLine text="Hyvä" value={props.palautteet[0]} />
                        <StatisticLine text="Neutraali" value={props.palautteet[1]} />
                        <StatisticLine text="Huono" value={props.palautteet[2]} />
                        <StatisticLine text="Palautteita yhteensä" value={kaikkiPalautteet} />
                        <StatisticLine text="Keskiarvo" value={(props.palautteet[0] - props.palautteet[2]) / kaikkiPalautteet} />
                        <StatisticLine text="Positiivisia palautteita" value={`${props.palautteet[0] * 100 / kaikkiPalautteet} %`} />
                    </tbody>
                </table>
            </div>
        )
    }
    else{
        return (<p>Ei ole annettu yhtäkään palautetta..</p>)
    }
}

const StatisticLine = (props) => {
  return (
      <tr>
          <td>{props.text}</td>
          <td>{props.value}</td>
      </tr>
  )
}

const Button = (props) => {
  return (<button type="button" onClick={props.handleClick}>{props.text}</button>)
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
        <Header text='Unicafen asiakaspalaute' />

        <Button handleClick={() => setGood(good + 1)} text="Hyvä" />
        <Button handleClick={() => setNeutral(neutral + 1)} text="Neutraali" />
        <Button handleClick={() => setBad(bad + 1)} text="Huono" />

        <Header text="Tilasto" />
        <StatisticsLine palautteet={[good,neutral,bad]} />
    </div>
)
}

export default App