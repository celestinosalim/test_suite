Feature("Sign up_test");

Scenario("test sign up", I => {
  I.amOnPage("https://github.com");
  I.see("GitHub");
  I.click("Sign up");
  I.see("Join GitHub");
  I.fillField("Username", "alex");
  I.fillField("Email address", "alex@alex.com");
  I.fillField("Password", "Alex123");
  I.click("Verify");
  I.click("Create an account");
});
