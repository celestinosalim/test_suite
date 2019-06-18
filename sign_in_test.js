Feature("Sign In Test Bad Credentials");

let signIn = locate("a").withAttr({ href: "/login" });
let submit = locate("input").withAttr({ name: "commit" });
Scenario(
  "Verify if a user cannot login with a valid username and an invalid password.",
  async I => {
    I.amOnPage("https://github.com");
    await I.click(button);
    await I.click(signIn);
    I.fillField("Username", "alex");
    I.fillField("Password", "Alex123");
    I.click(submit);
    I.see("Incorrect username or password.", ".flash-error");
  }
);
