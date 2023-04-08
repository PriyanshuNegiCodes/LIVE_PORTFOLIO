import { Component } from '@angular/core';
import { myEdu } from '../myEducation';
import { myJob } from '../myJobs';
import {saveAs} from 'file-saver';
@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {
 hii:any=myEdu.education;
 hey: any=myJob.jobs;
primary: any;
chip: any;

fetchData:any="";

imageSend(data: any) {
  this.fetchData =data;
}
downLoad(){
  saveAs('../../assets/Priyanshu Negi.pdf', 'Download Resume')
}
}
