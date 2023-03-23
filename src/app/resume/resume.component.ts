import { Component } from '@angular/core';
import { myEdu } from '../myEducation';
import { myJob } from '../myJobs';
@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {
 hii:any=myEdu.education;
 hey: any=myJob.jobs;
}
