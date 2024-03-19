let corona = document.getElementById('corona');


const view = () => {

     fetch('https://data.covid19india.org/data.json').then((res )=>{
         return res.json();
     }).then((data)=>{
            console.log("data",data.statewise);
         const meet = data.statewise;

         meet.forEach((state) => {
            corona.innerHTML += `<tr>
            <td class=" p3">${state.state}</td>
            <td class=" p3">${state.active}</td>
            <td class=" p3">${state.lastupdatedtime}</td>
            <td class=" p3">${state.confirmed}</td>
            <td class=" p3">${state.deaths}</td>
         </tr>`
         });
     }).catch((err)=>{
            console.log("err",err);
     })

}

view();

