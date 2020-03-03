import { DateTime } from "luxon";

export class TestClass {
  constructor(params) {
    this.thing = params.thing;
    this.createdAt = params.createdAt;
  }

  thing: string;

  createdAt: Date;

  static fromJSON(params) {
    return new TestClass({ thing: params.thing, createdAt: DateTime.fromISO(params.createdAt).toJSDate() });
  }
}
