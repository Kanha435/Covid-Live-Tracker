import React, { useState } from 'react'
import Card from './components/Card';
import Covid from './components/Covid';
import Footer from './components/Footer';
import Live from './components/Live';
import Today from './components/Today';

function App() {
      const [covid , setcovid] = useState({});
        fetch('https://api.covid19india.org/data.json')
        .then(res => res.json())
        .then(data => setcovid(data.statewise[0]));

    return (
        <>
        <Covid />
        <Live />
        <div className = "container">
        <Today confirm = {covid.deltaconfirmed} death={covid.deltadeaths} covered ={covid.deltarecovered} />
        <Card name = "Our Country" value = "INDIA" />
        <Card name = "Active" value = {covid.active} />
        <Card name = "Confirmed" value = {covid.confirmed} />
        <Card name = "Deaths" value = {covid.deaths} />
        <Card name = "Recoverd" value = {covid.recovered} />
        <Card name = "Update Time" value = {covid.lastupdatedtime} />
        </div>

        <Footer />
         
        </>
    )
    }

export default App;
