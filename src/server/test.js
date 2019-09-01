const { Templates } = require('./templates');
(async () => {
  console.log( await Templates.getCustomers() );
  console.log( await Templates.getTemplate('初期設定') );
  console.log( await Templates.getTemplate('わし') );
})();

/*
{
  "customerName": "初期設定",
  "styles": [
    {
      "pattern" : "/",
      "matching" : "match",
      "title": "トップページ",
      "text" : "根",
      "backgroundColor" : "#C00"
    },
    {
      "pattern" : "/health/",
      "matching" : "startsWith",
      "title": "健康を考える",
      "text" : "健",
      "backgroundColor" : "#CC0"
    }
  ]
}

{
  "customerName": "わし",
  "styles": [
    {
      "pattern" : "/",
      "matching" : "match",
      "title": "正拳突き",
      "text" : "心",
      "backgroundColor" : "#0AA"
    }
  ]
}
*/