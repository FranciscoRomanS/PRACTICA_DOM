const fotoCab = document.querySelector("#cabecera");
fotoCab.setAttribute("src", "assets/imag/banner/1.jpg");
fotoCab.alt = "Banner principal";

const fotos = [
    {
        imagen: "assets/imag/banner/2.jpg", 
        titulo: "titulo 1",
        descripcion: "descripcion 1"
    },
    {
        imagen: "assets/imag/banner/6.jpg", 
        titulo: "titulo 2",
        descripcion: "descripcion 2"
    },
    {
        imagen: "assets/imag/banner/4.jpg", 
        titulo: "titulo 3",
        descripcion: "descripcion 3"
    }
];

const container=document.querySelector(".container");  
fotos.forEach((foto)=>{ 
    const card=document.createElement("article");
    card.classList.add("card");
    container.append(card);
    const imagen=document.createElement("img");   
    card.append(imagen);                          
    const titulo=document.createElement("h3");        
    card.append(titulo);                       
    const descripcion=document.createElement("p");   
    card.append(descripcion);                     
    imagen.setAttribute("src", foto.imagen);  
    titulo.textContent=foto.titulo;                      
    descripcion.textContent=foto.descripcion;
})