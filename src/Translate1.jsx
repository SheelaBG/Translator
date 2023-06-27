import { useEffect, useState } from "react";

function Translate1()
{
    let[languages,setlanguages]=useState(null);
    let[translatedData,settranslatedData]=useState("");


    useEffect(()=>{
        const url = 'https://google-translate1.p.rapidapi.com/language/translate/v2/languages';
        const options = {
            method: 'GET',
            headers: {
                'content-type': 'application/octet-stream',
                'Accept-Encoding': 'application/gzip',
                'X-RapidAPI-Key': '0d3e4caab5mshacbbf35affb9268p15a58cjsn86e8310b55a3',
                'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
            }
        };
        
      fetch(url,options)
      .then((res)=>{return res.json()})
      .then((data)=>{setlanguages(data.data.languages);});


    },[])
    

    let translate=()=>{
        
        const url = 'https://google-translate1.p.rapidapi.com/language/translate/v2';
        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                'Accept-Encoding': 'application/gzip',
                'X-RapidAPI-Key': '0d3e4caab5mshacbbf35affb9268p15a58cjsn86e8310b55a3',
                'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
            },
            body: new URLSearchParams({
                q: document.getElementById("input").value,
                target: document.getElementById("lang").value,
                source: 'en'
            })
        };
        fetch(url,options)
        .then((res)=>{return res.json()})
        .then((data)=>{
            console.log(data);
            settranslatedData(data.data.translations[0].translatedText);})

    }



    return ( 
        <div>
            <textarea id="input" cols="70" rows="10"></textarea>
           {languages && <select id="lang">
                <option>---select---</option>
                {languages.map((v)=>{
                                return (<option> {v.language} </option>)})}
            </select>}
            <button onClick={translate} >Translate</button>
           <textarea id="output" cols="70" rows="10" value={translatedData}></textarea>
        </div>
      );
}
 
export default Translate1 ;