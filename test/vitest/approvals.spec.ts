import { execSync } from "node:child_process";

describe("Gilded Rose Approval", () => {
  it("should thirtyDays", () => {
    const consoleOutput = execSync(
      "ts-node test/golden-master-text-test.ts 30",
      { encoding: "utf-8" }
    );

    expect(consoleOutput).toMatchSnapshot();
  });
});
