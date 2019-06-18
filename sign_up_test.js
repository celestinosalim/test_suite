let button = locate(
  "button .btn-mktg btn-primary-mktg btn-large-mktg f4 btn-block my-3"
);
let span = locate("span").withAttr({ css: ".text-red text-bold" });

Feature("Sign Up From HomePage");
Scenario("Verify if a user cannot sign up with Bad Credentials", async I => {
  I.amOnPage("https://github.com");
  I.fillField("Username", "123");
  I.see("Username 123 is already taken.");
  I.fillField("Email", "Celestino123");
  I.see("Email is invalid or already taken");
  I.fillField("Password", "Alex12356");
  I.seeElement(".text-green");
  I.click("Sign up for GitHub");
  I.see("There were problems creating your account.");
});
