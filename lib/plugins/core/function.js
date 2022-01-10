'use strict';

module.exports = ({ functions, ...serviceConfig }, {
	functionName,
	handler,
	description,
	timeout,
	events,
	package: pkg
}) => {

	const functionConfiguration = {
		handler
	};

	if(description)
		functionConfiguration.description = description;

	if(events) {

		if(!Array.isArray(events))
			throw new Error('Invalid events in function hook. Must be an array.');

		functionConfiguration.events = events;
	}

	if(timeout)
		functionConfiguration.timeout = timeout;

	if(pkg && pkg.include)
		functionConfiguration.package = { include: pkg.include };

	return {
		...serviceConfig,
		functions: [
			...(functions || []),
			{
				[functionName]: {
					...functionConfiguration,
					name: `\${self:custom.serviceTitle}-\${self:custom.stage}-${functionName}`
				},
				[`${functionName}Old`]: functionConfiguration
			}
		]
	};
};
