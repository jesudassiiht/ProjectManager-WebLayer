import { NgModule,CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA } from '@angular/core';
import {async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { LoggingService } from '../services/logging.service';
import { DatePipe } from '@angular/common';
import { ModalService } from '../services/model.service';
import { createComponent } from '@angular/compiler/src/core';
import { FilterPipe } from '../pipes/filter.pipe';
import { FormGroup, FormBuilder, Validators,ReactiveFormsModule, FormsModule } from '@angular/forms';
import {HttpClientTestingModule } from   '@angular/common/http/testing';
import { RouterTestingModule } from   '@angular/router/testing';
import { UserListComponentComponent } from '../user-list-component/user-list-component.component';
import { exec } from 'child_process';
import { ProjectService } from '../services/project.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../services/task.service';
import { ModalComponent } from '../directives/model.component';

describe('User-List Component-Testing the User List Component', () => {
    let component: UserListComponentComponent;
    let fixture: ComponentFixture<UserListComponentComponent>;

    

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [FilterPipe, ModalComponent, UserListComponentComponent],
        imports:[
          ReactiveFormsModule,
          HttpClientTestingModule,
          RouterTestingModule,FormsModule
        ],
          
          providers:[ProjectService,TaskService, LoggingService, ModalService]
      })
      .compileComponents();
    }));
  
    beforeEach(() => {
      fixture = TestBed.createComponent(UserListComponentComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

