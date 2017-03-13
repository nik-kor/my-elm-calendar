var CLIENT_ID = '';
var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];
var SCOPES = "https://www.googleapis.com/auth/calendar.readonly";

function handleClientLoad() {
	gapi.load('client:auth2', initClient);
}

function initClient() {
	gapi.client.init({
		discoveryDocs: DISCOVERY_DOCS,
		clientId: CLIENT_ID,
		scope: SCOPES
	}).then(function () {
		// Listen for sign-in state changes.
		gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);
		// check if auth persitable between requests
		updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
		// gapi.auth2.getAuthInstance().signIn();
	});
}


function updateSigninStatus(isSignedIn) {
	if (isSignedIn) {
		console.log('IS SIGNED IN');
	} else {
		console.log('IS NOT_SIGNED IN');
	}
}
