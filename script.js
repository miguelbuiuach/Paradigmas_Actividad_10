const lista = document.getElementById("lista");

var personas = ['Miguel Bui', 'Akira Yamaoka', 'Satoshi Kon', 'Shinji Mikami', 'Mamoru Hosada']

const AgregarPersonas = () => {
    var nombre = document.getElementById("nombre");
    personas.push(nombre.value);
    lista.innerHTML = '';
    MostrarValores();
    nombre.value = "";
}

const BorrarPersonas = () => {
    lista.innerHTML = '';
    persona = [];
    

}


const MostrarValores = () => {
personas.map(persona => {
        var li = document.createElement('li');
        li.innerHTML = persona;
        lista.appendChild(li);
    })
}

MostrarValores();