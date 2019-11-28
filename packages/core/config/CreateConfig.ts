import { IConfigInput } from "./types/IConfigInput";
import { AbstractConfigType } from "./types/AbstractConfigType";

export function createConfig<Q extends IConfigInput, T extends AbstractConfigType<Q>>(ctor: { new(input: Q): T }, config: Q, ...children: any[]): T {
  config = config ?? {} as any;

  config.children = children;
  return new ctor(config);
}