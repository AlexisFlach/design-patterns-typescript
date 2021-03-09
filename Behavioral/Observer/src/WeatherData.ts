import { Observer } from "./Displays";
import { CurrentConditionsDisplay } from "./Displays";

export interface Subject {
  registerObserver(observer: Observer): void;
  removeObserver(observer: Observer): void;
  notifyObservers(): void;
}

export class WeatherData implements Subject {
  private observers: Observer[] = [];
  private temperature: number;
  private humidity: number;
  private pressure: number;

  public registerObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  removeObserver(): void {}
  notifyObservers(): void {
    for (let observer of this.observers) {
      observer.update(this.temperature, this.humidity, this.pressure);
    }
  }

  measurementsChange(): void {
    this.notifyObservers();
  }

  setMeasurements(temp: number, humidity: number, pressure: number): void {
    this.temperature = temp;
    this.humidity = humidity;
    this.pressure = pressure;
    this.measurementsChange();
  }
}

export class WetherStation {
  public static main(): any {
    let weatherData: WeatherData = new WeatherData();
    let display = new CurrentConditionsDisplay(weatherData);
    weatherData.setMeasurements(80, 80, 80);
  }
}
