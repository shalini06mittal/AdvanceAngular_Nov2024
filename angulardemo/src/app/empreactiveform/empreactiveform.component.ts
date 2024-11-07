import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { hasExclamationMark, hasSameName } from '../validators/password';
import { debounceTime, distinctUntilChanged, map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-empreactiveform',
  templateUrl: './empreactiveform.component.html',
  styleUrls: ['./empreactiveform.component.css']
})
export class EmpreactiveformComponent implements OnInit {

  

   subsemail:FormControl;
  empform:FormGroup;
  email:FormControl;
  address:FormGroup
  city:FormControl
  password:FormControl;

  skillsForm: FormGroup;
  searchControl = new FormControl('', { nonNullable: true });
  constructor(private fb:FormBuilder) { 
    this.subsemail = new FormControl('',[Validators.required]);
    this.email=new FormControl('sh',Validators.required);
    this.city = new FormControl('mum',Validators.required);
    this.address = new FormGroup({city:this.city})
    this.password=new FormControl('!abc',[hasExclamationMark, Validators.pattern('')])
    
    
    
    this.empform = new FormGroup({
      ename:new FormControl('shalini',[Validators.required, Validators.minLength(5)]),
      lname: new FormControl('', Validators.required),
      email:this.email,
      address:this.address,
      password:this.password
    });
    this.empform.addValidators(hasSameName);
    
    this.skillsForm = this.fb.group({
      name: ['', Validators.required],
      skills: this.fb.array([]) ,
    });

    
  }

  get skills() : FormArray {
    return this.skillsForm.get("skills") as FormArray
  }
  newSkill(): FormGroup {
    return this.fb.group({
      skill: '',
      exp: '',
    })
  }
 
  addSkills() {
    this.skills.push(this.newSkill());
  }
 
  removeSkill(i:number) {
    this.skills.removeAt(i);
  }
 
  onSubmitSkills() {
    console.log(this.skillsForm.value);
  }
  
  subscribe()
  {
    console.log(this.subsemail.value)
  }
  ngOnInit(): void {
  }
  onSubmit() {
    console.log('Form values:', this.empform.value);
    this.empform.reset()
  
  }
  
  
}




