import axios from "axios";
import { BASE_URL, GENERAL_DATA_URL, DATA_URL, DATA_DETAILS_URL } from "../utils/constants.js";

async function getGeneralData(searchParametrs) {
  return await axios({
    baseURL: BASE_URL,
    url: GENERAL_DATA_URL,
    method: "post",
    headers: {
      Authorization: `Bearer ${localStorage.getItem('TOKEN')}`,
    },
    data: {
      "issueDateInterval": {
        "startDate": `${searchParametrs.startDate}`,
        "endDate": `${searchParametrs.endDate}`
      },
      "searchContext": {
        "targetSearchEntitiesContext": {
          "targetSearchEntities": [
            {
              "type": "company",
              "sparkId": null,
              "entityId": null,
              "inn": `${searchParametrs.inn}`,
              "maxFullness": true,
              "inBusinessNews": null
            }
          ],
          "onlyMainRole": `${searchParametrs.mainRole}`,
          "tonality": `${searchParametrs.tonality}`,
          "onlyWithRiskFactors": `${searchParametrs.riskFactors}`,
          "riskFactors": {
            "and": [],
            "or": [],
            "not": []
          },
          "themes": {
            "and": [],
            "or": [],
            "not": []
          }
        },
        "themesFilter": {
          "and": [],
          "or": [],
          "not": []
        }
      },
      "searchArea": {
        "includedSources": [],
        "excludedSources": [],
        "includedSourceGroups": [],
        "excludedSourceGroups": []
      },
      "attributeFilters": {
        "excludeTechNews": `${searchParametrs.technicalNews}`,
        "excludeAnnouncements": `${searchParametrs.announcements}`,
        "excludeDigests": `${searchParametrs.newsDigests}`
      },
      "similarMode": "duplicates",
      "limit": `${searchParametrs.documentCount}`,
      "sortType": "sourceInfluence",
      "sortDirectionType": "desc",
      "intervalType": "month",
      "histogramTypes": [
        "totalDocuments",
        "riskFactors"
      ]
    },
  }).then((res) => {
    return res
  });
}

async function getData(searchParametrs) {
  return await axios({
    baseURL: BASE_URL,
    url: DATA_URL,
    method: "post",
    headers: {
      Authorization: `Bearer ${localStorage.getItem('TOKEN')}`,
    },
    data: {
      "issueDateInterval": {
        "startDate": `${searchParametrs.startDate}`,
        "endDate": `${searchParametrs.endDate}`
      },
      "searchContext": {
        "targetSearchEntitiesContext": {
          "targetSearchEntities": [
            {
              "type": "company",
              "sparkId": null,
              "entityId": null,
              "inn": `${searchParametrs.inn}`,
              "maxFullness": true,
              "inBusinessNews": null
            }
          ],
          "onlyMainRole": `${searchParametrs.mainRole}`,
          "tonality": `${searchParametrs.tonality}`,
          "onlyWithRiskFactors": `${searchParametrs.riskFactors}`,
          "riskFactors": {
            "and": [],
            "or": [],
            "not": []
          },
          "themes": {
            "and": [],
            "or": [],
            "not": []
          }
        },
        "themesFilter": {
          "and": [],
          "or": [],
          "not": []
        }
      },
      "searchArea": {
        "includedSources": [],
        "excludedSources": [],
        "includedSourceGroups": [],
        "excludedSourceGroups": []
      },
      "attributeFilters": {
        "excludeTechNews": `${searchParametrs.technicalNews}`,
        "excludeAnnouncements": `${searchParametrs.announcements}`,
        "excludeDigests": `${searchParametrs.newsDigests}`
      },
      "similarMode": "duplicates",
      "limit": `${searchParametrs.documentCount}`,
      "sortType": "sourceInfluence",
      "sortDirectionType": "desc",
      "intervalType": "month",
      "histogramTypes": [
        "totalDocuments",
        "riskFactors"
      ]
    },
  }).then((res) => {
    return res;
  });
}

async function getDetailData(arrForRequest) {
  return await axios({
    baseURL: BASE_URL,
    url: DATA_DETAILS_URL,
    method: "post",
    headers: {
      Authorization: `Bearer ${localStorage.getItem('TOKEN')}`,
    },
    data: {
      "ids": arrForRequest
    },
  }).then((res) => {
    return res
  });
}

export { getGeneralData, getData, getDetailData }