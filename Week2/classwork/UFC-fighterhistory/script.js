/* =========================================================
   Fight History Explorer
   Beginner-friendly classroom demo

   HTML = structure
   CSS  = presentation
   JS   = behavior and data
   ========================================================= */


/* =========================================================
   Fighter Data
   The fighters array is the single source of truth.
   Each fighter object contains a nested fights array.
   ========================================================= */

const fighters = [
  {
    id: 1,
    name: "Marcus King",
    nickname: "The Hammer",
    initials: "MK",
    weightClass: "Lightweight",
    fightingStyle: "Boxing / Wrestling",
    hometown: "Brooklyn, New York",
    imageClass: "fighter-image--marcus",
    demoFightAdded: false,
    fights: [
      {
        id: 101,
        opponent: "Darius Cole",
        result: "Win",
        method: "KO/TKO",
        round: 2,
        time: "3:42",
        event: "Combat Night 118",
        date: "2026-04-12",
        location: "New York, NY",
        notes: "Won after a counter right hand against the fence."
      },
      {
        id: 102,
        opponent: "Andre Lewis",
        result: "Win",
        method: "Decision - Unanimous",
        round: 3,
        time: "5:00",
        event: "Arena Clash 44",
        date: "2025-11-08",
        location: "Newark, NJ",
        notes: "Controlled the wrestling exchanges across three rounds."
      },
      {
        id: 103,
        opponent: "Rico Santos",
        result: "Loss",
        method: "Submission",
        round: 1,
        time: "4:11",
        event: "Iron Circuit 21",
        date: "2025-06-20",
        location: "Philadelphia, PA",
        notes: "Caught in a rear-naked choke after a scramble."
      },
      {
        id: 104,
        opponent: "Noah Briggs",
        result: "Win",
        method: "KO/TKO",
        round: 1,
        time: "2:05",
        event: "Harbor Fights 9",
        date: "2025-02-14",
        location: "Boston, MA",
        notes: "Finished with a short left hook in the pocket."
      },
      {
        id: 105,
        opponent: "Felix Grant",
        result: "Win",
        method: "Decision - Split",
        round: 3,
        time: "5:00",
        event: "Metro Brawl 16",
        date: "2024-09-27",
        location: "Queens, NY",
        notes: "Close striking battle decided on the scorecards."
      },
      {
        id: 106,
        opponent: "Omar Reed",
        result: "Win",
        method: "Submission",
        round: 2,
        time: "1:48",
        event: "Street Crown 7",
        date: "2024-04-05",
        location: "Brooklyn, NY",
        notes: "Locked in an arm-triangle after a takedown."
      },
      {
        id: 107,
        opponent: "Chris Vale",
        result: "Draw",
        method: "Decision - Majority",
        round: 3,
        time: "5:00",
        event: "Night Circuit 33",
        date: "2023-12-02",
        location: "Hartford, CT",
        notes: "Even fight with neither athlete pulling clearly ahead."
      },
      {
        id: 108,
        opponent: "Julian Park",
        result: "Win",
        method: "KO/TKO",
        round: 3,
        time: "0:57",
        event: "City Lights 12",
        date: "2023-07-18",
        location: "Manhattan, NY",
        notes: "Late-round pressure created the finish."
      }
    ]
  },
  {
    id: 2,
    name: "Darius Cole",
    nickname: "Nightfall",
    initials: "DC",
    weightClass: "Welterweight",
    fightingStyle: "Kickboxing / Pressure",
    hometown: "Atlanta, Georgia",
    imageClass: "fighter-image--darius",
    demoFightAdded: false,
    fights: [
      {
        id: 201,
        opponent: "Marcus King",
        result: "Loss",
        method: "KO/TKO",
        round: 2,
        time: "3:42",
        event: "Combat Night 118",
        date: "2026-04-12",
        location: "New York, NY",
        notes: "Walked into a counter right hand while pressing forward."
      },
      {
        id: 202,
        opponent: "Tyrell Boone",
        result: "Win",
        method: "KO/TKO",
        round: 1,
        time: "1:19",
        event: "Southern Strike 30",
        date: "2025-12-06",
        location: "Atlanta, GA",
        notes: "Ended the fight with a liver kick."
      },
      {
        id: 203,
        opponent: "Hector Miles",
        result: "Win",
        method: "Decision - Unanimous",
        round: 3,
        time: "5:00",
        event: "Crown Arena 19",
        date: "2025-08-22",
        location: "Charlotte, NC",
        notes: "Outworked Miles with leg kicks and cage control."
      },
      {
        id: 204,
        opponent: "Lena Novak",
        result: "Win",
        method: "Decision - Unanimous",
        round: 3,
        time: "5:00",
        event: "Crossroads 8",
        date: "2025-03-15",
        location: "Nashville, TN",
        notes: "Special catchweight bout decided by volume striking."
      },
      {
        id: 205,
        opponent: "Ike Monroe",
        result: "Loss",
        method: "Submission",
        round: 2,
        time: "3:05",
        event: "Iron Circuit 18",
        date: "2024-10-11",
        location: "Birmingham, AL",
        notes: "Submitted with a guillotine after a failed takedown."
      },
      {
        id: 206,
        opponent: "Ray Quinn",
        result: "Win",
        method: "KO/TKO",
        round: 2,
        time: "4:44",
        event: "Night Circuit 29",
        date: "2024-05-03",
        location: "Memphis, TN",
        notes: "Flurry of hooks forced the stoppage."
      },
      {
        id: 207,
        opponent: "Sean Holt",
        result: "Win",
        method: "Submission",
        round: 1,
        time: "3:28",
        event: "Arena Clash 38",
        date: "2023-11-25",
        location: "Columbia, SC",
        notes: "Surprised Holt with a standing arm-triangle."
      },
      {
        id: 208,
        opponent: "Devon Price",
        result: "Win",
        method: "Decision - Split",
        round: 3,
        time: "5:00",
        event: "Harbor Fights 4",
        date: "2023-06-09",
        location: "Savannah, GA",
        notes: "Close fight won with late-round aggression."
      }
    ]
  },
  {
    id: 3,
    name: "Elena Torres",
    nickname: "Iron Rose",
    initials: "ET",
    weightClass: "Flyweight",
    fightingStyle: "Brazilian Jiu-Jitsu / Clinch",
    hometown: "San Antonio, Texas",
    imageClass: "fighter-image--elena",
    demoFightAdded: false,
    fights: [
      {
        id: 301,
        opponent: "Maya Brooks",
        result: "Win",
        method: "Submission",
        round: 3,
        time: "2:17",
        event: "Combat Night 116",
        date: "2026-02-28",
        location: "Houston, TX",
        notes: "Finished with an armbar after a scramble."
      },
      {
        id: 302,
        opponent: "Lena Novak",
        result: "Win",
        method: "Decision - Unanimous",
        round: 3,
        time: "5:00",
        event: "Arena Clash 43",
        date: "2025-10-17",
        location: "Dallas, TX",
        notes: "Controlled the clinch and scored timely takedowns."
      },
      {
        id: 303,
        opponent: "Nina Vargas",
        result: "Win",
        method: "KO/TKO",
        round: 1,
        time: "4:02",
        event: "Southern Strike 28",
        date: "2025-05-24",
        location: "Austin, TX",
        notes: "Elbows from mount forced the stoppage."
      },
      {
        id: 304,
        opponent: "Kara Ellis",
        result: "Loss",
        method: "Decision - Split",
        round: 3,
        time: "5:00",
        event: "Night Circuit 31",
        date: "2024-12-13",
        location: "San Antonio, TX",
        notes: "Came up short in a close striking contest."
      },
      {
        id: 305,
        opponent: "Priya Shaw",
        result: "Win",
        method: "Submission",
        round: 2,
        time: "1:11",
        event: "Iron Circuit 17",
        date: "2024-07-19",
        location: "El Paso, TX",
        notes: "Quick triangle choke after a failed slam."
      },
      {
        id: 306,
        opponent: "Rosa Kim",
        result: "Win",
        method: "Decision - Unanimous",
        round: 3,
        time: "5:00",
        event: "City Lights 14",
        date: "2024-01-26",
        location: "Phoenix, AZ",
        notes: "Steady pace and top control across fifteen minutes."
      },
      {
        id: 307,
        opponent: "Ivy Stone",
        result: "Draw",
        method: "Decision - Majority",
        round: 3,
        time: "5:00",
        event: "Crossroads 5",
        date: "2023-08-11",
        location: "Albuquerque, NM",
        notes: "Even grappling battle ended in a draw."
      },
      {
        id: 308,
        opponent: "Talia Brooks",
        result: "Win",
        method: "KO/TKO",
        round: 2,
        time: "0:44",
        event: "Harbor Fights 2",
        date: "2023-03-04",
        location: "Tucson, AZ",
        notes: "Uppercut on the break ended the fight early in round two."
      }
    ]
  },
  {
    id: 4,
    name: "Maya Brooks",
    nickname: "The Storm",
    initials: "MB",
    weightClass: "Flyweight",
    fightingStyle: "Muay Thai / Scrambles",
    hometown: "Miami, Florida",
    imageClass: "fighter-image--maya",
    demoFightAdded: false,
    fights: [
      {
        id: 401,
        opponent: "Elena Torres",
        result: "Loss",
        method: "Submission",
        round: 3,
        time: "2:17",
        event: "Combat Night 116",
        date: "2026-02-28",
        location: "Houston, TX",
        notes: "Caught in an armbar while hunting for elbows."
      },
      {
        id: 402,
        opponent: "Nina Vargas",
        result: "Win",
        method: "KO/TKO",
        round: 1,
        time: "2:51",
        event: "Arena Clash 42",
        date: "2025-09-12",
        location: "Miami, FL",
        notes: "Devastating left kick to the body."
      },
      {
        id: 403,
        opponent: "Kara Ellis",
        result: "Win",
        method: "Decision - Unanimous",
        round: 3,
        time: "5:00",
        event: "Southern Strike 27",
        date: "2025-04-18",
        location: "Tampa, FL",
        notes: "Outstruck Ellis with combinations and calf kicks."
      },
      {
        id: 404,
        opponent: "Lena Novak",
        result: "Win",
        method: "Submission",
        round: 2,
        time: "4:33",
        event: "Night Circuit 30",
        date: "2024-11-01",
        location: "Orlando, FL",
        notes: "Rear-naked choke after a back take."
      },
      {
        id: 405,
        opponent: "Priya Shaw",
        result: "Loss",
        method: "Decision - Split",
        round: 3,
        time: "5:00",
        event: "Iron Circuit 16",
        date: "2024-06-07",
        location: "Jacksonville, FL",
        notes: "Close fight that could have gone either way."
      },
      {
        id: 406,
        opponent: "Rosa Kim",
        result: "Win",
        method: "KO/TKO",
        round: 3,
        time: "1:26",
        event: "City Lights 13",
        date: "2023-12-15",
        location: "Fort Lauderdale, FL",
        notes: "Late flurry forced the referee to intervene."
      },
      {
        id: 407,
        opponent: "Ivy Stone",
        result: "Win",
        method: "Decision - Unanimous",
        round: 3,
        time: "5:00",
        event: "Crossroads 4",
        date: "2023-07-28",
        location: "Tallahassee, FL",
        notes: "Clean striking and smart defense secured the win."
      },
      {
        id: 408,
        opponent: "Talia Brooks",
        result: "Win",
        method: "Submission",
        round: 1,
        time: "3:09",
        event: "Harbor Fights 1",
        date: "2023-01-20",
        location: "Key West, FL",
        notes: "Armbar finish in the opening round."
      }
    ]
  },
  {
    id: 5,
    name: "Andre Lewis",
    nickname: "The Titan",
    initials: "AL",
    weightClass: "Heavyweight",
    fightingStyle: "Power Striking / Wrestling",
    hometown: "Detroit, Michigan",
    imageClass: "fighter-image--andre",
    demoFightAdded: false,
    fights: [
      {
        id: 501,
        opponent: "Marcus King",
        result: "Loss",
        method: "Decision - Unanimous",
        round: 3,
        time: "5:00",
        event: "Arena Clash 44",
        date: "2025-11-08",
        location: "Newark, NJ",
        notes: "Came up short against a lighter, more mobile opponent."
      },
      {
        id: 502,
        opponent: "Bruno Hale",
        result: "Win",
        method: "KO/TKO",
        round: 1,
        time: "0:48",
        event: "Combat Night 114",
        date: "2025-07-04",
        location: "Detroit, MI",
        notes: "Overhand right ended the fight in under a minute."
      },
      {
        id: 503,
        opponent: "Vince Carter",
        result: "Win",
        method: "KO/TKO",
        round: 2,
        time: "2:13",
        event: "Southern Strike 26",
        date: "2025-01-31",
        location: "Cleveland, OH",
        notes: "Ground-and-pound from mount forced the stoppage."
      },
      {
        id: 504,
        opponent: "Omar Reed",
        result: "Win",
        method: "Decision - Unanimous",
        round: 3,
        time: "5:00",
        event: "Night Circuit 28",
        date: "2024-08-16",
        location: "Chicago, IL",
        notes: "Used size and pressure to control the cage."
      },
      {
        id: 505,
        opponent: "Ike Monroe",
        result: "Loss",
        method: "Submission",
        round: 1,
        time: "4:55",
        event: "Iron Circuit 15",
        date: "2024-03-22",
        location: "Indianapolis, IN",
        notes: "Caught in a heel hook late in round one."
      },
      {
        id: 506,
        opponent: "Ray Quinn",
        result: "Win",
        method: "KO/TKO",
        round: 1,
        time: "3:17",
        event: "City Lights 11",
        date: "2023-10-06",
        location: "Milwaukee, WI",
        notes: "Left hook dropped Quinn along the fence."
      },
      {
        id: 507,
        opponent: "Sean Holt",
        result: "Win",
        method: "Decision - Split",
        round: 3,
        time: "5:00",
        event: "Crossroads 3",
        date: "2023-05-12",
        location: "Columbus, OH",
        notes: "Tough striking war decided by the judges."
      },
      {
        id: 508,
        opponent: "Devon Price",
        result: "Win",
        method: "Submission",
        round: 2,
        time: "2:40",
        event: "Harbor Fights 0",
        date: "2022-12-09",
        location: "Grand Rapids, MI",
        notes: "Keylock finish after a heavy slam."
      }
    ]
  },
  {
    id: 6,
    name: "Lena Novak",
    nickname: "Black Ice",
    initials: "LN",
    weightClass: "Strawweight",
    fightingStyle: "Counter Striking / Grappling",
    hometown: "Chicago, Illinois",
    imageClass: "fighter-image--lena",
    demoFightAdded: false,
    fights: [
      {
        id: 601,
        opponent: "Elena Torres",
        result: "Loss",
        method: "Decision - Unanimous",
        round: 3,
        time: "5:00",
        event: "Arena Clash 43",
        date: "2025-10-17",
        location: "Dallas, TX",
        notes: "Could not match Torres in the clinch exchanges."
      },
      {
        id: 602,
        opponent: "Maya Brooks",
        result: "Loss",
        method: "Submission",
        round: 2,
        time: "4:33",
        event: "Night Circuit 30",
        date: "2024-11-01",
        location: "Orlando, FL",
        notes: "Tapped to a rear-naked choke."
      },
      {
        id: 603,
        opponent: "Darius Cole",
        result: "Loss",
        method: "Decision - Unanimous",
        round: 3,
        time: "5:00",
        event: "Crossroads 8",
        date: "2025-03-15",
        location: "Nashville, TN",
        notes: "Catchweight bout lost on volume and cage control."
      },
      {
        id: 604,
        opponent: "Nina Vargas",
        result: "Win",
        method: "KO/TKO",
        round: 1,
        time: "1:55",
        event: "Combat Night 110",
        date: "2024-09-20",
        location: "Chicago, IL",
        notes: "Sharp counter left ended the fight quickly."
      },
      {
        id: 605,
        opponent: "Kara Ellis",
        result: "Win",
        method: "Submission",
        round: 2,
        time: "3:14",
        event: "Southern Strike 24",
        date: "2024-02-02",
        location: "St. Louis, MO",
        notes: "Kimura finish from side control."
      },
      {
        id: 606,
        opponent: "Priya Shaw",
        result: "Win",
        method: "Decision - Unanimous",
        round: 3,
        time: "5:00",
        event: "Iron Circuit 14",
        date: "2023-09-29",
        location: "Minneapolis, MN",
        notes: "Clean counters and timely takedown defense."
      },
      {
        id: 607,
        opponent: "Rosa Kim",
        result: "Draw",
        method: "Decision - Majority",
        round: 3,
        time: "5:00",
        event: "City Lights 10",
        date: "2023-04-14",
        location: "Des Moines, IA",
        notes: "Competitive fight with little separation."
      },
      {
        id: 608,
        opponent: "Ivy Stone",
        result: "Win",
        method: "KO/TKO",
        round: 3,
        time: "4:01",
        event: "Harbor Fights 3",
        date: "2022-11-18",
        location: "Milwaukee, WI",
        notes: "Late combination forced the stoppage."
      }
    ]
  }
];


