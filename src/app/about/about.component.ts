import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
 skillArray:any= ["Angular", "Angular Material", "JSON", "Axios", "TypeScript", "AngularJS", "GitHub", "Microsoft Visual Studio Code", "IntelliJ IDEA", "MySQL", "Databse", "Java", "Core Java", "JavaScript", "Java Database Connectivity (JDBC)", "HTML", "Cascading Style Sheets (CSS)"]


 getAge() {
  const birthDate = new Date('1998-06-23');
  const currentDate = new Date();
  const diffInMs = currentDate.getTime() - birthDate.getTime();
  const diffInYears = diffInMs / (1000 * 60 * 60 * 24 * 365.25);
  const age = Math.round(diffInYears);
  return age;
}

}
