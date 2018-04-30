import {Component, OnInit , ViewChild, ViewEncapsulation, AfterViewInit } from '@angular/core';
import {PersonEntity} from '../people/personentity';
import { IgxGridComponent } from 'igniteui-angular/grid/grid.component';

@Component({
  selector: 'app-people',
  templateUrl: './person.component.html'
})


export class PersonComponent implements OnInit, AfterViewInit {
  title = 'People';
  public rowsCount = 100;
  people: PersonEntity[] = [];
  rowOptions: any;
  @ViewChild('grid1', { read: IgxGridComponent })
  public grid1: IgxGridComponent;
  constructor() { }

  ngOnInit() {
    this.people = this.getPeople(100);
    this.grid1.data = this.people;
  }

  ngAfterViewInit() {
  }

  rebindgrid() {
    this.people = this.getPeople(this.rowsCount);
    this.grid1.data = this.people;
    this.grid1.markForCheck();
  }

  initcolumn(col) {
    // disappear scroll bar
  //  col.width = '100px';
  }

  randomInt(min, max) {
    return Math.round((Math.random() * (max - min) + min));
  }

  getPeople(count): PersonEntity[] {
    const p = [];
    const months = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September',
                     'October', 'November', 'December' ];
    const streetSuffix = [ 'Street', 'Ave', 'Blvd', 'Avenue', 'St', 'Way', 'Alley', 'Parkway', 'Path', 'Vista',
                           'View', 'Trail', 'Track', 'Terrace' ];
    const directional = ['', 'North', 'N', 'West', 'W', 'East', 'E', 'South', 'S', 'NW', 'SW', 'SE', 'NE' ];
    const streetName = ['Second', 'Third', 'First', 'Fourth', 'Park', 'Main', 'Sixth', 'Oak', 'Seventh', 'Pine', 'Maple',
                       'Cedar', 'Elm', 'Eighth', 'View', 'Washington', 'Ninth', 'Lake', 'Hill', 'Lakeside', 'Hamilton', 'Lincoln',
                       'Adams', 'Jefferson', 'Madison', 'Jackson', 'Monroe'];
    const fname = [ 'Jack', 'Oliver', 'Charlie', 'Harry', 'Jacob', 'Alfie', 'Noah', 'Oscar', 'George', 'James', 'Thomas',
                    'Leo', 'Joshua', 'Logan', 'Freddie', 'Archie', 'Max', 'Henry', 'Ethan', 'Connor', 'William', 'Carter',
                    'Ryan', 'Michael', 'Malcolm', 'Sophia', 'Emma', 'Olivia', 'Ava', 'Isabella', 'Mia', 'Zoe', 'Lily', 'Emily',
                    'Madelyn', 'Madison', 'Chloe', 'Charlotte', 'Aubrey', 'Avery', 'Abigail', 'Kaylee', 'Layla', 'Harper',
                    'Ella', 'Amelia', 'Arianna', 'Riley', 'Aria', 'Hailey' ];
    const surname = [ 'Smith', 'Johnson', 'Williams', 'Jones', 'Brown', 'Davis', 'Miller', 'Wilson', 'Moore', 'Taylor', 'Anderson',
                      'Thomas', 'Jackson', 'White', 'Harris', 'Martin', 'Thompson', 'Garcia', 'Martinez', 'Robinson', 'Clark',
                      'Rodriguez', 'Lewis', 'Lee', 'Walker', 'Hall', 'Allen', 'Young', 'Hernandez', 'King', 'Wright', 'Lopez',
                      'Hill', 'Scott', 'Green', 'Adams', 'Baker', 'Gonzalez', 'Nelson', 'Carter', 'Mitchell', 'Perez', 'Roberts',
                      'Turner', 'Phillips', 'Campbell', 'Parker', 'Evans', 'Edwards', 'Collins' ];
     const language = [ 'English', 'Spanish', 'Japanese', 'Mandarin', 'French', 'Korean', 'Tagalog', 'German', 'Arabic', 'Russian',
                        'Italian', 'Vietnamese' ] ;
     const sport = [ 'Soccer', 'Football', 'Baseball', 'Golf', 'Lacrosse', 'Softball', 'Bowling', 'Curling' ];
     const city = [ 'New York', 'Los Angeles', 'Chicago', 'Houston', 'Philadelphia', 'Phoenix', 'San Antonio', 'San Diego',
                    'Dallas', 'San Jose', 'Austin', 'Jacksonville', 'San Francisco', 'Indianapolis', 'Columbus', 'Fort Worth',
                    'Charlotte', 'Seattle', 'Denver', 'El Paso', 'Detroit', 'Washington', 'Boston', 'Memphis', 'Nashville',
                    'Portland', 'Oklahoma City', 'Las Vegas', 'Baltimore', 'Louisville', 'Milwaukee', 'Albuquerque', 'Tucson',
                    'Fresno', 'Sacramento', 'Kansas City', 'Long Beach', 'Mesa', 'Atlanta', 'Colorado Springs', 'Virginia Beach',
                    'Raleigh', 'Omaha', 'Miami', 'Oakland', 'Minneapolis', 'Tulsa', 'Wichita', 'New Orleans', 'Arlington' ];

    for (let i = 0; i < count; i++) {
     p.push(
       {
         Id: i + 1,
         Name: fname[this.randomInt(0, 49)] + ' ' + surname[this.randomInt(0, 49)],
         Age: this.randomInt(18, 65),
         BirthDay: months[this.randomInt(0, 11)] + ' ' + this.randomInt(1, 28),
         Street: streetName[this.randomInt(0, 26)] + ' ' + streetSuffix[this.randomInt(0, 14)],
         City: city[this.randomInt(0, 49)],
         Phone: this.randomInt(201, 999) + '-' + this.randomInt(211, 999) + '-' + this.randomInt(1000, 9999),
         Country: 'USA',
         Language: language[this.randomInt(0, 11)],
         Sports: sport[this.randomInt(0, 7)]
        }
      );
    }
    return p;
  }


  // getPeople(count): PersonEntity[] {
  //   let p = [];
  //   for (let i = 0; i < count; i++) {
  //    p.push(
  //      {
  //        Id: i + 1,
  //        Name: 'Steve Smith',
  //        Age: 35,
  //        BirthDay: '25 July',
  //        Street: 'Park Street',
  //        City: 'Phildelphia',
  //        Phone: '+91-9697997',
  //        Country: 'USA',
  //        Language: 'English',
  //        Sports: 'Baseball',
  //        BankBalance: '$1300',
  //        JanBankBalance: '$1200',
  //        FebBankBalance: '$1190',
  //        MarchBankBalance: '$1400',


  //       }
  //     );
  //   }
  //   return p;
  // }
}
