Feature("Finding user");

let input = locate("input").withAttr({ placeholder: "Search GitHub" });
let button = locate(".btn-link");
let a = locate("a").withAttr({ href: "/celestinosalim" });

Scenario("Verify if I can find a user without log in.", async I => {
  await I.amOnPage("https://github.com/");
  await I.click(button);
  await I.fillField(input, "celestinosalim");
  await I.pressKey("Enter");
  await I.see("Users");
  await I.click("Users");
  await I.click(a);
});
