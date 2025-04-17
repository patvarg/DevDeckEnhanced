// Define a default deck for when no cards exist in localStorage.
const defaultDeck = [
    {
      front: "What is JavaScript?",
      back: "A programming language primarily used for web development.",
      tag: "js",
      level: 1,
      lastReviewed: null,
      reviewCount: 0
    },
    {
      front: "Explain a closure in JavaScript.",
      back: "A closure is a function that has access to its own scope, the outer function's scope, and the global scope.",
      tag: "js",
      level: 1,
      lastReviewed: null,
      reviewCount: 0
    },
        {
          front: "What is JavaScript?",
          back: "A programming language primarily used for web development.",
          tag: "js",
          level: 1,
          lastReviewed: null,
          reviewCount: 0
        },
        {
          front: "Explain a closure in JavaScript.",
          back: "A closure is a function that has access to its own scope, the outer function's scope, and the global scope.",
          tag: "js",
          level: 1,
          lastReviewed: null,
          reviewCount: 0
        },
        {
          front: "What is a variable in JavaScript and its types?",
          back: "A variable is a container for storing data values. In JavaScript, you can declare variables using var, let, or const.",
          tag: "js",
          level: 1,
          lastReviewed: null,
          reviewCount: 0
        },
        {
          front: "What is the difference between var, let, and const?",
          back: "var is function-scoped; let and const are block-scoped, with const additionally disallowing reassignment.",
          tag: "js",
          level: 1,
          lastReviewed: null,
          reviewCount: 0
        },
        {
          front: "What is hoisting in JavaScript?",
          back: "Hoisting is the behavior where variable and function declarations are moved to the top of their scope before code execution.",
          tag: "js",
          level: 1,
          lastReviewed: null,
          reviewCount: 0
        },
        {
          front: "What is scope in JavaScript?",
          back: "Scope defines the accessibility of variables and functions; it can be global or local (block/function scope).",
          tag: "js",
          level: 1,
          lastReviewed: null,
          reviewCount: 0
        },
        {
          front: "What is a callback function?",
          back: "A callback function is a function passed as an argument to another function to be executed later.",
          tag: "js",
          level: 1,
          lastReviewed: null,
          reviewCount: 0
        },
        {
          front: "What is a Promise in JavaScript?",
          back: "A Promise represents the eventual completion or failure of an asynchronous operation.",
          tag: "async",
          level: 1,
          lastReviewed: null,
          reviewCount: 0
        },
        {
          front: "Explain async/await in JavaScript.",
          back: "Async/await allows you to write asynchronous code in a synchronous style, simplifying promise handling.",
          tag: "async",
          level: 1,
          lastReviewed: null,
          reviewCount: 0
        },
        {
          front: "What is the difference between == and === in JavaScript?",
          back: "== checks for equality with coercion, while === checks for equality without coercion (both value and type).",
          tag: "js",
          level: 1,
          lastReviewed: null,
          reviewCount: 0
        },
        {
          front: "What is the Document Object Model (DOM)?",
          back: "The DOM is a programming interface for HTML/XML documents that allows scripts to update the content, structure, and style.",
          tag: "dom",
          level: 1,
          lastReviewed: null,
          reviewCount: 0
        },
        {
          front: "How do you select an element by ID in JavaScript?",
          back: "By using document.getElementById('elementID').",
          tag: "dom",
          level: 1,
          lastReviewed: null,
          reviewCount: 0
        },
        {
          front: "How do you select elements by class name in JavaScript?",
          back: "Use document.getElementsByClassName('className') or document.querySelectorAll('.className').",
          tag: "dom",
          level: 1,
          lastReviewed: null,
          reviewCount: 0
        },
        {
          front: "What is event bubbling in JavaScript?",
          back: "Event bubbling is the process by which an event propagates from the deepest nested element up through its ancestors.",
          tag: "dom",
          level: 1,
          lastReviewed: null,
          reviewCount: 0
        },
        {
          front: "What is event delegation?",
          back: "Event delegation is a technique that uses event bubbling to handle events at a higher level in the DOM, reducing the number of event listeners.",
          tag: "dom",
          level: 1,
          lastReviewed: null,
          reviewCount: 0
        },
        {
          front: "How do you prevent default behavior in an event?",
          back: "By calling event.preventDefault() inside the event handler.",
          tag: "dom",
          level: 1,
          lastReviewed: null,
          reviewCount: 0
        },
        {
          front: "What does JSON.stringify() do?",
          back: "It converts a JavaScript object or value into a JSON string.",
          tag: "js",
          level: 1,
          lastReviewed: null,
          reviewCount: 0
        },
        {
          front: "What does JSON.parse() do?",
          back: "It converts a JSON string into a corresponding JavaScript object.",
          tag: "js",
          level: 1,
          lastReviewed: null,
          reviewCount: 0
        },
        {
          front: "What is the difference between null and undefined?",
          back: "Null represents the intentional absence of an object value, while undefined means a variable has been declared but has not been assigned a value.",
          tag: "js",
          level: 1,
          lastReviewed: null,
          reviewCount: 0
        },
        {
          front: "What does the 'this' keyword refer to in JavaScript?",
          back: "Its value depends on the context; in a method, it refers to the owner object, while in a function, it can be the global object or undefined in strict mode.",
          tag: "js",
          level: 1,
          lastReviewed: null,
          reviewCount: 0
        },
        {
          front: "What is object destructuring?",
          back: "A syntax that lets you extract properties from objects into distinct variables.",
          tag: "es6",
          level: 1,
          lastReviewed: null,
          reviewCount: 0
        },
        {
          front: "What is array destructuring?",
          back: "A syntax that enables unpacking values from an array into separate variables.",
          tag: "es6",
          level: 1,
          lastReviewed: null,
          reviewCount: 0
        },
        {
          front: "What are template literals?",
          back: "String literals enclosed by backticks (`) that allow embedded expressions and multi-line strings.",
          tag: "es6",
          level: 1,
          lastReviewed: null,
          reviewCount: 0
        },
        {
          front: "What are arrow functions?",
          back: "A concise syntax for writing function expressions that also lexically bind the 'this' value.",
          tag: "es6",
          level: 1,
          lastReviewed: null,
          reviewCount: 0
        },
        {
          front: "How does the spread operator work?",
          back: "It expands an iterable (like an array or string) into individual elements.",
          tag: "es6",
          level: 1,
          lastReviewed: null,
          reviewCount: 0
        },
        {
          front: "What are rest parameters?",
          back: "Rest parameters allow a function to accept an indefinite number of arguments as an array.",
          tag: "es6",
          level: 1,
          lastReviewed: null,
          reviewCount: 0
        },
        {
          front: "What is an Immediately Invoked Function Expression (IIFE)?",
          back: "An IIFE is a function that is executed as soon as it is defined, commonly used to create a new scope.",
          tag: "js",
          level: 1,
          lastReviewed: null,
          reviewCount: 0
        },
        {
          front: "What is the prototype chain?",
          back: "A mechanism in JavaScript where objects inherit properties and methods from other objects via prototypes.",
          tag: "js",
          level: 1,
          lastReviewed: null,
          reviewCount: 0
        },
        {
          front: "How is inheritance achieved in JavaScript?",
          back: "Through prototypes, where objects can inherit properties and methods from their prototype objects.",
          tag: "js",
          level: 1,
          lastReviewed: null,
          reviewCount: 0
        },
        {
          front: "What is functional programming in JavaScript?",
          back: "A programming paradigm that treats computation as the evaluation of mathematical functions and avoids mutable state.",
          tag: "js",
          level: 1,
          lastReviewed: null,
          reviewCount: 0
        },
        {
          front: "What are higher-order functions?",
          back: "Functions that take other functions as arguments or return them as results.",
          tag: "js",
          level: 1,
          lastReviewed: null,
          reviewCount: 0
        },
        {
          front: "What is a module in JavaScript?",
          back: "A self-contained unit of code that encapsulates functionality and can export or import parts as needed.",
          tag: "es6",
          level: 1,
          lastReviewed: null,
          reviewCount: 0
        },
        {
          front: "What is the purpose of the import/export syntax in ES6?",
          back: "It allows code to be organized into modules by exporting functions, objects, or primitives and importing them where needed.",
          tag: "es6",
          level: 1,
          lastReviewed: null,
          reviewCount: 0
        },
        {
          front: "What is the event loop in JavaScript?",
          back: "A mechanism that handles asynchronous callbacks by continuously checking the call stack and task queues.",
          tag: "async",
          level: 1,
          lastReviewed: null,
          reviewCount: 0
        },
        {
          front: "What is the call stack?",
          back: "A data structure that tracks function calls in a program, helping manage execution context.",
          tag: "js",
          level: 1,
          lastReviewed: null,
          reviewCount: 0
        },
        {
          front: "What is callback hell?",
          back: "A term for deeply nested callbacks that can make code hard to read and maintain.",
          tag: "async",
          level: 1,
          lastReviewed: null,
          reviewCount: 0
        },
        {
          front: "How does try/catch work in JavaScript?",
          back: "It enables error handling by attempting to run code in a try block and catching errors in the catch block.",
          tag: "js",
          level: 1,
          lastReviewed: null,
          reviewCount: 0
        },
        {
          front: "What is the difference between function declarations and function expressions?",
          back: "Function declarations are hoisted, allowing them to be called before they are defined; function expressions are not hoisted.",
          tag: "js",
          level: 1,
          lastReviewed: null,
          reviewCount: 0
        },
        {
          front: "What is the purpose of the JavaScript debugger?",
          back: "It helps developers inspect code execution, set breakpoints, and diagnose issues effectively.",
          tag: "js",
          level: 1,
          lastReviewed: null,
          reviewCount: 0
        },
        {
          front: "How are arrow functions different regarding 'this' binding?",
          back: "Arrow functions do not have their own 'this'; they inherit it from the surrounding lexical scope.",
          tag: "es6",
          level: 1,
          lastReviewed: null,
          reviewCount: 0
        },
        {
          front: "Explain immutability in JavaScript.",
          back: "Immutability means that once data is created, it cannot be changed, leading to simpler state management.",
          tag: "js",
          level: 1,
          lastReviewed: null,
          reviewCount: 0
        },
        {
          front: "How does array.map() work in JavaScript?",
          back: "array.map() applies a function to each element of an array and returns a new array with the resulting values.",
          tag: "array",
          level: 1,
          lastReviewed: null,
          reviewCount: 0
        },
        {
          front: "How does array.filter() work in JavaScript?",
          back: "array.filter() tests each element of an array with a function and returns a new array of elements that pass the test.",
          tag: "array",
          level: 1,
          lastReviewed: null,
          reviewCount: 0
        },
        {
          front: "How does array.reduce() work in JavaScript?",
          back: "array.reduce() executes a reducer function on each element, accumulating a single result from the array.",
          tag: "array",
          level: 1,
          lastReviewed: null,
          reviewCount: 0
        },
        {
          front: "What is the difference between for...in and for...of loops?",
          back: "for...in iterates over enumerable properties, while for...of iterates over values in an iterable object.",
          tag: "js",
          level: 1,
          lastReviewed: null,
          reviewCount: 0
        },
        {
          front: "What is promise chaining?",
          back: "It is the practice of linking multiple promises in a sequence via .then() calls to execute asynchronous operations sequentially.",
          tag: "async",
          level: 1,
          lastReviewed: null,
          reviewCount: 0
        },
        {
          front: "What is debouncing?",
          back: "Debouncing limits the rate at which a function is executed by delaying its invocation until a pause in events occurs.",
          tag: "performance",
          level: 1,
          lastReviewed: null,
          reviewCount: 0
        },
        {
          front: "What is throttling and why is it useful?",
          back: "Throttling restricts how often a function is called over time, which can improve performance during events like scrolling.",
          tag: "performance",
          level: 1,
          lastReviewed: null,
          reviewCount: 0
        },
        {
          front: "What are service workers?",
          back: "Service workers are scripts that run in the background, enabling offline capabilities and handling network requests.",
          tag: "async",
          level: 1,
          lastReviewed: null,
          reviewCount: 0
        },
        {
          front: "What is destructuring assignment in function parameters?",
          back: "It allows you to extract values from objects or arrays directly in a function's parameter list.",
          tag: "es6",
          level: 1,
          lastReviewed: null,
          reviewCount: 0
        },
        {
          front: "What are default parameters in JavaScript?",
          back: "Default parameters let you initialize function parameters with default values if no value or undefined is passed.",
          tag: "es6",
          level: 1,
          lastReviewed: null,
          reviewCount: 0
        },
        {
          front: "What is the difference between synchronous and asynchronous execution?",
          back: "Synchronous execution blocks further code execution until the current operation finishes; asynchronous execution allows multiple operations to run concurrently.",
          tag: "async",
          level: 1,
          lastReviewed: null,
          reviewCount: 0
        }
      ];
  
  // Load deck from localStorage or fallback to defaultDeck.
  let deck = JSON.parse(localStorage.getItem("devdeck-cards")) || [...defaultDeck];
  if (!Array.isArray(deck) || deck.length === 0) {
    deck = [...defaultDeck];
    localStorage.setItem("devdeck-cards", JSON.stringify(deck));
  }
  deck.forEach(card => { 
    if (!card.level) card.level = 1;
    if (!card.lastReviewed) card.lastReviewed = null;
    if (!card.reviewCount) card.reviewCount = 0;
  });
  
  let currentCardIndex = parseInt(localStorage.getItem("devdeck-current-index")) || 0;
  if (currentCardIndex >= deck.length) currentCardIndex = 0;

  // --- BADGES: per‑tag XP and themed unlocks ---
