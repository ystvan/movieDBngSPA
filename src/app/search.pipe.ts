import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(pipeData, pipeModiefier) {
    return pipeData.filter((eachItem) => {
      return eachItem['original_title'].toLowerCase().includes(pipeModiefier.toLowerCase()) ||
        eachItem['overview'].toLowerCase().includes(pipeModiefier.toLowerCase());
    });
  }

}
