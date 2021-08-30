import { Pipe } from "@angular/core";

@Pipe({ name: "maxlength" })
export class MaxlengthPipe {
  transform(text: string, max: number) {
    if (text.length < max) {
      return text
    } else {
      return text.substring(0, max) + "..."
    }
  }
}
