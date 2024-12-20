const CURRENT_HERITAGE_INFO_DETAIL_URL =
  "https://www.cha.go.kr/cha/SearchKindOpenapiDt.do";
const FESTIVAL_API_URL =
  "http://www.cha.go.kr/cha/openapi/selectEventListOpenapi.do";

const Updated_API_URL = "http://localhost:8000/api/show-favorites";

/**
 * Builds a heritage detail URL based on the given parameters.
 * @param {string} ccbaKdcd - The type code of the cultural heritage.
 * @param {string} ccbaAsno - The serial number of the cultural heritage.
 * @param {string} ccbaCtcd - The regional code of the cultural heritage.
 * @returns {string} - The constructed URL for the heritage detail API.
 */
const heritageInfo_Url = (ccbaKdcd, ccbaAsno, ccbaCtcd) =>
  `${CURRENT_HERITAGE_INFO_DETAIL_URL}?ccbaKdcd=${ccbaKdcd}&ccbaAsno=${ccbaAsno}&ccbaCtcd=${ccbaCtcd}`;

/**
 * Builds a festival API URL based on the given year and month.
 * @param {string} searchYear - The year to search for festivals.
 * @param {string} searchMonth - The month to search for festivals.
 * @returns {string} - The constructed URL for the festival API.
 */
const festivalInfo_Url = (searchYear, searchMonth) =>
  `${FESTIVAL_API_URL}?searchYear=${searchYear}&searchMonth=${searchMonth}`;

// const festivalInfo_Url = (searchYear, searchMonth, limit = 3) =>
//   `${FESTIVAL_API_URL}?searchYear=${searchYear}&searchMonth=${searchMonth}&limit=${limit}`;

module.exports = { heritageInfo_Url, festivalInfo_Url };
