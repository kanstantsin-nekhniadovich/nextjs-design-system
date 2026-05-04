import type { Config } from "jest";

const config: Config = {
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(ts|tsx)$": [
      "ts-jest",
      {
        tsconfig: "<rootDir>/tsconfig.json",
      },
    ],
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "^.+\\.module\\.css$": "<rootDir>/jest.styleMock.ts",
    "^.+\\.css$": "<rootDir>/jest.styleMock.ts",
  },
};

export default config;
