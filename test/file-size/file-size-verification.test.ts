// Local dependencies
import { ERROR_MESSAGES } from "../../src/constants";
import { execute } from "../test-utils";

// Constants
const FILES_TOO_LARGE = ["test/test-assets/images/tall-large-file.bmp"];

// Test cases
describe("File size verification", () => {
  describe("Fails when the file size is too large", () => {
    FILES_TOO_LARGE.forEach((filePath, index) => {
      it(`test point ${index + 1}`, (done) => {
        execute([`-i ${filePath}`], (errorMessage, stdout, stderr) => {
          try {
            expect(
              stderr.match(new RegExp(ERROR_MESSAGES.FILE_TOO_LARGE, "i"))
            ).toBeTruthy();
          } catch (error) {
            return done(error);
          }
          done();
        });
      });
    });
  });
});
