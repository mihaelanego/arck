import { ShellWrap, Shell, Inject } from "@arck/core/di";
import { ConfigLoader } from "@arck/core/config";

@Shell
export class TestShell extends ShellWrap {
  constructor(
    private configLoader: ConfigLoader
  ) { super(); }

  public run() {
    console.log("this is shell!");
    console.log(this.configLoader.load());
  }
}