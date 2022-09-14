import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobSearchComponent } from './job-search.component';
import { JobListComponent } from './job-list/job-list.component';
import { JobDisplayComponent } from './job-display/job-display.component';
import { MaterialsModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JobsServices } from '../Services/Jobs/jobs.service';
// import { JobApplyComponent } from './job-apply/job-apply.component';

@NgModule({
  declarations: [
    JobSearchComponent,
    JobListComponent,
    JobDisplayComponent,
    // JobApplyComponent
  ],
  imports: [
    CommonModule, MaterialsModule, ReactiveFormsModule, FormsModule
  ],
  exports:[JobSearchComponent],
  providers:[JobsServices]
})
export class JobSearchModule { }
