import { Builder, Capabilities, By } from "selenium-webdriver";

const chromedriver = require("chromedriver");

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

beforeAll(async () => {
  await driver.get("http://localhost:4000");
});

afterAll(async () => {
  await driver.quit();
});

test("I can start a game", async () => {
  let button = await (await driver).findElement(By.id("start-game"));
  await button.click();
});

test("place X in top left corner", async () => {
  let topLeft = await driver.findElement(By.id("cell-0"));
  await driver.sleep(1000);
  await topLeft.click();
  await driver.sleep(1000);
});
test("check that X was place in top left", async () => {
  let playerChar = await driver.findElement(By.id("cell-0")).getText();
  expect(playerChar).toBe("X");
  await driver.sleep(1000);
});

//computer move
test("check that O was place in in box right of top left corner", async () => {
  let playerChar = await driver.findElement(By.id("cell-1")).getText();
  expect(playerChar).toBe("O");
});

test("place X in top right corner", async () => {
  let topRight = await driver.findElement(By.id("cell-2"));
  await topRight.click();
  await driver.sleep(1000);
});
test("check that X was place in top right", async () => {
  let playerChar = await driver.findElement(By.id("cell-2")).getText();
  expect(playerChar).toBe("X");
  await driver.sleep(1000);
});

test("place X in bottom middle", async () => {
  let bottomMiddle = await driver.findElement(By.id("cell-7"));
  await bottomMiddle.click();
});

test("check that X was place in bottom middle", async () => {
  let playerChar = await driver.findElement(By.id("cell-7")).getText();
  expect(playerChar).toBe("X");
});
