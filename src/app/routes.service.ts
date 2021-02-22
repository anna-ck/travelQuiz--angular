import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class RoutesService {
    private isStarted: boolean = false;
    private isEnded: boolean = false;

    setStart() {
        this.isStarted = true;
    }

    setEnd() {
        this.isEnded = true;
        this.isStarted = false
    }

    getStartedStatus() {
        return this.isStarted
    }

    getEndedStatus() {
        return this.isEnded
    }
}