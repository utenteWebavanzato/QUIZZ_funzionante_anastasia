import {useState} from 'react';

import data from "./data.json";

function Winner({fine,risposte}){
    var punti=0
    var errori=[]
    if(fine){
      for (var i=0;i<risposte.length;i++){
        if (risposte[i]===data.domande[i].corretta)
          punti++;
        else
          errori.push(<p>la domanda {i+1} è sbagliata, la risposta corretta e: <b>{data.domande[i].corretta}</b> </p>)
      }
      return <>
      <p> Totalizzati {punti} punti</p>
      {errori.map((errore)=> {return errore })}
      </>
    }
  }
function Opzione({daVisualizzare,statoQuiz,option,id,arrayRisp}){
    return (
    <>
    <input
    type="radio"
    id={id}
    value={daVisualizzare}
    onChange={option}
    disabled={statoQuiz===1}
    checked={arrayRisp[id]===daVisualizzare}

    /> <label>{daVisualizzare}</label><br/>
    </>)
 }

function Domanda({domanda,risposte,statoQuiz,option,id,arrayRisp}){
    return (
        <>
    <p>{domanda}</p>
    {risposte.map((risposta,i)=>{        
        return(
            <Opzione
            daVisualizzare={risposta}
            statoQuiz={statoQuiz}
            option={option}
            id={id}
            key={i}
            arrayRisp={arrayRisp}
            />)
        })}
    </>)
}    
export default function quiz(){
const [answerArray,setAnswer] = useState([]);

const [idDomanda,setidDomanda] = useState(0);

const [fine,setFine] = useState(0);



const onOptionChange = e => {
    const answ=answerArray.slice()
    answ[e.target.id]=e.target.value
    setAnswer(answ)
  }

 return <>
  <Domanda
    id={data.domande[idDomanda].id}
    domanda={data.domande[idDomanda].domanda}
    risposte={data.domande[idDomanda].risposte}
    corretta={data.domande[idDomanda].corretta}
    statoQuiz={fine}
    option={onOptionChange}
    arrayRisp={answerArray}/>


<input
type="button"
value="Clicca qui per controllare"
onClick={() => {setFine(true)}} 
/>
<br />
<input
      type="button"
      value="<< DIETRO"
      disabled={idDomanda===2}
      onClick={() => {setidDomanda(idDomanda-1)}} 
    />
    <input
      type="button"
      value="AVANTI >>"
      disabled={idDomanda===2}
      onClick={() =>{setidDomanda(idDomanda+1)}} 
    />
   
       
<p> Selected answer <strong>{answerArray}</strong></p>
<p> stato: <strong>{fine}</strong></p>

<Winner fine={fine} risposte={answerArray}/>
</>;
}