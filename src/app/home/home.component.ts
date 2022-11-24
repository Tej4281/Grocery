import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
data:any=[
  {
    'txt':'Vegitables',
    'name':'Upto 50% Off'
  },
  {
    'txt':'Juice',
    'name':'Upto 44% Off'
  },
  {
    'txt':'Meat',
    'name':'Upto 12% Off'
  },
  {
    'txt':'Fruits',
    'name':'Upto 30% Off'
  },

]

info:any=[
  {

      'txt':'-33%',
      'name':'Organic Banana',
      'price':'40',
      'img':'/assets/img/product-1.png'
  },
  {
    'txt':'-15%',
    'name':'Organic Tomato',
    'price':'40',
    'img':'/assets/img/product-2.png'
  },
  {
    'txt':'-20%',
    'name':'Organic Orange',
    'price':'40',
    'img':'/assets/img/product-3.png'
  },
  {
    'txt':'-33%',
    'name':'Natural Mild',
    'price':'40',
    'img':'/assets/img/product-4.png'
  },
  {
    'txt':'-7%',
    'name':'Organic Grapes',
    'price':'40',
    'img':'/assets/img/product-5.png'
  },
  {
    'txt':'-10%',
    'name':'Natural Almonts',
    'price':'40',
    'img':'/assets/img/product-6.png'
  },
  {
    'txt':'-66%',
    'name':'Organic Apple',
    'price':'40',
    'img':'/assets/img/product-7.png'
  },
  {
    'txt':'-20%',
    'name':'Natural Butter',
    'price':'40',
    'img':'/assets/img/product-8.png'
  },
  {
    'txt':'-7%',
    'name':'Organic Carrot',
    'price':'40',
    'img':'/assets/img/product-9.png'
  }
]


}
