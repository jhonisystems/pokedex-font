import { Pipe, PipeTransform } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { environment } from '../../../environments/environment';

@Pipe({
  name: 'searchImg'
})
export class SearchImgPipe implements PipeTransform {
  constructor(
    private storage: AngularFireStorage
  ){}
  transform(value: number): string {
    let urlImg: string;
    if (value > 0 && value <= 9) {
      urlImg = `${environment.urlImg}/00${value}.png?alt=media`;
    }
    if (value >= 10 && value <= 99) {
      urlImg = `${environment.urlImg}/0${value}.png?alt=media`;
    }
    if (value > 99){
      urlImg = `${environment.urlImg}/${value}.png?alt=media`;
    }
    return urlImg
  }

}
