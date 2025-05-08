import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FirebaseNotifService } from './app/shared/services/firebasenotif/firebase-notif.service';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterModule],
    template: `<router-outlet></router-outlet>`
})
export class AppComponent {
    
    constructor(private firenotif:FirebaseNotifService){}
    ngOnInit() {
        this.firenotif.requestPermission();
        this.firenotif.listen();
    }
}
