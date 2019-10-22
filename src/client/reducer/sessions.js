const initialState = [];

export const ActionType = {
  ON_DROP: 'ON_DROP'
};

export default function sessionsReducer(state = initialState, action) {
  switch(action.type) {
    case ActionType.ON_DROP:
      return [...state, ...(json2sessions(action.payload.json))];
    default:
      return state;
  }
}

/**
 * Convet json to an array
 * TODO: Refactoring
 *
 * e.g.
 * FROM
		{
			"date": "8 1, 2019",
			"hasGoal": false,
			"hasRevenue": false,
			"sessionCount": 7,
			"sessions": [
				{
					"duration": "00 分 00 秒",
					"deviceCategory": "desktop",
					"channel": "(Other)",
					"activitySummary": {
						"PAGEVIEW": "1"
					},
					"activities": [
						{
							"time": "3:02 午後",
							"type": "PAGEVIEW",
							"repeatActivityTimes": [],
							"details": [
								{
									"ページのタイトル": [
										"集客メソッド"
									],
									"ページの URL": [
										"/service/webpromotion/"
									]
								}
							],
							"pageTitle": "集客メソッド"
						}
					]
				},
				{
					"duration": "00 分 00 秒",
					"deviceCategory": "desktop",
					"channel": "(Other)",
					"activitySummary": {
						"PAGEVIEW": "1"
					},
					"activities": [
						{
							"time": "3:02 午後",
							"type": "PAGEVIEW",
							"repeatActivityTimes": [],
							"details": [
								{
									"ページのタイトル": [
										"集客メソッド"
									],
									"ページの URL": [
										"/service/webpromotion/"
									]
								}
							],
							"pageTitle": "集客メソッド"
						}
					]
				}
      ]
    }
 * TO
    [
      {
        date: "8/1(日)",
        device: "SP",
        channel: "その他",
        activities: [
          { time: "3:02 午後", pageTitle: "集客メソッド", pageURL: "/service/webpromotion" },
          { time: "3:02 午後", pageTitle: "集客メソッド", pageURL: "/service/webpromotion" }
        ]
      }
    ]
 *
 * @param  {Object} json Json user dropped
 * @return {Array}      Converted array
 */
function json2sessions(json) {
  const sessions = [];

  for(let date of json["dates"]) {
    for(let session of date["sessions"]) {
      const dateString = parseDate(date["date"]);
      if (sessions.length > 0 && sessions[0]["date"] === dateString) {
        // 同じ日の別セッションなら矢印で挟む
        sessions[0]["activities"].unshift(objArrow);
      } else {
        // 別日のセッションを新たに発見したら、日付・デバイス・流入経路を抽出する
        // 抽出対象セッションはその日の最初のセッション(=== 配列末尾のセッション)
        const firstSession = date["sessions"][date["sessions"].length - 1];
        sessions.unshift(sessionJson2Obj(dateString, firstSession));
      }

      for(let activity of session["activities"]) {
        // "GOAL" は直後のページが完了ページなので表示しなくて良い
        if (activity.type !== "PAGEVIEW") continue;
        // TODO: "details" とその中身は length === 1 で確定なのか？
        sessions[0]["activities"].unshift(activityJson2Obj(activity));
      }
    }
  }

  return sessions;
}

const objArrow = {
  time: "",
  pageTitle: "",
  pageURL: "arrow"
};

/**
 * [sessionJson2Obj description]
 * @param  {[type]} dateString [description]
 * @param  {[type]} session    [description]
 * @return {[type]}            [description]
 */
function sessionJson2Obj(dateString, session) {
  let channel = "その他";
  switch(session["channel"]) {
    case "Organic Search":
      channel = "検索";
      break;
    case "Direct":
      channel = "直接訪問";
      break;
    case "Referral":
      channel = "参照";
      break;
    default:
      channel = "その他";
  }

  return {
    date: dateString,
    device: session["deviceCategory"] === "tablet" ? "TB" : ("mobile" ? "SP" : "PC"),
    channel: channel,
    activities: []
  };
}

/**
 * Convert object likes;
 *   {
 *     "time":"7:36 午前", "type":"PAGEVIEW", "repeatActivityTimes":[],
 *     "details":[{"ページのタイトル":["健康へのこだわり"], "ページの URL":["/health/"]}]
 *   }
 *    =>
 *   { "time":"7:36 午前", "pageTitle":"健康へのこだわり", "pageURL":"/health/" }
 * @param  {Object} activity
 * @return {Object}
 */
function activityJson2Obj(activity) {
  return {
    time: activity["time"],
    pageTitle: activity["details"][0]["ページのタイトル"][0],
    pageURL: activity["details"][0]["ページの URL"][0],
  };
}

/**
 * "mm dd, yyyy" => "mm/dd(day)"
 * @param  {String} dateString "mm dd, yyyy"
 * @return {String}            "mm/dd(day)"
 */
function parseDate(dateString) {
  const splitted = dateString.replace(",", "").split(" ");
  const year = splitted[2];
  const month = splitted[0];
  const date = splitted[1];
  const day = ["(日)", "(月)", "(火)", "(水)", "(木)", "(金)", "(土)"][(new Date(year, month, date)).getDay()];
  return month + "/" + date + day;
}