const badgesDisplay = document.getElementById("badgesDisplay");
const badgeConfig = {
  js: [ { xp:50, name: 'JS Jedi' }, { xp:100, name: 'JS Master' } ],
  dom: [ { xp:50, name: 'DOM Dominator' }, { xp:100, name: 'DOM Deity' } ],
  async: [ { xp:50, name: 'Async Ace' }, { xp:100, name: 'Async Architect' } ],
  es6: [ { xp:50, name: 'ES6 Expert' }, { xp:100, name: 'ES6 Evangelist' } ],
  react: [ { xp:50, name: 'React Rockstar' }, { xp:100, name: 'React Ruler' } ],
  array: [ { xp:50, name: 'Array Artisan' }, { xp:100, name: 'Array Architect' } ],
  performance: [ { xp:50, name: 'Performance Pro' }, { xp:100, name: 'Performance Pioneer' } ],
  quirks: [ { xp:50, name: 'Quirk Conqueror' }, { xp:100, name: 'Quirk Quintessence' } ]
};
let tagXp = JSON.parse(localStorage.getItem('devdeck-tagXp')) || {};
let badges = JSON.parse(localStorage.getItem('devdeck-badges')) || [];
// ensure all existing tags have an entry
new Set(deck.map(c=>c.tag)).forEach(tag => { if (!tagXp[tag]) tagXp[tag] = 0; });

