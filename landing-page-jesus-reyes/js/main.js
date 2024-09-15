document.addEventListener("DOMContentLoaded", ()=>{
    const fecha = document.getElementById("fecha");
    let year = new Date().getFullYear();
    fecha.textContent=year;
})
