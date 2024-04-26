import React from "react";
import './description.css'

const DescriptionAgency = () => {
  return (
    <div className="d-flex flex-column align-items-center flex-wrap">
      <div>
      <h2 style={{color: "white", padding: "10px"}}>Benvenuti in DreamsTravel: Esplora il Mondo con Noi!</h2>
      </div>
      <div>
      <p style={{color: "white", padding: "10px"}}>
        Sogni di viaggiare verso destinazioni esotiche, esplorare culture
        affascinanti e creare ricordi indimenticabili? Allora sei nel posto
        giusto! DreamsTravel è molto più di un'agenzia di viaggi. Siamo un
        portale verso le esperienze più emozionanti che il mondo abbia da
        offrire. Con una passione travolgente per l'avventura e un impegno
        ineguagliabile per soddisfare le tue aspettative, siamo qui per
        trasformare i tuoi sogni di viaggio in realtà. Cosa ci rende diversi? La
        nostra missione è offrire esperienze di viaggio su misura, perfettamente
        adattate ai tuoi desideri e alle tue esigenze. Che tu stia pianificando
        una fuga romantica, un'avventura in solitaria o una vacanza in famiglia,
        il nostro team esperto ti guiderà in ogni passo del viaggio, garantendo
        un'esperienza senza stress e piena di momenti indimenticabili. Presso
        DreamsTravel, crediamo che ogni viaggio debba essere un'opportunità per
        scoprire, imparare e connettersi con il mondo che ci circonda. Dalla
        planimetria del tuo itinerario all'accoglienza al tuo ritorno a casa,
        siamo qui per assicurarci che ogni momento sia perfetto. Scopri il mondo
        con DreamsTravel e preparati a vivere un'avventura che rimarrà impressa
        nella tua memoria per sempre. Clicca su "Chi Siamo" per conoscere meglio
        la nostra storia, la nostra filosofia e il nostro team. Siamo pronti a
        trasformare i tuoi sogni di viaggio in realtà!
      </p>
      </div>
      <button className="button-home" type="button"> <a href="/"> Home </a> </button>
    </div>
  );
};

export default DescriptionAgency;
