import { useState } from "react";
import { Title } from "./Components";
import { Container } from "./Components";
import { Blank } from "./Components";
import { Buttons } from "./Components";
import { Result } from "./Components";
import { Holder } from "./Components";

export default function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [result, setResult] = useState(0);


  const calculateImc = () => {
    const imc = weight / (height * height);
    const formattedImc = imc.toFixed(2);
    setResult(+formattedImc);
  };

  const reset = () => {
    setWeight(0);
    setHeight(0);
    setResult(0);
  };


  return (
    <Container>
      <Title>Calculadora IMC ⚖️</Title>
      <Holder>Peso (KG)</Holder>
      <Blank
        type="number"
        onChange={(e) => setWeight(+e.target.value)}
        value={weight}
        placeholder="Peso (KG)"
      />
      <Holder>Altura (M)</Holder>
      <Blank
        type="number"
        onChange={(e) => setHeight(+e.target.value)}
        value={height}
        placeholder="Altura (M)"
      />

     
      {result > 0 && (
              <Result>
               <h2>Su imc es {result}</h2>
               {0 < result && result < 18.5
                 ? "Usted tiene un peso muy bajo, deberia subir de peso"
                 : result < 24.5
                 ? "Usted tiene un peso, normal siga asi"
                 : result < 29.9
                 ? "Usted tiene sobrepeso, deberia bajar de peso un poco"
                 : result < 34.9
                 ? "Usted tiene Obesidad de primer nivel, deberia bajar de peso"
                 : result < 39.9
                 ? "Usted tiene Obesidad de segundo nivel deberia bajar de peso"
                 : result > 40 && "Usted tiene el tercer grado de Obesidad deberia bajar de peso urgentemente"}
             </Result>
      )}



      <Buttons onClick={calculateImc}>Calcular</Buttons>
      <Buttons onClick={reset}>Resetear</Buttons>
    </Container>
  );
}


