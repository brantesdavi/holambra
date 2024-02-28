import { AbstractControl, ValidationErrors } from "@angular/forms";

export function telefoneValidator(control: AbstractControl): ValidationErrors | null {
    const regex = /^(\d{2})(\d{5})(\d{4})$/;
    if (!regex.test(control.value)) {
      return { telefoneInvalido: true };
    }
    return null;
  }