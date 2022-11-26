import { BROKEN, OFF, ON } from "./utils/constants";
import { Lamp, LampType } from "./utils/Lamp";
import "./index.css";
import lampImg from "./img/lamp.png";
import lampYellowImg from "./img/yellow-lamp.png";
import lampBrokenImg from "./img/red-lamp.png";

const main = () => {

  const lamps: Array<LampType> = [];

  for (let i = 0; i < 20; i++){
    lamps.push( {id:0, status: OFF, maxPower: Math.floor(Math.random() * 10) + 1});
  }
  
  const iconAndInnerHtmlText = (lampButton: HTMLButtonElement, lampObj: Lamp, lampImg: any) => {
    const lampImgage = document.createElement('img');
    lampImgage.src = lampImg;
    lampButton.innerHTML = "";
    lampButton.append(lampImgage);
    lampButton.append(document.createElement('br'));
    lampButton.append(lampObj.getValuePower().toString() + "/" + lampObj.getMaxPower().toString());
    const rechargeButton = document.createElement('button');
    lampButton.append(document.createElement('br'));
    rechargeButton.innerHTML = 'Recharge';
  }

  lamps.forEach( (lampData: LampType, index: number) => {
    const lamp = new Lamp(lampData.id, lampData.status, lampData.maxPower);
    const lampButton: HTMLButtonElement = document.createElement('button');
    lampButton.id = lampData.id.toString();
    iconAndInnerHtmlText(lampButton, lamp, lampImg);
   
    // listener
    lampButton.addEventListener('click', function handleClick(event: MouseEvent) {
      event.preventDefault();
      if(lamp.getValuePower() >= lamp.getMaxPower()){
        lamp.setStatus(BROKEN);
        iconAndInnerHtmlText(lampButton, lamp, lampBrokenImg);
      } else {
        lamp.incrementValuePower();
        if(lamp.getStatus() === ON){
          lamp.setStatus(OFF);
          iconAndInnerHtmlText(lampButton, lamp, lampImg);
        }
        else {
          lamp.setStatus(ON);
          iconAndInnerHtmlText(lampButton, lamp, lampYellowImg);
        }
      }
    });

    const lampContainer: HTMLElement = document.getElementById("lampContainer");
    if((index > 3 && ((index % 4) == 0))) {
      lampContainer.appendChild(document.createElement("hr"));
    }
    lampContainer.appendChild(lampButton);
   
  });

 
};

main();
