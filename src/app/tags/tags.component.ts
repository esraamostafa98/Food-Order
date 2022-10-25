import { Component, Input, OnInit } from '@angular/core';
import { FoodService } from '../service/food/food.service';
import { Tag } from '../shared/models/Tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css'],
})
export class TagsComponent implements OnInit {
  constructor(private foodService: FoodService) {}
  @Input()
  foodPagetags?: string[];

  @Input()
  justyifyContent: string = 'center';

  tags?: Tag[] = [];
  ngOnInit(): void {
    if (!this.foodPagetags) this.tags = this.foodService.getAllTag();
  }
}
