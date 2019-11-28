import { CustomItem, CustomItemInput } from "@arck/core/config";

interface TestConfigInput extends CustomItemInput {
  caca?: number;
}

export class TestConfig extends CustomItem<TestConfigInput> {
  constructor(input: TestConfigInput) {
    super(input);

    console.log(input);
  }
}