import i18n from 'i18next';
import ChainedBackend from 'i18next-chained-backend';
import HttpBackend from 'i18next-http-backend';
import ICU from 'i18next-icu';
import resourcesToBackend from 'i18next-resources-to-backend';
import { initReactI18next } from 'react-i18next';

export enum Language {
	En = 'en',
	Ru = 'ru',
}

i18n
	.use(ICU)
	.use(initReactI18next)
	.use(ChainedBackend)
	.init({
		backend: {
			backends: [
				HttpBackend,
				resourcesToBackend((language, namespace, callback) => {
					import(`./locales/${language}/${namespace}.json`)
						.then(resources => {
							callback(null, resources);
						})
						.catch(error => {
							callback(error, null);
						});
				}),
			],
		},
		debug: true,
		fallbackLng: Language.En,
		lng: Language.En,
		react: {
			useSuspense: false,
		},
	});

export { default } from 'i18next';
