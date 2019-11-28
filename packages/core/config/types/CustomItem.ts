import { AbstractConfigType } from "./AbstractConfigType";
import { IConfigInput } from "./IConfigInput";

export interface CustomItemInput<T = any> extends IConfigInput<T> { }

export abstract class CustomItem<T extends CustomItemInput> extends AbstractConfigType<T> { }