export default {
    testEnvironment: "node",
    coveragePathIgnorePatterns: [
        "/node_modules/",
        "package.json",
        "package-lock.json"
    ],
    collectCoverageFrom: [
        "routes/**/*.{js,jsx}",
        "middleware/**/*.{js,jsx}",
        "models/**/*.{js,jsx}",
        "utils/**/*.{js,jsx}",
        "controllers/**/*.{js,jsx}",

    ],
    collectCoverage: true,
    transform: {
        "\\.js$": "<rootDir>/node_modules/babel-jest"
    }
};