'use strict';

const INTEGRATION = 'lambda-proxy';

const pathParameterRegex = new RegExp('{([a-z0-9_-]+)}', 'ig');

const getPathParameters = path => {
	const matches = path.match(pathParameterRegex);

	if(!matches)
		return;

	return matches.reduce((acum, match) => {
		return {
			...acum,
			[match.replace(/[{}]/g, '')]: true
		};
	}, {});
};

const buildRequest = ({
	pathParameters,
	queryParameters,
	requestHeaders
}) => {

	const parameters = {};

	if(pathParameters)
		parameters.paths = pathParameters;

	if(queryParameters)
		parameters.querystrings = queryParameters;

	if(requestHeaders)
		parameters.headers = requestHeaders;

	if(Object.keys(parameters).length === 0)
		return;

	return { parameters };
};

module.exports = ({
	functionName,
	handler,
	description,
	path,
	method,
	useApiKey,
	queryParameters,
	requestHeaders,
	cors
}) => {

	const pathParameters = getPathParameters(path);

	const request = buildRequest({ pathParameters, queryParameters, requestHeaders });

	const event = {
		integration: INTEGRATION,
		path,
		method,
		private: !!useApiKey
	};

	if(request)
		event.request = request;

	if(cors)
		event.cors = cors;

	const functionConfiguration = {
		handler,
		events: [{ http: event }]
	};

	if(description)
		functionConfiguration.description = description;

	return { [functionName]: functionConfiguration };
};