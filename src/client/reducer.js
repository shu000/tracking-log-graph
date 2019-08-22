import actionType from './actionType';

const initialState = {
  sessions: [],
  customers: [],
  template: {
    name: 'default',
    styles: []
  }
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case actionType.ON_SELECT_CUSTOMER:
      return Object.assign({}, state, {
        template: getTemplates(action.payLoad.customerName)
      });
    case actionType.ON_DROP:
      return Object.assign({}, state, {
        sessions: json2sessions(action.payLoad.json)
      });
    default:
      return state;
  }
}

function json2sessions(json) {
  const sessions = [];

  for(let date of json["dates"]) {
    for(let session of date["sessions"]) {
      const dateString = parseDate(date["date"]);
      if (sessions.length > 0 && sessions[0]["date"] === dateString) {
        sessions[0]["activities"].unshift(objArrow);
      } else {
        sessions.unshift(sessionJson2Obj(dateString, session));
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
  return {
    date: dateString,
    device: session["deviceCategory"] === "tablet" ? "TB" : ("mobile" ? "SP" : "PC"),
    channel: session["channel"] === "Organic Search" ? "検索" : "参照",
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

/**
 * [getTemplates description]
 * @param  {[type]} cunstomerName [description]
 * @return {[type]}               [description]
 */
function getTemplates(cunstomerName) {
  return {
    name: '初期設定',
    styles: [
      { pattern: '/', matching: 'match', text: '根', backgroundColor: "#C00" },
      { pattern: '/health/', matching: 'startsWith', text: '健', backgroundColor: "#CC0" }
    ]
  };
}
