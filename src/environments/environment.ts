// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  hmr: false,
  // apiUrl: 'https://staging-usermanagement.azurewebsites.net/api',
  // apiUrl: 'https://uattms-usermanagement.azurewebsites.net/api',
  // apiUrl: 'https://pqtmsprod.azurewebsites.net/api',

  //Stage-Function App URL
  // apiHelpUrl :'https://staging-tmshelp.azurewebsites.net/api',
  // apiReportUrl :'https://staging-tmsreports.azurewebsites.net/api',
	// apiSettingsUrl :'https://staging-tmssettings.azurewebsites.net/api',
	// apiWorklogsUrl :'https://staging-tmsworklogs.azurewebsites.net/api',
	// apiUserManagementUrl :'https://staging-usermanagement.azurewebsites.net/api',

  //UAT-Function App URL
  // apiHelpUrl :'https://uat-tmshelp.azurewebsites.net/api',
  // apiReportUrl :'https://uat-tmsreports.azurewebsites.net/api',
	// apiSettingsUrl :'https://uat-tmssettings.azurewebsites.net/api',
	// apiWorklogsUrl :'https://uat-tmsworklogs.azurewebsites.net/api',
	// apiUserManagementUrl :'https://uattms-usermanagement.azurewebsites.net/api',

  //Prod-Function App URL
  apiHelpUrl :'https://prod-tmshelp.azurewebsites.net/api',
  apiReportUrl :'https://prod-tmsreports.azurewebsites.net/api',
	apiSettingsUrl :'https://prod-tmssettings.azurewebsites.net/api',
	apiWorklogsUrl :'https://prod-tmsworklogs.azurewebsites.net/api',
	apiUserManagementUrl :'https://prod-tmsusermanagement.azurewebsites.net/api',
  
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
