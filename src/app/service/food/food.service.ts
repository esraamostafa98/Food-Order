import { Tag } from './../../shared/models/Tag';
import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor() {}
  getFoodById(id: number): Foods {
    return this.getAll().find((food) => food.id == id)!;
  }

  getAllFoodByTag(tag: string): Foods[] {
    return tag == 'All'
      ? this.getAll()
      : this.getAll().filter((food) => food.tags?.includes(tag));
  }

  getAllTag(): Tag[] {
    return [
      { name: 'All', count: 12 },
      { name: 'FastFood', count: 9 },
      { name: 'Pizza', count: 1 },
      { name: 'Lunch', count: 10 },
      { name: 'chicken', count: 4 },
      { name: 'Hamburger', count: 1 },
      { name: 'Salad', count: 3 },
      { name: 'Fesh', count: 1 },
    ];
  }

  getAll(): Foods[] {
    return [
      {
        id: 1,
        price: 45.97,
        name: 'Steek Kabab',
        favorite: true,
        star: 4.0,
        tags: ['FastFood', 'Lunch'],
        imageUrl: '/assets/1.jpg',
        cookTime: '10-15',
        origins: ['indian', 'Turky'],
      },
      {
        id: 2,
        price: 46.77,
        name: 'chicken Salad',
        favorite: false,
        star: 4.0,
        tags: ['Lunch', 'chicken', 'Salad'],
        imageUrl: '/assets/2.jpg',
        cookTime: '20-25',
        origins: ['Egyption'],
      },
      {
        id: 3,
        price: 85.29,
        name: 'Shesh Tawook',
        favorite: false,
        star: 3.4,
        tags: ['FastFood', 'Lunch'],
        imageUrl: '/assets/3.jpg',
        cookTime: '30-45',
        origins: ['indian'],
      },
      {
        id: 4,
        price: 100.67,
        name: 'Grill Meet',
        favorite: true,
        star: 4.0,
        tags: ['FastFood', 'Lunch'],
        imageUrl: '/assets/4.jpg',
        cookTime: '10-15',
        origins: ['indian'],
      },
      {
        id: 5,
        price: 22.85,
        name: 'Grill chicken',
        favorite: false,
        star: 2.9,
        tags: ['Lunch', 'chicken'],
        imageUrl: '/assets/5.jpg',
        cookTime: '10-15',
        origins: ['Sarian'],
      },
      {
        id: 6,
        price: 56.7,
        name: 'Sezer Salad',
        favorite: true,
        star: 3.5,
        tags: ['Salad'],
        imageUrl: '/assets/6.jpg',
        cookTime: '10-15',
        origins: ['indian'],
      },
      {
        id: 7,
        price: 83.59,
        name: 'Grill Meet',
        favorite: false,
        star: 3.8,
        tags: ['FastFood', 'Lunch'],
        imageUrl: '/assets/7.jpg',
        cookTime: '35-45',
        origins: ['Turky'],
      },
      {
        id: 8,
        price: 43.97,
        name: 'Kabab chicken',
        favorite: false,
        star: 3.2,
        tags: ['FastFood', 'Lunch', 'chicken'],
        imageUrl: '/assets/8.jpg',
        cookTime: '10-15',
        origins: ['indian'],
      },
      {
        id: 9,
        price: 45.97,
        name: 'Mashrom Pittza',
        favorite: true,
        star: 4.0,
        tags: ['FastFood', 'Lunch', 'Pizza'],
        imageUrl: '/assets/9.jpg',
        cookTime: '10-15',
        origins: ['indian'],
      },
      {
        id: 10,
        price: 46.77,
        name: 'Fesh Salad',
        favorite: false,
        star: 4.0,
        tags: ['FastFood', 'Lunch', 'Salad', 'Fesh'],
        imageUrl: '/assets/10.jpg',
        cookTime: '20-25',
        origins: ['Egyption'],
      },
      {
        id: 11,
        price: 85.29,
        name: 'Cook chicken',
        favorite: false,
        star: 3.4,
        tags: ['FastFood', 'Lunch', 'chicken'],
        imageUrl: '/assets/11.jpg',
        cookTime: '30-45',
        origins: ['indian'],
      },
      {
        id: 12,
        price: 90.67,
        name: 'Humbrger',
        favorite: true,
        star: 3.7,
        tags: ['FastFood', 'Hamburger'],
        imageUrl: '/assets/12.jpg',
        cookTime: '10-15',
        origins: ['indian'],
      },
    ];
  }
}
