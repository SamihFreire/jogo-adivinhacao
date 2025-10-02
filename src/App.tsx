import styles from "./app.module.css"

import { Header } from "./components/Header"
import { Tip } from "./components/Tip"
import { Letter } from "./components/Letter"

export default function App() {

  function handleRestartGame():void {
    alert("Reiniciar o jogo!");
  }

  return (
    <div className={styles.container}>
      <main>
        <Header current={5} max={10} onRestart={handleRestartGame} />
        
        <Tip tip="Uma das linguagem de programação mais utilizadas"/>

        <div className={styles.word}>
          <Letter value="R" />
          <Letter value="E" />
          <Letter value="A" />
          <Letter value="C" />
          <Letter value="T" />
        </div>
      </main>
    </div>
  )
}
