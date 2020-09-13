$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/java/Scenario1.feature");
formatter.feature({
  "line": 2,
  "name": "Scenario1",
  "description": "",
  "id": "scenario1",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@test"
    }
  ]
});
formatter.scenario({
  "line": 3,
  "name": "Verify that Facebook, Twitter, Google+ and Youtube buttons are displayed in the footer.",
  "description": "",
  "id": "scenario1;verify-that-facebook,-twitter,-google+-and-youtube-buttons-are-displayed-in-the-footer.",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User open automationpractice page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User verify if buttons are displayed in the footer",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});