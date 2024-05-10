import { HttpParams } from '../types/http-types';

export abstract class HttpUtils {
	static toURLSearchParams = <T extends HttpParams>(params?: T): URLSearchParams | undefined => {
		if (params === undefined) {
			return undefined;
		}

		const searchParams = new URLSearchParams();

		for (const paramKey of Object.keys(params)) {
			let value = params[paramKey];
			if (value === undefined || value === '') {
				continue;
			}

			if (typeof value === 'boolean') {
				value = +value;
			}

			if (Array.isArray(value)) {
				for (const valueItem of value) {
					searchParams.append(`${paramKey}[]`, valueItem.toString());
				}
			} else {
				searchParams.append(paramKey, value.toString());
			}
		}

		return searchParams;
	};
}
