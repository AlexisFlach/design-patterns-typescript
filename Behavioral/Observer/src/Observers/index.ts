import { WeatherData } from "../Subject/index";

export interface Observer {
  update: (temp: Number, humidity: Number, pressure: Number) => void;
}

interface DisplayElement {
  display(): void;
}

export class CurrentConditionsDisplay implements Observer, DisplayElement {
  private temperature: Number;
  private humidity: Number;

  public constructor(private weatherData: WeatherData) {
    weatherData.registerObserver(this);
  }
  public update(temperature: Number, humidity: Number, pressure: Number): void {
    this.temperature = temperature;
    this.humidity = humidity;
    this.display();
  }
  public display() {
    console.log(
      `Current conditions: ${this.temperature} Fahrenheit and % ${this.humidity}`
    );
  }
}
