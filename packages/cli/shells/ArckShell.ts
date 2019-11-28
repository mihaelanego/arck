import { Shell, ShellWrap, Inject } from "@arck/core/di";
import { ConfigLoader } from "@arck/core/config";

@Shell
export class ArckShell extends ShellWrap {
  @Inject() private configLoader?: ConfigLoader;

  public run() {
    console.log("hello!!");
    console.log(this.configLoader?.load());
  }
}