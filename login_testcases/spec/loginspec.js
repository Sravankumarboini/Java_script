// spec/loginSpec.js
const { checkLogin, isPasswordStrong } = require("../login.js");

describe("Login Validation", function () {
  it("should fail if username or password is missing", function () {
    const res = checkLogin("", "");
    expect(res.success).toBeFalse();
    expect(res.message).toBe("Username and password are required.");
  });

  it("should fail if password is too short", function () {
    const res = checkLogin("admin", "short");
    expect(res.success).toBeFalse();
    expect(res.message).toContain("at least");
  });

  it("should fail if password is not strong enough", function () {
    const res = checkLogin("admin", "weakpass");
    expect(res.success).toBeFalse();
    expect(res.message).toBe("Password is not strong enough.");
  });

  it("should fail with wrong credentials", function () {
    const res = checkLogin("admin", "Wrong@123");
    expect(res.success).toBeFalse();
    expect(res.message).toBe("Invalid username or password.");
  });

  it("should succeed with correct credentials", function () {
    const res = checkLogin("admin", "Admin@123");
    expect(res.success).toBeTrue();
    expect(res.message).toBe("Login successful!");
  });
});

describe("Password Strength Checker", function () {
  it("should pass with a strong password", function () {
    expect(isPasswordStrong("Strong1@Pass")).toBeTrue();
  });

  it("should fail without uppercase letter", function () {
    expect(isPasswordStrong("weak1@pass")).toBeFalse();
  });

  it("should fail without special character", function () {
    expect(isPasswordStrong("Weak1234")).toBeFalse();
  });

  it("should fail without digit", function () {
    expect(isPasswordStrong("Weak@Pass")).toBeFalse();
  });
});
