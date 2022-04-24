import { Directive, HostBinding, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appTemperatureBackground]',
})
export class TemperatureBackgroundDirective implements OnChanges {
  @Input() public appTemperatureBackground: number;

  private temperatureColorThresholds: Record<number, string> = {
    25: '#FE5F00',
    22: '#FFA900',
    19: '#FDBF00',
    5: '#379887',
  };

  @HostBinding('style.background') public background: string;

  public ngOnChanges(): void {
    this.setBackground();
  }

  private setBackground(): void {
    const thresholdKey = Object.keys(this.temperatureColorThresholds)
      .sort((a, b) => (parseInt(a) > parseInt(b) ? -1 : 1))
      .find(
        (temperature) => this.appTemperatureBackground > parseInt(temperature)
      );

    if (thresholdKey) {
      this.background = this.temperatureColorThresholds[parseInt(thresholdKey)];
    }
  }
}
