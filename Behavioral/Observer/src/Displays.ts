import { Subject } from "./WeatherData";
export interface Observer {
  update(temp: number, humidity: number, pressure: number): void;
}
interface DisplayElements {
  display(): void;
}

export class CurrentConditionsDisplay implements Observer, DisplayElements {
  temperature: number;
  humidity: number;

  constructor(public weatherData: Subject) {
    this.weatherData = weatherData;
    weatherData.registerObserver(this);
  }
  update(temp: number, humidity: number, pressure: number): void {
    this.temperature = temp;
    this.humidity = humidity;
    this.display();
  }

  display(): void {
    console.log(
      `Current conditions: ${this.temperature} F degrees and ${this.humidity} humidity`
    );
  }
}