/* =========================================================
   DOM Selections
   Store frequently used elements so we do not search
   the document repeatedly.
   ========================================================= */

const fighterSelect = document.querySelector("#fighter-select");
const sortSelect = document.querySelector("#sort-select");
const demoFightButton = document.querySelector("#demo-fight-button");
const teachingNotesButton = document.querySelector("#teaching-notes-button");
const teachingNotes = document.querySelector("#teaching-notes");
const statusMessage = document.querySelector("#status-message");

const fighterImage = document.querySelector("#fighter-image");
const fighterInitials = document.querySelector("#fighter-initials");
const fighterNickname = document.querySelector("#fighter-nickname");
const fighterName = document.querySelector("#fighter-name");
const fighterWeightClass = document.querySelector("#fighter-weight-class");
const fighterStyle = document.querySelector("#fighter-style");
const fighterHometown = document.querySelector("#fighter-hometown");
const fighterRecord = document.querySelector("#fighter-record");

const statsGrid = document.querySelector("#stats-grid");
const recentForm = document.querySelector("#recent-form");
const resultsCount = document.querySelector("#results-count");
const filterControls = document.querySelector(".filter-controls");
const fightList = document.querySelector("#fight-list");
const fightDetails = document.querySelector("#fight-details");
const fightDetailsContent = document.querySelector("#fight-details-content");
const closeDetailsButton = document.querySelector("#close-details-button");


