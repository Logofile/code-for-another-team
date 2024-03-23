// Local dependencies
import { ERROR_MESSAGES } from "../../src/constants";
import { execute } from "../test-utils";
// Test cases
describe("CLI", () => {
  it("Returns a help menu when one is requested", (done) => {
    execute(["--help"], (_, output) => {
      try {
        expect(output.match(/Help/i)).toBeTruthy();
      } catch (error) {
        return done(error);
      }
      done();
    });
  });
  describe("Fails when incompatible options are used together", () => {
    describe("Palette", () => {
      it("--grayscale and --duotone", (done) => {
        execute(["--grayscale", "--duotone"], (errorMessage, stdout, stderr) => {
          try {
            expect(   
              stderr.match(
                new RegExp(ERROR_MESSAGES.INCOMPATIBLE_COMMANDS_PALETTE, "i")
              )
            ).toBeTruthy();
          } catch (error) {
            return done(error);
          }
          done();
        });
      });
      it("--grayscale and --color", (done) => {
        execute(["--grayscale", "--color"], (error, stdout, stderr) => {
          // console.log('output', output);
          // console.log('errorMessage', stderr);
          console.log("bruh")
          console.log("bruh", ERROR_MESSAGES)
          console.log("bruh", ERROR_MESSAGES.INCOMPATIBLE_COMMANDS_PALETTE)
          console.log("bruh5", stderr.match(
            new RegExp(ERROR_MESSAGES.INCOMPATIBLE_COMMANDS_PALETTE, "i")
          ))
            try {
            expect(
              stderr.match(
                new RegExp(ERROR_MESSAGES.INCOMPATIBLE_COMMANDS_PALETTE, "i")
              )
            ).toBeTruthy();
          } catch (error) {
            return done(error);
          }
          done();
        });
      });
      it("--duotone and --color", (done) => {
        execute(["--duotone", "--color"], (error, stdout, stderr) => {
          try {
            expect(
              stderr.match(
                new RegExp(ERROR_MESSAGES.INCOMPATIBLE_COMMANDS_PALETTE, "i")
              )
            ).toBeTruthy();
          } catch (error) {
            return done(error);
          }
          done();
        });
      });
    });
    describe("Rotation", () => {
      it("--rotate-90d and --rotate-180d", (done) => {
        execute(["--rotate-90d", "--rotate-180d"], (error, stdout, stderr) => {
          try {
            expect(
              stderr.match(
                new RegExp(ERROR_MESSAGES.INCOMPATIBLE_COMMANDS_ROTATION, "i")
              )
            ).toBeTruthy();
          } catch (error) {
            return done(error);
          }
          done();
        });
      });
      it("--rotate-180d and --rotate-270d", (done) => {
        execute(["--rotate-180d", "--rotate-270d"], (error, stdout, stderr) => {
          try {
            expect(
              stderr.match(
                new RegExp(ERROR_MESSAGES.INCOMPATIBLE_COMMANDS_ROTATION, "i")
              )
            ).toBeTruthy();
          } catch (error) {
            return done(error);
          }
          done();
        });
      });
      it("--rotate-90d and --rotate-270d", (done) => {
        execute(["--rotate-90d", "--rotate-270d"], (error, stdout, stderr) => {
          try {
            expect(
              stderr.match(
                new RegExp(ERROR_MESSAGES.INCOMPATIBLE_COMMANDS_ROTATION, "i")
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
  describe("Fails when invalid values are used with CLI options", () => {
    it("Resolution is too large", (done) => {
      execute(["--resolution 500x500"], (error, stdout, stderr) => {
        try {
          expect(
            stderr.match(
              new RegExp(ERROR_MESSAGES.UNSUPPORTED_RESOLUTION, "i")
            )
          ).toBeTruthy();
        } catch (error) {
          return done(error);
        }
        done();
      });
    });
    it("Resolution has a bad format", (done) => {
      execute(["--resolution 500"], (error, stdout, stderr) => {
        try {
          expect(
            stderr.match(
              new RegExp(ERROR_MESSAGES.UNSUPPORTED_RESOLUTION, "i")
            )
          ).toBeTruthy();
        } catch (error) {
          return done(error);
        }
        done();
      });
    });
    it("Invalid block Id 0", (done) => {
      execute(["--focus-on-block 0"], (error, stdout, stderr) => {
        try {
          expect(
            stderr.match(new RegExp(ERROR_MESSAGES.INVALID_BLOCK_ID, "i"))
          ).toBeTruthy();
        } catch (error) {
          return done(error);
        }
        done();
      });
    });
    it("Invalid block Id 10", (done) => {
      execute(["--focus-on-block 10"], (error, stdout, stderr) => {
        try {
          expect(
            stderr.match(new RegExp(ERROR_MESSAGES.INVALID_BLOCK_ID, "i"))
          ).toBeTruthy();
        } catch (error) {
          return done(error);
        }
        done();
      });
    });
    it("Invalid block count 0", (done) => {
      execute(["--divide-into-blocks 0"], (error, stdout, stderr) => {
        try {
          expect(
            stderr.match(
              new RegExp(ERROR_MESSAGES.INVALID_BLOCK_COUNT, "i")
            )
          ).toBeTruthy();
        } catch (error) {
          return done(error);
        }
        done();
      });
    });
    it("Invalid block count 10", (done) => {
      execute(["--divide-into-blocks 10"], (error, stdout, stderr) => {
        try {
          expect(
            stderr.match(
              new RegExp(ERROR_MESSAGES.INVALID_BLOCK_COUNT, "i")
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