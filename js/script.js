//Seleção de Elementos
const generatePasswordButton = document.querySelector("#generate-password");
const generatePasswordElement = document.querySelector("#generated-password");

//Funções
const getLetterLowerCase = () => {
    console.log(String.fromCharCode(Math.floor(Math.random() * 26)));
};
//Eventos
generatePasswordButton.addEventListener("click", () =>{
    console.log("teste");
});