/* =========================================================
   Application State
   These values can change as the user interacts.
   ========================================================= */

let selectedFighterId = 1;
let selectedFightFilter = "all";
let selectedSortOption = "newest";
let selectedFightId = null;


/* =========================================================
   Calculation Functions
   Each function receives data, calculates a result,
   and returns that result.
   ========================================================= */

function calculateWins(fights) {
  return fights.filter(function (fight) {
    return fight.result === "Win";
  }).length;
}

function calculateLosses(fights) {
  return fights.filter(function (fight) {
    return fight.result === "Loss";
  }).length;
}

function calculateDraws(fights) {
  return fights.filter(function (fight) {
    return fight.result === "Draw";
  }).length;
}

function calculateKnockoutWins(fights) {
  return fights.filter(function (fight) {
    return fight.result === "Win" && fight.method === "KO/TKO";
  }).length;
}

function calculateSubmissionWins(fights) {
  return fights.filter(function (fight) {
    return fight.result === "Win" && fight.method === "Submission";
  }).length;
}

function calculateDecisionWins(fights) {
  return fights.filter(function (fight) {
    return fight.result === "Win" && fight.method.includes("Decision");
  }).length;
}

function calculateFinishPercentage(fights) {
  const wins = calculateWins(fights);

  // Avoid dividing by zero when a fighter has no wins.
  if (wins === 0) {
    return 0;
  }

  const finishes =
    calculateKnockoutWins(fights) + calculateSubmissionWins(fights);

  return (finishes / wins) * 100;
}

