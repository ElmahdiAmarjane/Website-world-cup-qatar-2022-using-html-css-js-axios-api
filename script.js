
let  groupsdiv=document.querySelector(".groups");


let url="http://api.football-data.org/v4/competitions/2000/standings";
let token="33cae465963e4dcd86cce3fdd45ca561";
axios.get(url, {
    headers : {
        "X-Auth-Token":token
    }
})
.then(function (response) {
  // en cas de réussite de la requête
  console.log(response.data);
  console.log(response.data.standings[0].group); 

  let i=0;
  for(i=0;i<8;i++){
    groupsdiv.innerHTML += `
    <table>
    <tr class="groupname"> <th colspan="6">${response.data.standings[i].group}</th></tr>
    <tr class="teamtr"><th>team</th><th>P</th><th>W</th><th>D</th><th>L</th><th>Pts</th></tr>
    <tr><td> <img class="flag" src="${response.data.standings[i].table[0].team.crest}">${response.data.standings[i].table[0].team.tla}</td><td>${response.data.standings[i].table[0].playedGames}</td><td>${response.data.standings[i].table[0].won}</td><td>${response.data.standings[i].table[0].draw}</td><td>${response.data.standings[i].table[0].lost}</td><td>${response.data.standings[i].table[0].points}</td></tr>
    <tr><td> <img class="flag" src="${response.data.standings[i].table[1].team.crest}">${response.data.standings[i].table[1].team.tla}</td><td>${response.data.standings[i].table[1].playedGames}</td><td>${response.data.standings[i].table[1].won}</td><td>${response.data.standings[i].table[1].draw}</td><td>${response.data.standings[i].table[1].lost}</td><td>${response.data.standings[i].table[1].points}</td></tr>
    <tr><td> <img class="flag" src="${response.data.standings[i].table[2].team.crest}">${response.data.standings[i].table[2].team.tla}</td><td>${response.data.standings[i].table[2].playedGames}</td><td>${response.data.standings[i].table[2].won}</td><td>${response.data.standings[i].table[2].draw}</td><td>${response.data.standings[i].table[2].lost}</td><td>${response.data.standings[i].table[2].points}</td></tr>
    <tr><td> <img class="flag" src="${response.data.standings[i].table[3].team.crest}">${response.data.standings[i].table[3].team.tla}</td><td>${response.data.standings[i].table[3].playedGames}</td><td>${response.data.standings[i].table[3].won}</td><td>${response.data.standings[i].table[3].draw}</td><td>${response.data.standings[i].table[3].lost}</td><td>${response.data.standings[i].table[3].points}</td></tr>

  </table>
    
    `
  }
   
 
      
   
  
})
.catch(function (error) {
  // en cas d’échec de la requête
  console.log(error);
})
 /* css style 

 let textdetail = document.querySelector(".textdetail");
 let lussildetail= document.querySelector(".lussildetail");
 textdetail.addEventListener("mouseover" , ()=>{
  lussildetail.style.display="block";
 })
 textdetail.addEventListener("mouseout" , ()=>{
  lussildetail.style.display="none";
 })
 */
 let scrollbardiv = document.querySelector(".scrollbardiv")

 // When the user scrolls down 20px from the top of the document, show the button
 window.onscroll = function() {scrollFunction()};
 
 function scrollFunction() {
   if (document.body.scrollTop > 500|| document.documentElement.scrollTop > 500) {
    scrollbardiv.style.display = "block";
   } else {
    scrollbardiv.style.display = "none";
   }
 }
 





