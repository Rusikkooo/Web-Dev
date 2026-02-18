import { Component, signal } from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router';
import { Property } from './Property_binding.component';
import { Event } from './Event.component';
import { UserInput } from './inputt.component';
import { Output } from './output.component';
import { Viewss } from './Deferrable_Views.component';
import { NgOptimizedImage } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule,FormControl,FormGroup ,Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [Event, Property, UserInput, Output, Viewss, NgOptimizedImage,RouterOutlet,RouterLink,FormsModule,ReactiveFormsModule],
  template:`
  <!-- @for(user of users;track user.id){
    <p>{{ user.name }}</p>
  }
  <property-binding>
  </property-binding>
  <app-event> -->
  <!-- </app-event> -->
  <!-- <app-input occupation="Rusik"></app-input>, -->

  <!-- output.component.ts!!! -->
  <!-- <app-output (addItemIvent)="addItem($event)"></app-output>
  <p> {{ items.length }}</p>; -->

  <!-- Deferrable Views -->
  <!-- <div>
    <article>
      <p>
    Angular is my favorite framework, and this is why. Angular has the coolest deferrable view
    feature that makes defer loading content the easiest and most ergonomic it could possibly be.
    The Angular community is also filled with amazing contributors and experts that create excellent
    content. The community is welcoming and friendly, and it really is the best community out there.
      </p>
      <p>
    I can't express enough how much I enjoy working with Angular. It offers the best developer
    experience I've ever had. I love that the Angular team puts their developers first and takes
    care to make us very happy. They genuinely want Angular to be the best framework it can be, and
    they're doing such an amazing job at it, too. This statement comes from my heart and is not at
    all copied and pasted. In fact, I think I'll say these exact same things again a few times.
      </p>
      <p>
    Angular is my favorite framework, and this is why. Angular has the coolest deferrable view
    feature that makes defer loading content the easiest and most ergonomic it could possibly be.
    The Angular community is also filled with amazing contributors and experts that create excellent
    content. The community is welcoming and friendly, and it really is the best community out there.
      </p>
      <p>
    I can't express enough how much I enjoy working with Angular. It offers the best developer
    experience I've ever had. I love that the Angular team puts their developers first and takes
    care to make us very happy. They genuinely want Angular to be the best framework it can be, and
    they're doing such an amazing job at it, too. This statement comes from my heart and is not at
    all copied and pasted. In fact, I think I'll say these exact same things again a few times.
      </p>
      <p>
    Angular is my favorite framework, and this is why. Angular has the coolest deferrable view
    feature that makes defer loading content the easiest and most ergonomic it could possibly be.
    The Angular community is also filled with amazing contributors and experts that create excellent
    content. The community is welcoming and friendly, and it really is the best community out there.
      </p>
      <p>
    I can't express enough how much I enjoy working with Angular. It offers the best developer
    experience I've ever had. I love that the Angular team puts their developers first and takes
    care to make us very happy. They genuinely want Angular to be the best framework it can be, and
    they're doing such an amazing job at it, too. This statement comes from my heart and is not at
    all copied and pasted.
      </p>
    </article>

    @defer(on viewport){
      <comments />
    }
    @placeholder {
      <p>Future comments</p>
    }
    @loading(minimum 5s) {
      <p>
        loading comments...
      </p>
    }

  </div> -->

  <!-- Оптимизация изображений -->
  
  <!-- <style>
    .image-container{
      position: "relative"
    }
  </style>
  <li>
    Static Image:
    <img ngSrc="/logo.svg" alt="Angular logo" width="32" priority  />
  </li>
  <li>
    Dynamic Image:
    <img [ngSrc]="logoUrl" [alt]="logoAlt" width="32" height="32" />

  </li>

  <div class="image-container">
  <img ngSrc="www.example.com/image.png" fill />
  </div> -->

  <!-- Обзор маршрутизации -->


  <!-- <nav>
      <a href="/">Home</a>
      |
      <a href="/user">User</a>
      <router-outlet></router-outlet>
    </nav> -->
    
    <!-- Используйте RouterLink для навигации. -->
    <nav>
      <a routerLink="/">Home</a>
      |
      <a routerLink="/user">User</a>
      <router-outlet></router-outlet>
      </nav>
  
      <!-- Реактивные формы -->
      <!-- Проверка форм -->
      <form [formGroup]="profileForm" (ngSubmit)="handleSubmit()">

        <label >
          Name:
          <input  type="text"  formControlName = "name" />
        </label>

        <label >
          Email:
          <input type="email" formControlName = "email" />
        </label>
        <button type="submit" [disabled]="!profileForm.valid">
          Submit
        </button>
      </form>
        <h2>Profile Form</h2>
        <p>
          Name : {{profileForm.value.name}}
        </p>
        <p>
          Email:{{profileForm.value.email}}
        </p>

      <!-- Создание инъекционного сервиса -->
      




      
    


    
    
    `,
})


export class App {
  // users = [
  //   {id: 0, name: 'Sarah'},
  //   {id: 1, name: 'Amy'},
  //   {id: 2, name: 'Rachel'},
  //   {id: 3, name: 'Jessica'},
  //   {id: 4, name: 'Poornima'},
  // ];
  // protected readonly title = signal('for');
  // items= new Array();
  // addItem(item: string) {
  //   this.items.push(item);
  // }

  // Оптимизация изображений 
  // logoUrl = '/logo.svg';
  // logoAlt = 'Angular logo';
  // username = 'youngTech';

  profileForm = new FormGroup({
    name: new FormControl('',Validators.required),
    email: new FormControl('',[Validators.required,Validators.email])

  })
  handleSubmit(){
    alert(this.profileForm.value.name+'|'+this.profileForm.value.email)
  }




  

}
