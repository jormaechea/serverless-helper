'use strict';

module.exports = ({ resources, ...serviceConfig }, { name, resource }) => {

	if(!name)
		throw new Error('Missing name in janis.resource hook');

	if(typeof name !== 'string')
		throw new Error('Invalid name in janis.resource hook. Must be a string');

	if(!resource)
		throw new Error('Missing resource in janis.resource hook');

	if(typeof resource !== 'object' || Array.isArray(resource))
		throw new Error('Invalid resource in janis.resource hook. Must be an object');

	if(!Object.keys(resource).length)
		throw new Error('Empty resource in janis.resource hook');

	const currentResources = resources?.Resources || {};

	const newResources = Array.isArray(currentResources)
		? [...currentResources, { [name]: resource }]
		: { ...currentResources, [name]: resource };

	return {
		...serviceConfig,
		resources: {
			...resources,
			Resources: newResources
		}
	};
};