function calculateCurrentStreak(fights) {
  const orderedFights = sortFightsByNewest([...fights]);

  if (orderedFights.length === 0) {
    return "No Active Streak";
  }

  const firstResult = orderedFights[0].result;
  let streakCount = 0;

  for (const fight of orderedFights) {
    if (fight.result !== firstResult || fight.result === "Draw") {
      break;
    }

    streakCount += 1;
  }

  if (firstResult === "Draw" || streakCount === 0) {
    return "No Active Streak";
  }

  if (firstResult === "Win") {
    return streakCount + "-Fight Win Streak";
  }

  return streakCount + "-Fight Losing Streak";
}

function getRecentResults(fights) {
  // .slice(0, 5) copies the first five fights after sorting newest-first.
  // .map() transforms each fight object into a short letter code.
  return sortFightsByNewest([...fights])
    .slice(0, 5)
    .map(function (fight) {
      if (fight.result === "Win") {
        return "W";
      }

      if (fight.result === "Loss") {
        return "L";
      }

      return "D";
    });
}


/* =========================================================
   Filtering and Sorting Functions
   ========================================================= */

function filterFights(fights, selectedFilter) {
  if (selectedFilter === "all") {
    return fights;
  }

  if (selectedFilter === "wins") {
    return fights.filter(function (fight) {
      return fight.result === "Win";
    });
  }

  if (selectedFilter === "losses") {
    return fights.filter(function (fight) {
      return fight.result === "Loss";
    });
  }

  if (selectedFilter === "knockouts") {
    return fights.filter(function (fight) {
      return fight.result === "Win" && fight.method === "KO/TKO";
    });
  }

  if (selectedFilter === "submissions") {
    return fights.filter(function (fight) {
      return fight.result === "Win" && fight.method === "Submission";
    });
  }

  if (selectedFilter === "decisions") {
    return fights.filter(function (fight) {
      return fight.method.includes("Decision");
    });
  }

  return fights;
}

