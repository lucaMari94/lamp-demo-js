import { BROKEN, OFF, ON } from "./utils/constants";
import { Lamp, LampType } from "./utils/Lamp";
import "./index.css";

const main = () => {

  const lamps: Array<LampType> = [];

  for (let i = 0; i < 20; i++){
    lamps.push( {id:0, status: OFF, maxPower: Math.floor(Math.random() * 10) + 1});
  }
   
  const changeStatusClass = (status: number) => {
    let classes: string = "btn mx-2";
    switch(status){
      case 1:
        classes += ' onStatus';
        break;
        
      case -1:
        classes += ' brokenStatus';
        break;

      default:
        classes += ' offStatus';
        break;
    }
    return classes;
  }

  lamps.forEach( (lampData: LampType, index: number) => {
    const lamp = new Lamp(lampData.id, lampData.status, lampData.maxPower);
    const lampDiv: HTMLButtonElement = document.createElement('button');
    lampDiv.id = lampData.id.toString();
    lampDiv.className = changeStatusClass(lamp.getStatus());
    lampDiv.innerHTML = lamp.getValuePower().toString() + "/" + lamp.getMaxPower().toString();
    
    lampDiv.addEventListener('click', function handleClick(event: MouseEvent) {
      event.preventDefault();
      if(lamp.getValuePower() >= lamp.getMaxPower()){
        lamp.setStatus(BROKEN);
      } else {
        lamp.incrementValuePower();
        if(lamp.getStatus() === ON) lamp.setStatus(OFF);
        else lamp.setStatus(ON);
      }
      lampDiv.innerHTML = lamp.getValuePower().toString() + "/" + lamp.getMaxPower().toString();
      this.className = changeStatusClass(lamp.getStatus());
    });

    const lampContainer: HTMLElement = document.getElementById("lampContainer");
    if((index > 3 && ((index % 4) == 0))) {
      lampContainer.appendChild(document.createElement("hr"));
    }
    lampContainer.appendChild(lampDiv);
   
  });

 
};

main();
