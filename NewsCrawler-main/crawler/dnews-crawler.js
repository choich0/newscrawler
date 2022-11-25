const axios = require("axios");
const cheerio = require("cheerio");
const iconv = require('iconv-lite');

const getDnewsStd = async () => {
    try {
        const dnewsStdHtml = (
            await axios.get("https://m.dnews.co.kr/m_home/dnews_sec2_S2N1.html", {responseType: "arraybuffer"})
        );
        return dnewsStdHtml;
    } catch (e) {
        console.log(e);
    }
};

const DnewsSteCrawling = async() => {
    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0; //nodejs 에서 https 접속시 오류 해결
    const kldConHtml = await getDnewsStd();
    const content = iconv.decode(kldConHtml.data, "utf-8").toString() //한글 인코딩
    const $ = cheerio.load(content);

    let news = [];
    for (var i = 1; i < 11; i++) {
        const list_text_inner_arr = $(
            "#container > div > div.baseBox3 > div > ul:nth-child(1) > li:nth-child(" + i + ")"
        ).toArray();              
        
        list_text_inner_arr.forEach((li) => {
            const title = $(li).find(".tit"); 
            const path = $(li).find("a").first().attr("href");
            const dateStr = $(li).find(".date");
            const date = dateStr.text().replace(/[^0-9, -]/g, "")

            news.push({
                nTitle: title.text().trim(),
                nDate: date.trim().substring(0, 10),
                nLink: `https://m.dnews.co.kr/${path}`
            });
        });
    };
    return news;
}

const getDnewsEng = async () => {
    try {
        const dnewsStdHtml = (
            await axios.get("https://m.dnews.co.kr/m_home/dnews_sec2_S2N5.html", {responseType: "arraybuffer"})
        );
        return dnewsStdHtml;
    } catch (e) {
        console.log(e);
    }
};

const DnewsEngCrawling = async() => {
    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0; //nodejs 에서 https 접속시 오류 해결
    const kldConHtml = await getDnewsEng();
    const content = iconv.decode(kldConHtml.data, "utf-8").toString() //한글 인코딩
    const $ = cheerio.load(content);

    let news = [];
    for (var i = 1; i < 11; i++) {
        const list_text_inner_arr = $(
            "#container > div > div.baseBox3 > div > ul:nth-child(1) > li:nth-child(" + i + ")"
        ).toArray();              
        
        list_text_inner_arr.forEach((li) => {
            const title = $(li).find(".tit"); 
            const path = $(li).find("a").first().attr("href");
            const dateStr = $(li).find(".date");
            const date = dateStr.text().replace(/[^0-9, -]/g, "")

            news.push({
                nTitle: title.text().trim(),
                nDate: date.trim().substring(0, 10),
                nLink: `https://m.dnews.co.kr/${path}`
            });
        });
    };
    return news;
}

const getDnewsTech = async () => {
    try {
        const dnewsStdHtml = (
            await axios.get("https://m.dnews.co.kr/m_home/dnews_sec2_S2N6.html", {responseType: "arraybuffer"})
        );
        return dnewsStdHtml;
    } catch (e) {
        console.log(e);
    }
};

const DnewsTechCrawling = async() => {
    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0; //nodejs 에서 https 접속시 오류 해결
    const kldConHtml = await getDnewsTech();
    const content = iconv.decode(kldConHtml.data, "utf-8").toString() //한글 인코딩
    const $ = cheerio.load(content);

    let news = [];
    for (var i = 1; i < 11; i++) {
        const list_text_inner_arr = $(
            "#container > div > div.baseBox3 > div > ul:nth-child(1) > li:nth-child(" + i + ")"
        ).toArray();              
        
        list_text_inner_arr.forEach((li) => {
            const title = $(li).find(".tit"); 
            const path = $(li).find("a").first().attr("href");
            const dateStr = $(li).find(".date");
            const date = dateStr.text().replace(/[^0-9, -]/g, "")

            news.push({
                nTitle: title.text().trim(),
                nDate: date.trim().substring(0, 10),
                nLink: `https://m.dnews.co.kr/${path}`
            });
        });
    };
    return news;
}

const getDnewsMat = async () => {
    try {
        const dnewsStdHtml = (
            await axios.get("https://m.dnews.co.kr/m_home/dnews_sec2_S2N7.html", {responseType: "arraybuffer"})
        );
        return dnewsStdHtml;
    } catch (e) {
        console.log(e);
    }
};

const DnewsMatCrawling = async() => {
    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0; //nodejs 에서 https 접속시 오류 해결
    const kldConHtml = await getDnewsMat();
    const content = iconv.decode(kldConHtml.data, "utf-8").toString() //한글 인코딩
    const $ = cheerio.load(content);

    let news = [];
    for (var i = 1; i < 11; i++) {
        const list_text_inner_arr = $(
            "#container > div > div.baseBox3 > div > ul:nth-child(1) > li:nth-child(" + i + ")"
        ).toArray();              
        
        list_text_inner_arr.forEach((li) => {
            const title = $(li).find(".tit"); 
            const path = $(li).find("a").first().attr("href");
            const dateStr = $(li).find(".date");
            const date = dateStr.text().replace(/[^0-9, -]/g, "")

            news.push({
                nTitle: title.text().trim(),
                nDate: date.trim().substring(0, 10),
                nLink: `https://m.dnews.co.kr/${path}`
            });
        });
    };
    return news;
}

const getDnewsSafety = async () => {
    try {
        const dnewsStdHtml = (
            await axios.get("https://m.dnews.co.kr/m_home/dnews_sec2_S2N54.html", {responseType: "arraybuffer"})
        );
        return dnewsStdHtml;
    } catch (e) {
        console.log(e);
    }
};

const DnewsSafetyCrawling = async() => {
    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0; //nodejs 에서 https 접속시 오류 해결
    const kldConHtml = await getDnewsSafety();
    const content = iconv.decode(kldConHtml.data, "utf-8").toString() //한글 인코딩
    const $ = cheerio.load(content);

    let news = [];
    for (var i = 1; i < 11; i++) {
        const list_text_inner_arr = $(
            "#container > div > div.baseBox3 > div > ul:nth-child(1) > li:nth-child(" + i + ")"
        ).toArray();              
        
        list_text_inner_arr.forEach((li) => {
            const title = $(li).find(".tit"); 
            const path = $(li).find("a").first().attr("href");
            const dateStr = $(li).find(".date");
            const date = dateStr.text().replace(/[^0-9, -]/g, "")

            news.push({
                nTitle: title.text().trim(),
                nDate: date.trim().substring(0, 10),
                nLink: `https://m.dnews.co.kr/${path}`
            });
        });
    };
    return news;
}

module.exports = { DnewsSteCrawling, DnewsEngCrawling, DnewsTechCrawling, DnewsMatCrawling, DnewsSafetyCrawling };