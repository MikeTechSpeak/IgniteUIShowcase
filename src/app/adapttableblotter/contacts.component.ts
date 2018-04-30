import {Component, OnInit} from '@angular/core';
import {ContactEntity} from '../adapttableblotter/entities/contactentity';
import {AdaptTableService} from '../adapttableblotter/adapttableblotter.service';

@Component({
    selector: 'app-contacts',
    templateUrl: 'contacts.component.html'
})
export class ContactsComponent implements OnInit {

    title = 'Contacts';
    rows: number;
    columns: number;
    contactentities: ContactEntity[] = [];
    constructor(private bankingservice: AdaptTableService) { }

    ngOnInit() {
       this.bankingservice.getContacts().subscribe(t => {
         this.contactentities  = t;
         console.log(this.contactentities);
         this.rows = this.contactentities.length;
         this.columns = Object.keys(this.contactentities[0]).length;
        // this.priceblotterentities.count
        });
    }
}
