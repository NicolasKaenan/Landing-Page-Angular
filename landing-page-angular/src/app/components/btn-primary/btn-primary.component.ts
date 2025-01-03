import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

type BtnVariant = "primary" | "secundary";

@Component({
  selector: 'btn-primary',
  imports: [CommonModule],
  templateUrl: './btn-primary.component.html',
  styleUrl: './btn-primary.component.scss'
})
export class BtnPrimaryComponent {
  @Input("btnText") btnText: String = "";
  @Output("submit") onSubmit = new EventEmitter();
  @Input() disabled: boolean = false;
  @Input() loading: boolean = false;
  @Input() variant: BtnVariant = "primary" 
  
  submit(){
    this.onSubmit.emit();
  }
}
