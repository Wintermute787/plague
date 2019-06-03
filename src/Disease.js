import {Continent} from './Continent.js';
export class Disease{
  constructor(selection, lethal, infect, vis){
    this.lethal = lethal;
    this.infect = infect;
    this.vis = vis;
    this.selection = selection;
  }
  //coughing, sneezing, nausuea, fever, diarrhea, vommiting
  //level 1-3;
  addSymptom(){
      let sympt = [
        {
          name: 'Coughing',
          severity: 0,
          transmit: (3),
          resistance: (1),
          visability: (2)
        },
        {
          name: 'Sneezing',
          severity: 0,
          transmit: (3),
          resistance: (2),
          visability: 3
        },
        {
          name: 'Nausuea',
          severity: 0,
          transmit: (1),
          resistance: (1),
          visability: (2)
        },
        {
          name: 'Vommiting',
          severity: 0,
          transmit: (2),
          resistance: (1),
          visability: (4)
        },
        {
          name: 'Fever',
          severity: 0,
          transmit: (1),
          resistance: (3),
          visability: (1)
        },
        {
          name: 'ExplosivePoops',
          severity: 0,
          transmit: (2),
          resistance: (3),
          visability: (2)
        }
      ];

      return sympt[this.selection];
  }
  update(arr){
    arr.severity++;
    arr.transmit++;
    arr.resistance++;
    arr.visability++;
    return arr;
  }
  isActive(dise1){
    if(dise1.severity > 0){
      return true;
    }else return false;
  }
  addTraits(dise1){
    if(this.isActive(dise1)){
      for(var k = 0; k < dise1.resistance; k++){
      this.lethal++;
      }
      for(var p = 0; p < dise1.transmit; p++){
      this.infect++;
      }
      for(var o = 0; o < dise1.visability; o++){
      this.vis++;
      }

    }
    var arr = [this.lethal, this.infect, this.vis];
    return arr;

  }
  startTime(){
    var count = 0;
    let cont1 = new Continent(45848070, 0, 45848070, 1, "Asia");
    let cont2 = new Continent(13200387, 0, 13200387, 0, "Africa");
    let cont3 = new Continent(7431026, 0, 7431026, 0, "Europe");
    let cont4 = new Continent(4319984, 0, 4319984, 0, "South America");
    let cont5 = new Continent(3664968, 0, 3664968, 0, "North America");
    let cont6 = new Continent(534802, 0, 534802, 0, "Australia");
    let cont7 = new Continent(1, 0, 1, 0, "Antartica");
    setInterval(function(){
      count++;
      cont1.spread(this.infect);
      cont2.spread(this.infect);
      cont3.spread(this.infect);
      cont4.spread(this.infect);
      cont5.spread(this.infect);
      cont6.spread(this.infect);
      cont7.spread(this.infect);
      if(cont1.infected > 0){
      console.log("Asia: infected");
      }
      if(cont2.infected > 0){
      console.log("Africa: infected");
      }
      if(cont3.infected > 0){
      console.log("Europe: infected");
      }
      if(cont4.infected > 0){
      console.log("South America: infected");
      }
      if(cont5.infected > 0){
      console.log("North America: infected");
      }
      if(cont6.infected > 0){
      console.log("Australia: infected");
      }
      if(cont7.infected > 0){
      console.log("Australia: infected");
      }
      //console.log("count " + count);
    }, 1000);
  }
}