function timeToSeconds(timeText) {
  // Converts "3:42" into total seconds for sorting.
  const parts = timeText.split(":");
  const minutes = Number(parts[0]);
  const seconds = Number(parts[1]);
  return minutes * 60 + seconds;
}

function sortFightsByNewest(fights) {
  return fights.sort(function (firstFight, secondFight) {
    return new Date(secondFight.date) - new Date(firstFight.date);
  });
}

function sortFights(fights, sortOption) {
  // Always copy the array first so the original data stays safe.
  const sortedFights = [...fights];

  if (sortOption === "oldest") {
    return sortedFights.sort(function (firstFight, secondFight) {
      return new Date(firstFight.date) - new Date(secondFight.date);
    });
  }

  if (sortOption === "fastest") {
    return sortedFights.sort(function (firstFight, secondFight) {
      const firstDuration =
        (firstFight.round - 1) * 300 + timeToSeconds(firstFight.time);
      const secondDuration =
        (secondFight.round - 1) * 300 + timeToSeconds(secondFight.time);
      return firstDuration - secondDuration;
    });
  }

  if (sortOption === "latest-round") {
    return sortedFights.sort(function (firstFight, secondFight) {
      if (secondFight.round !== firstFight.round) {
        return secondFight.round - firstFight.round;
      }

      return timeToSeconds(secondFight.time) - timeToSeconds(firstFight.time);
    });
  }

  // Default: newest first
  return sortFightsByNewest(sortedFights);
}

