import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "reverse",
})
export class ReversePipe implements PipeTransform {
  transform(value: string): string {
    return value
      .split("")
      .map((symbol: string, index: number) => value[value.length - index - 1])
      .join("");
  }
}