function renderBadges() {
  badgesDisplay.textContent = badges.length ? '🏅 Badges: ' + badges.join(', ') : '';
}
renderBadges();
  
  // State variables
  let ttsEnabled = localStorage.getItem("tts") === "true";
  let ttsMode = localStorage.getItem("ttsMode") || "both"; // "both", "front", "back", "none"
  let activeTag = "all";
  let sessionCounter = 0;
  let totalAnswered = 0;
  let correctAnswers = 0;
  let xp = parseInt(localStorage.getItem("xp")) || 0;
  let sessionActive = false;
  let sessionTimerDuration = 600; // 10 minutes
  let sessionInterval = null;
  let sessionStartTime = null;
  
  // Achievements and review history
  let achievements = JSON.parse(localStorage.getItem("achievements")) || [];
  let reviewHistory = JSON.parse(localStorage.getItem("reviewHistory")) || {};
  
  // NEW: State to control whether the session has begun. (Initially false => show “Begin” card)
  let started = false;
  
  // DOM elements
  const container = document.getElementById("card-container");
  const deckBrowser = document.getElementById("deckBrowser");
  const tagFilter = document.getElementById("tagFilter");
  const progressBar = document.getElementById("progressBar");
  const xpBar = document.getElementById("xpBar");
  const statsPanel = document.getElementById("reviewStats");
  const xpDisplay = document.getElementById("xpDisplay");
  const achievementsDisplay = document.getElementById("achievementsDisplay");
  const sessionTimerDisplay = document.getElementById("sessionTimer");
  
  const frontInput = document.getElementById("frontInput");
  const backInput = document.getElementById("backInput");
  const tagInput = document.getElementById("tagInput");
  const suggestTagBtn = document.getElementById("suggestTagBtn");
  
  const flipBtn = document.getElementById("flipBtn");
  const nextBtn = document.getElementById("nextBtn");
  const prevBtn = document.getElementById("prevBtn");
  const shuffleBtn = document.getElementById("shuffleBtn");
  const resetBtn = document.getElementById("resetBtn");
  const addCardBtn = document.getElementById("addCardBtn");
  
  const darkModeToggle = document.getElementById("darkModeToggle");
  const ttsToggleBtn = document.getElementById("ttsToggle");
  const exportBtn = document.getElementById("exportBtn");
  const importInput = document.getElementById("importInput");
  
  const startSessionBtn = document.getElementById("startSessionBtn");
  const dailyChallengeBtn = document.getElementById("dailyChallengeBtn");
  const toggleBrowserBtn = document.getElementById("toggleBrowserBtn");

  const timeAttackBtn = document.getElementById("timeAttackBtn");
