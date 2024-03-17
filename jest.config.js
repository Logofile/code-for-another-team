// NPM dependencies
const merge = require("merge");
const tsPreset = require("ts-jest/jest-preset");

// Configuration
const config = merge.recursive(tsPreset, {
  moduleFileExtensions: ["js", "ts"],
  testMatch: ["**/test/**/*.test.ts"],
  preset: "ts-jest/presets/js-with-ts",
  moduleDirectories: ["node_modules", "src"],
  modulePaths: ["<rootDir>/src", "<rootDir>/test"],
  collectCoverageFrom: ["./src/**.ts"],
  coverageReporters: ["cobertura", "text-summary", "lcov"],
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  testTimeout: 10000,
});

module.exports = config;
