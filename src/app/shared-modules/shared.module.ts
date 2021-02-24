import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ChartModule } from 'primeng/chart';

@NgModule({
  exports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule, ChartModule],
})
export class SharedModule {}
