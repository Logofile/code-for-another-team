// Local dependencies
import { execute } from "../test-utils";

// Constants
const ACCEPTABLE_DELTA = 0.2; // 20%
const FILES = [
  {
    filePath: "test/test-assets/images/extra-wide.bmp",
    expectedRatio: 371 / 136,
  },
  { filePath: "test/test-assets/images/wide.bmp", expectedRatio: 300 / 168 },
  { filePath: "test/test-assets/images/sample.bmp", expectedRatio: 189 / 267 },
  {
    filePath: "test/test-assets/images/tall-small-res.bmp",
    expectedRatio: 339 / 480,
  },
  {
    filePath: "test/test-assets/images/tall-medium-res.bmp",
    expectedRatio: 763 / 1079,
  },
];

// Test cases
describe("Scaling", () => {
  describe("Scales the output image by preserving the aspect ratio", () => {
    FILES.forEach(({ filePath, expectedRatio }, index) => {
      it(`test point ${index + 1}`, (done) => {
        execute([`-i ${filePath}`], (_, output) => {
          const lines = output.split("\n");
          const width = lines[0].length;
          const height = lines.length;
          const aspectRatio = width / height;
          try {
            expect(
              Math.abs(aspectRatio - expectedRatio) < ACCEPTABLE_DELTA
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
