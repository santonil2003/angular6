import { ErrorHandler } from "@angular/core";

export class AppErrorHandler implements ErrorHandler {
	handleError(error) {
		console.log("App Error!!");
		console.log(error);
	}
}