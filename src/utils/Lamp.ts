export interface LampType{
    id: number;
    status: number;
    maxPower: number;
}

export class Lamp {
    private id: number;
    private status: number;
    private valuePower: number;
    private maxPower: number;
   
    constructor(id: number, status:number, maxPower: number) {
      this.id = id;
      this.status = status;
      this.valuePower = 0
      this.maxPower = maxPower;
    }
   
    /**
     * GETTER
     */
    public getId(): number {
        return this.id;
    }

    public getStatus(): number {
      return this.status;
    }

    public getValuePower(): number {
        return this.valuePower;
    }

    public getMaxPower(): number {
        return this.maxPower;
    }

    /**
     * SETTER
     */
    public setStatus(status: number): void {
        this.status = status;
    }

    public incrementValuePower(): void {
        this.valuePower++;
    }
  }