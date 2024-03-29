const Sequelize = require("sequelize");

const config = {
  host: process.env.NEWSCRAWLER_MYSQL_HOST || "127.0.0.1",
  port: 3306,
  database: "newscrawling",
  user: "newscrawling_admin",
  password: process.env.NEWSCRAWLER_MYSQL_PASSWORD || "Wolf8431!!",
};

const sequelize = new Sequelize(config.database, config.user, config.password, {
  host: config.host,
  dialect: "mysql",
});

module.exports = {
  sequelize,
  KLDCON: require("./kld-con.model")(sequelize),
  KLDCM: require("./kld-cm.model")(sequelize),
  KLDTECH: require("./kld-tech.model")(sequelize),
  KLDSAFETY: require("./kld-safety.model")(sequelize),
  DNEWSSTD: require("./dnews-std.model")(sequelize),
  DNEWSENG: require("./dnews-eng.model")(sequelize),
  DNEWSTECH: require("./dnews-tech.model")(sequelize),
  DNEWSMAT: require("./dnews-mat.model")(sequelize),
  DNEWSSAFETY: require("./dnews-safety.model")(sequelize),
  MOLITCITY: require("./molit-city.model")(sequelize),
  MOLITLAND: require("./molit-land.model")(sequelize),
  MOLITCON: require("./molit-con.model")(sequelize),
  MOLITGEN: require("./molit-gen.model")(sequelize),
  KFFAANN: require("./kffa-ann.model")(sequelize),
  KFFANOT: require("./kffa-not.model")(sequelize),
  KFFARAW: require("./kffa-raw.model")(sequelize),
  KEEAANN: require("./keea-ann.model")(sequelize),
  KEEARAW: require("./keea-raw.model")(sequelize),
  KACEMANN: require("./kacem-ann.model")(sequelize),
  INSAEDU: require("./insa-edu.model")(sequelize),
  INSAHR: require("./insa-hr.model")(sequelize),
  SARAMPLAN: require("./saram-plan.model")(sequelize),
  SARAMEVAL: require("./saram-eval.model")(sequelize),
  SARAMGROUP: require("./saram-group.model")(sequelize),
  SARAMPOL: require("./saram-pol.model")(sequelize),
  SARAMTREND: require("./saram-trend.model")(sequelize),
  ABOUTHRMG: require("./abouthr-mg.model")(sequelize),
  ABOUTHRPR: require("./abouthr-pr.model")(sequelize),
  ABOUTHRRC: require("./abouthr-rc.model")(sequelize),
  GGNEWSEXT: require("./ggnews-ext.model")(sequelize),
  GGNEWSFAC: require("./ggnews-fac.model")(sequelize),
  GGNEWSSEM: require("./ggnews-sem.model")(sequelize),
  KOITANOT: require("./koita-not.model")(sequelize),
  KCNETTECH: require("./kcnet-tech.model")(sequelize),
  KCNETNOT: require("./kcnet-not.model")(sequelize),
  KCNETNEWS: require("./kcnet-news.model")(sequelize),
  CADTV: require("./cad-tv.model")(sequelize),
  CADSPE: require("./cad-spe.model")(sequelize),
  CADLEC: require("./cad-lec.model")(sequelize),
  CADNEWS: require("./cad-news.model")(sequelize),
  SROCM: require("./rocm-s.model")(sequelize),
  WROCM: require("./rocm-w.model")(sequelize),
  DROCM: require("./rocm-d.model")(sequelize),
  BROCM: require("./rocm-b.model")(sequelize),
  IROCM: require("./rocm-i.model")(sequelize),
  KOSHANEWS: require("./kosha-news.model")(sequelize),
  KOSHACON: require("./kosha-con.model")(sequelize),
  KOSHAGOV: require("./kosha-gov.model")(sequelize),
  PROPMK: require("./prop-mk.model")(sequelize),
  PROPFN: require("./prop-fn.model")(sequelize),
  PROPKLD: require("./prop-kld.model")(sequelize),
  PROPDNEWS: require("./prop-dnews.model")(sequelize),
  POLICYDH: require("./policy-dh.model")(sequelize),
  POLICYLE: require("./policy-le.model")(sequelize),
  POLICYCON: require("./policy-con.model")(sequelize),
  POLICYMC: require("./policy-mc.model")(sequelize),
  ANCCM: require("./anc-cm.model")(sequelize),
  ANCSAFETY: require("./anc-safety.model")(sequelize),
  ANCPOL: require("./anc-pol.model")(sequelize),
  ANCGRE: require("./anc-gre.model")(sequelize),
  FIREFPN: require("./fire-fpn.model")(sequelize),
  FIRENFA: require("./fire-nfa.model")(sequelize),
  FIRELAW: require("./fire-law.model")(sequelize),
  FIREINFO: require("./fire-info.model")(sequelize),
  LAWMKOP: require("./lawmk-op.model")(sequelize),
};
