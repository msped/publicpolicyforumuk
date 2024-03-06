const nextJest = require('next/jest')
const createJestConfig = nextJest({
    dir: "./"
})

const customJestConfig = {
    moduleDirectors: ["node_modules", "<rootDir>/"],
    testEnvironment: "jest-environment-jsdom",
    collectCoverage: true,
    coverageReporters: [
        "html"
    ]
}

module.exports = createJestConfig(customJestConfig);