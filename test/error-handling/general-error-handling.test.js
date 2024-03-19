// Local dependencies
import { ERROR_MESSAGES } from "../../src/constants";
import { execute } from "../test-utils";

// Constants
const FILES = [
  {
    filePath: "test/test-assets/images/does.not.exist",
    errorMessage: ERROR_MESSAGES.FILE_NOT_ACCESSIBLE,
  },
];

// Test cases
describe("Error handling", () => {
  it("Fails when the file is not found or not accessible", (done) => {
    const { filePath, errorMessage } = FILES[0];
    execute([`-i ${filePath}`], (errorMessage) => {
      try {
        expect(errorMessage.match(new RegExp(errorMessage, "i"))).toBeTruthy();
      } catch (error) {
        return done(error);
      }
      done();
    });
  });
});
