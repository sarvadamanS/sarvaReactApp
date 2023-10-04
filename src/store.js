//   counter: 1,
//   dataToLoad: {
//     apiMode: "country",
//     apiUrl: `https://restcountries.com/v3.1/name/canada`,
//     args: null,
//   },
//   dataReceivedBack: [
//     {
//       name: {
//         common: "Canada",
//         official: "Canada",
//         nativeName: {
//           eng: {
//             official: "Canada",
//             common: "Canada",
//           },
//           fra: {
//             official: "Canada",
//             common: "Canada",
//           },
//         },
//       },
//       tld: [".ca"],
//       cca2: "CA",
//       ccn3: "124",
//       cca3: "CAN",
//       cioc: "CAN",
//       independent: true,
//       status: "officially-assigned",
//       unMember: true,
//       currencies: {
//         CAD: {
//           name: "Canadian dollar",
//           symbol: "$",
//         },
//       },
//       idd: {
//         root: "+1",
//         suffixes: [""],
//       },
//       capital: ["Ottawa"],
//       altSpellings: ["CA"],
//       region: "Americas",
//       subregion: "North America",
//       languages: {
//         eng: "English",
//         fra: "French",
//       },
//       translations: {
//         ara: {
//           official: "كندا",
//           common: "كندا",
//         },
//         bre: {
//           official: "Kanada",
//           common: "Kanada",
//         },
//         ces: {
//           official: "Kanada",
//           common: "Kanada",
//         },
//         cym: {
//           official: "Canada",
//           common: "Canada",
//         },
//         deu: {
//           official: "Kanada",
//           common: "Kanada",
//         },
//         est: {
//           official: "Kanada",
//           common: "Kanada",
//         },
//         fin: {
//           official: "Kanada",
//           common: "Kanada",
//         },
//         fra: {
//           official: "Canada",
//           common: "Canada",
//         },
//         hrv: {
//           official: "Kanada",
//           common: "Kanada",
//         },
//         hun: {
//           official: "Kanada",
//           common: "Kanada",
//         },
//         ita: {
//           official: "Canada",
//           common: "Canada",
//         },
//         jpn: {
//           official: "カナダ",
//           common: "カナダ",
//         },
//         kor: {
//           official: "캐나다",
//           common: "캐나다",
//         },
//         nld: {
//           official: "Canada",
//           common: "Canada",
//         },
//         per: {
//           official: "کانادا",
//           common: "کانادا",
//         },
//         pol: {
//           official: "Kanada",
//           common: "Kanada",
//         },
//         por: {
//           official: "Canadá",
//           common: "Canadá",
//         },
//         rus: {
//           official: "Канада",
//           common: "Канада",
//         },
//         slk: {
//           official: "Kanada",
//           common: "Kanada",
//         },
//         spa: {
//           official: "Canadá",
//           common: "Canadá",
//         },
//         srp: {
//           official: "Канада",
//           common: "Канада",
//         },
//         swe: {
//           official: "Kanada",
//           common: "Kanada",
//         },
//         tur: {
//           official: "Kanada",
//           common: "Kanada",
//         },
//         urd: {
//           official: "کینیڈا",
//           common: "کینیڈا",
//         },
//         zho: {
//           official: "加拿大",
//           common: "加拿大",
//         },
//       },
//       latlng: [60, -95],
//       landlocked: false,
//       borders: ["USA"],
//       area: 9984670,
//       demonyms: {
//         eng: {
//           f: "Canadian",
//           m: "Canadian",
//         },
//         fra: {
//           f: "Canadienne",
//           m: "Canadien",
//         },
//       },
//       flag: "🇨🇦",
//       maps: {
//         googleMaps: "https://goo.gl/maps/jmEVLugreeqiZXxbA",
//         openStreetMaps: "https://www.openstreetmap.org/relation/1428125",
//       },
//       population: 38005238,
//       gini: {
//         2017: 33.3,
//       },
//       fifa: "CAN",
//       car: {
//         signs: ["CDN"],
//         side: "right",
//       },
//       timezones: [
//         "UTC-08:00",
//         "UTC-07:00",
//         "UTC-06:00",
//         "UTC-05:00",
//         "UTC-04:00",
//         "UTC-03:30",
//       ],
//       continents: ["North America"],
//       flags: {
//         png: "https://flagcdn.com/w320/ca.png",
//         svg: "https://flagcdn.com/ca.svg",
//         alt: "The flag of Canada is composed of a red vertical band on the hoist and fly sides and a central white square that is twice the width of the vertical bands. A large eleven-pointed red maple leaf is centered in the white square.",
//       },
//       coatOfArms: {
//         png: "https://mainfacts.com/media/images/coats_of_arms/ca.png",
//         svg: "https://mainfacts.com/media/images/coats_of_arms/ca.svg",
//       },
//       startOfWeek: "sunday",
//       capitalInfo: {
//         latlng: [45.42, -75.7],
//       },
//       postalCode: {
//         format: "@#@ #@#",
//         regex:
//           "^([ABCEGHJKLMNPRSTVXY]\\d[ABCEGHJKLMNPRSTVWXYZ]) ?(\\d[ABCEGHJKLMNPRSTVWXYZ]\\d)$",
//       },
//     },
//     "country",
//   ],
// });
import { configureStore } from "@reduxjs/toolkit";
import apiDataReducer from "./slices/apiDataSlice";
import recievedDataReducer from "./slices/recievedDataSlice";
export const store = configureStore({
  reducer: { apiData: apiDataReducer, recievedData: recievedDataReducer },
});
