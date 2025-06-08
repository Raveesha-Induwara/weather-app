export function convertWindSpeed(speedInMeterPerSecond: number): string {
  const speedInKilometerPerHour = speedInMeterPerSecond * 3.6;
  return `${speedInKilometerPerHour.toFixed(0)}km/h`;
}

export function convertMetersToKilometer(meters: number): string {
  const kilometer = meters / 1000;
  return `${kilometer.toFixed(0)}km`;
}
