import { IConfigInput } from "./IConfigInput";
import { AbstractConfigType } from "./AbstractConfigType";
import { DataSource } from "./DataSource";

export interface ConfigInput extends IConfigInput<DataSource[]> {
  name?: string;
}

export class Config extends AbstractConfigType<ConfigInput> {
  constructor(input: ConfigInput) {
    super(input);

    this.input.name == input.name ?? "default";
  }
}