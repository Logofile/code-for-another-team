// Local dependencies
import { ERROR_MESSAGES } from "../../src/constants";
import { execute } from "../test-utils";

// Constants
const INVALID_FILES = [
  "test/test-assets/sample.txt",
  "test/test-assets/images/sample.gif",
  "test/test-assets/images/sample.jpg",
  "test/test-assets/images/sample.jpeg",
  "test/test-assets/images/sample.png",
  "test/test-assets/images/sample.png.saved.as.bmp",
  "test/test-assets/images/sample.bmp.saved.as.png",
];

// Test cases
describe("File type verification", () => {
  describe("Fails when the filetype is not supported", () => {
    INVALID_FILES.forEach((filePath, index) => {
      it(`test point ${index + 1}`, (done) => {
        execute([`-i ${filePath}`], (errorMessage) => {
          try {
            expect(
              errorMessage.match(
                new RegExp(ERROR_MESSAGES.INVALID_FILE_TYPE, "i")
              )
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
