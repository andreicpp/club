import { Component } from '@angular/core';


export interface Boss {
  name: string;
  surname: string;
  date;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private bosses: Boss[] = [{name: 'andrzej', surname: 'dailida', date: '25.01.19'}];

  onSubmit(name: string, surname: string, date) {
    const boss: Boss = {name: name, surname: surname, date: date};
    this.bosses.push(boss); // tutaj wysyłanie do bd po http post
  }


  delete(name: string, surname: string) {
    console.log('name' + name);
    console.log('surname' + surname);
    const boss = this.bosses.find(item => item.surname === surname && item.name === name);
    console.log(boss);

    const index = this.bosses.indexOf(boss);
    console.log(index);
    console.log(this.bosses);
    this.bosses.splice(index, 1);
    console.log(this.bosses);
  }
}
