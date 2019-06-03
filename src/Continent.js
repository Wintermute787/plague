import {Disease} from './Disease.js';
export class Continent{
  constructor(alive, dead, healthy, infected, name){
    this.world = 74999239;
    this.alive = alive;
    this.dead = dead;
    this.healthy = healthy;
    this.infected = infected;
    this.name = name;
  }
  //Math.floor(Math.random() * 10); 0-9
  port(vis){
    var close = Math.floor(Math.random() * (100/vis));
    if(close <= 2){
      return true;
    }else return false;
  }
  airport(vis){
    var close1 = Math.floor(Math.random() * (100/vis));
    if(close1 <= 2){
      return true;
    }else return false;
  }
  isInfect(infect){
    var close2 = Math.floor(Math.random() *(10000/infect));
    //console.log(infect);
    if(this.infected > 0){
      return true;
    }else {
      if(close2 <= 20){
        this.infected++;
      return true;
      }
    return false;
    }
  }
  //this.isInfect(infect)
  spread(infect){
    if(this.isInfect(infect)){
      if(this.healthy >= this.infected){
      this.infected += this.infected*0.25;
      this.healthy -= this.infected;
      //console.log(this.healthy);
    }else if(this.infected >= this.healthy){
      this.infected = this.alive;
      this.healthy = 0;
    }
    }
    //
    // console.log("alive " + this.alive);
    // console.log("healthy " + this.healthy);
    // console.log("infected " + this.infected);
  }
  getPop(){

  }
  isDeadly(){

  }
  popInfection(){

  }
  popDead(){

  }
}
