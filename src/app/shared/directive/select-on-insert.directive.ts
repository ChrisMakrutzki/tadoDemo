import { Directive, ElementRef, NgZone, OnInit } from '@angular/core';
import { take } from 'rxjs';

@Directive({
  selector: '[appSelectOnInsert]',
})
export class SelectOnInsertDirective implements OnInit {
  constructor(private elementRef: ElementRef, private ngZone: NgZone) {}

  public ngOnInit(): void {
    this.ngZone.onMicrotaskEmpty
      .asObservable()
      .pipe(take(1))
      .subscribe(() => this.elementRef.nativeElement.select());
  }
}
