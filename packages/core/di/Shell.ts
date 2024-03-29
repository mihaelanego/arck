import Container, { Service } from "./Container";

export const Shell = Service();

export abstract class ShellWrap<T = void, X = void> {
  abstract run(arg?: X): Promise<T> | T;
}

export class ShellRunner {
  public static run<T, X, Q extends ShellWrap<T, X>>(ctor: { new(...args: any[]): Q }, arg?: X): Promise<T> | T {
    let shell = Container.get(ctor);
    return shell.run(arg);
  }
}