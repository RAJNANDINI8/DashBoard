const sideMenu=document.querySelector("aside");
const menuBtn=document.querySelector("#menu-btn");
const closeBtn=document.querySelector("#close-btn");
const myChart=document.querySelector("myChart");
const themeToggler=document.querySelector("themeToggler");


menuBtn.addEventListener('click',()=>{
 sideMenu.style.display="block";
})

closeBtn.addEventListener('click',()=>{
    sideMenu.style.display="none";
})

var xValues = [
   
    "Credit",
    "Agro",
    "Housing",
    "Health"

  ];
  var yValues = [ 44, 45, 23,23];
  var barColors = [
   
    "#1e7145",
    "#dc1f16",
    "#07174c",
    "#ff7782"
   
  ];
  new Chart("myChart", {
    type: "pie",
    data: {
      labels: xValues,
      datasets: [
        {
          backgroundColor: barColors,
          data: yValues
        }
      ]
    }
  });

themeToggler.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme-variables');
  themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
  themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');

})
