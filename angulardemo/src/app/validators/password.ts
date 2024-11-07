import { AbstractControl, FormControl, FormGroup } from "@angular/forms";

export function hasExclamationMark(input: AbstractControl) {
    const hasExclamation = input.value && input.value.indexOf('!') >= 0;
    return hasExclamation ? null : { abc: true };
  }

  export function hasSameName(group: any):any{
    console.log('hassame name')
    console.log(group)
    console.log(group.get('ename').value)
    console.log(group.get('lname').value)
    return null;
  }