function findFightById(fights, fightId) {
  return fights.find(function (fight) {
    return fight.id === fightId;
  });
}

function formatFightDate(dateText) {
  const date = new Date(dateText + "T00:00:00");

  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}


/* =========================================================
   DOM Creation Functions
   ========================================================= */

function createStatCard(label, value) {
  const card = document.createElement("article");
  card.classList.add("stat-card");

  const labelElement = document.createElement("span");
  labelElement.classList.add("stat-card__label");
  labelElement.textContent = label;

  const valueElement = document.createElement("span");
  valueElement.classList.add("stat-card__value");
  valueElement.textContent = value;

  card.appendChild(labelElement);
  card.appendChild(valueElement);

  return card;
}

function createFightCard(fight) {
  const card = document.createElement("article");
  card.classList.add("fight-card");
  card.dataset.fightId = fight.id;

  const topRow = document.createElement("div");
  topRow.classList.add("fight-card__top");

  const resultBadge = document.createElement("span");
  resultBadge.classList.add("result-badge");

  if (fight.result === "Win") {
    resultBadge.classList.add("result-badge--win");
    resultBadge.textContent = "WIN";
  } else if (fight.result === "Loss") {
    resultBadge.classList.add("result-badge--loss");
    resultBadge.textContent = "LOSS";
  } else {
    resultBadge.classList.add("result-badge--draw");
    resultBadge.textContent = "DRAW";
  }

  const eventLabel = document.createElement("span");
  eventLabel.classList.add("fight-meta");
  eventLabel.textContent = fight.event;

  topRow.appendChild(resultBadge);
  topRow.appendChild(eventLabel);

  const heading = document.createElement("h3");
  heading.textContent = "vs " + fight.opponent;

  const meta = document.createElement("div");
  meta.classList.add("fight-meta");

  const methodLine = document.createElement("p");
  methodLine.innerHTML = "<strong>Method:</strong> ";
  methodLine.appendChild(document.createTextNode(fight.method));

  const roundLine = document.createElement("p");
  roundLine.innerHTML = "<strong>Round:</strong> ";
  roundLine.appendChild(document.createTextNode(String(fight.round)));
  roundLine.appendChild(document.createTextNode(" · "));
  const timeStrong = document.createElement("strong");
  timeStrong.textContent = "Time:";
  roundLine.appendChild(timeStrong);
  roundLine.appendChild(document.createTextNode(" " + fight.time));

  const dateLine = document.createElement("p");
  dateLine.innerHTML = "<strong>Date:</strong> ";
  dateLine.appendChild(document.createTextNode(formatFightDate(fight.date)));

  const locationLine = document.createElement("p");
  locationLine.innerHTML = "<strong>Location:</strong> ";
  locationLine.appendChild(document.createTextNode(fight.location));

  meta.appendChild(methodLine);
  meta.appendChild(roundLine);
  meta.appendChild(dateLine);
  meta.appendChild(locationLine);

  const detailsButton = document.createElement("button");
  detailsButton.type = "button";
  detailsButton.classList.add("details-button");
  detailsButton.dataset.fightId = fight.id;
  detailsButton.textContent = "View Details";

  card.appendChild(topRow);
  card.appendChild(heading);
  card.appendChild(meta);
  card.appendChild(detailsButton);

  return card;
}


