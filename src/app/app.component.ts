import { Component, ViewChildren, QueryList, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class AppComponent {

  title = 'ssg';
  inputChecked: boolean = false;
  popup: boolean = false;
  result: number = 0;
  resultText: string;
  resultArrayText: string[] = ['Introvert', 'Extrovert', 'Ambivert'];
  
  @ViewChildren('answer') answers: QueryList<ElementRef>;

  show__Result() {

    let sum: number = 0;

    this.answers.forEach(function(item) {

      //input checked check
      if(item.nativeElement.checked == true) {

        sum += Number(item.nativeElement.value);
      }     
    });

    //if score equals 0 or less than 3 then result Introvert 
    if (sum == 0 || sum < 3) {     

      this.resultText = this.resultArrayText[0];
    }

    //if score equals 3 then result Extrovert 
    if (sum == 3) {    

      this.resultText = this.resultArrayText[1];
    }

    //if score equals 6 or more than 3 then result Ambivert 
    if (sum == 6 || sum > 3) {    

      this.resultText = this.resultArrayText[2];
    } 

    this.toggle__Popup();

  }

  toggle__Popup() {

    this.popup = !this.popup;
  }

  hide__Popup() {

    this.popup = false;
  }

  cheked__Answer() {

    this.inputChecked = !this.inputChecked;
  }

  questions = [
    
    {title: 'How likely are you to strike a conversation with other people?',
      name: 'answer',
      answers: [
        {answer: 'A. Very! I love chatting with people'},
        {answer: 'B. I’m not that talkative'}
      ]
    },

    {title: 'What would you prefer: A party with close friends or meeting new people?',
      name: 'answer',
      answers: [
        {answer: 'A. Meeting new people is fun, so I’ll go for that'},
        {answer: 'B. I’m more comfortable with my closed circle'}
      ]
    },

    {title: 'Do you prefer alone time over the company of others?',
      name: 'answer',
      answers: [
        {answer: 'A. Sometimes'},
        {answer: 'B. Yes, I do'}
      ]},

    {title: 'Does being around a large group of people freak you out?',
      name: 'answer',
      answers: [
        {answer: 'A. Oh no, I thrive on it'},
        {answer: 'B. Most of the time'}
      ]},

    {title: 'Do you often share your problems with others?',
      name: 'answer',
      answers: [
        {answer: 'A. Of course! It is very therapeutic'},
        {answer: 'B. Just with my bestie'}
      ]},
      
    {title: 'How likely are you to ask someone out on a date?',
      name: 'answer',
      answers: [
        {answer: 'A. Very likely!'},
        {answer: 'B. No, I just can’t'}
      ]},
  ];
}