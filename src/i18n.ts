import i18n from 'i18next';
import HttpBackend from 'i18next-http-backend';
import ICU from 'i18next-icu';
import { initReactI18next } from 'react-i18next';

export enum Language {
	En = 'en',
	Ru = 'ru',
}

i18n
	.use(ICU)
	.use(initReactI18next)
	.use(HttpBackend)
	.init({
		backend: {
			loadPath: '/locales/{{lng}}/{{ns}}.json',
		},
		debug: true,
		defaultNS: 'languages',
		fallbackLng: Language.En,
		lng: Language.En,
		ns: ['languages'],
		react: {
			useSuspense: true,
		},
	});

export { default } from 'i18next';
