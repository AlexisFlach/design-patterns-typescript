import { Observer } from "../Observers/index";
const { remove } = require("lodash");

interface Subject {
  registerObserver: (o: Observer) => void;
  removeObserver: (o: Observer) => void;
  notifyObservers(): void;
}

export class WeatherData implements Subject {
  private temperature: Number;
  private humidity: Number;
  private pressure: Number;

  public constructor(private observers: Observer[] = []) {}

  public registerObserver(o: Observer): void {
    this.observers.push(o);
  }
  public removeObserver(o: Observer): void {
    remove(this.observers, this.observers.indexOf(o));
    console.log("removed");
  }
  public notifyObservers(): void {
    for (let observer of this.observers) {
      observer.update(this.temperature, this.humidity, this.pressure);
    }
  }

  public measurementsChanged(): void {
    this.notifyObservers();
  }
  public setMeasurements(
    temperature: Number,
    humidity: Number,
    pressure: Number
  ) {
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;
    this.measurementsChanged();
  }
}
