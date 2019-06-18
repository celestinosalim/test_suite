// Feature("Sign In Test Bad Credentials");
// let button = locate(".btn-link");
// let signIn = locate("a").withAttr({ href: "/login" });
// let submit = locate("input").withAttr({ name: "commit" });
// Scenario(
//   "Verify if a user cannot login with a valid username and an invalid password.",
//   async I => {
//     I.amOnPage("https://github.com");
//     await I.click(button);
//     await I.click(signIn);
//     I.fillField("Username", "alex");
//     I.fillField("Password", "Alex123");
//     I.click(submit);
//     I.see("Incorrect username or password.", ".flash-error");
//   }
// );

Feature("Forgot Password");
let button = locate("input").withAttr({ name: "commit" });
let forgot = locate("a.label-link");
let input = locate("input#email_field");
Scenario("Verify the ‘Forgot Password’ functionality.", async I => {
  await I.amOnPage(
    "https://github.com/login?return_to=%2Fjoin%3Fsource%3Dheader-home"
  );
  await I.click(forgot);
  await I.fillField(input, "helloworld@gmail.com");
  await I.click(button);
  await I.see(
    "Check your email for a link to reset your password. If it doesn’t appear within a few minutes, check your spam folder."
  );
});
