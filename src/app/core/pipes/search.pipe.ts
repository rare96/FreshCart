import { Product } from './../../shared/interfaces/cart';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(products : Product[], searchWord: string ): Product[] { 
    return products.filter( product => product.title.toLocaleLowerCase().includes(searchWord.toLocaleLowerCase()));
  }

}
