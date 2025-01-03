import { Component, signal } from '@angular/core';
import { BtnPrimaryComponent } from "../btn-primary/btn-primary.component";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { NewsLetterService } from '../../services/news-letter.service';

@Component({
  selector: 'newsletter-form',
  imports: [BtnPrimaryComponent, ReactiveFormsModule],
  providers:[NewsLetterService],
  templateUrl: './newsletter-form.component.html', 
  styleUrl: './newsletter-form.component.scss'
})
export class NewsletterFormComponent {
  newletterForm: FormGroup;
  loading = signal(false);

  constructor(private service: NewsLetterService){
    this.newletterForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }
  onSubmit(){
    this.loading.set(true);
    if(this.newletterForm.valid){
      this.service.sendData(this.newletterForm.value.name, this.newletterForm.value.email).subscribe({
        next: () => {
          this.newletterForm.reset
        }
      })
      this.loading.set(true);
    }
  }
}
