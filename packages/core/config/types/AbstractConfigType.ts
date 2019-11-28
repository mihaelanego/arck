import { IConfigInput } from "./IConfigInput";

export class AbstractConfigType<T extends IConfigInput> {
  constructor(protected input: T) { }

  public printInput() {
    console.log(this.input);
  }
}