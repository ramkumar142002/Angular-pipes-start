import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: string): any {
    let ans = '';
    for(let i = value.length-1;i>=0;i--){
      ans = ans + value[i];
    }
    return ans;
  }
}
