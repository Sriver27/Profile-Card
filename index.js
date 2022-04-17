const buttons = document.querySelectorAll(".card-buttons button");  
 const sections = document.querySelectorAll(".card-section");  
 const card = document.querySelector(".card");  
 const handleButtonClick = e => {  
  const targetSection = e.target.getAttribute("data-section");  
  const section = document.querySelector(targetSection);  
  targetSection !== "#about" ? card.classList.add("is-active") : card.classList.remove("is-active");  
  card.setAttribute("data-state", targetSection);  
  sections.forEach(s => s.classList.remove("is-active"));  
  buttons.forEach(b => b.classList.remove("is-active"));  
  e.target.classList.add("is-active");  
  section.classList.add("is-active");  
 };  
 buttons.forEach(btn => {  
  btn.addEventListener("click", handleButtonClick);  
 });  


//  function download(filename, textInput) {

//     var element = document.createElement('a');
//     element.setAttribute('href','data:text/plain;charset=utf-8, ' + encodeURIComponent(textInput));
//     element.setAttribute('download', filename);
//     document.body.appendChild(element);
//     element.click();
//     //document.body.removeChild(element);
// }
// document.getElementById("btn")
//     .addEventListener("click", function () {
//           var text = document.getElementById("text").value;
//           var filename = "Harsh_Vardhan_Jain.pdf";
//           download(filename, text);
//     }, false);