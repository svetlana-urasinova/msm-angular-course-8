import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "sort",
})
export class SortPipe implements PipeTransform {
  transform(value: any[], propName: string): unknown {
    return value.sort((a, b) => {
      switch (true) {
        case a[propName] > b[propName]:
          return 1;
        case a[propName] === b[propName]:
          return 0;
        case a[propName] < b[propName]:
          return -1;
      }
    });
  }
}
