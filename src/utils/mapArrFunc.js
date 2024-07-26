import { parseDate } from './parseDate';

export const mapArrFunc = (arr) => {
  if (!arr || !arr.length) {
    return [];
  }

  const resArr = arr[0].data.map(dataItem => {
    const newItem = {
      date: parseDate(dataItem.date),
      totalValue: 0,
      riskValue: 0,
    };

    if (arr[0].histogramType === "totalDocuments") {
      newItem.totalValue = dataItem.value;
    } else if (arr[0].histogramType === "riskFactors") {
      newItem.riskValue = dataItem.value;
    }

    return newItem;
  });

  if (arr[1]) {
    resArr.forEach((resItem, index) => {
      if (arr[0].histogramType === "totalDocuments") {
        resItem.riskValue = arr[1].data[index].value;
      } else if (arr[0].histogramType === "riskFactors") {
        resItem.totalValue = arr[1].data[index].value;
      }
    });
  }

  return resArr;
};
