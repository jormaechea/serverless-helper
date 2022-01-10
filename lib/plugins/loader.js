'use strict';

const logger = require('lllog')();

const loadCorePlugins = () => require('./core'); // eslint-disable-line global-require

module.exports = ({ hooks }) => {

	if(!hooks.length)
		return {};

	logger.debug('Loading plugins...');

	const plugins = [...new Set(hooks.map(([hookName]) => hookName.split('.')[0]))];

	logger.debug(`The following plugins will be loaded: ${plugins.join(', ')}`);

	return plugins.reduce((acum, pluginName) => {
		try {

			const plugin = pluginName === 'core' ? loadCorePlugins() : require(`sls-helper-plugin-${pluginName}`); // eslint-disable-line

			return {
				...acum,
				[pluginName]: plugin
			};
		} catch(e) {

			logger.error(`Error loading plugin ${pluginName}`);
			logger.error(`Make sure to install it running \`npm i -D sls-helper-plugin-${pluginName}\``);

			e.message = `Error loading plugin ${pluginName}: ${e.message}`;
			throw e;
		}
	}, {});
};
