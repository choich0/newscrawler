const _ = require("lodash");
const fs = require("fs");
const path = require("path");
const { format, utcToZonedTime } = require("date-fns-tz");
const { NewsCrawling } = require("./crawler");

async function crawlAndUpdate(outputPath, apiClient) {
  let prevData = {};
  const newsListPath = path.join(outputPath, "newslist.json");
  try {
    // 기존 크롤링한 값이 있다면 불러오기
    prevData = JSON.parse(fs.readFileSync(newsListPath, "utf-8"));
  } catch (e) {
    console.log("previous newslist not found");
  }

  const newsCralwer = await NewsCrawling();

  const newData = {
    newsList1: newsCralwer[0],
    newsList2: newsCralwer[1],
    newsList3: newsCralwer[2],
    newsList4: newsCralwer[3],
    newsList5: newsCralwer[4],
    newsList6: newsCralwer[5],
    newsList7: newsCralwer[6],
    newsList8: newsCralwer[7],
    newsList9: newsCralwer[8],
    newsList10: newsCralwer[9],
  };

  // 변경된 값이 없으면 아무 것도 하지 않음
  if (_.isEqual(newData, prevData)) {
    console.log("newsList has not been changed");
    return;
  }

  // 크롤링 된 최신 값을 파일에 저장해 둠
  fs.writeFileSync(newsListPath, JSON.stringify(newData));

  var newNewsList1 = newData.newsList1;
  var { nTitle, nDate, nLink } = newNewsList1;

  await apiClient.updateNewslist({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList2 = newData.newsList2;
  var { nTitle, nDate, nLink } = newNewsList2;

  await apiClient.updateNewslist({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList3 = newData.newsList3;
  var { nTitle, nDate, nLink } = newNewsList3;

  await apiClient.updateNewslist({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList4 = newData.newsList4;
  var { nTitle, nDate, nLink } = newNewsList4;

  await apiClient.updateNewslist({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList5 = newData.newsList5;
  var { nTitle, nDate, nLink } = newNewsList5;

  await apiClient.updateNewslist({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList6 = newData.newsList6;
  var { nTitle, nDate, nLink } = newNewsList6;

  await apiClient.updateNewslist({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList7 = newData.newsList7;
  var { nTitle, nDate, nLink } = newNewsList7;

  await apiClient.updateNewslist({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList8 = newData.newsList8;
  var { nTitle, nDate, nLink } = newNewsList8;

  await apiClient.updateNewslist({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList9 = newData.newsList9;
  var { nTitle, nDate, nLink } = newNewsList9;

  await apiClient.updateNewslist({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList10 = newData.newsList10;
  var { nTitle, nDate, nLink } = newNewsList10;

  await apiClient.updateNewslist({
    nTitle,
    nDate,
    nLink,
  });
}

module.exports = { crawlAndUpdate };