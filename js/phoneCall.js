const DIVDINAMICO = document.getElementById("pantallaDinamica");
var flagLlamando = true;

crearTeclado();
const NUMEROMARCADO = document.getElementById("numeroMarcado");
marcarNumero();


function crearTeclado(){
    DIVDINAMICO.innerHTML = '';
    let table = document.createElement("table");
    let thead = document.createElement("thead");
    let tbody = document.createElement("tbody");
    tbody.id = "tbodyCall";
    let trHead = document.createElement("tr");
    let parrafo = document.createElement("p");
    let num1 = 1
    let num2 = 2
    let num3 = 3
    parrafo.textContent = "";
    parrafo.id = "numeroMarcado"
    DIVDINAMICO.appendChild(parrafo);
    thead.appendChild(trHead);
    table.appendChild(thead);
    for (let i = 0; i < 3; i++) {
        let trBody = document.createElement("tr");
        let td = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        td.textContent = num1;
        td2.textContent = num2;
        td3.textContent = num3;
        td.id = num1;
        td2.id = num2;
        td3.id = num3;
        trBody.appendChild(td);
        trBody.appendChild(td2);
        trBody.appendChild(td3);
        tbody.appendChild(trBody);
        num1 += 3;
        num2 += 3;
        num3 += 3;
    }
    let trBodyLast = document.createElement("tr");
    let trBodyOther = document.createElement("tr");
    let td = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let contestar = document.createElement("td");
    td.textContent = 'borrar';
    td2.textContent = 0;
    td3.textContent = 'marcar';
    contestar.textContent = 'Contestar';
    trBodyLast.appendChild(td);
    trBodyLast.appendChild(td2);
    trBodyLast.appendChild(td3);
    trBodyOther.appendChild(contestar);
    tbody.appendChild(trBodyLast);
    tbody.appendChild(trBodyOther);
    table.appendChild(tbody);
    DIVDINAMICO.appendChild(table);

}

function marcarNumero(){
    document.querySelector("#tbodyCall > tr:nth-child(1) > td:nth-child(1)").addEventListener("click", function(){
        let num1 = document.querySelector("#tbodyCall > tr:nth-child(1) > td:nth-child(1)").textContent
        NUMEROMARCADO.textContent += `${this.textContent}`
        console.log(`${num1} `)
    })
    document.querySelector("#tbodyCall > tr:nth-child(1) > td:nth-child(2)").addEventListener("click", function(){
        let num2 = document.querySelector("#tbodyCall > tr:nth-child(1) > td:nth-child(2)").textContent
        NUMEROMARCADO.textContent += `${this.textContent}`
        console.log(`${num2} `)
    })
    document.querySelector("#tbodyCall > tr:nth-child(1) > td:nth-child(3)").addEventListener("click", function(){
        let num1 = document.querySelector("#tbodyCall > tr:nth-child(1) > td:nth-child(3)").textContent
        NUMEROMARCADO.textContent += `${this.textContent}`
        console.log(`${num1} `)
    })
    document.querySelector("#tbodyCall > tr:nth-child(2) > td:nth-child(1)").addEventListener("click", function(){
        let num2 = document.querySelector("#tbodyCall > tr:nth-child(2) > td:nth-child(1)").textContent
        NUMEROMARCADO.textContent += `${this.textContent}`
        console.log(`${num2} `)
    })
    document.querySelector("#tbodyCall > tr:nth-child(2) > td:nth-child(2)").addEventListener("click", function(){
        let num1 = document.querySelector("#tbodyCall > tr:nth-child(2) > td:nth-child(2)").textContent
        NUMEROMARCADO.textContent += `${this.textContent}`
        console.log(`${num1} `)
    })
    document.querySelector("#tbodyCall > tr:nth-child(2) > td:nth-child(3)").addEventListener("click", function(){
        let num2 = document.querySelector("#tbodyCall > tr:nth-child(2) > td:nth-child(3)").textContent
        NUMEROMARCADO.textContent += `${this.textContent}`
        console.log(`${num2} `)
    })
    document.querySelector("#tbodyCall > tr:nth-child(3) > td:nth-child(1)").addEventListener("click", function(){
        let num2 = document.querySelector("#tbodyCall > tr:nth-child(3) > td:nth-child(1)").textContent
        NUMEROMARCADO.textContent += `${this.textContent}`
        console.log(`${num2} `)
    })
    document.querySelector("#tbodyCall > tr:nth-child(3) > td:nth-child(2)").addEventListener("click", function(){
        let num1 = document.querySelector("#tbodyCall > tr:nth-child(3) > td:nth-child(2)").textContent
        NUMEROMARCADO.textContent += `${this.textContent}`
        console.log(`${num1} `)
    })
    document.querySelector("#tbodyCall > tr:nth-child(3) > td:nth-child(3)").addEventListener("click", function(){
        let num2 = document.querySelector("#tbodyCall > tr:nth-child(3) > td:nth-child(3)").textContent
        NUMEROMARCADO.textContent += `${this.textContent}`
        console.log(`${num2} `)
    })
    document.querySelector("#tbodyCall > tr:nth-child(4) > td:nth-child(2)").addEventListener("click", function(){
        let num1 = document.querySelector("#tbodyCall > tr:nth-child(4) > td:nth-child(2)").textContent
        NUMEROMARCADO.textContent += `${this.textContent}`
        console.log(`${num1} `)
    })
    document.querySelector("#tbodyCall > tr:nth-child(4) > td:nth-child(1)").addEventListener("click", function(){
        let textBorrar = NUMEROMARCADO.textContent;  
        let textBorrado = textBorrar.substring(0, textBorrar.length - 1); 
        if(flagLlamando){
            NUMEROMARCADO.textContent = textBorrado;
            console.log(`${textBorrado} `)
        }
        
    })
    document.querySelector("#tbodyCall > tr:nth-child(4) > td:nth-child(3)").addEventListener("click", function(){
        let cantText = NUMEROMARCADO.textContent;
        llamar(cantText.length)
        console.log(`marcar ${cantText.length}`)
    })
    document.querySelector("#tbodyCall > tr:nth-child(5) > td:nth-child(1)").addEventListener("click", function(){
        if(!flagLlamando){
            NUMEROMARCADO.innerHTML = "";
            flagLlamando = true;  
        }
    })
}

function llamar(numero){
    if(numero >= 9 && flagLlamando){ 
        let numeroLlamar = NUMEROMARCADO.textContent; 
        NUMEROMARCADO.innerHTML = "";
        NUMEROMARCADO.innerHTML = `Llamando al numero ${numeroLlamar}` ;  
        flagLlamando = false;         
    }
}

function arrayContactos(numero){

}