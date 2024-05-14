import { test, expect } from "@playwright/test";

test("web worker消息测试", async ({ page }) => {
  await page.goto("/");
  const workermsg = await page.getByTestId("msg").innerHTML();
  expect(workermsg).toBe("worker data1");
});
