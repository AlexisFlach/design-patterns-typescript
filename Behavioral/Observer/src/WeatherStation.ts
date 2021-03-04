import { WeatherData } from "./Subject/index";
import { CurrentConditionsDisplay } from "./Observers/index";
export class WeatherStation {
  public run(): void {
    const weatherData = new WeatherData();
    const currentConditionsDisplay = new CurrentConditionsDisplay(weatherData);
    weatherData.setMeasurements(80, 65, 40);
    weatherData.setMeasurements(10, 25, 330);
  }
}