/* =========================================================
   Rendering Functions
   These functions turn data into visible page content.
   ========================================================= */

function getSelectedFighter() {
  return fighters.find(function (fighter) {
    return fighter.id === selectedFighterId;
  });
}

function populateFighterSelect() {
  fighterSelect.innerHTML = "";

  fighters.forEach(function (fighter) {
    const option = document.createElement("option");
    option.value = fighter.id;
    option.textContent =
      fighter.name + ' "' + fighter.nickname + '"';
    fighterSelect.appendChild(option);
  });

  fighterSelect.value = String(selectedFighterId);
}

function displayFighterProfile(fighter) {
  // Reset previous sprite classes, then add the selected fighter class.
  fighterImage.className = "fighter-image";
  fighterImage.classList.add(fighter.imageClass);

  fighterInitials.textContent = fighter.initials;
  fighterNickname.textContent = '"' + fighter.nickname + '"';
  fighterName.textContent = fighter.name;
  fighterWeightClass.textContent = fighter.weightClass;
  fighterStyle.textContent = fighter.fightingStyle;
  fighterHometown.textContent = fighter.hometown;

  const wins = calculateWins(fighter.fights);
  const losses = calculateLosses(fighter.fights);
  const draws = calculateDraws(fighter.fights);

  fighterRecord.textContent =
    "Record: " + wins + "-" + losses + "-" + draws;
}

function displayCareerStatistics(fighter) {
  statsGrid.innerHTML = "";

  const fights = fighter.fights;
  const wins = calculateWins(fights);
  const finishPercentage = calculateFinishPercentage(fights);

  const statistics = [
    { label: "Total Fights", value: fights.length },
    { label: "Wins", value: wins },
    { label: "Losses", value: calculateLosses(fights) },
    { label: "Knockout Wins", value: calculateKnockoutWins(fights) },
    { label: "Submission Wins", value: calculateSubmissionWins(fights) },
    { label: "Decision Wins", value: calculateDecisionWins(fights) },
    {
      label: "Finish Percentage",
      value: finishPercentage.toFixed(1) + "%"
    },
    { label: "Current Streak", value: calculateCurrentStreak(fights) }
  ];

  statistics.forEach(function (stat) {
    statsGrid.appendChild(createStatCard(stat.label, stat.value));
  });
}

function displayRecentForm(fighter) {
  recentForm.innerHTML = "";

  const results = getRecentResults(fighter.fights);

  if (results.length === 0) {
    const empty = document.createElement("p");
    empty.classList.add("empty-state");
    empty.textContent = "No recent fights available.";
    recentForm.appendChild(empty);
    return;
  }

  results.forEach(function (result) {
    const badge = document.createElement("span");
    badge.classList.add("form-badge");

    if (result === "W") {
      badge.classList.add("form-badge--win");
      badge.textContent = "W";
      badge.setAttribute("aria-label", "Win");
    } else if (result === "L") {
      badge.classList.add("form-badge--loss");
      badge.textContent = "L";
      badge.setAttribute("aria-label", "Loss");
    } else {
      badge.classList.add("form-badge--draw");
      badge.textContent = "D";
      badge.setAttribute("aria-label", "Draw");
    }

    recentForm.appendChild(badge);
  });
}

function displayFightHistory(fights) {
  fightList.innerHTML = "";

  resultsCount.textContent =
    fights.length + (fights.length === 1 ? " fight shown" : " fights shown");

  if (fights.length === 0) {
    const empty = document.createElement("p");
    empty.classList.add("empty-state");
    empty.textContent = "No fights match the selected filter.";
    fightList.appendChild(empty);
    return;
  }

  fights.forEach(function (fight) {
    fightList.appendChild(createFightCard(fight));
  });
}

function showFightDetails(fighter, fight) {
  selectedFightId = fight.id;
  fightDetails.hidden = false;

  fightDetailsContent.innerHTML = "";

  const details = [
    ["Fighter", fighter.name],
    ["Opponent", fight.opponent],
    ["Result", fight.result],
    ["Method", fight.method],
    ["Round", String(fight.round)],
    ["Time", fight.time],
    ["Event", fight.event],
    ["Date", formatFightDate(fight.date)],
    ["Location", fight.location]
  ];

  details.forEach(function (item) {
    const line = document.createElement("p");
    const label = document.createElement("strong");
    label.textContent = item[0] + ":";
    line.appendChild(label);
    line.appendChild(document.createTextNode(" " + item[1]));
    fightDetailsContent.appendChild(line);
  });

  const notes = document.createElement("p");
  notes.classList.add("details-notes");
  notes.textContent = fight.notes;
  fightDetailsContent.appendChild(notes);

  closeDetailsButton.focus();
}

