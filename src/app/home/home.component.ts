import { Component, OnInit } from '@angular/core';
import { mySkills } from '../mySkills';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  typedText = '';
  currentSkill='coding';
  skills = mySkills.skills;
  currentSkillIndex = 0;

  ngOnInit(): void {
    const text = 'Full Stack Web Developer';
    this.typeText(text);

    setInterval(() => {
      if (this.currentSkillIndex < this.skills.length) {
        this.currentSkill = this.skills[this.currentSkillIndex].name;
        this.currentSkillIndex++;
      } else {
        this.currentSkillIndex = 0;
      }
    }, 1000);
  }

  typeText(text: string) {
    let i = 0;
    const intervalId = setInterval(() => {
      if (i < text.length) {
        this.typedText += text.charAt(i);
        i++;
      } else {
        clearInterval(intervalId);
      }
    }, 50);
  }
}
