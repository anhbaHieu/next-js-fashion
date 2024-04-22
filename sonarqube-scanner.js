const scanner = require("sonarqube-scanner");
scanner(
  {
    serverUrl: "http://localhost:9000",
    options: {
      "sonar.login": "admin",
      "sonar.projectKey": "fashion",
      "sonar.password": "12345",
      "sonar.projectName": "fashion",
      "sonar.projectDescription": "Test Sonar check quality",
      "sonar.sourceEncoding": "UTF-8",
      "sonar.sources": "./src",
      "sonar.test.inclusions":
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx},./src/components/**/*.{js,ts,jsx,tsx,mdx},./src/app/**/*.{js,ts,jsx,tsx,mdx}",
      "sonar.exclusions":
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx},./src/components/**/*.{js,ts,jsx,tsx,mdx},./src/app/**/*.{js,ts,jsx,tsx,mdx}",
      "sonar.tests": "./src",
      "sonar.javascript.lcov.reportPaths": "coverage/lcov.info",
    },
  },
  () => process.exit()
);
