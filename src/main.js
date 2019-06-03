import {Continent} from './Continent.js';
import {Disease} from './Disease.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
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
  let dis = new Disease(0, lethal, infect, vis);
  dis.startTime();
  $("#diseForm").submit(function(event){
    let hold = parseInt($("#dise").val());
    let dis = new Disease(hold, lethal, infect, vis);

  if(!numHold.includes(hold)){
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
        symptHold[numHold.indexOf(hold)] = dis.update(symptHold[numHold.indexOf(hold)]);
        break;
        }
      }
    }
    console.log(symptHold);
  }
  for(var u = 0; u < symptHold.length; u++){
    if(symptHold[u].severity < 3){
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
    event.preventDefault();
  });

});
