const teams = [
  {
    rank: 1,
    name: "담원 기아",
    win: 12,
    lose: 6,
    winLoseDiff: 15,
    kill: 607,
    death: 508,
    assist: 1386,
  },
  {
    rank: 2,
    name: "농심",
    win: 12,
    lose: 6,
    winLoseDiff: 8,
    kill: 589,
    death: 513,
    assist: 1285,
  },
  {
    rank: 2,
    name: "젠지",
    win: 12,
    lose: 6,
    winLoseDiff: 8,
    kill: 605,
    death: 489,
    assist: 1367,
  },
  {
    rank: 4,
    name: "T1",
    win: 11,
    lose: 7,
    winLoseDiff: 6,
    kill: 504,
    death: 447,
    assist: 1190,
  },
  {
    rank: 5,
    name: "피어엑스",
    win: 11,
    lose: 7,
    winLoseDiff: 5,

    kill: 514,
    death: 568,
    assist: 1223,
  },
  {
    rank: 6,
    name: "아프리카",
    win: 11,
    lose: 7,
    winLoseDiff: 4,
    kill: 530,
    death: 489,
    assist: 1324,
  },
  {
    rank: 7,
    name: "KT",
    win: 7,
    lose: 11,
    winLoseDiff: -4,

    kill: 495,
    death: 559,
    assist: 1281,
  },
  {
    rank: 8,
    name: "한화 생명",
    win: 7,
    lose: 11,
    winLoseDiff: -9,
    kda: 2.89,
    kill: 495,
    death: 559,
    assist: 1122,
  },
  {
    rank: 9,
    name: "OK저축은행",
    win: 5,
    lose: 13,
    winLoseDiff: -8,

    kill: 483,
    death: 514,
    assist: 1184,
  },
  {
    rank: 10,
    name: "DRX",
    win: 2,
    lose: 16,
    winLoseDiff: -25,
    kill: 377,
    death: 630,
    assist: 858,
  },
];

const box = document.getElementById("box");
const p = document.createElement("p");
p.innerHTML = "hello";
box.append(p);

const contents = document.getElementById("contents");
for (let i = 0; i < teams.length; i++) {
  const tr = document.createElement("tr");
  teams[i].winRate = (teams[i].win / (teams[i].win + teams[i].lose)).toFixed(2);
  teams[i].kda = ((teams[i].kill + teams[i].assist) / teams[i].death).toFixed(
    2
  );
  contents.append(tr);

  for (let key in teams[i]) {
    const td = document.createElement("td");
    td.innerHTML = teams[i][key];
    tr.append(td);
  }
}
