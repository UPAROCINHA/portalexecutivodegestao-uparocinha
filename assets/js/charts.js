javascript
async function carregarGraficos(){


const atendimentos =
await fetch(
"data/json/atendimentos.json"
)
.then(res=>res.json());



new Chart(

document.getElementById(
"graficoAtendimentos"
),

{

type:"line",

data:{


labels:
atendimentos.periodo,


datasets:[{

label:
"Atendimentos",

data:
atendimentos.valores,


borderColor:
"#12385D",


backgroundColor:
"rgba(18,56,93,.15)",


fill:true,


tension:.4


}]


},


options:{


responsive:true,


plugins:{


legend:{


display:false


}


}



}



}

);







const epidemiologia =

await fetch(

"data/json/epidemiologia.json"

)

.then(res=>res.json());





new Chart(

document.getElementById(
"graficoEpidemiologia"
),

{

type:"doughnut",


data:{


labels:
epidemiologia.labels,


datasets:[{

data:
epidemiologia.valores,


backgroundColor:[

"#12385D",

"#C8A463",

"#6B8EAE",

"#8B5E3C",

"#D9D9D9"

]


}]


}


}


);



}



window.onload =
carregarGraficos;


---
