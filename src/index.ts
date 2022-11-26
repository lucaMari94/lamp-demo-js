import { BROKEN, OFF, ON } from "./utils/constants";
import { Lamp, LampType } from "./utils/Lamp";
import "./index.css";
import lampImg from "./img/lamp.png";
import lampYellowImg from "./img/yellow-lamp.png";
import lampBrokenImg from "./img/red-lamp.png";

const main = () => {

  const lamps: Array<LampType> = [];

  for (let i = 0; i < 20; i++){
    lamps.push( {id:i, status: OFF, maxPower: Math.floor(Math.random() * 10) + 1});
  }
  
  const updateIconAndInnerHtmlText = (lampHtmlObj: HTMLDivElement, lampObj: Lamp, lampImg: any) => {
    const lampImgage = document.createElement('img');
    lampImgage.src = lampImg;
    lampHtmlObj.innerHTML = "";
    lampHtmlObj.append(lampImgage);
    lampHtmlObj.append(document.createElement('br'));
    lampHtmlObj.append(lampObj.getValuePower().toString() + "/" + lampObj.getMaxPower().toString());
  }

  lamps.forEach( (lampData: LampType, index: number) => {
    const lamp = new Lamp(lampData.id, lampData.status, lampData.maxPower);
    const lampHtmlObj: HTMLDivElement = document.createElement('div');
    lampHtmlObj.id = lampData.id.toString();
    lampHtmlObj.className = "bg-white float-left m-3";
    updateIconAndInnerHtmlText(lampHtmlObj, lamp, lampImg);
   
    // listener
    lampHtmlObj.addEventListener('click', function handleClick(event: MouseEvent) {
      event.preventDefault();
      if(lamp.getValuePower() >= lamp.getMaxPower()){
        lamp.setStatus(BROKEN);
        updateIconAndInnerHtmlText(lampHtmlObj, lamp, lampBrokenImg);
      } else {
        lamp.incrementValuePower();
        if(lamp.getStatus() === ON){
          lamp.setStatus(OFF);
          updateIconAndInnerHtmlText(lampHtmlObj, lamp, lampImg);
        }
        else {
          lamp.setStatus(ON);
          updateIconAndInnerHtmlText(lampHtmlObj, lamp, lampYellowImg);
        }
      }
    });

    const lampContainer: HTMLElement = document.getElementById("lampContainer");
    if((index > 3 && ((index % 4) == 0))) {
      lampContainer.appendChild(document.createElement("hr"));
    }
    lampContainer.appendChild(lampHtmlObj);
   
  });

 
};

main();
