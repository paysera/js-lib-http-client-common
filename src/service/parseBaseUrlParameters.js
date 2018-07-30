import { ConfigurationError } from '../error';

/**
 * @param {string} baseUrl
 * @param {object} options
 * @return {string}
 */
export default function parseBaseUrlParameters(baseUrl, options) {
    let url = baseUrl;
    const expression = new RegExp('{([\\w|-|_]+)}', 'g');
    if (!expression.test(baseUrl)) {
        return url;
    }
    if (!Object.prototype.hasOwnProperty.call(options, 'urlParameters')) {
        throw new ConfigurationError('Found parameters in BaseUrl, but no urlParameters');
    }
    const { urlParameters } = options;
    expression.lastIndex = 0;
    let match;

    while ((match = expression.exec(baseUrl)) !== null) {
        if (!Object.prototype.hasOwnProperty.call(urlParameters, match[1])) {
            throw new ConfigurationError(`Found placeholder ${match[0]} in BaseUrl, but no value provided in urlParameters option`);
        }
        url = url.replace(match[0], urlParameters[match[1]]);
    }

    return url;
}