function closeFightDetails() {
  selectedFightId = null;
  fightDetails.hidden = true;
  fightDetailsContent.innerHTML = "";
}

function updateActiveFilterButtons() {
  const buttons = document.querySelectorAll(".filter-button");

  buttons.forEach(function (button) {
    const isActive = button.dataset.filter === selectedFightFilter;
    button.classList.toggle("is-active", isActive);
  });
}

function updateApplication() {
  const fighter = getSelectedFighter();

  if (!fighter) {
    statusMessage.textContent = "Fighter not found.";
    return;
  }

  displayFighterProfile(fighter);
  displayCareerStatistics(fighter);
  displayRecentForm(fighter);

  const filteredFights = filterFights(fighter.fights, selectedFightFilter);
  const sortedFights = sortFights(filteredFights, selectedSortOption);
  displayFightHistory(sortedFights);
  updateActiveFilterButtons();

  // Keep the details panel in sync if a fight is still selected.
  if (selectedFightId !== null) {
    const selectedFight = findFightById(fighter.fights, selectedFightId);

    if (selectedFight) {
      showFightDetails(fighter, selectedFight);
    } else {
      closeFightDetails();
    }
  }
}


/* =========================================================
   Event Handlers
   ========================================================= */

function handleFighterChange(event) {
  selectedFighterId = Number(event.target.value);
  selectedFightFilter = "all";
  selectedSortOption = "newest";
  sortSelect.value = "newest";
  closeFightDetails();
  statusMessage.textContent = "";
  updateApplication();
}

function handleFilterClick(event) {
  const button = event.target.closest(".filter-button");

  if (!button) {
    return;
  }

  selectedFightFilter = button.dataset.filter;
  updateApplication();
}

function handleSortChange(event) {
  selectedSortOption = event.target.value;
  updateApplication();
}

function handleFightListClick(event) {
  const button = event.target.closest("[data-fight-id]");

  if (!button || !button.classList.contains("details-button")) {
    return;
  }

  const fightId = Number(button.dataset.fightId);
  const fighter = getSelectedFighter();
  const fight = findFightById(fighter.fights, fightId);

  if (!fight) {
    statusMessage.textContent = "That fight could not be found.";
    return;
  }

  showFightDetails(fighter, fight);
}

function handleTeachingNotesToggle() {
  const isHidden = teachingNotes.hidden;
  teachingNotes.hidden = !isHidden;

  teachingNotesButton.setAttribute("aria-expanded", String(isHidden));
  teachingNotesButton.textContent = isHidden
    ? "Hide Teaching Notes"
    : "Show Teaching Notes";
}

function handleAddDemonstrationFight() {
  const fighter = getSelectedFighter();

  if (!fighter) {
    return;
  }

  if (fighter.demoFightAdded) {
    statusMessage.textContent =
      "The demonstration fight has already been added for " +
      fighter.name +
      ".";
    return;
  }

  // .push() adds a new object to the end of the fights array.
  fighter.fights.push({
    id: fighter.id * 1000 + 999,
    opponent: "Demo Rival",
    result: "Win",
    method: "KO/TKO",
    round: 1,
    time: "1:11",
    event: "Classroom Showcase",
    date: "2026-07-27",
    location: "Campus Arena",
    notes:
      "Added live during class to show how one data change updates the whole page."
  });

  fighter.demoFightAdded = true;
  selectedFightFilter = "all";
  selectedSortOption = "newest";
  sortSelect.value = "newest";

  statusMessage.textContent =
    "Demonstration fight added for " +
    fighter.name +
    ". Watch the stats, form, and history update together.";

  updateApplication();
}


/* =========================================================
   Event Listeners
   ========================================================= */

fighterSelect.addEventListener("change", handleFighterChange);
sortSelect.addEventListener("change", handleSortChange);
filterControls.addEventListener("click", handleFilterClick);
fightList.addEventListener("click", handleFightListClick);
closeDetailsButton.addEventListener("click", closeFightDetails);
teachingNotesButton.addEventListener("click", handleTeachingNotesToggle);
demoFightButton.addEventListener("click", handleAddDemonstrationFight);


/* =========================================================
   Initial Application Setup
   ========================================================= */

populateFighterSelect();
updateApplication();
