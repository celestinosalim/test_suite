Feature("Finding user");

let input = locate("input").withAttr({ placeholder: "Search GitHub" });

Scenario("test finding a user", async I => {
  await I.amOnPage("https://github.com");
  await I.fillField(input, "celestinosalim");
  await I.pressKey("Enter");
  await I.amOnPage("https://github.com/search?q=celestinosalim");
  await I.click("Users");
  await I.see("celestinosalim");
  await I.click("celestinosalim");
  await I.see("VsualResume");
  await I.click("VsualResume");
  await I.see("http://www.vsualresume.com/");
  await I.click("http://www.vsualresume.com/");
});
