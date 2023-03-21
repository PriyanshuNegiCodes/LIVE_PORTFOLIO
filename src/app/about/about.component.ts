import { Component } from '@angular/core';
import { mySkills } from '../mySkills';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

skillArray:any=mySkills.skills;
 getAge() {
  const birthDate = new Date('1998-06-23');
  const currentDate = new Date();
  const diffInMs = currentDate.getTime() - birthDate.getTime();
  const diffInYears = diffInMs / (1000 * 60 * 60 * 24 * 365.25);
  const age = Math.round(diffInYears);
  return age;
}
typedText = '';

ngOnInit(): void {
  const text = "As an electrical engineering graduate turned full-stack web developer, my ambition is to merge my technical expertise with my creative drive to build impactful and innovative digital solutions.";
  this.typeText(text);
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
