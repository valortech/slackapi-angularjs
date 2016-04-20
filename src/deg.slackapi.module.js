'use strict';

(function (angular) {
    
	var slackApi = angular.module("Deg.SlackApi", []);
	slackApi.value("slackConfig", {
		OAuthUrl: "https://slack.com/oauth/authorize",
		ApiUrl: "https://slack.com/api/",
		DefaultToken: "xoxb-35865586402-S794qTDYJXLepR0EdLphJiTG"
	});

}(angular));
