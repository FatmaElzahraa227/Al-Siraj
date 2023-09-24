import { Component, ViewChild, ElementRef } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css'],
})
export class ContactusComponent {

  forum: any = 'newAlSiraj';
  @ViewChild('nameInput', { static: false }) name!: ElementRef;
  @ViewChild('phoneInput', { static: false }) phone!: ElementRef;
  @ViewChild('emailInput', { static: false }) email!: ElementRef;
  @ViewChild('messageInput', { static: false }) message!: ElementRef;
  ngOnInit(): void{
    console.log(this.forum);
    
  }

  onRadioChange(event: any) {
    this.forum = event.target.value;
    
  }


  sendMessage(e: Event) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
  
    // Add the radio button value to the form data
    const formData = new FormData(form);
    formData.append('forum', this.forum);
  
    // Send the form using emailjs
    emailjs.sendForm('service_8jvmld7', 'template_xuygd9v', form, 'HqDOhulP275cKf-SI')
      .then((result: EmailJSResponseStatus) => {
        console.log(result);
      }, (error) => {
        console.log(error.text);
      });
  }
}
