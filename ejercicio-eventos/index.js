
function alertSms() {
    alert("click en el botón")
}

const botonClick = document.getElementById("btn").onclick= alertSms;


$(()=>{
//     $("#btn").click(() => {
//         alert("Click en el botón")
//    });
    $("#btn").click(() => {
        console.log("Hola, estoy utilizando jQuery");
   });
})
