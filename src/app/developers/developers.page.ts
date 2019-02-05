import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-developers',
  templateUrl: './developers.page.html',
  styleUrls: ['./developers.page.scss'],
})
export class DevelopersPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public Equipe:Array<Object> = [{
    "nome":"Nathalia",
    "img":"https://scontent.fcgh22-1.fna.fbcdn.net/v/t1.0-9/43753657_1965498333534848_844693545976594432_n.jpg?_nc_cat=101&_nc_ht=scontent.fcgh22-1.fna&oh=b9cc49916e5de64960486a142bd39474&oe=5CE38313",
    "ocupacao":"Biologa",
    "contato":"Noice"
  },
  {
  "nome":"Leonardo",
  "img":"https://scontent.fcgh22-1.fna.fbcdn.net/v/t1.0-9/14067514_1125956547449943_6541090052671401867_n.jpg?_nc_cat=109&_nc_ht=scontent.fcgh22-1.fna&oh=8f0c2f29656212d7777950463fcf936d&oe=5CBAE2F4",
  "ocupacao":"Desenvolvedor",
  "contato":"https://www.facebook.com/LeonardoOliv42"
  },
  {
  "nome":"Rafael",
  "img":"https://scontent.fcgh22-1.fna.fbcdn.net/v/t1.0-9/49938259_774888249544282_6773652450768322560_n.jpg?_nc_cat=104&_nc_ht=scontent.fcgh22-1.fna&oh=6b59c02452419e3b6d6b80ee82aa68de&oe=5CEDF0F7",
  "ocupacao":"Desenvolvedor",
  "contato":"https://www.facebook.com/profile.php?id=100010693411094"
  }
]; 

}
