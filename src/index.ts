import { BROKEN, OFF, ON } from "./classes/constant";
import { Lamp, LampType } from "./classes/Lamp";
import "./index.css";


const home = () => {

  const lamps: Array<LampType> = [
    {id:0, status: OFF, maxPower: Math.floor(Math.random() * 10) + 1},
    {id:1, status: OFF, maxPower: Math.floor(Math.random() * 10) + 1},
    {id:2, status: OFF, maxPower: Math.floor(Math.random() * 10) + 1},
    {id:3, status: OFF, maxPower: Math.floor(Math.random() * 10) + 1},
    {id:4, status: OFF, maxPower: Math.floor(Math.random() * 10) + 1},
    {id:5, status: OFF, maxPower: Math.floor(Math.random() * 10) + 1},
    {id:6, status: OFF, maxPower: Math.floor(Math.random() * 10) + 1},
    {id:7, status: OFF, maxPower: Math.floor(Math.random() * 10) + 1},
    {id:8, status: OFF, maxPower: Math.floor(Math.random() * 10) + 1},
    {id:9, status: OFF, maxPower: Math.floor(Math.random() * 10) + 1},
    {id:10, status: OFF, maxPower: Math.floor(Math.random() * 10) + 1},
    {id:11, status: OFF, maxPower: Math.floor(Math.random() * 10) + 1},
    {id:12, status: OFF, maxPower: Math.floor(Math.random() * 10) + 1},
    {id:13, status: OFF, maxPower: Math.floor(Math.random() * 10) + 1},
    {id:14, status: OFF, maxPower: Math.floor(Math.random() * 10) + 1},
    {id:15, status: OFF, maxPower: Math.floor(Math.random() * 10) + 1},
  ];
  
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
    const lampDiv: HTMLDivElement = document.createElement('div');
    lampDiv.id = lampData.id.toString();
    lampDiv.className = changeStatusClass(lamp.getStatus());
    lampDiv.innerHTML = '<i style="font-size: 40px" class="bi bi-lamp"></i><br>' + lamp.getValuePower().toString() + "/" + lamp.getMaxPower().toString();
    
    lampDiv.addEventListener('click', function handleClick(event: MouseEvent) {
      event.preventDefault();
      if(lamp.getValuePower() >= lamp.getMaxPower()){
        lamp.setStatus(BROKEN);
      } else {
        lamp.incrementValuePower();
        if(lamp.getStatus() === ON) lamp.setStatus(OFF);
        else lamp.setStatus(ON);
      }
      lampDiv.innerHTML = '<i style="font-size: 40px" class="bi bi-lamp"></i><br>' + lamp.getValuePower().toString() + "/" + lamp.getMaxPower().toString();
      this.className = changeStatusClass(lamp.getStatus());
    });

    const lampContainer: HTMLElement = document.getElementById("lampContainer");
    if((index > 3 && ((index % 4) == 0))) lampContainer.appendChild(document.createElement("hr"));
    lampContainer.appendChild(lampDiv);
   
  });

 
};

home();
