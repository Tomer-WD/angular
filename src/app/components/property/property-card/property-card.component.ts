import { Component, Input, OnInit } from '@angular/core';
import { IProperty } from '../iproperty.interface';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.scss']
})
export class PropertyCardComponent implements OnInit{
  @Input() property: IProperty
  
  ngOnInit(): void {
  //  const propertyArr = [...this.property]
  //  console.log("property Arr: " + propertyArr);
  // console.log("the property is: " + this.property)
  // console.log("image name:" + this.property.Image)
  }
  
}
