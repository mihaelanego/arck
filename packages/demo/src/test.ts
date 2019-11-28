import "@arck/core";

import { ShellRunner } from "@arck/core/di";

import { TestShell } from "./shells/TestShell";

ShellRunner.run(TestShell);