const timeAttackBestDisplay = document.getElementById("timeAttackBest");
let bestTimeAttack = parseInt(localStorage.getItem("devdeck-bestTimeAttack")) || 0;
timeAttackBestDisplay.textContent = bestTimeAttack
  ? `Time Attack Best: ${bestTimeAttack}`
  : '';
let timeAttackActive = false;
let timeAttackTimer = null;
let timeAttackTimeLeft = 60;
let timeAttackScore = 0;

function startTimeAttack() {
  timeAttackActive = true;
  timeAttackTimeLeft = 60;
  timeAttackScore = 0;
  sessionTimerDisplay.textContent = `Time Attack: ${timeAttackTimeLeft}s | Score: ${timeAttackScore}`;
  clearInterval(timeAttackTimer);
  timeAttackTimer = setInterval(() => {
    timeAttackTimeLeft--;
    sessionTimerDisplay.textContent = `Time Attack: ${timeAttackTimeLeft}s | Score: ${timeAttackScore}`;
    if (timeAttackTimeLeft <= 0) endTimeAttack();
  }, 1000);
}

function endTimeAttack() {
  clearInterval(timeAttackTimer);
  timeAttackActive = false;
  alert(`⏱ Time Attack over! You scored ${timeAttackScore} points.`);
  if (timeAttackScore > bestTimeAttack) {
    bestTimeAttack = timeAttackScore;
    localStorage.setItem("devdeck-bestTimeAttack", bestTimeAttack);
    timeAttackBestDisplay.textContent = `Time Attack Best: ${bestTimeAttack}`;
    alert(`🎉 New personal best: ${bestTimeAttack}!`);
  }
  sessionTimerDisplay.textContent = '';
}

