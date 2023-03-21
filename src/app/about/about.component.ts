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

}
