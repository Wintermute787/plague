import {Continent} from './Continent.js';
import {Disease} from './Disease.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
// import video from './img/video.mp4';


function eachDay(){

}
function check(){

}

$(document).ready(function() {
  let symptHold = [];
  let numHold = [];
  let names = ['Coughing', 'Sneezing', 'Nausuea', 'Vommiting', 'Fever', 'ExplosivePoops'];
  let lethal = 0;
  let infect = 0;
  let vis = 0;
  let countBreak = 0;
  let bank = 10;
  let tempBank = 10;
  let resistance = 0;
  //let dis = new Disease(0, lethal, infect, vis);
  $("#bankVal").text("Bank: " + bank)
  $("#diseForm").submit(function(event){
    $("#bankVal").text("Bank: " + bank)
    countBreak++;
    let hold = parseInt($("#dise").val());
    resistance ++;
    let dis = new Disease(hold, lethal, infect, vis);

  if(!numHold.includes(hold) && bank >= 4){
    bank -= 4;
    $("#bankVal").text("Bank: " + bank)
    numHold.push(hold);
    symptHold.push(dis.addSymptom());

    symptHold[numHold.indexOf(hold)].severity++;
  }else {
    for(var i = 0; i < symptHold.length; i++){
      if(symptHold[i].name === names[hold]){
        if(symptHold[i].severity >= 3){

          $("#maxLevel").text(`${symptHold[i].name} max level reached`);
          setTimeout(function(){
            $("#maxLevel").text("");
          }, 2000);
          break;
        }else{
          if(bank >= 4){
            bank -= 4;
            resistance ++;
        symptHold[numHold.indexOf(hold)] = dis.update(symptHold[numHold.indexOf(hold)]);
          }
        break;
        }
      }
    }
    $("#bankVal").text("Bank: " + bank)
    console.log(symptHold); 
  }
  for(var u = 0; u < symptHold.length; u++){
    if(symptHold[u].severity < 3 && tempBank >= 4){
      tempBank -= 4;
    var arrHold = dis.addTraits(symptHold[u]);
    lethal = arrHold[0];
    infect = arrHold[1];
    vis = arrHold[2];
      }
    $("#level" + (u+1)).text(`${symptHold[u].name} level ${symptHold[u].severity}`)
  }
  $("#dis1").text(`Lethality: ${dis.lethal} `);
  $("#dis2").text(`Infection Rate: ${dis.infect} `);
  $("#dis3").text(`Visibility: ${dis.vis} `);
  
  function startTime(){
    
    
    var count = 0;
    let cont1 = new Continent(45848070, 0, 45848070, 0, "Asia");
    let cont2 = new Continent(13200387, 0, 13200387, 1, "Africa");
    let cont3 = new Continent(7431026, 0, 7431026, 0, "Europe");
    let cont4 = new Continent(4319984, 0, 4319984, 0, "South America");
    let cont5 = new Continent(3664968, 0, 3664968, 0, "North America");
    let cont6 = new Continent(534802, 0, 534802, 0, "Australia");
    let cont7 = new Continent(1, 0, 1, 0, "Antartica");
    if(countBreak <= 1){
    setInterval(function(){
      console.log("---------------------");
            count++;
            bank += 2;
            tempBank += 2;
      $("#bankVal").text("Bank: " + bank)
      //console.log(count);
      //console.log(infect);
      //cont1.spread(dis.infect);
      cont2.spread(infect, vis, lethal, resistance, countBreak);
      cont3.spread(infect, vis, lethal, resistance, countBreak);
      cont4.spread(infect, vis, lethal, resistance, countBreak);
      cont5.spread(infect, vis, lethal, resistance, countBreak);
      cont6.spread(infect, vis, lethal, resistance, countBreak);
      cont7.spread(infect, vis, lethal, resistance, countBreak);
      countBreak++;
      if(cont1.infected > 0){
      console.log("Asia: infected");
      }
      // if(cont2.infected > 0){
      // console.log("Africa: infected");
      // }
      // if(cont3.infected > 0){
      // console.log("Europe: infected");
      // }
      // if(cont4.infected > 0){
      // console.log("South America: infected");
      // }
      // if(cont5.infected > 0){
      // console.log("North America: infected");
      // }
      // if(cont6.infected > 0){
      // console.log("Australia: infected");
      // }
      // if(cont7.infected > 0){
      // console.log("Antartica: infected");
      // }
      // console.log("-----------");
    }, 10000);
  }
  }

  startTime();
    event.preventDefault();
  });


});