timeAttackBtn.addEventListener("click", startTimeAttack);
  // STREAK: get & update streak data
const streakBanner = document.getElementById("streakBanner");
function updateStreak() {
  const today = new Date().toISOString().slice(0,10);
  let last = localStorage.getItem("devdeck-last-date");
  let streak = parseInt(localStorage.getItem("devdeck-streak")) || 0;
  if (last === today) {
    // already counted today
  } else {
    // new day!
    if (last === new Date(new Date(today) - 864e5).toISOString().slice(0,10)) {
      streak++;
    } else {
      streak = 1;
    }
    localStorage.setItem("devdeck-streak", streak);
    localStorage.setItem("devdeck-last-date", today);
  }
  streakBanner.textContent = `🔥 ${streak}-day streak!`;
  streakBanner.classList.remove("hidden");
}
// call once on load
updateStreak();

  
  // Voice settings elements
  const ttsModeSelect = document.getElementById("ttsMode");
  const voiceSelect = document.getElementById("voiceSelect");
  const voiceSpeedInput = document.getElementById("voiceSpeed");
  
  let selectedVoice = null;
  let voiceSpeed = parseFloat(voiceSpeedInput.value) || 1;
  
  // Ensure the card container is visible and deck browser is hidden on load.
  deckBrowser.classList.add("hidden");
  container.classList.remove("hidden");
  
  // --- TTS Voice Population ---
  function populateVoiceList() {
    if (typeof speechSynthesis === "undefined") return;
    let voices = speechSynthesis.getVoices();
    voiceSelect.innerHTML = "";
    voices.forEach(voice => {
      let option = document.createElement("option");
      option.value = voice.name;
      option.textContent = voice.name;
      voiceSelect.appendChild(option);
      if (!selectedVoice) {
        selectedVoice = voice;
        option.selected = true;
      }
    });
  }
  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }
  
  ttsModeSelect.value = ttsMode;
  ttsModeSelect.addEventListener("change", () => {
    ttsMode = ttsModeSelect.value;
    localStorage.setItem("ttsMode", ttsMode);
  });
  voiceSelect.addEventListener("change", () => {
    const chosenName = voiceSelect.value;
    const voices = speechSynthesis.getVoices();
    selectedVoice = voices.find(v => v.name === chosenName);
  });
  voiceSpeedInput.addEventListener("input", () => {
    voiceSpeed = parseFloat(voiceSpeedInput.value);
  });
  
  ttsToggleBtn.textContent = ttsEnabled ? "🔊 TTS On" : "🔇 TTS Off";
  ttsToggleBtn.addEventListener("click", () => {
    ttsEnabled = !ttsEnabled;
    localStorage.setItem("tts", ttsEnabled);
    ttsToggleBtn.textContent = ttsEnabled ? "🔊 TTS On" : "🔇 TTS Off";
  });
  
  if (localStorage.getItem("dark") === "true") {
    document.body.classList.add("dark");
  }
  darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    localStorage.setItem("dark", document.body.classList.contains("dark"));
  });
  
  // --- Utility: Levenshtein Distance for Fuzzy Matching ---
  function getLevenshteinDistance(a, b) {
    const matrix = [];
    for (let i = 0; i <= b.length; i++) {
      matrix[i] = [i];
    }
    for (let j = 0; j <= a.length; j++) {
      matrix[0][j] = j;
    }
    for (let i = 1; i <= b.length; i++) {
      for (let j = 1; j <= a.length; j++) {
        if (b.charAt(i - 1) === a.charAt(j - 1)) {
          matrix[i][j] = matrix[i - 1][j - 1];
        } else {
          matrix[i][j] = Math.min(
            matrix[i - 1][j - 1] + 1,
            Math.min(matrix[i][j - 1] + 1, matrix[i - 1][j] + 1)
          );
        }
      }
    }
    return matrix[b.length][a.length];
  }
  
  function similarity(s1, s2) {
    s1 = s1.toLowerCase().trim();
    s2 = s2.toLowerCase().trim();
    const distance = getLevenshteinDistance(s1, s2);
    const maxLen = Math.max(s1.length, s2.length);
    if (maxLen === 0) return 1;
    return 1 - distance / maxLen;
  }
  
  // --- XP Bar Rendering ---
  const targetXP = 100;
  function renderXPBar() {
    const xpPercent = Math.min((xp / targetXP) * 100, 100);
    xpBar.style.width = xpPercent + "%";
    xpBar.style.background = xpPercent > 90 ? "#4caf50" : "#ffc107";
  }
  
  // --- Save Persistent State ---
  function saveState() {
    localStorage.setItem("devdeck-cards", JSON.stringify(deck));
    localStorage.setItem("devdeck-current-index", currentCardIndex);
    localStorage.setItem("xp", xp);
    localStorage.setItem("achievements", JSON.stringify(achievements));
    localStorage.setItem("reviewHistory", JSON.stringify(reviewHistory));
    localStorage.setItem("devdeck-tagXp", JSON.stringify(tagXp));
    localStorage.setItem("devdeck-badges", JSON.stringify(badges));
  }
  
  // --- Filtering and Rendering Helpers ---
  function filteredDeck() {
    let tagged = activeTag === "all" ? deck : deck.filter(c => c.tag === activeTag);
    if (!sessionActive) return tagged;
    const intervals = {1: 1, 2: 3, 3: 7, 4: 14, 5: Infinity};
    return tagged.filter(c => {
      if (!c.lastReviewed) return true;
      const daysSince = (new Date() - new Date(c.lastReviewed)) / (1000 * 3600 * 24);
      return daysSince >= intervals[c.level];
    });
  }
  
  function renderTagFilter() {
    const tags = [...new Set(deck.map(c => c.tag).filter(Boolean))];
    tagFilter.innerHTML = `<option value="all">All</option>` + tags.map(t => `<option value="${t}">${t}</option>`).join("");
    tagFilter.value = activeTag;
  }
  
  function renderProgressBar() {
    let currentDeck = filteredDeck();
    let progress = currentDeck.length ? ((currentCardIndex + 1) / currentDeck.length) * 100 : 0;
    progressBar.style.width = progress + "%";
  }
  
  function renderStats() {
    const today = new Date().toISOString().split("T")[0];
    const reviewsToday = reviewHistory[today] || 0;
    const accuracy = totalAnswered ? Math.round((correctAnswers / totalAnswered) * 100) : 0;
    const avgTime = sessionActive && totalAnswered ? ((new Date() - sessionStartTime) / 1000 / totalAnswered).toFixed(1) : 0;
    statsPanel.textContent = `Reviewed Today: ${reviewsToday} | Accuracy: ${accuracy}% | Avg Time: ${avgTime}s`;
    xpDisplay.textContent = `XP: ${xp}`;
    achievementsDisplay.textContent = achievements.length ? "Achievements: " + achievements.join(", ") : "";
  }

  // --- HEATMAP: daily review calendar for past 30 days ---
