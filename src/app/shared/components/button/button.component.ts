import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: '[app-button]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() type: 'primary' | 'transparent' = 'primary';

  @HostBinding('attr.class') private get classes(): string {
    return this.type;
  }

  ngOnInit(): void {}
}
