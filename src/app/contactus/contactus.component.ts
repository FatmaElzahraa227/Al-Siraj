import { Component, ViewChild, ElementRef } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css'],
})
export class ContactusComponent {
  forum: any = 'newAlSiraj';
  successMessage: string = '';
  @ViewChild('nameInput', { static: false }) name!: ElementRef;
  @ViewChild('phoneInput', { static: false }) phone!: ElementRef;
  @ViewChild('emailInput', { static: false }) email!: ElementRef;
  @ViewChild('messageInput', { static: false }) message!: ElementRef;
  ngOnInit(): void {
    console.log(this.forum);
    this.successMessage = '';
  }

  onRadioChange(event: any) {
    this.forum = event.target.value;
  }

  sendMessage(e: Event) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;

    const formData = new FormData(form);
    formData.append('forum', this.forum);

    emailjs
      .sendForm(
        'service_8jvmld7',
        'template_xuygd9v',
        form,
        'HqDOhulP275cKf-SI'
      )
      .then(
        (result: EmailJSResponseStatus) => {
          console.log(result);
          form.reset();
          this.successMessage='Message Sent Successfully'
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
}
