'use strict';

// 750 activities. IDs 0–299 are preserved from the previous catalog.
// Preserve IDs for browser favorites, history, and saved voting sessions.
// Main supplies and per-person prices are estimates, not live availability.
// Some activities require extra preparation, booking, drying, or chilling time.
const ideas = [
  {
    "title": "Living-room film festival",
    "mood": "chill",
    "cost": 0,
    "time": 120,
    "min": 1,
    "max": 8,
    "icon": "🎬",
    "description": "Pick a theme, make popcorn, and give your picks an awards ceremony.",
    "steps": [
      "Choose two short films or one feature.",
      "Make snacks and dim the lights.",
      "Rate the story, acting, and wildest moment."
    ],
    "id": 0,
    "supplies": [
      "device",
      "kitchen"
    ]
  },
  {
    "title": "The $10 cooking challenge",
    "mood": "creative",
    "cost": 10,
    "time": 60,
    "min": 2,
    "max": 6,
    "icon": "🍝",
    "description": "One small budget. A few mystery ingredients. A surprisingly good dinner.",
    "steps": [
      "Agree on a $10-per-person grocery limit.",
      "Split into teams and choose ingredients.",
      "Cook, taste, and award the most creative dish."
    ],
    "id": 1,
    "supplies": [
      "kitchen"
    ]
  },
  {
    "title": "Golden-hour photo walk",
    "mood": "adventure",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "📷",
    "description": "Turn a familiar neighborhood into a gallery of little discoveries.",
    "steps": [
      "Pick a safe walking route and check sunset time.",
      "Find reflections, interesting shadows, and one surprising color.",
      "Share your five favorite photos."
    ],
    "id": 2,
    "supplies": [
      "camera",
      "outdoor"
    ]
  },
  {
    "title": "Board-game showdown",
    "mood": "competitive",
    "cost": 0,
    "time": 90,
    "min": 2,
    "max": 6,
    "icon": "🎲",
    "description": "Dust off a favorite and make the bragging rights official.",
    "steps": [
      "Choose a game you already own.",
      "Set a time limit and explain the rules.",
      "Keep a mini leaderboard and crown a champion."
    ],
    "id": 3,
    "supplies": [
      "board"
    ]
  },
  {
    "title": "Build a shared playlist",
    "mood": "chill",
    "cost": 0,
    "time": 30,
    "min": 2,
    "max": 6,
    "icon": "🎧",
    "description": "Trade the songs that feel like a specific place, memory, or person.",
    "steps": [
      "Choose a theme, such as midnight drives.",
      "Take turns nominating three songs.",
      "Play a favorite and explain why you chose it."
    ],
    "id": 4,
    "supplies": [
      "device"
    ]
  },
  {
    "title": "Sketch & swap",
    "mood": "creative",
    "cost": 0,
    "time": 30,
    "min": 2,
    "max": 6,
    "icon": "✏️",
    "description": "Trade drawings every few minutes. Artistic talent absolutely optional.",
    "steps": [
      "Grab paper and pencils.",
      "Draw for three minutes, then pass to the next person.",
      "Keep passing until every drawing tells a strange story."
    ],
    "id": 5,
    "supplies": [
      "paper"
    ]
  },
  {
    "title": "Neighborhood scavenger hunt",
    "mood": "adventure",
    "cost": 0,
    "time": 60,
    "min": 2,
    "max": 6,
    "icon": "🔎",
    "description": "Find the little things you usually walk straight past.",
    "steps": [
      "Make a list of ten things: a red door, a mural, a funny sign.",
      "Walk together or form teams; stay in public areas.",
      "Photograph finds and compare results."
    ],
    "id": 6,
    "supplies": [
      "camera",
      "outdoor"
    ]
  },
  {
    "title": "Homemade trivia night",
    "mood": "competitive",
    "cost": 0,
    "time": 60,
    "min": 2,
    "max": 8,
    "icon": "💡",
    "description": "Your friends, your questions, and some very questionable confidence.",
    "steps": [
      "Write five questions each without sharing answers.",
      "Take turns hosting rounds.",
      "Give one point per correct answer and settle ties with a bonus."
    ],
    "id": 7,
    "supplies": [
      "paper"
    ]
  },
  {
    "title": "Coffee & question cards",
    "mood": "chill",
    "cost": 10,
    "time": 60,
    "min": 2,
    "max": 6,
    "icon": "☕",
    "description": "Skip the small talk over a favorite drink.",
    "steps": [
      "Make coffee at home or choose a nearby cafe.",
      "Each person writes three thoughtful questions.",
      "Draw questions and give everyone time to answer."
    ],
    "id": 8,
    "supplies": [
      "kitchen"
    ]
  },
  {
    "title": "Paint a tiny masterpiece",
    "mood": "creative",
    "cost": 10,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🎨",
    "description": "Small canvas. Big creative energy. Zero pressure to be good.",
    "steps": [
      "Use paper or small canvases and basic paints.",
      "Choose a shared theme and set a timer.",
      "Give every finished piece an extravagant title."
    ],
    "id": 9,
    "supplies": [
      "craft",
      "paper"
    ]
  },
  {
    "title": "Picnic somewhere new",
    "mood": "adventure",
    "cost": 10,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🧺",
    "description": "A packed snack and a patch of grass can change the whole day.",
    "steps": [
      "Check weather and park hours.",
      "Pack snacks, water, and a blanket.",
      "Find a public spot and leave it cleaner than you found it."
    ],
    "id": 10,
    "supplies": [
      "outdoor",
      "kitchen"
    ]
  },
  {
    "title": "Paper-plane championship",
    "mood": "competitive",
    "cost": 0,
    "time": 30,
    "min": 2,
    "max": 6,
    "icon": "✈️",
    "description": "Engineer the ultimate paper airplane. Then put it to the test.",
    "steps": [
      "Give everyone three sheets of paper.",
      "Build planes for distance and accuracy.",
      "Use a clear indoor space and run three rounds."
    ],
    "id": 11,
    "supplies": [
      "paper"
    ]
  },
  {
    "title": "An actual reading hour",
    "mood": "chill",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "📖",
    "description": "Put your phone away and get lost in a chapter or two.",
    "steps": [
      "Choose a book and a comfortable spot.",
      "Set phones to silent for 45 minutes.",
      "Finish with a favorite quote or a short reflection."
    ],
    "id": 12,
    "supplies": [
      "books"
    ]
  },
  {
    "title": "Make a stop-motion short",
    "mood": "creative",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "🎞️",
    "description": "Bring everyday objects to life with your phone camera.",
    "steps": [
      "Choose objects and a ten-second story.",
      "Take photos while moving each object a tiny amount.",
      "Use a stop-motion app or assemble frames in an editor."
    ],
    "id": 13,
    "supplies": [
      "camera",
      "device"
    ]
  },
  {
    "title": "Explore a new walking route",
    "mood": "adventure",
    "cost": 0,
    "time": 30,
    "min": 1,
    "max": 6,
    "icon": "🧭",
    "description": "Take a different turn and notice something new.",
    "steps": [
      "Choose a well-lit public route.",
      "Bring water and let someone know your route if solo.",
      "Find one place you would like to revisit."
    ],
    "id": 14,
    "supplies": [
      "outdoor"
    ]
  },
  {
    "title": "Speed puzzle challenge",
    "mood": "competitive",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "🧩",
    "description": "Race the clock, a friend, or your own personal best.",
    "steps": [
      "Choose puzzles of similar difficulty.",
      "Start a shared timer.",
      "Compare times or work together to beat a target."
    ],
    "id": 15,
    "supplies": [
      "board"
    ]
  },
  {
    "title": "Make-your-own pizza night",
    "mood": "creative",
    "cost": 10,
    "time": 90,
    "min": 2,
    "max": 6,
    "icon": "🍕",
    "description": "Build a signature pizza and give it a ridiculous menu description.",
    "steps": [
      "Pick up dough, sauce, cheese, and toppings.",
      "Each person designs a personal pizza.",
      "Follow dough cooking instructions and share slices."
    ],
    "id": 16,
    "supplies": [
      "kitchen"
    ]
  },
  {
    "title": "Backyard stargazing",
    "mood": "chill",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "🌙",
    "description": "A blanket, a clear sky, and a slower kind of evening.",
    "steps": [
      "Check the forecast and find a safe dark spot.",
      "Bring a blanket and let your eyes adjust.",
      "Look for constellations or just enjoy the sky."
    ],
    "id": 17,
    "supplies": [
      "outdoor"
    ]
  },
  {
    "title": "Thrift-store treasure hunt",
    "mood": "adventure",
    "cost": 10,
    "time": 90,
    "min": 2,
    "max": 6,
    "icon": "🪩",
    "description": "Find the funniest, coolest, or most unexpected item on a tiny budget.",
    "steps": [
      "Check local store opening hours.",
      "Choose categories and a spending cap.",
      "Photograph your finds; buying anything is optional."
    ],
    "id": 18,
    "supplies": [
      "venue"
    ]
  },
  {
    "title": "Mini game jam",
    "mood": "creative",
    "cost": 0,
    "time": 120,
    "min": 1,
    "max": 6,
    "icon": "👾",
    "description": "Invent a game from paper, cards, or a few lines of code.",
    "steps": [
      "Pick a simple theme and one core rule.",
      "Spend an hour making a tiny playable version.",
      "Playtest and change one thing that makes it more fun."
    ],
    "id": 19,
    "supplies": [
      "paper"
    ]
  },
  {
    "title": "Backyard field day",
    "mood": "competitive",
    "cost": 0,
    "time": 60,
    "min": 2,
    "max": 6,
    "icon": "🏅",
    "description": "Bring back the low-stakes glory of school sports day.",
    "steps": [
      "Choose a safe open area.",
      "Set up toss, balance, and relay challenges.",
      "Score three rounds and celebrate everyone’s best event."
    ],
    "id": 20,
    "supplies": [
      "sports",
      "outdoor"
    ]
  },
  {
    "title": "Dessert tasting flight",
    "mood": "chill",
    "cost": 10,
    "time": 60,
    "min": 2,
    "max": 6,
    "icon": "🍰",
    "description": "Try a few sweet things and discover your very serious rankings.",
    "steps": [
      "Choose small desserts within budget.",
      "Check allergies and divide into tasting portions.",
      "Rate texture, flavor, and overall favorite."
    ],
    "id": 21,
    "supplies": [
      "kitchen"
    ]
  },
  {
    "title": "Write a time capsule",
    "mood": "creative",
    "cost": 0,
    "time": 30,
    "min": 1,
    "max": 6,
    "icon": "💌",
    "description": "Capture who you are now for a future version of you.",
    "steps": [
      "Write a letter with current favorites and predictions.",
      "Add a photo or small memento.",
      "Seal it and choose a date to open it."
    ],
    "id": 22,
    "supplies": [
      "paper"
    ]
  },
  {
    "title": "Local art walk",
    "mood": "adventure",
    "cost": 0,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🖼️",
    "description": "Discover murals, sculptures, or a free gallery close to home.",
    "steps": [
      "Find publicly accessible art and confirm opening hours.",
      "Choose three stops within walking distance.",
      "Pick a favorite and talk about what caught your eye."
    ],
    "id": 23,
    "supplies": [
      "outdoor"
    ]
  },
  {
    "title": "Card-game tournament",
    "mood": "competitive",
    "cost": 0,
    "time": 60,
    "min": 2,
    "max": 6,
    "icon": "🃏",
    "description": "A deck of cards is all the entertainment you need.",
    "steps": [
      "Pick a game that fits your group size.",
      "Agree on scoring before you begin.",
      "Play several short rounds and track the results."
    ],
    "id": 24,
    "supplies": [
      "cards"
    ]
  },
  {
    "title": "DIY mocktail lab",
    "mood": "creative",
    "cost": 10,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "🍋",
    "description": "Mix a signature drink with fruit, fizz, and a little imagination.",
    "steps": [
      "Choose juice, sparkling water, and garnishes.",
      "Create two small combinations.",
      "Name your favorite and write down the recipe."
    ],
    "id": 25,
    "supplies": [
      "kitchen"
    ]
  },
  {
    "title": "Sunrise breakfast outing",
    "mood": "adventure",
    "cost": 10,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "🌅",
    "description": "Start the day with a view and something good to eat.",
    "steps": [
      "Check sunrise time and a safe public viewpoint.",
      "Prepare breakfast to take along.",
      "Arrive early and enjoy the changing light."
    ],
    "id": 26,
    "supplies": [
      "kitchen",
      "outdoor"
    ]
  },
  {
    "title": "Living-room karaoke",
    "mood": "competitive",
    "cost": 0,
    "time": 60,
    "min": 2,
    "max": 6,
    "icon": "🎤",
    "description": "Commit to the performance. Pitch accuracy is negotiable.",
    "steps": [
      "Choose songs everyone knows.",
      "Use available instrumentals or sing unaccompanied.",
      "Award points for stage presence and creativity."
    ],
    "id": 27,
    "supplies": [
      "device"
    ]
  },
  {
    "title": "Stretch & reset",
    "mood": "chill",
    "cost": 0,
    "time": 30,
    "min": 1,
    "max": 6,
    "icon": "🌿",
    "description": "A quiet break for your body and your brain.",
    "steps": [
      "Clear a comfortable space.",
      "Try gentle stretches within your comfort level.",
      "Finish with five phone-free minutes and a glass of water."
    ],
    "id": 28,
    "supplies": []
  },
  {
    "title": "Make a one-minute movie",
    "mood": "creative",
    "cost": 0,
    "time": 120,
    "min": 2,
    "max": 6,
    "icon": "🎥",
    "description": "Write, shoot, and premiere an entire story before the evening ends.",
    "steps": [
      "Choose a genre and write a three-scene story.",
      "Film on a phone in a place you have permission to use.",
      "Edit a short cut and host your premiere."
    ],
    "id": 29,
    "supplies": [
      "camera",
      "device"
    ]
  },
  {
    "title": "Arcade mini tournament",
    "mood": "competitive",
    "cost": 25,
    "time": 90,
    "min": 2,
    "max": 6,
    "icon": "🕹️",
    "description": "Pick three games and see who can conquer the high scores.",
    "steps": [
      "Check a nearby arcade’s prices and hours.",
      "Set a spending limit before playing.",
      "Compete in three games and total your placements."
    ],
    "id": 30,
    "supplies": [
      "venue"
    ]
  },
  {
    "title": "Bookshop browse & trade",
    "mood": "chill",
    "cost": 0,
    "time": 60,
    "min": 2,
    "max": 6,
    "icon": "📚",
    "description": "Find a book you think the other person would love.",
    "steps": [
      "Choose an open local bookshop or library.",
      "Browse separately and pick a recommendation.",
      "Meet up and explain your choices; purchases optional."
    ],
    "id": 31,
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 32,
    "title": "Listen to a full album",
    "mood": "chill",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "💿",
    "description": "Hear an album in its intended order without shuffling.",
    "steps": [
      "Choose an album you can access.",
      "Put phones aside and listen from start to finish.",
      "Discuss the track that surprised you most."
    ],
    "supplies": [
      "device"
    ]
  },
  {
    "id": 33,
    "title": "Tea tasting",
    "mood": "chill",
    "cost": 10,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "🫖",
    "description": "Compare the aroma and flavor of several teas.",
    "steps": [
      "Prepare three teas according to their instructions.",
      "Taste small servings without sweeteners first.",
      "Rank your favorites and try a different steep time."
    ],
    "supplies": [
      "kitchen"
    ]
  },
  {
    "id": 34,
    "title": "Cloud watching",
    "mood": "chill",
    "cost": 0,
    "time": 30,
    "min": 1,
    "max": 6,
    "icon": "☁️",
    "description": "Slow down and find shapes in the sky.",
    "steps": [
      "Choose a comfortable shaded public spot.",
      "Notice how clouds change over ten minutes.",
      "Share the shapes or stories you see."
    ],
    "supplies": [
      "outdoor"
    ]
  },
  {
    "id": 35,
    "title": "Watch a sunset",
    "mood": "chill",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "🌇",
    "description": "Enjoy the changing evening colors from a good viewpoint.",
    "steps": [
      "Check sunset time and weather.",
      "Pick an accessible public viewpoint.",
      "Stay through the color changes and head back safely."
    ],
    "supplies": [
      "outdoor"
    ]
  },
  {
    "id": 36,
    "title": "Birdwatching",
    "mood": "chill",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "🐦",
    "description": "Identify a few nearby birds by sight or sound.",
    "steps": [
      "Choose a park and bring binoculars if you own them.",
      "Observe quietly without feeding or approaching wildlife.",
      "Use a field guide to identify three species."
    ],
    "supplies": [
      "outdoor"
    ]
  },
  {
    "id": 37,
    "title": "Complete a jigsaw puzzle",
    "mood": "chill",
    "cost": 0,
    "time": 120,
    "min": 1,
    "max": 6,
    "icon": "🧩",
    "description": "Settle in with a puzzle you already own.",
    "steps": [
      "Sort edge pieces and major colors.",
      "Build the border and work through recognizable sections.",
      "Save your progress or photograph the finished picture."
    ],
    "supplies": [
      "board"
    ]
  },
  {
    "id": 38,
    "title": "Listen to an audio story",
    "mood": "chill",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "🎧",
    "description": "Let someone else tell the story for a while.",
    "steps": [
      "Choose a library audiobook or freely available audio story.",
      "Settle into a comfortable spot.",
      "Pause afterward to share a memorable scene."
    ],
    "supplies": [
      "device"
    ]
  },
  {
    "id": 39,
    "title": "Watch a documentary",
    "mood": "chill",
    "cost": 0,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "📺",
    "description": "Explore a real-world subject through a documentary.",
    "steps": [
      "Choose a film available legally within your budget.",
      "Write down one question before watching.",
      "Check whether the film answered it afterward."
    ],
    "supplies": [
      "device"
    ]
  },
  {
    "id": 40,
    "title": "Write a gratitude list",
    "mood": "chill",
    "cost": 0,
    "time": 30,
    "min": 1,
    "max": 6,
    "icon": "🌱",
    "description": "Notice specific things that made your week better.",
    "steps": [
      "Write five moments or people you appreciate.",
      "Add why each mattered.",
      "Choose one person you could thank privately."
    ],
    "supplies": [
      "paper"
    ]
  },
  {
    "id": 41,
    "title": "Send handwritten letters",
    "mood": "chill",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "✉️",
    "description": "Reconnect through a thoughtful handwritten message.",
    "steps": [
      "Pick someone you would like to hear from.",
      "Write a specific memory and a question.",
      "Deliver it or keep it until you have postage."
    ],
    "supplies": [
      "paper"
    ]
  },
  {
    "id": 42,
    "title": "Sort old photographs",
    "mood": "chill",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "🗂️",
    "description": "Give a scattered photo collection some order.",
    "steps": [
      "Choose one box or digital folder.",
      "Group photos by occasion and label what you recognize.",
      "Back up digital pictures or store prints carefully."
    ],
    "supplies": [
      "camera"
    ]
  },
  {
    "id": 43,
    "title": "Look through a family album",
    "mood": "chill",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "👨‍👩‍👧",
    "description": "Trade the stories behind familiar faces.",
    "steps": [
      "Choose an album you have permission to share.",
      "Let each person pick a photo.",
      "Record names and stories you want to remember."
    ],
    "supplies": [
      "device"
    ]
  },
  {
    "id": 44,
    "title": "Call a distant friend",
    "mood": "chill",
    "cost": 0,
    "time": 30,
    "min": 2,
    "max": 2,
    "icon": "📞",
    "description": "Make time for a proper catch-up.",
    "steps": [
      "Arrange a time that suits you both.",
      "Ask about something specific in their life.",
      "Share an update and plan another call."
    ],
    "supplies": [
      "device"
    ]
  },
  {
    "id": 45,
    "title": "Have a device-free dinner",
    "mood": "chill",
    "cost": 10,
    "time": 60,
    "min": 2,
    "max": 6,
    "icon": "🍽️",
    "description": "Make an ordinary meal a little more connected.",
    "steps": [
      "Cook or bring a simple meal.",
      "Put devices out of reach.",
      "Give everyone time to tell a story from their day."
    ],
    "supplies": [
      "kitchen"
    ]
  },
  {
    "id": 46,
    "title": "Take a short nap",
    "mood": "chill",
    "cost": 0,
    "time": 30,
    "min": 1,
    "max": 1,
    "icon": "😴",
    "description": "Recharge with a brief rest.",
    "steps": [
      "Choose a quiet comfortable place.",
      "Set an alarm for a short nap.",
      "Leave a few minutes to wake up before your next task."
    ],
    "supplies": []
  },
  {
    "id": 47,
    "title": "Create a bedtime wind-down",
    "mood": "chill",
    "cost": 0,
    "time": 30,
    "min": 1,
    "max": 1,
    "icon": "🛏️",
    "description": "Give yourself a calmer end to the day.",
    "steps": [
      "Finish urgent tasks and lower the lights.",
      "Read or listen to something gentle.",
      "Put your phone aside before going to bed."
    ],
    "supplies": []
  },
  {
    "id": 48,
    "title": "Practice slow breathing",
    "mood": "chill",
    "cost": 0,
    "time": 30,
    "min": 1,
    "max": 6,
    "icon": "🌬️",
    "description": "Spend a few quiet minutes paying attention to your breath.",
    "steps": [
      "Sit comfortably.",
      "Breathe naturally and slowly without holding your breath.",
      "Return attention gently when your mind wanders."
    ],
    "supplies": []
  },
  {
    "id": 49,
    "title": "Guided body scan",
    "mood": "chill",
    "cost": 0,
    "time": 30,
    "min": 1,
    "max": 6,
    "icon": "🧘",
    "description": "Notice tension and relax at your own pace.",
    "steps": [
      "Find a comfortable seated or lying position.",
      "Move attention gradually from feet to face.",
      "Adjust your position whenever needed."
    ],
    "supplies": []
  },
  {
    "id": 50,
    "title": "Gentle yoga session",
    "mood": "chill",
    "cost": 0,
    "time": 30,
    "min": 1,
    "max": 6,
    "icon": "🧘‍♂️",
    "description": "Try a few comfortable beginner movements.",
    "steps": [
      "Choose a beginner routine suited to your abilities.",
      "Use a clear space and avoid painful positions.",
      "Finish with a relaxed seated rest."
    ],
    "supplies": []
  },
  {
    "id": 51,
    "title": "Give yourself a hand massage",
    "mood": "chill",
    "cost": 0,
    "time": 30,
    "min": 1,
    "max": 1,
    "icon": "🤲",
    "description": "Take a small break from typing and scrolling.",
    "steps": [
      "Wash your hands and remove rings if needed.",
      "Gently massage palms and fingers.",
      "Stop if any movement feels uncomfortable."
    ],
    "supplies": []
  },
  {
    "id": 52,
    "title": "Enjoy a warm foot soak",
    "mood": "chill",
    "cost": 0,
    "time": 30,
    "min": 1,
    "max": 1,
    "icon": "🫧",
    "description": "Give tired feet a simple at-home break.",
    "steps": [
      "Prepare a clean basin with comfortably warm water.",
      "Sit with a towel nearby.",
      "Dry your feet and clean the basin afterward."
    ],
    "supplies": [
      "household"
    ]
  },
  {
    "id": 53,
    "title": "Sit by a pond",
    "mood": "chill",
    "cost": 0,
    "time": 30,
    "min": 1,
    "max": 6,
    "icon": "🦆",
    "description": "Observe a small waterside ecosystem.",
    "steps": [
      "Choose a designated public seating area.",
      "Watch ripples, insects, and birds from the bank.",
      "Leave wildlife and plants undisturbed."
    ],
    "supplies": [
      "outdoor"
    ]
  },
  {
    "id": 54,
    "title": "Listen to rainfall",
    "mood": "chill",
    "cost": 0,
    "time": 30,
    "min": 1,
    "max": 6,
    "icon": "🌧️",
    "description": "Enjoy rainy weather from a sheltered spot.",
    "steps": [
      "Find a dry comfortable seat indoors or under shelter.",
      "Listen for different rhythms and surfaces.",
      "Read or simply watch the rain for a while."
    ],
    "supplies": []
  },
  {
    "id": 55,
    "title": "Hammock break",
    "mood": "chill",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 2,
    "icon": "🌴",
    "description": "Spend an unhurried hour off your feet.",
    "steps": [
      "Use an existing hammock or a permitted setup.",
      "Bring water and a book.",
      "Relax and pack away any equipment afterward."
    ],
    "supplies": [
      "outdoor"
    ]
  },
  {
    "id": 56,
    "title": "Watch fish at an aquarium",
    "mood": "chill",
    "cost": 25,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🐠",
    "description": "Observe underwater movement and behavior.",
    "steps": [
      "Check admission, access, and opening hours.",
      "Choose a few tanks to watch slowly.",
      "Read exhibit labels and compare species."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 57,
    "title": "Visit a botanical conservatory",
    "mood": "chill",
    "cost": 25,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🌺",
    "description": "Enjoy plants from different climates indoors.",
    "steps": [
      "Check admission and opening hours.",
      "Walk through the designated areas.",
      "Choose a plant to learn more about later."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 58,
    "title": "Attend a free acoustic performance",
    "mood": "chill",
    "cost": 0,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🎸",
    "description": "Hear live music in a relaxed setting.",
    "steps": [
      "Find a confirmed free public performance.",
      "Check the location and start time.",
      "Listen respectfully and note a favorite song."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 59,
    "title": "Visit a listening room",
    "mood": "chill",
    "cost": 25,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🎶",
    "description": "Hear performers in a space built for close listening.",
    "steps": [
      "Check admission and any purchase requirements.",
      "Choose a show within budget.",
      "Listen attentively and compare impressions afterward."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 60,
    "title": "Attend a poetry reading",
    "mood": "chill",
    "cost": 10,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "📜",
    "description": "Hear writers read their work aloud.",
    "steps": [
      "Find a public reading and confirm entry costs.",
      "Listen to several readers.",
      "Write down an image or idea that stayed with you."
    ],
    "supplies": [
      "paper",
      "books",
      "venue"
    ]
  },
  {
    "id": 61,
    "title": "Go to a library book club",
    "mood": "chill",
    "cost": 0,
    "time": 90,
    "min": 2,
    "max": 6,
    "icon": "📚",
    "description": "Discuss a book with other readers.",
    "steps": [
      "Check a local library calendar.",
      "Read the selection or confirm drop-ins are welcome.",
      "Bring one question to the discussion."
    ],
    "supplies": [
      "books"
    ]
  },
  {
    "id": 62,
    "title": "Try a silent reading meetup",
    "mood": "chill",
    "cost": 0,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🤫",
    "description": "Read beside others without the pressure of conversation.",
    "steps": [
      "Find a free meetup or organize your own.",
      "Bring a book and agree on quiet reading time.",
      "Chat briefly afterward if everyone wants to."
    ],
    "supplies": [
      "books"
    ]
  },
  {
    "id": 63,
    "title": "Watch a comfort-film favorite",
    "mood": "chill",
    "cost": 0,
    "time": 120,
    "min": 1,
    "max": 6,
    "icon": "🍿",
    "description": "Revisit a movie you already know you love.",
    "steps": [
      "Choose a film you can legally access.",
      "Prepare a comfortable viewing space.",
      "Notice a detail you missed before."
    ],
    "supplies": [
      "device"
    ]
  },
  {
    "id": 64,
    "title": "Read a play aloud",
    "mood": "chill",
    "cost": 0,
    "time": 90,
    "min": 2,
    "max": 6,
    "icon": "🎭",
    "description": "Bring dialogue to life around a table.",
    "steps": [
      "Choose a public-domain play or one you own.",
      "Assign roles and read a scene.",
      "Switch roles and discuss the characters."
    ],
    "supplies": [
      "books"
    ]
  },
  {
    "id": 65,
    "title": "Browse a record store",
    "mood": "chill",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "💽",
    "description": "Discover music through covers, notes, and staff picks.",
    "steps": [
      "Visit during opening hours.",
      "Browse a genre you rarely explore.",
      "Note artists to listen to later",
      " buying is optional."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 66,
    "title": "Visit a used-book shop",
    "mood": "chill",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "📙",
    "description": "Explore shelves without a shopping agenda.",
    "steps": [
      "Choose an open used-book store.",
      "Look for an unfamiliar author or unusual subject.",
      "Make a reading wish list without needing to buy."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 67,
    "title": "Enjoy a solo cafe break",
    "mood": "chill",
    "cost": 10,
    "time": 60,
    "min": 1,
    "max": 1,
    "icon": "🥐",
    "description": "Spend an hour with a drink and your own thoughts.",
    "steps": [
      "Choose a cafe within budget.",
      "Order something simple.",
      "Read, write, or watch the world go by."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 68,
    "title": "People-watch in a plaza",
    "mood": "chill",
    "cost": 0,
    "time": 30,
    "min": 1,
    "max": 6,
    "icon": "🏙️",
    "description": "Notice the rhythm of a public gathering place.",
    "steps": [
      "Choose public seating.",
      "Observe patterns of movement without photographing people intrusively.",
      "Invent a fictional story inspired by the scene."
    ],
    "supplies": [
      "outdoor"
    ]
  },
  {
    "id": 69,
    "title": "Make a comfort-food lunch",
    "mood": "chill",
    "cost": 10,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "🥣",
    "description": "Prepare a familiar meal that feels like home.",
    "steps": [
      "Choose a simple recipe and check ingredients.",
      "Cook together or enjoy the process alone.",
      "Eat without rushing and save leftovers properly."
    ],
    "supplies": [
      "kitchen"
    ]
  },
  {
    "id": 70,
    "title": "Prepare a fruit tasting",
    "mood": "chill",
    "cost": 10,
    "time": 30,
    "min": 1,
    "max": 6,
    "icon": "🍊",
    "description": "Compare a few fruits side by side.",
    "steps": [
      "Pick three fruits and wash them.",
      "Cut tasting portions and check allergies.",
      "Compare sweetness, texture, and aroma."
    ],
    "supplies": [
      "kitchen"
    ]
  },
  {
    "id": 71,
    "title": "Try a chocolate tasting",
    "mood": "chill",
    "cost": 10,
    "time": 30,
    "min": 1,
    "max": 6,
    "icon": "🍫",
    "description": "Explore differences in cocoa and texture.",
    "steps": [
      "Choose small samples of three chocolates.",
      "Taste slowly with water between samples.",
      "Rank flavor and texture separately."
    ],
    "supplies": [
      "kitchen"
    ]
  },
  {
    "id": 72,
    "title": "Make hot cocoa from scratch",
    "mood": "chill",
    "cost": 10,
    "time": 30,
    "min": 1,
    "max": 6,
    "icon": "☕",
    "description": "Turn basic pantry ingredients into a cozy drink.",
    "steps": [
      "Find a simple cocoa recipe.",
      "Heat milk or an alternative carefully and whisk in cocoa.",
      "Add toppings and compare sweetness preferences."
    ],
    "supplies": [
      "kitchen"
    ]
  },
  {
    "id": 73,
    "title": "Have an afternoon tea",
    "mood": "chill",
    "cost": 10,
    "time": 90,
    "min": 2,
    "max": 6,
    "icon": "🫖",
    "description": "Set a small table for an unhurried visit.",
    "steps": [
      "Prepare tea and simple snacks.",
      "Use a few cups and a comfortable seating arrangement.",
      "Spend time talking rather than checking phones."
    ],
    "supplies": [
      "kitchen"
    ]
  },
  {
    "id": 74,
    "title": "Read a graphic novel",
    "mood": "chill",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "💬",
    "description": "Explore a story told through images and dialogue.",
    "steps": [
      "Borrow a graphic novel or use one you own.",
      "Read a chapter slowly.",
      "Notice how panel size changes the pace."
    ],
    "supplies": [
      "books"
    ]
  },
  {
    "id": 75,
    "title": "Read a short-story collection",
    "mood": "chill",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "📗",
    "description": "Finish a complete story in one sitting.",
    "steps": [
      "Choose a story from a book or library source.",
      "Read without interruptions.",
      "Summarize the ending in your own words."
    ],
    "supplies": [
      "books"
    ]
  },
  {
    "id": 76,
    "title": "Learn a constellation",
    "mood": "chill",
    "cost": 0,
    "time": 30,
    "min": 1,
    "max": 6,
    "icon": "✨",
    "description": "Get familiar with one recognizable shape in the night sky.",
    "steps": [
      "Use a sky guide appropriate to your location and season.",
      "Find a safe outdoor viewing spot.",
      "Locate the pattern and read its story."
    ],
    "supplies": [
      "outdoor",
      "device"
    ]
  },
  {
    "id": 77,
    "title": "Watch a nature livestream",
    "mood": "chill",
    "cost": 0,
    "time": 30,
    "min": 1,
    "max": 6,
    "icon": "🐻",
    "description": "Observe wildlife remotely from home.",
    "steps": [
      "Choose a reputable live nature camera.",
      "Watch quietly for a fixed period.",
      "Record one behavior you notice."
    ],
    "supplies": [
      "device"
    ]
  },
  {
    "id": 78,
    "title": "Revisit childhood cartoons",
    "mood": "chill",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "📺",
    "description": "See how an old favorite holds up.",
    "steps": [
      "Choose episodes you can legally access.",
      "Watch one or two.",
      "Compare what you enjoyed then with what you notice now."
    ],
    "supplies": [
      "device",
      "venue"
    ]
  },
  {
    "id": 79,
    "title": "Make a personal happiness menu",
    "mood": "chill",
    "cost": 0,
    "time": 30,
    "min": 1,
    "max": 6,
    "icon": "📝",
    "description": "List small activities that reliably improve your day.",
    "steps": [
      "Write quick, medium, and longer options.",
      "Include things that cost nothing.",
      "Choose one option to try this week."
    ],
    "supplies": [
      "paper"
    ]
  },
  {
    "id": 80,
    "title": "Plan a screen-free Sunday",
    "mood": "chill",
    "cost": 0,
    "time": 30,
    "min": 1,
    "max": 6,
    "icon": "📵",
    "description": "Design a day that does not revolve around a screen.",
    "steps": [
      "List meals, errands, rest, and entertainment.",
      "Gather offline supplies in advance.",
      "Choose a realistic period to put devices away."
    ],
    "supplies": [
      "paper"
    ]
  },
  {
    "id": 81,
    "title": "Create a personal reading nook",
    "mood": "chill",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 2,
    "icon": "🛋️",
    "description": "Rearrange what you own into a comfortable reading corner.",
    "steps": [
      "Pick a quiet spot with useful lighting.",
      "Add a seat, cushion, and small book stack.",
      "Try it out and adjust the arrangement."
    ],
    "supplies": [
      "books"
    ]
  },
  {
    "id": 82,
    "title": "Tend houseplants",
    "mood": "chill",
    "cost": 0,
    "time": 30,
    "min": 1,
    "max": 6,
    "icon": "🪴",
    "description": "Give your existing plants a little attention.",
    "steps": [
      "Check the care needs of each plant.",
      "Remove dead leaves and water only as needed.",
      "Rotate pots or wipe dusty leaves gently."
    ],
    "supplies": [
      "plants"
    ]
  },
  {
    "id": 83,
    "title": "Arrange a bowl of natural finds",
    "mood": "chill",
    "cost": 0,
    "time": 30,
    "min": 1,
    "max": 6,
    "icon": "🍂",
    "description": "Create a small display from materials you already have.",
    "steps": [
      "Gather previously collected lawful natural items.",
      "Arrange them in a shallow bowl.",
      "Notice contrasts in shape and texture."
    ],
    "supplies": [
      "household"
    ]
  },
  {
    "id": 84,
    "title": "Watch the sunrise from home",
    "mood": "chill",
    "cost": 0,
    "time": 30,
    "min": 1,
    "max": 6,
    "icon": "🌄",
    "description": "Begin the morning by noticing the light.",
    "steps": [
      "Check sunrise time.",
      "Choose a window or safe outdoor seat.",
      "Watch the sky change before starting your routine."
    ],
    "supplies": [
      "outdoor"
    ]
  },
  {
    "id": 85,
    "title": "Have a blanket-fort reading session",
    "mood": "chill",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "⛺",
    "description": "Make a cozy hideaway from household blankets.",
    "steps": [
      "Build a stable low fort away from heaters.",
      "Add cushions and a battery light.",
      "Read or talk inside and put everything away afterward."
    ],
    "supplies": [
      "books"
    ]
  },
  {
    "id": 86,
    "title": "Learn a simple hand-stitch",
    "mood": "chill",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "🪡",
    "description": "Practice a quiet practical skill with spare fabric.",
    "steps": [
      "Use a needle, thread, and fabric you already own.",
      "Follow a beginner running-stitch guide.",
      "Practice a short seam and store the needle safely."
    ],
    "supplies": [
      "craft"
    ]
  },
  {
    "id": 87,
    "title": "Enjoy an outdoor breakfast",
    "mood": "chill",
    "cost": 10,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "🥯",
    "description": "Take a simple meal into the fresh air.",
    "steps": [
      "Prepare breakfast and pack reusable dishes.",
      "Choose a permitted seating area.",
      "Enjoy the meal and pack out all rubbish."
    ],
    "supplies": [
      "kitchen",
      "outdoor"
    ]
  },
  {
    "id": 88,
    "title": "Listen to a comedy special",
    "mood": "chill",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "😂",
    "description": "Share some laughs with a performance you can access.",
    "steps": [
      "Choose a legal recording everyone is comfortable with.",
      "Listen or watch together.",
      "Share the joke structure you found most clever."
    ],
    "supplies": [
      "device"
    ]
  },
  {
    "id": 89,
    "title": "Watch a recorded stage performance",
    "mood": "chill",
    "cost": 0,
    "time": 120,
    "min": 1,
    "max": 6,
    "icon": "🎟️",
    "description": "Experience theater from your own living room.",
    "steps": [
      "Find a legally available free performance.",
      "Prepare a comfortable viewing spot.",
      "Discuss staging and performances afterward."
    ],
    "supplies": [
      "device"
    ]
  },
  {
    "id": 90,
    "title": "Do a mindful snack break",
    "mood": "chill",
    "cost": 0,
    "time": 30,
    "min": 1,
    "max": 6,
    "icon": "🍎",
    "description": "Pay full attention to a snack you already have.",
    "steps": [
      "Choose a small familiar snack.",
      "Notice smell, texture, and flavor while eating slowly.",
      "Pause before returning to your next task."
    ],
    "supplies": [
      "kitchen"
    ]
  },
  {
    "id": 91,
    "title": "Write a letter to your future self",
    "mood": "chill",
    "cost": 0,
    "time": 30,
    "min": 1,
    "max": 6,
    "icon": "📨",
    "description": "Capture your current hopes and questions.",
    "steps": [
      "Choose a date a year or more ahead.",
      "Write what matters to you now.",
      "Seal the letter and note when to open it."
    ],
    "supplies": [
      "paper"
    ]
  },
  {
    "id": 92,
    "title": "Create a family recipe archive",
    "mood": "chill",
    "cost": 0,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🥘",
    "description": "Preserve the cooking instructions people usually keep in memory.",
    "steps": [
      "Ask permission to record a few favorite recipes.",
      "Write ingredients, quantities, and techniques.",
      "Add the cook's name and a memory about the dish."
    ],
    "supplies": [
      "kitchen",
      "paper"
    ]
  },
  {
    "id": 93,
    "title": "Make a seasonal bucket list",
    "mood": "chill",
    "cost": 0,
    "time": 30,
    "min": 1,
    "max": 6,
    "icon": "🍁",
    "description": "Choose a handful of experiences for the coming season.",
    "steps": [
      "List activities that fit local weather and your budget.",
      "Select five realistic favorites.",
      "Add tentative dates without overfilling your calendar."
    ],
    "supplies": [
      "paper"
    ]
  },
  {
    "id": 94,
    "title": "Listen to a radio drama",
    "mood": "chill",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "📻",
    "description": "Experience a story built entirely from voices and sound.",
    "steps": [
      "Choose a legally available radio play.",
      "Listen without looking at another screen.",
      "Discuss how sound established the setting."
    ],
    "supplies": [
      "device"
    ]
  },
  {
    "id": 95,
    "title": "Enjoy a music-and-color session",
    "mood": "chill",
    "cost": 0,
    "time": 30,
    "min": 1,
    "max": 6,
    "icon": "🖍️",
    "description": "Color casually while listening to favorite music.",
    "steps": [
      "Use paper and coloring supplies you own.",
      "Choose a calm playlist.",
      "Draw shapes or color a page without judging the result."
    ],
    "supplies": [
      "paper",
      "device"
    ]
  },
  {
    "id": 96,
    "title": "Visit a community garden",
    "mood": "chill",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "🌻",
    "description": "See what neighbors are growing.",
    "steps": [
      "Confirm visitor access and opening hours.",
      "Walk designated paths without picking anything.",
      "Notice plants you might like to grow yourself."
    ],
    "supplies": [
      "venue",
      "outdoor"
    ]
  },
  {
    "id": 97,
    "title": "Make a weekend rest plan",
    "mood": "chill",
    "cost": 0,
    "time": 30,
    "min": 1,
    "max": 6,
    "icon": "🗓️",
    "description": "Protect time for recovery alongside responsibilities.",
    "steps": [
      "Write down essential tasks.",
      "Leave open blocks for meals, sleep, and leisure.",
      "Choose one commitment you can simplify."
    ],
    "supplies": [
      "paper"
    ]
  },
  {
    "id": 98,
    "title": "Make a personal top-ten list",
    "mood": "chill",
    "cost": 0,
    "time": 30,
    "min": 1,
    "max": 6,
    "icon": "📋",
    "description": "Reflect on the books, songs, or experiences that matter most to you.",
    "steps": [
      "Choose one category.",
      "Rank ten favorites and write a reason for each.",
      "Compare lists with a friend or keep yours as a snapshot."
    ],
    "supplies": [
      "paper"
    ]
  },
  {
    "id": 99,
    "title": "Draw a six-panel comic",
    "mood": "creative",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "💬",
    "description": "Tell a complete story in six small panels.",
    "steps": [
      "Choose a character with a problem.",
      "Sketch a beginning, a complication, and an ending.",
      "Add dialogue and share the finished strip."
    ],
    "supplies": [
      "paper"
    ]
  },
  {
    "id": 100,
    "title": "Make a paper collage",
    "mood": "creative",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "✂️",
    "description": "Turn scraps into a composition.",
    "steps": [
      "Gather spare paper or old magazines.",
      "Cut shapes and arrange before gluing.",
      "Give the piece a title."
    ],
    "supplies": [
      "paper",
      "craft"
    ]
  },
  {
    "id": 101,
    "title": "Fold origami animals",
    "mood": "creative",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "🐸",
    "description": "Transform paper into a small folded creature.",
    "steps": [
      "Find a beginner folding diagram.",
      "Practice slowly with spare paper.",
      "Display your best model and help someone else learn."
    ],
    "supplies": [
      "paper"
    ]
  },
  {
    "id": 102,
    "title": "Build a shoebox diorama",
    "mood": "creative",
    "cost": 0,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "📦",
    "description": "Create a tiny scene with depth.",
    "steps": [
      "Choose a setting and a spare box.",
      "Build a background and foreground from scrap materials.",
      "Add characters or props to complete the scene."
    ],
    "supplies": [
      "craft"
    ]
  },
  {
    "id": 103,
    "title": "Make a friendship bracelet",
    "mood": "creative",
    "cost": 10,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "🧵",
    "description": "Learn a simple knotted bracelet pattern.",
    "steps": [
      "Choose embroidery thread in a few colors.",
      "Follow a beginner knot pattern.",
      "Finish the ends and offer it as a gift."
    ],
    "supplies": [
      "craft"
    ]
  },
  {
    "id": 104,
    "title": "Try air-dry clay sculpting",
    "mood": "creative",
    "cost": 10,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🏺",
    "description": "Shape a small decorative object.",
    "steps": [
      "Prepare clay and a protected work surface.",
      "Sculpt a figure or small dish.",
      "Follow package drying instructions before displaying."
    ],
    "supplies": [
      "craft"
    ]
  },
  {
    "id": 105,
    "title": "Paint a plant pot",
    "mood": "creative",
    "cost": 10,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🪴",
    "description": "Give a plain pot a personal design.",
    "steps": [
      "Choose paint suitable for the pot material.",
      "Sketch a pattern before painting.",
      "Let it dry fully and keep drainage holes clear."
    ],
    "supplies": [
      "craft",
      "plants"
    ]
  },
  {
    "id": 106,
    "title": "Make a pressed-flower bookmark",
    "mood": "creative",
    "cost": 10,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "🔖",
    "description": "Preserve already dried flowers in a useful keepsake.",
    "steps": [
      "Use purchased or previously pressed flowers.",
      "Arrange them on sturdy paper.",
      "Seal with clear adhesive film and trim the edges."
    ],
    "supplies": [
      "craft"
    ]
  },
  {
    "id": 107,
    "title": "Create a scrapbook spread",
    "mood": "creative",
    "cost": 10,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "📒",
    "description": "Tell the story of an occasion on two pages.",
    "steps": [
      "Choose a small group of photos and keepsakes.",
      "Arrange them with captions.",
      "Attach everything and add the date."
    ],
    "supplies": [
      "paper",
      "craft"
    ]
  },
  {
    "id": 108,
    "title": "Design a personal logo",
    "mood": "creative",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "✒️",
    "description": "Represent your interests with a simple visual mark.",
    "steps": [
      "List three qualities you want to communicate.",
      "Sketch ten small ideas.",
      "Refine one design in black and white."
    ],
    "supplies": [
      "paper"
    ]
  },
  {
    "id": 109,
    "title": "Make an eight-page zine",
    "mood": "creative",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "📓",
    "description": "Publish a tiny booklet from one sheet.",
    "steps": [
      "Fold a mini-zine using a beginner guide.",
      "Fill the pages with a short topic or story.",
      "Share the booklet or make copies."
    ],
    "supplies": [
      "paper"
    ]
  },
  {
    "id": 110,
    "title": "Write a flash-fiction story",
    "mood": "creative",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "✍️",
    "description": "Finish an entire story in 500 words or fewer.",
    "steps": [
      "Give a character a clear goal.",
      "Write a problem and a meaningful choice.",
      "Revise the ending and read it aloud."
    ],
    "supplies": [
      "paper"
    ]
  },
  {
    "id": 111,
    "title": "Write a poem",
    "mood": "creative",
    "cost": 0,
    "time": 30,
    "min": 1,
    "max": 6,
    "icon": "📝",
    "description": "Capture a moment with carefully chosen words.",
    "steps": [
      "Choose a concrete image or memory.",
      "Write freely for ten minutes.",
      "Remove extra words and choose a title."
    ],
    "supplies": [
      "paper"
    ]
  },
  {
    "id": 112,
    "title": "Compose a short song",
    "mood": "creative",
    "cost": 0,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🎼",
    "description": "Combine a melody with a few original lines.",
    "steps": [
      "Hum a simple tune or use an instrument you own.",
      "Write a verse and a repeated refrain.",
      "Record a rough version on your phone."
    ],
    "supplies": [
      "instrument"
    ]
  },
  {
    "id": 113,
    "title": "Record a podcast episode",
    "mood": "creative",
    "cost": 0,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🎙️",
    "description": "Make a short audio discussion on a topic you know.",
    "steps": [
      "Outline an introduction and three talking points.",
      "Record in a quiet room using available equipment.",
      "Listen back and trim long pauses if possible."
    ],
    "supplies": [
      "device"
    ]
  },
  {
    "id": 114,
    "title": "Create a sound-effects library",
    "mood": "creative",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "🔊",
    "description": "Collect original sounds made with household objects.",
    "steps": [
      "Choose ten safe sound sources.",
      "Record each in a quiet space.",
      "Label the clips so you can reuse them."
    ],
    "supplies": [
      "device"
    ]
  },
  {
    "id": 115,
    "title": "Animate a flipbook",
    "mood": "creative",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "📔",
    "description": "Make drawings move as you flip the pages.",
    "steps": [
      "Choose one simple motion.",
      "Draw small changes across at least 20 sheets.",
      "Flip the stack and refine uneven transitions."
    ],
    "supplies": [
      "paper"
    ]
  },
  {
    "id": 116,
    "title": "Create pixel art",
    "mood": "creative",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "👾",
    "description": "Design a tiny image on a visible grid.",
    "steps": [
      "Use graph paper or a free pixel editor.",
      "Limit the image to a small canvas and eight colors.",
      "Export or display the finished piece."
    ],
    "supplies": [
      "device"
    ]
  },
  {
    "id": 117,
    "title": "Build a paper model",
    "mood": "creative",
    "cost": 10,
    "time": 120,
    "min": 1,
    "max": 6,
    "icon": "🏠",
    "description": "Assemble a miniature structure from card.",
    "steps": [
      "Choose a simple building and sketch its parts.",
      "Cut and fold card carefully.",
      "Glue the pieces and add windows or signs."
    ],
    "supplies": [
      "paper"
    ]
  },
  {
    "id": 118,
    "title": "Design a board game",
    "mood": "creative",
    "cost": 0,
    "time": 120,
    "min": 2,
    "max": 6,
    "icon": "🎲",
    "description": "Invent a game with a clear objective.",
    "steps": [
      "Write a win condition and one central mechanic.",
      "Make a paper board and tokens.",
      "Play a short test and revise confusing rules."
    ],
    "supplies": [
      "board"
    ]
  },
  {
    "id": 119,
    "title": "Invent a card game",
    "mood": "creative",
    "cost": 0,
    "time": 90,
    "min": 2,
    "max": 6,
    "icon": "🃏",
    "description": "Give an ordinary deck a new set of rules.",
    "steps": [
      "Choose how cards score or interact.",
      "Write turn order and an ending condition.",
      "Test several rounds and adjust the balance."
    ],
    "supplies": [
      "cards"
    ]
  },
  {
    "id": 120,
    "title": "Code a tiny webpage",
    "mood": "creative",
    "cost": 0,
    "time": 120,
    "min": 1,
    "max": 6,
    "icon": "💻",
    "description": "Build a simple page about something you enjoy.",
    "steps": [
      "Create an HTML file with a heading and sections.",
      "Add basic CSS and one interaction.",
      "Open it in a browser and test the controls."
    ],
    "supplies": [
      "device"
    ]
  },
  {
    "id": 121,
    "title": "Make a digital photo collage",
    "mood": "creative",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "🖼️",
    "description": "Arrange your own photos into one composition.",
    "steps": [
      "Choose five photos you have permission to use.",
      "Arrange them in a free design tool.",
      "Add captions and export the image."
    ],
    "supplies": [
      "paper",
      "craft",
      "device",
      "camera"
    ]
  },
  {
    "id": 122,
    "title": "Design a fictional movie poster",
    "mood": "creative",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "🎬",
    "description": "Sell an imaginary film through a single image.",
    "steps": [
      "Invent a title, genre, and tagline.",
      "Design a focal image and readable credits.",
      "Ask someone what story the poster suggests."
    ],
    "supplies": [
      "device"
    ]
  },
  {
    "id": 123,
    "title": "Create a character sheet",
    "mood": "creative",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "🧝",
    "description": "Invent a character with a goal and a recognizable silhouette.",
    "steps": [
      "Sketch several shapes and choose one.",
      "Add clothing, expressions, and a short backstory.",
      "Write one choice that would challenge the character."
    ],
    "supplies": [
      "paper"
    ]
  },
  {
    "id": 124,
    "title": "Draw an imaginary map",
    "mood": "creative",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "🗺️",
    "description": "Build a world through landmarks and routes.",
    "steps": [
      "Sketch a coastline or region.",
      "Add settlements, terrain, and a legend.",
      "Mark a journey between two locations."
    ],
    "supplies": [
      "paper"
    ]
  },
  {
    "id": 125,
    "title": "Make a shadow-puppet show",
    "mood": "creative",
    "cost": 0,
    "time": 60,
    "min": 2,
    "max": 6,
    "icon": "🔦",
    "description": "Tell a story with silhouettes.",
    "steps": [
      "Cut characters from spare card.",
      "Set a lamp behind a screen or toward a wall.",
      "Perform a short scene without placing fabric near hot lights."
    ],
    "supplies": [
      "paper",
      "household"
    ]
  },
  {
    "id": 126,
    "title": "Perform an improv scene",
    "mood": "creative",
    "cost": 0,
    "time": 30,
    "min": 2,
    "max": 6,
    "icon": "🎭",
    "description": "Build a scene without a script.",
    "steps": [
      "Choose a location and a relationship.",
      "Take turns adding details and accepting offers.",
      "End the scene when the central problem changes."
    ],
    "supplies": []
  },
  {
    "id": 127,
    "title": "Learn a simple magic trick",
    "mood": "creative",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "🪄",
    "description": "Practice a small illusion with ordinary objects.",
    "steps": [
      "Choose a beginner coin or card trick.",
      "Practice the handling slowly.",
      "Perform for a willing audience and explain only if asked."
    ],
    "supplies": [
      "cards"
    ]
  },
  {
    "id": 128,
    "title": "Try hand lettering",
    "mood": "creative",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "🖋️",
    "description": "Turn a short phrase into illustrated lettering.",
    "steps": [
      "Choose a phrase and pencil guidelines.",
      "Practice thick and thin strokes.",
      "Ink the final design and erase guides."
    ],
    "supplies": [
      "paper"
    ]
  },
  {
    "id": 129,
    "title": "Make a greeting card",
    "mood": "creative",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "💌",
    "description": "Create a card for a specific person or occasion.",
    "steps": [
      "Fold sturdy paper.",
      "Design the cover and write a personal message.",
      "Deliver it or keep it ready for the occasion."
    ],
    "supplies": [
      "paper"
    ]
  },
  {
    "id": 130,
    "title": "Decorate reusable tote bags",
    "mood": "creative",
    "cost": 10,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🛍️",
    "description": "Create a bag you will actually use.",
    "steps": [
      "Choose a plain tote and fabric-safe markers.",
      "Sketch a design with paper inside the bag.",
      "Follow the marker setting instructions before washing."
    ],
    "supplies": [
      "craft"
    ]
  },
  {
    "id": 131,
    "title": "Make tie-dye clothing",
    "mood": "creative",
    "cost": 25,
    "time": 120,
    "min": 1,
    "max": 6,
    "icon": "👕",
    "description": "Add color to a plain cotton item.",
    "steps": [
      "Use a tie-dye kit and protect the work area.",
      "Fold, bind, and apply dye following kit directions.",
      "Allow the required setting time before rinsing later."
    ],
    "supplies": [
      "craft"
    ]
  },
  {
    "id": 132,
    "title": "Embroider a small patch",
    "mood": "creative",
    "cost": 10,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🪡",
    "description": "Stitch a simple design onto fabric.",
    "steps": [
      "Draw a small outline and thread a needle.",
      "Use running stitch or backstitch.",
      "Secure the thread and trim the fabric neatly."
    ],
    "supplies": [
      "craft"
    ]
  },
  {
    "id": 133,
    "title": "Mend an item of clothing",
    "mood": "creative",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "🧷",
    "description": "Repair a loose button or small seam.",
    "steps": [
      "Choose a manageable repair and matching supplies.",
      "Follow a beginner sewing guide.",
      "Check the repair gently before wearing the item."
    ],
    "supplies": [
      "craft"
    ]
  },
  {
    "id": 134,
    "title": "Customize a notebook cover",
    "mood": "creative",
    "cost": 10,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "📔",
    "description": "Make a plain notebook feel personal.",
    "steps": [
      "Choose paper, tape, or markers.",
      "Plan a cover design that leaves the spine flexible.",
      "Attach decorations and add a name or title."
    ],
    "supplies": [
      "paper",
      "craft"
    ]
  },
  {
    "id": 135,
    "title": "Build a cardboard marble run",
    "mood": "creative",
    "cost": 0,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🛤️",
    "description": "Engineer a rolling route from recycled packaging.",
    "steps": [
      "Collect tubes, card, tape, and a marble.",
      "Build slopes and barriers.",
      "Test each section and adjust where the marble stops."
    ],
    "supplies": [
      "craft"
    ]
  },
  {
    "id": 136,
    "title": "Make a paper kite",
    "mood": "creative",
    "cost": 10,
    "time": 120,
    "min": 1,
    "max": 6,
    "icon": "🪁",
    "description": "Construct a lightweight kite and test its balance.",
    "steps": [
      "Follow a beginner kite design with suitable materials.",
      "Attach the line and tail securely.",
      "Test in an open permitted area away from power lines."
    ],
    "supplies": [
      "paper",
      "craft"
    ]
  },
  {
    "id": 137,
    "title": "Assemble a terrarium",
    "mood": "creative",
    "cost": 25,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🌿",
    "description": "Create a small planted display.",
    "steps": [
      "Choose a suitable container and compatible plants.",
      "Add substrate and arrange the planting.",
      "Learn the light and watering needs of your setup."
    ],
    "supplies": [
      "craft",
      "plants"
    ]
  },
  {
    "id": 138,
    "title": "Propagate a houseplant cutting",
    "mood": "creative",
    "cost": 0,
    "time": 30,
    "min": 1,
    "max": 6,
    "icon": "🌱",
    "description": "Start a new plant from a suitable existing one.",
    "steps": [
      "Identify the plant and its propagation method.",
      "Take a permitted cutting with clean tools.",
      "Place it in the recommended medium and label the date."
    ],
    "supplies": [
      "plants"
    ]
  },
  {
    "id": 139,
    "title": "Make a mini herb planter",
    "mood": "creative",
    "cost": 10,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "🌿",
    "description": "Plant herbs for future cooking.",
    "steps": [
      "Choose seeds or a small herb plant.",
      "Use a draining container and suitable soil.",
      "Label it and set a realistic care routine."
    ],
    "supplies": [
      "craft",
      "plants"
    ]
  },
  {
    "id": 140,
    "title": "Arrange a flower bouquet",
    "mood": "creative",
    "cost": 25,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "💐",
    "description": "Practice arranging color, height, and shape.",
    "steps": [
      "Choose a small bunch within budget.",
      "Trim stems and remove leaves below the water line.",
      "Arrange in a clean vase and change the water regularly."
    ],
    "supplies": [
      "craft",
      "plants"
    ]
  },
  {
    "id": 141,
    "title": "Make homemade pasta",
    "mood": "creative",
    "cost": 10,
    "time": 120,
    "min": 1,
    "max": 6,
    "icon": "🍝",
    "description": "Turn flour and eggs or a suitable alternative into fresh noodles.",
    "steps": [
      "Choose a beginner recipe.",
      "Mix, knead, rest, and roll the dough.",
      "Cut noodles and cook according to the recipe."
    ],
    "supplies": [
      "kitchen"
    ]
  },
  {
    "id": 142,
    "title": "Bake bread",
    "mood": "creative",
    "cost": 10,
    "time": 120,
    "min": 1,
    "max": 6,
    "icon": "🍞",
    "description": "Learn the process behind a simple loaf.",
    "steps": [
      "Choose a recipe that fits your available time.",
      "Mix and shape the dough, allowing any required rise.",
      "Bake as directed and cool before slicing."
    ],
    "supplies": [
      "kitchen"
    ]
  },
  {
    "id": 143,
    "title": "Decorate cupcakes",
    "mood": "creative",
    "cost": 10,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🧁",
    "description": "Practice piping and edible decoration.",
    "steps": [
      "Prepare or buy plain cupcakes.",
      "Choose frosting colors and simple designs.",
      "Decorate together and store leftovers appropriately."
    ],
    "supplies": [
      "kitchen"
    ]
  },
  {
    "id": 144,
    "title": "Bake cookies",
    "mood": "creative",
    "cost": 10,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "🍪",
    "description": "Make a fresh batch to share.",
    "steps": [
      "Choose a recipe and check ingredients.",
      "Mix and portion the dough.",
      "Bake as directed and let the cookies cool."
    ],
    "supplies": [
      "kitchen"
    ]
  },
  {
    "id": 145,
    "title": "Make homemade dumplings",
    "mood": "creative",
    "cost": 10,
    "time": 120,
    "min": 2,
    "max": 6,
    "icon": "🥟",
    "description": "Fold a batch of filled dumplings together.",
    "steps": [
      "Prepare filling and wrappers.",
      "Practice a simple fold.",
      "Cook filling safely using recipe instructions."
    ],
    "supplies": [
      "kitchen"
    ]
  },
  {
    "id": 146,
    "title": "Roll sushi-style vegetable rolls",
    "mood": "creative",
    "cost": 10,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🍣",
    "description": "Build rolls with cooked rice and vegetables.",
    "steps": [
      "Prepare rice according to a suitable recipe.",
      "Slice vegetables and assemble rolls.",
      "Cut with care and refrigerate leftovers promptly."
    ],
    "supplies": [
      "kitchen"
    ]
  },
  {
    "id": 147,
    "title": "Build a gingerbread-style house",
    "mood": "creative",
    "cost": 25,
    "time": 120,
    "min": 1,
    "max": 6,
    "icon": "🏚️",
    "description": "Construct an edible little building.",
    "steps": [
      "Use a kit or firm biscuits and icing.",
      "Build walls and allow joins to set.",
      "Add a roof and decorative details."
    ],
    "supplies": [
      "kitchen"
    ]
  },
  {
    "id": 148,
    "title": "Make refrigerator pickles",
    "mood": "creative",
    "cost": 10,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "🥒",
    "description": "Prepare crisp vegetables in a quick pickle brine.",
    "steps": [
      "Choose a tested refrigerator-pickle recipe.",
      "Prepare vegetables and brine as directed.",
      "Refrigerate and follow the recipe's storage limits."
    ],
    "supplies": [
      "kitchen"
    ]
  },
  {
    "id": 149,
    "title": "Make homemade ice cream",
    "mood": "creative",
    "cost": 10,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🍨",
    "description": "Try a no-churn frozen dessert.",
    "steps": [
      "Choose a recipe and check allergies.",
      "Mix the base and fold in flavorings.",
      "Freeze for the required additional hours before serving."
    ],
    "supplies": [
      "kitchen"
    ]
  },
  {
    "id": 150,
    "title": "Blend a signature smoothie",
    "mood": "creative",
    "cost": 10,
    "time": 30,
    "min": 1,
    "max": 6,
    "icon": "🥤",
    "description": "Balance fruit, liquid, and texture.",
    "steps": [
      "Choose compatible ingredients and check allergies.",
      "Blend small batches with equipment used as directed.",
      "Adjust thickness and write down the final recipe."
    ],
    "supplies": [
      "kitchen"
    ]
  },
  {
    "id": 151,
    "title": "Cook a new soup",
    "mood": "creative",
    "cost": 10,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🍲",
    "description": "Learn a simple one-pot meal.",
    "steps": [
      "Choose a recipe you have not tried.",
      "Prepare and cook ingredients as instructed.",
      "Taste, adjust seasoning, and store leftovers safely."
    ],
    "supplies": [
      "kitchen"
    ]
  },
  {
    "id": 152,
    "title": "Make a homemade spice blend",
    "mood": "creative",
    "cost": 10,
    "time": 30,
    "min": 1,
    "max": 6,
    "icon": "🧂",
    "description": "Create a seasoning mix for future meals.",
    "steps": [
      "Choose a cuisine or flavor direction.",
      "Measure a small batch of suitable dried spices.",
      "Label ingredients and test a little on food."
    ],
    "supplies": [
      "kitchen"
    ]
  },
  {
    "id": 153,
    "title": "Create a three-course menu",
    "mood": "creative",
    "cost": 10,
    "time": 120,
    "min": 2,
    "max": 6,
    "icon": "🍽️",
    "description": "Plan and cook a coordinated meal.",
    "steps": [
      "Select simple dishes with overlapping ingredients.",
      "Assign prep tasks and coordinate cooking times.",
      "Serve small courses and review what worked."
    ],
    "supplies": [
      "kitchen"
    ]
  },
  {
    "id": 154,
    "title": "Make a custom puzzle",
    "mood": "creative",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "🧩",
    "description": "Turn your own drawing into a cut-piece puzzle.",
    "steps": [
      "Draw a picture on sturdy card.",
      "Mark irregular interlocking pieces.",
      "Cut carefully and trade puzzles with someone."
    ],
    "supplies": [
      "paper",
      "craft"
    ]
  },
  {
    "id": 155,
    "title": "Create a crossword",
    "mood": "creative",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "🔤",
    "description": "Build a small crossword with your own clues.",
    "steps": [
      "Choose ten related words.",
      "Arrange intersecting letters on a grid.",
      "Write clues and ask someone to solve it."
    ],
    "supplies": [
      "paper"
    ]
  },
  {
    "id": 156,
    "title": "Design a treasure map",
    "mood": "creative",
    "cost": 0,
    "time": 60,
    "min": 2,
    "max": 6,
    "icon": "🗝️",
    "description": "Guide someone to a hidden household surprise.",
    "steps": [
      "Choose a permitted hiding spot.",
      "Draw a map with recognizable landmarks.",
      "Test the route and let someone follow it."
    ],
    "supplies": [
      "paper"
    ]
  },
  {
    "id": 157,
    "title": "Make a vision board",
    "mood": "creative",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "📌",
    "description": "Turn a few realistic goals into a visual reminder.",
    "steps": [
      "Choose goals you want to work toward.",
      "Use your own images or spare magazines.",
      "Add one practical next step beside each goal."
    ],
    "supplies": [
      "paper"
    ]
  },
  {
    "id": 158,
    "title": "Record an oral-history interview",
    "mood": "creative",
    "cost": 0,
    "time": 90,
    "min": 2,
    "max": 2,
    "icon": "🎙️",
    "description": "Preserve someone's stories with their permission.",
    "steps": [
      "Agree on topics and how the recording will be used.",
      "Ask open questions and listen without interrupting.",
      "Save and label the recording privately."
    ],
    "supplies": [
      "device"
    ]
  },
  {
    "id": 159,
    "title": "Build a pinhole viewer",
    "mood": "creative",
    "cost": 10,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "📦",
    "description": "Explore how a small opening can project an image.",
    "steps": [
      "Follow a reputable cardboard pinhole-viewer guide.",
      "Assemble the screen and opening using suitable materials.",
      "View ordinary bright outdoor scenes through the projected image",
      " never look at the sun."
    ],
    "supplies": [
      "paper"
    ]
  },
  {
    "id": 160,
    "title": "Create a reusable stencil",
    "mood": "creative",
    "cost": 10,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "▧",
    "description": "Make a design you can repeat on paper.",
    "steps": [
      "Draw bold connected shapes on suitable card.",
      "Cut carefully using appropriate tools.",
      "Test with paint or pencil on scrap paper."
    ],
    "supplies": [
      "craft"
    ]
  },
  {
    "id": 161,
    "title": "Try watercolor resist",
    "mood": "creative",
    "cost": 10,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "🎨",
    "description": "Reveal a wax drawing beneath watercolor.",
    "steps": [
      "Draw with a wax crayon on suitable paper.",
      "Brush watercolor across the surface.",
      "Let it dry and compare the textures."
    ],
    "supplies": [
      "craft"
    ]
  },
  {
    "id": 162,
    "title": "Make a woven paper basket",
    "mood": "creative",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "🧺",
    "description": "Weave strips into a small container.",
    "steps": [
      "Cut equal paper strips.",
      "Weave a base and fold up the sides.",
      "Secure the rim and test with light objects."
    ],
    "supplies": [
      "paper"
    ]
  },
  {
    "id": 163,
    "title": "Build a recycled-material sculpture",
    "mood": "creative",
    "cost": 0,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🤖",
    "description": "Give clean packaging a second life as art.",
    "steps": [
      "Collect safe clean materials.",
      "Sketch a stable structure.",
      "Join pieces and explain what the sculpture represents."
    ],
    "supplies": [
      "craft"
    ]
  },
  {
    "id": 164,
    "title": "Design a phone wallpaper",
    "mood": "creative",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "📱",
    "description": "Make a background that fits your own screen.",
    "steps": [
      "Check your screen dimensions.",
      "Use your own drawing or photos in a free editor.",
      "Leave space for icons and test readability."
    ],
    "supplies": [
      "paper",
      "device"
    ]
  },
  {
    "id": 165,
    "title": "Learn basic photo editing",
    "mood": "creative",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "🖥️",
    "description": "Improve a photo without losing its character.",
    "steps": [
      "Choose a photo you own.",
      "Try cropping, exposure, and color adjustments.",
      "Compare before and after and save a separate copy."
    ],
    "supplies": [
      "device",
      "camera"
    ]
  },
  {
    "id": 166,
    "title": "Play chess",
    "mood": "competitive",
    "cost": 0,
    "time": 60,
    "min": 2,
    "max": 2,
    "icon": "♟️",
    "description": "Test a plan against another player.",
    "steps": [
      "Use a set or free chess app.",
      "Agree on casual play or a time control.",
      "Review a key turning point afterward."
    ],
    "supplies": [
      "board"
    ]
  },
  {
    "id": 167,
    "title": "Play checkers",
    "mood": "competitive",
    "cost": 0,
    "time": 30,
    "min": 2,
    "max": 2,
    "icon": "🔴",
    "description": "Enjoy a quick game of jumps and positioning.",
    "steps": [
      "Set up a board and pieces.",
      "Agree on the version of the rules.",
      "Play a match and switch sides."
    ],
    "supplies": [
      "board"
    ]
  },
  {
    "id": 168,
    "title": "Play backgammon",
    "mood": "competitive",
    "cost": 0,
    "time": 60,
    "min": 2,
    "max": 2,
    "icon": "🎲",
    "description": "Balance probability and positioning.",
    "steps": [
      "Use a set you own or a free digital version.",
      "Review movement and bearing-off rules.",
      "Play several short rounds without wagering."
    ],
    "supplies": [
      "board"
    ]
  },
  {
    "id": 169,
    "title": "Play dominoes",
    "mood": "competitive",
    "cost": 0,
    "time": 60,
    "min": 2,
    "max": 6,
    "icon": "🁢",
    "description": "Match tiles and plan your remaining hand.",
    "steps": [
      "Choose a domino variant suited to your group.",
      "Deal tiles and explain scoring.",
      "Play to an agreed score."
    ],
    "supplies": [
      "board"
    ]
  },
  {
    "id": 170,
    "title": "Play mahjong",
    "mood": "competitive",
    "cost": 0,
    "time": 120,
    "min": 4,
    "max": 4,
    "icon": "🀄",
    "description": "Learn a tile game with patterns and planning.",
    "steps": [
      "Use a set you own and choose one ruleset.",
      "Review tile types and winning hands.",
      "Play a guided beginner round."
    ],
    "supplies": [
      "board"
    ]
  },
  {
    "id": 171,
    "title": "Play a word-board game",
    "mood": "competitive",
    "cost": 0,
    "time": 90,
    "min": 2,
    "max": 4,
    "icon": "🔤",
    "description": "Build words while competing for board position.",
    "steps": [
      "Use a word game you own.",
      "Agree on a dictionary and scoring rules.",
      "Review unfamiliar words after the game."
    ],
    "supplies": [
      "board"
    ]
  },
  {
    "id": 172,
    "title": "Play a property-trading game",
    "mood": "competitive",
    "cost": 0,
    "time": 120,
    "min": 2,
    "max": 6,
    "icon": "🏘️",
    "description": "Negotiate and manage resources on a board.",
    "steps": [
      "Choose a game you already own.",
      "Review the printed rules and avoid accidental house rules.",
      "Set a time limit and determine how to finish."
    ],
    "supplies": [
      "board"
    ]
  },
  {
    "id": 173,
    "title": "Play a cooperative board game",
    "mood": "competitive",
    "cost": 0,
    "time": 90,
    "min": 2,
    "max": 6,
    "icon": "🤝",
    "description": "Compete against the game's shared challenge.",
    "steps": [
      "Choose a cooperative game you own.",
      "Explain roles and the shared loss condition.",
      "Discuss plans together and review the final outcome."
    ],
    "supplies": [
      "board"
    ]
  },
  {
    "id": 174,
    "title": "Try a social-deduction game",
    "mood": "competitive",
    "cost": 0,
    "time": 60,
    "min": 5,
    "max": 6,
    "icon": "🕵️",
    "description": "Use conversation to uncover hidden roles.",
    "steps": [
      "Choose a version that supports your group size.",
      "Explain roles and respectful discussion rules.",
      "Play several rounds and rotate assignments."
    ],
    "supplies": [
      "paper"
    ]
  },
  {
    "id": 175,
    "title": "Play a deck-building game",
    "mood": "competitive",
    "cost": 0,
    "time": 90,
    "min": 2,
    "max": 4,
    "icon": "🃏",
    "description": "Build a stronger deck as the game progresses.",
    "steps": [
      "Choose a game you own.",
      "Explain buying, drawing, and scoring.",
      "Try a new strategy in the second round."
    ],
    "supplies": [
      "board"
    ]
  },
  {
    "id": 176,
    "title": "Run a video-game tournament",
    "mood": "competitive",
    "cost": 0,
    "time": 120,
    "min": 2,
    "max": 6,
    "icon": "🎮",
    "description": "Settle friendly rivalries in a game you already own.",
    "steps": [
      "Choose a game with suitable local or online play.",
      "Agree on teams, controls, and match length.",
      "Use a simple bracket and rotate players fairly."
    ],
    "supplies": [
      "device"
    ]
  },
  {
    "id": 177,
    "title": "Race a ghost time",
    "mood": "competitive",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "🏎️",
    "description": "Beat a personal best in a racing game.",
    "steps": [
      "Choose a track and a consistent vehicle.",
      "Record a baseline lap.",
      "Practice difficult corners and compare clean laps."
    ],
    "supplies": [
      "device"
    ]
  },
  {
    "id": 178,
    "title": "Try a platformer speedrun",
    "mood": "competitive",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "🏃",
    "description": "Finish a familiar level as efficiently as possible.",
    "steps": [
      "Choose an accessible game and one level.",
      "Agree on timing and allowed shortcuts.",
      "Run several attempts and track improvement."
    ],
    "supplies": [
      "device"
    ]
  },
  {
    "id": 179,
    "title": "Play a rhythm-game challenge",
    "mood": "competitive",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "🎵",
    "description": "Match timing and accuracy to a song.",
    "steps": [
      "Use a game and songs you can access.",
      "Choose a comfortable difficulty.",
      "Compare accuracy across several attempts."
    ],
    "supplies": [
      "device"
    ]
  },
  {
    "id": 180,
    "title": "Play a fighting-game set",
    "mood": "competitive",
    "cost": 0,
    "time": 60,
    "min": 2,
    "max": 2,
    "icon": "🥊",
    "description": "Learn matchups through short head-to-head rounds.",
    "steps": [
      "Use a game you own.",
      "Agree on a best-of format.",
      "Switch characters and share one useful tactic."
    ],
    "supplies": [
      "device"
    ]
  },
  {
    "id": 181,
    "title": "Play virtual mini golf",
    "mood": "competitive",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "⛳",
    "description": "Compete for the fewest strokes on digital courses.",
    "steps": [
      "Choose an available multiplayer game.",
      "Agree on course and assists.",
      "Compare scores over a full round."
    ],
    "supplies": [
      "device"
    ]
  },
  {
    "id": 182,
    "title": "Solve a crossword race",
    "mood": "competitive",
    "cost": 0,
    "time": 30,
    "min": 1,
    "max": 6,
    "icon": "📰",
    "description": "Complete equivalent word puzzles against the clock.",
    "steps": [
      "Choose free puzzles of similar difficulty.",
      "Start at the same time or race your own best.",
      "Check answers before declaring a winner."
    ],
    "supplies": [
      "paper"
    ]
  },
  {
    "id": 183,
    "title": "Race through sudoku",
    "mood": "competitive",
    "cost": 0,
    "time": 30,
    "min": 1,
    "max": 6,
    "icon": "🔢",
    "description": "Test logical deduction on a number grid.",
    "steps": [
      "Choose puzzles of equal difficulty.",
      "Set a timer and avoid guessing if possible.",
      "Compare completed grids and solving approaches."
    ],
    "supplies": [
      "paper"
    ]
  },
  {
    "id": 184,
    "title": "Play word-search bingo",
    "mood": "competitive",
    "cost": 0,
    "time": 30,
    "min": 2,
    "max": 6,
    "icon": "🔎",
    "description": "Find hidden words with a shared finish condition.",
    "steps": [
      "Give everyone the same word-search grid.",
      "Agree whether the goal is five words or the whole puzzle.",
      "Check found words and rotate puzzle makers."
    ],
    "supplies": [
      "paper"
    ]
  },
  {
    "id": 185,
    "title": "Play charades",
    "mood": "competitive",
    "cost": 0,
    "time": 60,
    "min": 4,
    "max": 6,
    "icon": "🎭",
    "description": "Communicate prompts using gestures alone.",
    "steps": [
      "Write prompts and split into teams.",
      "Set a one-minute guessing limit.",
      "Rotate performers and keep a score."
    ],
    "supplies": [
      "paper"
    ]
  },
  {
    "id": 186,
    "title": "Play drawing telephone",
    "mood": "competitive",
    "cost": 0,
    "time": 60,
    "min": 3,
    "max": 6,
    "icon": "☎️",
    "description": "Watch a phrase change through alternating drawings and guesses.",
    "steps": [
      "Write a phrase on each player's sheet.",
      "Alternate drawing and interpreting as sheets rotate.",
      "Reveal the chains and vote on the funniest transformation."
    ],
    "supplies": [
      "paper"
    ]
  },
  {
    "id": 187,
    "title": "Play a taboo-style clue game",
    "mood": "competitive",
    "cost": 0,
    "time": 60,
    "min": 4,
    "max": 6,
    "icon": "🤐",
    "description": "Describe a word without using obvious clues.",
    "steps": [
      "Write target words and three banned clues each.",
      "Take timed turns in teams.",
      "Score valid guesses and rotate clue-givers."
    ],
    "supplies": [
      "paper"
    ]
  },
  {
    "id": 188,
    "title": "Play twenty questions",
    "mood": "competitive",
    "cost": 0,
    "time": 30,
    "min": 2,
    "max": 6,
    "icon": "❓",
    "description": "Identify a secret object through yes-or-no questions.",
    "steps": [
      "One person chooses an agreed category.",
      "Count up to twenty questions.",
      "Rotate the chooser after a correct guess or reveal."
    ],
    "supplies": [
      "paper"
    ]
  },
  {
    "id": 189,
    "title": "Play two truths and a lie",
    "mood": "competitive",
    "cost": 0,
    "time": 30,
    "min": 2,
    "max": 6,
    "icon": "🤔",
    "description": "Discover surprising facts about people you know.",
    "steps": [
      "Each person prepares two true statements and one invented one.",
      "Let others ask brief follow-up questions.",
      "Vote before the speaker reveals the lie."
    ],
    "supplies": [
      "paper"
    ]
  },
  {
    "id": 190,
    "title": "Run a spelling bee",
    "mood": "competitive",
    "cost": 0,
    "time": 60,
    "min": 2,
    "max": 6,
    "icon": "🐝",
    "description": "Test spelling with words at a shared difficulty level.",
    "steps": [
      "Choose words and verify pronunciation and spelling.",
      "Take turns spelling aloud.",
      "Keep it friendly and explain unfamiliar words."
    ],
    "supplies": [
      "paper"
    ]
  },
  {
    "id": 191,
    "title": "Hold a geography quiz",
    "mood": "competitive",
    "cost": 0,
    "time": 60,
    "min": 2,
    "max": 6,
    "icon": "🌍",
    "description": "Test your knowledge of places and maps.",
    "steps": [
      "Prepare questions with verified answers.",
      "Include flags, capitals, and map locations.",
      "Score a round and discuss interesting mistakes."
    ],
    "supplies": [
      "paper"
    ]
  },
  {
    "id": 192,
    "title": "Name that tune",
    "mood": "competitive",
    "cost": 0,
    "time": 60,
    "min": 2,
    "max": 6,
    "icon": "🎶",
    "description": "Identify songs from short introductions.",
    "steps": [
      "Use music you can legally access.",
      "Play brief clips without showing titles.",
      "Award points for song and artist."
    ],
    "supplies": [
      "device"
    ]
  },
  {
    "id": 193,
    "title": "Guess the movie quote",
    "mood": "competitive",
    "cost": 0,
    "time": 60,
    "min": 2,
    "max": 6,
    "icon": "🎬",
    "description": "Recognize films from short spoken clues.",
    "steps": [
      "Prepare brief quotes from familiar films.",
      "Read them without naming characters.",
      "Give a bonus for identifying the scene."
    ],
    "supplies": [
      "paper",
      "device"
    ]
  },
  {
    "id": 194,
    "title": "Play an estimation game",
    "mood": "competitive",
    "cost": 0,
    "time": 30,
    "min": 2,
    "max": 6,
    "icon": "📏",
    "description": "Get close to measurable answers without looking them up first.",
    "steps": [
      "Choose quantities such as a book's page count.",
      "Write guesses before measuring.",
      "Award points for the closest answer."
    ],
    "supplies": [
      "paper"
    ]
  },
  {
    "id": 195,
    "title": "Play a memory-tray game",
    "mood": "competitive",
    "cost": 0,
    "time": 30,
    "min": 2,
    "max": 6,
    "icon": "🧠",
    "description": "Recall everyday objects after a quick look.",
    "steps": [
      "Place ten safe objects on a tray.",
      "Show them briefly and cover the tray.",
      "Compare written recall lists."
    ],
    "supplies": [
      "paper"
    ]
  },
  {
    "id": 196,
    "title": "Build the tallest card tower",
    "mood": "competitive",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "🗼",
    "description": "Balance cards into a freestanding structure.",
    "steps": [
      "Give players equal decks and a clear surface.",
      "Set a construction time limit.",
      "Measure only towers that stand unsupported."
    ],
    "supplies": [
      "cards"
    ]
  },
  {
    "id": 197,
    "title": "Build a spaghetti tower",
    "mood": "competitive",
    "cost": 10,
    "time": 60,
    "min": 2,
    "max": 6,
    "icon": "🏗️",
    "description": "Engineer a tall lightweight structure.",
    "steps": [
      "Provide equal spaghetti and tape supplies.",
      "Agree on a time limit and top load.",
      "Test height and stability after construction ends."
    ],
    "supplies": [
      "kitchen",
      "craft"
    ]
  },
  {
    "id": 198,
    "title": "Run an egg-drop design challenge",
    "mood": "competitive",
    "cost": 10,
    "time": 90,
    "min": 2,
    "max": 6,
    "icon": "🥚",
    "description": "Protect an egg in a small landing device.",
    "steps": [
      "Give teams equal padding and packaging materials.",
      "Build a protective case.",
      "Drop from a low safe height into a contained easy-clean area."
    ],
    "supplies": [
      "kitchen",
      "craft"
    ]
  },
  {
    "id": 199,
    "title": "Have a cup-stacking race",
    "mood": "competitive",
    "cost": 0,
    "time": 30,
    "min": 1,
    "max": 6,
    "icon": "🥤",
    "description": "Build and collapse a stack quickly.",
    "steps": [
      "Use reusable cups you already have.",
      "Agree on a stacking pattern.",
      "Time clean attempts and compare improvement."
    ],
    "supplies": [
      "household"
    ]
  },
  {
    "id": 200,
    "title": "Play table tennis",
    "mood": "competitive",
    "cost": 0,
    "time": 60,
    "min": 2,
    "max": 4,
    "icon": "🏓",
    "description": "Rally and compete at an available table.",
    "steps": [
      "Use a table and equipment you can access.",
      "Warm up and agree on scoring.",
      "Play singles or doubles and rotate partners."
    ],
    "supplies": [
      "sports"
    ]
  },
  {
    "id": 201,
    "title": "Play badminton",
    "mood": "competitive",
    "cost": 0,
    "time": 60,
    "min": 2,
    "max": 4,
    "icon": "🏸",
    "description": "Keep the shuttle moving in a friendly match.",
    "steps": [
      "Use existing rackets and a suitable clear court.",
      "Agree on boundaries.",
      "Play short games and switch sides."
    ],
    "supplies": [
      "sports"
    ]
  },
  {
    "id": 202,
    "title": "Play pickleball",
    "mood": "competitive",
    "cost": 0,
    "time": 90,
    "min": 2,
    "max": 4,
    "icon": "🏓",
    "description": "Try a paddle game on an available court.",
    "steps": [
      "Use equipment and court access you already have.",
      "Review serving and kitchen rules.",
      "Play a beginner match and rotate partners."
    ],
    "supplies": [
      "kitchen",
      "sports"
    ]
  },
  {
    "id": 203,
    "title": "Shoot basketball free throws",
    "mood": "competitive",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "🏀",
    "description": "Test consistency from the foul line.",
    "steps": [
      "Find a public court and bring a ball.",
      "Warm up and choose a fixed number of shots.",
      "Track accuracy across several sets."
    ],
    "supplies": [
      "sports"
    ]
  },
  {
    "id": 204,
    "title": "Play a basketball HORSE game",
    "mood": "competitive",
    "cost": 0,
    "time": 60,
    "min": 2,
    "max": 6,
    "icon": "🐴",
    "description": "Challenge friends to match creative shots.",
    "steps": [
      "Use a clear public hoop and your own ball.",
      "Take turns setting reasonable shots.",
      "Assign letters for misses until a winner remains."
    ],
    "supplies": [
      "sports"
    ]
  },
  {
    "id": 205,
    "title": "Play a soccer penalty shootout",
    "mood": "competitive",
    "cost": 0,
    "time": 60,
    "min": 2,
    "max": 6,
    "icon": "⚽",
    "description": "Alternate shooting and goalkeeping.",
    "steps": [
      "Use a suitable field and your own ball.",
      "Agree on a safe shooting distance.",
      "Take equal attempts and compare scores."
    ],
    "supplies": [
      "sports"
    ]
  },
  {
    "id": 206,
    "title": "Play ultimate flying disc",
    "mood": "competitive",
    "cost": 0,
    "time": 60,
    "min": 4,
    "max": 6,
    "icon": "🥏",
    "description": "Pass and move toward an end zone.",
    "steps": [
      "Use a disc and a clear permitted field.",
      "Mark small teams and boundaries.",
      "Play without contact and rotate possession fairly."
    ],
    "supplies": [
      "sports"
    ]
  },
  {
    "id": 207,
    "title": "Play cornhole",
    "mood": "competitive",
    "cost": 0,
    "time": 60,
    "min": 2,
    "max": 4,
    "icon": "🕳️",
    "description": "Aim beanbags at a target board.",
    "steps": [
      "Use a set you own or can borrow.",
      "Agree on throwing distance and scoring.",
      "Play short rounds and switch sides."
    ],
    "supplies": [
      "sports"
    ]
  },
  {
    "id": 208,
    "title": "Play horseshoes",
    "mood": "competitive",
    "cost": 0,
    "time": 60,
    "min": 2,
    "max": 4,
    "icon": "🧲",
    "description": "Test your aim in a designated throwing area.",
    "steps": [
      "Use an existing set and safe pitch.",
      "Keep everyone clear while throwing.",
      "Score rounds according to agreed rules."
    ],
    "supplies": [
      "sports"
    ]
  },
  {
    "id": 209,
    "title": "Play bocce",
    "mood": "competitive",
    "cost": 0,
    "time": 60,
    "min": 2,
    "max": 6,
    "icon": "⚪",
    "description": "Place your ball closest to the target.",
    "steps": [
      "Use a bocce set and a suitable surface.",
      "Agree on boundaries and turn order.",
      "Measure close calls and play to a target score."
    ],
    "supplies": [
      "sports"
    ]
  },
  {
    "id": 210,
    "title": "Play croquet",
    "mood": "competitive",
    "cost": 0,
    "time": 90,
    "min": 2,
    "max": 6,
    "icon": "🔨",
    "description": "Navigate a lawn course with a mallet and ball.",
    "steps": [
      "Use an existing croquet set in a permitted area.",
      "Arrange hoops and explain the course.",
      "Play with enough space between swings."
    ],
    "supplies": [
      "sports"
    ]
  },
  {
    "id": 211,
    "title": "Play lawn bowling",
    "mood": "competitive",
    "cost": 10,
    "time": 90,
    "min": 2,
    "max": 6,
    "icon": "🎳",
    "description": "Roll toward a target on a bowling green.",
    "steps": [
      "Check local access and equipment costs.",
      "Learn basic delivery and scoring.",
      "Play a short beginner game."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 212,
    "title": "Go ten-pin bowling",
    "mood": "competitive",
    "cost": 25,
    "time": 90,
    "min": 2,
    "max": 6,
    "icon": "🎳",
    "description": "Compete over a few frames at a local alley.",
    "steps": [
      "Check lane and shoe prices.",
      "Choose a booking within budget.",
      "Play a game and compare improvement between frames."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 213,
    "title": "Play miniature golf",
    "mood": "competitive",
    "cost": 25,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "⛳",
    "description": "Navigate obstacles in as few strokes as possible.",
    "steps": [
      "Check prices and opening hours.",
      "Agree on a stroke limit per hole.",
      "Play the course and compare scorecards."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 214,
    "title": "Play pool",
    "mood": "competitive",
    "cost": 10,
    "time": 90,
    "min": 2,
    "max": 4,
    "icon": "🎱",
    "description": "Practice angles and positional shots.",
    "steps": [
      "Find a table within budget.",
      "Agree on a ruleset.",
      "Play a few racks and rotate opponents."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 215,
    "title": "Play darts",
    "mood": "competitive",
    "cost": 10,
    "time": 60,
    "min": 2,
    "max": 6,
    "icon": "🎯",
    "description": "Aim for consistent throws and accurate scoring.",
    "steps": [
      "Use a designated board with a clear throwing lane.",
      "Choose a beginner scoring game.",
      "Take turns and collect darts only when throwing stops."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 216,
    "title": "Play air hockey",
    "mood": "competitive",
    "cost": 10,
    "time": 60,
    "min": 2,
    "max": 4,
    "icon": "🏒",
    "description": "React quickly in short table matches.",
    "steps": [
      "Check the cost of an available table.",
      "Agree on a score limit.",
      "Play a small rotating tournament."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 217,
    "title": "Play foosball",
    "mood": "competitive",
    "cost": 10,
    "time": 60,
    "min": 2,
    "max": 4,
    "icon": "⚽",
    "description": "Coordinate quick passes and shots.",
    "steps": [
      "Find an available table within budget.",
      "Agree on rules such as no spinning.",
      "Play singles or doubles and switch ends."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 218,
    "title": "Try a timed typing test",
    "mood": "competitive",
    "cost": 0,
    "time": 30,
    "min": 1,
    "max": 6,
    "icon": "⌨️",
    "description": "Improve speed while protecting accuracy.",
    "steps": [
      "Choose a free typing test.",
      "Run a baseline attempt with normal posture.",
      "Practice and compare accurate words per minute."
    ],
    "supplies": [
      "device"
    ]
  },
  {
    "id": 219,
    "title": "Race a sliding-tile puzzle",
    "mood": "competitive",
    "cost": 0,
    "time": 30,
    "min": 1,
    "max": 6,
    "icon": "🔳",
    "description": "Restore numbered tiles to order.",
    "steps": [
      "Use a puzzle you own or a free digital one.",
      "Start from a solvable scramble.",
      "Track time across several attempts."
    ],
    "supplies": [
      "board"
    ]
  },
  {
    "id": 220,
    "title": "Solve a twisty cube",
    "mood": "competitive",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "🧊",
    "description": "Learn or race a sequence-based puzzle.",
    "steps": [
      "Use a cube you own.",
      "Follow a beginner method or time a known solve.",
      "Practice one troublesome stage."
    ],
    "supplies": [
      "board"
    ]
  },
  {
    "id": 221,
    "title": "Compete in paper-ball basketball",
    "mood": "competitive",
    "cost": 0,
    "time": 30,
    "min": 2,
    "max": 6,
    "icon": "🗑️",
    "description": "Turn scrap paper and a bin into a target game.",
    "steps": [
      "Set a stable empty bin away from fragile objects.",
      "Mark equal throwing positions.",
      "Give everyone the same number of shots."
    ],
    "supplies": [
      "paper",
      "sports"
    ]
  },
  {
    "id": 222,
    "title": "Run a sock-toss challenge",
    "mood": "competitive",
    "cost": 0,
    "time": 30,
    "min": 2,
    "max": 6,
    "icon": "🧦",
    "description": "Aim rolled socks at household targets.",
    "steps": [
      "Set up baskets at several distances.",
      "Assign points to each basket.",
      "Take equal turns and total scores."
    ],
    "supplies": [
      "household"
    ]
  },
  {
    "id": 223,
    "title": "Play indoor balloon volleyball",
    "mood": "competitive",
    "cost": 10,
    "time": 30,
    "min": 2,
    "max": 6,
    "icon": "🎈",
    "description": "Keep a balloon over a makeshift net.",
    "steps": [
      "Clear a room and check latex sensitivities.",
      "Mark sides without attaching anything hazardous.",
      "Play gently and remove broken balloon pieces."
    ],
    "supplies": [
      "craft"
    ]
  },
  {
    "id": 224,
    "title": "Play capture the flag",
    "mood": "competitive",
    "cost": 0,
    "time": 60,
    "min": 4,
    "max": 6,
    "icon": "🚩",
    "description": "Use strategy to retrieve a team's marker.",
    "steps": [
      "Choose a permitted area with clear boundaries.",
      "Agree on gentle tagging and safe zones.",
      "Play short rounds and swap sides."
    ],
    "supplies": [
      "sports",
      "outdoor"
    ]
  },
  {
    "id": 225,
    "title": "Play flashlight tag",
    "mood": "competitive",
    "cost": 0,
    "time": 60,
    "min": 4,
    "max": 6,
    "icon": "🔦",
    "description": "Play a nighttime spotting game in a familiar area.",
    "steps": [
      "Choose a safe permitted space and set boundaries.",
      "Agree on how a flashlight sighting counts.",
      "Walk carefully and avoid shining lights into eyes."
    ],
    "supplies": [
      "household",
      "outdoor"
    ]
  },
  {
    "id": 226,
    "title": "Play reverse hide-and-seek",
    "mood": "competitive",
    "cost": 0,
    "time": 60,
    "min": 3,
    "max": 6,
    "icon": "🙈",
    "description": "Find the hiding player and quietly join them.",
    "steps": [
      "Choose a safe familiar area with explicit boundaries.",
      "One person hides while others search.",
      "Gather quietly until the last seeker finds the group."
    ],
    "supplies": [
      "household"
    ]
  },
  {
    "id": 227,
    "title": "Host a debate round",
    "mood": "competitive",
    "cost": 0,
    "time": 60,
    "min": 2,
    "max": 6,
    "icon": "🗣️",
    "description": "Practice making a clear case on a lighthearted topic.",
    "steps": [
      "Choose a harmless topic and assign sides.",
      "Allow equal preparation and speaking time.",
      "Judge clarity, evidence, and respectful responses."
    ],
    "supplies": [
      "paper"
    ]
  },
  {
    "id": 228,
    "title": "Run an escape-room puzzle at home",
    "mood": "competitive",
    "cost": 0,
    "time": 120,
    "min": 2,
    "max": 6,
    "icon": "🔐",
    "description": "Solve connected clues without actually locking anyone in.",
    "steps": [
      "Have a host prepare three to five logical clues.",
      "Set a timer and make hints available.",
      "Review the solutions afterward."
    ],
    "supplies": [
      "paper"
    ]
  },
  {
    "id": 229,
    "title": "Play a cooperative video-game mission",
    "mood": "competitive",
    "cost": 0,
    "time": 90,
    "min": 2,
    "max": 6,
    "icon": "🕹️",
    "description": "Coordinate roles to complete a shared objective.",
    "steps": [
      "Choose a game everyone can access.",
      "Set a mission and explain controls.",
      "Rotate responsibilities and review the team's strategy."
    ],
    "supplies": [
      "device"
    ]
  },
  {
    "id": 230,
    "title": "Play a tabletop roleplaying one-shot",
    "mood": "competitive",
    "cost": 0,
    "time": 120,
    "min": 3,
    "max": 6,
    "icon": "🐉",
    "description": "Tell a complete adventure with dice and shared choices.",
    "steps": [
      "Choose a free short ruleset and adventure.",
      "Make simple characters and agree on content boundaries.",
      "Play a self-contained session with a clear ending."
    ],
    "supplies": [
      "paper",
      "device"
    ]
  },
  {
    "id": 231,
    "title": "Have a blind drawing challenge",
    "mood": "competitive",
    "cost": 0,
    "time": 30,
    "min": 2,
    "max": 6,
    "icon": "✏️",
    "description": "Sketch without looking down at your paper.",
    "steps": [
      "Choose a visible object.",
      "Draw its outline while watching only the object.",
      "Reveal results and vote on the most recognizable sketch."
    ],
    "supplies": [
      "paper"
    ]
  },
  {
    "id": 232,
    "title": "Play a paper-and-pencil territory game",
    "mood": "competitive",
    "cost": 0,
    "time": 30,
    "min": 2,
    "max": 2,
    "icon": "▦",
    "description": "Claim space through careful moves on a grid.",
    "steps": [
      "Draw a dots-and-boxes grid.",
      "Take turns adding one line.",
      "Claim completed boxes and compare totals."
    ],
    "supplies": [
      "paper"
    ]
  },
  {
    "id": 233,
    "title": "Walk a nature trail",
    "mood": "adventure",
    "cost": 0,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🥾",
    "description": "Explore a marked route outside your usual routine.",
    "steps": [
      "Choose a trail suited to your abilities.",
      "Check conditions and bring water.",
      "Stay on marked paths and note a favorite stop."
    ],
    "supplies": [
      "outdoor"
    ]
  },
  {
    "id": 234,
    "title": "Visit a local history museum",
    "mood": "adventure",
    "cost": 10,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🏛️",
    "description": "Learn the story of the place around you.",
    "steps": [
      "Check admission and opening hours.",
      "Choose a few exhibits to explore closely.",
      "Share one fact you did not know before."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 235,
    "title": "Visit an art museum",
    "mood": "adventure",
    "cost": 25,
    "time": 120,
    "min": 1,
    "max": 6,
    "icon": "🖼️",
    "description": "See original artwork in person.",
    "steps": [
      "Check prices or free-entry periods.",
      "Spend time with a few works rather than rushing.",
      "Choose a favorite and explain your reaction."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 236,
    "title": "Explore a science center",
    "mood": "adventure",
    "cost": 25,
    "time": 120,
    "min": 1,
    "max": 6,
    "icon": "🔬",
    "description": "Learn through hands-on exhibits.",
    "steps": [
      "Check admission and available demonstrations.",
      "Choose exhibits that match your interests.",
      "Discuss the mechanism behind your favorite one."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 237,
    "title": "Tour a public historic building",
    "mood": "adventure",
    "cost": 10,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🏰",
    "description": "See architecture alongside local history.",
    "steps": [
      "Find an official public tour.",
      "Confirm booking and admission requirements.",
      "Follow the guide and ask a question."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 238,
    "title": "Visit a farmers market",
    "mood": "adventure",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "🥕",
    "description": "Discover what local growers and makers offer.",
    "steps": [
      "Confirm the market's date and location.",
      "Browse stalls and ask about seasonal produce.",
      "Buy only if desired and within your own budget."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 239,
    "title": "Browse a flea market",
    "mood": "adventure",
    "cost": 0,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🧳",
    "description": "Look for unusual objects and their stories.",
    "steps": [
      "Check entry charges and choose a free market.",
      "Browse without blocking stalls.",
      "Choose the most interesting object you discovered."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 240,
    "title": "Visit a craft fair",
    "mood": "adventure",
    "cost": 0,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🧶",
    "description": "Meet makers and see different techniques.",
    "steps": [
      "Find a confirmed free-entry event.",
      "Browse respectfully and ask permission before photos.",
      "Note a craft you would like to learn."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 241,
    "title": "Attend a community festival",
    "mood": "adventure",
    "cost": 0,
    "time": 120,
    "min": 1,
    "max": 6,
    "icon": "🎉",
    "description": "Experience a public local celebration.",
    "steps": [
      "Choose a free-entry festival and check its program.",
      "Plan a meeting point if attending together.",
      "Enjoy included performances without needing purchases."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 242,
    "title": "Take a self-guided architecture walk",
    "mood": "adventure",
    "cost": 0,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🏢",
    "description": "Notice the design of buildings you usually pass.",
    "steps": [
      "Choose three publicly visible buildings.",
      "Compare materials, entrances, and proportions.",
      "Stay on public paths and sketch a favorite detail."
    ],
    "supplies": [
      "outdoor"
    ]
  },
  {
    "id": 243,
    "title": "Visit a sculpture garden",
    "mood": "adventure",
    "cost": 0,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🗿",
    "description": "See how art changes in an outdoor setting.",
    "steps": [
      "Find a free public sculpture collection.",
      "Walk the designated route.",
      "Compare a sculpture from several permitted viewpoints."
    ],
    "supplies": [
      "craft",
      "venue"
    ]
  },
  {
    "id": 244,
    "title": "Find a public mural trail",
    "mood": "adventure",
    "cost": 0,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🎨",
    "description": "Discover large-scale street artwork.",
    "steps": [
      "Find a local public-art map.",
      "Choose a walkable cluster of murals.",
      "Read artist credits and photograph only where allowed."
    ],
    "supplies": [
      "outdoor"
    ]
  },
  {
    "id": 245,
    "title": "Try geocaching",
    "mood": "adventure",
    "cost": 0,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "📍",
    "description": "Follow coordinates to a hidden community cache.",
    "steps": [
      "Choose an accessible beginner cache from a public listing.",
      "Follow its access rules and bring water.",
      "Sign the log and return the cache exactly as found."
    ],
    "supplies": [
      "outdoor"
    ]
  },
  {
    "id": 246,
    "title": "Try letterboxing",
    "mood": "adventure",
    "cost": 0,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "📬",
    "description": "Follow written clues to a hidden stamp box.",
    "steps": [
      "Find an active permitted listing and bring your stamp book.",
      "Follow clues without disturbing the area.",
      "Stamp the book and reseal the box carefully."
    ],
    "supplies": [
      "paper",
      "outdoor"
    ]
  },
  {
    "id": 247,
    "title": "Go orienteering",
    "mood": "adventure",
    "cost": 0,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🧭",
    "description": "Navigate using a map and checkpoints.",
    "steps": [
      "Choose a free permanent beginner course.",
      "Bring its official map and suitable equipment.",
      "Find checkpoints while respecting boundaries."
    ],
    "supplies": [
      "outdoor"
    ]
  },
  {
    "id": 248,
    "title": "Ride a bicycle trail",
    "mood": "adventure",
    "cost": 0,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🚲",
    "description": "Explore a designated route on your own bike.",
    "steps": [
      "Check the route and bike condition.",
      "Wear a helmet and bring water.",
      "Ride at a suitable pace and follow trail rules."
    ],
    "supplies": [
      "bike",
      "outdoor"
    ]
  },
  {
    "id": 249,
    "title": "Try roller skating outdoors",
    "mood": "adventure",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "🛼",
    "description": "Practice smooth movement on a suitable surface.",
    "steps": [
      "Use skates and protective equipment you own.",
      "Choose a permitted flat area away from traffic.",
      "Practice stopping before building speed."
    ],
    "supplies": [
      "skates",
      "outdoor"
    ]
  },
  {
    "id": 250,
    "title": "Visit a skate park",
    "mood": "adventure",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "🛹",
    "description": "Practice basic skills in a designated space.",
    "steps": [
      "Bring suitable equipment and protection.",
      "Observe the park's flow and etiquette.",
      "Work on skills appropriate to your experience."
    ],
    "supplies": [
      "skates",
      "venue",
      "outdoor"
    ]
  },
  {
    "id": 251,
    "title": "Go swimming at a public pool",
    "mood": "adventure",
    "cost": 10,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🏊",
    "description": "Enjoy time in a designated swimming facility.",
    "steps": [
      "Check entry fees and opening hours.",
      "Choose a lifeguarded session suited to your swimming ability.",
      "Follow posted rules and take breaks."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 252,
    "title": "Rent a pedal boat",
    "mood": "adventure",
    "cost": 25,
    "time": 60,
    "min": 2,
    "max": 4,
    "icon": "🚣",
    "description": "See a park lake from a different angle.",
    "steps": [
      "Check rental prices, weather, and passenger limits.",
      "Wear the provided flotation gear.",
      "Stay inside the designated boating area."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 253,
    "title": "Try kayaking with an operator",
    "mood": "adventure",
    "cost": 25,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🛶",
    "description": "Learn basic paddling in a managed setting.",
    "steps": [
      "Find a beginner rental or session within budget.",
      "Follow the operator's safety briefing and wear a life jacket.",
      "Stay on the approved route."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 254,
    "title": "Visit a rock-climbing gym",
    "mood": "adventure",
    "cost": 25,
    "time": 120,
    "min": 1,
    "max": 6,
    "icon": "🧗",
    "description": "Try beginner climbing on purpose-built walls.",
    "steps": [
      "Check admission, rental, and orientation fees.",
      "Complete the gym's required instruction.",
      "Use beginner routes and follow staff guidance."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 255,
    "title": "Try a trampoline park",
    "mood": "adventure",
    "cost": 25,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🤸",
    "description": "Enjoy a supervised indoor jumping session.",
    "steps": [
      "Check prices, restrictions, and required equipment.",
      "Listen to the safety briefing.",
      "Use areas suited to your abilities and take breaks."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 256,
    "title": "Go ice skating",
    "mood": "adventure",
    "cost": 25,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "⛸️",
    "description": "Practice balance on a public rink.",
    "steps": [
      "Check session and skate-rental costs.",
      "Choose skates that fit and learn how to stop.",
      "Follow rink direction and take breaks."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 257,
    "title": "Visit a roller rink",
    "mood": "adventure",
    "cost": 25,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🛼",
    "description": "Skate to music in an indoor setting.",
    "steps": [
      "Check admission and rental prices.",
      "Choose a beginner-friendly session.",
      "Follow traffic direction and practice stopping."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 258,
    "title": "Try a dance class",
    "mood": "adventure",
    "cost": 25,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "💃",
    "description": "Learn basic steps with an instructor.",
    "steps": [
      "Find an introductory class within budget.",
      "Check clothing and booking requirements.",
      "Join at your comfort level and practice the sequence."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 259,
    "title": "Attend a community workout",
    "mood": "adventure",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "🏃",
    "description": "Move with a group at a free public session.",
    "steps": [
      "Find a confirmed free beginner-friendly class.",
      "Bring water and suitable clothing.",
      "Adapt movements to your ability."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 260,
    "title": "Join a public walking group",
    "mood": "adventure",
    "cost": 0,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🚶",
    "description": "Meet people while exploring a planned route.",
    "steps": [
      "Find an established group and check pace and distance.",
      "Meet at the listed public location.",
      "Follow the route and introduce yourself."
    ],
    "supplies": [
      "venue",
      "outdoor"
    ]
  },
  {
    "id": 261,
    "title": "Join a community litter pickup",
    "mood": "adventure",
    "cost": 0,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🧤",
    "description": "Help improve a shared outdoor space.",
    "steps": [
      "Join an organized cleanup that provides equipment.",
      "Use gloves and follow collection instructions.",
      "Leave sharp or hazardous items to the organizers."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 262,
    "title": "Volunteer at a food bank",
    "mood": "adventure",
    "cost": 0,
    "time": 120,
    "min": 1,
    "max": 6,
    "icon": "🥫",
    "description": "Support a local distribution effort.",
    "steps": [
      "Check volunteer registration and age requirements.",
      "Book a suitable shift.",
      "Follow staff instructions for sorting or packing."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 263,
    "title": "Help at an animal shelter",
    "mood": "adventure",
    "cost": 0,
    "time": 120,
    "min": 1,
    "max": 6,
    "icon": "🐾",
    "description": "Contribute time to an organization caring for animals.",
    "steps": [
      "Check approved volunteer roles and orientation requirements.",
      "Book a permitted activity.",
      "Follow staff instructions and animal-handling rules."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 264,
    "title": "Volunteer in a community garden",
    "mood": "adventure",
    "cost": 0,
    "time": 120,
    "min": 1,
    "max": 6,
    "icon": "🌱",
    "description": "Help maintain a productive shared space.",
    "steps": [
      "Contact the garden about volunteer sessions.",
      "Bring required clothing and water.",
      "Complete assigned tasks without harvesting uninvited."
    ],
    "supplies": [
      "venue",
      "outdoor"
    ]
  },
  {
    "id": 265,
    "title": "Attend a town-hall meeting",
    "mood": "adventure",
    "cost": 0,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🏛️",
    "description": "See local decision-making in person.",
    "steps": [
      "Find a public meeting and read the agenda.",
      "Check attendance procedures.",
      "Listen and note a topic you want to understand better."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 266,
    "title": "Visit an open campus lecture",
    "mood": "adventure",
    "cost": 0,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🎓",
    "description": "Learn about an unfamiliar topic from a speaker.",
    "steps": [
      "Confirm a lecture is open to the public.",
      "Check registration and location.",
      "Listen and prepare one thoughtful question."
    ],
    "supplies": [
      "venue",
      "outdoor"
    ]
  },
  {
    "id": 267,
    "title": "Attend a public astronomy night",
    "mood": "adventure",
    "cost": 0,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🔭",
    "description": "Look through telescopes with knowledgeable hosts.",
    "steps": [
      "Find a confirmed free public event.",
      "Check weather and access instructions.",
      "Follow viewing etiquette and ask about the objects shown."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 268,
    "title": "Tour a working farm",
    "mood": "adventure",
    "cost": 25,
    "time": 120,
    "min": 1,
    "max": 6,
    "icon": "🚜",
    "description": "Learn how food or fiber is produced.",
    "steps": [
      "Find an authorized visitor tour and check fees.",
      "Wear suitable shoes and follow hygiene instructions.",
      "Ask about the farm's seasonal work."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 269,
    "title": "Pick seasonal fruit",
    "mood": "adventure",
    "cost": 25,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🍓",
    "description": "Harvest produce at a designated pick-your-own farm.",
    "steps": [
      "Check availability, entry fees, and minimum purchases.",
      "Learn which fruit is ready and how pricing works.",
      "Pick only in the permitted area."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 270,
    "title": "Visit a pumpkin patch",
    "mood": "adventure",
    "cost": 25,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🎃",
    "description": "Enjoy a seasonal farm outing.",
    "steps": [
      "Check opening dates and entry costs.",
      "Choose included activities within budget.",
      "Buy a pumpkin only if you want one."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 271,
    "title": "Walk through a corn maze",
    "mood": "adventure",
    "cost": 25,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🌽",
    "description": "Navigate a seasonal outdoor puzzle.",
    "steps": [
      "Check admission, weather, and operating hours.",
      "Take water and follow the maze rules.",
      "Compare route choices when you reach the exit."
    ],
    "supplies": [
      "venue",
      "outdoor"
    ]
  },
  {
    "id": 272,
    "title": "Visit a flower field",
    "mood": "adventure",
    "cost": 25,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🌷",
    "description": "See a seasonal display at a permitted visitor site.",
    "steps": [
      "Confirm bloom timing and admission.",
      "Stay on marked visitor paths.",
      "Take photos without picking unless explicitly allowed."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 273,
    "title": "Attend an outdoor movie screening",
    "mood": "adventure",
    "cost": 0,
    "time": 120,
    "min": 1,
    "max": 6,
    "icon": "🎥",
    "description": "Watch a film in a public open-air setting.",
    "steps": [
      "Find a confirmed free screening.",
      "Bring permitted seating and check weather.",
      "Arrive early and pack out your belongings."
    ],
    "supplies": [
      "device",
      "venue",
      "outdoor"
    ]
  },
  {
    "id": 274,
    "title": "Attend a free outdoor concert",
    "mood": "adventure",
    "cost": 0,
    "time": 120,
    "min": 1,
    "max": 6,
    "icon": "🎤",
    "description": "Enjoy live music in a public setting.",
    "steps": [
      "Check the official event details.",
      "Bring water and permitted seating.",
      "Respect neighbors and follow venue rules."
    ],
    "supplies": [
      "venue",
      "outdoor"
    ]
  },
  {
    "id": 275,
    "title": "Watch a community sports match",
    "mood": "adventure",
    "cost": 0,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🏟️",
    "description": "Support local players at a free spectator event.",
    "steps": [
      "Confirm public access and any admission charges.",
      "Choose a free match and check the schedule.",
      "Learn the teams and enjoy the play."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 276,
    "title": "Watch a local theater rehearsal showcase",
    "mood": "adventure",
    "cost": 10,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🎭",
    "description": "See developing performances in a casual setting.",
    "steps": [
      "Find an officially advertised public showcase.",
      "Confirm tickets and timing.",
      "Attend respectfully and give feedback only if invited."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 277,
    "title": "Try an escape-room venue",
    "mood": "adventure",
    "cost": 25,
    "time": 90,
    "min": 2,
    "max": 6,
    "icon": "🔐",
    "description": "Solve a coordinated puzzle with a small team.",
    "steps": [
      "Check per-person costs and group requirements.",
      "Choose a suitable room and reserve if necessary.",
      "Listen to the briefing and divide clue-solving tasks."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 278,
    "title": "Take a historical walking tour",
    "mood": "adventure",
    "cost": 25,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🚩",
    "description": "Discover stories behind familiar streets.",
    "steps": [
      "Choose an official guided tour within budget.",
      "Check distance and accessibility.",
      "Follow the guide and note a place to revisit."
    ],
    "supplies": [
      "outdoor"
    ]
  },
  {
    "id": 279,
    "title": "Take a public transit sightseeing loop",
    "mood": "adventure",
    "cost": 10,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🚌",
    "description": "See a familiar city from a different route.",
    "steps": [
      "Plan a legal route and check fares and return times.",
      "Choose daylight travel and keep track of stops.",
      "Note public places you might explore later."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 280,
    "title": "Visit a ferry viewpoint",
    "mood": "adventure",
    "cost": 10,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "⛴️",
    "description": "Enjoy waterfront views from a short public crossing.",
    "steps": [
      "Check fares, schedules, and return service.",
      "Stay in designated passenger areas.",
      "Watch the shoreline change during the trip."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 281,
    "title": "Explore a public arboretum",
    "mood": "adventure",
    "cost": 10,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🌳",
    "description": "Discover a living collection of trees.",
    "steps": [
      "Check access and admission costs.",
      "Choose a marked route.",
      "Read labels and compare tree forms."
    ],
    "supplies": [
      "outdoor"
    ]
  },
  {
    "id": 282,
    "title": "Walk a wetland boardwalk",
    "mood": "adventure",
    "cost": 0,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🪷",
    "description": "Observe a habitat from a designated path.",
    "steps": [
      "Choose a public boardwalk and check conditions.",
      "Bring water and remain on the walkway.",
      "Look for adaptations in plants and birds."
    ],
    "supplies": [
      "outdoor"
    ]
  },
  {
    "id": 283,
    "title": "Explore a public beach",
    "mood": "adventure",
    "cost": 0,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🏖️",
    "description": "Enjoy a shoreline walk without needing to swim.",
    "steps": [
      "Check public access, weather, and tide conditions.",
      "Walk a permitted route away from hazardous water.",
      "Leave natural objects and wildlife undisturbed."
    ],
    "supplies": [
      "outdoor"
    ]
  },
  {
    "id": 284,
    "title": "Visit tide pools with a guide",
    "mood": "adventure",
    "cost": 25,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🦀",
    "description": "Learn about shoreline life at an organized outing.",
    "steps": [
      "Find a guided session and check costs.",
      "Wear suitable footwear and follow tide guidance.",
      "Observe animals without moving or collecting them."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 285,
    "title": "Go on a geology walk",
    "mood": "adventure",
    "cost": 0,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🪨",
    "description": "Read the landscape through rocks and landforms.",
    "steps": [
      "Choose a documented public route.",
      "Use a reliable local geology guide.",
      "Observe surfaces without hammering or collecting restricted material."
    ],
    "supplies": [
      "outdoor"
    ]
  },
  {
    "id": 286,
    "title": "Find a waterfall viewpoint",
    "mood": "adventure",
    "cost": 0,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "💧",
    "description": "Visit an accessible overlook along a marked route.",
    "steps": [
      "Check trail distance and current conditions.",
      "Choose a route within your ability.",
      "Stay behind barriers and avoid slippery edges."
    ],
    "supplies": [
      "outdoor"
    ]
  },
  {
    "id": 287,
    "title": "Take a train-station architecture visit",
    "mood": "adventure",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "🚉",
    "description": "Explore the public spaces of an interesting station.",
    "steps": [
      "Confirm which areas are open without a ticket.",
      "Look at signs, structure, and passenger circulation.",
      "Stay clear of platforms requiring tickets or access controls."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 288,
    "title": "Explore a public market hall",
    "mood": "adventure",
    "cost": 0,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🏬",
    "description": "Discover an indoor gathering place and its vendors.",
    "steps": [
      "Check opening hours and free entry.",
      "Walk through the public aisles.",
      "Compare displays and note something to try another time."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 289,
    "title": "Visit an international grocery store",
    "mood": "adventure",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "🛒",
    "description": "Learn about ingredients you do not usually cook with.",
    "steps": [
      "Choose an open store.",
      "Browse labels respectfully and ask staff questions when appropriate.",
      "Write down an ingredient to research",
      " purchase optional."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 290,
    "title": "Visit a tool library open house",
    "mood": "adventure",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "🧰",
    "description": "Discover equipment a community shares.",
    "steps": [
      "Find a public introduction or open house.",
      "Learn borrowing rules and available tools.",
      "Choose a future project you could prepare for."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 291,
    "title": "Tour a makerspace",
    "mood": "adventure",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "⚙️",
    "description": "See how shared workshops support making.",
    "steps": [
      "Book a free public orientation or tour.",
      "Follow staff access and safety rules.",
      "Learn what training a future project would need."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 292,
    "title": "Attend a repair cafe",
    "mood": "adventure",
    "cost": 0,
    "time": 120,
    "min": 1,
    "max": 6,
    "icon": "🔧",
    "description": "Learn whether a broken item can be repaired.",
    "steps": [
      "Check accepted items and book if required.",
      "Bring the item and relevant parts.",
      "Work with volunteers and follow electrical-safety guidance."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 293,
    "title": "Visit a library special collection",
    "mood": "adventure",
    "cost": 0,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "📜",
    "description": "See unusual documents or objects with staff guidance.",
    "steps": [
      "Confirm public access and appointment requirements.",
      "Request appropriate materials.",
      "Follow handling and photography rules."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 294,
    "title": "Attend a public author talk",
    "mood": "adventure",
    "cost": 0,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "✒️",
    "description": "Hear a writer discuss their work.",
    "steps": [
      "Find a confirmed free public talk.",
      "Read a short overview of the author's work.",
      "Attend and ask a relevant question if invited."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 295,
    "title": "Attend a language exchange",
    "mood": "adventure",
    "cost": 0,
    "time": 90,
    "min": 2,
    "max": 6,
    "icon": "🗣️",
    "description": "Practice conversation with other learners.",
    "steps": [
      "Choose a free established public meetup.",
      "Prepare a short introduction and a few questions.",
      "Share speaking time and welcome corrections."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 296,
    "title": "Visit an observatory visitor center",
    "mood": "adventure",
    "cost": 10,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🛰️",
    "description": "Learn about the instruments used to study space.",
    "steps": [
      "Check visitor hours and entry fees.",
      "Explore the public exhibits.",
      "Ask how the facility collects observations."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 297,
    "title": "Try a beginner fishing session",
    "mood": "adventure",
    "cost": 25,
    "time": 120,
    "min": 1,
    "max": 6,
    "icon": "🎣",
    "description": "Learn fishing basics at an authorized program.",
    "steps": [
      "Check program fees, equipment, and license requirements.",
      "Follow local rules and instructor guidance.",
      "Handle wildlife only as instructed and leave no line behind."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 298,
    "title": "Go on an accessible urban hike",
    "mood": "adventure",
    "cost": 0,
    "time": 120,
    "min": 1,
    "max": 6,
    "icon": "🏙️",
    "description": "Link neighborhoods and parks into a longer walk.",
    "steps": [
      "Plan a route with rest stops and a return option.",
      "Check surfaces and distance for your group.",
      "Bring water and adjust the route if needed."
    ],
    "supplies": [
      "outdoor"
    ]
  },
  {
    "id": 299,
    "title": "Explore a cemetery's public history",
    "mood": "adventure",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "🕯️",
    "description": "Learn from an officially open historic cemetery.",
    "steps": [
      "Check visitor hours and any guided route.",
      "Walk respectfully without disturbing visitors or graves.",
      "Look up the public history behind a marked memorial."
    ],
    "supplies": [
      "outdoor"
    ]
  },
  {
    "id": 300,
    "title": "Bind a simple notebook",
    "mood": "creative",
    "cost": 10,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🧶",
    "description": "Fold a small stack of paper, make a card cover, and stitch the fold into a usable notebook.",
    "steps": [
      "Gather the listed materials and choose a beginner guide if the technique is new; prepare a clear protected workspace.",
      "Fold a small stack of paper, make a card cover, and stitch the fold into a usable notebook.",
      "Review your finished result or progress, allow any extra drying or curing time, and put tools and materials away."
    ],
    "supplies": [
      "paper",
      "craft"
    ]
  },
  {
    "id": 301,
    "title": "Carve a rubber stamp",
    "mood": "creative",
    "cost": 10,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🧶",
    "description": "Transfer a bold design onto a carving block and use suitable carving tools to make a reusable stamp.",
    "steps": [
      "Gather the listed materials and choose a beginner guide if the technique is new; prepare a clear protected workspace.",
      "Transfer a bold design onto a carving block and use suitable carving tools to make a reusable stamp.",
      "Review your finished result or progress, allow any extra drying or curing time, and put tools and materials away."
    ],
    "supplies": [
      "craft"
    ]
  },
  {
    "id": 302,
    "title": "Print a cyanotype",
    "mood": "creative",
    "cost": 25,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🌿",
    "description": "Arrange objects on prepared cyanotype paper and expose and rinse it according to the kit instructions.",
    "steps": [
      "Check weather and public access, bring suitable essentials, and choose a route or space appropriate for everyone.",
      "Arrange objects on prepared cyanotype paper and expose and rinse it according to the kit instructions.",
      "Leave the area as you found it and compare a favorite observation before heading back."
    ],
    "supplies": [
      "craft",
      "outdoor"
    ]
  },
  {
    "id": 303,
    "title": "Make a monoprint",
    "mood": "creative",
    "cost": 10,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "🧶",
    "description": "Roll washable printing ink on a suitable surface, draw into it, and transfer a one-off print to paper.",
    "steps": [
      "Gather the listed materials and choose a beginner guide if the technique is new; prepare a clear protected workspace.",
      "Roll washable printing ink on a suitable surface, draw into it, and transfer a one-off print to paper.",
      "Review your finished result or progress, allow any extra drying or curing time, and put tools and materials away."
    ],
    "supplies": [
      "craft",
      "paper"
    ]
  },
  {
    "id": 304,
    "title": "Try screen printing with a kit",
    "mood": "creative",
    "cost": 25,
    "time": 120,
    "min": 1,
    "max": 6,
    "icon": "🧶",
    "description": "Use a beginner screen-printing kit to transfer a simple original design onto a suitable surface.",
    "steps": [
      "Gather the listed materials and choose a beginner guide if the technique is new; prepare a clear protected workspace.",
      "Use a beginner screen-printing kit to transfer a simple original design onto a suitable surface.",
      "Review your finished result or progress, allow any extra drying or curing time, and put tools and materials away."
    ],
    "supplies": [
      "craft"
    ]
  },
  {
    "id": 305,
    "title": "Make a paper-cut silhouette",
    "mood": "creative",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "🧶",
    "description": "Sketch a recognizable profile or object and cut its outline from dark paper to mount on a light background.",
    "steps": [
      "Gather the listed materials and choose a beginner guide if the technique is new; prepare a clear protected workspace.",
      "Sketch a recognizable profile or object and cut its outline from dark paper to mount on a light background.",
      "Review your finished result or progress, allow any extra drying or curing time, and put tools and materials away."
    ],
    "supplies": [
      "paper",
      "craft"
    ]
  },
  {
    "id": 306,
    "title": "Build a pop-up card",
    "mood": "creative",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "🧶",
    "description": "Use folded tabs and a simple paper hinge to make a shape stand up when a card opens.",
    "steps": [
      "Gather the listed materials and choose a beginner guide if the technique is new; prepare a clear protected workspace.",
      "Use folded tabs and a simple paper hinge to make a shape stand up when a card opens.",
      "Review your finished result or progress, allow any extra drying or curing time, and put tools and materials away."
    ],
    "supplies": [
      "paper",
      "craft"
    ]
  },
  {
    "id": 307,
    "title": "Make a tunnel book",
    "mood": "creative",
    "cost": 10,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🧶",
    "description": "Cut several layered paper scenes and connect them with accordion sides to create a deep view.",
    "steps": [
      "Gather the listed materials and choose a beginner guide if the technique is new; prepare a clear protected workspace.",
      "Cut several layered paper scenes and connect them with accordion sides to create a deep view.",
      "Review your finished result or progress, allow any extra drying or curing time, and put tools and materials away."
    ],
    "supplies": [
      "paper",
      "craft"
    ]
  },
  {
    "id": 308,
    "title": "Make an accordion photo book",
    "mood": "creative",
    "cost": 10,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🧶",
    "description": "Fold a long paper strip and mount a sequence of your own photos into a freestanding booklet.",
    "steps": [
      "Gather the listed materials and choose a beginner guide if the technique is new; prepare a clear protected workspace.",
      "Fold a long paper strip and mount a sequence of your own photos into a freestanding booklet.",
      "Review your finished result or progress, allow any extra drying or curing time, and put tools and materials away."
    ],
    "supplies": [
      "paper",
      "craft",
      "camera"
    ]
  },
  {
    "id": 309,
    "title": "Create a paper quilling design",
    "mood": "creative",
    "cost": 10,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🧶",
    "description": "Roll narrow paper strips into coils and arrange them into a small decorative image.",
    "steps": [
      "Gather the listed materials and choose a beginner guide if the technique is new; prepare a clear protected workspace.",
      "Roll narrow paper strips into coils and arrange them into a small decorative image.",
      "Review your finished result or progress, allow any extra drying or curing time, and put tools and materials away."
    ],
    "supplies": [
      "paper",
      "craft"
    ]
  },
  {
    "id": 310,
    "title": "Try paper marbling",
    "mood": "creative",
    "cost": 10,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🧶",
    "description": "Use a paper-marbling kit to float a color pattern and transfer it onto a sheet.",
    "steps": [
      "Gather the listed materials and choose a beginner guide if the technique is new; prepare a clear protected workspace.",
      "Use a paper-marbling kit to float a color pattern and transfer it onto a sheet.",
      "Review your finished result or progress, allow any extra drying or curing time, and put tools and materials away."
    ],
    "supplies": [
      "paper",
      "craft"
    ]
  },
  {
    "id": 311,
    "title": "Make handmade recycled paper",
    "mood": "creative",
    "cost": 10,
    "time": 120,
    "min": 1,
    "max": 6,
    "icon": "🍳",
    "description": "Blend soaked scrap paper into pulp with suitable equipment and form sheets on a screen, then allow extra drying time.",
    "steps": [
      "Choose a reliable beginner recipe, read it fully, check ingredients and allergies, and prepare the equipment before starting.",
      "Blend soaked scrap paper into pulp with suitable equipment and form sheets on a screen, then allow extra drying time.",
      "Taste the result when ready, clean the work area, and follow the recipe for cooling, storage, and any additional setting time."
    ],
    "supplies": [
      "paper",
      "craft",
      "kitchen"
    ]
  },
  {
    "id": 312,
    "title": "Make a seed-paper gift tag",
    "mood": "creative",
    "cost": 10,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🧶",
    "description": "Embed locally appropriate untreated seeds into homemade paper pulp and dry it into a labeled gift tag.",
    "steps": [
      "Gather the listed materials and choose a beginner guide if the technique is new; prepare a clear protected workspace.",
      "Embed locally appropriate untreated seeds into homemade paper pulp and dry it into a labeled gift tag.",
      "Review your finished result or progress, allow any extra drying or curing time, and put tools and materials away."
    ],
    "supplies": [
      "paper",
      "craft",
      "plants"
    ]
  },
  {
    "id": 313,
    "title": "Make a decorative paper lantern",
    "mood": "creative",
    "cost": 10,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "🧶",
    "description": "Fold and cut paper into a lantern shape and illuminate it only with a cool battery-powered light.",
    "steps": [
      "Gather the listed materials and choose a beginner guide if the technique is new; prepare a clear protected workspace.",
      "Fold and cut paper into a lantern shape and illuminate it only with a cool battery-powered light.",
      "Review your finished result or progress, allow any extra drying or curing time, and put tools and materials away."
    ],
    "supplies": [
      "paper",
      "craft"
    ]
  },
  {
    "id": 314,
    "title": "Make a tissue-paper suncatcher",
    "mood": "creative",
    "cost": 10,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "🧶",
    "description": "Layer translucent paper shapes inside a frame and hang the finished design in a window.",
    "steps": [
      "Gather the listed materials and choose a beginner guide if the technique is new; prepare a clear protected workspace.",
      "Layer translucent paper shapes inside a frame and hang the finished design in a window.",
      "Review your finished result or progress, allow any extra drying or curing time, and put tools and materials away."
    ],
    "supplies": [
      "paper",
      "craft"
    ]
  },
  {
    "id": 315,
    "title": "Create a paper-mache mask",
    "mood": "creative",
    "cost": 10,
    "time": 120,
    "min": 1,
    "max": 6,
    "icon": "🧶",
    "description": "Build a mask on a safe removable form using paper strips and paste, leaving additional time for drying.",
    "steps": [
      "Gather the listed materials and choose a beginner guide if the technique is new; prepare a clear protected workspace.",
      "Build a mask on a safe removable form using paper strips and paste, leaving additional time for drying.",
      "Review your finished result or progress, allow any extra drying or curing time, and put tools and materials away."
    ],
    "supplies": [
      "paper",
      "craft"
    ]
  },
  {
    "id": 316,
    "title": "Make a paper-mache bowl",
    "mood": "creative",
    "cost": 10,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🧶",
    "description": "Layer paper over a covered bowl form, dry it completely, and remove it as a decorative non-food bowl.",
    "steps": [
      "Gather the listed materials and choose a beginner guide if the technique is new; prepare a clear protected workspace.",
      "Layer paper over a covered bowl form, dry it completely, and remove it as a decorative non-food bowl.",
      "Review your finished result or progress, allow any extra drying or curing time, and put tools and materials away."
    ],
    "supplies": [
      "paper",
      "craft"
    ]
  },
  {
    "id": 317,
    "title": "Weave a cardboard-loom coaster",
    "mood": "creative",
    "cost": 10,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🧶",
    "description": "Cut slots in a cardboard loom, stretch warp threads, and weave yarn across them into a small mat.",
    "steps": [
      "Gather the listed materials and choose a beginner guide if the technique is new; prepare a clear protected workspace.",
      "Cut slots in a cardboard loom, stretch warp threads, and weave yarn across them into a small mat.",
      "Review your finished result or progress, allow any extra drying or curing time, and put tools and materials away."
    ],
    "supplies": [
      "craft"
    ]
  },
  {
    "id": 318,
    "title": "Try finger knitting",
    "mood": "creative",
    "cost": 10,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "🧶",
    "description": "Use chunky yarn and a beginner finger-knitting sequence to create a short knitted cord.",
    "steps": [
      "Gather the listed materials and choose a beginner guide if the technique is new; prepare a clear protected workspace.",
      "Use chunky yarn and a beginner finger-knitting sequence to create a short knitted cord.",
      "Review your finished result or progress, allow any extra drying or curing time, and put tools and materials away."
    ],
    "supplies": [
      "craft"
    ]
  },
  {
    "id": 319,
    "title": "Crochet a granny square",
    "mood": "creative",
    "cost": 10,
    "time": 120,
    "min": 1,
    "max": 6,
    "icon": "🧶",
    "description": "Practice a basic crochet square with a suitable hook and yarn, following a beginner pattern.",
    "steps": [
      "Gather the listed materials and choose a beginner guide if the technique is new; prepare a clear protected workspace.",
      "Practice a basic crochet square with a suitable hook and yarn, following a beginner pattern.",
      "Review your finished result or progress, allow any extra drying or curing time, and put tools and materials away."
    ],
    "supplies": [
      "craft"
    ]
  },
  {
    "id": 320,
    "title": "Knit a small swatch",
    "mood": "creative",
    "cost": 10,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🧶",
    "description": "Cast on a small number of stitches and practice rows of knit stitch to make a sample square.",
    "steps": [
      "Gather the listed materials and choose a beginner guide if the technique is new; prepare a clear protected workspace.",
      "Cast on a small number of stitches and practice rows of knit stitch to make a sample square.",
      "Review your finished result or progress, allow any extra drying or curing time, and put tools and materials away."
    ],
    "supplies": [
      "craft"
    ]
  },
  {
    "id": 321,
    "title": "Make a macrame keychain",
    "mood": "creative",
    "cost": 10,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🧶",
    "description": "Attach cord to a key ring and use a repeating square-knot pattern to form a short keychain.",
    "steps": [
      "Gather the listed materials and choose a beginner guide if the technique is new; prepare a clear protected workspace.",
      "Attach cord to a key ring and use a repeating square-knot pattern to form a short keychain.",
      "Review your finished result or progress, allow any extra drying or curing time, and put tools and materials away."
    ],
    "supplies": [
      "craft"
    ]
  },
  {
    "id": 322,
    "title": "Make a braided fabric rug sample",
    "mood": "creative",
    "cost": 0,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🧶",
    "description": "Cut old fabric into strips, braid them, and sew a small flat spiral as a coaster-sized sample.",
    "steps": [
      "Gather the listed materials and choose a beginner guide if the technique is new; prepare a clear protected workspace.",
      "Cut old fabric into strips, braid them, and sew a small flat spiral as a coaster-sized sample.",
      "Review your finished result or progress, allow any extra drying or curing time, and put tools and materials away."
    ],
    "supplies": [
      "craft"
    ]
  },
  {
    "id": 323,
    "title": "Sew a fabric drawstring pouch",
    "mood": "creative",
    "cost": 10,
    "time": 120,
    "min": 1,
    "max": 6,
    "icon": "🧶",
    "description": "Cut two fabric panels, stitch a simple pouch, and thread a cord through a folded channel.",
    "steps": [
      "Gather the listed materials and choose a beginner guide if the technique is new; prepare a clear protected workspace.",
      "Cut two fabric panels, stitch a simple pouch, and thread a cord through a folded channel.",
      "Review your finished result or progress, allow any extra drying or curing time, and put tools and materials away."
    ],
    "supplies": [
      "craft"
    ]
  },
  {
    "id": 324,
    "title": "Sew a reusable fabric napkin",
    "mood": "creative",
    "cost": 10,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🧶",
    "description": "Cut suitable fabric into a square and fold and stitch the edges into a washable napkin.",
    "steps": [
      "Gather the listed materials and choose a beginner guide if the technique is new; prepare a clear protected workspace.",
      "Cut suitable fabric into a square and fold and stitch the edges into a washable napkin.",
      "Review your finished result or progress, allow any extra drying or curing time, and put tools and materials away."
    ],
    "supplies": [
      "craft"
    ]
  },
  {
    "id": 325,
    "title": "Sew a felt ornament",
    "mood": "creative",
    "cost": 10,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🧶",
    "description": "Cut two matching felt shapes, stitch around them, and add a small loop for hanging.",
    "steps": [
      "Gather the listed materials and choose a beginner guide if the technique is new; prepare a clear protected workspace.",
      "Cut two matching felt shapes, stitch around them, and add a small loop for hanging.",
      "Review your finished result or progress, allow any extra drying or curing time, and put tools and materials away."
    ],
    "supplies": [
      "craft"
    ]
  },
  {
    "id": 326,
    "title": "Make a felt finger puppet",
    "mood": "creative",
    "cost": 10,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🧶",
    "description": "Stitch a small felt sleeve sized for a finger and add an original character face.",
    "steps": [
      "Gather the listed materials and choose a beginner guide if the technique is new; prepare a clear protected workspace.",
      "Stitch a small felt sleeve sized for a finger and add an original character face.",
      "Review your finished result or progress, allow any extra drying or curing time, and put tools and materials away."
    ],
    "supplies": [
      "craft"
    ]
  },
  {
    "id": 327,
    "title": "Needle-felt a small shape",
    "mood": "creative",
    "cost": 25,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🧶",
    "description": "Use a beginner needle-felting kit and a protective work pad to form a small decorative shape.",
    "steps": [
      "Gather the listed materials and choose a beginner guide if the technique is new; prepare a clear protected workspace.",
      "Use a beginner needle-felting kit and a protective work pad to form a small decorative shape.",
      "Review your finished result or progress, allow any extra drying or curing time, and put tools and materials away."
    ],
    "supplies": [
      "craft"
    ]
  },
  {
    "id": 328,
    "title": "Wet-felt a wool ball",
    "mood": "creative",
    "cost": 10,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "🧶",
    "description": "Use wool suitable for felting, warm water, and soap to roll fibers into a firm decorative ball.",
    "steps": [
      "Gather the listed materials and choose a beginner guide if the technique is new; prepare a clear protected workspace.",
      "Use wool suitable for felting, warm water, and soap to roll fibers into a firm decorative ball.",
      "Review your finished result or progress, allow any extra drying or curing time, and put tools and materials away."
    ],
    "supplies": [
      "craft"
    ]
  },
  {
    "id": 329,
    "title": "Make a punch-needle patch",
    "mood": "creative",
    "cost": 25,
    "time": 120,
    "min": 1,
    "max": 6,
    "icon": "🧶",
    "description": "Stretch the correct backing fabric in a hoop and use a punch needle to fill a simple outline.",
    "steps": [
      "Gather the listed materials and choose a beginner guide if the technique is new; prepare a clear protected workspace.",
      "Stretch the correct backing fabric in a hoop and use a punch needle to fill a simple outline.",
      "Review your finished result or progress, allow any extra drying or curing time, and put tools and materials away."
    ],
    "supplies": [
      "craft"
    ]
  },
  {
    "id": 330,
    "title": "Try sashiko stitching",
    "mood": "creative",
    "cost": 10,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🧶",
    "description": "Mark a geometric guide on fabric and practice even running stitches with suitable thread.",
    "steps": [
      "Gather the listed materials and choose a beginner guide if the technique is new; prepare a clear protected workspace.",
      "Mark a geometric guide on fabric and practice even running stitches with suitable thread.",
      "Review your finished result or progress, allow any extra drying or curing time, and put tools and materials away."
    ],
    "supplies": [
      "craft"
    ]
  },
  {
    "id": 331,
    "title": "Make a cross-stitch sampler",
    "mood": "creative",
    "cost": 10,
    "time": 120,
    "min": 1,
    "max": 6,
    "icon": "🧶",
    "description": "Follow a small counted pattern on gridded fabric and finish the back neatly.",
    "steps": [
      "Gather the listed materials and choose a beginner guide if the technique is new; prepare a clear protected workspace.",
      "Follow a small counted pattern on gridded fabric and finish the back neatly.",
      "Review your finished result or progress, allow any extra drying or curing time, and put tools and materials away."
    ],
    "supplies": [
      "craft"
    ]
  },
  {
    "id": 332,
    "title": "Make a ribbon rosette",
    "mood": "creative",
    "cost": 10,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "🧶",
    "description": "Fold and secure ribbon into a decorative award rosette with a handmade center badge.",
    "steps": [
      "Gather the listed materials and choose a beginner guide if the technique is new; prepare a clear protected workspace.",
      "Fold and secure ribbon into a decorative award rosette with a handmade center badge.",
      "Review your finished result or progress, allow any extra drying or curing time, and put tools and materials away."
    ],
    "supplies": [
      "craft"
    ]
  },
  {
    "id": 333,
    "title": "Make a beaded key ring",
    "mood": "creative",
    "cost": 10,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "🧶",
    "description": "Plan a bead pattern, thread it onto suitable cord, and secure it to a key ring.",
    "steps": [
      "Gather the listed materials and choose a beginner guide if the technique is new; prepare a clear protected workspace.",
      "Plan a bead pattern, thread it onto suitable cord, and secure it to a key ring.",
      "Review your finished result or progress, allow any extra drying or curing time, and put tools and materials away."
    ],
    "supplies": [
      "craft"
    ]
  },
  {
    "id": 334,
    "title": "Make wire-wrapped jewelry",
    "mood": "creative",
    "cost": 25,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🧶",
    "description": "Use jewelry wire and appropriate pliers to form a small wrapped pendant with smooth finished ends.",
    "steps": [
      "Gather the listed materials and choose a beginner guide if the technique is new; prepare a clear protected workspace.",
      "Use jewelry wire and appropriate pliers to form a small wrapped pendant with smooth finished ends.",
      "Review your finished result or progress, allow any extra drying or curing time, and put tools and materials away."
    ],
    "supplies": [
      "craft"
    ]
  },
  {
    "id": 335,
    "title": "Make a shrink-plastic charm",
    "mood": "creative",
    "cost": 10,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "🍳",
    "description": "Draw on craft shrink plastic, cut it, and heat it only as directed by the manufacturer.",
    "steps": [
      "Choose a reliable beginner recipe, read it fully, check ingredients and allergies, and prepare the equipment before starting.",
      "Draw on craft shrink plastic, cut it, and heat it only as directed by the manufacturer.",
      "Taste the result when ready, clean the work area, and follow the recipe for cooling, storage, and any additional setting time."
    ],
    "supplies": [
      "craft",
      "kitchen"
    ]
  },
  {
    "id": 336,
    "title": "Make polymer-clay earrings",
    "mood": "creative",
    "cost": 25,
    "time": 120,
    "min": 1,
    "max": 6,
    "icon": "🍳",
    "description": "Shape lightweight clay components and cure them according to the product instructions before adding findings.",
    "steps": [
      "Choose a reliable beginner recipe, read it fully, check ingredients and allergies, and prepare the equipment before starting.",
      "Shape lightweight clay components and cure them according to the product instructions before adding findings.",
      "Taste the result when ready, clean the work area, and follow the recipe for cooling, storage, and any additional setting time."
    ],
    "supplies": [
      "craft",
      "kitchen"
    ]
  },
  {
    "id": 337,
    "title": "Make a mosaic coaster",
    "mood": "creative",
    "cost": 25,
    "time": 120,
    "min": 1,
    "max": 6,
    "icon": "🧶",
    "description": "Arrange pre-cut mosaic pieces on a suitable base and follow the adhesive and grout instructions, allowing curing time.",
    "steps": [
      "Gather the listed materials and choose a beginner guide if the technique is new; prepare a clear protected workspace.",
      "Arrange pre-cut mosaic pieces on a suitable base and follow the adhesive and grout instructions, allowing curing time.",
      "Review your finished result or progress, allow any extra drying or curing time, and put tools and materials away."
    ],
    "supplies": [
      "craft"
    ]
  },
  {
    "id": 338,
    "title": "Make a painted pebble marker",
    "mood": "creative",
    "cost": 10,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "🧶",
    "description": "Paint a purchased or lawfully collected pebble as a labeled garden marker and seal it as appropriate.",
    "steps": [
      "Gather the listed materials and choose a beginner guide if the technique is new; prepare a clear protected workspace.",
      "Paint a purchased or lawfully collected pebble as a labeled garden marker and seal it as appropriate.",
      "Review your finished result or progress, allow any extra drying or curing time, and put tools and materials away."
    ],
    "supplies": [
      "craft"
    ]
  },
  {
    "id": 339,
    "title": "Decorate a picture frame",
    "mood": "creative",
    "cost": 10,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🧶",
    "description": "Give a plain frame a cohesive border using suitable paint or attached craft materials.",
    "steps": [
      "Gather the listed materials and choose a beginner guide if the technique is new; prepare a clear protected workspace.",
      "Give a plain frame a cohesive border using suitable paint or attached craft materials.",
      "Review your finished result or progress, allow any extra drying or curing time, and put tools and materials away."
    ],
    "supplies": [
      "craft"
    ]
  },
  {
    "id": 340,
    "title": "Make a shadow box",
    "mood": "creative",
    "cost": 25,
    "time": 120,
    "min": 1,
    "max": 6,
    "icon": "🧶",
    "description": "Arrange personal keepsakes in a deep display frame without damaging irreplaceable originals.",
    "steps": [
      "Gather the listed materials and choose a beginner guide if the technique is new; prepare a clear protected workspace.",
      "Arrange personal keepsakes in a deep display frame without damaging irreplaceable originals.",
      "Review your finished result or progress, allow any extra drying or curing time, and put tools and materials away."
    ],
    "supplies": [
      "craft"
    ]
  },
  {
    "id": 341,
    "title": "Make a mobile sculpture",
    "mood": "creative",
    "cost": 10,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🧶",
    "description": "Balance lightweight shapes on strings and rods so the finished hanging piece moves freely.",
    "steps": [
      "Gather the listed materials and choose a beginner guide if the technique is new; prepare a clear protected workspace.",
      "Balance lightweight shapes on strings and rods so the finished hanging piece moves freely.",
      "Review your finished result or progress, allow any extra drying or curing time, and put tools and materials away."
    ],
    "supplies": [
      "craft"
    ]
  },
  {
    "id": 342,
    "title": "Build a kinetic desk sculpture",
    "mood": "creative",
    "cost": 10,
    "time": 120,
    "min": 1,
    "max": 6,
    "icon": "🧶",
    "description": "Use balanced card, wire, and a stable base to make a small piece that moves when gently nudged.",
    "steps": [
      "Gather the listed materials and choose a beginner guide if the technique is new; prepare a clear protected workspace.",
      "Use balanced card, wire, and a stable base to make a small piece that moves when gently nudged.",
      "Review your finished result or progress, allow any extra drying or curing time, and put tools and materials away."
    ],
    "supplies": [
      "craft"
    ]
  },
  {
    "id": 343,
    "title": "Build a paper automaton",
    "mood": "creative",
    "cost": 10,
    "time": 120,
    "min": 1,
    "max": 6,
    "icon": "🧶",
    "description": "Use a simple cam or crank pattern to animate a cardboard figure by hand.",
    "steps": [
      "Gather the listed materials and choose a beginner guide if the technique is new; prepare a clear protected workspace.",
      "Use a simple cam or crank pattern to animate a cardboard figure by hand.",
      "Review your finished result or progress, allow any extra drying or curing time, and put tools and materials away."
    ],
    "supplies": [
      "paper",
      "craft"
    ]
  },
  {
    "id": 344,
    "title": "Make a pinwheel",
    "mood": "creative",
    "cost": 0,
    "time": 30,
    "min": 1,
    "max": 6,
    "icon": "🧶",
    "description": "Fold a square paper blade and secure it to a suitable handle so it can turn in a breeze.",
    "steps": [
      "Gather the listed materials and choose a beginner guide if the technique is new; prepare a clear protected workspace.",
      "Fold a square paper blade and secure it to a suitable handle so it can turn in a breeze.",
      "Review your finished result or progress, allow any extra drying or curing time, and put tools and materials away."
    ],
    "supplies": [
      "paper",
      "craft"
    ]
  },
  {
    "id": 345,
    "title": "Make a kaleidoscope kit",
    "mood": "creative",
    "cost": 25,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🧶",
    "description": "Assemble a beginner mirror-and-bead kit according to its instructions and compare the patterns it produces.",
    "steps": [
      "Gather the listed materials and choose a beginner guide if the technique is new; prepare a clear protected workspace.",
      "Assemble a beginner mirror-and-bead kit according to its instructions and compare the patterns it produces.",
      "Review your finished result or progress, allow any extra drying or curing time, and put tools and materials away."
    ],
    "supplies": [
      "craft"
    ]
  },
  {
    "id": 346,
    "title": "Create a string-art board",
    "mood": "creative",
    "cost": 25,
    "time": 120,
    "min": 1,
    "max": 6,
    "icon": "🧶",
    "description": "Use a beginner pre-drilled or pre-nailed string-art base to connect thread into a planned pattern.",
    "steps": [
      "Gather the listed materials and choose a beginner guide if the technique is new; prepare a clear protected workspace.",
      "Use a beginner pre-drilled or pre-nailed string-art base to connect thread into a planned pattern.",
      "Review your finished result or progress, allow any extra drying or curing time, and put tools and materials away."
    ],
    "supplies": [
      "craft"
    ]
  },
  {
    "id": 347,
    "title": "Make a cork noticeboard",
    "mood": "creative",
    "cost": 10,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🧶",
    "description": "Mount clean cork pieces on a stable backing and add a suitable frame or border.",
    "steps": [
      "Gather the listed materials and choose a beginner guide if the technique is new; prepare a clear protected workspace.",
      "Mount clean cork pieces on a stable backing and add a suitable frame or border.",
      "Review your finished result or progress, allow any extra drying or curing time, and put tools and materials away."
    ],
    "supplies": [
      "craft"
    ]
  },
  {
    "id": 348,
    "title": "Make a decorative book safe",
    "mood": "creative",
    "cost": 10,
    "time": 120,
    "min": 1,
    "max": 6,
    "icon": "🧶",
    "description": "Use a damaged or unwanted book and suitable tools to make a small concealed storage cavity.",
    "steps": [
      "Gather the listed materials and choose a beginner guide if the technique is new; prepare a clear protected workspace.",
      "Use a damaged or unwanted book and suitable tools to make a small concealed storage cavity.",
      "Review your finished result or progress, allow any extra drying or curing time, and put tools and materials away."
    ],
    "supplies": [
      "paper",
      "craft"
    ]
  },
  {
    "id": 349,
    "title": "Make a fabric-covered storage box",
    "mood": "creative",
    "cost": 10,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🧶",
    "description": "Wrap a sturdy clean box in fabric using appropriate adhesive and neatly finish its edges.",
    "steps": [
      "Gather the listed materials and choose a beginner guide if the technique is new; prepare a clear protected workspace.",
      "Wrap a sturdy clean box in fabric using appropriate adhesive and neatly finish its edges.",
      "Review your finished result or progress, allow any extra drying or curing time, and put tools and materials away."
    ],
    "supplies": [
      "craft",
      "household"
    ]
  },
  {
    "id": 350,
    "title": "Design a text adventure",
    "mood": "creative",
    "cost": 0,
    "time": 120,
    "min": 1,
    "max": 6,
    "icon": "💻",
    "description": "Write a branching story with at least three choices and two endings in a simple free authoring tool.",
    "steps": [
      "Choose tools you already own or a suitable free tool, and work on a copy or harmless sample rather than irreplaceable files.",
      "Write a branching story with at least three choices and two endings in a simple free authoring tool.",
      "Test or review the result, save your work with a clear name, and note one improvement for next time."
    ],
    "supplies": [
      "device"
    ]
  },
  {
    "id": 351,
    "title": "Build a browser reaction timer",
    "mood": "creative",
    "cost": 0,
    "time": 120,
    "min": 1,
    "max": 6,
    "icon": "💻",
    "description": "Code a page that waits a random interval, changes color, and measures a player's response time.",
    "steps": [
      "Choose tools you already own or a suitable free tool, and work on a copy or harmless sample rather than irreplaceable files.",
      "Code a page that waits a random interval, changes color, and measures a player's response time.",
      "Test or review the result, save your work with a clear name, and note one improvement for next time."
    ],
    "supplies": [
      "device"
    ]
  },
  {
    "id": 352,
    "title": "Build a digital dice roller",
    "mood": "creative",
    "cost": 0,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "💻",
    "description": "Create a small interface that rolls selected dice and displays each result and its total.",
    "steps": [
      "Choose tools you already own or a suitable free tool, and work on a copy or harmless sample rather than irreplaceable files.",
      "Create a small interface that rolls selected dice and displays each result and its total.",
      "Test or review the result, save your work with a clear name, and note one improvement for next time."
    ],
    "supplies": [
      "device"
    ]
  },
  {
    "id": 353,
    "title": "Build a personal countdown widget",
    "mood": "creative",
    "cost": 0,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "💻",
    "description": "Create a webpage that counts down to a date you choose and handles the finished state clearly.",
    "steps": [
      "Choose tools you already own or a suitable free tool, and work on a copy or harmless sample rather than irreplaceable files.",
      "Create a webpage that counts down to a date you choose and handles the finished state clearly.",
      "Test or review the result, save your work with a clear name, and note one improvement for next time."
    ],
    "supplies": [
      "device"
    ]
  },
  {
    "id": 354,
    "title": "Make a choose-your-own comic",
    "mood": "creative",
    "cost": 0,
    "time": 120,
    "min": 1,
    "max": 6,
    "icon": "💻",
    "description": "Connect short illustrated panels with reader choices that lead to different endings.",
    "steps": [
      "Choose tools you already own or a suitable free tool, and work on a copy or harmless sample rather than irreplaceable files.",
      "Connect short illustrated panels with reader choices that lead to different endings.",
      "Test or review the result, save your work with a clear name, and note one improvement for next time."
    ],
    "supplies": [
      "paper",
      "device"
    ]
  },
  {
    "id": 355,
    "title": "Design a printable escape puzzle",
    "mood": "creative",
    "cost": 0,
    "time": 120,
    "min": 1,
    "max": 6,
    "icon": "💻",
    "description": "Create one self-contained paper puzzle with a verifiable answer and a separate hint sheet.",
    "steps": [
      "Choose tools you already own or a suitable free tool, and work on a copy or harmless sample rather than irreplaceable files.",
      "Create one self-contained paper puzzle with a verifiable answer and a separate hint sheet.",
      "Test or review the result, save your work with a clear name, and note one improvement for next time."
    ],
    "supplies": [
      "paper",
      "device"
    ]
  },
  {
    "id": 356,
    "title": "Make a text-based chatbot character",
    "mood": "creative",
    "cost": 0,
    "time": 120,
    "min": 1,
    "max": 6,
    "icon": "💻",
    "description": "Write a simple rule-based conversation program with a recognizable character voice and fallback responses.",
    "steps": [
      "Choose tools you already own or a suitable free tool, and work on a copy or harmless sample rather than irreplaceable files.",
      "Write a simple rule-based conversation program with a recognizable character voice and fallback responses.",
      "Test or review the result, save your work with a clear name, and note one improvement for next time."
    ],
    "supplies": [
      "device"
    ]
  },
  {
    "id": 357,
    "title": "Build a digital flashcard deck",
    "mood": "creative",
    "cost": 0,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "💻",
    "description": "Create original prompt-and-answer cards and add a way to hide and reveal answers.",
    "steps": [
      "Choose tools you already own or a suitable free tool, and work on a copy or harmless sample rather than irreplaceable files.",
      "Create original prompt-and-answer cards and add a way to hide and reveal answers.",
      "Test or review the result, save your work with a clear name, and note one improvement for next time."
    ],
    "supplies": [
      "device"
    ]
  },
  {
    "id": 358,
    "title": "Create an interactive story map",
    "mood": "creative",
    "cost": 0,
    "time": 120,
    "min": 1,
    "max": 6,
    "icon": "💻",
    "description": "Draw a fictional map and connect its locations to short descriptions using a free presentation or web tool.",
    "steps": [
      "Choose tools you already own or a suitable free tool, and work on a copy or harmless sample rather than irreplaceable files.",
      "Draw a fictional map and connect its locations to short descriptions using a free presentation or web tool.",
      "Test or review the result, save your work with a clear name, and note one improvement for next time."
    ],
    "supplies": [
      "device"
    ]
  },
  {
    "id": 359,
    "title": "Make a looping motion graphic",
    "mood": "creative",
    "cost": 0,
    "time": 120,
    "min": 1,
    "max": 6,
    "icon": "💻",
    "description": "Animate a few original shapes into a short seamless loop with free animation software.",
    "steps": [
      "Choose tools you already own or a suitable free tool, and work on a copy or harmless sample rather than irreplaceable files.",
      "Animate a few original shapes into a short seamless loop with free animation software.",
      "Test or review the result, save your work with a clear name, and note one improvement for next time."
    ],
    "supplies": [
      "device"
    ]
  },
  {
    "id": 360,
    "title": "Design a typeface alphabet",
    "mood": "creative",
    "cost": 0,
    "time": 120,
    "min": 1,
    "max": 6,
    "icon": "💻",
    "description": "Draw a consistent set of uppercase letters and test how several words look in that style.",
    "steps": [
      "Choose tools you already own or a suitable free tool, and work on a copy or harmless sample rather than irreplaceable files.",
      "Draw a consistent set of uppercase letters and test how several words look in that style.",
      "Test or review the result, save your work with a clear name, and note one improvement for next time."
    ],
    "supplies": [
      "paper",
      "device"
    ]
  },
  {
    "id": 361,
    "title": "Make a tiny vector icon set",
    "mood": "creative",
    "cost": 0,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "💻",
    "description": "Draw six original icons on the same grid using consistent stroke widths and corner shapes.",
    "steps": [
      "Choose tools you already own or a suitable free tool, and work on a copy or harmless sample rather than irreplaceable files.",
      "Draw six original icons on the same grid using consistent stroke widths and corner shapes.",
      "Test or review the result, save your work with a clear name, and note one improvement for next time."
    ],
    "supplies": [
      "device"
    ]
  },
  {
    "id": 362,
    "title": "Create an isometric room illustration",
    "mood": "creative",
    "cost": 0,
    "time": 120,
    "min": 1,
    "max": 6,
    "icon": "💻",
    "description": "Use an isometric grid to draw a small furnished room with a consistent perspective.",
    "steps": [
      "Choose tools you already own or a suitable free tool, and work on a copy or harmless sample rather than irreplaceable files.",
      "Use an isometric grid to draw a small furnished room with a consistent perspective.",
      "Test or review the result, save your work with a clear name, and note one improvement for next time."
    ],
    "supplies": [
      "paper",
      "device"
    ]
  },
  {
    "id": 363,
    "title": "Make a low-poly 3D object",
    "mood": "creative",
    "cost": 0,
    "time": 120,
    "min": 1,
    "max": 6,
    "icon": "💻",
    "description": "Use free 3D software to model a simple object with few polygons and basic materials.",
    "steps": [
      "Choose tools you already own or a suitable free tool, and work on a copy or harmless sample rather than irreplaceable files.",
      "Use free 3D software to model a simple object with few polygons and basic materials.",
      "Test or review the result, save your work with a clear name, and note one improvement for next time."
    ],
    "supplies": [
      "device"
    ]
  },
  {
    "id": 364,
    "title": "Design a 3D-printable key tag",
    "mood": "creative",
    "cost": 0,
    "time": 120,
    "min": 1,
    "max": 6,
    "icon": "💻",
    "description": "Model a flat tag with readable lettering and a hole, then check it in a slicer without needing to print.",
    "steps": [
      "Choose tools you already own or a suitable free tool, and work on a copy or harmless sample rather than irreplaceable files.",
      "Model a flat tag with readable lettering and a hole, then check it in a slicer without needing to print.",
      "Test or review the result, save your work with a clear name, and note one improvement for next time."
    ],
    "supplies": [
      "device"
    ]
  },
  {
    "id": 365,
    "title": "Create a stop-motion sound mix",
    "mood": "creative",
    "cost": 0,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "💻",
    "description": "Add your own sound effects and music-free ambience to a short animation you already made.",
    "steps": [
      "Choose tools you already own or a suitable free tool, and work on a copy or harmless sample rather than irreplaceable files.",
      "Add your own sound effects and music-free ambience to a short animation you already made.",
      "Test or review the result, save your work with a clear name, and note one improvement for next time."
    ],
    "supplies": [
      "device"
    ]
  },
  {
    "id": 366,
    "title": "Record a Foley scene",
    "mood": "creative",
    "cost": 0,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "💻",
    "description": "Create and synchronize household sound effects to a short silent clip you own.",
    "steps": [
      "Choose tools you already own or a suitable free tool, and work on a copy or harmless sample rather than irreplaceable files.",
      "Create and synchronize household sound effects to a short silent clip you own.",
      "Test or review the result, save your work with a clear name, and note one improvement for next time."
    ],
    "supplies": [
      "device",
      "household"
    ]
  },
  {
    "id": 367,
    "title": "Make a found-sound beat",
    "mood": "creative",
    "cost": 0,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "💻",
    "description": "Record several safe everyday sounds and arrange them into a repeating rhythm.",
    "steps": [
      "Choose tools you already own or a suitable free tool, and work on a copy or harmless sample rather than irreplaceable files.",
      "Record several safe everyday sounds and arrange them into a repeating rhythm.",
      "Test or review the result, save your work with a clear name, and note one improvement for next time."
    ],
    "supplies": [
      "device",
      "household"
    ]
  },
  {
    "id": 368,
    "title": "Mix an audio postcard",
    "mood": "creative",
    "cost": 0,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "💻",
    "description": "Combine your own spoken description and ambient recordings into a one-minute audio portrait of a place.",
    "steps": [
      "Choose tools you already own or a suitable free tool, and work on a copy or harmless sample rather than irreplaceable files.",
      "Combine your own spoken description and ambient recordings into a one-minute audio portrait of a place.",
      "Test or review the result, save your work with a clear name, and note one improvement for next time."
    ],
    "supplies": [
      "device"
    ]
  },
  {
    "id": 369,
    "title": "Record a guided museum tour for your room",
    "mood": "creative",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "💻",
    "description": "Write and record short exhibit descriptions for five meaningful objects you own.",
    "steps": [
      "Choose tools you already own or a suitable free tool, and work on a copy or harmless sample rather than irreplaceable files.",
      "Write and record short exhibit descriptions for five meaningful objects you own.",
      "Test or review the result, save your work with a clear name, and note one improvement for next time."
    ],
    "supplies": [
      "device"
    ]
  },
  {
    "id": 370,
    "title": "Make an original sound logo",
    "mood": "creative",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "💻",
    "description": "Create a two-to-five-second sequence of notes or sounds that could identify a fictional brand.",
    "steps": [
      "Choose tools you already own or a suitable free tool, and work on a copy or harmless sample rather than irreplaceable files.",
      "Create a two-to-five-second sequence of notes or sounds that could identify a fictional brand.",
      "Test or review the result, save your work with a clear name, and note one improvement for next time."
    ],
    "supplies": [
      "device",
      "instrument"
    ]
  },
  {
    "id": 371,
    "title": "Create a lyric-free ambient track",
    "mood": "creative",
    "cost": 0,
    "time": 120,
    "min": 1,
    "max": 6,
    "icon": "💻",
    "description": "Layer self-made tones or permitted sounds into a calm instrumental texture with a beginning and ending.",
    "steps": [
      "Choose tools you already own or a suitable free tool, and work on a copy or harmless sample rather than irreplaceable files.",
      "Layer self-made tones or permitted sounds into a calm instrumental texture with a beginning and ending.",
      "Test or review the result, save your work with a clear name, and note one improvement for next time."
    ],
    "supplies": [
      "device"
    ]
  },
  {
    "id": 372,
    "title": "Make a music visualizer",
    "mood": "creative",
    "cost": 0,
    "time": 120,
    "min": 1,
    "max": 6,
    "icon": "💻",
    "description": "Build a simple animation that responds to an audio file you have permission to use.",
    "steps": [
      "Choose tools you already own or a suitable free tool, and work on a copy or harmless sample rather than irreplaceable files.",
      "Build a simple animation that responds to an audio file you have permission to use.",
      "Test or review the result, save your work with a clear name, and note one improvement for next time."
    ],
    "supplies": [
      "device"
    ]
  },
  {
    "id": 373,
    "title": "Record a two-person comedy sketch",
    "mood": "creative",
    "cost": 0,
    "time": 90,
    "min": 2,
    "max": 6,
    "icon": "💻",
    "description": "Write a short setup and comic turn, then rehearse and record a scene with everyone's consent.",
    "steps": [
      "Choose tools you already own or a suitable free tool, and work on a copy or harmless sample rather than irreplaceable files.",
      "Write a short setup and comic turn, then rehearse and record a scene with everyone's consent.",
      "Test or review the result, save your work with a clear name, and note one improvement for next time."
    ],
    "supplies": [
      "device"
    ]
  },
  {
    "id": 374,
    "title": "Film a practical forced-perspective trick",
    "mood": "creative",
    "cost": 0,
    "time": 60,
    "min": 2,
    "max": 6,
    "icon": "✏️",
    "description": "Arrange people or objects at different distances to create an optical illusion in a photo or clip.",
    "steps": [
      "Gather the listed materials and choose a beginner guide if the technique is new; prepare a clear protected workspace.",
      "Arrange people or objects at different distances to create an optical illusion in a photo or clip.",
      "Review your finished result or progress, allow any extra drying or curing time, and put tools and materials away."
    ],
    "supplies": [
      "camera"
    ]
  },
  {
    "id": 375,
    "title": "Make a product photography setup",
    "mood": "creative",
    "cost": 0,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "✏️",
    "description": "Use window light and a plain backdrop to photograph a small object from several useful angles.",
    "steps": [
      "Gather the listed materials and choose a beginner guide if the technique is new; prepare a clear protected workspace.",
      "Use window light and a plain backdrop to photograph a small object from several useful angles.",
      "Review your finished result or progress, allow any extra drying or curing time, and put tools and materials away."
    ],
    "supplies": [
      "camera",
      "household"
    ]
  },
  {
    "id": 376,
    "title": "Create a light-painting photo",
    "mood": "creative",
    "cost": 0,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "✏️",
    "description": "Use a camera with a suitable long-exposure mode and a small light source to draw in a dark safe room.",
    "steps": [
      "Gather the listed materials and choose a beginner guide if the technique is new; prepare a clear protected workspace.",
      "Use a camera with a suitable long-exposure mode and a small light source to draw in a dark safe room.",
      "Review your finished result or progress, allow any extra drying or curing time, and put tools and materials away."
    ],
    "supplies": [
      "camera",
      "household"
    ]
  },
  {
    "id": 377,
    "title": "Photograph water droplets",
    "mood": "creative",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "✏️",
    "description": "Use a shallow tray and a protected camera position to capture falling droplets without wetting electronics.",
    "steps": [
      "Gather the listed materials and choose a beginner guide if the technique is new; prepare a clear protected workspace.",
      "Use a shallow tray and a protected camera position to capture falling droplets without wetting electronics.",
      "Review your finished result or progress, allow any extra drying or curing time, and put tools and materials away."
    ],
    "supplies": [
      "camera",
      "household"
    ]
  },
  {
    "id": 378,
    "title": "Make a time-lapse of a household task",
    "mood": "creative",
    "cost": 0,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "✏️",
    "description": "Secure your phone and record a short time-lapse of an ordinary process such as arranging a desk.",
    "steps": [
      "Gather the listed materials and choose a beginner guide if the technique is new; prepare a clear protected workspace.",
      "Secure your phone and record a short time-lapse of an ordinary process such as arranging a desk.",
      "Review your finished result or progress, allow any extra drying or curing time, and put tools and materials away."
    ],
    "supplies": [
      "camera"
    ]
  },
  {
    "id": 379,
    "title": "Create a flat-lay self-portrait",
    "mood": "creative",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "✏️",
    "description": "Arrange objects that represent your interests and photograph them from directly above.",
    "steps": [
      "Gather the listed materials and choose a beginner guide if the technique is new; prepare a clear protected workspace.",
      "Arrange objects that represent your interests and photograph them from directly above.",
      "Review your finished result or progress, allow any extra drying or curing time, and put tools and materials away."
    ],
    "supplies": [
      "camera",
      "household"
    ]
  },
  {
    "id": 380,
    "title": "Make a photo contact sheet",
    "mood": "creative",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "💻",
    "description": "Choose photos from one outing and arrange small versions with captions on a single page.",
    "steps": [
      "Choose tools you already own or a suitable free tool, and work on a copy or harmless sample rather than irreplaceable files.",
      "Choose photos from one outing and arrange small versions with captions on a single page.",
      "Test or review the result, save your work with a clear name, and note one improvement for next time."
    ],
    "supplies": [
      "device",
      "camera"
    ]
  },
  {
    "id": 381,
    "title": "Restore a faded photo digitally",
    "mood": "creative",
    "cost": 0,
    "time": 120,
    "min": 1,
    "max": 6,
    "icon": "💻",
    "description": "Work on a duplicate scan and use basic levels and retouching tools to improve a faded personal image.",
    "steps": [
      "Choose tools you already own or a suitable free tool, and work on a copy or harmless sample rather than irreplaceable files.",
      "Work on a duplicate scan and use basic levels and retouching tools to improve a faded personal image.",
      "Test or review the result, save your work with a clear name, and note one improvement for next time."
    ],
    "supplies": [
      "device"
    ]
  },
  {
    "id": 382,
    "title": "Create a double-exposure image",
    "mood": "creative",
    "cost": 0,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "💻",
    "description": "Blend two photos you own using layers and masks in a free editor.",
    "steps": [
      "Choose tools you already own or a suitable free tool, and work on a copy or harmless sample rather than irreplaceable files.",
      "Blend two photos you own using layers and masks in a free editor.",
      "Test or review the result, save your work with a clear name, and note one improvement for next time."
    ],
    "supplies": [
      "device",
      "camera"
    ]
  },
  {
    "id": 383,
    "title": "Make a panoramic photo collage",
    "mood": "creative",
    "cost": 0,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "💻",
    "description": "Photograph overlapping views from one position and align them into a wider composite.",
    "steps": [
      "Choose tools you already own or a suitable free tool, and work on a copy or harmless sample rather than irreplaceable files.",
      "Photograph overlapping views from one position and align them into a wider composite.",
      "Test or review the result, save your work with a clear name, and note one improvement for next time."
    ],
    "supplies": [
      "camera",
      "device"
    ]
  },
  {
    "id": 384,
    "title": "Design a digital sticker sheet",
    "mood": "creative",
    "cost": 0,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "💻",
    "description": "Draw original small graphics and arrange them as a coordinated downloadable sticker page.",
    "steps": [
      "Choose tools you already own or a suitable free tool, and work on a copy or harmless sample rather than irreplaceable files.",
      "Draw original small graphics and arrange them as a coordinated downloadable sticker page.",
      "Test or review the result, save your work with a clear name, and note one improvement for next time."
    ],
    "supplies": [
      "device"
    ]
  },
  {
    "id": 385,
    "title": "Create a printable habit tracker",
    "mood": "creative",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "💻",
    "description": "Design a clear monthly grid with a legend and space for a small set of realistic habits.",
    "steps": [
      "Choose tools you already own or a suitable free tool, and work on a copy or harmless sample rather than irreplaceable files.",
      "Design a clear monthly grid with a legend and space for a small set of realistic habits.",
      "Test or review the result, save your work with a clear name, and note one improvement for next time."
    ],
    "supplies": [
      "paper",
      "device"
    ]
  },
  {
    "id": 386,
    "title": "Design an event invitation",
    "mood": "creative",
    "cost": 0,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "💻",
    "description": "Build a readable invitation with a title, date, location placeholder, and a clear visual hierarchy.",
    "steps": [
      "Choose tools you already own or a suitable free tool, and work on a copy or harmless sample rather than irreplaceable files.",
      "Build a readable invitation with a title, date, location placeholder, and a clear visual hierarchy.",
      "Test or review the result, save your work with a clear name, and note one improvement for next time."
    ],
    "supplies": [
      "paper",
      "device"
    ]
  },
  {
    "id": 387,
    "title": "Create a personal recipe layout",
    "mood": "creative",
    "cost": 0,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "💻",
    "description": "Format one recipe you are allowed to share with ingredients, numbered steps, and a photo or drawing.",
    "steps": [
      "Choose tools you already own or a suitable free tool, and work on a copy or harmless sample rather than irreplaceable files.",
      "Format one recipe you are allowed to share with ingredients, numbered steps, and a photo or drawing.",
      "Test or review the result, save your work with a clear name, and note one improvement for next time."
    ],
    "supplies": [
      "paper",
      "device"
    ]
  },
  {
    "id": 388,
    "title": "Make a fictional newspaper front page",
    "mood": "creative",
    "cost": 0,
    "time": 120,
    "min": 1,
    "max": 6,
    "icon": "💻",
    "description": "Write clearly fictional headlines and articles and arrange them into a believable front-page layout.",
    "steps": [
      "Choose tools you already own or a suitable free tool, and work on a copy or harmless sample rather than irreplaceable files.",
      "Write clearly fictional headlines and articles and arrange them into a believable front-page layout.",
      "Test or review the result, save your work with a clear name, and note one improvement for next time."
    ],
    "supplies": [
      "paper",
      "device"
    ]
  },
  {
    "id": 389,
    "title": "Create a family newsletter draft",
    "mood": "creative",
    "cost": 0,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "💻",
    "description": "Collect approved updates and design a private newsletter draft without sending it automatically.",
    "steps": [
      "Choose tools you already own or a suitable free tool, and work on a copy or harmless sample rather than irreplaceable files.",
      "Collect approved updates and design a private newsletter draft without sending it automatically.",
      "Test or review the result, save your work with a clear name, and note one improvement for next time."
    ],
    "supplies": [
      "device"
    ]
  },
  {
    "id": 390,
    "title": "Design a mock app interface",
    "mood": "creative",
    "cost": 0,
    "time": 120,
    "min": 1,
    "max": 6,
    "icon": "💻",
    "description": "Sketch three connected screens for a useful imaginary app and test the flow with a friend.",
    "steps": [
      "Choose tools you already own or a suitable free tool, and work on a copy or harmless sample rather than irreplaceable files.",
      "Sketch three connected screens for a useful imaginary app and test the flow with a friend.",
      "Test or review the result, save your work with a clear name, and note one improvement for next time."
    ],
    "supplies": [
      "paper",
      "device"
    ]
  },
  {
    "id": 391,
    "title": "Make a personal data poster",
    "mood": "creative",
    "cost": 0,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "💻",
    "description": "Track a harmless habit for a day and visualize the results with labeled units and an honest scale.",
    "steps": [
      "Choose tools you already own or a suitable free tool, and work on a copy or harmless sample rather than irreplaceable files.",
      "Track a harmless habit for a day and visualize the results with labeled units and an honest scale.",
      "Test or review the result, save your work with a clear name, and note one improvement for next time."
    ],
    "supplies": [
      "paper",
      "device"
    ]
  },
  {
    "id": 392,
    "title": "Build a color-palette generator",
    "mood": "creative",
    "cost": 0,
    "time": 120,
    "min": 1,
    "max": 6,
    "icon": "💻",
    "description": "Code a button that generates colors and shows their hex values alongside readable text samples.",
    "steps": [
      "Choose tools you already own or a suitable free tool, and work on a copy or harmless sample rather than irreplaceable files.",
      "Code a button that generates colors and shows their hex values alongside readable text samples.",
      "Test or review the result, save your work with a clear name, and note one improvement for next time."
    ],
    "supplies": [
      "device"
    ]
  },
  {
    "id": 393,
    "title": "Build a keyboard-controlled sprite",
    "mood": "creative",
    "cost": 0,
    "time": 120,
    "min": 1,
    "max": 6,
    "icon": "💻",
    "description": "Draw a small character on a canvas and move it with arrow keys while keeping it inside the boundary.",
    "steps": [
      "Choose tools you already own or a suitable free tool, and work on a copy or harmless sample rather than irreplaceable files.",
      "Draw a small character on a canvas and move it with arrow keys while keeping it inside the boundary.",
      "Test or review the result, save your work with a clear name, and note one improvement for next time."
    ],
    "supplies": [
      "device"
    ]
  },
  {
    "id": 394,
    "title": "Build a mini drawing app",
    "mood": "creative",
    "cost": 0,
    "time": 120,
    "min": 1,
    "max": 6,
    "icon": "💻",
    "description": "Create a canvas with brush color, size, and clear controls and test it with mouse or touch input.",
    "steps": [
      "Choose tools you already own or a suitable free tool, and work on a copy or harmless sample rather than irreplaceable files.",
      "Create a canvas with brush color, size, and clear controls and test it with mouse or touch input.",
      "Test or review the result, save your work with a clear name, and note one improvement for next time."
    ],
    "supplies": [
      "device"
    ]
  },
  {
    "id": 395,
    "title": "Make a digital stop-motion storyboard",
    "mood": "creative",
    "cost": 0,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "💻",
    "description": "Plan camera positions, timing, and props for a short animation before shooting any frames.",
    "steps": [
      "Choose tools you already own or a suitable free tool, and work on a copy or harmless sample rather than irreplaceable files.",
      "Plan camera positions, timing, and props for a short animation before shooting any frames.",
      "Test or review the result, save your work with a clear name, and note one improvement for next time."
    ],
    "supplies": [
      "paper",
      "device"
    ]
  },
  {
    "id": 396,
    "title": "Create a board-game rulebook",
    "mood": "creative",
    "cost": 0,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "💻",
    "description": "Explain an original game's setup, turns, scoring, and ending with an illustrated example.",
    "steps": [
      "Choose tools you already own or a suitable free tool, and work on a copy or harmless sample rather than irreplaceable files.",
      "Explain an original game's setup, turns, scoring, and ending with an illustrated example.",
      "Test or review the result, save your work with a clear name, and note one improvement for next time."
    ],
    "supplies": [
      "paper",
      "device"
    ]
  },
  {
    "id": 397,
    "title": "Write a short interactive mystery",
    "mood": "creative",
    "cost": 0,
    "time": 120,
    "min": 1,
    "max": 6,
    "icon": "💻",
    "description": "Create a suspect list, a fair set of clues, and a solution readers can uncover through choices.",
    "steps": [
      "Choose tools you already own or a suitable free tool, and work on a copy or harmless sample rather than irreplaceable files.",
      "Create a suspect list, a fair set of clues, and a solution readers can uncover through choices.",
      "Test or review the result, save your work with a clear name, and note one improvement for next time."
    ],
    "supplies": [
      "device"
    ]
  },
  {
    "id": 398,
    "title": "Build a tiny virtual gallery",
    "mood": "creative",
    "cost": 0,
    "time": 120,
    "min": 1,
    "max": 6,
    "icon": "💻",
    "description": "Arrange your own artwork in a simple webpage with captions and accessible image descriptions.",
    "steps": [
      "Choose tools you already own or a suitable free tool, and work on a copy or harmless sample rather than irreplaceable files.",
      "Arrange your own artwork in a simple webpage with captions and accessible image descriptions.",
      "Test or review the result, save your work with a clear name, and note one improvement for next time."
    ],
    "supplies": [
      "device"
    ]
  },
  {
    "id": 399,
    "title": "Make an original card-back design",
    "mood": "creative",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "💻",
    "description": "Create a symmetrical repeating design that remains consistent when rotated through half a turn.",
    "steps": [
      "Choose tools you already own or a suitable free tool, and work on a copy or harmless sample rather than irreplaceable files.",
      "Create a symmetrical repeating design that remains consistent when rotated through half a turn.",
      "Test or review the result, save your work with a clear name, and note one improvement for next time."
    ],
    "supplies": [
      "paper",
      "device"
    ]
  },
  {
    "id": 400,
    "title": "Make fresh salsa",
    "mood": "creative",
    "cost": 10,
    "time": 30,
    "min": 1,
    "max": 6,
    "icon": "🍳",
    "description": "Chop suitable vegetables and herbs, combine them with acidity and seasoning, and refrigerate the finished salsa.",
    "steps": [
      "Choose a reliable beginner recipe, read it fully, check ingredients and allergies, and prepare the equipment before starting.",
      "Chop suitable vegetables and herbs, combine them with acidity and seasoning, and refrigerate the finished salsa.",
      "Taste the result when ready, clean the work area, and follow the recipe for cooling, storage, and any additional setting time."
    ],
    "supplies": [
      "kitchen"
    ]
  },
  {
    "id": 401,
    "title": "Make a vegetable stock",
    "mood": "creative",
    "cost": 10,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🍳",
    "description": "Follow a recipe to simmer clean suitable vegetable pieces and strain the liquid for later cooking.",
    "steps": [
      "Choose a reliable beginner recipe, read it fully, check ingredients and allergies, and prepare the equipment before starting.",
      "Follow a recipe to simmer clean suitable vegetable pieces and strain the liquid for later cooking.",
      "Taste the result when ready, clean the work area, and follow the recipe for cooling, storage, and any additional setting time."
    ],
    "supplies": [
      "kitchen"
    ]
  },
  {
    "id": 402,
    "title": "Make a vinaigrette",
    "mood": "creative",
    "cost": 10,
    "time": 30,
    "min": 1,
    "max": 6,
    "icon": "🍳",
    "description": "Whisk oil, vinegar, seasoning, and an optional emulsifier into a dressing and taste it on salad greens.",
    "steps": [
      "Choose a reliable beginner recipe, read it fully, check ingredients and allergies, and prepare the equipment before starting.",
      "Whisk oil, vinegar, seasoning, and an optional emulsifier into a dressing and taste it on salad greens.",
      "Taste the result when ready, clean the work area, and follow the recipe for cooling, storage, and any additional setting time."
    ],
    "supplies": [
      "kitchen"
    ]
  },
  {
    "id": 403,
    "title": "Make mayonnaise",
    "mood": "creative",
    "cost": 10,
    "time": 30,
    "min": 1,
    "max": 6,
    "icon": "🍳",
    "description": "Follow a reliable recipe using pasteurized egg or an egg-free alternative and add oil gradually to form an emulsion.",
    "steps": [
      "Choose a reliable beginner recipe, read it fully, check ingredients and allergies, and prepare the equipment before starting.",
      "Follow a reliable recipe using pasteurized egg or an egg-free alternative and add oil gradually to form an emulsion.",
      "Taste the result when ready, clean the work area, and follow the recipe for cooling, storage, and any additional setting time."
    ],
    "supplies": [
      "kitchen"
    ]
  },
  {
    "id": 404,
    "title": "Make a bean dip",
    "mood": "creative",
    "cost": 10,
    "time": 30,
    "min": 1,
    "max": 6,
    "icon": "🍳",
    "description": "Blend cooked beans with suitable seasonings and a little liquid to make a smooth savory dip.",
    "steps": [
      "Choose a reliable beginner recipe, read it fully, check ingredients and allergies, and prepare the equipment before starting.",
      "Blend cooked beans with suitable seasonings and a little liquid to make a smooth savory dip.",
      "Taste the result when ready, clean the work area, and follow the recipe for cooling, storage, and any additional setting time."
    ],
    "supplies": [
      "kitchen"
    ]
  },
  {
    "id": 405,
    "title": "Make a yogurt parfait",
    "mood": "creative",
    "cost": 10,
    "time": 30,
    "min": 1,
    "max": 6,
    "icon": "🍳",
    "description": "Layer yogurt or an alternative with fruit and a crunchy topping, checking ingredients for allergies.",
    "steps": [
      "Choose a reliable beginner recipe, read it fully, check ingredients and allergies, and prepare the equipment before starting.",
      "Layer yogurt or an alternative with fruit and a crunchy topping, checking ingredients for allergies.",
      "Taste the result when ready, clean the work area, and follow the recipe for cooling, storage, and any additional setting time."
    ],
    "supplies": [
      "kitchen"
    ]
  },
  {
    "id": 406,
    "title": "Make overnight oats",
    "mood": "creative",
    "cost": 10,
    "time": 30,
    "min": 1,
    "max": 6,
    "icon": "🍳",
    "description": "Combine oats with a suitable liquid and flavorings, then refrigerate for the recipe's required soaking time.",
    "steps": [
      "Choose a reliable beginner recipe, read it fully, check ingredients and allergies, and prepare the equipment before starting.",
      "Combine oats with a suitable liquid and flavorings, then refrigerate for the recipe's required soaking time.",
      "Taste the result when ready, clean the work area, and follow the recipe for cooling, storage, and any additional setting time."
    ],
    "supplies": [
      "kitchen"
    ]
  },
  {
    "id": 407,
    "title": "Make stovetop granola",
    "mood": "creative",
    "cost": 10,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "🍳",
    "description": "Toast oats and suitable additions in a pan using a reliable recipe and cool them before storing.",
    "steps": [
      "Choose a reliable beginner recipe, read it fully, check ingredients and allergies, and prepare the equipment before starting.",
      "Toast oats and suitable additions in a pan using a reliable recipe and cool them before storing.",
      "Taste the result when ready, clean the work area, and follow the recipe for cooling, storage, and any additional setting time."
    ],
    "supplies": [
      "kitchen"
    ]
  },
  {
    "id": 408,
    "title": "Make a savory crepe",
    "mood": "creative",
    "cost": 10,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "🍳",
    "description": "Prepare a thin batter, cook delicate crepes, and fill them with a simple cooked savory filling.",
    "steps": [
      "Choose a reliable beginner recipe, read it fully, check ingredients and allergies, and prepare the equipment before starting.",
      "Prepare a thin batter, cook delicate crepes, and fill them with a simple cooked savory filling.",
      "Taste the result when ready, clean the work area, and follow the recipe for cooling, storage, and any additional setting time."
    ],
    "supplies": [
      "kitchen"
    ]
  },
  {
    "id": 409,
    "title": "Make fluffy pancakes",
    "mood": "creative",
    "cost": 10,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "🍳",
    "description": "Mix a basic pancake batter, cook even portions, and compare how resting the batter affects texture.",
    "steps": [
      "Choose a reliable beginner recipe, read it fully, check ingredients and allergies, and prepare the equipment before starting.",
      "Mix a basic pancake batter, cook even portions, and compare how resting the batter affects texture.",
      "Taste the result when ready, clean the work area, and follow the recipe for cooling, storage, and any additional setting time."
    ],
    "supplies": [
      "kitchen"
    ]
  },
  {
    "id": 410,
    "title": "Make French toast",
    "mood": "creative",
    "cost": 10,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "🍳",
    "description": "Coat bread in a suitable egg-and-milk mixture and cook it thoroughly on a griddle or pan.",
    "steps": [
      "Choose a reliable beginner recipe, read it fully, check ingredients and allergies, and prepare the equipment before starting.",
      "Coat bread in a suitable egg-and-milk mixture and cook it thoroughly on a griddle or pan.",
      "Taste the result when ready, clean the work area, and follow the recipe for cooling, storage, and any additional setting time."
    ],
    "supplies": [
      "kitchen"
    ]
  },
  {
    "id": 411,
    "title": "Make a breakfast burrito",
    "mood": "creative",
    "cost": 10,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "🍳",
    "description": "Prepare a cooked filling, warm tortillas, and practice folding a compact burrito without overfilling it.",
    "steps": [
      "Choose a reliable beginner recipe, read it fully, check ingredients and allergies, and prepare the equipment before starting.",
      "Prepare a cooked filling, warm tortillas, and practice folding a compact burrito without overfilling it.",
      "Taste the result when ready, clean the work area, and follow the recipe for cooling, storage, and any additional setting time."
    ],
    "supplies": [
      "kitchen"
    ]
  },
  {
    "id": 412,
    "title": "Prepare a grain bowl",
    "mood": "creative",
    "cost": 10,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "🍳",
    "description": "Combine a cooked grain, vegetables, a protein, and a sauce into a balanced bowl.",
    "steps": [
      "Choose a reliable beginner recipe, read it fully, check ingredients and allergies, and prepare the equipment before starting.",
      "Combine a cooked grain, vegetables, a protein, and a sauce into a balanced bowl.",
      "Taste the result when ready, clean the work area, and follow the recipe for cooling, storage, and any additional setting time."
    ],
    "supplies": [
      "kitchen"
    ]
  },
  {
    "id": 413,
    "title": "Make stuffed peppers",
    "mood": "creative",
    "cost": 10,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🍳",
    "description": "Fill peppers with a prepared cooked mixture and bake them according to a trusted recipe.",
    "steps": [
      "Choose a reliable beginner recipe, read it fully, check ingredients and allergies, and prepare the equipment before starting.",
      "Fill peppers with a prepared cooked mixture and bake them according to a trusted recipe.",
      "Taste the result when ready, clean the work area, and follow the recipe for cooling, storage, and any additional setting time."
    ],
    "supplies": [
      "kitchen"
    ]
  },
  {
    "id": 414,
    "title": "Make a vegetable frittata",
    "mood": "creative",
    "cost": 10,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "🍳",
    "description": "Cook vegetables, add an egg mixture, and finish the dish until fully set using a suitable recipe.",
    "steps": [
      "Choose a reliable beginner recipe, read it fully, check ingredients and allergies, and prepare the equipment before starting.",
      "Cook vegetables, add an egg mixture, and finish the dish until fully set using a suitable recipe.",
      "Taste the result when ready, clean the work area, and follow the recipe for cooling, storage, and any additional setting time."
    ],
    "supplies": [
      "kitchen"
    ]
  },
  {
    "id": 415,
    "title": "Make a sheet-pan dinner",
    "mood": "creative",
    "cost": 10,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🍳",
    "description": "Choose ingredients with compatible cooking times and roast them together according to a recipe.",
    "steps": [
      "Choose a reliable beginner recipe, read it fully, check ingredients and allergies, and prepare the equipment before starting.",
      "Choose ingredients with compatible cooking times and roast them together according to a recipe.",
      "Taste the result when ready, clean the work area, and follow the recipe for cooling, storage, and any additional setting time."
    ],
    "supplies": [
      "kitchen"
    ]
  },
  {
    "id": 416,
    "title": "Learn to make a stir-fry",
    "mood": "creative",
    "cost": 10,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "🍳",
    "description": "Prepare ingredients before heating the pan and cook small batches in the order given by a beginner recipe.",
    "steps": [
      "Choose a reliable beginner recipe, read it fully, check ingredients and allergies, and prepare the equipment before starting.",
      "Prepare ingredients before heating the pan and cook small batches in the order given by a beginner recipe.",
      "Taste the result when ready, clean the work area, and follow the recipe for cooling, storage, and any additional setting time."
    ],
    "supplies": [
      "kitchen"
    ]
  },
  {
    "id": 417,
    "title": "Make fried rice",
    "mood": "creative",
    "cost": 10,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "🍳",
    "description": "Use appropriately chilled cooked rice and follow a recipe to heat it thoroughly with vegetables and seasonings.",
    "steps": [
      "Choose a reliable beginner recipe, read it fully, check ingredients and allergies, and prepare the equipment before starting.",
      "Use appropriately chilled cooked rice and follow a recipe to heat it thoroughly with vegetables and seasonings.",
      "Taste the result when ready, clean the work area, and follow the recipe for cooling, storage, and any additional setting time."
    ],
    "supplies": [
      "kitchen"
    ]
  },
  {
    "id": 418,
    "title": "Make a lentil dal",
    "mood": "creative",
    "cost": 10,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🍳",
    "description": "Simmer lentils with a beginner recipe's spices and liquids until tender and finish the seasoning.",
    "steps": [
      "Choose a reliable beginner recipe, read it fully, check ingredients and allergies, and prepare the equipment before starting.",
      "Simmer lentils with a beginner recipe's spices and liquids until tender and finish the seasoning.",
      "Taste the result when ready, clean the work area, and follow the recipe for cooling, storage, and any additional setting time."
    ],
    "supplies": [
      "kitchen"
    ]
  },
  {
    "id": 419,
    "title": "Make a bean chili",
    "mood": "creative",
    "cost": 10,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🍳",
    "description": "Combine cooked beans, vegetables, and spices in a pot and simmer until the flavors come together.",
    "steps": [
      "Choose a reliable beginner recipe, read it fully, check ingredients and allergies, and prepare the equipment before starting.",
      "Combine cooked beans, vegetables, and spices in a pot and simmer until the flavors come together.",
      "Taste the result when ready, clean the work area, and follow the recipe for cooling, storage, and any additional setting time."
    ],
    "supplies": [
      "kitchen"
    ]
  },
  {
    "id": 420,
    "title": "Make a vegetable curry",
    "mood": "creative",
    "cost": 10,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🍳",
    "description": "Follow a beginner curry recipe, preparing the aromatic base before adding vegetables and liquid.",
    "steps": [
      "Choose a reliable beginner recipe, read it fully, check ingredients and allergies, and prepare the equipment before starting.",
      "Follow a beginner curry recipe, preparing the aromatic base before adding vegetables and liquid.",
      "Taste the result when ready, clean the work area, and follow the recipe for cooling, storage, and any additional setting time."
    ],
    "supplies": [
      "kitchen"
    ]
  },
  {
    "id": 421,
    "title": "Make a noodle stir-fry",
    "mood": "creative",
    "cost": 10,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "🍳",
    "description": "Cook noodles as directed and toss them with prepared vegetables and a simple sauce.",
    "steps": [
      "Choose a reliable beginner recipe, read it fully, check ingredients and allergies, and prepare the equipment before starting.",
      "Cook noodles as directed and toss them with prepared vegetables and a simple sauce.",
      "Taste the result when ready, clean the work area, and follow the recipe for cooling, storage, and any additional setting time."
    ],
    "supplies": [
      "kitchen"
    ]
  },
  {
    "id": 422,
    "title": "Make a baked potato bar",
    "mood": "creative",
    "cost": 10,
    "time": 90,
    "min": 2,
    "max": 6,
    "icon": "🍳",
    "description": "Bake potatoes and prepare a small selection of toppings so everyone can assemble their own meal.",
    "steps": [
      "Choose a reliable beginner recipe, read it fully, check ingredients and allergies, and prepare the equipment before starting.",
      "Bake potatoes and prepare a small selection of toppings so everyone can assemble their own meal.",
      "Taste the result when ready, clean the work area, and follow the recipe for cooling, storage, and any additional setting time."
    ],
    "supplies": [
      "kitchen"
    ]
  },
  {
    "id": 423,
    "title": "Make a rice-paper spring roll",
    "mood": "creative",
    "cost": 10,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "🍳",
    "description": "Soften rice-paper wrappers and roll them around ready-to-eat vegetables and other prepared fillings.",
    "steps": [
      "Choose a reliable beginner recipe, read it fully, check ingredients and allergies, and prepare the equipment before starting.",
      "Soften rice-paper wrappers and roll them around ready-to-eat vegetables and other prepared fillings.",
      "Taste the result when ready, clean the work area, and follow the recipe for cooling, storage, and any additional setting time."
    ],
    "supplies": [
      "kitchen"
    ]
  },
  {
    "id": 424,
    "title": "Make savory hand pies",
    "mood": "creative",
    "cost": 10,
    "time": 120,
    "min": 1,
    "max": 6,
    "icon": "🍳",
    "description": "Enclose a cooked filling in pastry, seal the edges, and bake according to the dough instructions.",
    "steps": [
      "Choose a reliable beginner recipe, read it fully, check ingredients and allergies, and prepare the equipment before starting.",
      "Enclose a cooked filling in pastry, seal the edges, and bake according to the dough instructions.",
      "Taste the result when ready, clean the work area, and follow the recipe for cooling, storage, and any additional setting time."
    ],
    "supplies": [
      "kitchen"
    ]
  },
  {
    "id": 425,
    "title": "Make a vegetable tart",
    "mood": "creative",
    "cost": 10,
    "time": 120,
    "min": 1,
    "max": 6,
    "icon": "🍳",
    "description": "Line a suitable pan with pastry and bake a simple vegetable filling using a tested recipe.",
    "steps": [
      "Choose a reliable beginner recipe, read it fully, check ingredients and allergies, and prepare the equipment before starting.",
      "Line a suitable pan with pastry and bake a simple vegetable filling using a tested recipe.",
      "Taste the result when ready, clean the work area, and follow the recipe for cooling, storage, and any additional setting time."
    ],
    "supplies": [
      "kitchen"
    ]
  },
  {
    "id": 426,
    "title": "Make a quiche",
    "mood": "creative",
    "cost": 10,
    "time": 120,
    "min": 1,
    "max": 6,
    "icon": "🍳",
    "description": "Prepare a crust and savory custard filling and bake until set according to a reliable recipe.",
    "steps": [
      "Choose a reliable beginner recipe, read it fully, check ingredients and allergies, and prepare the equipment before starting.",
      "Prepare a crust and savory custard filling and bake until set according to a reliable recipe.",
      "Taste the result when ready, clean the work area, and follow the recipe for cooling, storage, and any additional setting time."
    ],
    "supplies": [
      "kitchen"
    ]
  },
  {
    "id": 427,
    "title": "Make a savory crumble",
    "mood": "creative",
    "cost": 10,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🍳",
    "description": "Top a cooked vegetable filling with a savory crumb mixture and bake until crisp.",
    "steps": [
      "Choose a reliable beginner recipe, read it fully, check ingredients and allergies, and prepare the equipment before starting.",
      "Top a cooked vegetable filling with a savory crumb mixture and bake until crisp.",
      "Taste the result when ready, clean the work area, and follow the recipe for cooling, storage, and any additional setting time."
    ],
    "supplies": [
      "kitchen"
    ]
  },
  {
    "id": 428,
    "title": "Make gnocchi",
    "mood": "creative",
    "cost": 10,
    "time": 120,
    "min": 1,
    "max": 6,
    "icon": "🍳",
    "description": "Follow a beginner potato-gnocchi recipe to form, cut, and cook small dumplings.",
    "steps": [
      "Choose a reliable beginner recipe, read it fully, check ingredients and allergies, and prepare the equipment before starting.",
      "Follow a beginner potato-gnocchi recipe to form, cut, and cook small dumplings.",
      "Taste the result when ready, clean the work area, and follow the recipe for cooling, storage, and any additional setting time."
    ],
    "supplies": [
      "kitchen"
    ]
  },
  {
    "id": 429,
    "title": "Make fresh flatbread",
    "mood": "creative",
    "cost": 10,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🍳",
    "description": "Mix a simple dough, divide and roll it, and cook flatbreads on a suitable hot pan.",
    "steps": [
      "Choose a reliable beginner recipe, read it fully, check ingredients and allergies, and prepare the equipment before starting.",
      "Mix a simple dough, divide and roll it, and cook flatbreads on a suitable hot pan.",
      "Taste the result when ready, clean the work area, and follow the recipe for cooling, storage, and any additional setting time."
    ],
    "supplies": [
      "kitchen"
    ]
  },
  {
    "id": 430,
    "title": "Make soft pretzels",
    "mood": "creative",
    "cost": 10,
    "time": 120,
    "min": 1,
    "max": 6,
    "icon": "🍳",
    "description": "Shape a tested yeast dough into pretzels and use the recipe's baking-soda bath and baking method.",
    "steps": [
      "Choose a reliable beginner recipe, read it fully, check ingredients and allergies, and prepare the equipment before starting.",
      "Shape a tested yeast dough into pretzels and use the recipe's baking-soda bath and baking method.",
      "Taste the result when ready, clean the work area, and follow the recipe for cooling, storage, and any additional setting time."
    ],
    "supplies": [
      "kitchen"
    ]
  },
  {
    "id": 431,
    "title": "Make cornbread",
    "mood": "creative",
    "cost": 10,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "🍳",
    "description": "Mix a cornmeal batter and bake it in a suitable pan according to a reliable recipe.",
    "steps": [
      "Choose a reliable beginner recipe, read it fully, check ingredients and allergies, and prepare the equipment before starting.",
      "Mix a cornmeal batter and bake it in a suitable pan according to a reliable recipe.",
      "Taste the result when ready, clean the work area, and follow the recipe for cooling, storage, and any additional setting time."
    ],
    "supplies": [
      "kitchen"
    ]
  },
  {
    "id": 432,
    "title": "Make savory muffins",
    "mood": "creative",
    "cost": 10,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "🍳",
    "description": "Fold cooked vegetables or suitable cheese into a tested muffin batter and bake individual portions.",
    "steps": [
      "Choose a reliable beginner recipe, read it fully, check ingredients and allergies, and prepare the equipment before starting.",
      "Fold cooked vegetables or suitable cheese into a tested muffin batter and bake individual portions.",
      "Taste the result when ready, clean the work area, and follow the recipe for cooling, storage, and any additional setting time."
    ],
    "supplies": [
      "kitchen"
    ]
  },
  {
    "id": 433,
    "title": "Make scones",
    "mood": "creative",
    "cost": 10,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "🍳",
    "description": "Use a beginner recipe and a light mixing hand to shape and bake a batch of scones.",
    "steps": [
      "Choose a reliable beginner recipe, read it fully, check ingredients and allergies, and prepare the equipment before starting.",
      "Use a beginner recipe and a light mixing hand to shape and bake a batch of scones.",
      "Taste the result when ready, clean the work area, and follow the recipe for cooling, storage, and any additional setting time."
    ],
    "supplies": [
      "kitchen"
    ]
  },
  {
    "id": 434,
    "title": "Make cinnamon rolls",
    "mood": "creative",
    "cost": 10,
    "time": 120,
    "min": 1,
    "max": 6,
    "icon": "🍳",
    "description": "Prepare and shape a tested dough with cinnamon filling, allowing any extra proofing time before baking.",
    "steps": [
      "Choose a reliable beginner recipe, read it fully, check ingredients and allergies, and prepare the equipment before starting.",
      "Prepare and shape a tested dough with cinnamon filling, allowing any extra proofing time before baking.",
      "Taste the result when ready, clean the work area, and follow the recipe for cooling, storage, and any additional setting time."
    ],
    "supplies": [
      "kitchen"
    ]
  },
  {
    "id": 435,
    "title": "Make banana bread",
    "mood": "creative",
    "cost": 10,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🍳",
    "description": "Use ripe bananas in a tested quick-bread recipe and cool the loaf before cutting.",
    "steps": [
      "Choose a reliable beginner recipe, read it fully, check ingredients and allergies, and prepare the equipment before starting.",
      "Use ripe bananas in a tested quick-bread recipe and cool the loaf before cutting.",
      "Taste the result when ready, clean the work area, and follow the recipe for cooling, storage, and any additional setting time."
    ],
    "supplies": [
      "kitchen"
    ]
  },
  {
    "id": 436,
    "title": "Make a fruit crumble",
    "mood": "creative",
    "cost": 10,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🍳",
    "description": "Cover prepared fruit with a crumb topping and bake until the filling bubbles and the top is golden.",
    "steps": [
      "Choose a reliable beginner recipe, read it fully, check ingredients and allergies, and prepare the equipment before starting.",
      "Cover prepared fruit with a crumb topping and bake until the filling bubbles and the top is golden.",
      "Taste the result when ready, clean the work area, and follow the recipe for cooling, storage, and any additional setting time."
    ],
    "supplies": [
      "kitchen"
    ]
  },
  {
    "id": 437,
    "title": "Make a no-bake cheesecake cup",
    "mood": "creative",
    "cost": 10,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "🍳",
    "description": "Layer a crumb base and a tested no-bake filling into cups, allowing extra refrigeration time to set.",
    "steps": [
      "Choose a reliable beginner recipe, read it fully, check ingredients and allergies, and prepare the equipment before starting.",
      "Layer a crumb base and a tested no-bake filling into cups, allowing extra refrigeration time to set.",
      "Taste the result when ready, clean the work area, and follow the recipe for cooling, storage, and any additional setting time."
    ],
    "supplies": [
      "kitchen"
    ]
  },
  {
    "id": 438,
    "title": "Make chocolate truffles",
    "mood": "creative",
    "cost": 10,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🍳",
    "description": "Prepare ganache with a reliable recipe, chill it until workable, and roll small portions in cocoa.",
    "steps": [
      "Choose a reliable beginner recipe, read it fully, check ingredients and allergies, and prepare the equipment before starting.",
      "Prepare ganache with a reliable recipe, chill it until workable, and roll small portions in cocoa.",
      "Taste the result when ready, clean the work area, and follow the recipe for cooling, storage, and any additional setting time."
    ],
    "supplies": [
      "kitchen"
    ]
  },
  {
    "id": 439,
    "title": "Make fruit sorbet",
    "mood": "creative",
    "cost": 10,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🍳",
    "description": "Blend fruit with the ingredients in a tested sorbet recipe and allow additional freezing time.",
    "steps": [
      "Choose a reliable beginner recipe, read it fully, check ingredients and allergies, and prepare the equipment before starting.",
      "Blend fruit with the ingredients in a tested sorbet recipe and allow additional freezing time.",
      "Taste the result when ready, clean the work area, and follow the recipe for cooling, storage, and any additional setting time."
    ],
    "supplies": [
      "kitchen"
    ]
  },
  {
    "id": 440,
    "title": "Make frozen yogurt bark",
    "mood": "creative",
    "cost": 10,
    "time": 30,
    "min": 1,
    "max": 6,
    "icon": "🍳",
    "description": "Spread yogurt on a lined tray, add suitable toppings, and freeze fully before breaking into pieces.",
    "steps": [
      "Choose a reliable beginner recipe, read it fully, check ingredients and allergies, and prepare the equipment before starting.",
      "Spread yogurt on a lined tray, add suitable toppings, and freeze fully before breaking into pieces.",
      "Taste the result when ready, clean the work area, and follow the recipe for cooling, storage, and any additional setting time."
    ],
    "supplies": [
      "kitchen"
    ]
  },
  {
    "id": 441,
    "title": "Make a layered jelly dessert",
    "mood": "creative",
    "cost": 10,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "🍳",
    "description": "Prepare flavored gelatin or a suitable alternative in stages, allowing the required chilling time between layers.",
    "steps": [
      "Choose a reliable beginner recipe, read it fully, check ingredients and allergies, and prepare the equipment before starting.",
      "Prepare flavored gelatin or a suitable alternative in stages, allowing the required chilling time between layers.",
      "Taste the result when ready, clean the work area, and follow the recipe for cooling, storage, and any additional setting time."
    ],
    "supplies": [
      "kitchen"
    ]
  },
  {
    "id": 442,
    "title": "Make caramel popcorn",
    "mood": "creative",
    "cost": 10,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "🍳",
    "description": "Use a reliable caramel-popcorn recipe and handle hot sugar carefully while coating prepared popcorn.",
    "steps": [
      "Choose a reliable beginner recipe, read it fully, check ingredients and allergies, and prepare the equipment before starting.",
      "Use a reliable caramel-popcorn recipe and handle hot sugar carefully while coating prepared popcorn.",
      "Taste the result when ready, clean the work area, and follow the recipe for cooling, storage, and any additional setting time."
    ],
    "supplies": [
      "kitchen"
    ]
  },
  {
    "id": 443,
    "title": "Make a homemade cereal bar",
    "mood": "creative",
    "cost": 10,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "🍳",
    "description": "Combine a tested binding mixture with cereal and suitable additions and allow it to set before slicing.",
    "steps": [
      "Choose a reliable beginner recipe, read it fully, check ingredients and allergies, and prepare the equipment before starting.",
      "Combine a tested binding mixture with cereal and suitable additions and allow it to set before slicing.",
      "Taste the result when ready, clean the work area, and follow the recipe for cooling, storage, and any additional setting time."
    ],
    "supplies": [
      "kitchen"
    ]
  },
  {
    "id": 444,
    "title": "Make a fruit compote",
    "mood": "creative",
    "cost": 10,
    "time": 30,
    "min": 1,
    "max": 6,
    "icon": "🍳",
    "description": "Gently cook fruit with a small amount of liquid and seasoning and refrigerate after cooling.",
    "steps": [
      "Choose a reliable beginner recipe, read it fully, check ingredients and allergies, and prepare the equipment before starting.",
      "Gently cook fruit with a small amount of liquid and seasoning and refrigerate after cooling.",
      "Taste the result when ready, clean the work area, and follow the recipe for cooling, storage, and any additional setting time."
    ],
    "supplies": [
      "kitchen"
    ]
  },
  {
    "id": 445,
    "title": "Make a custard pudding",
    "mood": "creative",
    "cost": 10,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🍳",
    "description": "Follow a tested stovetop or baked custard recipe and allow the necessary cooling time.",
    "steps": [
      "Choose a reliable beginner recipe, read it fully, check ingredients and allergies, and prepare the equipment before starting.",
      "Follow a tested stovetop or baked custard recipe and allow the necessary cooling time.",
      "Taste the result when ready, clean the work area, and follow the recipe for cooling, storage, and any additional setting time."
    ],
    "supplies": [
      "kitchen"
    ]
  },
  {
    "id": 446,
    "title": "Make an egg-free chocolate mousse",
    "mood": "creative",
    "cost": 10,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "🍳",
    "description": "Use a tested egg-free mousse recipe and chill it for the recommended time before serving.",
    "steps": [
      "Choose a reliable beginner recipe, read it fully, check ingredients and allergies, and prepare the equipment before starting.",
      "Use a tested egg-free mousse recipe and chill it for the recommended time before serving.",
      "Taste the result when ready, clean the work area, and follow the recipe for cooling, storage, and any additional setting time."
    ],
    "supplies": [
      "kitchen"
    ]
  },
  {
    "id": 447,
    "title": "Make a citrus curd",
    "mood": "creative",
    "cost": 10,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "🍳",
    "description": "Follow a reliable citrus-curd recipe and cool and refrigerate it within the stated storage guidance.",
    "steps": [
      "Choose a reliable beginner recipe, read it fully, check ingredients and allergies, and prepare the equipment before starting.",
      "Follow a reliable citrus-curd recipe and cool and refrigerate it within the stated storage guidance.",
      "Taste the result when ready, clean the work area, and follow the recipe for cooling, storage, and any additional setting time."
    ],
    "supplies": [
      "kitchen"
    ]
  },
  {
    "id": 448,
    "title": "Make candied citrus peel",
    "mood": "creative",
    "cost": 10,
    "time": 120,
    "min": 1,
    "max": 6,
    "icon": "🍳",
    "description": "Prepare citrus peel using a tested blanching and syrup method and allow extra drying time.",
    "steps": [
      "Choose a reliable beginner recipe, read it fully, check ingredients and allergies, and prepare the equipment before starting.",
      "Prepare citrus peel using a tested blanching and syrup method and allow extra drying time.",
      "Taste the result when ready, clean the work area, and follow the recipe for cooling, storage, and any additional setting time."
    ],
    "supplies": [
      "kitchen"
    ]
  },
  {
    "id": 449,
    "title": "Make flavored butter",
    "mood": "creative",
    "cost": 10,
    "time": 30,
    "min": 1,
    "max": 6,
    "icon": "🍳",
    "description": "Mix softened butter or a suitable alternative with herbs or spices and refrigerate it in a labeled container.",
    "steps": [
      "Choose a reliable beginner recipe, read it fully, check ingredients and allergies, and prepare the equipment before starting.",
      "Mix softened butter or a suitable alternative with herbs or spices and refrigerate it in a labeled container.",
      "Taste the result when ready, clean the work area, and follow the recipe for cooling, storage, and any additional setting time."
    ],
    "supplies": [
      "kitchen"
    ]
  },
  {
    "id": 450,
    "title": "Play cribbage",
    "mood": "competitive",
    "cost": 0,
    "time": 90,
    "min": 2,
    "max": 4,
    "icon": "🎲",
    "description": "Use a cribbage board or written score track to count combinations and play toward the agreed target score.",
    "steps": [
      "Gather the listed equipment, review the rules together, and agree on scoring, turn order, and a comfortable time limit.",
      "Use a cribbage board or written score track to count combinations and play toward the agreed target score.",
      "Record the result if you want, rotate roles or sides, and share one tactic you would try in another round."
    ],
    "supplies": [
      "cards",
      "board"
    ]
  },
  {
    "id": 451,
    "title": "Play gin rummy",
    "mood": "competitive",
    "cost": 0,
    "time": 60,
    "min": 2,
    "max": 2,
    "icon": "🎲",
    "description": "Learn the draw-and-discard rules and build sets and runs while tracking deadwood points.",
    "steps": [
      "Gather the listed equipment, review the rules together, and agree on scoring, turn order, and a comfortable time limit.",
      "Learn the draw-and-discard rules and build sets and runs while tracking deadwood points.",
      "Record the result if you want, rotate roles or sides, and share one tactic you would try in another round."
    ],
    "supplies": [
      "cards"
    ]
  },
  {
    "id": 452,
    "title": "Play canasta",
    "mood": "competitive",
    "cost": 0,
    "time": 120,
    "min": 2,
    "max": 4,
    "icon": "🎲",
    "description": "Use the required decks and learn melding and discard-pile rules before playing a beginner hand.",
    "steps": [
      "Gather the listed equipment, review the rules together, and agree on scoring, turn order, and a comfortable time limit.",
      "Use the required decks and learn melding and discard-pile rules before playing a beginner hand.",
      "Record the result if you want, rotate roles or sides, and share one tactic you would try in another round."
    ],
    "supplies": [
      "cards"
    ]
  },
  {
    "id": 453,
    "title": "Play hearts",
    "mood": "competitive",
    "cost": 0,
    "time": 60,
    "min": 4,
    "max": 4,
    "icon": "🎲",
    "description": "Review passing and penalty-card rules and play several hands while trying to avoid points.",
    "steps": [
      "Gather the listed equipment, review the rules together, and agree on scoring, turn order, and a comfortable time limit.",
      "Review passing and penalty-card rules and play several hands while trying to avoid points.",
      "Record the result if you want, rotate roles or sides, and share one tactic you would try in another round."
    ],
    "supplies": [
      "cards"
    ]
  },
  {
    "id": 454,
    "title": "Play spades",
    "mood": "competitive",
    "cost": 0,
    "time": 90,
    "min": 4,
    "max": 4,
    "icon": "🎲",
    "description": "Form partnerships, bid expected tricks, and compare your team's result with its bid.",
    "steps": [
      "Gather the listed equipment, review the rules together, and agree on scoring, turn order, and a comfortable time limit.",
      "Form partnerships, bid expected tricks, and compare your team's result with its bid.",
      "Record the result if you want, rotate roles or sides, and share one tactic you would try in another round."
    ],
    "supplies": [
      "cards"
    ]
  },
  {
    "id": 455,
    "title": "Play euchre",
    "mood": "competitive",
    "cost": 0,
    "time": 60,
    "min": 4,
    "max": 4,
    "icon": "🎲",
    "description": "Build the shortened deck and practice choosing trump and winning tricks in partnerships.",
    "steps": [
      "Gather the listed equipment, review the rules together, and agree on scoring, turn order, and a comfortable time limit.",
      "Build the shortened deck and practice choosing trump and winning tricks in partnerships.",
      "Record the result if you want, rotate roles or sides, and share one tactic you would try in another round."
    ],
    "supplies": [
      "cards"
    ]
  },
  {
    "id": 456,
    "title": "Play contract bridge practice hands",
    "mood": "competitive",
    "cost": 0,
    "time": 120,
    "min": 4,
    "max": 4,
    "icon": "🎲",
    "description": "Use beginner teaching hands to practice bidding and trick play without wagering.",
    "steps": [
      "Gather the listed equipment, review the rules together, and agree on scoring, turn order, and a comfortable time limit.",
      "Use beginner teaching hands to practice bidding and trick play without wagering.",
      "Record the result if you want, rotate roles or sides, and share one tactic you would try in another round."
    ],
    "supplies": [
      "cards"
    ]
  },
  {
    "id": 457,
    "title": "Play pinochle",
    "mood": "competitive",
    "cost": 0,
    "time": 120,
    "min": 3,
    "max": 4,
    "icon": "🎲",
    "description": "Use the correct specialized deck and a beginner guide to practice melds and trick-taking.",
    "steps": [
      "Gather the listed equipment, review the rules together, and agree on scoring, turn order, and a comfortable time limit.",
      "Use the correct specialized deck and a beginner guide to practice melds and trick-taking.",
      "Record the result if you want, rotate roles or sides, and share one tactic you would try in another round."
    ],
    "supplies": [
      "cards"
    ]
  },
  {
    "id": 458,
    "title": "Play go fish",
    "mood": "competitive",
    "cost": 0,
    "time": 30,
    "min": 2,
    "max": 6,
    "icon": "🎲",
    "description": "Deal an agreed hand size and ask opponents for matching ranks to complete sets.",
    "steps": [
      "Gather the listed equipment, review the rules together, and agree on scoring, turn order, and a comfortable time limit.",
      "Deal an agreed hand size and ask opponents for matching ranks to complete sets.",
      "Record the result if you want, rotate roles or sides, and share one tactic you would try in another round."
    ],
    "supplies": [
      "cards"
    ]
  },
  {
    "id": 459,
    "title": "Play crazy eights",
    "mood": "competitive",
    "cost": 0,
    "time": 30,
    "min": 2,
    "max": 6,
    "icon": "🎲",
    "description": "Match rank or suit on the discard pile and use eights as wild cards under agreed rules.",
    "steps": [
      "Gather the listed equipment, review the rules together, and agree on scoring, turn order, and a comfortable time limit.",
      "Match rank or suit on the discard pile and use eights as wild cards under agreed rules.",
      "Record the result if you want, rotate roles or sides, and share one tactic you would try in another round."
    ],
    "supplies": [
      "cards"
    ]
  },
  {
    "id": 460,
    "title": "Play old maid",
    "mood": "competitive",
    "cost": 0,
    "time": 30,
    "min": 2,
    "max": 6,
    "icon": "🎲",
    "description": "Remove one queen, discard pairs, and draw from neighbors while avoiding the final unmatched card.",
    "steps": [
      "Gather the listed equipment, review the rules together, and agree on scoring, turn order, and a comfortable time limit.",
      "Remove one queen, discard pairs, and draw from neighbors while avoiding the final unmatched card.",
      "Record the result if you want, rotate roles or sides, and share one tactic you would try in another round."
    ],
    "supplies": [
      "cards"
    ]
  },
  {
    "id": 461,
    "title": "Play slapjack",
    "mood": "competitive",
    "cost": 0,
    "time": 30,
    "min": 2,
    "max": 6,
    "icon": "🎲",
    "description": "Take turns revealing cards and use gentle agreed tapping rules when a jack appears.",
    "steps": [
      "Gather the listed equipment, review the rules together, and agree on scoring, turn order, and a comfortable time limit.",
      "Take turns revealing cards and use gentle agreed tapping rules when a jack appears.",
      "Record the result if you want, rotate roles or sides, and share one tactic you would try in another round."
    ],
    "supplies": [
      "cards"
    ]
  },
  {
    "id": 462,
    "title": "Play spoons",
    "mood": "competitive",
    "cost": 0,
    "time": 30,
    "min": 3,
    "max": 6,
    "icon": "🎲",
    "description": "Pass cards to collect four of a kind and retrieve a spoon without grabbing or pushing other players.",
    "steps": [
      "Gather the listed equipment, review the rules together, and agree on scoring, turn order, and a comfortable time limit.",
      "Pass cards to collect four of a kind and retrieve a spoon without grabbing or pushing other players.",
      "Record the result if you want, rotate roles or sides, and share one tactic you would try in another round."
    ],
    "supplies": [
      "cards",
      "household"
    ]
  },
  {
    "id": 463,
    "title": "Play president",
    "mood": "competitive",
    "cost": 0,
    "time": 60,
    "min": 3,
    "max": 6,
    "icon": "🎲",
    "description": "Agree on a shedding-game ruleset and race to play all your cards over several rounds.",
    "steps": [
      "Gather the listed equipment, review the rules together, and agree on scoring, turn order, and a comfortable time limit.",
      "Agree on a shedding-game ruleset and race to play all your cards over several rounds.",
      "Record the result if you want, rotate roles or sides, and share one tactic you would try in another round."
    ],
    "supplies": [
      "cards"
    ]
  },
  {
    "id": 464,
    "title": "Play kings in the corner",
    "mood": "competitive",
    "cost": 0,
    "time": 60,
    "min": 2,
    "max": 4,
    "icon": "🎲",
    "description": "Build alternating-color descending piles and move kings into corner spaces to empty your hand.",
    "steps": [
      "Gather the listed equipment, review the rules together, and agree on scoring, turn order, and a comfortable time limit.",
      "Build alternating-color descending piles and move kings into corner spaces to empty your hand.",
      "Record the result if you want, rotate roles or sides, and share one tactic you would try in another round."
    ],
    "supplies": [
      "cards"
    ]
  },
  {
    "id": 465,
    "title": "Play golf with cards",
    "mood": "competitive",
    "cost": 0,
    "time": 60,
    "min": 2,
    "max": 6,
    "icon": "🎲",
    "description": "Use a six-card golf ruleset and reduce your face-down layout's score through drawing and exchanging.",
    "steps": [
      "Gather the listed equipment, review the rules together, and agree on scoring, turn order, and a comfortable time limit.",
      "Use a six-card golf ruleset and reduce your face-down layout's score through drawing and exchanging.",
      "Record the result if you want, rotate roles or sides, and share one tactic you would try in another round."
    ],
    "supplies": [
      "cards"
    ]
  },
  {
    "id": 466,
    "title": "Play hand-and-foot cards",
    "mood": "competitive",
    "cost": 0,
    "time": 120,
    "min": 4,
    "max": 6,
    "icon": "🎲",
    "description": "Use enough decks for the group and a shared rulesheet to build melds through hand and foot stages.",
    "steps": [
      "Gather the listed equipment, review the rules together, and agree on scoring, turn order, and a comfortable time limit.",
      "Use enough decks for the group and a shared rulesheet to build melds through hand and foot stages.",
      "Record the result if you want, rotate roles or sides, and share one tactic you would try in another round."
    ],
    "supplies": [
      "cards"
    ]
  },
  {
    "id": 467,
    "title": "Play pyramid solitaire",
    "mood": "competitive",
    "cost": 0,
    "time": 30,
    "min": 1,
    "max": 1,
    "icon": "🎲",
    "description": "Arrange a card pyramid and remove exposed pairs that total thirteen.",
    "steps": [
      "Gather the listed equipment, review the rules together, and agree on scoring, turn order, and a comfortable time limit.",
      "Arrange a card pyramid and remove exposed pairs that total thirteen.",
      "Record the result if you want, rotate roles or sides, and share one tactic you would try in another round."
    ],
    "supplies": [
      "cards"
    ]
  },
  {
    "id": 468,
    "title": "Play freecell solitaire",
    "mood": "competitive",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 1,
    "icon": "🎲",
    "description": "Use a physical layout or accessible free version to move all cards to foundations with limited holding cells.",
    "steps": [
      "Gather the listed equipment, review the rules together, and agree on scoring, turn order, and a comfortable time limit.",
      "Use a physical layout or accessible free version to move all cards to foundations with limited holding cells.",
      "Record the result if you want, rotate roles or sides, and share one tactic you would try in another round."
    ],
    "supplies": [
      "cards",
      "device"
    ]
  },
  {
    "id": 469,
    "title": "Play spider solitaire",
    "mood": "competitive",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 1,
    "icon": "🎲",
    "description": "Choose a beginner one-suit game and build ordered runs before clearing them from the tableau.",
    "steps": [
      "Gather the listed equipment, review the rules together, and agree on scoring, turn order, and a comfortable time limit.",
      "Choose a beginner one-suit game and build ordered runs before clearing them from the tableau.",
      "Record the result if you want, rotate roles or sides, and share one tactic you would try in another round."
    ],
    "supplies": [
      "cards",
      "device"
    ]
  },
  {
    "id": 470,
    "title": "Play clock solitaire",
    "mood": "competitive",
    "cost": 0,
    "time": 30,
    "min": 1,
    "max": 1,
    "icon": "🎲",
    "description": "Arrange thirteen card piles and reveal cards according to the clock-layout rules until the game resolves.",
    "steps": [
      "Gather the listed equipment, review the rules together, and agree on scoring, turn order, and a comfortable time limit.",
      "Arrange thirteen card piles and reveal cards according to the clock-layout rules until the game resolves.",
      "Record the result if you want, rotate roles or sides, and share one tactic you would try in another round."
    ],
    "supplies": [
      "cards"
    ]
  },
  {
    "id": 471,
    "title": "Play accordion solitaire",
    "mood": "competitive",
    "cost": 0,
    "time": 30,
    "min": 1,
    "max": 1,
    "icon": "🎲",
    "description": "Lay out cards and compress matching rank or suit piles according to the one-or-three-position rule.",
    "steps": [
      "Gather the listed equipment, review the rules together, and agree on scoring, turn order, and a comfortable time limit.",
      "Lay out cards and compress matching rank or suit piles according to the one-or-three-position rule.",
      "Record the result if you want, rotate roles or sides, and share one tactic you would try in another round."
    ],
    "supplies": [
      "cards"
    ]
  },
  {
    "id": 472,
    "title": "Play peg solitaire",
    "mood": "competitive",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 1,
    "icon": "🎲",
    "description": "Jump pegs over adjacent pegs to remove them and try to finish with one remaining.",
    "steps": [
      "Gather the listed equipment, review the rules together, and agree on scoring, turn order, and a comfortable time limit.",
      "Jump pegs over adjacent pegs to remove them and try to finish with one remaining.",
      "Record the result if you want, rotate roles or sides, and share one tactic you would try in another round."
    ],
    "supplies": [
      "board"
    ]
  },
  {
    "id": 473,
    "title": "Play mancala",
    "mood": "competitive",
    "cost": 0,
    "time": 60,
    "min": 2,
    "max": 2,
    "icon": "🎲",
    "description": "Choose a mancala ruleset and distribute counters between pits to collect the most pieces.",
    "steps": [
      "Gather the listed equipment, review the rules together, and agree on scoring, turn order, and a comfortable time limit.",
      "Choose a mancala ruleset and distribute counters between pits to collect the most pieces.",
      "Record the result if you want, rotate roles or sides, and share one tactic you would try in another round."
    ],
    "supplies": [
      "board"
    ]
  },
  {
    "id": 474,
    "title": "Play Go",
    "mood": "competitive",
    "cost": 0,
    "time": 90,
    "min": 2,
    "max": 2,
    "icon": "🎲",
    "description": "Use a beginner board size to practice liberties, captures, and surrounding territory.",
    "steps": [
      "Gather the listed equipment, review the rules together, and agree on scoring, turn order, and a comfortable time limit.",
      "Use a beginner board size to practice liberties, captures, and surrounding territory.",
      "Record the result if you want, rotate roles or sides, and share one tactic you would try in another round."
    ],
    "supplies": [
      "board"
    ]
  },
  {
    "id": 475,
    "title": "Play Othello",
    "mood": "competitive",
    "cost": 0,
    "time": 60,
    "min": 2,
    "max": 2,
    "icon": "🎲",
    "description": "Place discs so they bracket opposing lines and compare disc counts when no moves remain.",
    "steps": [
      "Gather the listed equipment, review the rules together, and agree on scoring, turn order, and a comfortable time limit.",
      "Place discs so they bracket opposing lines and compare disc counts when no moves remain.",
      "Record the result if you want, rotate roles or sides, and share one tactic you would try in another round."
    ],
    "supplies": [
      "board"
    ]
  },
  {
    "id": 476,
    "title": "Play shogi",
    "mood": "competitive",
    "cost": 0,
    "time": 120,
    "min": 2,
    "max": 2,
    "icon": "🎲",
    "description": "Learn the movement and drop rules of Japanese chess and play a guided beginner match.",
    "steps": [
      "Gather the listed equipment, review the rules together, and agree on scoring, turn order, and a comfortable time limit.",
      "Learn the movement and drop rules of Japanese chess and play a guided beginner match.",
      "Record the result if you want, rotate roles or sides, and share one tactic you would try in another round."
    ],
    "supplies": [
      "board"
    ]
  },
  {
    "id": 477,
    "title": "Play xiangqi",
    "mood": "competitive",
    "cost": 0,
    "time": 120,
    "min": 2,
    "max": 2,
    "icon": "🎲",
    "description": "Use a suitable board and learn palace, river, and movement rules before a beginner game.",
    "steps": [
      "Gather the listed equipment, review the rules together, and agree on scoring, turn order, and a comfortable time limit.",
      "Use a suitable board and learn palace, river, and movement rules before a beginner game.",
      "Record the result if you want, rotate roles or sides, and share one tactic you would try in another round."
    ],
    "supplies": [
      "board"
    ]
  },
  {
    "id": 478,
    "title": "Play Nine Men's Morris",
    "mood": "competitive",
    "cost": 0,
    "time": 60,
    "min": 2,
    "max": 2,
    "icon": "🎲",
    "description": "Draw the board, use two sets of counters, and form mills while managing movement and captures.",
    "steps": [
      "Gather the listed equipment, review the rules together, and agree on scoring, turn order, and a comfortable time limit.",
      "Draw the board, use two sets of counters, and form mills while managing movement and captures.",
      "Record the result if you want, rotate roles or sides, and share one tactic you would try in another round."
    ],
    "supplies": [
      "paper",
      "household"
    ]
  },
  {
    "id": 479,
    "title": "Play a hex connection game",
    "mood": "competitive",
    "cost": 0,
    "time": 60,
    "min": 2,
    "max": 2,
    "icon": "🎲",
    "description": "Draw or print a hexagonal grid and take turns connecting your two opposing board edges.",
    "steps": [
      "Gather the listed equipment, review the rules together, and agree on scoring, turn order, and a comfortable time limit.",
      "Draw or print a hexagonal grid and take turns connecting your two opposing board edges.",
      "Record the result if you want, rotate roles or sides, and share one tactic you would try in another round."
    ],
    "supplies": [
      "paper",
      "household"
    ]
  },
  {
    "id": 480,
    "title": "Play Nim",
    "mood": "competitive",
    "cost": 0,
    "time": 30,
    "min": 2,
    "max": 2,
    "icon": "🎲",
    "description": "Arrange counters in several piles and agree how removals and the winning condition work before playing.",
    "steps": [
      "Gather the listed equipment, review the rules together, and agree on scoring, turn order, and a comfortable time limit.",
      "Arrange counters in several piles and agree how removals and the winning condition work before playing.",
      "Record the result if you want, rotate roles or sides, and share one tactic you would try in another round."
    ],
    "supplies": [
      "household"
    ]
  },
  {
    "id": 481,
    "title": "Play Mastermind",
    "mood": "competitive",
    "cost": 0,
    "time": 60,
    "min": 2,
    "max": 2,
    "icon": "🎲",
    "description": "Have one player set a hidden color sequence and use exact and misplaced-color feedback to deduce it.",
    "steps": [
      "Gather the listed equipment, review the rules together, and agree on scoring, turn order, and a comfortable time limit.",
      "Have one player set a hidden color sequence and use exact and misplaced-color feedback to deduce it.",
      "Record the result if you want, rotate roles or sides, and share one tactic you would try in another round."
    ],
    "supplies": [
      "board"
    ]
  },
  {
    "id": 482,
    "title": "Play Battleship",
    "mood": "competitive",
    "cost": 0,
    "time": 60,
    "min": 2,
    "max": 2,
    "icon": "🎲",
    "description": "Draw private coordinate grids, place ships, and take turns calling shots to locate the opponent's fleet.",
    "steps": [
      "Gather the listed equipment, review the rules together, and agree on scoring, turn order, and a comfortable time limit.",
      "Draw private coordinate grids, place ships, and take turns calling shots to locate the opponent's fleet.",
      "Record the result if you want, rotate roles or sides, and share one tactic you would try in another round."
    ],
    "supplies": [
      "paper"
    ]
  },
  {
    "id": 483,
    "title": "Play Boggle",
    "mood": "competitive",
    "cost": 0,
    "time": 30,
    "min": 2,
    "max": 6,
    "icon": "🎲",
    "description": "Use an available letter grid and a timer to find connected words, canceling shared answers in scoring.",
    "steps": [
      "Gather the listed equipment, review the rules together, and agree on scoring, turn order, and a comfortable time limit.",
      "Use an available letter grid and a timer to find connected words, canceling shared answers in scoring.",
      "Record the result if you want, rotate roles or sides, and share one tactic you would try in another round."
    ],
    "supplies": [
      "board"
    ]
  },
  {
    "id": 484,
    "title": "Play Bananagrams",
    "mood": "competitive",
    "cost": 0,
    "time": 60,
    "min": 2,
    "max": 6,
    "icon": "🎲",
    "description": "Use an owned tile set and its rules to race at building an interconnected personal word grid.",
    "steps": [
      "Gather the listed equipment, review the rules together, and agree on scoring, turn order, and a comfortable time limit.",
      "Use an owned tile set and its rules to race at building an interconnected personal word grid.",
      "Record the result if you want, rotate roles or sides, and share one tactic you would try in another round."
    ],
    "supplies": [
      "board"
    ]
  },
  {
    "id": 485,
    "title": "Play Rummikub",
    "mood": "competitive",
    "cost": 0,
    "time": 90,
    "min": 2,
    "max": 4,
    "icon": "🎲",
    "description": "Use an owned set to build and rearrange numbered runs and groups until a player empties their rack.",
    "steps": [
      "Gather the listed equipment, review the rules together, and agree on scoring, turn order, and a comfortable time limit.",
      "Use an owned set to build and rearrange numbered runs and groups until a player empties their rack.",
      "Record the result if you want, rotate roles or sides, and share one tactic you would try in another round."
    ],
    "supplies": [
      "board"
    ]
  },
  {
    "id": 486,
    "title": "Play Qwirkle",
    "mood": "competitive",
    "cost": 0,
    "time": 60,
    "min": 2,
    "max": 4,
    "icon": "🎲",
    "description": "Use an owned set to score lines that share a color or shape without duplicating tiles in a line.",
    "steps": [
      "Gather the listed equipment, review the rules together, and agree on scoring, turn order, and a comfortable time limit.",
      "Use an owned set to score lines that share a color or shape without duplicating tiles in a line.",
      "Record the result if you want, rotate roles or sides, and share one tactic you would try in another round."
    ],
    "supplies": [
      "board"
    ]
  },
  {
    "id": 487,
    "title": "Play Azul",
    "mood": "competitive",
    "cost": 0,
    "time": 90,
    "min": 2,
    "max": 4,
    "icon": "🎲",
    "description": "Use an owned copy to draft tiles and complete rows while managing overflow penalties.",
    "steps": [
      "Gather the listed equipment, review the rules together, and agree on scoring, turn order, and a comfortable time limit.",
      "Use an owned copy to draft tiles and complete rows while managing overflow penalties.",
      "Record the result if you want, rotate roles or sides, and share one tactic you would try in another round."
    ],
    "supplies": [
      "board"
    ]
  },
  {
    "id": 488,
    "title": "Play Carcassonne",
    "mood": "competitive",
    "cost": 0,
    "time": 90,
    "min": 2,
    "max": 5,
    "icon": "🎲",
    "description": "Use an owned copy to place landscape tiles and deploy followers to score completed features.",
    "steps": [
      "Gather the listed equipment, review the rules together, and agree on scoring, turn order, and a comfortable time limit.",
      "Use an owned copy to place landscape tiles and deploy followers to score completed features.",
      "Record the result if you want, rotate roles or sides, and share one tactic you would try in another round."
    ],
    "supplies": [
      "board"
    ]
  },
  {
    "id": 489,
    "title": "Play Ticket to Ride",
    "mood": "competitive",
    "cost": 0,
    "time": 120,
    "min": 2,
    "max": 5,
    "icon": "🎲",
    "description": "Use an owned copy to collect cards and connect destinations on the included railway map.",
    "steps": [
      "Gather the listed equipment, review the rules together, and agree on scoring, turn order, and a comfortable time limit.",
      "Use an owned copy to collect cards and connect destinations on the included railway map.",
      "Record the result if you want, rotate roles or sides, and share one tactic you would try in another round."
    ],
    "supplies": [
      "board"
    ]
  },
  {
    "id": 490,
    "title": "Play Catan",
    "mood": "competitive",
    "cost": 0,
    "time": 120,
    "min": 3,
    "max": 4,
    "icon": "🎲",
    "description": "Use an owned copy to build settlements and roads, trade resources, and pursue victory points.",
    "steps": [
      "Gather the listed equipment, review the rules together, and agree on scoring, turn order, and a comfortable time limit.",
      "Use an owned copy to build settlements and roads, trade resources, and pursue victory points.",
      "Record the result if you want, rotate roles or sides, and share one tactic you would try in another round."
    ],
    "supplies": [
      "board"
    ]
  },
  {
    "id": 491,
    "title": "Play Splendor",
    "mood": "competitive",
    "cost": 0,
    "time": 90,
    "min": 2,
    "max": 4,
    "icon": "🎲",
    "description": "Use an owned copy to collect tokens and purchase development cards that support further purchases.",
    "steps": [
      "Gather the listed equipment, review the rules together, and agree on scoring, turn order, and a comfortable time limit.",
      "Use an owned copy to collect tokens and purchase development cards that support further purchases.",
      "Record the result if you want, rotate roles or sides, and share one tactic you would try in another round."
    ],
    "supplies": [
      "board"
    ]
  },
  {
    "id": 492,
    "title": "Play Sushi Go",
    "mood": "competitive",
    "cost": 0,
    "time": 60,
    "min": 2,
    "max": 5,
    "icon": "🎲",
    "description": "Use an owned copy to draft food cards and compare scoring combinations over the stated rounds.",
    "steps": [
      "Gather the listed equipment, review the rules together, and agree on scoring, turn order, and a comfortable time limit.",
      "Use an owned copy to draft food cards and compare scoring combinations over the stated rounds.",
      "Record the result if you want, rotate roles or sides, and share one tactic you would try in another round."
    ],
    "supplies": [
      "board"
    ]
  },
  {
    "id": 493,
    "title": "Play Love Letter",
    "mood": "competitive",
    "cost": 0,
    "time": 60,
    "min": 2,
    "max": 6,
    "icon": "🎲",
    "description": "Use an edition that supports your group size and deduce which card to play while protecting your hand.",
    "steps": [
      "Gather the listed equipment, review the rules together, and agree on scoring, turn order, and a comfortable time limit.",
      "Use an edition that supports your group size and deduce which card to play while protecting your hand.",
      "Record the result if you want, rotate roles or sides, and share one tactic you would try in another round."
    ],
    "supplies": [
      "board"
    ]
  },
  {
    "id": 494,
    "title": "Play Hanabi",
    "mood": "competitive",
    "cost": 0,
    "time": 60,
    "min": 2,
    "max": 5,
    "icon": "🎲",
    "description": "Use an owned copy to give limited clues and cooperatively play cards you cannot see yourself.",
    "steps": [
      "Gather the listed equipment, review the rules together, and agree on scoring, turn order, and a comfortable time limit.",
      "Use an owned copy to give limited clues and cooperatively play cards you cannot see yourself.",
      "Record the result if you want, rotate roles or sides, and share one tactic you would try in another round."
    ],
    "supplies": [
      "board"
    ]
  },
  {
    "id": 495,
    "title": "Play The Mind",
    "mood": "competitive",
    "cost": 0,
    "time": 60,
    "min": 2,
    "max": 4,
    "icon": "🎲",
    "description": "Use an owned copy to place numbered cards in order without discussing their values.",
    "steps": [
      "Gather the listed equipment, review the rules together, and agree on scoring, turn order, and a comfortable time limit.",
      "Use an owned copy to place numbered cards in order without discussing their values.",
      "Record the result if you want, rotate roles or sides, and share one tactic you would try in another round."
    ],
    "supplies": [
      "board"
    ]
  },
  {
    "id": 496,
    "title": "Play Codenames",
    "mood": "competitive",
    "cost": 0,
    "time": 90,
    "min": 4,
    "max": 6,
    "icon": "🎲",
    "description": "Use an owned copy and take turns giving one-word clues that connect your team's hidden target words.",
    "steps": [
      "Gather the listed equipment, review the rules together, and agree on scoring, turn order, and a comfortable time limit.",
      "Use an owned copy and take turns giving one-word clues that connect your team's hidden target words.",
      "Record the result if you want, rotate roles or sides, and share one tactic you would try in another round."
    ],
    "supplies": [
      "board"
    ]
  },
  {
    "id": 497,
    "title": "Play Just One",
    "mood": "competitive",
    "cost": 0,
    "time": 60,
    "min": 3,
    "max": 6,
    "icon": "🎲",
    "description": "Use an owned copy and cancel identical clues before a player guesses the target word.",
    "steps": [
      "Gather the listed equipment, review the rules together, and agree on scoring, turn order, and a comfortable time limit.",
      "Use an owned copy and cancel identical clues before a player guesses the target word.",
      "Record the result if you want, rotate roles or sides, and share one tactic you would try in another round."
    ],
    "supplies": [
      "board"
    ]
  },
  {
    "id": 498,
    "title": "Play a cooperative jigsaw relay",
    "mood": "competitive",
    "cost": 0,
    "time": 90,
    "min": 2,
    "max": 6,
    "icon": "🎲",
    "description": "Rotate who may place pieces every few minutes and work together to complete one puzzle within a shared time.",
    "steps": [
      "Gather the listed equipment, review the rules together, and agree on scoring, turn order, and a comfortable time limit.",
      "Rotate who may place pieces every few minutes and work together to complete one puzzle within a shared time.",
      "Record the result if you want, rotate roles or sides, and share one tactic you would try in another round."
    ],
    "supplies": [
      "board"
    ]
  },
  {
    "id": 499,
    "title": "Play a chess endgame challenge",
    "mood": "competitive",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 2,
    "icon": "🎲",
    "description": "Set up a specific beginner endgame and practice finding a winning or drawing plan against a partner or engine.",
    "steps": [
      "Gather the listed equipment, review the rules together, and agree on scoring, turn order, and a comfortable time limit.",
      "Set up a specific beginner endgame and practice finding a winning or drawing plan against a partner or engine.",
      "Record the result if you want, rotate roles or sides, and share one tactic you would try in another round."
    ],
    "supplies": [
      "board",
      "device"
    ]
  },
  {
    "id": 500,
    "title": "Play pétanque",
    "mood": "competitive",
    "cost": 0,
    "time": 90,
    "min": 2,
    "max": 6,
    "icon": "🎲",
    "description": "Use an owned set on a permitted surface and take turns placing boules closest to the small target ball.",
    "steps": [
      "Gather the listed equipment, review the rules together, and agree on scoring, turn order, and a comfortable time limit.",
      "Use an owned set on a permitted surface and take turns placing boules closest to the small target ball.",
      "Record the result if you want, rotate roles or sides, and share one tactic you would try in another round."
    ],
    "supplies": [
      "sports",
      "outdoor"
    ]
  },
  {
    "id": 501,
    "title": "Play kubb",
    "mood": "competitive",
    "cost": 0,
    "time": 90,
    "min": 2,
    "max": 6,
    "icon": "🎲",
    "description": "Use an owned set in a clear permitted area and learn the throwing order for knocking down wooden targets.",
    "steps": [
      "Gather the listed equipment, review the rules together, and agree on scoring, turn order, and a comfortable time limit.",
      "Use an owned set in a clear permitted area and learn the throwing order for knocking down wooden targets.",
      "Record the result if you want, rotate roles or sides, and share one tactic you would try in another round."
    ],
    "supplies": [
      "sports",
      "outdoor"
    ]
  },
  {
    "id": 502,
    "title": "Play ladder toss",
    "mood": "competitive",
    "cost": 0,
    "time": 60,
    "min": 2,
    "max": 6,
    "icon": "🎲",
    "description": "Use an owned set with space around the targets and compare scores from equal rounds of tosses.",
    "steps": [
      "Gather the listed equipment, review the rules together, and agree on scoring, turn order, and a comfortable time limit.",
      "Use an owned set with space around the targets and compare scores from equal rounds of tosses.",
      "Record the result if you want, rotate roles or sides, and share one tactic you would try in another round."
    ],
    "supplies": [
      "sports",
      "outdoor"
    ]
  },
  {
    "id": 503,
    "title": "Play spikeball-style roundnet",
    "mood": "competitive",
    "cost": 0,
    "time": 90,
    "min": 4,
    "max": 4,
    "icon": "🎲",
    "description": "Use an owned roundnet set and practice controlled rallies before playing a non-contact match.",
    "steps": [
      "Gather the listed equipment, review the rules together, and agree on scoring, turn order, and a comfortable time limit.",
      "Use an owned roundnet set and practice controlled rallies before playing a non-contact match.",
      "Record the result if you want, rotate roles or sides, and share one tactic you would try in another round."
    ],
    "supplies": [
      "sports",
      "outdoor"
    ]
  },
  {
    "id": 504,
    "title": "Play tetherball",
    "mood": "competitive",
    "cost": 0,
    "time": 60,
    "min": 2,
    "max": 2,
    "icon": "🎲",
    "description": "Use an existing permitted setup and take turns wrapping the ball around the pole in your direction.",
    "steps": [
      "Gather the listed equipment, review the rules together, and agree on scoring, turn order, and a comfortable time limit.",
      "Use an existing permitted setup and take turns wrapping the ball around the pole in your direction.",
      "Record the result if you want, rotate roles or sides, and share one tactic you would try in another round."
    ],
    "supplies": [
      "sports",
      "outdoor"
    ]
  },
  {
    "id": 505,
    "title": "Play four square",
    "mood": "competitive",
    "cost": 0,
    "time": 60,
    "min": 4,
    "max": 6,
    "icon": "🎲",
    "description": "Mark a suitable court and agree on bounce and rotation rules before playing with a playground ball.",
    "steps": [
      "Gather the listed equipment, review the rules together, and agree on scoring, turn order, and a comfortable time limit.",
      "Mark a suitable court and agree on bounce and rotation rules before playing with a playground ball.",
      "Record the result if you want, rotate roles or sides, and share one tactic you would try in another round."
    ],
    "supplies": [
      "sports",
      "outdoor"
    ]
  },
  {
    "id": 506,
    "title": "Play hopscotch",
    "mood": "competitive",
    "cost": 0,
    "time": 30,
    "min": 1,
    "max": 6,
    "icon": "🎲",
    "description": "Draw a removable chalk course where permitted and practice tossing a marker and hopping through the sequence.",
    "steps": [
      "Gather the listed equipment, review the rules together, and agree on scoring, turn order, and a comfortable time limit.",
      "Draw a removable chalk course where permitted and practice tossing a marker and hopping through the sequence.",
      "Record the result if you want, rotate roles or sides, and share one tactic you would try in another round."
    ],
    "supplies": [
      "sports",
      "outdoor"
    ]
  },
  {
    "id": 507,
    "title": "Run a jump-rope challenge",
    "mood": "competitive",
    "cost": 0,
    "time": 30,
    "min": 1,
    "max": 6,
    "icon": "🎲",
    "description": "Use an appropriate rope in a clear space and compare consistent jumps or simple skills without overexertion.",
    "steps": [
      "Gather the listed equipment, review the rules together, and agree on scoring, turn order, and a comfortable time limit.",
      "Use an appropriate rope in a clear space and compare consistent jumps or simple skills without overexertion.",
      "Record the result if you want, rotate roles or sides, and share one tactic you would try in another round."
    ],
    "supplies": [
      "sports",
      "outdoor"
    ]
  },
  {
    "id": 508,
    "title": "Try double Dutch",
    "mood": "competitive",
    "cost": 0,
    "time": 60,
    "min": 3,
    "max": 6,
    "icon": "🎲",
    "description": "Have two turners practice a steady rhythm while a jumper enters and exits at a comfortable pace.",
    "steps": [
      "Gather the listed equipment, review the rules together, and agree on scoring, turn order, and a comfortable time limit.",
      "Have two turners practice a steady rhythm while a jumper enters and exits at a comfortable pace.",
      "Record the result if you want, rotate roles or sides, and share one tactic you would try in another round."
    ],
    "supplies": [
      "sports",
      "outdoor"
    ]
  },
  {
    "id": 509,
    "title": "Play beach-ball keep-up",
    "mood": "competitive",
    "cost": 0,
    "time": 30,
    "min": 2,
    "max": 6,
    "icon": "🎲",
    "description": "Use a soft ball and count consecutive controlled touches without letting it reach the ground.",
    "steps": [
      "Gather the listed equipment, review the rules together, and agree on scoring, turn order, and a comfortable time limit.",
      "Use a soft ball and count consecutive controlled touches without letting it reach the ground.",
      "Record the result if you want, rotate roles or sides, and share one tactic you would try in another round."
    ],
    "supplies": [
      "sports",
      "outdoor"
    ]
  },
  {
    "id": 510,
    "title": "Play seated balloon keep-up",
    "mood": "competitive",
    "cost": 10,
    "time": 30,
    "min": 2,
    "max": 6,
    "icon": "🎲",
    "description": "Sit in a clear area and count gentle passes that keep a balloon airborne, checking latex sensitivities first.",
    "steps": [
      "Gather the listed equipment, review the rules together, and agree on scoring, turn order, and a comfortable time limit.",
      "Sit in a clear area and count gentle passes that keep a balloon airborne, checking latex sensitivities first.",
      "Record the result if you want, rotate roles or sides, and share one tactic you would try in another round."
    ],
    "supplies": [
      "craft",
      "household"
    ]
  },
  {
    "id": 511,
    "title": "Play target disc golf",
    "mood": "competitive",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "🎲",
    "description": "Choose safe freestanding targets in a permitted open area and count throws along a short improvised course.",
    "steps": [
      "Gather the listed equipment, review the rules together, and agree on scoring, turn order, and a comfortable time limit.",
      "Choose safe freestanding targets in a permitted open area and count throws along a short improvised course.",
      "Record the result if you want, rotate roles or sides, and share one tactic you would try in another round."
    ],
    "supplies": [
      "sports",
      "outdoor"
    ]
  },
  {
    "id": 512,
    "title": "Play a putting challenge",
    "mood": "competitive",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "🎲",
    "description": "Use a putter and suitable practice surface to attempt putts from several marked distances.",
    "steps": [
      "Gather the listed equipment, review the rules together, and agree on scoring, turn order, and a comfortable time limit.",
      "Use a putter and suitable practice surface to attempt putts from several marked distances.",
      "Record the result if you want, rotate roles or sides, and share one tactic you would try in another round."
    ],
    "supplies": [
      "sports"
    ]
  },
  {
    "id": 513,
    "title": "Practice a tennis wall rally",
    "mood": "competitive",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 2,
    "icon": "🎟️",
    "description": "Find a permitted practice wall and count controlled consecutive returns while leaving space for others.",
    "steps": [
      "Find an official public listing; confirm current prices, availability, access requirements, and what equipment is included before committing.",
      "Find a permitted practice wall and count controlled consecutive returns while leaving space for others.",
      "Afterward, share one thing you learned or enjoyed and note whether you would like to return."
    ],
    "supplies": [
      "sports",
      "venue"
    ]
  },
  {
    "id": 514,
    "title": "Play short-court tennis",
    "mood": "competitive",
    "cost": 0,
    "time": 60,
    "min": 2,
    "max": 4,
    "icon": "🎟️",
    "description": "Use an available court with agreed smaller boundaries and focus on controlled rallies before scoring.",
    "steps": [
      "Find an official public listing; confirm current prices, availability, access requirements, and what equipment is included before committing.",
      "Use an available court with agreed smaller boundaries and focus on controlled rallies before scoring.",
      "Afterward, share one thing you learned or enjoyed and note whether you would like to return."
    ],
    "supplies": [
      "sports",
      "venue"
    ]
  },
  {
    "id": 515,
    "title": "Play touch rugby",
    "mood": "competitive",
    "cost": 0,
    "time": 60,
    "min": 4,
    "max": 6,
    "icon": "🎲",
    "description": "Agree on simple passing and touch rules and play on a clear field without tackling.",
    "steps": [
      "Gather the listed equipment, review the rules together, and agree on scoring, turn order, and a comfortable time limit.",
      "Agree on simple passing and touch rules and play on a clear field without tackling.",
      "Record the result if you want, rotate roles or sides, and share one tactic you would try in another round."
    ],
    "supplies": [
      "sports",
      "outdoor"
    ]
  },
  {
    "id": 516,
    "title": "Play flag football",
    "mood": "competitive",
    "cost": 0,
    "time": 90,
    "min": 4,
    "max": 6,
    "icon": "🎲",
    "description": "Use suitable flag belts and a clear field with agreed no-contact rules and short possessions.",
    "steps": [
      "Gather the listed equipment, review the rules together, and agree on scoring, turn order, and a comfortable time limit.",
      "Use suitable flag belts and a clear field with agreed no-contact rules and short possessions.",
      "Record the result if you want, rotate roles or sides, and share one tactic you would try in another round."
    ],
    "supplies": [
      "sports",
      "outdoor"
    ]
  },
  {
    "id": 517,
    "title": "Play kickball",
    "mood": "competitive",
    "cost": 0,
    "time": 60,
    "min": 4,
    "max": 6,
    "icon": "🎲",
    "description": "Mark a compact diamond in a permitted area and rotate kicking and fielding with a soft ball.",
    "steps": [
      "Gather the listed equipment, review the rules together, and agree on scoring, turn order, and a comfortable time limit.",
      "Mark a compact diamond in a permitted area and rotate kicking and fielding with a soft ball.",
      "Record the result if you want, rotate roles or sides, and share one tactic you would try in another round."
    ],
    "supplies": [
      "sports",
      "outdoor"
    ]
  },
  {
    "id": 518,
    "title": "Play wiffle-ball baseball",
    "mood": "competitive",
    "cost": 0,
    "time": 90,
    "min": 4,
    "max": 6,
    "icon": "🎲",
    "description": "Use lightweight equipment in a safe open space and agree on compact field and scoring rules.",
    "steps": [
      "Gather the listed equipment, review the rules together, and agree on scoring, turn order, and a comfortable time limit.",
      "Use lightweight equipment in a safe open space and agree on compact field and scoring rules.",
      "Record the result if you want, rotate roles or sides, and share one tactic you would try in another round."
    ],
    "supplies": [
      "sports",
      "outdoor"
    ]
  },
  {
    "id": 519,
    "title": "Play a cricket batting drill",
    "mood": "competitive",
    "cost": 0,
    "time": 60,
    "min": 2,
    "max": 6,
    "icon": "🎲",
    "description": "Use suitable beginner equipment and soft deliveries to practice controlled batting and fielding.",
    "steps": [
      "Gather the listed equipment, review the rules together, and agree on scoring, turn order, and a comfortable time limit.",
      "Use suitable beginner equipment and soft deliveries to practice controlled batting and fielding.",
      "Record the result if you want, rotate roles or sides, and share one tactic you would try in another round."
    ],
    "supplies": [
      "sports",
      "outdoor"
    ]
  },
  {
    "id": 520,
    "title": "Run a volleyball serving challenge",
    "mood": "competitive",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "🎟️",
    "description": "Use an available court and compare accurate serves into marked safe target zones.",
    "steps": [
      "Find an official public listing; confirm current prices, availability, access requirements, and what equipment is included before committing.",
      "Use an available court and compare accurate serves into marked safe target zones.",
      "Afterward, share one thing you learned or enjoyed and note whether you would like to return."
    ],
    "supplies": [
      "sports",
      "venue"
    ]
  },
  {
    "id": 521,
    "title": "Play sitting volleyball",
    "mood": "competitive",
    "cost": 0,
    "time": 60,
    "min": 4,
    "max": 6,
    "icon": "🎲",
    "description": "Use a suitable clear surface and a low safe net or line to play with agreed seated movement rules.",
    "steps": [
      "Gather the listed equipment, review the rules together, and agree on scoring, turn order, and a comfortable time limit.",
      "Use a suitable clear surface and a low safe net or line to play with agreed seated movement rules.",
      "Record the result if you want, rotate roles or sides, and share one tactic you would try in another round."
    ],
    "supplies": [
      "sports"
    ]
  },
  {
    "id": 522,
    "title": "Play a handball wall game",
    "mood": "competitive",
    "cost": 0,
    "time": 60,
    "min": 2,
    "max": 4,
    "icon": "🎟️",
    "description": "Use a permitted wall and a suitable soft ball to practice bounce-and-return rules.",
    "steps": [
      "Find an official public listing; confirm current prices, availability, access requirements, and what equipment is included before committing.",
      "Use a permitted wall and a suitable soft ball to practice bounce-and-return rules.",
      "Afterward, share one thing you learned or enjoyed and note whether you would like to return."
    ],
    "supplies": [
      "sports",
      "venue"
    ]
  },
  {
    "id": 523,
    "title": "Play a ring-toss game",
    "mood": "competitive",
    "cost": 0,
    "time": 30,
    "min": 1,
    "max": 6,
    "icon": "🎲",
    "description": "Use a safe existing set and compare accuracy from several equal throwing distances.",
    "steps": [
      "Gather the listed equipment, review the rules together, and agree on scoring, turn order, and a comfortable time limit.",
      "Use a safe existing set and compare accuracy from several equal throwing distances.",
      "Record the result if you want, rotate roles or sides, and share one tactic you would try in another round."
    ],
    "supplies": [
      "sports"
    ]
  },
  {
    "id": 524,
    "title": "Make a tabletop shuffleboard game",
    "mood": "competitive",
    "cost": 0,
    "time": 60,
    "min": 2,
    "max": 4,
    "icon": "🎲",
    "description": "Mark scoring zones on a smooth protected surface and slide suitable soft counters without scratching it.",
    "steps": [
      "Gather the listed equipment, review the rules together, and agree on scoring, turn order, and a comfortable time limit.",
      "Mark scoring zones on a smooth protected surface and slide suitable soft counters without scratching it.",
      "Record the result if you want, rotate roles or sides, and share one tactic you would try in another round."
    ],
    "supplies": [
      "household",
      "paper"
    ]
  },
  {
    "id": 525,
    "title": "Play finger-flick tabletop soccer",
    "mood": "competitive",
    "cost": 0,
    "time": 30,
    "min": 2,
    "max": 2,
    "icon": "🎲",
    "description": "Make paper goals and flick a small soft paper ball across a bounded tabletop under agreed rules.",
    "steps": [
      "Gather the listed equipment, review the rules together, and agree on scoring, turn order, and a comfortable time limit.",
      "Make paper goals and flick a small soft paper ball across a bounded tabletop under agreed rules.",
      "Record the result if you want, rotate roles or sides, and share one tactic you would try in another round."
    ],
    "supplies": [
      "paper",
      "household"
    ]
  },
  {
    "id": 526,
    "title": "Play paper football",
    "mood": "competitive",
    "cost": 0,
    "time": 30,
    "min": 2,
    "max": 2,
    "icon": "🎲",
    "description": "Fold a paper football and take turns sliding it toward the table edge without knocking other objects down.",
    "steps": [
      "Gather the listed equipment, review the rules together, and agree on scoring, turn order, and a comfortable time limit.",
      "Fold a paper football and take turns sliding it toward the table edge without knocking other objects down.",
      "Record the result if you want, rotate roles or sides, and share one tactic you would try in another round."
    ],
    "supplies": [
      "paper"
    ]
  },
  {
    "id": 527,
    "title": "Run a chopstick-transfer race",
    "mood": "competitive",
    "cost": 0,
    "time": 30,
    "min": 2,
    "max": 6,
    "icon": "🍳",
    "description": "Use chopsticks to move large dry food pieces or counters between bowls and compare clean transfers in equal time.",
    "steps": [
      "Choose a reliable beginner recipe, read it fully, check ingredients and allergies, and prepare the equipment before starting.",
      "Use chopsticks to move large dry food pieces or counters between bowls and compare clean transfers in equal time.",
      "Taste the result when ready, clean the work area, and follow the recipe for cooling, storage, and any additional setting time."
    ],
    "supplies": [
      "kitchen",
      "household"
    ]
  },
  {
    "id": 528,
    "title": "Run a spoon-and-ball relay",
    "mood": "competitive",
    "cost": 0,
    "time": 30,
    "min": 2,
    "max": 6,
    "icon": "🎲",
    "description": "Carry a lightweight ball on a spoon along a clear walking course, restarting after drops.",
    "steps": [
      "Gather the listed equipment, review the rules together, and agree on scoring, turn order, and a comfortable time limit.",
      "Carry a lightweight ball on a spoon along a clear walking course, restarting after drops.",
      "Record the result if you want, rotate roles or sides, and share one tactic you would try in another round."
    ],
    "supplies": [
      "household",
      "outdoor"
    ]
  },
  {
    "id": 529,
    "title": "Play a balance-beam line challenge",
    "mood": "competitive",
    "cost": 0,
    "time": 30,
    "min": 1,
    "max": 6,
    "icon": "🎲",
    "description": "Mark a line on a flat floor and practice heel-to-toe walking without using a raised beam.",
    "steps": [
      "Gather the listed equipment, review the rules together, and agree on scoring, turn order, and a comfortable time limit.",
      "Mark a line on a flat floor and practice heel-to-toe walking without using a raised beam.",
      "Record the result if you want, rotate roles or sides, and share one tactic you would try in another round."
    ],
    "supplies": [
      "household"
    ]
  },
  {
    "id": 530,
    "title": "Try a stacking-stones challenge",
    "mood": "competitive",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "🎲",
    "description": "Use owned smooth stones on a protected low surface and compare stable freestanding arrangements.",
    "steps": [
      "Gather the listed equipment, review the rules together, and agree on scoring, turn order, and a comfortable time limit.",
      "Use owned smooth stones on a protected low surface and compare stable freestanding arrangements.",
      "Record the result if you want, rotate roles or sides, and share one tactic you would try in another round."
    ],
    "supplies": [
      "household"
    ]
  },
  {
    "id": 531,
    "title": "Build a bridge from index cards",
    "mood": "competitive",
    "cost": 0,
    "time": 60,
    "min": 2,
    "max": 6,
    "icon": "🎲",
    "description": "Use equal supplies to span a small gap and test each bridge with identical light weights.",
    "steps": [
      "Gather the listed equipment, review the rules together, and agree on scoring, turn order, and a comfortable time limit.",
      "Use equal supplies to span a small gap and test each bridge with identical light weights.",
      "Record the result if you want, rotate roles or sides, and share one tactic you would try in another round."
    ],
    "supplies": [
      "paper",
      "household"
    ]
  },
  {
    "id": 532,
    "title": "Run a foil-boat capacity contest",
    "mood": "competitive",
    "cost": 0,
    "time": 60,
    "min": 2,
    "max": 6,
    "icon": "🍳",
    "description": "Shape equal pieces of foil into boats and compare how many identical counters they float in a shallow tray.",
    "steps": [
      "Choose a reliable beginner recipe, read it fully, check ingredients and allergies, and prepare the equipment before starting.",
      "Shape equal pieces of foil into boats and compare how many identical counters they float in a shallow tray.",
      "Taste the result when ready, clean the work area, and follow the recipe for cooling, storage, and any additional setting time."
    ],
    "supplies": [
      "kitchen",
      "household"
    ]
  },
  {
    "id": 533,
    "title": "Run a rubber-band car race",
    "mood": "competitive",
    "cost": 10,
    "time": 90,
    "min": 2,
    "max": 6,
    "icon": "🎲",
    "description": "Use beginner craft-car materials to build elastic-powered cars and compare straight-line distances in a clear lane.",
    "steps": [
      "Gather the listed equipment, review the rules together, and agree on scoring, turn order, and a comfortable time limit.",
      "Use beginner craft-car materials to build elastic-powered cars and compare straight-line distances in a clear lane.",
      "Record the result if you want, rotate roles or sides, and share one tactic you would try in another round."
    ],
    "supplies": [
      "craft"
    ]
  },
  {
    "id": 534,
    "title": "Run a straw-rocket launch",
    "mood": "competitive",
    "cost": 10,
    "time": 60,
    "min": 2,
    "max": 6,
    "icon": "🎲",
    "description": "Make paper rockets for individual straws and compare safe launches away from people and fragile objects.",
    "steps": [
      "Gather the listed equipment, review the rules together, and agree on scoring, turn order, and a comfortable time limit.",
      "Make paper rockets for individual straws and compare safe launches away from people and fragile objects.",
      "Record the result if you want, rotate roles or sides, and share one tactic you would try in another round."
    ],
    "supplies": [
      "paper",
      "craft"
    ]
  },
  {
    "id": 535,
    "title": "Play a paper-chain length challenge",
    "mood": "competitive",
    "cost": 0,
    "time": 30,
    "min": 2,
    "max": 6,
    "icon": "🎲",
    "description": "Give teams equal paper and time and compare the longest chain that can be lifted intact.",
    "steps": [
      "Gather the listed equipment, review the rules together, and agree on scoring, turn order, and a comfortable time limit.",
      "Give teams equal paper and time and compare the longest chain that can be lifted intact.",
      "Record the result if you want, rotate roles or sides, and share one tactic you would try in another round."
    ],
    "supplies": [
      "paper",
      "craft"
    ]
  },
  {
    "id": 536,
    "title": "Run a cardboard-chair design challenge",
    "mood": "competitive",
    "cost": 0,
    "time": 120,
    "min": 2,
    "max": 6,
    "icon": "🎲",
    "description": "Build small model chairs from equal cardboard and test them with safe tabletop loads, never a person's weight.",
    "steps": [
      "Gather the listed equipment, review the rules together, and agree on scoring, turn order, and a comfortable time limit.",
      "Build small model chairs from equal cardboard and test them with safe tabletop loads, never a person's weight.",
      "Record the result if you want, rotate roles or sides, and share one tactic you would try in another round."
    ],
    "supplies": [
      "craft"
    ]
  },
  {
    "id": 537,
    "title": "Play a tangram race",
    "mood": "competitive",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "🎲",
    "description": "Use tangram pieces or paper cutouts and race to match verified silhouettes of similar difficulty.",
    "steps": [
      "Gather the listed equipment, review the rules together, and agree on scoring, turn order, and a comfortable time limit.",
      "Use tangram pieces or paper cutouts and race to match verified silhouettes of similar difficulty.",
      "Record the result if you want, rotate roles or sides, and share one tactic you would try in another round."
    ],
    "supplies": [
      "board",
      "paper"
    ]
  },
  {
    "id": 538,
    "title": "Play a matchstick puzzle set",
    "mood": "competitive",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "🎲",
    "description": "Use unlit craft sticks to solve rearrangement puzzles with a fixed move limit.",
    "steps": [
      "Gather the listed equipment, review the rules together, and agree on scoring, turn order, and a comfortable time limit.",
      "Use unlit craft sticks to solve rearrangement puzzles with a fixed move limit.",
      "Record the result if you want, rotate roles or sides, and share one tactic you would try in another round."
    ],
    "supplies": [
      "household"
    ]
  },
  {
    "id": 539,
    "title": "Solve a nonogram",
    "mood": "competitive",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "🎲",
    "description": "Use a free picture-logic puzzle and fill cells based on the row and column clues.",
    "steps": [
      "Gather the listed equipment, review the rules together, and agree on scoring, turn order, and a comfortable time limit.",
      "Use a free picture-logic puzzle and fill cells based on the row and column clues.",
      "Record the result if you want, rotate roles or sides, and share one tactic you would try in another round."
    ],
    "supplies": [
      "paper",
      "device"
    ]
  },
  {
    "id": 540,
    "title": "Solve a kakuro",
    "mood": "competitive",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "🎲",
    "description": "Fill a beginner number-crossword puzzle using its sum clues and non-repetition rules.",
    "steps": [
      "Gather the listed equipment, review the rules together, and agree on scoring, turn order, and a comfortable time limit.",
      "Fill a beginner number-crossword puzzle using its sum clues and non-repetition rules.",
      "Record the result if you want, rotate roles or sides, and share one tactic you would try in another round."
    ],
    "supplies": [
      "paper",
      "device"
    ]
  },
  {
    "id": 541,
    "title": "Solve a KenKen-style grid",
    "mood": "competitive",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "🎲",
    "description": "Use a freely available arithmetic-cage puzzle and satisfy its row, column, and cage constraints.",
    "steps": [
      "Gather the listed equipment, review the rules together, and agree on scoring, turn order, and a comfortable time limit.",
      "Use a freely available arithmetic-cage puzzle and satisfy its row, column, and cage constraints.",
      "Record the result if you want, rotate roles or sides, and share one tactic you would try in another round."
    ],
    "supplies": [
      "paper",
      "device"
    ]
  },
  {
    "id": 542,
    "title": "Solve a cryptogram",
    "mood": "competitive",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "🎲",
    "description": "Decode a substitution-cipher puzzle by using repeated letters and word patterns.",
    "steps": [
      "Gather the listed equipment, review the rules together, and agree on scoring, turn order, and a comfortable time limit.",
      "Decode a substitution-cipher puzzle by using repeated letters and word patterns.",
      "Record the result if you want, rotate roles or sides, and share one tactic you would try in another round."
    ],
    "supplies": [
      "paper",
      "device"
    ]
  },
  {
    "id": 543,
    "title": "Solve a logic-grid puzzle",
    "mood": "competitive",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "🎲",
    "description": "Use a checked deduction puzzle and mark each possibility until only the solution remains.",
    "steps": [
      "Gather the listed equipment, review the rules together, and agree on scoring, turn order, and a comfortable time limit.",
      "Use a checked deduction puzzle and mark each possibility until only the solution remains.",
      "Record the result if you want, rotate roles or sides, and share one tactic you would try in another round."
    ],
    "supplies": [
      "paper",
      "device"
    ]
  },
  {
    "id": 544,
    "title": "Solve a rebus puzzle round",
    "mood": "competitive",
    "cost": 0,
    "time": 30,
    "min": 2,
    "max": 6,
    "icon": "🎲",
    "description": "Take turns interpreting visual word arrangements and explain how each answer fits.",
    "steps": [
      "Gather the listed equipment, review the rules together, and agree on scoring, turn order, and a comfortable time limit.",
      "Take turns interpreting visual word arrangements and explain how each answer fits.",
      "Record the result if you want, rotate roles or sides, and share one tactic you would try in another round."
    ],
    "supplies": [
      "paper",
      "device"
    ]
  },
  {
    "id": 545,
    "title": "Play a word-ladder challenge",
    "mood": "competitive",
    "cost": 0,
    "time": 30,
    "min": 1,
    "max": 6,
    "icon": "🎲",
    "description": "Change one letter at a time between two equal-length words while keeping every intermediate word valid.",
    "steps": [
      "Gather the listed equipment, review the rules together, and agree on scoring, turn order, and a comfortable time limit.",
      "Change one letter at a time between two equal-length words while keeping every intermediate word valid.",
      "Record the result if you want, rotate roles or sides, and share one tactic you would try in another round."
    ],
    "supplies": [
      "paper"
    ]
  },
  {
    "id": 546,
    "title": "Play a last-letter word chain",
    "mood": "competitive",
    "cost": 0,
    "time": 30,
    "min": 2,
    "max": 6,
    "icon": "🎲",
    "description": "Name a word beginning with the previous word's last letter and agree on categories and repeat rules.",
    "steps": [
      "Gather the listed equipment, review the rules together, and agree on scoring, turn order, and a comfortable time limit.",
      "Name a word beginning with the previous word's last letter and agree on categories and repeat rules.",
      "Record the result if you want, rotate roles or sides, and share one tactic you would try in another round."
    ],
    "supplies": [
      "paper"
    ]
  },
  {
    "id": 547,
    "title": "Play a connect-the-concepts game",
    "mood": "competitive",
    "cost": 0,
    "time": 30,
    "min": 2,
    "max": 6,
    "icon": "🎲",
    "description": "Write unrelated concepts and compete to explain a clear chain of connections in the fewest justified steps.",
    "steps": [
      "Gather the listed equipment, review the rules together, and agree on scoring, turn order, and a comfortable time limit.",
      "Write unrelated concepts and compete to explain a clear chain of connections in the fewest justified steps.",
      "Record the result if you want, rotate roles or sides, and share one tactic you would try in another round."
    ],
    "supplies": [
      "paper"
    ]
  },
  {
    "id": 548,
    "title": "Play a timed mental-math relay",
    "mood": "competitive",
    "cost": 0,
    "time": 30,
    "min": 2,
    "max": 6,
    "icon": "🎲",
    "description": "Prepare checked arithmetic questions at a shared difficulty and rotate one question per player through equal rounds.",
    "steps": [
      "Gather the listed equipment, review the rules together, and agree on scoring, turn order, and a comfortable time limit.",
      "Prepare checked arithmetic questions at a shared difficulty and rotate one question per player through equal rounds.",
      "Record the result if you want, rotate roles or sides, and share one tactic you would try in another round."
    ],
    "supplies": [
      "paper"
    ]
  },
  {
    "id": 549,
    "title": "Play a cooperative code-breaking game",
    "mood": "competitive",
    "cost": 0,
    "time": 60,
    "min": 2,
    "max": 6,
    "icon": "🎲",
    "description": "Have a host prepare a solvable substitution code with graduated hints and work together against a shared timer.",
    "steps": [
      "Gather the listed equipment, review the rules together, and agree on scoring, turn order, and a comfortable time limit.",
      "Have a host prepare a solvable substitution code with graduated hints and work together against a shared timer.",
      "Record the result if you want, rotate roles or sides, and share one tactic you would try in another round."
    ],
    "supplies": [
      "paper"
    ]
  },
  {
    "id": 550,
    "title": "Try an archery introduction",
    "mood": "adventure",
    "cost": 25,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🎟️",
    "description": "Book a supervised beginner session within budget and use only the range equipment and procedures provided.",
    "steps": [
      "Find an official public listing; confirm current prices, availability, access requirements, and what equipment is included before committing.",
      "Book a supervised beginner session within budget and use only the range equipment and procedures provided.",
      "Afterward, share one thing you learned or enjoyed and note whether you would like to return."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 551,
    "title": "Try an axe-throwing introduction",
    "mood": "adventure",
    "cost": 25,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🎟️",
    "description": "Choose an approved supervised venue, confirm all fees and age requirements, and follow the instructor's procedures.",
    "steps": [
      "Find an official public listing; confirm current prices, availability, access requirements, and what equipment is included before committing.",
      "Choose an approved supervised venue, confirm all fees and age requirements, and follow the instructor's procedures.",
      "Afterward, share one thing you learned or enjoyed and note whether you would like to return."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 552,
    "title": "Try a fencing introduction",
    "mood": "adventure",
    "cost": 25,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🎟️",
    "description": "Attend a beginner taster session with supplied protective equipment and follow the coach's drills.",
    "steps": [
      "Find an official public listing; confirm current prices, availability, access requirements, and what equipment is included before committing.",
      "Attend a beginner taster session with supplied protective equipment and follow the coach's drills.",
      "Afterward, share one thing you learned or enjoyed and note whether you would like to return."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 553,
    "title": "Try a martial-arts taster class",
    "mood": "adventure",
    "cost": 25,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🎟️",
    "description": "Book a beginner non-contact introduction and participate only in movements suited to your abilities.",
    "steps": [
      "Find an official public listing; confirm current prices, availability, access requirements, and what equipment is included before committing.",
      "Book a beginner non-contact introduction and participate only in movements suited to your abilities.",
      "Afterward, share one thing you learned or enjoyed and note whether you would like to return."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 554,
    "title": "Try a beginner rowing session",
    "mood": "adventure",
    "cost": 25,
    "time": 120,
    "min": 1,
    "max": 6,
    "icon": "🎟️",
    "description": "Join a supervised introduction and follow the club's equipment and water-safety requirements.",
    "steps": [
      "Find an official public listing; confirm current prices, availability, access requirements, and what equipment is included before committing.",
      "Join a supervised introduction and follow the club's equipment and water-safety requirements.",
      "Afterward, share one thing you learned or enjoyed and note whether you would like to return."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 555,
    "title": "Try a sailing taster session",
    "mood": "adventure",
    "cost": 25,
    "time": 120,
    "min": 1,
    "max": 6,
    "icon": "🎟️",
    "description": "Find a supervised beginner session within budget and follow the operator's briefing and flotation requirements.",
    "steps": [
      "Find an official public listing; confirm current prices, availability, access requirements, and what equipment is included before committing.",
      "Find a supervised beginner session within budget and follow the operator's briefing and flotation requirements.",
      "Afterward, share one thing you learned or enjoyed and note whether you would like to return."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 556,
    "title": "Try stand-up paddleboarding",
    "mood": "adventure",
    "cost": 25,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🎟️",
    "description": "Choose a supervised beginner session in suitable conditions and follow the operator's safety instructions.",
    "steps": [
      "Find an official public listing; confirm current prices, availability, access requirements, and what equipment is included before committing.",
      "Choose a supervised beginner session in suitable conditions and follow the operator's safety instructions.",
      "Afterward, share one thing you learned or enjoyed and note whether you would like to return."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 557,
    "title": "Try a canoe skills session",
    "mood": "adventure",
    "cost": 25,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🎟️",
    "description": "Use a managed beginner session to practice getting in, steering, and stopping with the required equipment.",
    "steps": [
      "Find an official public listing; confirm current prices, availability, access requirements, and what equipment is included before committing.",
      "Use a managed beginner session to practice getting in, steering, and stopping with the required equipment.",
      "Afterward, share one thing you learned or enjoyed and note whether you would like to return."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 558,
    "title": "Take a surf lesson",
    "mood": "adventure",
    "cost": 25,
    "time": 120,
    "min": 1,
    "max": 6,
    "icon": "🎟️",
    "description": "Book a beginner lesson only if the full equipment and instruction cost fits your budget and follow the instructor's guidance.",
    "steps": [
      "Find an official public listing; confirm current prices, availability, access requirements, and what equipment is included before committing.",
      "Book a beginner lesson only if the full equipment and instruction cost fits your budget and follow the instructor's guidance.",
      "Afterward, share one thing you learned or enjoyed and note whether you would like to return."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 559,
    "title": "Try snorkeling in a managed session",
    "mood": "adventure",
    "cost": 25,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🎟️",
    "description": "Use an approved supervised session with suitable equipment and stay within the operator's designated area.",
    "steps": [
      "Find an official public listing; confirm current prices, availability, access requirements, and what equipment is included before committing.",
      "Use an approved supervised session with suitable equipment and stay within the operator's designated area.",
      "Afterward, share one thing you learned or enjoyed and note whether you would like to return."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 560,
    "title": "Try an indoor ski simulator",
    "mood": "adventure",
    "cost": 25,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🎟️",
    "description": "Check for an introductory session within budget and follow all equipment and instructor guidance.",
    "steps": [
      "Find an official public listing; confirm current prices, availability, access requirements, and what equipment is included before committing.",
      "Check for an introductory session within budget and follow all equipment and instructor guidance.",
      "Afterward, share one thing you learned or enjoyed and note whether you would like to return."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 561,
    "title": "Try a supervised ropes course",
    "mood": "adventure",
    "cost": 25,
    "time": 120,
    "min": 1,
    "max": 6,
    "icon": "🎟️",
    "description": "Choose a beginner course within budget and complete the operator's required briefing and equipment checks.",
    "steps": [
      "Find an official public listing; confirm current prices, availability, access requirements, and what equipment is included before committing.",
      "Choose a beginner course within budget and complete the operator's required briefing and equipment checks.",
      "Afterward, share one thing you learned or enjoyed and note whether you would like to return."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 562,
    "title": "Try an indoor obstacle course",
    "mood": "adventure",
    "cost": 25,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🎟️",
    "description": "Book a session with obstacles appropriate to your ability and follow the venue's staff instructions.",
    "steps": [
      "Find an official public listing; confirm current prices, availability, access requirements, and what equipment is included before committing.",
      "Book a session with obstacles appropriate to your ability and follow the venue's staff instructions.",
      "Afterward, share one thing you learned or enjoyed and note whether you would like to return."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 563,
    "title": "Visit a public splash pad",
    "mood": "adventure",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "🎟️",
    "description": "Check operating hours and local rules and enjoy the designated water-play area without bringing glass containers.",
    "steps": [
      "Find an official public listing; confirm current prices, availability, access requirements, and what equipment is included before committing.",
      "Check operating hours and local rules and enjoy the designated water-play area without bringing glass containers.",
      "Afterward, share one thing you learned or enjoyed and note whether you would like to return."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 564,
    "title": "Watch a rowing regatta",
    "mood": "adventure",
    "cost": 0,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🎟️",
    "description": "Find a free public spectator area and follow the race schedule from a safe designated viewpoint.",
    "steps": [
      "Find an official public listing; confirm current prices, availability, access requirements, and what equipment is included before committing.",
      "Find a free public spectator area and follow the race schedule from a safe designated viewpoint.",
      "Afterward, share one thing you learned or enjoyed and note whether you would like to return."
    ],
    "supplies": [
      "venue",
      "outdoor"
    ]
  },
  {
    "id": 565,
    "title": "Watch a cycling criterium",
    "mood": "adventure",
    "cost": 0,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🎟️",
    "description": "Choose a free spectator location behind official barriers and learn how the lap format works.",
    "steps": [
      "Find an official public listing; confirm current prices, availability, access requirements, and what equipment is included before committing.",
      "Choose a free spectator location behind official barriers and learn how the lap format works.",
      "Afterward, share one thing you learned or enjoyed and note whether you would like to return."
    ],
    "supplies": [
      "venue",
      "outdoor"
    ]
  },
  {
    "id": 566,
    "title": "Watch a track meet",
    "mood": "adventure",
    "cost": 0,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🎟️",
    "description": "Find a public event with free spectator access and compare several different running or field events.",
    "steps": [
      "Find an official public listing; confirm current prices, availability, access requirements, and what equipment is included before committing.",
      "Find a public event with free spectator access and compare several different running or field events.",
      "Afterward, share one thing you learned or enjoyed and note whether you would like to return."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 567,
    "title": "Watch a sailing race from shore",
    "mood": "adventure",
    "cost": 0,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🌿",
    "description": "Use a permitted public shoreline viewpoint and observe the course and boats without entering restricted areas.",
    "steps": [
      "Check weather and public access, bring suitable essentials, and choose a route or space appropriate for everyone.",
      "Use a permitted public shoreline viewpoint and observe the course and boats without entering restricted areas.",
      "Leave the area as you found it and compare a favorite observation before heading back."
    ],
    "supplies": [
      "outdoor"
    ]
  },
  {
    "id": 568,
    "title": "Attend a kite festival",
    "mood": "adventure",
    "cost": 0,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🎟️",
    "description": "Find a confirmed free-entry festival and watch from designated public areas clear of kite lines.",
    "steps": [
      "Find an official public listing; confirm current prices, availability, access requirements, and what equipment is included before committing.",
      "Find a confirmed free-entry festival and watch from designated public areas clear of kite lines.",
      "Afterward, share one thing you learned or enjoyed and note whether you would like to return."
    ],
    "supplies": [
      "venue",
      "outdoor"
    ]
  },
  {
    "id": 569,
    "title": "Watch a model-aircraft demonstration",
    "mood": "adventure",
    "cost": 0,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🎟️",
    "description": "Attend an officially advertised free demonstration and remain behind the designated spectator line.",
    "steps": [
      "Find an official public listing; confirm current prices, availability, access requirements, and what equipment is included before committing.",
      "Attend an officially advertised free demonstration and remain behind the designated spectator line.",
      "Afterward, share one thing you learned or enjoyed and note whether you would like to return."
    ],
    "supplies": [
      "venue",
      "outdoor"
    ]
  },
  {
    "id": 570,
    "title": "Attend a public garden workshop",
    "mood": "adventure",
    "cost": 0,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🎟️",
    "description": "Choose a free scheduled workshop and learn one seasonal plant-care technique from the organizer.",
    "steps": [
      "Find an official public listing; confirm current prices, availability, access requirements, and what equipment is included before committing.",
      "Choose a free scheduled workshop and learn one seasonal plant-care technique from the organizer.",
      "Afterward, share one thing you learned or enjoyed and note whether you would like to return."
    ],
    "supplies": [
      "venue",
      "plants"
    ]
  },
  {
    "id": 571,
    "title": "Attend a tree-identification outing",
    "mood": "adventure",
    "cost": 0,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🎟️",
    "description": "Join a free guided public session and compare bark, leaf, and branching features without collecting material.",
    "steps": [
      "Find an official public listing; confirm current prices, availability, access requirements, and what equipment is included before committing.",
      "Join a free guided public session and compare bark, leaf, and branching features without collecting material.",
      "Afterward, share one thing you learned or enjoyed and note whether you would like to return."
    ],
    "supplies": [
      "venue",
      "outdoor"
    ]
  },
  {
    "id": 572,
    "title": "Attend a bird-banding demonstration",
    "mood": "adventure",
    "cost": 0,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🎟️",
    "description": "Visit a permitted public demonstration run by qualified organizers and observe without touching equipment or wildlife.",
    "steps": [
      "Find an official public listing; confirm current prices, availability, access requirements, and what equipment is included before committing.",
      "Visit a permitted public demonstration run by qualified organizers and observe without touching equipment or wildlife.",
      "Afterward, share one thing you learned or enjoyed and note whether you would like to return."
    ],
    "supplies": [
      "venue",
      "outdoor"
    ]
  },
  {
    "id": 573,
    "title": "Join a butterfly survey walk",
    "mood": "adventure",
    "cost": 0,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🎟️",
    "description": "Take part in an organized public observation session and record sightings according to its instructions.",
    "steps": [
      "Find an official public listing; confirm current prices, availability, access requirements, and what equipment is included before committing.",
      "Take part in an organized public observation session and record sightings according to its instructions.",
      "Afterward, share one thing you learned or enjoyed and note whether you would like to return."
    ],
    "supplies": [
      "venue",
      "outdoor"
    ]
  },
  {
    "id": 574,
    "title": "Join a citizen-science observation event",
    "mood": "adventure",
    "cost": 0,
    "time": 120,
    "min": 1,
    "max": 6,
    "icon": "🎟️",
    "description": "Choose an established public project and follow its identification and data-quality guidance when making observations.",
    "steps": [
      "Find an official public listing; confirm current prices, availability, access requirements, and what equipment is included before committing.",
      "Choose an established public project and follow its identification and data-quality guidance when making observations.",
      "Afterward, share one thing you learned or enjoyed and note whether you would like to return."
    ],
    "supplies": [
      "venue",
      "outdoor"
    ]
  },
  {
    "id": 575,
    "title": "Visit a wildlife rehabilitation open day",
    "mood": "adventure",
    "cost": 10,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🎟️",
    "description": "Check visitor access and donation or admission requirements and follow staff instructions around animals.",
    "steps": [
      "Find an official public listing; confirm current prices, availability, access requirements, and what equipment is included before committing.",
      "Check visitor access and donation or admission requirements and follow staff instructions around animals.",
      "Afterward, share one thing you learned or enjoyed and note whether you would like to return."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 576,
    "title": "Visit a fish hatchery visitor area",
    "mood": "adventure",
    "cost": 10,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🎟️",
    "description": "Choose an officially open visitor facility and learn about the species and stages displayed.",
    "steps": [
      "Find an official public listing; confirm current prices, availability, access requirements, and what equipment is included before committing.",
      "Choose an officially open visitor facility and learn about the species and stages displayed.",
      "Afterward, share one thing you learned or enjoyed and note whether you would like to return."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 577,
    "title": "Visit a dam visitor center",
    "mood": "adventure",
    "cost": 10,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🎟️",
    "description": "Confirm public access and security procedures and explore the authorized exhibits or guided route.",
    "steps": [
      "Find an official public listing; confirm current prices, availability, access requirements, and what equipment is included before committing.",
      "Confirm public access and security procedures and explore the authorized exhibits or guided route.",
      "Afterward, share one thing you learned or enjoyed and note whether you would like to return."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 578,
    "title": "Tour a water-treatment visitor facility",
    "mood": "adventure",
    "cost": 0,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🎟️",
    "description": "Book an official public tour where offered and follow all access and hygiene instructions.",
    "steps": [
      "Find an official public listing; confirm current prices, availability, access requirements, and what equipment is included before committing.",
      "Book an official public tour where offered and follow all access and hygiene instructions.",
      "Afterward, share one thing you learned or enjoyed and note whether you would like to return."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 579,
    "title": "Tour a recycling education center",
    "mood": "adventure",
    "cost": 0,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🎟️",
    "description": "Arrange an authorized public visit and learn how local materials are sorted and processed.",
    "steps": [
      "Find an official public listing; confirm current prices, availability, access requirements, and what equipment is included before committing.",
      "Arrange an authorized public visit and learn how local materials are sorted and processed.",
      "Afterward, share one thing you learned or enjoyed and note whether you would like to return."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 580,
    "title": "Tour a public radio station",
    "mood": "adventure",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "🎟️",
    "description": "Find a scheduled open house or public tour and observe broadcasting without interrupting staff.",
    "steps": [
      "Find an official public listing; confirm current prices, availability, access requirements, and what equipment is included before committing.",
      "Find a scheduled open house or public tour and observe broadcasting without interrupting staff.",
      "Afterward, share one thing you learned or enjoyed and note whether you would like to return."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 581,
    "title": "Visit a public television open house",
    "mood": "adventure",
    "cost": 0,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🎟️",
    "description": "Attend an advertised visitor event and explore only the areas staff open to the public.",
    "steps": [
      "Find an official public listing; confirm current prices, availability, access requirements, and what equipment is included before committing.",
      "Attend an advertised visitor event and explore only the areas staff open to the public.",
      "Afterward, share one thing you learned or enjoyed and note whether you would like to return."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 582,
    "title": "Tour a theater backstage",
    "mood": "adventure",
    "cost": 25,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🎟️",
    "description": "Book an official tour and learn how scenery, lighting, and stage management support performances.",
    "steps": [
      "Find an official public listing; confirm current prices, availability, access requirements, and what equipment is included before committing.",
      "Book an official tour and learn how scenery, lighting, and stage management support performances.",
      "Afterward, share one thing you learned or enjoyed and note whether you would like to return."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 583,
    "title": "Tour a concert hall",
    "mood": "adventure",
    "cost": 25,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🎟️",
    "description": "Choose an authorized visitor tour and compare the stage, audience layout, and acoustic design.",
    "steps": [
      "Find an official public listing; confirm current prices, availability, access requirements, and what equipment is included before committing.",
      "Choose an authorized visitor tour and compare the stage, audience layout, and acoustic design.",
      "Afterward, share one thing you learned or enjoyed and note whether you would like to return."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 584,
    "title": "Tour a stadium",
    "mood": "adventure",
    "cost": 25,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🎟️",
    "description": "Check official tour prices and access and follow the guide through permitted parts of the facility.",
    "steps": [
      "Find an official public listing; confirm current prices, availability, access requirements, and what equipment is included before committing.",
      "Check official tour prices and access and follow the guide through permitted parts of the facility.",
      "Afterward, share one thing you learned or enjoyed and note whether you would like to return."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 585,
    "title": "Tour a railway museum",
    "mood": "adventure",
    "cost": 25,
    "time": 120,
    "min": 1,
    "max": 6,
    "icon": "🎟️",
    "description": "Visit an open museum and explore preserved railway equipment using designated access routes.",
    "steps": [
      "Find an official public listing; confirm current prices, availability, access requirements, and what equipment is included before committing.",
      "Visit an open museum and explore preserved railway equipment using designated access routes.",
      "Afterward, share one thing you learned or enjoyed and note whether you would like to return."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 586,
    "title": "Visit an aviation museum",
    "mood": "adventure",
    "cost": 25,
    "time": 120,
    "min": 1,
    "max": 6,
    "icon": "🎟️",
    "description": "Check admission and explore exhibits showing how different aircraft were designed and used.",
    "steps": [
      "Find an official public listing; confirm current prices, availability, access requirements, and what equipment is included before committing.",
      "Check admission and explore exhibits showing how different aircraft were designed and used.",
      "Afterward, share one thing you learned or enjoyed and note whether you would like to return."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 587,
    "title": "Visit a maritime museum",
    "mood": "adventure",
    "cost": 25,
    "time": 120,
    "min": 1,
    "max": 6,
    "icon": "🎟️",
    "description": "Explore a visitor museum's models, vessels, and navigation exhibits within its posted access rules.",
    "steps": [
      "Find an official public listing; confirm current prices, availability, access requirements, and what equipment is included before committing.",
      "Explore a visitor museum's models, vessels, and navigation exhibits within its posted access rules.",
      "Afterward, share one thing you learned or enjoyed and note whether you would like to return."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 588,
    "title": "Visit a transport heritage depot",
    "mood": "adventure",
    "cost": 10,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🎟️",
    "description": "Attend an official open day and compare preserved vehicles without entering closed work areas.",
    "steps": [
      "Find an official public listing; confirm current prices, availability, access requirements, and what equipment is included before committing.",
      "Attend an official open day and compare preserved vehicles without entering closed work areas.",
      "Afterward, share one thing you learned or enjoyed and note whether you would like to return."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 589,
    "title": "Visit a lighthouse visitor site",
    "mood": "adventure",
    "cost": 25,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🎟️",
    "description": "Check opening hours and stair or access requirements and follow the official visitor route.",
    "steps": [
      "Find an official public listing; confirm current prices, availability, access requirements, and what equipment is included before committing.",
      "Check opening hours and stair or access requirements and follow the official visitor route.",
      "Afterward, share one thing you learned or enjoyed and note whether you would like to return."
    ],
    "supplies": [
      "venue",
      "outdoor"
    ]
  },
  {
    "id": 590,
    "title": "Visit a windmill heritage site",
    "mood": "adventure",
    "cost": 10,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🎟️",
    "description": "Choose an authorized visitor opening and learn how wind power drives its mechanism.",
    "steps": [
      "Find an official public listing; confirm current prices, availability, access requirements, and what equipment is included before committing.",
      "Choose an authorized visitor opening and learn how wind power drives its mechanism.",
      "Afterward, share one thing you learned or enjoyed and note whether you would like to return."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 591,
    "title": "Visit a working watermill",
    "mood": "adventure",
    "cost": 10,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🎟️",
    "description": "Join an official visitor session and observe the machinery only from permitted areas.",
    "steps": [
      "Find an official public listing; confirm current prices, availability, access requirements, and what equipment is included before committing.",
      "Join an official visitor session and observe the machinery only from permitted areas.",
      "Afterward, share one thing you learned or enjoyed and note whether you would like to return."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 592,
    "title": "Tour a chocolate-making workshop",
    "mood": "adventure",
    "cost": 25,
    "time": 120,
    "min": 1,
    "max": 6,
    "icon": "🎟️",
    "description": "Choose a public demonstration or taster within budget and check ingredients before sampling.",
    "steps": [
      "Find an official public listing; confirm current prices, availability, access requirements, and what equipment is included before committing.",
      "Choose a public demonstration or taster within budget and check ingredients before sampling.",
      "Afterward, share one thing you learned or enjoyed and note whether you would like to return."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 593,
    "title": "Tour a coffee roastery",
    "mood": "adventure",
    "cost": 25,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🎟️",
    "description": "Find an official public tour and learn how roast time and temperature affect the beans.",
    "steps": [
      "Find an official public listing; confirm current prices, availability, access requirements, and what equipment is included before committing.",
      "Find an official public tour and learn how roast time and temperature affect the beans.",
      "Afterward, share one thing you learned or enjoyed and note whether you would like to return."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 594,
    "title": "Tour a tea-blending workshop",
    "mood": "adventure",
    "cost": 25,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🎟️",
    "description": "Book a suitable introductory session and learn how the host combines teas and permitted flavorings.",
    "steps": [
      "Find an official public listing; confirm current prices, availability, access requirements, and what equipment is included before committing.",
      "Book a suitable introductory session and learn how the host combines teas and permitted flavorings.",
      "Afterward, share one thing you learned or enjoyed and note whether you would like to return."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 595,
    "title": "Visit a pottery studio open day",
    "mood": "adventure",
    "cost": 0,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🎟️",
    "description": "Attend a free open studio event and observe demonstrations without using tools unless invited.",
    "steps": [
      "Find an official public listing; confirm current prices, availability, access requirements, and what equipment is included before committing.",
      "Attend a free open studio event and observe demonstrations without using tools unless invited.",
      "Afterward, share one thing you learned or enjoyed and note whether you would like to return."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 596,
    "title": "Visit a glass-art demonstration",
    "mood": "adventure",
    "cost": 25,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🎟️",
    "description": "Watch a professional demonstration from the designated viewing area and follow all distance rules.",
    "steps": [
      "Find an official public listing; confirm current prices, availability, access requirements, and what equipment is included before committing.",
      "Watch a professional demonstration from the designated viewing area and follow all distance rules.",
      "Afterward, share one thing you learned or enjoyed and note whether you would like to return."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 597,
    "title": "Visit a printmaking studio open house",
    "mood": "adventure",
    "cost": 0,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🎟️",
    "description": "Find a confirmed free visitor session and learn how a print moves from plate to paper.",
    "steps": [
      "Find an official public listing; confirm current prices, availability, access requirements, and what equipment is included before committing.",
      "Find a confirmed free visitor session and learn how a print moves from plate to paper.",
      "Afterward, share one thing you learned or enjoyed and note whether you would like to return."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 598,
    "title": "Attend a local film festival screening",
    "mood": "adventure",
    "cost": 25,
    "time": 120,
    "min": 1,
    "max": 6,
    "icon": "🎟️",
    "description": "Choose a ticketed short-film program within budget and compare the filmmakers' approaches afterward.",
    "steps": [
      "Find an official public listing; confirm current prices, availability, access requirements, and what equipment is included before committing.",
      "Choose a ticketed short-film program within budget and compare the filmmakers' approaches afterward.",
      "Afterward, share one thing you learned or enjoyed and note whether you would like to return."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 599,
    "title": "Attend a public dance performance",
    "mood": "adventure",
    "cost": 25,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🎟️",
    "description": "Check the program and ticket price and watch how choreography, music, and staging work together.",
    "steps": [
      "Find an official public listing; confirm current prices, availability, access requirements, and what equipment is included before committing.",
      "Check the program and ticket price and watch how choreography, music, and staging work together.",
      "Afterward, share one thing you learned or enjoyed and note whether you would like to return."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 600,
    "title": "Learn a few fingerspelling letters",
    "mood": "creative",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "💻",
    "description": "Use a reputable resource for the sign language you choose and practice a small set of manual alphabet letters without assuming sign languages are universal.",
    "steps": [
      "Choose tools you already own or a suitable free tool, and work on a copy or harmless sample rather than irreplaceable files.",
      "Use a reputable resource for the sign language you choose and practice a small set of manual alphabet letters without assuming sign languages are universal.",
      "Test or review the result, save your work with a clear name, and note one improvement for next time."
    ],
    "supplies": [
      "device"
    ]
  },
  {
    "id": 601,
    "title": "Learn to read a few braille cells",
    "mood": "creative",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "💻",
    "description": "Use an introductory literacy resource to understand the six-dot cell and identify a few printed or tactile examples.",
    "steps": [
      "Choose tools you already own or a suitable free tool, and work on a copy or harmless sample rather than irreplaceable files.",
      "Use an introductory literacy resource to understand the six-dot cell and identify a few printed or tactile examples.",
      "Test or review the result, save your work with a clear name, and note one improvement for next time."
    ],
    "supplies": [
      "paper",
      "device"
    ]
  },
  {
    "id": 602,
    "title": "Learn basic Morse code",
    "mood": "creative",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "💻",
    "description": "Practice encoding and decoding short harmless messages using a verified dot-and-dash alphabet.",
    "steps": [
      "Choose tools you already own or a suitable free tool, and work on a copy or harmless sample rather than irreplaceable files.",
      "Practice encoding and decoding short harmless messages using a verified dot-and-dash alphabet.",
      "Test or review the result, save your work with a clear name, and note one improvement for next time."
    ],
    "supplies": [
      "paper",
      "device"
    ]
  },
  {
    "id": 603,
    "title": "Practice dictionary pronunciation symbols",
    "mood": "creative",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "💻",
    "description": "Choose a dictionary's pronunciation guide and use its examples to decode several unfamiliar words.",
    "steps": [
      "Choose tools you already own or a suitable free tool, and work on a copy or harmless sample rather than irreplaceable files.",
      "Choose a dictionary's pronunciation guide and use its examples to decode several unfamiliar words.",
      "Test or review the result, save your work with a clear name, and note one improvement for next time."
    ],
    "supplies": [
      "books",
      "device"
    ]
  },
  {
    "id": 604,
    "title": "Learn a short tongue twister",
    "mood": "creative",
    "cost": 0,
    "time": 30,
    "min": 1,
    "max": 6,
    "icon": "💻",
    "description": "Choose a phrase in a language you know and practice clear slow pronunciation before increasing speed.",
    "steps": [
      "Choose tools you already own or a suitable free tool, and work on a copy or harmless sample rather than irreplaceable files.",
      "Choose a phrase in a language you know and practice clear slow pronunciation before increasing speed.",
      "Test or review the result, save your work with a clear name, and note one improvement for next time."
    ],
    "supplies": [
      "books",
      "device"
    ]
  },
  {
    "id": 605,
    "title": "Learn a greeting in a new language",
    "mood": "creative",
    "cost": 0,
    "time": 30,
    "min": 1,
    "max": 6,
    "icon": "💻",
    "description": "Use a reputable audio resource to practice a greeting and its appropriate context rather than relying only on spelling.",
    "steps": [
      "Choose tools you already own or a suitable free tool, and work on a copy or harmless sample rather than irreplaceable files.",
      "Use a reputable audio resource to practice a greeting and its appropriate context rather than relying only on spelling.",
      "Test or review the result, save your work with a clear name, and note one improvement for next time."
    ],
    "supplies": [
      "device"
    ]
  },
  {
    "id": 606,
    "title": "Practice reading a simple music score",
    "mood": "creative",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "✏️",
    "description": "Use a beginner guide to identify note names and rhythms and try a short melody on an available instrument.",
    "steps": [
      "Gather the listed materials and choose a beginner guide if the technique is new; prepare a clear protected workspace.",
      "Use a beginner guide to identify note names and rhythms and try a short melody on an available instrument.",
      "Review your finished result or progress, allow any extra drying or curing time, and put tools and materials away."
    ],
    "supplies": [
      "paper",
      "instrument"
    ]
  },
  {
    "id": 607,
    "title": "Learn a basic drum rhythm",
    "mood": "creative",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "✏️",
    "description": "Tap a steady beat on a suitable soft surface and layer a simple repeating rhythm without disturbing neighbors.",
    "steps": [
      "Gather the listed materials and choose a beginner guide if the technique is new; prepare a clear protected workspace.",
      "Tap a steady beat on a suitable soft surface and layer a simple repeating rhythm without disturbing neighbors.",
      "Review your finished result or progress, allow any extra drying or curing time, and put tools and materials away."
    ],
    "supplies": [
      "household"
    ]
  },
  {
    "id": 608,
    "title": "Practice a recorder melody",
    "mood": "creative",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "✏️",
    "description": "Use your own recorder and a beginner fingering guide to learn a short tune at a comfortable volume.",
    "steps": [
      "Gather the listed materials and choose a beginner guide if the technique is new; prepare a clear protected workspace.",
      "Use your own recorder and a beginner fingering guide to learn a short tune at a comfortable volume.",
      "Review your finished result or progress, allow any extra drying or curing time, and put tools and materials away."
    ],
    "supplies": [
      "instrument"
    ]
  },
  {
    "id": 609,
    "title": "Learn a ukulele chord change",
    "mood": "creative",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "✏️",
    "description": "Use your own instrument and a reliable fingering chart to move slowly between two beginner chords.",
    "steps": [
      "Gather the listed materials and choose a beginner guide if the technique is new; prepare a clear protected workspace.",
      "Use your own instrument and a reliable fingering chart to move slowly between two beginner chords.",
      "Review your finished result or progress, allow any extra drying or curing time, and put tools and materials away."
    ],
    "supplies": [
      "instrument"
    ]
  },
  {
    "id": 610,
    "title": "Practice a harmonica phrase",
    "mood": "creative",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "✏️",
    "description": "Use your own harmonica and a beginner guide to play a short clear phrase without sharing mouthpieces.",
    "steps": [
      "Gather the listed materials and choose a beginner guide if the technique is new; prepare a clear protected workspace.",
      "Use your own harmonica and a beginner guide to play a short clear phrase without sharing mouthpieces.",
      "Review your finished result or progress, allow any extra drying or curing time, and put tools and materials away."
    ],
    "supplies": [
      "instrument"
    ]
  },
  {
    "id": 611,
    "title": "Learn basic beatboxing",
    "mood": "creative",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "💻",
    "description": "Follow a beginner tutorial and practice a few comfortable percussive mouth sounds in a simple rhythm.",
    "steps": [
      "Choose tools you already own or a suitable free tool, and work on a copy or harmless sample rather than irreplaceable files.",
      "Follow a beginner tutorial and practice a few comfortable percussive mouth sounds in a simple rhythm.",
      "Test or review the result, save your work with a clear name, and note one improvement for next time."
    ],
    "supplies": [
      "device"
    ]
  },
  {
    "id": 612,
    "title": "Practice juggling scarves",
    "mood": "creative",
    "cost": 10,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "✏️",
    "description": "Use three lightweight scarves in a clear space to practice a slow alternating cascade.",
    "steps": [
      "Gather the listed materials and choose a beginner guide if the technique is new; prepare a clear protected workspace.",
      "Use three lightweight scarves in a clear space to practice a slow alternating cascade.",
      "Review your finished result or progress, allow any extra drying or curing time, and put tools and materials away."
    ],
    "supplies": [
      "household"
    ]
  },
  {
    "id": 613,
    "title": "Practice a three-ball juggle",
    "mood": "creative",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "✏️",
    "description": "Use soft juggling balls and progress from one-ball throws to a controlled three-ball pattern.",
    "steps": [
      "Gather the listed materials and choose a beginner guide if the technique is new; prepare a clear protected workspace.",
      "Use soft juggling balls and progress from one-ball throws to a controlled three-ball pattern.",
      "Review your finished result or progress, allow any extra drying or curing time, and put tools and materials away."
    ],
    "supplies": [
      "sports"
    ]
  },
  {
    "id": 614,
    "title": "Learn a coin roll",
    "mood": "creative",
    "cost": 0,
    "time": 30,
    "min": 1,
    "max": 6,
    "icon": "✏️",
    "description": "Practice moving a large coin across your fingers over a soft surface so drops are easy to retrieve.",
    "steps": [
      "Gather the listed materials and choose a beginner guide if the technique is new; prepare a clear protected workspace.",
      "Practice moving a large coin across your fingers over a soft surface so drops are easy to retrieve.",
      "Review your finished result or progress, allow any extra drying or curing time, and put tools and materials away."
    ],
    "supplies": [
      "household"
    ]
  },
  {
    "id": 615,
    "title": "Practice a pen-spinning move",
    "mood": "creative",
    "cost": 0,
    "time": 30,
    "min": 1,
    "max": 6,
    "icon": "✏️",
    "description": "Use a capped ordinary pen in a clear area to learn one controlled beginner rotation.",
    "steps": [
      "Gather the listed materials and choose a beginner guide if the technique is new; prepare a clear protected workspace.",
      "Use a capped ordinary pen in a clear area to learn one controlled beginner rotation.",
      "Review your finished result or progress, allow any extra drying or curing time, and put tools and materials away."
    ],
    "supplies": [
      "household"
    ]
  },
  {
    "id": 616,
    "title": "Learn a deck shuffle",
    "mood": "creative",
    "cost": 0,
    "time": 30,
    "min": 1,
    "max": 6,
    "icon": "✏️",
    "description": "Practice an overhand shuffle and a careful tabletop shuffle without bending borrowed cards.",
    "steps": [
      "Gather the listed materials and choose a beginner guide if the technique is new; prepare a clear protected workspace.",
      "Practice an overhand shuffle and a careful tabletop shuffle without bending borrowed cards.",
      "Review your finished result or progress, allow any extra drying or curing time, and put tools and materials away."
    ],
    "supplies": [
      "cards"
    ]
  },
  {
    "id": 617,
    "title": "Learn to fan playing cards",
    "mood": "creative",
    "cost": 0,
    "time": 30,
    "min": 1,
    "max": 6,
    "icon": "✏️",
    "description": "Use an owned deck and practice spreading the cards into an even fan with controlled hand pressure.",
    "steps": [
      "Gather the listed materials and choose a beginner guide if the technique is new; prepare a clear protected workspace.",
      "Use an owned deck and practice spreading the cards into an even fan with controlled hand pressure.",
      "Review your finished result or progress, allow any extra drying or curing time, and put tools and materials away."
    ],
    "supplies": [
      "cards"
    ]
  },
  {
    "id": 618,
    "title": "Practice a presentation opening",
    "mood": "creative",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "💻",
    "description": "Write a one-minute introduction for a topic you know and rehearse it aloud for clarity and timing.",
    "steps": [
      "Choose tools you already own or a suitable free tool, and work on a copy or harmless sample rather than irreplaceable files.",
      "Write a one-minute introduction for a topic you know and rehearse it aloud for clarity and timing.",
      "Test or review the result, save your work with a clear name, and note one improvement for next time."
    ],
    "supplies": [
      "paper",
      "device"
    ]
  },
  {
    "id": 619,
    "title": "Practice an elevator pitch",
    "mood": "creative",
    "cost": 0,
    "time": 30,
    "min": 1,
    "max": 6,
    "icon": "✏️",
    "description": "Describe a personal project in thirty seconds with a clear problem, action, and result, then refine it after feedback.",
    "steps": [
      "Gather the listed materials and choose a beginner guide if the technique is new; prepare a clear protected workspace.",
      "Describe a personal project in thirty seconds with a clear problem, action, and result, then refine it after feedback.",
      "Review your finished result or progress, allow any extra drying or curing time, and put tools and materials away."
    ],
    "supplies": [
      "paper"
    ]
  },
  {
    "id": 620,
    "title": "Practice active listening in pairs",
    "mood": "creative",
    "cost": 0,
    "time": 30,
    "min": 2,
    "max": 6,
    "icon": "✏️",
    "description": "Let one person speak briefly while the other listens, then summarize the message and check whether it was understood.",
    "steps": [
      "Gather the listed materials and choose a beginner guide if the technique is new; prepare a clear protected workspace.",
      "Let one person speak briefly while the other listens, then summarize the message and check whether it was understood.",
      "Review your finished result or progress, allow any extra drying or curing time, and put tools and materials away."
    ],
    "supplies": [
      "paper"
    ]
  },
  {
    "id": 621,
    "title": "Practice giving constructive feedback",
    "mood": "creative",
    "cost": 0,
    "time": 60,
    "min": 2,
    "max": 6,
    "icon": "✏️",
    "description": "Use a harmless sample drawing or paragraph to practice specific observations and actionable suggestions with the creator's consent.",
    "steps": [
      "Gather the listed materials and choose a beginner guide if the technique is new; prepare a clear protected workspace.",
      "Use a harmless sample drawing or paragraph to practice specific observations and actionable suggestions with the creator's consent.",
      "Review your finished result or progress, allow any extra drying or curing time, and put tools and materials away."
    ],
    "supplies": [
      "paper"
    ]
  },
  {
    "id": 622,
    "title": "Learn a simple mnemonic",
    "mood": "creative",
    "cost": 0,
    "time": 30,
    "min": 1,
    "max": 6,
    "icon": "✏️",
    "description": "Create a memorable association for a short list and test recall after a brief distraction.",
    "steps": [
      "Gather the listed materials and choose a beginner guide if the technique is new; prepare a clear protected workspace.",
      "Create a memorable association for a short list and test recall after a brief distraction.",
      "Review your finished result or progress, allow any extra drying or curing time, and put tools and materials away."
    ],
    "supplies": [
      "paper"
    ]
  },
  {
    "id": 623,
    "title": "Build a memory palace",
    "mood": "creative",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "✏️",
    "description": "Choose a familiar route and place vivid associations along it to remember a short list of neutral facts.",
    "steps": [
      "Gather the listed materials and choose a beginner guide if the technique is new; prepare a clear protected workspace.",
      "Choose a familiar route and place vivid associations along it to remember a short list of neutral facts.",
      "Review your finished result or progress, allow any extra drying or curing time, and put tools and materials away."
    ],
    "supplies": [
      "paper"
    ]
  },
  {
    "id": 624,
    "title": "Practice speed sketch-noting",
    "mood": "creative",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "💻",
    "description": "Watch a short public educational talk and capture its main ideas with labeled icons and a clear structure.",
    "steps": [
      "Choose tools you already own or a suitable free tool, and work on a copy or harmless sample rather than irreplaceable files.",
      "Watch a short public educational talk and capture its main ideas with labeled icons and a clear structure.",
      "Test or review the result, save your work with a clear name, and note one improvement for next time."
    ],
    "supplies": [
      "paper",
      "device"
    ]
  },
  {
    "id": 625,
    "title": "Learn a basic spreadsheet formula",
    "mood": "creative",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "💻",
    "description": "Create a harmless sample table and calculate a total, average, and conditional count with spreadsheet formulas.",
    "steps": [
      "Choose tools you already own or a suitable free tool, and work on a copy or harmless sample rather than irreplaceable files.",
      "Create a harmless sample table and calculate a total, average, and conditional count with spreadsheet formulas.",
      "Test or review the result, save your work with a clear name, and note one improvement for next time."
    ],
    "supplies": [
      "device"
    ]
  },
  {
    "id": 626,
    "title": "Build a simple spreadsheet chart",
    "mood": "creative",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "💻",
    "description": "Enter a small sample dataset and choose a chart with labeled axes that represents it honestly.",
    "steps": [
      "Choose tools you already own or a suitable free tool, and work on a copy or harmless sample rather than irreplaceable files.",
      "Enter a small sample dataset and choose a chart with labeled axes that represents it honestly.",
      "Test or review the result, save your work with a clear name, and note one improvement for next time."
    ],
    "supplies": [
      "device"
    ]
  },
  {
    "id": 627,
    "title": "Practice a database query",
    "mood": "creative",
    "cost": 0,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "💻",
    "description": "Use an offline or free educational dataset to practice SELECT, filtering, grouping, and a simple join.",
    "steps": [
      "Choose tools you already own or a suitable free tool, and work on a copy or harmless sample rather than irreplaceable files.",
      "Use an offline or free educational dataset to practice SELECT, filtering, grouping, and a simple join.",
      "Test or review the result, save your work with a clear name, and note one improvement for next time."
    ],
    "supplies": [
      "device"
    ]
  },
  {
    "id": 628,
    "title": "Write a small file-organizing script",
    "mood": "creative",
    "cost": 0,
    "time": 120,
    "min": 1,
    "max": 6,
    "icon": "💻",
    "description": "Work only on disposable sample files and write a script that sorts copies into folders by a chosen rule.",
    "steps": [
      "Choose tools you already own or a suitable free tool, and work on a copy or harmless sample rather than irreplaceable files.",
      "Work only on disposable sample files and write a script that sorts copies into folders by a chosen rule.",
      "Test or review the result, save your work with a clear name, and note one improvement for next time."
    ],
    "supplies": [
      "device"
    ]
  },
  {
    "id": 629,
    "title": "Learn a regular expression",
    "mood": "creative",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "💻",
    "description": "Use a free practice tool and harmless sample text to match a specific pattern and check false matches.",
    "steps": [
      "Choose tools you already own or a suitable free tool, and work on a copy or harmless sample rather than irreplaceable files.",
      "Use a free practice tool and harmless sample text to match a specific pattern and check false matches.",
      "Test or review the result, save your work with a clear name, and note one improvement for next time."
    ],
    "supplies": [
      "device"
    ]
  },
  {
    "id": 630,
    "title": "Learn basic version-control branching",
    "mood": "creative",
    "cost": 0,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "💻",
    "description": "Use a disposable local repository to create a branch, make a change, and merge it back without touching an active project.",
    "steps": [
      "Choose tools you already own or a suitable free tool, and work on a copy or harmless sample rather than irreplaceable files.",
      "Use a disposable local repository to create a branch, make a change, and merge it back without touching an active project.",
      "Test or review the result, save your work with a clear name, and note one improvement for next time."
    ],
    "supplies": [
      "device"
    ]
  },
  {
    "id": 631,
    "title": "Practice a simple debugging exercise",
    "mood": "creative",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "💻",
    "description": "Use a short intentionally broken sample program and inspect intermediate values until you can explain and fix its error.",
    "steps": [
      "Choose tools you already own or a suitable free tool, and work on a copy or harmless sample rather than irreplaceable files.",
      "Use a short intentionally broken sample program and inspect intermediate values until you can explain and fix its error.",
      "Test or review the result, save your work with a clear name, and note one improvement for next time."
    ],
    "supplies": [
      "device"
    ]
  },
  {
    "id": 632,
    "title": "Make a flowchart for a familiar task",
    "mood": "creative",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "💻",
    "description": "Map the decisions and steps of a routine activity and ask someone to follow the diagram literally.",
    "steps": [
      "Choose tools you already own or a suitable free tool, and work on a copy or harmless sample rather than irreplaceable files.",
      "Map the decisions and steps of a routine activity and ask someone to follow the diagram literally.",
      "Test or review the result, save your work with a clear name, and note one improvement for next time."
    ],
    "supplies": [
      "paper",
      "device"
    ]
  },
  {
    "id": 633,
    "title": "Create a clear assembly guide",
    "mood": "creative",
    "cost": 0,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "✏️",
    "description": "Photograph a simple safe construction task and write numbered instructions someone else can test.",
    "steps": [
      "Gather the listed materials and choose a beginner guide if the technique is new; prepare a clear protected workspace.",
      "Photograph a simple safe construction task and write numbered instructions someone else can test.",
      "Review your finished result or progress, allow any extra drying or curing time, and put tools and materials away."
    ],
    "supplies": [
      "paper",
      "camera"
    ]
  },
  {
    "id": 634,
    "title": "Learn a basic animation timing exercise",
    "mood": "creative",
    "cost": 0,
    "time": 120,
    "min": 1,
    "max": 6,
    "icon": "💻",
    "description": "Animate a bouncing ball in free software and adjust spacing to make acceleration and impact readable.",
    "steps": [
      "Choose tools you already own or a suitable free tool, and work on a copy or harmless sample rather than irreplaceable files.",
      "Animate a bouncing ball in free software and adjust spacing to make acceleration and impact readable.",
      "Test or review the result, save your work with a clear name, and note one improvement for next time."
    ],
    "supplies": [
      "device"
    ]
  },
  {
    "id": 635,
    "title": "Practice color-mixing samples",
    "mood": "creative",
    "cost": 10,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "🧶",
    "description": "Use suitable paints to make a labeled mixing chart and compare the dried colors with the wet mixtures.",
    "steps": [
      "Gather the listed materials and choose a beginner guide if the technique is new; prepare a clear protected workspace.",
      "Use suitable paints to make a labeled mixing chart and compare the dried colors with the wet mixtures.",
      "Review your finished result or progress, allow any extra drying or curing time, and put tools and materials away."
    ],
    "supplies": [
      "craft",
      "paper"
    ]
  },
  {
    "id": 636,
    "title": "Learn one-point perspective",
    "mood": "creative",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "✏️",
    "description": "Draw a horizon and vanishing point and construct a simple room with consistent receding lines.",
    "steps": [
      "Gather the listed materials and choose a beginner guide if the technique is new; prepare a clear protected workspace.",
      "Draw a horizon and vanishing point and construct a simple room with consistent receding lines.",
      "Review your finished result or progress, allow any extra drying or curing time, and put tools and materials away."
    ],
    "supplies": [
      "paper"
    ]
  },
  {
    "id": 637,
    "title": "Practice drawing from negative space",
    "mood": "creative",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "✏️",
    "description": "Sketch the empty shapes around a chair or plant before adding the object's own outline.",
    "steps": [
      "Gather the listed materials and choose a beginner guide if the technique is new; prepare a clear protected workspace.",
      "Sketch the empty shapes around a chair or plant before adding the object's own outline.",
      "Review your finished result or progress, allow any extra drying or curing time, and put tools and materials away."
    ],
    "supplies": [
      "paper"
    ]
  },
  {
    "id": 638,
    "title": "Practice contour drawing",
    "mood": "creative",
    "cost": 0,
    "time": 30,
    "min": 1,
    "max": 6,
    "icon": "✏️",
    "description": "Draw a familiar object using a slow continuous line while looking carefully at its edges.",
    "steps": [
      "Gather the listed materials and choose a beginner guide if the technique is new; prepare a clear protected workspace.",
      "Draw a familiar object using a slow continuous line while looking carefully at its edges.",
      "Review your finished result or progress, allow any extra drying or curing time, and put tools and materials away."
    ],
    "supplies": [
      "paper"
    ]
  },
  {
    "id": 639,
    "title": "Practice a value scale",
    "mood": "creative",
    "cost": 0,
    "time": 30,
    "min": 1,
    "max": 6,
    "icon": "✏️",
    "description": "Use one pencil to create a sequence from light to dark and apply the values to a shaded sphere.",
    "steps": [
      "Gather the listed materials and choose a beginner guide if the technique is new; prepare a clear protected workspace.",
      "Use one pencil to create a sequence from light to dark and apply the values to a shaded sphere.",
      "Review your finished result or progress, allow any extra drying or curing time, and put tools and materials away."
    ],
    "supplies": [
      "paper"
    ]
  },
  {
    "id": 640,
    "title": "Learn basic calligraphy pen handling",
    "mood": "creative",
    "cost": 10,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "🧶",
    "description": "Use a beginner calligraphy tool to practice consistent angles and simple strokes before attempting letters.",
    "steps": [
      "Gather the listed materials and choose a beginner guide if the technique is new; prepare a clear protected workspace.",
      "Use a beginner calligraphy tool to practice consistent angles and simple strokes before attempting letters.",
      "Review your finished result or progress, allow any extra drying or curing time, and put tools and materials away."
    ],
    "supplies": [
      "craft",
      "paper"
    ]
  },
  {
    "id": 641,
    "title": "Practice food presentation",
    "mood": "creative",
    "cost": 10,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "🍳",
    "description": "Arrange one simple meal in several ways and compare portion balance, contrast, and ease of eating.",
    "steps": [
      "Choose a reliable beginner recipe, read it fully, check ingredients and allergies, and prepare the equipment before starting.",
      "Arrange one simple meal in several ways and compare portion balance, contrast, and ease of eating.",
      "Taste the result when ready, clean the work area, and follow the recipe for cooling, storage, and any additional setting time."
    ],
    "supplies": [
      "kitchen"
    ]
  },
  {
    "id": 642,
    "title": "Practice safe knife cuts with an instructor",
    "mood": "creative",
    "cost": 25,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🎟️",
    "description": "Choose a beginner cooking session within budget and learn controlled cuts using the instructor's equipment and guidance.",
    "steps": [
      "Find an official public listing; confirm current prices, availability, access requirements, and what equipment is included before committing.",
      "Choose a beginner cooking session within budget and learn controlled cuts using the instructor's equipment and guidance.",
      "Afterward, share one thing you learned or enjoyed and note whether you would like to return."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 643,
    "title": "Learn a basic napkin fold",
    "mood": "creative",
    "cost": 0,
    "time": 30,
    "min": 1,
    "max": 6,
    "icon": "🍳",
    "description": "Use a clean cloth napkin and follow a folding guide to make a stable table setting shape.",
    "steps": [
      "Choose a reliable beginner recipe, read it fully, check ingredients and allergies, and prepare the equipment before starting.",
      "Use a clean cloth napkin and follow a folding guide to make a stable table setting shape.",
      "Taste the result when ready, clean the work area, and follow the recipe for cooling, storage, and any additional setting time."
    ],
    "supplies": [
      "kitchen"
    ]
  },
  {
    "id": 644,
    "title": "Learn a wrapping technique",
    "mood": "creative",
    "cost": 10,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "🧶",
    "description": "Practice measuring and folding reusable wrapping material around a plain box with neat corners.",
    "steps": [
      "Gather the listed materials and choose a beginner guide if the technique is new; prepare a clear protected workspace.",
      "Practice measuring and folding reusable wrapping material around a plain box with neat corners.",
      "Review your finished result or progress, allow any extra drying or curing time, and put tools and materials away."
    ],
    "supplies": [
      "paper",
      "craft"
    ]
  },
  {
    "id": 645,
    "title": "Practice packing a small travel bag",
    "mood": "creative",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "✏️",
    "description": "Choose a fictional two-day trip and test a compact packing list using items you already own.",
    "steps": [
      "Gather the listed materials and choose a beginner guide if the technique is new; prepare a clear protected workspace.",
      "Choose a fictional two-day trip and test a compact packing list using items you already own.",
      "Review your finished result or progress, allow any extra drying or curing time, and put tools and materials away."
    ],
    "supplies": [
      "household"
    ]
  },
  {
    "id": 646,
    "title": "Learn a useful non-load-bearing knot",
    "mood": "creative",
    "cost": 0,
    "time": 30,
    "min": 1,
    "max": 6,
    "icon": "🧶",
    "description": "Use spare cord and a reliable beginner guide to tie and untie a simple utility knot, not for climbing or lifting people.",
    "steps": [
      "Gather the listed materials and choose a beginner guide if the technique is new; prepare a clear protected workspace.",
      "Use spare cord and a reliable beginner guide to tie and untie a simple utility knot, not for climbing or lifting people.",
      "Review your finished result or progress, allow any extra drying or curing time, and put tools and materials away."
    ],
    "supplies": [
      "craft"
    ]
  },
  {
    "id": 647,
    "title": "Learn a decorative lashing",
    "mood": "creative",
    "cost": 10,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "🧶",
    "description": "Use light craft sticks and cord to join a small model frame without treating it as a structural or safety device.",
    "steps": [
      "Gather the listed materials and choose a beginner guide if the technique is new; prepare a clear protected workspace.",
      "Use light craft sticks and cord to join a small model frame without treating it as a structural or safety device.",
      "Review your finished result or progress, allow any extra drying or curing time, and put tools and materials away."
    ],
    "supplies": [
      "craft"
    ]
  },
  {
    "id": 648,
    "title": "Learn to sharpen a pencil with a hand tool",
    "mood": "creative",
    "cost": 0,
    "time": 30,
    "min": 1,
    "max": 6,
    "icon": "✏️",
    "description": "Compare an ordinary sharpener and a suitable artist's sharpening tool, following their instructions and handling blades carefully.",
    "steps": [
      "Gather the listed materials and choose a beginner guide if the technique is new; prepare a clear protected workspace.",
      "Compare an ordinary sharpener and a suitable artist's sharpening tool, following their instructions and handling blades carefully.",
      "Review your finished result or progress, allow any extra drying or curing time, and put tools and materials away."
    ],
    "supplies": [
      "paper",
      "household"
    ]
  },
  {
    "id": 649,
    "title": "Practice repairing a book jacket",
    "mood": "creative",
    "cost": 10,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "🧶",
    "description": "Use a replaceable paper jacket or dust cover and appropriate reversible repair materials rather than altering a valuable book.",
    "steps": [
      "Gather the listed materials and choose a beginner guide if the technique is new; prepare a clear protected workspace.",
      "Use a replaceable paper jacket or dust cover and appropriate reversible repair materials rather than altering a valuable book.",
      "Review your finished result or progress, allow any extra drying or curing time, and put tools and materials away."
    ],
    "supplies": [
      "paper",
      "craft"
    ]
  },
  {
    "id": 650,
    "title": "Have a bring-one-object story circle",
    "mood": "chill",
    "cost": 0,
    "time": 60,
    "min": 2,
    "max": 6,
    "icon": "📖",
    "description": "Each person brings one safe ordinary object and shares a short story about why it matters.",
    "steps": [
      "Choose a comfortable space and set aside the listed time; invite others only if you want company.",
      "Each person brings one safe ordinary object and shares a short story about why it matters.",
      "Keep any notes you want privately, put supplies away, and decide what part of the experience you would repeat."
    ],
    "supplies": [
      "household"
    ]
  },
  {
    "id": 651,
    "title": "Host a favorite-page reading circle",
    "mood": "chill",
    "cost": 0,
    "time": 60,
    "min": 2,
    "max": 6,
    "icon": "📖",
    "description": "Each person reads a short passage from a book they own or borrowed and explains why they chose it.",
    "steps": [
      "Choose a comfortable space and set aside the listed time; invite others only if you want company.",
      "Each person reads a short passage from a book they own or borrowed and explains why they chose it.",
      "Keep any notes you want privately, put supplies away, and decide what part of the experience you would repeat."
    ],
    "supplies": [
      "books"
    ]
  },
  {
    "id": 652,
    "title": "Have a childhood-games reminiscence",
    "mood": "chill",
    "cost": 0,
    "time": 60,
    "min": 2,
    "max": 6,
    "icon": "📖",
    "description": "Trade descriptions of games you played growing up and write down rules you want to preserve.",
    "steps": [
      "Choose a comfortable space and set aside the listed time; invite others only if you want company.",
      "Trade descriptions of games you played growing up and write down rules you want to preserve.",
      "Keep any notes you want privately, put supplies away, and decide what part of the experience you would repeat."
    ],
    "supplies": [
      "paper"
    ]
  },
  {
    "id": 653,
    "title": "Host a show-and-tell evening",
    "mood": "chill",
    "cost": 0,
    "time": 60,
    "min": 2,
    "max": 6,
    "icon": "📖",
    "description": "Take turns showing a hobby project or interesting possession and asking friendly questions.",
    "steps": [
      "Choose a comfortable space and set aside the listed time; invite others only if you want company.",
      "Take turns showing a hobby project or interesting possession and asking friendly questions.",
      "Keep any notes you want privately, put supplies away, and decide what part of the experience you would repeat."
    ],
    "supplies": [
      "household"
    ]
  },
  {
    "id": 654,
    "title": "Have a no-advice listening hour",
    "mood": "chill",
    "cost": 0,
    "time": 60,
    "min": 2,
    "max": 6,
    "icon": "📖",
    "description": "Agree to listen to everyday updates without offering solutions unless the speaker asks for them.",
    "steps": [
      "Choose a comfortable space and set aside the listed time; invite others only if you want company.",
      "Agree to listen to everyday updates without offering solutions unless the speaker asks for them.",
      "Keep any notes you want privately, put supplies away, and decide what part of the experience you would repeat."
    ],
    "supplies": [
      "household"
    ]
  },
  {
    "id": 655,
    "title": "Share a meaningful-song listening circle",
    "mood": "chill",
    "cost": 0,
    "time": 90,
    "min": 2,
    "max": 6,
    "icon": "💻",
    "description": "Each person chooses one legally accessible song and explains its personal significance before listening together.",
    "steps": [
      "Choose tools you already own or a suitable free tool, and work on a copy or harmless sample rather than irreplaceable files.",
      "Each person chooses one legally accessible song and explains its personal significance before listening together.",
      "Test or review the result, save your work with a clear name, and note one improvement for next time."
    ],
    "supplies": [
      "device"
    ]
  },
  {
    "id": 656,
    "title": "Make a shared friendship timeline",
    "mood": "chill",
    "cost": 0,
    "time": 60,
    "min": 2,
    "max": 6,
    "icon": "📖",
    "description": "Mark memorable shared events on a paper timeline and add notes without needing to agree on every detail.",
    "steps": [
      "Choose a comfortable space and set aside the listed time; invite others only if you want company.",
      "Mark memorable shared events on a paper timeline and add notes without needing to agree on every detail.",
      "Keep any notes you want privately, put supplies away, and decide what part of the experience you would repeat."
    ],
    "supplies": [
      "paper"
    ]
  },
  {
    "id": 657,
    "title": "Build a private family tree sketch",
    "mood": "chill",
    "cost": 0,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "📖",
    "description": "Use information people willingly share to sketch relationships and mark uncertain details clearly.",
    "steps": [
      "Choose a comfortable space and set aside the listed time; invite others only if you want company.",
      "Use information people willingly share to sketch relationships and mark uncertain details clearly.",
      "Keep any notes you want privately, put supplies away, and decide what part of the experience you would repeat."
    ],
    "supplies": [
      "paper"
    ]
  },
  {
    "id": 658,
    "title": "Write a personal life timeline",
    "mood": "chill",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "📖",
    "description": "Choose milestones you are comfortable recording and note what changed at each one.",
    "steps": [
      "Choose a comfortable space and set aside the listed time; invite others only if you want company.",
      "Choose milestones you are comfortable recording and note what changed at each one.",
      "Keep any notes you want privately, put supplies away, and decide what part of the experience you would repeat."
    ],
    "supplies": [
      "paper"
    ]
  },
  {
    "id": 659,
    "title": "Make a list of lessons from a finished project",
    "mood": "chill",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "📖",
    "description": "Write what went well, what was difficult, and one change you would make next time.",
    "steps": [
      "Choose a comfortable space and set aside the listed time; invite others only if you want company.",
      "Write what went well, what was difficult, and one change you would make next time.",
      "Keep any notes you want privately, put supplies away, and decide what part of the experience you would repeat."
    ],
    "supplies": [
      "paper"
    ]
  },
  {
    "id": 660,
    "title": "Write a personal values reflection",
    "mood": "chill",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "📖",
    "description": "Choose a few values that matter to you and describe ordinary actions that express them.",
    "steps": [
      "Choose a comfortable space and set aside the listed time; invite others only if you want company.",
      "Choose a few values that matter to you and describe ordinary actions that express them.",
      "Keep any notes you want privately, put supplies away, and decide what part of the experience you would repeat."
    ],
    "supplies": [
      "paper"
    ]
  },
  {
    "id": 661,
    "title": "Make a personal comfort box",
    "mood": "chill",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "📖",
    "description": "Gather a few owned items that make quiet time pleasant and place them in a convenient container.",
    "steps": [
      "Choose a comfortable space and set aside the listed time; invite others only if you want company.",
      "Gather a few owned items that make quiet time pleasant and place them in a convenient container.",
      "Keep any notes you want privately, put supplies away, and decide what part of the experience you would repeat."
    ],
    "supplies": [
      "household"
    ]
  },
  {
    "id": 662,
    "title": "Set up a device charging station",
    "mood": "chill",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "📖",
    "description": "Arrange existing chargers neatly in a ventilated spot and avoid pinched cables or overloaded outlets.",
    "steps": [
      "Choose a comfortable space and set aside the listed time; invite others only if you want company.",
      "Arrange existing chargers neatly in a ventilated spot and avoid pinched cables or overloaded outlets.",
      "Keep any notes you want privately, put supplies away, and decide what part of the experience you would repeat."
    ],
    "supplies": [
      "household"
    ]
  },
  {
    "id": 663,
    "title": "Organize a desk drawer",
    "mood": "chill",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "📖",
    "description": "Empty one drawer, sort its contents, and return only the items you actually use there.",
    "steps": [
      "Choose a comfortable space and set aside the listed time; invite others only if you want company.",
      "Empty one drawer, sort its contents, and return only the items you actually use there.",
      "Keep any notes you want privately, put supplies away, and decide what part of the experience you would repeat."
    ],
    "supplies": [
      "household"
    ]
  },
  {
    "id": 664,
    "title": "Organize a hobby shelf",
    "mood": "chill",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "📖",
    "description": "Group hobby materials by use and create visible places for frequently reached items.",
    "steps": [
      "Choose a comfortable space and set aside the listed time; invite others only if you want company.",
      "Group hobby materials by use and create visible places for frequently reached items.",
      "Keep any notes you want privately, put supplies away, and decide what part of the experience you would repeat."
    ],
    "supplies": [
      "household"
    ]
  },
  {
    "id": 665,
    "title": "Sort a donation bag",
    "mood": "chill",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "📖",
    "description": "Choose clean usable belongings you own and check a charity's current acceptance rules before planning a drop-off.",
    "steps": [
      "Choose a comfortable space and set aside the listed time; invite others only if you want company.",
      "Choose clean usable belongings you own and check a charity's current acceptance rules before planning a drop-off.",
      "Keep any notes you want privately, put supplies away, and decide what part of the experience you would repeat."
    ],
    "supplies": [
      "household"
    ]
  },
  {
    "id": 666,
    "title": "Make a reusable shopping-kit station",
    "mood": "chill",
    "cost": 0,
    "time": 30,
    "min": 1,
    "max": 6,
    "icon": "📖",
    "description": "Gather existing bags and containers in an accessible place for your next routine trip.",
    "steps": [
      "Choose a comfortable space and set aside the listed time; invite others only if you want company.",
      "Gather existing bags and containers in an accessible place for your next routine trip.",
      "Keep any notes you want privately, put supplies away, and decide what part of the experience you would repeat."
    ],
    "supplies": [
      "household"
    ]
  },
  {
    "id": 667,
    "title": "Set up a library-return basket",
    "mood": "chill",
    "cost": 0,
    "time": 30,
    "min": 1,
    "max": 6,
    "icon": "📖",
    "description": "Create a visible place for borrowed items and note their due dates without sharing account details.",
    "steps": [
      "Choose a comfortable space and set aside the listed time; invite others only if you want company.",
      "Create a visible place for borrowed items and note their due dates without sharing account details.",
      "Keep any notes you want privately, put supplies away, and decide what part of the experience you would repeat."
    ],
    "supplies": [
      "household"
    ]
  },
  {
    "id": 668,
    "title": "Create a household manual index",
    "mood": "chill",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "💻",
    "description": "List appliance models and link to official instructions without collecting private account or payment information.",
    "steps": [
      "Choose tools you already own or a suitable free tool, and work on a copy or harmless sample rather than irreplaceable files.",
      "List appliance models and link to official instructions without collecting private account or payment information.",
      "Test or review the result, save your work with a clear name, and note one improvement for next time."
    ],
    "supplies": [
      "paper",
      "device"
    ]
  },
  {
    "id": 669,
    "title": "Create a plant-care calendar",
    "mood": "chill",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "📖",
    "description": "Research the needs of plants you own and note checks based on their conditions rather than automatic overwatering.",
    "steps": [
      "Choose a comfortable space and set aside the listed time; invite others only if you want company.",
      "Research the needs of plants you own and note checks based on their conditions rather than automatic overwatering.",
      "Keep any notes you want privately, put supplies away, and decide what part of the experience you would repeat."
    ],
    "supplies": [
      "plants",
      "paper"
    ]
  },
  {
    "id": 670,
    "title": "Label household storage containers",
    "mood": "chill",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "📖",
    "description": "Make simple removable labels so shared items are easier to find and return.",
    "steps": [
      "Choose a comfortable space and set aside the listed time; invite others only if you want company.",
      "Make simple removable labels so shared items are easier to find and return.",
      "Keep any notes you want privately, put supplies away, and decide what part of the experience you would repeat."
    ],
    "supplies": [
      "paper",
      "household"
    ]
  },
  {
    "id": 671,
    "title": "Sort craft leftovers for reuse",
    "mood": "chill",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "📖",
    "description": "Separate usable materials by type and discard unsuitable scraps according to local guidance.",
    "steps": [
      "Choose a comfortable space and set aside the listed time; invite others only if you want company.",
      "Separate usable materials by type and discard unsuitable scraps according to local guidance.",
      "Keep any notes you want privately, put supplies away, and decide what part of the experience you would repeat."
    ],
    "supplies": [
      "craft"
    ]
  },
  {
    "id": 672,
    "title": "Organize a recipe wish list",
    "mood": "chill",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "💻",
    "description": "Choose a small number of recipes you genuinely want to try and note their equipment and ingredient requirements.",
    "steps": [
      "Choose tools you already own or a suitable free tool, and work on a copy or harmless sample rather than irreplaceable files.",
      "Choose a small number of recipes you genuinely want to try and note their equipment and ingredient requirements.",
      "Test or review the result, save your work with a clear name, and note one improvement for next time."
    ],
    "supplies": [
      "paper",
      "device"
    ]
  },
  {
    "id": 673,
    "title": "Plan a pantry-use meal",
    "mood": "chill",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "🍳",
    "description": "Check ingredients you already have and choose a sensible meal from items that are still suitable to use.",
    "steps": [
      "Choose a reliable beginner recipe, read it fully, check ingredients and allergies, and prepare the equipment before starting.",
      "Check ingredients you already have and choose a sensible meal from items that are still suitable to use.",
      "Taste the result when ready, clean the work area, and follow the recipe for cooling, storage, and any additional setting time."
    ],
    "supplies": [
      "kitchen",
      "paper"
    ]
  },
  {
    "id": 674,
    "title": "Make a freezer inventory",
    "mood": "chill",
    "cost": 0,
    "time": 30,
    "min": 1,
    "max": 6,
    "icon": "🍳",
    "description": "List labeled foods and dates without leaving the freezer open unnecessarily, then choose what to use next.",
    "steps": [
      "Choose a reliable beginner recipe, read it fully, check ingredients and allergies, and prepare the equipment before starting.",
      "List labeled foods and dates without leaving the freezer open unnecessarily, then choose what to use next.",
      "Taste the result when ready, clean the work area, and follow the recipe for cooling, storage, and any additional setting time."
    ],
    "supplies": [
      "kitchen",
      "paper"
    ]
  },
  {
    "id": 675,
    "title": "Create a personal music index",
    "mood": "chill",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "💻",
    "description": "Organize your own listening notes by artist, album, and what you would recommend to a friend.",
    "steps": [
      "Choose tools you already own or a suitable free tool, and work on a copy or harmless sample rather than irreplaceable files.",
      "Organize your own listening notes by artist, album, and what you would recommend to a friend.",
      "Test or review the result, save your work with a clear name, and note one improvement for next time."
    ],
    "supplies": [
      "device"
    ]
  },
  {
    "id": 676,
    "title": "Make a watchlist with reasons",
    "mood": "chill",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "💻",
    "description": "Choose a few films or shows and add a specific reason each interests you rather than building an endless list.",
    "steps": [
      "Choose tools you already own or a suitable free tool, and work on a copy or harmless sample rather than irreplaceable files.",
      "Choose a few films or shows and add a specific reason each interests you rather than building an endless list.",
      "Test or review the result, save your work with a clear name, and note one improvement for next time."
    ],
    "supplies": [
      "paper",
      "device"
    ]
  },
  {
    "id": 677,
    "title": "Write a book review for yourself",
    "mood": "chill",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "📖",
    "description": "Summarize a finished book's strengths, weaknesses, and what stayed with you without needing to publish the review.",
    "steps": [
      "Choose a comfortable space and set aside the listed time; invite others only if you want company.",
      "Summarize a finished book's strengths, weaknesses, and what stayed with you without needing to publish the review.",
      "Keep any notes you want privately, put supplies away, and decide what part of the experience you would repeat."
    ],
    "supplies": [
      "paper"
    ]
  },
  {
    "id": 678,
    "title": "Write a private film reflection",
    "mood": "chill",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "📖",
    "description": "Choose a film you have seen and describe how one scene uses image, sound, and pacing.",
    "steps": [
      "Choose a comfortable space and set aside the listed time; invite others only if you want company.",
      "Choose a film you have seen and describe how one scene uses image, sound, and pacing.",
      "Keep any notes you want privately, put supplies away, and decide what part of the experience you would repeat."
    ],
    "supplies": [
      "paper"
    ]
  },
  {
    "id": 679,
    "title": "Create a favorite-places memory map",
    "mood": "chill",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "📖",
    "description": "Draw a private map of places meaningful to you and annotate one memory for each.",
    "steps": [
      "Choose a comfortable space and set aside the listed time; invite others only if you want company.",
      "Draw a private map of places meaningful to you and annotate one memory for each.",
      "Keep any notes you want privately, put supplies away, and decide what part of the experience you would repeat."
    ],
    "supplies": [
      "paper"
    ]
  },
  {
    "id": 680,
    "title": "Make a personal quote notebook",
    "mood": "chill",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "📖",
    "description": "Record a few brief quotations with their sources and explain their meaning in your own words.",
    "steps": [
      "Choose a comfortable space and set aside the listed time; invite others only if you want company.",
      "Record a few brief quotations with their sources and explain their meaning in your own words.",
      "Keep any notes you want privately, put supplies away, and decide what part of the experience you would repeat."
    ],
    "supplies": [
      "books",
      "paper"
    ]
  },
  {
    "id": 681,
    "title": "Write an unsent thank-you letter",
    "mood": "chill",
    "cost": 0,
    "time": 30,
    "min": 1,
    "max": 6,
    "icon": "📖",
    "description": "Describe a specific helpful action someone took and what it meant to you; sending is optional.",
    "steps": [
      "Choose a comfortable space and set aside the listed time; invite others only if you want company.",
      "Describe a specific helpful action someone took and what it meant to you; sending is optional.",
      "Keep any notes you want privately, put supplies away, and decide what part of the experience you would repeat."
    ],
    "supplies": [
      "paper"
    ]
  },
  {
    "id": 682,
    "title": "Write a letter to your younger self",
    "mood": "chill",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "📖",
    "description": "Offer encouragement and perspective based on what you have learned, choosing only memories you want to revisit.",
    "steps": [
      "Choose a comfortable space and set aside the listed time; invite others only if you want company.",
      "Offer encouragement and perspective based on what you have learned, choosing only memories you want to revisit.",
      "Keep any notes you want privately, put supplies away, and decide what part of the experience you would repeat."
    ],
    "supplies": [
      "paper"
    ]
  },
  {
    "id": 683,
    "title": "Create a list of questions for an elder",
    "mood": "chill",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "📖",
    "description": "Prepare open-ended questions about ordinary life and traditions, leaving the other person free to skip topics.",
    "steps": [
      "Choose a comfortable space and set aside the listed time; invite others only if you want company.",
      "Prepare open-ended questions about ordinary life and traditions, leaving the other person free to skip topics.",
      "Keep any notes you want privately, put supplies away, and decide what part of the experience you would repeat."
    ],
    "supplies": [
      "paper"
    ]
  },
  {
    "id": 684,
    "title": "Make a personal seasonal soundtrack note",
    "mood": "chill",
    "cost": 0,
    "time": 30,
    "min": 1,
    "max": 6,
    "icon": "💻",
    "description": "Choose a few songs that capture your current season and write why each fits without making a public post.",
    "steps": [
      "Choose tools you already own or a suitable free tool, and work on a copy or harmless sample rather than irreplaceable files.",
      "Choose a few songs that capture your current season and write why each fits without making a public post.",
      "Test or review the result, save your work with a clear name, and note one improvement for next time."
    ],
    "supplies": [
      "paper",
      "device"
    ]
  },
  {
    "id": 685,
    "title": "Have a slow floor picnic",
    "mood": "chill",
    "cost": 10,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "🍳",
    "description": "Lay out a blanket indoors and enjoy a simple meal with comfortable seating and an easy cleanup plan.",
    "steps": [
      "Choose a reliable beginner recipe, read it fully, check ingredients and allergies, and prepare the equipment before starting.",
      "Lay out a blanket indoors and enjoy a simple meal with comfortable seating and an easy cleanup plan.",
      "Taste the result when ready, clean the work area, and follow the recipe for cooling, storage, and any additional setting time."
    ],
    "supplies": [
      "kitchen",
      "household"
    ]
  },
  {
    "id": 686,
    "title": "Try a candle-free cozy evening",
    "mood": "chill",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "📖",
    "description": "Arrange soft lighting you already own and spend an hour reading, talking, or resting without an open flame.",
    "steps": [
      "Choose a comfortable space and set aside the listed time; invite others only if you want company.",
      "Arrange soft lighting you already own and spend an hour reading, talking, or resting without an open flame.",
      "Keep any notes you want privately, put supplies away, and decide what part of the experience you would repeat."
    ],
    "supplies": [
      "household"
    ]
  },
  {
    "id": 687,
    "title": "Listen to an old interview",
    "mood": "chill",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "💻",
    "description": "Choose a legally available archival interview and notice the questions and listening techniques used.",
    "steps": [
      "Choose tools you already own or a suitable free tool, and work on a copy or harmless sample rather than irreplaceable files.",
      "Choose a legally available archival interview and notice the questions and listening techniques used.",
      "Test or review the result, save your work with a clear name, and note one improvement for next time."
    ],
    "supplies": [
      "device"
    ]
  },
  {
    "id": 688,
    "title": "Watch a silent-film short",
    "mood": "chill",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "💻",
    "description": "Find a legally available silent short and discuss how physical action communicates its story.",
    "steps": [
      "Choose tools you already own or a suitable free tool, and work on a copy or harmless sample rather than irreplaceable files.",
      "Find a legally available silent short and discuss how physical action communicates its story.",
      "Test or review the result, save your work with a clear name, and note one improvement for next time."
    ],
    "supplies": [
      "device"
    ]
  },
  {
    "id": 689,
    "title": "Read a magazine cover to cover",
    "mood": "chill",
    "cost": 0,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "📖",
    "description": "Use an issue you own or a library copy and read sections you would usually skip.",
    "steps": [
      "Choose a comfortable space and set aside the listed time; invite others only if you want company.",
      "Use an issue you own or a library copy and read sections you would usually skip.",
      "Keep any notes you want privately, put supplies away, and decide what part of the experience you would repeat."
    ],
    "supplies": [
      "books"
    ]
  },
  {
    "id": 690,
    "title": "Read a local-history pamphlet",
    "mood": "chill",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "💻",
    "description": "Choose a reliable local publication and connect its details with places you know.",
    "steps": [
      "Choose tools you already own or a suitable free tool, and work on a copy or harmless sample rather than irreplaceable files.",
      "Choose a reliable local publication and connect its details with places you know.",
      "Test or review the result, save your work with a clear name, and note one improvement for next time."
    ],
    "supplies": [
      "books",
      "device"
    ]
  },
  {
    "id": 691,
    "title": "Read a collection of letters",
    "mood": "chill",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "📖",
    "description": "Choose a published collection you can access and notice how the writers' voices differ from formal prose.",
    "steps": [
      "Choose a comfortable space and set aside the listed time; invite others only if you want company.",
      "Choose a published collection you can access and notice how the writers' voices differ from formal prose.",
      "Keep any notes you want privately, put supplies away, and decide what part of the experience you would repeat."
    ],
    "supplies": [
      "books"
    ]
  },
  {
    "id": 692,
    "title": "Listen to a chamber-music recording",
    "mood": "chill",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "💻",
    "description": "Choose a legally available small-ensemble recording and follow how the instruments exchange musical ideas.",
    "steps": [
      "Choose tools you already own or a suitable free tool, and work on a copy or harmless sample rather than irreplaceable files.",
      "Choose a legally available small-ensemble recording and follow how the instruments exchange musical ideas.",
      "Test or review the result, save your work with a clear name, and note one improvement for next time."
    ],
    "supplies": [
      "device"
    ]
  },
  {
    "id": 693,
    "title": "Watch a traditional craft documentary",
    "mood": "chill",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "💻",
    "description": "Choose a reputable freely available short film and note the stages of a craft you have never practiced.",
    "steps": [
      "Choose tools you already own or a suitable free tool, and work on a copy or harmless sample rather than irreplaceable files.",
      "Choose a reputable freely available short film and note the stages of a craft you have never practiced.",
      "Test or review the result, save your work with a clear name, and note one improvement for next time."
    ],
    "supplies": [
      "device"
    ]
  },
  {
    "id": 694,
    "title": "Have an instrumental background hour",
    "mood": "chill",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "💻",
    "description": "Choose legally accessible instrumental music and use the time for quiet rest rather than adding more tasks.",
    "steps": [
      "Choose tools you already own or a suitable free tool, and work on a copy or harmless sample rather than irreplaceable files.",
      "Choose legally accessible instrumental music and use the time for quiet rest rather than adding more tasks.",
      "Test or review the result, save your work with a clear name, and note one improvement for next time."
    ],
    "supplies": [
      "device"
    ]
  },
  {
    "id": 695,
    "title": "Try a sensory observation journal",
    "mood": "chill",
    "cost": 0,
    "time": 30,
    "min": 1,
    "max": 6,
    "icon": "📖",
    "description": "Sit comfortably and describe ordinary sights, sounds, and textures without trying to turn them into a story.",
    "steps": [
      "Choose a comfortable space and set aside the listed time; invite others only if you want company.",
      "Sit comfortably and describe ordinary sights, sounds, and textures without trying to turn them into a story.",
      "Keep any notes you want privately, put supplies away, and decide what part of the experience you would repeat."
    ],
    "supplies": [
      "paper"
    ]
  },
  {
    "id": 696,
    "title": "Make a one-page week-in-review",
    "mood": "chill",
    "cost": 0,
    "time": 30,
    "min": 1,
    "max": 6,
    "icon": "📖",
    "description": "Record one enjoyable moment, one difficult moment, and one practical priority for the coming week.",
    "steps": [
      "Choose a comfortable space and set aside the listed time; invite others only if you want company.",
      "Record one enjoyable moment, one difficult moment, and one practical priority for the coming week.",
      "Keep any notes you want privately, put supplies away, and decide what part of the experience you would repeat."
    ],
    "supplies": [
      "paper"
    ]
  },
  {
    "id": 697,
    "title": "Plan an at-home mini retreat",
    "mood": "chill",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "📖",
    "description": "Set aside a realistic block with breaks, a simple meal, and one quiet activity, leaving room to change plans.",
    "steps": [
      "Choose a comfortable space and set aside the listed time; invite others only if you want company.",
      "Set aside a realistic block with breaks, a simple meal, and one quiet activity, leaving room to change plans.",
      "Keep any notes you want privately, put supplies away, and decide what part of the experience you would repeat."
    ],
    "supplies": [
      "paper",
      "household"
    ]
  },
  {
    "id": 698,
    "title": "Make a simple welcome basket",
    "mood": "chill",
    "cost": 10,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "📖",
    "description": "Arrange a few useful nonperishable items for a guest and include an optional handwritten welcome note.",
    "steps": [
      "Choose a comfortable space and set aside the listed time; invite others only if you want company.",
      "Arrange a few useful nonperishable items for a guest and include an optional handwritten welcome note.",
      "Keep any notes you want privately, put supplies away, and decide what part of the experience you would repeat."
    ],
    "supplies": [
      "household"
    ]
  },
  {
    "id": 699,
    "title": "Create an offline entertainment box",
    "mood": "chill",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "📖",
    "description": "Gather an owned book, puzzle, cards, and paper into a convenient box for a screen-free break.",
    "steps": [
      "Choose a comfortable space and set aside the listed time; invite others only if you want company.",
      "Gather an owned book, puzzle, cards, and paper into a convenient box for a screen-free break.",
      "Keep any notes you want privately, put supplies away, and decide what part of the experience you would repeat."
    ],
    "supplies": [
      "household"
    ]
  },
  {
    "id": 700,
    "title": "Attend a board-game library demo",
    "mood": "adventure",
    "cost": 0,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🎟️",
    "description": "Find a free public demonstration at a library or community center and learn a game with the facilitator.",
    "steps": [
      "Find an official public listing; confirm current prices, availability, access requirements, and what equipment is included before committing.",
      "Find a free public demonstration at a library or community center and learn a game with the facilitator.",
      "Afterward, share one thing you learned or enjoyed and note whether you would like to return."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 701,
    "title": "Attend an open mic as a listener",
    "mood": "adventure",
    "cost": 10,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🎟️",
    "description": "Choose a public open mic within budget and listen respectfully to several local performers.",
    "steps": [
      "Find an official public listing; confirm current prices, availability, access requirements, and what equipment is included before committing.",
      "Choose a public open mic within budget and listen respectfully to several local performers.",
      "Afterward, share one thing you learned or enjoyed and note whether you would like to return."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 702,
    "title": "Perform at a beginner open mic",
    "mood": "adventure",
    "cost": 10,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🎟️",
    "description": "Check sign-up rules and prepare a short original piece that fits the venue's time and content guidelines.",
    "steps": [
      "Find an official public listing; confirm current prices, availability, access requirements, and what equipment is included before committing.",
      "Check sign-up rules and prepare a short original piece that fits the venue's time and content guidelines.",
      "Afterward, share one thing you learned or enjoyed and note whether you would like to return."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 703,
    "title": "Join a public sketch crawl",
    "mood": "adventure",
    "cost": 0,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🎟️",
    "description": "Find a free drawing meetup and sketch from its permitted public locations at your own pace.",
    "steps": [
      "Find an official public listing; confirm current prices, availability, access requirements, and what equipment is included before committing.",
      "Find a free drawing meetup and sketch from its permitted public locations at your own pace.",
      "Afterward, share one thing you learned or enjoyed and note whether you would like to return."
    ],
    "supplies": [
      "venue",
      "paper"
    ]
  },
  {
    "id": 704,
    "title": "Attend a community choir taster",
    "mood": "adventure",
    "cost": 0,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🎟️",
    "description": "Confirm that a local choir welcomes free introductory visitors and follow the director through a rehearsal.",
    "steps": [
      "Find an official public listing; confirm current prices, availability, access requirements, and what equipment is included before committing.",
      "Confirm that a local choir welcomes free introductory visitors and follow the director through a rehearsal.",
      "Afterward, share one thing you learned or enjoyed and note whether you would like to return."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 705,
    "title": "Attend a public rehearsal talkback",
    "mood": "adventure",
    "cost": 10,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🎟️",
    "description": "Choose an officially open rehearsal discussion and ask a relevant question when the artists invite audience participation.",
    "steps": [
      "Find an official public listing; confirm current prices, availability, access requirements, and what equipment is included before committing.",
      "Choose an officially open rehearsal discussion and ask a relevant question when the artists invite audience participation.",
      "Afterward, share one thing you learned or enjoyed and note whether you would like to return."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 706,
    "title": "Attend a student design exhibition",
    "mood": "adventure",
    "cost": 0,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🎟️",
    "description": "Find a free public showcase and compare how several students explain the problem behind their designs.",
    "steps": [
      "Find an official public listing; confirm current prices, availability, access requirements, and what equipment is included before committing.",
      "Find a free public showcase and compare how several students explain the problem behind their designs.",
      "Afterward, share one thing you learned or enjoyed and note whether you would like to return."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 707,
    "title": "Visit a graduate art showcase",
    "mood": "adventure",
    "cost": 0,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🎟️",
    "description": "Confirm public access and spend time with works in several different media, reading the artists' statements.",
    "steps": [
      "Find an official public listing; confirm current prices, availability, access requirements, and what equipment is included before committing.",
      "Confirm public access and spend time with works in several different media, reading the artists' statements.",
      "Afterward, share one thing you learned or enjoyed and note whether you would like to return."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 708,
    "title": "Attend a public research poster fair",
    "mood": "adventure",
    "cost": 0,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🎟️",
    "description": "Visit an advertised public research event and ask presenters to explain a question and finding in plain language.",
    "steps": [
      "Find an official public listing; confirm current prices, availability, access requirements, and what equipment is included before committing.",
      "Visit an advertised public research event and ask presenters to explain a question and finding in plain language.",
      "Afterward, share one thing you learned or enjoyed and note whether you would like to return."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 709,
    "title": "Attend a student game showcase",
    "mood": "adventure",
    "cost": 0,
    "time": 120,
    "min": 1,
    "max": 6,
    "icon": "🎟️",
    "description": "Find a publicly open game showcase, play available demos, and give specific feedback only when requested.",
    "steps": [
      "Find an official public listing; confirm current prices, availability, access requirements, and what equipment is included before committing.",
      "Find a publicly open game showcase, play available demos, and give specific feedback only when requested.",
      "Afterward, share one thing you learned or enjoyed and note whether you would like to return."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 710,
    "title": "Attend a robotics demonstration",
    "mood": "adventure",
    "cost": 0,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🎟️",
    "description": "Choose a free public demonstration and observe how the organizers explain sensing, movement, and control.",
    "steps": [
      "Find an official public listing; confirm current prices, availability, access requirements, and what equipment is included before committing.",
      "Choose a free public demonstration and observe how the organizers explain sensing, movement, and control.",
      "Afterward, share one thing you learned or enjoyed and note whether you would like to return."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 711,
    "title": "Attend a science demonstration show",
    "mood": "adventure",
    "cost": 10,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🎟️",
    "description": "Choose an official public show within budget and watch demonstrations without copying hazardous experiments at home.",
    "steps": [
      "Find an official public listing; confirm current prices, availability, access requirements, and what equipment is included before committing.",
      "Choose an official public show within budget and watch demonstrations without copying hazardous experiments at home.",
      "Afterward, share one thing you learned or enjoyed and note whether you would like to return."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 712,
    "title": "Visit a university planetarium show",
    "mood": "adventure",
    "cost": 25,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🎟️",
    "description": "Check public show times and admission and compare the projected sky with the objects described by the presenter.",
    "steps": [
      "Find an official public listing; confirm current prices, availability, access requirements, and what equipment is included before committing.",
      "Check public show times and admission and compare the projected sky with the objects described by the presenter.",
      "Afterward, share one thing you learned or enjoyed and note whether you would like to return."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 713,
    "title": "Attend a public fossil exhibit talk",
    "mood": "adventure",
    "cost": 10,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🎟️",
    "description": "Find an authorized visitor talk and learn how the presenter distinguishes observations from interpretations.",
    "steps": [
      "Find an official public listing; confirm current prices, availability, access requirements, and what equipment is included before committing.",
      "Find an authorized visitor talk and learn how the presenter distinguishes observations from interpretations.",
      "Afterward, share one thing you learned or enjoyed and note whether you would like to return."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 714,
    "title": "Visit a mineral collection display",
    "mood": "adventure",
    "cost": 10,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🎟️",
    "description": "Explore a publicly accessible collection and compare crystal forms, colors, and labels without handling specimens unless invited.",
    "steps": [
      "Find an official public listing; confirm current prices, availability, access requirements, and what equipment is included before committing.",
      "Explore a publicly accessible collection and compare crystal forms, colors, and labels without handling specimens unless invited.",
      "Afterward, share one thing you learned or enjoyed and note whether you would like to return."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 715,
    "title": "Visit a natural-history collection",
    "mood": "adventure",
    "cost": 25,
    "time": 120,
    "min": 1,
    "max": 6,
    "icon": "🎟️",
    "description": "Choose an open museum collection and trace one exhibit's explanation of environmental change or adaptation.",
    "steps": [
      "Find an official public listing; confirm current prices, availability, access requirements, and what equipment is included before committing.",
      "Choose an open museum collection and trace one exhibit's explanation of environmental change or adaptation.",
      "Afterward, share one thing you learned or enjoyed and note whether you would like to return."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 716,
    "title": "Attend a model-railway exhibition",
    "mood": "adventure",
    "cost": 10,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🎟️",
    "description": "Check entry costs and observe how model makers combine scenery, scale, and control systems.",
    "steps": [
      "Find an official public listing; confirm current prices, availability, access requirements, and what equipment is included before committing.",
      "Check entry costs and observe how model makers combine scenery, scale, and control systems.",
      "Afterward, share one thing you learned or enjoyed and note whether you would like to return."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 717,
    "title": "Attend a stamp exhibition",
    "mood": "adventure",
    "cost": 10,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🎟️",
    "description": "Browse a public display and choose one collection whose organization tells a clear historical story.",
    "steps": [
      "Find an official public listing; confirm current prices, availability, access requirements, and what equipment is included before committing.",
      "Browse a public display and choose one collection whose organization tells a clear historical story.",
      "Afterward, share one thing you learned or enjoyed and note whether you would like to return."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 718,
    "title": "Attend a coin-collecting exhibition",
    "mood": "adventure",
    "cost": 10,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🎟️",
    "description": "View a public educational display and learn about materials and designs without needing to buy or trade anything.",
    "steps": [
      "Find an official public listing; confirm current prices, availability, access requirements, and what equipment is included before committing.",
      "View a public educational display and learn about materials and designs without needing to buy or trade anything.",
      "Afterward, share one thing you learned or enjoyed and note whether you would like to return."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 719,
    "title": "Visit a public map exhibition",
    "mood": "adventure",
    "cost": 10,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🎟️",
    "description": "Compare maps from different periods and notice what their makers chose to include or emphasize.",
    "steps": [
      "Find an official public listing; confirm current prices, availability, access requirements, and what equipment is included before committing.",
      "Compare maps from different periods and notice what their makers chose to include or emphasize.",
      "Afterward, share one thing you learned or enjoyed and note whether you would like to return."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 720,
    "title": "Visit a photography exhibition",
    "mood": "adventure",
    "cost": 10,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🎟️",
    "description": "Choose a public show and study how image order and captions affect the photographer's message.",
    "steps": [
      "Find an official public listing; confirm current prices, availability, access requirements, and what equipment is included before committing.",
      "Choose a public show and study how image order and captions affect the photographer's message.",
      "Afterward, share one thing you learned or enjoyed and note whether you would like to return."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 721,
    "title": "Attend a free artist demonstration",
    "mood": "adventure",
    "cost": 0,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🎟️",
    "description": "Find an officially advertised session and watch an artist explain the steps of their process.",
    "steps": [
      "Find an official public listing; confirm current prices, availability, access requirements, and what equipment is included before committing.",
      "Find an officially advertised session and watch an artist explain the steps of their process.",
      "Afterward, share one thing you learned or enjoyed and note whether you would like to return."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 722,
    "title": "Attend an architecture open-house event",
    "mood": "adventure",
    "cost": 0,
    "time": 120,
    "min": 1,
    "max": 6,
    "icon": "🎟️",
    "description": "Choose participating buildings with confirmed free public access and follow the event's route and photography rules.",
    "steps": [
      "Find an official public listing; confirm current prices, availability, access requirements, and what equipment is included before committing.",
      "Choose participating buildings with confirmed free public access and follow the event's route and photography rules.",
      "Afterward, share one thing you learned or enjoyed and note whether you would like to return."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 723,
    "title": "Attend a heritage craft demonstration",
    "mood": "adventure",
    "cost": 10,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🎟️",
    "description": "Watch a qualified demonstrator explain a traditional technique from the designated viewing area.",
    "steps": [
      "Find an official public listing; confirm current prices, availability, access requirements, and what equipment is included before committing.",
      "Watch a qualified demonstrator explain a traditional technique from the designated viewing area.",
      "Afterward, share one thing you learned or enjoyed and note whether you would like to return."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 724,
    "title": "Attend a local storytelling event",
    "mood": "adventure",
    "cost": 10,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🎟️",
    "description": "Choose a public event within budget and listen for the different ways speakers structure true or fictional stories.",
    "steps": [
      "Find an official public listing; confirm current prices, availability, access requirements, and what equipment is included before committing.",
      "Choose a public event within budget and listen for the different ways speakers structure true or fictional stories.",
      "Afterward, share one thing you learned or enjoyed and note whether you would like to return."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 725,
    "title": "Attend a community cultural fair",
    "mood": "adventure",
    "cost": 0,
    "time": 120,
    "min": 1,
    "max": 6,
    "icon": "🎟️",
    "description": "Choose a free-entry public program and learn from scheduled demonstrations respectfully without assuming all activities are free.",
    "steps": [
      "Find an official public listing; confirm current prices, availability, access requirements, and what equipment is included before committing.",
      "Choose a free-entry public program and learn from scheduled demonstrations respectfully without assuming all activities are free.",
      "Afterward, share one thing you learned or enjoyed and note whether you would like to return."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 726,
    "title": "Attend a public language storytelling session",
    "mood": "adventure",
    "cost": 0,
    "time": 60,
    "min": 1,
    "max": 6,
    "icon": "🎟️",
    "description": "Find an open library or cultural-center session and follow the story with whatever language support is offered.",
    "steps": [
      "Find an official public listing; confirm current prices, availability, access requirements, and what equipment is included before committing.",
      "Find an open library or cultural-center session and follow the story with whatever language support is offered.",
      "Afterward, share one thing you learned or enjoyed and note whether you would like to return."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 727,
    "title": "Attend a beginner community dance social",
    "mood": "adventure",
    "cost": 10,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🎟️",
    "description": "Confirm that beginner instruction is included, respect partner consent, and join only steps that feel comfortable.",
    "steps": [
      "Find an official public listing; confirm current prices, availability, access requirements, and what equipment is included before committing.",
      "Confirm that beginner instruction is included, respect partner consent, and join only steps that feel comfortable.",
      "Afterward, share one thing you learned or enjoyed and note whether you would like to return."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 728,
    "title": "Attend a folk-music jam as a listener",
    "mood": "adventure",
    "cost": 0,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🎟️",
    "description": "Find a public session that welcomes listeners and observe how players choose tunes and share turns.",
    "steps": [
      "Find an official public listing; confirm current prices, availability, access requirements, and what equipment is included before committing.",
      "Find a public session that welcomes listeners and observe how players choose tunes and share turns.",
      "Afterward, share one thing you learned or enjoyed and note whether you would like to return."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 729,
    "title": "Join a beginner drum circle",
    "mood": "adventure",
    "cost": 10,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🎟️",
    "description": "Check whether instruments and instruction are included and follow the facilitator's rhythm and volume cues.",
    "steps": [
      "Find an official public listing; confirm current prices, availability, access requirements, and what equipment is included before committing.",
      "Check whether instruments and instruction are included and follow the facilitator's rhythm and volume cues.",
      "Afterward, share one thing you learned or enjoyed and note whether you would like to return."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 730,
    "title": "Attend a public bookbinding demonstration",
    "mood": "adventure",
    "cost": 10,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🎟️",
    "description": "Watch a demonstrator explain how signatures, covers, and sewing patterns form a book.",
    "steps": [
      "Find an official public listing; confirm current prices, availability, access requirements, and what equipment is included before committing.",
      "Watch a demonstrator explain how signatures, covers, and sewing patterns form a book.",
      "Afterward, share one thing you learned or enjoyed and note whether you would like to return."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 731,
    "title": "Attend a beginner embroidery workshop",
    "mood": "adventure",
    "cost": 25,
    "time": 120,
    "min": 1,
    "max": 6,
    "icon": "🎟️",
    "description": "Choose a session with suitable supplies included and practice the instructor's basic stitches.",
    "steps": [
      "Find an official public listing; confirm current prices, availability, access requirements, and what equipment is included before committing.",
      "Choose a session with suitable supplies included and practice the instructor's basic stitches.",
      "Afterward, share one thing you learned or enjoyed and note whether you would like to return."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 732,
    "title": "Attend a public cooking demonstration",
    "mood": "adventure",
    "cost": 25,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🎟️",
    "description": "Check ingredients and fees in advance and observe preparation techniques from the designated audience area.",
    "steps": [
      "Find an official public listing; confirm current prices, availability, access requirements, and what equipment is included before committing.",
      "Check ingredients and fees in advance and observe preparation techniques from the designated audience area.",
      "Afterward, share one thing you learned or enjoyed and note whether you would like to return."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 733,
    "title": "Attend a bread-making demonstration",
    "mood": "adventure",
    "cost": 25,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🎟️",
    "description": "Find a public session and watch how the instructor handles dough consistency, shaping, and proofing.",
    "steps": [
      "Find an official public listing; confirm current prices, availability, access requirements, and what equipment is included before committing.",
      "Find a public session and watch how the instructor handles dough consistency, shaping, and proofing.",
      "Afterward, share one thing you learned or enjoyed and note whether you would like to return."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 734,
    "title": "Attend a nonalcoholic tasting workshop",
    "mood": "adventure",
    "cost": 25,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🎟️",
    "description": "Choose a session within budget and compare aroma and flavor using the host's tasting guidance.",
    "steps": [
      "Find an official public listing; confirm current prices, availability, access requirements, and what equipment is included before committing.",
      "Choose a session within budget and compare aroma and flavor using the host's tasting guidance.",
      "Afterward, share one thing you learned or enjoyed and note whether you would like to return."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 735,
    "title": "Join a neighborhood welcome event",
    "mood": "adventure",
    "cost": 0,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🎟️",
    "description": "Attend a confirmed public gathering and introduce yourself without feeling obliged to share private contact details.",
    "steps": [
      "Find an official public listing; confirm current prices, availability, access requirements, and what equipment is included before committing.",
      "Attend a confirmed public gathering and introduce yourself without feeling obliged to share private contact details.",
      "Afterward, share one thing you learned or enjoyed and note whether you would like to return."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 736,
    "title": "Attend a volunteer orientation fair",
    "mood": "adventure",
    "cost": 0,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🎟️",
    "description": "Explore several organizations' publicly advertised roles and note time commitments before choosing any future involvement.",
    "steps": [
      "Find an official public listing; confirm current prices, availability, access requirements, and what equipment is included before committing.",
      "Explore several organizations' publicly advertised roles and note time commitments before choosing any future involvement.",
      "Afterward, share one thing you learned or enjoyed and note whether you would like to return."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 737,
    "title": "Help assemble care kits at an organized event",
    "mood": "adventure",
    "cost": 0,
    "time": 120,
    "min": 1,
    "max": 6,
    "icon": "🎟️",
    "description": "Join a registered volunteer session that provides approved supplies and follow its packing and handling instructions.",
    "steps": [
      "Find an official public listing; confirm current prices, availability, access requirements, and what equipment is included before committing.",
      "Join a registered volunteer session that provides approved supplies and follow its packing and handling instructions.",
      "Afterward, share one thing you learned or enjoyed and note whether you would like to return."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 738,
    "title": "Help sort donated books at a public volunteer session",
    "mood": "adventure",
    "cost": 0,
    "time": 120,
    "min": 1,
    "max": 6,
    "icon": "🎟️",
    "description": "Confirm a scheduled role with the organizer and sort materials using its condition and category rules.",
    "steps": [
      "Find an official public listing; confirm current prices, availability, access requirements, and what equipment is included before committing.",
      "Confirm a scheduled role with the organizer and sort materials using its condition and category rules.",
      "Afterward, share one thing you learned or enjoyed and note whether you would like to return."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 739,
    "title": "Help prepare a community event space",
    "mood": "adventure",
    "cost": 0,
    "time": 120,
    "min": 1,
    "max": 6,
    "icon": "🎟️",
    "description": "Join an approved volunteer session and perform only setup tasks the organizer assigns and equips you for.",
    "steps": [
      "Find an official public listing; confirm current prices, availability, access requirements, and what equipment is included before committing.",
      "Join an approved volunteer session and perform only setup tasks the organizer assigns and equips you for.",
      "Afterward, share one thing you learned or enjoyed and note whether you would like to return."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 740,
    "title": "Help maintain a public trail through an organized group",
    "mood": "adventure",
    "cost": 0,
    "time": 120,
    "min": 1,
    "max": 6,
    "icon": "🎟️",
    "description": "Register with an established trail organization and follow its task, equipment, and environmental guidance.",
    "steps": [
      "Find an official public listing; confirm current prices, availability, access requirements, and what equipment is included before committing.",
      "Register with an established trail organization and follow its task, equipment, and environmental guidance.",
      "Afterward, share one thing you learned or enjoyed and note whether you would like to return."
    ],
    "supplies": [
      "venue",
      "outdoor"
    ]
  },
  {
    "id": 741,
    "title": "Help label a community seed library",
    "mood": "adventure",
    "cost": 0,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🎟️",
    "description": "Join a library-approved session and follow its instructions for sorting and labeling appropriate seeds.",
    "steps": [
      "Find an official public listing; confirm current prices, availability, access requirements, and what equipment is included before committing.",
      "Join a library-approved session and follow its instructions for sorting and labeling appropriate seeds.",
      "Afterward, share one thing you learned or enjoyed and note whether you would like to return."
    ],
    "supplies": [
      "venue",
      "plants"
    ]
  },
  {
    "id": 742,
    "title": "Attend a public seed swap",
    "mood": "adventure",
    "cost": 0,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🎟️",
    "description": "Check organizer rules and local growing guidance and exchange only labeled seeds the event accepts.",
    "steps": [
      "Find an official public listing; confirm current prices, availability, access requirements, and what equipment is included before committing.",
      "Check organizer rules and local growing guidance and exchange only labeled seeds the event accepts.",
      "Afterward, share one thing you learned or enjoyed and note whether you would like to return."
    ],
    "supplies": [
      "venue",
      "plants"
    ]
  },
  {
    "id": 743,
    "title": "Attend a community repair demonstration",
    "mood": "adventure",
    "cost": 0,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🎟️",
    "description": "Watch an organizer demonstrate a basic repair and ask what training and tools it requires before attempting it yourself.",
    "steps": [
      "Find an official public listing; confirm current prices, availability, access requirements, and what equipment is included before committing.",
      "Watch an organizer demonstrate a basic repair and ask what training and tools it requires before attempting it yourself.",
      "Afterward, share one thing you learned or enjoyed and note whether you would like to return."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 744,
    "title": "Participate in a public oral-history recording day",
    "mood": "adventure",
    "cost": 0,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🎟️",
    "description": "Read the project's consent and use information and choose freely which ordinary memories you wish to share.",
    "steps": [
      "Find an official public listing; confirm current prices, availability, access requirements, and what equipment is included before committing.",
      "Read the project's consent and use information and choose freely which ordinary memories you wish to share.",
      "Afterward, share one thing you learned or enjoyed and note whether you would like to return."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 745,
    "title": "Join a supervised community mural session",
    "mood": "adventure",
    "cost": 0,
    "time": 120,
    "min": 1,
    "max": 6,
    "icon": "🎟️",
    "description": "Register for an authorized painting session and work only on the area and design assigned by the organizer.",
    "steps": [
      "Find an official public listing; confirm current prices, availability, access requirements, and what equipment is included before committing.",
      "Register for an authorized painting session and work only on the area and design assigned by the organizer.",
      "Afterward, share one thing you learned or enjoyed and note whether you would like to return."
    ],
    "supplies": [
      "venue",
      "craft"
    ]
  },
  {
    "id": 746,
    "title": "Attend a public park planning workshop",
    "mood": "adventure",
    "cost": 0,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🎟️",
    "description": "Review the public proposal and contribute respectful ideas about paths, shade, seating, or other amenities.",
    "steps": [
      "Find an official public listing; confirm current prices, availability, access requirements, and what equipment is included before committing.",
      "Review the public proposal and contribute respectful ideas about paths, shade, seating, or other amenities.",
      "Afterward, share one thing you learned or enjoyed and note whether you would like to return."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 747,
    "title": "Visit an accessibility design showcase",
    "mood": "adventure",
    "cost": 0,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🎟️",
    "description": "Find a public exhibition and learn how its designers account for different users and contexts.",
    "steps": [
      "Find an official public listing; confirm current prices, availability, access requirements, and what equipment is included before committing.",
      "Find a public exhibition and learn how its designers account for different users and contexts.",
      "Afterward, share one thing you learned or enjoyed and note whether you would like to return."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 748,
    "title": "Attend a public sustainability fair",
    "mood": "adventure",
    "cost": 0,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🎟️",
    "description": "Choose a free-entry event and compare concrete demonstrations of reuse, conservation, and resource tracking.",
    "steps": [
      "Find an official public listing; confirm current prices, availability, access requirements, and what equipment is included before committing.",
      "Choose a free-entry event and compare concrete demonstrations of reuse, conservation, and resource tracking.",
      "Afterward, share one thing you learned or enjoyed and note whether you would like to return."
    ],
    "supplies": [
      "venue"
    ]
  },
  {
    "id": 749,
    "title": "Join a free local orientation tour",
    "mood": "adventure",
    "cost": 0,
    "time": 90,
    "min": 1,
    "max": 6,
    "icon": "🎟️",
    "description": "Find an officially advertised introductory tour and learn how to access public amenities in an unfamiliar district.",
    "steps": [
      "Find an official public listing; confirm current prices, availability, access requirements, and what equipment is included before committing.",
      "Find an officially advertised introductory tour and learn how to access public amenities in an unfamiliar district.",
      "Afterward, share one thing you learned or enjoyed and note whether you would like to return."
    ],
    "supplies": [
      "venue",
      "outdoor"
    ]
  }
];
