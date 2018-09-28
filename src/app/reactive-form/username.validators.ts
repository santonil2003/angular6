import { AbstractControl, ValidationErrors } from '@angular/forms';

export class UsernameValidators {

	static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
		if ((control.value as string).indexOf(' ') >= 0) {
			return { cannotContainSpace: true };
		}
		return null;
	}

	// async validator....
	static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {
		return new Promise((resolve, reject) => {
			// simulate api call...
			setTimeout(() => {

				if (control.value === 'sanil') {
					resolve({ shouldBeUnique: true });
				} else {
					resolve(null);
				}

			}, 4000)
		});
	}
}