const heatmapContainer = document.getElementById("heatmapCalendar");
function renderHeatmap() {
  const today = new Date();
  const oneDay = 24*3600*1000;
  let html = "";
  // build last 30 days, oldest first
  for (let i = 29; i >= 0; i--) {
    const d = new Date(today - i*oneDay);
    const key = d.toISOString().slice(0,10);
    const count = reviewHistory[key] || 0;
    let cls = "empty";
    if (count >= 4) cls = "high";
    else if (count >= 2) cls = "med";
    else if (count === 1) cls = "low";
    html += `<div class="heatday ${cls}" title="${key}: ${count} reviews">
               <span>${d.getDate()}</span>
             </div>`;
  }
  heatmapContainer.innerHTML = html;
}

  
  function updateReviewHistory() {
    const today = new Date().toISOString().split("T")[0];
    reviewHistory[today] = (reviewHistory[today] || 0) + 1;
  }
  
  function checkAchievements() {
    if (xp >= 50 && !achievements.includes("50 XP")) achievements.push("50 XP");
    if (xp >= 100 && !achievements.includes("100 XP")) achievements.push("100 XP");
  }
  
  // --- TTS Speak ---
  function speak(text, side) {
    if (!ttsEnabled) return;
    if (ttsMode === "none") return;
    if (ttsMode !== "both" && ttsMode !== side) return;
    const utter = new SpeechSynthesisUtterance(text);
    utter.voice = selectedVoice;
    utter.rate = voiceSpeed;
    speechSynthesis.speak(utter);
  }
  
  // --- Render Flashcard View with Answer Input ---
  function renderCard() {
    const currentDeck = filteredDeck();
    if (currentDeck.length === 0) {
      container.innerHTML = "<p>No cards to show. Adjust tag or session filters.</p>";
      return;
    }
    const card = currentDeck[currentCardIndex];
    container.innerHTML = `
      <div class="card-wrapper">
        <div class="card-inner" id="flashcard">
          <div class="front">${card.front}</div>
          <div class="back">${card.back}</div>
          <div class="level-indicator">Lv.${card.level}</div>
        </div>
      </div>
      <div class="answer-section">
        <input type="text" id="userAnswer" placeholder="Enter your answer here" />
        <button id="submitAnswerBtn">Submit Answer</button>
        <button id="nextCardBtn" class="hidden">Next Card</button>
      </div>
      <div id="feedback"></div>
    `;
    
    const userAnswerInput = document.getElementById("userAnswer");
    const submitAnswerBtn = document.getElementById("submitAnswerBtn");
    const nextCardBtn = document.getElementById("nextCardBtn");
    const feedbackDiv = document.getElementById("feedback");
    const flashcard = document.getElementById("flashcard");
    
    // When the flashcard is clicked, read aloud the visible side.
    flashcard.onclick = () => {
      if (ttsEnabled) {
        if (flashcard.classList.contains("flipped")) {
          speak(card.back, "back");
        } else {
          speak(card.front, "front");
        }
      }
    };
    
    submitAnswerBtn.onclick = () => {
      const userAnswer = userAnswerInput.value.trim().toLowerCase();
      const correctAnswer = card.back.trim().toLowerCase();
      userAnswerInput.disabled = true;
      submitAnswerBtn.classList.add("hidden");
      // Ensure the card is flipped to show the answer
      flashcard.classList.add("flipped");
      
          const sim = similarity(userAnswer, correctAnswer);
     // 1) locate the actual card in your master deck
      const actual = deck.find(c => c.front === card.front && c.back === card.back);
      // 2) always record that you reviewed it
      actual.reviewCount++;
      actual.lastReviewed = new Date().toISOString();

      if (sim >= 0.7) {
        feedbackDiv.textContent = "Correct!";
        if (actual.level < 5) actual.level++;
        correctAnswers++;
        xp += 5;
        // badge/tag XP logic
        const tag = card.tag || 'untagged';
        tagXp[tag] = (tagXp[tag] || 0) + 5;
        (badgeConfig[tag] || []).forEach(b => {
          if (tagXp[tag] >= b.xp && !badges.includes(b.name)) {
            badges.push(b.name);
            alert(`🏅 You unlocked the badge: ${b.name}!`);
          }
        });
      } else {
        feedbackDiv.textContent = "Incorrect. The correct answer is: " + card.back;
        actual.level = 1;
                xp = Math.max(xp - 3, 0);
      }
      totalAnswered++;
      // if in time attack, tally corrects
if (timeAttackActive) {
  if (sim >= 0.7) timeAttackScore++;
  sessionTimerDisplay.textContent = `Time Attack: ${timeAttackTimeLeft}s | Score: ${timeAttackScore}`;
}
      // 3) persist *all* state in one go
      saveState();
      updateReviewHistory();
      checkAchievements();
      nextCardBtn.classList.remove("hidden");
      renderXPBar();
    };
    
    nextCardBtn.onclick = () => {
      currentCardIndex = (currentCardIndex + 1) % filteredDeck().length;
      renderView();
    };
  }
  
  // --- Render Deck Browser (Grid Layout) ---
  function renderDeckBrowser() {
    deckBrowser.innerHTML = deck.map((card, idx) => `
      <div class="deck-card" data-index="${idx}">
        <div class="card-front">${card.front}</div>
        <div class="card-back">${card.back}</div>
        <div class="level-indicator">Lv.${card.level}</div>
        <button class="editBtn">Edit</button>
        <button class="deleteBtn">Delete</button>
      </div>
    `).join("");
    
    document.querySelectorAll(".deck-card").forEach(cardEl => {
      const idx = parseInt(cardEl.getAttribute("data-index"));
      cardEl.querySelector(".editBtn").onclick = () => {
        const card = deck[idx];
        const newFront = prompt("Edit front:", card.front);
        const newBack = prompt("Edit back:", card.back);
        if (newFront) card.front = newFront;
        if (newBack) card.back = newBack;
        renderView();
      };
      cardEl.querySelector(".deleteBtn").onclick = () => {
        deck.splice(idx, 1);
        renderView();
      };
    });
  }
  
  // --- Session and Challenge Functions ---
  function startCustomSession() {
    sessionActive = true;
    sessionStartTime = new Date();
    totalAnswered = 0;
    correctAnswers = 0;
    sessionCounter = 0;
    xp = 0;
    if (sessionInterval) clearInterval(sessionInterval);
    sessionInterval = setInterval(() => {
      sessionTimerDuration--;
      sessionTimerDisplay.textContent = "Session Time Left: " + sessionTimerDuration + "s";
      if (sessionTimerDuration <= 0) {
        clearInterval(sessionInterval);
        sessionActive = false;
        alert("Session complete! Accuracy: " + (totalAnswered ? Math.round((correctAnswers / totalAnswered) * 100) : 0) + "%");
        sessionTimerDuration = 600;
        renderView();
      }
    }, 1000);
  }
  
  function startDailyChallenge() {
    const sorted = deck.slice().sort((a, b) => a.level - b.level);
    const challengeCards = sorted.slice(0, 3);
    alert("Daily Challenge:\n" + challengeCards.map(c => c.front).join(" | "));
  }
  
  // --- Auto-Tag Suggestion ---
  suggestTagBtn.addEventListener("click", () => {
    const text = frontInput.value + " " + backInput.value;
    let suggestion = "";
    const keywords = {
      "js": ["function", "javascript", "closure", "var", "let", "const"],
      "dom": ["dom", "element", "document", "event"],
      "async": ["async", "await", "promise", "callback"],
      "es6": ["template", "arrow", "class", "spread"],
      "react": ["react", "component", "jsx"],
      "array": ["array", "map", "reduce", "forEach"],
      "performance": ["debounce", "throttle"],
      "quirks": ["nan", "undefined"]
    };
    for (let tag in keywords) {
      for (let word of keywords[tag]) {
        if (text.toLowerCase().includes(word.toLowerCase())) {
          suggestion = tag;
          break;
        }
      }
      if (suggestion) break;
    }
    tagInput.value = suggestion || "";
  });
  
  // --- Add Card ---
  addCardBtn.addEventListener("click", () => {
    const front = frontInput.value.trim();
    const back = backInput.value.trim();
    const tag = tagInput.value.trim();
    if (!front || !back) return alert("Fill in both sides!");
    const duplicate = deck.find(c => c.front === front && c.back === back);
    if (duplicate && !confirm("Duplicate card exists. Add anyway?")) return;
    deck.push({ front, back, tag, level: 1, lastReviewed: null, reviewCount: 0 });
    activeTag = "all";
    currentCardIndex = deck.length - 1;
    frontInput.value = "";
    backInput.value = "";
    tagInput.value = "";
    renderTagFilter();
    renderView();
  });
  
  // --- Shuffle Deck ---
  shuffleBtn.addEventListener("click", () => {
    for (let i = deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    currentCardIndex = 0;
    renderView();
  });
  
  // --- Reset Deck ---
  resetBtn.addEventListener("click", () => {
    if (confirm("Reset deck to default and clear all saved data?")) {
      localStorage.clear();
      location.reload();
    }
  });
  
  tagFilter.addEventListener("change", () => {
    activeTag = tagFilter.value;
    currentCardIndex = 0;
    renderView();
  });
  
  document.addEventListener("keydown", (e) => {
    if (["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) return;
    if (e.key === "ArrowRight" || e.key === "d" || e.key === "l") nextBtn.click();
    if (e.key === "ArrowLeft" || e.key === "a" || e.key === "h") prevBtn.click();
    if (e.key === " " || e.key === "s") {
      e.preventDefault();
      flipBtn.click();
    }
  });
  
  nextBtn.addEventListener("click", () => {
    if (currentCardIndex < filteredDeck().length - 1) {
      currentCardIndex++;
      renderView();
    }
  });
  
  prevBtn.addEventListener("click", () => {
    if (currentCardIndex > 0) {
      currentCardIndex--;
      renderView();
    }
  });
  
  // --- Revised Flip Button: Toggle the "flipped" class on the card ---
  flipBtn.addEventListener("click", () => {
    const flashcard = document.getElementById("flashcard");
    if (!flashcard) return;
    flashcard.classList.toggle("flipped");
    const currentDeck = filteredDeck();
    if (currentDeck.length === 0) return;
    const card = currentDeck[currentCardIndex];
    if (flashcard.classList.contains("flipped")) {
      speak(card.back, "back");
    } else {
      speak(card.front, "front");
    }
  });
  
  exportBtn.addEventListener("click", () => {
    const blob = new Blob([JSON.stringify(deck, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "devdeck-cards.json";
    a.click();
    URL.revokeObjectURL(url);
  });
  
  importInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (evt) => {
      try {
        const imported = JSON.parse(evt.target.result);
        if (!Array.isArray(imported)) throw new Error("Invalid format");
        if (!confirm("Replace current deck with imported deck?")) return;
        deck = imported;
        deck.forEach(card => {
          if (!card.level) card.level = 1;
          if (!card.lastReviewed) card.lastReviewed = null;
          if (!card.reviewCount) card.reviewCount = 0;
        });
        currentCardIndex = 0;
        renderTagFilter();
        renderView();
        alert("Deck imported successfully.");
      } catch (err) {
        alert("Import failed: " + err.message);
      }
    };
    reader.readAsText(file);
  });
  
  startSessionBtn.addEventListener("click", () => {
    startCustomSession();
  });
  
  dailyChallengeBtn.addEventListener("click", () => {
    startDailyChallenge();
  });
  
  toggleBrowserBtn.addEventListener("click", () => {
    deckBrowser.classList.toggle("hidden");
    container.classList.toggle("hidden");
    if (!deckBrowser.classList.contains("hidden")) {
      renderDeckBrowser();
    } else {
      renderView();
    }
  });
  
  // --- NEW: renderView controls which view is displayed.
  function renderView() {
    if (!started) {
      // Display a Begin placeholder card
      container.innerHTML = `
        <div class="card-wrapper" id="begin-card">
          <div class="card-inner">
            <div class="front">Begin</div>
          </div>
        </div>
        <p>Click the card to start your study session</p>
      `;
      document.getElementById("begin-card").addEventListener("click", () => {
        started = true;
        currentCardIndex = 0;
        renderView();
      });
    } else {
      renderCard();
    }
    renderProgressBar();
    renderStats();
    renderHeatmap();
    saveState();
  }
  
  renderTagFilter();
  renderView();
  renderXPBar();
  