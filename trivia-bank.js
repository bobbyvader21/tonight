'use strict';

// 500 built-in questions. Stable IDs support cross-session repeat tracking.
const builtInQuestions = [
  {
    "id": "bq-001",
    "category": "Geography",
    "difficulty": "easy",
    "question": "What is the capital of Argentina?",
    "answer": "Buenos Aires"
  },
  {
    "id": "bq-002",
    "category": "Geography",
    "difficulty": "easy",
    "question": "What is the capital of Australia?",
    "answer": "Canberra"
  },
  {
    "id": "bq-003",
    "category": "Geography",
    "difficulty": "easy",
    "question": "What is the capital of Austria?",
    "answer": "Vienna"
  },
  {
    "id": "bq-004",
    "category": "Geography",
    "difficulty": "easy",
    "question": "What is the capital of Belgium?",
    "answer": "Brussels"
  },
  {
    "id": "bq-005",
    "category": "Geography",
    "difficulty": "easy",
    "question": "What is the capital of Brazil?",
    "answer": "Brasília"
  },
  {
    "id": "bq-006",
    "category": "Geography",
    "difficulty": "easy",
    "question": "What is the capital of Canada?",
    "answer": "Ottawa"
  },
  {
    "id": "bq-007",
    "category": "Geography",
    "difficulty": "easy",
    "question": "What is the capital of Chile?",
    "answer": "Santiago"
  },
  {
    "id": "bq-008",
    "category": "Geography",
    "difficulty": "easy",
    "question": "What is the capital of China?",
    "answer": "Beijing"
  },
  {
    "id": "bq-009",
    "category": "Geography",
    "difficulty": "easy",
    "question": "What is the capital of Colombia?",
    "answer": "Bogotá"
  },
  {
    "id": "bq-010",
    "category": "Geography",
    "difficulty": "easy",
    "question": "What is the capital of Costa Rica?",
    "answer": "San José"
  },
  {
    "id": "bq-011",
    "category": "Geography",
    "difficulty": "easy",
    "question": "What is the capital of Cuba?",
    "answer": "Havana"
  },
  {
    "id": "bq-012",
    "category": "Geography",
    "difficulty": "easy",
    "question": "What is the capital of Czechia?",
    "answer": "Prague"
  },
  {
    "id": "bq-013",
    "category": "Geography",
    "difficulty": "easy",
    "question": "What is the capital of Denmark?",
    "answer": "Copenhagen"
  },
  {
    "id": "bq-014",
    "category": "Geography",
    "difficulty": "easy",
    "question": "What is the capital of Ecuador?",
    "answer": "Quito"
  },
  {
    "id": "bq-015",
    "category": "Geography",
    "difficulty": "easy",
    "question": "What is the capital of Egypt?",
    "answer": "Cairo"
  },
  {
    "id": "bq-016",
    "category": "Geography",
    "difficulty": "easy",
    "question": "What is the capital of Finland?",
    "answer": "Helsinki"
  },
  {
    "id": "bq-017",
    "category": "Geography",
    "difficulty": "easy",
    "question": "What is the capital of France?",
    "answer": "Paris"
  },
  {
    "id": "bq-018",
    "category": "Geography",
    "difficulty": "easy",
    "question": "What is the capital of Germany?",
    "answer": "Berlin"
  },
  {
    "id": "bq-019",
    "category": "Geography",
    "difficulty": "easy",
    "question": "What is the capital of Ghana?",
    "answer": "Accra"
  },
  {
    "id": "bq-020",
    "category": "Geography",
    "difficulty": "easy",
    "question": "What is the capital of Greece?",
    "answer": "Athens"
  },
  {
    "id": "bq-021",
    "category": "Geography",
    "difficulty": "easy",
    "question": "What is the capital of Hungary?",
    "answer": "Budapest"
  },
  {
    "id": "bq-022",
    "category": "Geography",
    "difficulty": "easy",
    "question": "What is the capital of Iceland?",
    "answer": "Reykjavík"
  },
  {
    "id": "bq-023",
    "category": "Geography",
    "difficulty": "easy",
    "question": "What is the capital of India?",
    "answer": "New Delhi"
  },
  {
    "id": "bq-024",
    "category": "Geography",
    "difficulty": "easy",
    "question": "What is the capital of Ireland?",
    "answer": "Dublin"
  },
  {
    "id": "bq-025",
    "category": "Geography",
    "difficulty": "easy",
    "question": "What is the capital of Italy?",
    "answer": "Rome"
  },
  {
    "id": "bq-026",
    "category": "Geography",
    "difficulty": "easy",
    "question": "What is the capital of Jamaica?",
    "answer": "Kingston"
  },
  {
    "id": "bq-027",
    "category": "Geography",
    "difficulty": "easy",
    "question": "What is the capital of Japan?",
    "answer": "Tokyo"
  },
  {
    "id": "bq-028",
    "category": "Geography",
    "difficulty": "easy",
    "question": "What is the capital of Kenya?",
    "answer": "Nairobi"
  },
  {
    "id": "bq-029",
    "category": "Geography",
    "difficulty": "easy",
    "question": "What is the capital of Mexico?",
    "answer": "Mexico City"
  },
  {
    "id": "bq-030",
    "category": "Geography",
    "difficulty": "easy",
    "question": "What is the capital of Mongolia?",
    "answer": "Ulaanbaatar"
  },
  {
    "id": "bq-031",
    "category": "Geography",
    "difficulty": "easy",
    "question": "What is the capital of Morocco?",
    "answer": "Rabat"
  },
  {
    "id": "bq-032",
    "category": "Geography",
    "difficulty": "easy",
    "question": "What is the capital of Nepal?",
    "answer": "Kathmandu"
  },
  {
    "id": "bq-033",
    "category": "Geography",
    "difficulty": "easy",
    "question": "What is the capital of New Zealand?",
    "answer": "Wellington"
  },
  {
    "id": "bq-034",
    "category": "Geography",
    "difficulty": "easy",
    "question": "What is the capital of Nigeria?",
    "answer": "Abuja"
  },
  {
    "id": "bq-035",
    "category": "Geography",
    "difficulty": "easy",
    "question": "What is the capital of Norway?",
    "answer": "Oslo"
  },
  {
    "id": "bq-036",
    "category": "Geography",
    "difficulty": "easy",
    "question": "What is the capital of Pakistan?",
    "answer": "Islamabad"
  },
  {
    "id": "bq-037",
    "category": "Geography",
    "difficulty": "easy",
    "question": "What is the capital of Panama?",
    "answer": "Panama City"
  },
  {
    "id": "bq-038",
    "category": "Geography",
    "difficulty": "easy",
    "question": "What is the capital of Peru?",
    "answer": "Lima"
  },
  {
    "id": "bq-039",
    "category": "Geography",
    "difficulty": "easy",
    "question": "What is the capital of Poland?",
    "answer": "Warsaw"
  },
  {
    "id": "bq-040",
    "category": "Geography",
    "difficulty": "easy",
    "question": "What is the capital of Portugal?",
    "answer": "Lisbon"
  },
  {
    "id": "bq-041",
    "category": "Science",
    "difficulty": "easy",
    "question": "Which chemical element has the symbol H?",
    "answer": "Hydrogen"
  },
  {
    "id": "bq-042",
    "category": "Science",
    "difficulty": "easy",
    "question": "Which chemical element has the symbol He?",
    "answer": "Helium"
  },
  {
    "id": "bq-043",
    "category": "Science",
    "difficulty": "easy",
    "question": "Which chemical element has the symbol Li?",
    "answer": "Lithium"
  },
  {
    "id": "bq-044",
    "category": "Science",
    "difficulty": "easy",
    "question": "Which chemical element has the symbol Be?",
    "answer": "Beryllium"
  },
  {
    "id": "bq-045",
    "category": "Science",
    "difficulty": "easy",
    "question": "Which chemical element has the symbol B?",
    "answer": "Boron"
  },
  {
    "id": "bq-046",
    "category": "Science",
    "difficulty": "easy",
    "question": "Which chemical element has the symbol C?",
    "answer": "Carbon"
  },
  {
    "id": "bq-047",
    "category": "Science",
    "difficulty": "easy",
    "question": "Which chemical element has the symbol N?",
    "answer": "Nitrogen"
  },
  {
    "id": "bq-048",
    "category": "Science",
    "difficulty": "easy",
    "question": "Which chemical element has the symbol O?",
    "answer": "Oxygen"
  },
  {
    "id": "bq-049",
    "category": "Science",
    "difficulty": "easy",
    "question": "Which chemical element has the symbol F?",
    "answer": "Fluorine"
  },
  {
    "id": "bq-050",
    "category": "Science",
    "difficulty": "easy",
    "question": "Which chemical element has the symbol Ne?",
    "answer": "Neon"
  },
  {
    "id": "bq-051",
    "category": "Science",
    "difficulty": "easy",
    "question": "Which chemical element has the symbol Na?",
    "answer": "Sodium"
  },
  {
    "id": "bq-052",
    "category": "Science",
    "difficulty": "easy",
    "question": "Which chemical element has the symbol Mg?",
    "answer": "Magnesium"
  },
  {
    "id": "bq-053",
    "category": "Science",
    "difficulty": "easy",
    "question": "Which chemical element has the symbol Al?",
    "answer": "Aluminum (aluminium)"
  },
  {
    "id": "bq-054",
    "category": "Science",
    "difficulty": "easy",
    "question": "Which chemical element has the symbol Si?",
    "answer": "Silicon"
  },
  {
    "id": "bq-055",
    "category": "Science",
    "difficulty": "easy",
    "question": "Which chemical element has the symbol P?",
    "answer": "Phosphorus"
  },
  {
    "id": "bq-056",
    "category": "Science",
    "difficulty": "easy",
    "question": "Which chemical element has the symbol S?",
    "answer": "Sulfur"
  },
  {
    "id": "bq-057",
    "category": "Science",
    "difficulty": "easy",
    "question": "Which chemical element has the symbol Cl?",
    "answer": "Chlorine"
  },
  {
    "id": "bq-058",
    "category": "Science",
    "difficulty": "easy",
    "question": "Which chemical element has the symbol Ar?",
    "answer": "Argon"
  },
  {
    "id": "bq-059",
    "category": "Science",
    "difficulty": "easy",
    "question": "Which chemical element has the symbol K?",
    "answer": "Potassium"
  },
  {
    "id": "bq-060",
    "category": "Science",
    "difficulty": "easy",
    "question": "Which chemical element has the symbol Ca?",
    "answer": "Calcium"
  },
  {
    "id": "bq-061",
    "category": "Science",
    "difficulty": "hard",
    "question": "Which chemical element has the symbol Sc?",
    "answer": "Scandium"
  },
  {
    "id": "bq-062",
    "category": "Science",
    "difficulty": "hard",
    "question": "Which chemical element has the symbol Ti?",
    "answer": "Titanium"
  },
  {
    "id": "bq-063",
    "category": "Science",
    "difficulty": "hard",
    "question": "Which chemical element has the symbol V?",
    "answer": "Vanadium"
  },
  {
    "id": "bq-064",
    "category": "Science",
    "difficulty": "hard",
    "question": "Which chemical element has the symbol Cr?",
    "answer": "Chromium"
  },
  {
    "id": "bq-065",
    "category": "Science",
    "difficulty": "hard",
    "question": "Which chemical element has the symbol Mn?",
    "answer": "Manganese"
  },
  {
    "id": "bq-066",
    "category": "Science",
    "difficulty": "hard",
    "question": "Which chemical element has the symbol Fe?",
    "answer": "Iron"
  },
  {
    "id": "bq-067",
    "category": "Science",
    "difficulty": "hard",
    "question": "Which chemical element has the symbol Co?",
    "answer": "Cobalt"
  },
  {
    "id": "bq-068",
    "category": "Science",
    "difficulty": "hard",
    "question": "Which chemical element has the symbol Ni?",
    "answer": "Nickel"
  },
  {
    "id": "bq-069",
    "category": "Science",
    "difficulty": "hard",
    "question": "Which chemical element has the symbol Cu?",
    "answer": "Copper"
  },
  {
    "id": "bq-070",
    "category": "Science",
    "difficulty": "hard",
    "question": "Which chemical element has the symbol Zn?",
    "answer": "Zinc"
  },
  {
    "id": "bq-071",
    "category": "Science",
    "difficulty": "hard",
    "question": "Which chemical element has the symbol Ga?",
    "answer": "Gallium"
  },
  {
    "id": "bq-072",
    "category": "Science",
    "difficulty": "hard",
    "question": "Which chemical element has the symbol Ge?",
    "answer": "Germanium"
  },
  {
    "id": "bq-073",
    "category": "Science",
    "difficulty": "hard",
    "question": "Which chemical element has the symbol As?",
    "answer": "Arsenic"
  },
  {
    "id": "bq-074",
    "category": "Science",
    "difficulty": "hard",
    "question": "Which chemical element has the symbol Se?",
    "answer": "Selenium"
  },
  {
    "id": "bq-075",
    "category": "Science",
    "difficulty": "hard",
    "question": "Which chemical element has the symbol Br?",
    "answer": "Bromine"
  },
  {
    "id": "bq-076",
    "category": "Science",
    "difficulty": "hard",
    "question": "Which chemical element has the symbol Kr?",
    "answer": "Krypton"
  },
  {
    "id": "bq-077",
    "category": "Science",
    "difficulty": "hard",
    "question": "Which chemical element has the symbol Rb?",
    "answer": "Rubidium"
  },
  {
    "id": "bq-078",
    "category": "Science",
    "difficulty": "hard",
    "question": "Which chemical element has the symbol Sr?",
    "answer": "Strontium"
  },
  {
    "id": "bq-079",
    "category": "Science",
    "difficulty": "hard",
    "question": "Which chemical element has the symbol Y?",
    "answer": "Yttrium"
  },
  {
    "id": "bq-080",
    "category": "Science",
    "difficulty": "hard",
    "question": "Which chemical element has the symbol Zr?",
    "answer": "Zirconium"
  },
  {
    "id": "bq-081",
    "category": "Geography",
    "difficulty": "medium",
    "question": "Which ocean is the largest by surface area?",
    "answer": "The Pacific Ocean"
  },
  {
    "id": "bq-082",
    "category": "Geography",
    "difficulty": "medium",
    "question": "Which ocean lies between Africa and Australia?",
    "answer": "The Indian Ocean"
  },
  {
    "id": "bq-083",
    "category": "Geography",
    "difficulty": "medium",
    "question": "On which continent is the Sahara Desert?",
    "answer": "Africa"
  },
  {
    "id": "bq-084",
    "category": "Geography",
    "difficulty": "medium",
    "question": "Which country contains the city of Barcelona?",
    "answer": "Spain"
  },
  {
    "id": "bq-085",
    "category": "Geography",
    "difficulty": "medium",
    "question": "Which country contains the city of Kyoto?",
    "answer": "Japan"
  },
  {
    "id": "bq-086",
    "category": "Geography",
    "difficulty": "medium",
    "question": "Which country contains the city of Venice?",
    "answer": "Italy"
  },
  {
    "id": "bq-087",
    "category": "Geography",
    "difficulty": "medium",
    "question": "Which country contains the city of Vancouver?",
    "answer": "Canada"
  },
  {
    "id": "bq-088",
    "category": "Geography",
    "difficulty": "medium",
    "question": "Which country contains the city of Mumbai?",
    "answer": "India"
  },
  {
    "id": "bq-089",
    "category": "Geography",
    "difficulty": "medium",
    "question": "Which country contains the city of Melbourne?",
    "answer": "Australia"
  },
  {
    "id": "bq-090",
    "category": "Geography",
    "difficulty": "medium",
    "question": "Which country contains the city of Rio de Janeiro?",
    "answer": "Brazil"
  },
  {
    "id": "bq-091",
    "category": "Geography",
    "difficulty": "medium",
    "question": "Which country contains the city of Cape Town?",
    "answer": "South Africa"
  },
  {
    "id": "bq-092",
    "category": "Geography",
    "difficulty": "medium",
    "question": "Which country contains the city of Marrakech?",
    "answer": "Morocco"
  },
  {
    "id": "bq-093",
    "category": "Geography",
    "difficulty": "medium",
    "question": "Which country contains the city of Munich?",
    "answer": "Germany"
  },
  {
    "id": "bq-094",
    "category": "Geography",
    "difficulty": "medium",
    "question": "Which country contains the city of Lyon?",
    "answer": "France"
  },
  {
    "id": "bq-095",
    "category": "Geography",
    "difficulty": "medium",
    "question": "Which country contains the city of Porto?",
    "answer": "Portugal"
  },
  {
    "id": "bq-096",
    "category": "Geography",
    "difficulty": "medium",
    "question": "Which country contains the city of Kraków?",
    "answer": "Poland"
  },
  {
    "id": "bq-097",
    "category": "Geography",
    "difficulty": "medium",
    "question": "Which country contains the city of Gothenburg?",
    "answer": "Sweden"
  },
  {
    "id": "bq-098",
    "category": "Geography",
    "difficulty": "medium",
    "question": "Which country contains the city of Bergen?",
    "answer": "Norway"
  },
  {
    "id": "bq-099",
    "category": "Geography",
    "difficulty": "medium",
    "question": "Which country contains the city of Cork?",
    "answer": "Ireland"
  },
  {
    "id": "bq-100",
    "category": "Geography",
    "difficulty": "medium",
    "question": "Which country contains the city of Manchester?",
    "answer": "United Kingdom"
  },
  {
    "id": "bq-101",
    "category": "Geography",
    "difficulty": "medium",
    "question": "What mountain range separates much of France from Spain?",
    "answer": "The Pyrenees"
  },
  {
    "id": "bq-102",
    "category": "Geography",
    "difficulty": "medium",
    "question": "What mountain range runs along western South America?",
    "answer": "The Andes"
  },
  {
    "id": "bq-103",
    "category": "Geography",
    "difficulty": "medium",
    "question": "What mountain range contains Mount Everest?",
    "answer": "The Himalayas"
  },
  {
    "id": "bq-104",
    "category": "Geography",
    "difficulty": "medium",
    "question": "Which continent has no permanent native human population?",
    "answer": "Antarctica"
  },
  {
    "id": "bq-105",
    "category": "Geography",
    "difficulty": "medium",
    "question": "What is the largest island that is not classified as a continent?",
    "answer": "Greenland"
  },
  {
    "id": "bq-106",
    "category": "Geography",
    "difficulty": "medium",
    "question": "Which sea lies between Europe and northern Africa?",
    "answer": "The Mediterranean Sea"
  },
  {
    "id": "bq-107",
    "category": "Geography",
    "difficulty": "medium",
    "question": "Which canal connects the Atlantic and Pacific oceans through Central America?",
    "answer": "The Panama Canal"
  },
  {
    "id": "bq-108",
    "category": "Geography",
    "difficulty": "medium",
    "question": "Which canal connects the Mediterranean Sea and the Red Sea?",
    "answer": "The Suez Canal"
  },
  {
    "id": "bq-109",
    "category": "Geography",
    "difficulty": "medium",
    "question": "What river runs through Paris?",
    "answer": "The Seine"
  },
  {
    "id": "bq-110",
    "category": "Geography",
    "difficulty": "medium",
    "question": "What river runs through London?",
    "answer": "The Thames"
  },
  {
    "id": "bq-111",
    "category": "Geography",
    "difficulty": "medium",
    "question": "What river runs through Rome?",
    "answer": "The Tiber"
  },
  {
    "id": "bq-112",
    "category": "Geography",
    "difficulty": "medium",
    "question": "What imaginary line divides Earth into Northern and Southern hemispheres?",
    "answer": "The equator"
  },
  {
    "id": "bq-113",
    "category": "Geography",
    "difficulty": "medium",
    "question": "What is zero degrees longitude commonly called?",
    "answer": "The prime meridian"
  },
  {
    "id": "bq-114",
    "category": "Geography",
    "difficulty": "medium",
    "question": "What are lines measuring distance north or south of the equator called?",
    "answer": "Lines of latitude"
  },
  {
    "id": "bq-115",
    "category": "Geography",
    "difficulty": "medium",
    "question": "What are lines running between the poles used to measure east-west position called?",
    "answer": "Lines of longitude"
  },
  {
    "id": "bq-116",
    "category": "Geography",
    "difficulty": "medium",
    "question": "Which U.S. state contains the Grand Canyon?",
    "answer": "Arizona"
  },
  {
    "id": "bq-117",
    "category": "Geography",
    "difficulty": "medium",
    "question": "Which U.S. state contains Yellowstone's largest area?",
    "answer": "Wyoming"
  },
  {
    "id": "bq-118",
    "category": "Geography",
    "difficulty": "medium",
    "question": "Which U.S. state has Honolulu as its capital?",
    "answer": "Hawaii"
  },
  {
    "id": "bq-119",
    "category": "Geography",
    "difficulty": "medium",
    "question": "Which U.S. state has Austin as its capital?",
    "answer": "Texas"
  },
  {
    "id": "bq-120",
    "category": "Geography",
    "difficulty": "medium",
    "question": "Which U.S. state has Sacramento as its capital?",
    "answer": "California"
  },
  {
    "id": "bq-121",
    "category": "Science",
    "difficulty": "medium",
    "question": "Which planet is known as the Red Planet?",
    "answer": "Mars"
  },
  {
    "id": "bq-122",
    "category": "Science",
    "difficulty": "medium",
    "question": "Which planet is closest to the Sun?",
    "answer": "Mercury"
  },
  {
    "id": "bq-123",
    "category": "Science",
    "difficulty": "medium",
    "question": "Which planet is the largest in our solar system?",
    "answer": "Jupiter"
  },
  {
    "id": "bq-124",
    "category": "Science",
    "difficulty": "medium",
    "question": "Which planet is famous for its prominent rings?",
    "answer": "Saturn"
  },
  {
    "id": "bq-125",
    "category": "Science",
    "difficulty": "medium",
    "question": "What is Earth's natural satellite called?",
    "answer": "The Moon"
  },
  {
    "id": "bq-126",
    "category": "Science",
    "difficulty": "medium",
    "question": "What is the name of our galaxy?",
    "answer": "The Milky Way"
  },
  {
    "id": "bq-127",
    "category": "Science",
    "difficulty": "medium",
    "question": "What force keeps planets in orbit around the Sun?",
    "answer": "Gravity"
  },
  {
    "id": "bq-128",
    "category": "Science",
    "difficulty": "medium",
    "question": "What gas do plants take in during photosynthesis?",
    "answer": "Carbon dioxide"
  },
  {
    "id": "bq-129",
    "category": "Science",
    "difficulty": "medium",
    "question": "What gas do plants release during photosynthesis?",
    "answer": "Oxygen"
  },
  {
    "id": "bq-130",
    "category": "Science",
    "difficulty": "medium",
    "question": "What is the chemical formula for water?",
    "answer": "H₂O"
  },
  {
    "id": "bq-131",
    "category": "Science",
    "difficulty": "medium",
    "question": "At standard atmospheric pressure, at what Celsius temperature does pure water freeze?",
    "answer": "0°C"
  },
  {
    "id": "bq-132",
    "category": "Science",
    "difficulty": "medium",
    "question": "At standard atmospheric pressure, at what Celsius temperature does pure water boil?",
    "answer": "100°C"
  },
  {
    "id": "bq-133",
    "category": "Science",
    "difficulty": "medium",
    "question": "What is the SI unit of electric current?",
    "answer": "The ampere"
  },
  {
    "id": "bq-134",
    "category": "Science",
    "difficulty": "medium",
    "question": "What is the SI unit of force?",
    "answer": "The newton"
  },
  {
    "id": "bq-135",
    "category": "Science",
    "difficulty": "medium",
    "question": "What is the SI unit of energy?",
    "answer": "The joule"
  },
  {
    "id": "bq-136",
    "category": "Science",
    "difficulty": "medium",
    "question": "What is the SI unit of power?",
    "answer": "The watt"
  },
  {
    "id": "bq-137",
    "category": "Science",
    "difficulty": "medium",
    "question": "What is the SI unit of frequency?",
    "answer": "The hertz"
  },
  {
    "id": "bq-138",
    "category": "Science",
    "difficulty": "medium",
    "question": "What is the SI unit of electrical resistance?",
    "answer": "The ohm"
  },
  {
    "id": "bq-139",
    "category": "Science",
    "difficulty": "medium",
    "question": "What instrument measures temperature?",
    "answer": "A thermometer"
  },
  {
    "id": "bq-140",
    "category": "Science",
    "difficulty": "medium",
    "question": "What instrument measures atmospheric pressure?",
    "answer": "A barometer"
  },
  {
    "id": "bq-141",
    "category": "Science",
    "difficulty": "medium",
    "question": "What instrument measures wind speed?",
    "answer": "An anemometer"
  },
  {
    "id": "bq-142",
    "category": "Science",
    "difficulty": "medium",
    "question": "What instrument is used to view very small objects?",
    "answer": "A microscope"
  },
  {
    "id": "bq-143",
    "category": "Science",
    "difficulty": "medium",
    "question": "What instrument is used to observe distant celestial objects?",
    "answer": "A telescope"
  },
  {
    "id": "bq-144",
    "category": "Science",
    "difficulty": "medium",
    "question": "What do we call a change from liquid to gas at the liquid's surface?",
    "answer": "Evaporation"
  },
  {
    "id": "bq-145",
    "category": "Science",
    "difficulty": "medium",
    "question": "What do we call a change from gas to liquid?",
    "answer": "Condensation"
  },
  {
    "id": "bq-146",
    "category": "Science",
    "difficulty": "medium",
    "question": "What do we call a change from solid directly to gas?",
    "answer": "Sublimation"
  },
  {
    "id": "bq-147",
    "category": "Science",
    "difficulty": "medium",
    "question": "What do we call a change from liquid to solid?",
    "answer": "Freezing (solidification)"
  },
  {
    "id": "bq-148",
    "category": "Science",
    "difficulty": "medium",
    "question": "What do we call a change from solid to liquid?",
    "answer": "Melting"
  },
  {
    "id": "bq-149",
    "category": "Science",
    "difficulty": "medium",
    "question": "What negatively charged particle is found around an atomic nucleus?",
    "answer": "An electron"
  },
  {
    "id": "bq-150",
    "category": "Science",
    "difficulty": "medium",
    "question": "What positively charged particle is found in an atomic nucleus?",
    "answer": "A proton"
  },
  {
    "id": "bq-151",
    "category": "Science",
    "difficulty": "medium",
    "question": "What electrically neutral particle is commonly found in an atomic nucleus?",
    "answer": "A neutron"
  },
  {
    "id": "bq-152",
    "category": "Science",
    "difficulty": "medium",
    "question": "What does an element's atomic number count?",
    "answer": "Protons in its nucleus"
  },
  {
    "id": "bq-153",
    "category": "Science",
    "difficulty": "medium",
    "question": "What scale describes how acidic or basic a solution is?",
    "answer": "The pH scale"
  },
  {
    "id": "bq-154",
    "category": "Science",
    "difficulty": "medium",
    "question": "What is the hardest mineral on the Mohs scale?",
    "answer": "Diamond"
  },
  {
    "id": "bq-155",
    "category": "Science",
    "difficulty": "medium",
    "question": "What type of rock forms when molten material cools and solidifies?",
    "answer": "Igneous rock"
  },
  {
    "id": "bq-156",
    "category": "Science",
    "difficulty": "medium",
    "question": "What type of rock forms when sediments are compacted or cemented?",
    "answer": "Sedimentary rock"
  },
  {
    "id": "bq-157",
    "category": "Science",
    "difficulty": "medium",
    "question": "What type of rock is changed by heat and pressure without fully melting?",
    "answer": "Metamorphic rock"
  },
  {
    "id": "bq-158",
    "category": "Science",
    "difficulty": "medium",
    "question": "What is molten rock beneath Earth's surface called?",
    "answer": "Magma"
  },
  {
    "id": "bq-159",
    "category": "Science",
    "difficulty": "medium",
    "question": "What is molten rock on Earth's surface called?",
    "answer": "Lava"
  },
  {
    "id": "bq-160",
    "category": "Science",
    "difficulty": "medium",
    "question": "What process wears away and transports rock or soil?",
    "answer": "Erosion"
  },
  {
    "id": "bq-161",
    "category": "Nature",
    "difficulty": "medium",
    "question": "How many legs does an adult insect have?",
    "answer": "Six"
  },
  {
    "id": "bq-162",
    "category": "Nature",
    "difficulty": "medium",
    "question": "How many legs does a typical adult spider have?",
    "answer": "Eight"
  },
  {
    "id": "bq-163",
    "category": "Nature",
    "difficulty": "medium",
    "question": "What is the largest animal alive today?",
    "answer": "The blue whale"
  },
  {
    "id": "bq-164",
    "category": "Nature",
    "difficulty": "medium",
    "question": "What do caterpillars become after metamorphosis?",
    "answer": "Butterflies or moths"
  },
  {
    "id": "bq-165",
    "category": "Nature",
    "difficulty": "medium",
    "question": "What do tadpoles generally develop into?",
    "answer": "Frogs or toads"
  },
  {
    "id": "bq-166",
    "category": "Nature",
    "difficulty": "medium",
    "question": "What is a young dog called?",
    "answer": "A puppy"
  },
  {
    "id": "bq-167",
    "category": "Nature",
    "difficulty": "medium",
    "question": "What is a young cat called?",
    "answer": "A kitten"
  },
  {
    "id": "bq-168",
    "category": "Nature",
    "difficulty": "medium",
    "question": "What is a young horse called?",
    "answer": "A foal"
  },
  {
    "id": "bq-169",
    "category": "Nature",
    "difficulty": "medium",
    "question": "What is a young cow called?",
    "answer": "A calf"
  },
  {
    "id": "bq-170",
    "category": "Nature",
    "difficulty": "medium",
    "question": "What is a young sheep called?",
    "answer": "A lamb"
  },
  {
    "id": "bq-171",
    "category": "Nature",
    "difficulty": "medium",
    "question": "What is a young goat called?",
    "answer": "A kid"
  },
  {
    "id": "bq-172",
    "category": "Nature",
    "difficulty": "medium",
    "question": "What is a young deer called?",
    "answer": "A fawn"
  },
  {
    "id": "bq-173",
    "category": "Nature",
    "difficulty": "medium",
    "question": "What is a young swan called?",
    "answer": "A cygnet"
  },
  {
    "id": "bq-174",
    "category": "Nature",
    "difficulty": "medium",
    "question": "What is a group of lions commonly called?",
    "answer": "A pride"
  },
  {
    "id": "bq-175",
    "category": "Nature",
    "difficulty": "medium",
    "question": "What is a group of wolves commonly called?",
    "answer": "A pack"
  },
  {
    "id": "bq-176",
    "category": "Nature",
    "difficulty": "medium",
    "question": "What is a group of fish commonly called?",
    "answer": "A school or shoal"
  },
  {
    "id": "bq-177",
    "category": "Nature",
    "difficulty": "medium",
    "question": "Which mammal is capable of sustained powered flight?",
    "answer": "A bat"
  },
  {
    "id": "bq-178",
    "category": "Nature",
    "difficulty": "medium",
    "question": "What substance do bees collect from flowers to make honey?",
    "answer": "Nectar"
  },
  {
    "id": "bq-179",
    "category": "Nature",
    "difficulty": "medium",
    "question": "What is the process of transferring pollen between flowers called?",
    "answer": "Pollination"
  },
  {
    "id": "bq-180",
    "category": "Nature",
    "difficulty": "medium",
    "question": "What pigment gives most leaves their green color?",
    "answer": "Chlorophyll"
  },
  {
    "id": "bq-181",
    "category": "Nature",
    "difficulty": "medium",
    "question": "What plant structure usually absorbs water from soil?",
    "answer": "Roots"
  },
  {
    "id": "bq-182",
    "category": "Nature",
    "difficulty": "medium",
    "question": "What plant structures contain the seeds of most conifers?",
    "answer": "Cones"
  },
  {
    "id": "bq-183",
    "category": "Nature",
    "difficulty": "medium",
    "question": "What do we call trees that lose their leaves seasonally?",
    "answer": "Deciduous trees"
  },
  {
    "id": "bq-184",
    "category": "Nature",
    "difficulty": "medium",
    "question": "What do we call plants that live for more than two years?",
    "answer": "Perennials"
  },
  {
    "id": "bq-185",
    "category": "Nature",
    "difficulty": "medium",
    "question": "What do we call plants that complete their life cycle in one growing season?",
    "answer": "Annuals"
  },
  {
    "id": "bq-186",
    "category": "Nature",
    "difficulty": "medium",
    "question": "What is an animal that eats only plants called?",
    "answer": "An herbivore"
  },
  {
    "id": "bq-187",
    "category": "Nature",
    "difficulty": "medium",
    "question": "What is an animal that eats other animals called?",
    "answer": "A carnivore"
  },
  {
    "id": "bq-188",
    "category": "Nature",
    "difficulty": "medium",
    "question": "What is an animal that eats both plants and animals called?",
    "answer": "An omnivore"
  },
  {
    "id": "bq-189",
    "category": "Nature",
    "difficulty": "medium",
    "question": "What is an organism that breaks down dead material called?",
    "answer": "A decomposer"
  },
  {
    "id": "bq-190",
    "category": "Nature",
    "difficulty": "medium",
    "question": "What is an animal's natural living environment called?",
    "answer": "Its habitat"
  },
  {
    "id": "bq-191",
    "category": "Nature",
    "difficulty": "medium",
    "question": "What do we call the variety of living organisms in an area?",
    "answer": "Biodiversity"
  },
  {
    "id": "bq-192",
    "category": "Nature",
    "difficulty": "medium",
    "question": "What do we call a species found naturally only in one geographic area?",
    "answer": "An endemic species"
  },
  {
    "id": "bq-193",
    "category": "Nature",
    "difficulty": "medium",
    "question": "Which bird is known for its ability to hover and fly backward?",
    "answer": "The hummingbird"
  },
  {
    "id": "bq-194",
    "category": "Nature",
    "difficulty": "medium",
    "question": "Which large flightless bird is native to Australia?",
    "answer": "The emu"
  },
  {
    "id": "bq-195",
    "category": "Nature",
    "difficulty": "medium",
    "question": "Which large flightless bird is native to Africa?",
    "answer": "The ostrich"
  },
  {
    "id": "bq-196",
    "category": "Nature",
    "difficulty": "medium",
    "question": "Which group of birds is especially associated with Antarctica?",
    "answer": "Penguins"
  },
  {
    "id": "bq-197",
    "category": "Nature",
    "difficulty": "medium",
    "question": "Which marine mammals have tusks and prominent whiskers?",
    "answer": "Walruses"
  },
  {
    "id": "bq-198",
    "category": "Nature",
    "difficulty": "medium",
    "question": "Which bear species is native to the Arctic?",
    "answer": "The polar bear"
  },
  {
    "id": "bq-199",
    "category": "Nature",
    "difficulty": "medium",
    "question": "What black-and-white bear is native to China?",
    "answer": "The giant panda"
  },
  {
    "id": "bq-200",
    "category": "Nature",
    "difficulty": "medium",
    "question": "Which Australian marsupial is known for hopping and carrying young in a pouch?",
    "answer": "The kangaroo"
  },
  {
    "id": "bq-201",
    "category": "Nature",
    "difficulty": "medium",
    "question": "Which marsupial feeds mainly on eucalyptus leaves?",
    "answer": "The koala"
  },
  {
    "id": "bq-202",
    "category": "Nature",
    "difficulty": "medium",
    "question": "Which egg-laying mammal has a duck-like bill?",
    "answer": "The platypus"
  },
  {
    "id": "bq-203",
    "category": "Nature",
    "difficulty": "medium",
    "question": "What is the name for an animal active mainly at night?",
    "answer": "Nocturnal"
  },
  {
    "id": "bq-204",
    "category": "Nature",
    "difficulty": "medium",
    "question": "What is the name for an animal active mainly during the day?",
    "answer": "Diurnal"
  },
  {
    "id": "bq-205",
    "category": "Nature",
    "difficulty": "medium",
    "question": "What is the name for an animal active mainly at dawn and dusk?",
    "answer": "Crepuscular"
  },
  {
    "id": "bq-206",
    "category": "Nature",
    "difficulty": "medium",
    "question": "What type of animal is a Komodo dragon?",
    "answer": "A lizard"
  },
  {
    "id": "bq-207",
    "category": "Nature",
    "difficulty": "medium",
    "question": "What type of animal is a salamander?",
    "answer": "An amphibian"
  },
  {
    "id": "bq-208",
    "category": "Nature",
    "difficulty": "medium",
    "question": "What type of animal is a shark: mammal or fish?",
    "answer": "Fish"
  },
  {
    "id": "bq-209",
    "category": "Nature",
    "difficulty": "medium",
    "question": "What type of animal is a dolphin: mammal or fish?",
    "answer": "Mammal"
  },
  {
    "id": "bq-210",
    "category": "Nature",
    "difficulty": "medium",
    "question": "What external covering protects a turtle's body?",
    "answer": "A shell"
  },
  {
    "id": "bq-211",
    "category": "Books & Art",
    "difficulty": "medium",
    "question": "Who wrote Pride and Prejudice?",
    "answer": "Jane Austen"
  },
  {
    "id": "bq-212",
    "category": "Books & Art",
    "difficulty": "medium",
    "question": "Who wrote The Hobbit?",
    "answer": "J. R. R. Tolkien"
  },
  {
    "id": "bq-213",
    "category": "Books & Art",
    "difficulty": "medium",
    "question": "Who created Sherlock Holmes?",
    "answer": "Arthur Conan Doyle"
  },
  {
    "id": "bq-214",
    "category": "Books & Art",
    "difficulty": "medium",
    "question": "Who wrote Frankenstein?",
    "answer": "Mary Shelley"
  },
  {
    "id": "bq-215",
    "category": "Books & Art",
    "difficulty": "medium",
    "question": "Who wrote Dracula?",
    "answer": "Bram Stoker"
  },
  {
    "id": "bq-216",
    "category": "Books & Art",
    "difficulty": "medium",
    "question": "Who wrote Alice's Adventures in Wonderland?",
    "answer": "Lewis Carroll"
  },
  {
    "id": "bq-217",
    "category": "Books & Art",
    "difficulty": "medium",
    "question": "Who wrote The Wonderful Wizard of Oz?",
    "answer": "L. Frank Baum"
  },
  {
    "id": "bq-218",
    "category": "Books & Art",
    "difficulty": "medium",
    "question": "Who wrote A Christmas Carol?",
    "answer": "Charles Dickens"
  },
  {
    "id": "bq-219",
    "category": "Books & Art",
    "difficulty": "medium",
    "question": "Who wrote Romeo and Juliet?",
    "answer": "William Shakespeare"
  },
  {
    "id": "bq-220",
    "category": "Books & Art",
    "difficulty": "medium",
    "question": "Who wrote Hamlet?",
    "answer": "William Shakespeare"
  },
  {
    "id": "bq-221",
    "category": "Books & Art",
    "difficulty": "medium",
    "question": "Who wrote Macbeth?",
    "answer": "William Shakespeare"
  },
  {
    "id": "bq-222",
    "category": "Books & Art",
    "difficulty": "medium",
    "question": "Who wrote The Odyssey, according to ancient tradition?",
    "answer": "Homer"
  },
  {
    "id": "bq-223",
    "category": "Books & Art",
    "difficulty": "medium",
    "question": "Who wrote The Divine Comedy?",
    "answer": "Dante Alighieri"
  },
  {
    "id": "bq-224",
    "category": "Books & Art",
    "difficulty": "medium",
    "question": "Who wrote Don Quixote?",
    "answer": "Miguel de Cervantes"
  },
  {
    "id": "bq-225",
    "category": "Books & Art",
    "difficulty": "medium",
    "question": "Who wrote The Little Prince?",
    "answer": "Antoine de Saint-Exupéry"
  },
  {
    "id": "bq-226",
    "category": "Books & Art",
    "difficulty": "medium",
    "question": "Who wrote The Lion, the Witch and the Wardrobe?",
    "answer": "C. S. Lewis"
  },
  {
    "id": "bq-227",
    "category": "Books & Art",
    "difficulty": "medium",
    "question": "Who wrote Charlotte's Web?",
    "answer": "E. B. White"
  },
  {
    "id": "bq-228",
    "category": "Books & Art",
    "difficulty": "medium",
    "question": "Who wrote The Secret Garden?",
    "answer": "Frances Hodgson Burnett"
  },
  {
    "id": "bq-229",
    "category": "Books & Art",
    "difficulty": "medium",
    "question": "Who wrote Little Women?",
    "answer": "Louisa May Alcott"
  },
  {
    "id": "bq-230",
    "category": "Books & Art",
    "difficulty": "medium",
    "question": "Who wrote Treasure Island?",
    "answer": "Robert Louis Stevenson"
  },
  {
    "id": "bq-231",
    "category": "Books & Art",
    "difficulty": "medium",
    "question": "Who painted the Mona Lisa?",
    "answer": "Leonardo da Vinci"
  },
  {
    "id": "bq-232",
    "category": "Books & Art",
    "difficulty": "medium",
    "question": "Who painted The Starry Night?",
    "answer": "Vincent van Gogh"
  },
  {
    "id": "bq-233",
    "category": "Books & Art",
    "difficulty": "medium",
    "question": "Who painted The Persistence of Memory?",
    "answer": "Salvador Dalí"
  },
  {
    "id": "bq-234",
    "category": "Books & Art",
    "difficulty": "medium",
    "question": "Who painted Guernica?",
    "answer": "Pablo Picasso"
  },
  {
    "id": "bq-235",
    "category": "Books & Art",
    "difficulty": "medium",
    "question": "Who painted The Birth of Venus?",
    "answer": "Sandro Botticelli"
  },
  {
    "id": "bq-236",
    "category": "Books & Art",
    "difficulty": "medium",
    "question": "Who painted Girl with a Pearl Earring?",
    "answer": "Johannes Vermeer"
  },
  {
    "id": "bq-237",
    "category": "Books & Art",
    "difficulty": "medium",
    "question": "Who painted the ceiling of the Sistine Chapel?",
    "answer": "Michelangelo"
  },
  {
    "id": "bq-238",
    "category": "Books & Art",
    "difficulty": "medium",
    "question": "Who sculpted The Thinker?",
    "answer": "Auguste Rodin"
  },
  {
    "id": "bq-239",
    "category": "Books & Art",
    "difficulty": "medium",
    "question": "What is a painting of the artist themself called?",
    "answer": "A self-portrait"
  },
  {
    "id": "bq-240",
    "category": "Books & Art",
    "difficulty": "medium",
    "question": "What is a painting of arranged inanimate objects called?",
    "answer": "A still life"
  },
  {
    "id": "bq-241",
    "category": "Books & Art",
    "difficulty": "medium",
    "question": "What is a large painting made directly on a wall called?",
    "answer": "A mural"
  },
  {
    "id": "bq-242",
    "category": "Books & Art",
    "difficulty": "medium",
    "question": "What term describes art made by arranging and attaching different materials?",
    "answer": "Collage"
  },
  {
    "id": "bq-243",
    "category": "Books & Art",
    "difficulty": "medium",
    "question": "What technique uses small pieces of colored material to form an image?",
    "answer": "Mosaic"
  },
  {
    "id": "bq-244",
    "category": "Books & Art",
    "difficulty": "medium",
    "question": "What art form involves folding paper?",
    "answer": "Origami"
  },
  {
    "id": "bq-245",
    "category": "Books & Art",
    "difficulty": "medium",
    "question": "What is a book's central main character commonly called?",
    "answer": "The protagonist"
  },
  {
    "id": "bq-246",
    "category": "Books & Art",
    "difficulty": "medium",
    "question": "What is a character or force opposing the protagonist called?",
    "answer": "The antagonist"
  },
  {
    "id": "bq-247",
    "category": "Books & Art",
    "difficulty": "medium",
    "question": "What is the time and place of a story called?",
    "answer": "The setting"
  },
  {
    "id": "bq-248",
    "category": "Books & Art",
    "difficulty": "medium",
    "question": "What is a comparison using like or as called?",
    "answer": "A simile"
  },
  {
    "id": "bq-249",
    "category": "Books & Art",
    "difficulty": "medium",
    "question": "What is an exaggerated statement not meant literally called?",
    "answer": "Hyperbole"
  },
  {
    "id": "bq-250",
    "category": "Books & Art",
    "difficulty": "medium",
    "question": "What is giving human qualities to nonhuman things called?",
    "answer": "Personification"
  },
  {
    "id": "bq-251",
    "category": "Books & Art",
    "difficulty": "medium",
    "question": "What is the repetition of initial consonant sounds called?",
    "answer": "Alliteration"
  },
  {
    "id": "bq-252",
    "category": "Books & Art",
    "difficulty": "medium",
    "question": "What do we call a word that imitates a sound?",
    "answer": "Onomatopoeia"
  },
  {
    "id": "bq-253",
    "category": "Books & Art",
    "difficulty": "medium",
    "question": "What is the name for a 14-line poetic form?",
    "answer": "A sonnet"
  },
  {
    "id": "bq-254",
    "category": "Books & Art",
    "difficulty": "medium",
    "question": "What is a story's sequence of events called?",
    "answer": "The plot"
  },
  {
    "id": "bq-255",
    "category": "Books & Art",
    "difficulty": "medium",
    "question": "What is a story told from the narrator's I perspective called?",
    "answer": "First-person narration"
  },
  {
    "id": "bq-256",
    "category": "Books & Art",
    "difficulty": "medium",
    "question": "What is a brief appearance by a recognizable person in a film called?",
    "answer": "A cameo"
  },
  {
    "id": "bq-257",
    "category": "Books & Art",
    "difficulty": "medium",
    "question": "What is a list of a book's chapters and page numbers called?",
    "answer": "A table of contents"
  },
  {
    "id": "bq-258",
    "category": "Books & Art",
    "difficulty": "medium",
    "question": "What is the name for an author's assumed writing name?",
    "answer": "A pen name or pseudonym"
  },
  {
    "id": "bq-259",
    "category": "Books & Art",
    "difficulty": "medium",
    "question": "What is a collection of selected writings by different authors called?",
    "answer": "An anthology"
  },
  {
    "id": "bq-260",
    "category": "Books & Art",
    "difficulty": "medium",
    "question": "What is a nonfiction account of a person's life written by that person called?",
    "answer": "An autobiography"
  },
  {
    "id": "bq-261",
    "category": "Music & Screen",
    "difficulty": "medium",
    "question": "How many strings does a standard violin have?",
    "answer": "Four"
  },
  {
    "id": "bq-262",
    "category": "Music & Screen",
    "difficulty": "medium",
    "question": "What instrument typically has 88 keys?",
    "answer": "A piano"
  },
  {
    "id": "bq-263",
    "category": "Music & Screen",
    "difficulty": "medium",
    "question": "Who composed The Four Seasons?",
    "answer": "Antonio Vivaldi"
  },
  {
    "id": "bq-264",
    "category": "Music & Screen",
    "difficulty": "medium",
    "question": "Who composed the opera The Magic Flute?",
    "answer": "Wolfgang Amadeus Mozart"
  },
  {
    "id": "bq-265",
    "category": "Music & Screen",
    "difficulty": "medium",
    "question": "Who composed the ballet Swan Lake?",
    "answer": "Pyotr Ilyich Tchaikovsky"
  },
  {
    "id": "bq-266",
    "category": "Music & Screen",
    "difficulty": "medium",
    "question": "Who composed the Brandenburg Concertos?",
    "answer": "Johann Sebastian Bach"
  },
  {
    "id": "bq-267",
    "category": "Music & Screen",
    "difficulty": "medium",
    "question": "Which composer wrote the Moonlight Sonata?",
    "answer": "Ludwig van Beethoven"
  },
  {
    "id": "bq-268",
    "category": "Music & Screen",
    "difficulty": "medium",
    "question": "What musical term means to gradually get louder?",
    "answer": "Crescendo"
  },
  {
    "id": "bq-269",
    "category": "Music & Screen",
    "difficulty": "medium",
    "question": "What musical term means to gradually get softer?",
    "answer": "Diminuendo or decrescendo"
  },
  {
    "id": "bq-270",
    "category": "Music & Screen",
    "difficulty": "medium",
    "question": "What musical term indicates a piece should be played softly?",
    "answer": "Piano"
  },
  {
    "id": "bq-271",
    "category": "Music & Screen",
    "difficulty": "medium",
    "question": "What musical term indicates a piece should be played loudly?",
    "answer": "Forte"
  },
  {
    "id": "bq-272",
    "category": "Music & Screen",
    "difficulty": "medium",
    "question": "What is the speed of a musical piece called?",
    "answer": "Tempo"
  },
  {
    "id": "bq-273",
    "category": "Music & Screen",
    "difficulty": "medium",
    "question": "What device helps a musician keep a steady beat?",
    "answer": "A metronome"
  },
  {
    "id": "bq-274",
    "category": "Music & Screen",
    "difficulty": "medium",
    "question": "What is a group of three musicians called?",
    "answer": "A trio"
  },
  {
    "id": "bq-275",
    "category": "Music & Screen",
    "difficulty": "medium",
    "question": "What is a group of four musicians called?",
    "answer": "A quartet"
  },
  {
    "id": "bq-276",
    "category": "Music & Screen",
    "difficulty": "medium",
    "question": "What is singing without instrumental accompaniment called?",
    "answer": "A cappella"
  },
  {
    "id": "bq-277",
    "category": "Music & Screen",
    "difficulty": "medium",
    "question": "What is the person who directs an orchestra called?",
    "answer": "A conductor"
  },
  {
    "id": "bq-278",
    "category": "Music & Screen",
    "difficulty": "medium",
    "question": "What instrument family includes the trumpet and trombone?",
    "answer": "Brass"
  },
  {
    "id": "bq-279",
    "category": "Music & Screen",
    "difficulty": "medium",
    "question": "What instrument family includes the violin and cello?",
    "answer": "Strings"
  },
  {
    "id": "bq-280",
    "category": "Music & Screen",
    "difficulty": "medium",
    "question": "What instrument family includes drums and cymbals?",
    "answer": "Percussion"
  },
  {
    "id": "bq-281",
    "category": "Music & Screen",
    "difficulty": "medium",
    "question": "Which band recorded Bohemian Rhapsody?",
    "answer": "Queen"
  },
  {
    "id": "bq-282",
    "category": "Music & Screen",
    "difficulty": "medium",
    "question": "Which two credited acts recorded Under Pressure together?",
    "answer": "Queen and David Bowie"
  },
  {
    "id": "bq-283",
    "category": "Music & Screen",
    "difficulty": "medium",
    "question": "Which band recorded Here Comes the Sun?",
    "answer": "The Beatles"
  },
  {
    "id": "bq-284",
    "category": "Music & Screen",
    "difficulty": "medium",
    "question": "Which band recorded Don't Stop Believin'?",
    "answer": "Journey"
  },
  {
    "id": "bq-285",
    "category": "Music & Screen",
    "difficulty": "medium",
    "question": "Who composed the main scores for the original Star Wars trilogy?",
    "answer": "John Williams"
  },
  {
    "id": "bq-286",
    "category": "Music & Screen",
    "difficulty": "medium",
    "question": "Which fictional kingdom is home to Black Panther?",
    "answer": "Wakanda"
  },
  {
    "id": "bq-287",
    "category": "Music & Screen",
    "difficulty": "medium",
    "question": "What is the name of Batman's home city?",
    "answer": "Gotham City"
  },
  {
    "id": "bq-288",
    "category": "Music & Screen",
    "difficulty": "medium",
    "question": "What is Superman's Kryptonian birth name?",
    "answer": "Kal-El"
  },
  {
    "id": "bq-289",
    "category": "Music & Screen",
    "difficulty": "medium",
    "question": "What is Spider-Man Peter Parker's profession in many early stories?",
    "answer": "A photographer"
  },
  {
    "id": "bq-290",
    "category": "Music & Screen",
    "difficulty": "medium",
    "question": "What is the name of the cowboy toy in Toy Story?",
    "answer": "Woody"
  },
  {
    "id": "bq-291",
    "category": "Music & Screen",
    "difficulty": "medium",
    "question": "What is the name of the space-ranger toy in Toy Story?",
    "answer": "Buzz Lightyear"
  },
  {
    "id": "bq-292",
    "category": "Music & Screen",
    "difficulty": "medium",
    "question": "Which film features the snowman Olaf?",
    "answer": "Frozen"
  },
  {
    "id": "bq-293",
    "category": "Music & Screen",
    "difficulty": "medium",
    "question": "Which Pixar film follows a rat who wants to cook?",
    "answer": "Ratatouille"
  },
  {
    "id": "bq-294",
    "category": "Music & Screen",
    "difficulty": "medium",
    "question": "Which Pixar film features the robot WALL-E?",
    "answer": "WALL-E"
  },
  {
    "id": "bq-295",
    "category": "Music & Screen",
    "difficulty": "medium",
    "question": "Which film features a house lifted by balloons?",
    "answer": "Up"
  },
  {
    "id": "bq-296",
    "category": "Music & Screen",
    "difficulty": "medium",
    "question": "Which film features the characters Simba and Mufasa?",
    "answer": "The Lion King"
  },
  {
    "id": "bq-297",
    "category": "Music & Screen",
    "difficulty": "medium",
    "question": "What is the name of the kingdom in Disney's Frozen?",
    "answer": "Arendelle"
  },
  {
    "id": "bq-298",
    "category": "Music & Screen",
    "difficulty": "medium",
    "question": "What is the name of the hobbit who inherits the One Ring from Bilbo?",
    "answer": "Frodo Baggins"
  },
  {
    "id": "bq-299",
    "category": "Music & Screen",
    "difficulty": "medium",
    "question": "What is the name of Frodo's gardener and traveling companion?",
    "answer": "Samwise Gamgee"
  },
  {
    "id": "bq-300",
    "category": "Music & Screen",
    "difficulty": "medium",
    "question": "What is the name of the wizard played by Ian McKellen in The Lord of the Rings?",
    "answer": "Gandalf"
  },
  {
    "id": "bq-301",
    "category": "Music & Screen",
    "difficulty": "medium",
    "question": "What is the name of the school attended by Harry Potter?",
    "answer": "Hogwarts"
  },
  {
    "id": "bq-302",
    "category": "Music & Screen",
    "difficulty": "medium",
    "question": "Which Hogwarts house uses a lion as its emblem?",
    "answer": "Gryffindor"
  },
  {
    "id": "bq-303",
    "category": "Music & Screen",
    "difficulty": "medium",
    "question": "What is the name of the coffee shop in Friends?",
    "answer": "Central Perk"
  },
  {
    "id": "bq-304",
    "category": "Music & Screen",
    "difficulty": "medium",
    "question": "What is the name of the paper company in the U.S. version of The Office?",
    "answer": "Dunder Mifflin"
  },
  {
    "id": "bq-305",
    "category": "Music & Screen",
    "difficulty": "medium",
    "question": "What is the name of the fictional town in The Simpsons?",
    "answer": "Springfield"
  },
  {
    "id": "bq-306",
    "category": "Music & Screen",
    "difficulty": "medium",
    "question": "What is the name of the main airbender in Avatar: The Last Airbender?",
    "answer": "Aang"
  },
  {
    "id": "bq-307",
    "category": "Music & Screen",
    "difficulty": "medium",
    "question": "What type of animal is Appa in Avatar: The Last Airbender?",
    "answer": "A flying bison"
  },
  {
    "id": "bq-308",
    "category": "Music & Screen",
    "difficulty": "medium",
    "question": "Which animation studio made Spirited Away?",
    "answer": "Studio Ghibli"
  },
  {
    "id": "bq-309",
    "category": "Music & Screen",
    "difficulty": "medium",
    "question": "Who directed Spirited Away?",
    "answer": "Hayao Miyazaki"
  },
  {
    "id": "bq-310",
    "category": "Music & Screen",
    "difficulty": "medium",
    "question": "Which film franchise features the droid R2-D2?",
    "answer": "Star Wars"
  },
  {
    "id": "bq-311",
    "category": "History & World",
    "difficulty": "medium",
    "question": "In what year did Apollo 11 first land humans on the Moon?",
    "answer": "1969"
  },
  {
    "id": "bq-312",
    "category": "History & World",
    "difficulty": "medium",
    "question": "Who was the first person to walk on the Moon?",
    "answer": "Neil Armstrong"
  },
  {
    "id": "bq-313",
    "category": "History & World",
    "difficulty": "medium",
    "question": "Who was the second person to walk on the Moon?",
    "answer": "Buzz Aldrin"
  },
  {
    "id": "bq-314",
    "category": "History & World",
    "difficulty": "medium",
    "question": "Who was the first human to travel into space?",
    "answer": "Yuri Gagarin"
  },
  {
    "id": "bq-315",
    "category": "History & World",
    "difficulty": "medium",
    "question": "Who was the first woman to travel into space?",
    "answer": "Valentina Tereshkova"
  },
  {
    "id": "bq-316",
    "category": "History & World",
    "difficulty": "medium",
    "question": "What was the name of the first artificial satellite?",
    "answer": "Sputnik 1"
  },
  {
    "id": "bq-317",
    "category": "History & World",
    "difficulty": "medium",
    "question": "In which year did the Berlin Wall fall?",
    "answer": "1989"
  },
  {
    "id": "bq-318",
    "category": "History & World",
    "difficulty": "medium",
    "question": "In which year was the U.S. Declaration of Independence adopted?",
    "answer": "1776"
  },
  {
    "id": "bq-319",
    "category": "History & World",
    "difficulty": "medium",
    "question": "Who was the first president of the United States?",
    "answer": "George Washington"
  },
  {
    "id": "bq-320",
    "category": "History & World",
    "difficulty": "medium",
    "question": "Who was the U.S. president during most of the American Civil War?",
    "answer": "Abraham Lincoln"
  },
  {
    "id": "bq-321",
    "category": "History & World",
    "difficulty": "medium",
    "question": "Which document begins with We the People in its U.S. preamble?",
    "answer": "The United States Constitution"
  },
  {
    "id": "bq-322",
    "category": "History & World",
    "difficulty": "medium",
    "question": "What ancient civilization built the pyramids at Giza?",
    "answer": "The ancient Egyptians"
  },
  {
    "id": "bq-323",
    "category": "History & World",
    "difficulty": "medium",
    "question": "What writing system is associated with ancient Egyptian picture-like signs?",
    "answer": "Hieroglyphs"
  },
  {
    "id": "bq-324",
    "category": "History & World",
    "difficulty": "medium",
    "question": "What ancient civilization used cuneiform in Mesopotamia?",
    "answer": "The Sumerians"
  },
  {
    "id": "bq-325",
    "category": "History & World",
    "difficulty": "medium",
    "question": "What ancient city was buried by Mount Vesuvius in 79 CE?",
    "answer": "Pompeii"
  },
  {
    "id": "bq-326",
    "category": "History & World",
    "difficulty": "medium",
    "question": "Which ancient empire built the Colosseum?",
    "answer": "The Roman Empire"
  },
  {
    "id": "bq-327",
    "category": "History & World",
    "difficulty": "medium",
    "question": "Which city is associated with the ancient Acropolis and Parthenon?",
    "answer": "Athens"
  },
  {
    "id": "bq-328",
    "category": "History & World",
    "difficulty": "medium",
    "question": "What was the name of the trade network linking East Asia with the Mediterranean world?",
    "answer": "The Silk Road"
  },
  {
    "id": "bq-329",
    "category": "History & World",
    "difficulty": "medium",
    "question": "What famous document was sealed by King John of England in 1215?",
    "answer": "Magna Carta"
  },
  {
    "id": "bq-330",
    "category": "History & World",
    "difficulty": "medium",
    "question": "Which invention is Johannes Gutenberg especially associated with in Europe?",
    "answer": "Movable-type printing using his printing press"
  },
  {
    "id": "bq-331",
    "category": "History & World",
    "difficulty": "medium",
    "question": "Which scientist formulated the laws of motion and universal gravitation?",
    "answer": "Isaac Newton"
  },
  {
    "id": "bq-332",
    "category": "History & World",
    "difficulty": "medium",
    "question": "Which scientist developed the theory of general relativity?",
    "answer": "Albert Einstein"
  },
  {
    "id": "bq-333",
    "category": "History & World",
    "difficulty": "medium",
    "question": "Which naturalist wrote On the Origin of Species?",
    "answer": "Charles Darwin"
  },
  {
    "id": "bq-334",
    "category": "History & World",
    "difficulty": "medium",
    "question": "Which scientist discovered penicillin in 1928?",
    "answer": "Alexander Fleming"
  },
  {
    "id": "bq-335",
    "category": "History & World",
    "difficulty": "medium",
    "question": "Which two researchers published the DNA double-helix model in 1953?",
    "answer": "James Watson and Francis Crick"
  },
  {
    "id": "bq-336",
    "category": "History & World",
    "difficulty": "medium",
    "question": "Which scientist's X-ray diffraction work was crucial to understanding DNA's structure?",
    "answer": "Rosalind Franklin"
  },
  {
    "id": "bq-337",
    "category": "History & World",
    "difficulty": "medium",
    "question": "Who was the first woman to receive a Nobel Prize?",
    "answer": "Marie Curie"
  },
  {
    "id": "bq-338",
    "category": "History & World",
    "difficulty": "medium",
    "question": "Which element was named after Marie Curie's homeland?",
    "answer": "Polonium"
  },
  {
    "id": "bq-339",
    "category": "History & World",
    "difficulty": "medium",
    "question": "Who is associated with the phrase I have a dream in a 1963 speech?",
    "answer": "Martin Luther King Jr."
  },
  {
    "id": "bq-340",
    "category": "History & World",
    "difficulty": "medium",
    "question": "Who refused to give up her bus seat in Montgomery in December 1955?",
    "answer": "Rosa Parks"
  },
  {
    "id": "bq-341",
    "category": "History & World",
    "difficulty": "medium",
    "question": "What ship sank on its maiden voyage in 1912?",
    "answer": "RMS Titanic"
  },
  {
    "id": "bq-342",
    "category": "History & World",
    "difficulty": "medium",
    "question": "What city hosted the first modern Olympic Games in 1896?",
    "answer": "Athens"
  },
  {
    "id": "bq-343",
    "category": "History & World",
    "difficulty": "medium",
    "question": "What was the name of the period of renewed art and learning beginning in medieval Italy?",
    "answer": "The Renaissance"
  },
  {
    "id": "bq-344",
    "category": "History & World",
    "difficulty": "medium",
    "question": "What empire was ruled by Genghis Khan?",
    "answer": "The Mongol Empire"
  },
  {
    "id": "bq-345",
    "category": "History & World",
    "difficulty": "medium",
    "question": "Which empire built Machu Picchu?",
    "answer": "The Inca Empire"
  },
  {
    "id": "bq-346",
    "category": "History & World",
    "difficulty": "medium",
    "question": "Which civilization built the city of Chichén Itzá?",
    "answer": "The Maya"
  },
  {
    "id": "bq-347",
    "category": "History & World",
    "difficulty": "medium",
    "question": "Which country gave the Statue of Liberty to the United States?",
    "answer": "France"
  },
  {
    "id": "bq-348",
    "category": "History & World",
    "difficulty": "medium",
    "question": "Which river valley is associated with the earliest Egyptian civilization?",
    "answer": "The Nile Valley"
  },
  {
    "id": "bq-349",
    "category": "History & World",
    "difficulty": "medium",
    "question": "What ancient city in modern Turkey is associated with the legendary Trojan War?",
    "answer": "Troy"
  },
  {
    "id": "bq-350",
    "category": "History & World",
    "difficulty": "medium",
    "question": "What structure was built across parts of northern China over many centuries?",
    "answer": "The Great Wall of China"
  },
  {
    "id": "bq-351",
    "category": "Sports & Games",
    "difficulty": "medium",
    "question": "How many squares are on a standard chessboard?",
    "answer": "64"
  },
  {
    "id": "bq-352",
    "category": "Sports & Games",
    "difficulty": "medium",
    "question": "Which chess piece moves in an L shape?",
    "answer": "The knight"
  },
  {
    "id": "bq-353",
    "category": "Sports & Games",
    "difficulty": "medium",
    "question": "Which chess piece moves only diagonally?",
    "answer": "The bishop"
  },
  {
    "id": "bq-354",
    "category": "Sports & Games",
    "difficulty": "medium",
    "question": "Which chess piece moves horizontally or vertically?",
    "answer": "The rook"
  },
  {
    "id": "bq-355",
    "category": "Sports & Games",
    "difficulty": "medium",
    "question": "What is the situation called when a chess king is threatened with capture?",
    "answer": "Check"
  },
  {
    "id": "bq-356",
    "category": "Sports & Games",
    "difficulty": "medium",
    "question": "What is it called when a checked king has no legal escape?",
    "answer": "Checkmate"
  },
  {
    "id": "bq-357",
    "category": "Sports & Games",
    "difficulty": "medium",
    "question": "How many pawns does each player start with in chess?",
    "answer": "Eight"
  },
  {
    "id": "bq-358",
    "category": "Sports & Games",
    "difficulty": "medium",
    "question": "How many cards are in a standard deck without jokers?",
    "answer": "52"
  },
  {
    "id": "bq-359",
    "category": "Sports & Games",
    "difficulty": "medium",
    "question": "How many suits are in a standard French-suited deck?",
    "answer": "Four"
  },
  {
    "id": "bq-360",
    "category": "Sports & Games",
    "difficulty": "medium",
    "question": "What are the four suits in a standard French-suited deck?",
    "answer": "Hearts, diamonds, clubs, and spades"
  },
  {
    "id": "bq-361",
    "category": "Sports & Games",
    "difficulty": "medium",
    "question": "How many sides does a standard six-sided die have?",
    "answer": "Six"
  },
  {
    "id": "bq-362",
    "category": "Sports & Games",
    "difficulty": "medium",
    "question": "What is the highest possible sum when rolling two standard six-sided dice?",
    "answer": "12"
  },
  {
    "id": "bq-363",
    "category": "Sports & Games",
    "difficulty": "medium",
    "question": "What is the lowest possible sum when rolling two standard six-sided dice?",
    "answer": "Two"
  },
  {
    "id": "bq-364",
    "category": "Sports & Games",
    "difficulty": "medium",
    "question": "What board game includes properties called Boardwalk and Park Place in its classic U.S. edition?",
    "answer": "Monopoly"
  },
  {
    "id": "bq-365",
    "category": "Sports & Games",
    "difficulty": "medium",
    "question": "What game uses tiles with letters and a board with word-score bonuses?",
    "answer": "Scrabble"
  },
  {
    "id": "bq-366",
    "category": "Sports & Games",
    "difficulty": "medium",
    "question": "What game involves removing wooden blocks from a tower and placing them on top?",
    "answer": "Jenga"
  },
  {
    "id": "bq-367",
    "category": "Sports & Games",
    "difficulty": "medium",
    "question": "What game uses a grid with hidden ships and coordinate guesses?",
    "answer": "Battleship"
  },
  {
    "id": "bq-368",
    "category": "Sports & Games",
    "difficulty": "medium",
    "question": "What game asks players to connect four discs in a row?",
    "answer": "Connect Four"
  },
  {
    "id": "bq-369",
    "category": "Sports & Games",
    "difficulty": "medium",
    "question": "In bowling, how many pins are set up for a standard ten-pin frame?",
    "answer": "Ten"
  },
  {
    "id": "bq-370",
    "category": "Sports & Games",
    "difficulty": "medium",
    "question": "What is knocking down all ten pins on the first roll of a frame called?",
    "answer": "A strike"
  },
  {
    "id": "bq-371",
    "category": "Sports & Games",
    "difficulty": "medium",
    "question": "What is knocking down the remaining pins on the second roll called?",
    "answer": "A spare"
  },
  {
    "id": "bq-372",
    "category": "Sports & Games",
    "difficulty": "medium",
    "question": "What is the maximum score in a standard game of ten-pin bowling?",
    "answer": "300"
  },
  {
    "id": "bq-373",
    "category": "Sports & Games",
    "difficulty": "medium",
    "question": "How many players from one team are on the court in basketball?",
    "answer": "Five"
  },
  {
    "id": "bq-374",
    "category": "Sports & Games",
    "difficulty": "medium",
    "question": "How many points is a standard free throw worth in basketball?",
    "answer": "One"
  },
  {
    "id": "bq-375",
    "category": "Sports & Games",
    "difficulty": "medium",
    "question": "How many points is a shot from beyond the three-point line worth?",
    "answer": "Three"
  },
  {
    "id": "bq-376",
    "category": "Sports & Games",
    "difficulty": "medium",
    "question": "How many players per team begin a standard association-football match on the field?",
    "answer": "Eleven"
  },
  {
    "id": "bq-377",
    "category": "Sports & Games",
    "difficulty": "medium",
    "question": "What is the score called when a soccer match ends with both teams on zero goals?",
    "answer": "A nil-nil draw or 0–0 draw"
  },
  {
    "id": "bq-378",
    "category": "Sports & Games",
    "difficulty": "medium",
    "question": "Which sport uses terms such as love, deuce, and advantage?",
    "answer": "Tennis"
  },
  {
    "id": "bq-379",
    "category": "Sports & Games",
    "difficulty": "medium",
    "question": "What is zero called in tennis scoring?",
    "answer": "Love"
  },
  {
    "id": "bq-380",
    "category": "Sports & Games",
    "difficulty": "medium",
    "question": "What sport uses a shuttlecock?",
    "answer": "Badminton"
  },
  {
    "id": "bq-381",
    "category": "Sports & Games",
    "difficulty": "medium",
    "question": "What sport uses a puck on ice?",
    "answer": "Ice hockey"
  },
  {
    "id": "bq-382",
    "category": "Sports & Games",
    "difficulty": "medium",
    "question": "What sport has strokes called butterfly and backstroke?",
    "answer": "Swimming"
  },
  {
    "id": "bq-383",
    "category": "Sports & Games",
    "difficulty": "medium",
    "question": "What is a score of one under par on a golf hole called?",
    "answer": "A birdie"
  },
  {
    "id": "bq-384",
    "category": "Sports & Games",
    "difficulty": "medium",
    "question": "What is a score of two under par on a golf hole called?",
    "answer": "An eagle"
  },
  {
    "id": "bq-385",
    "category": "Sports & Games",
    "difficulty": "medium",
    "question": "What is a score of one over par on a golf hole called?",
    "answer": "A bogey"
  },
  {
    "id": "bq-386",
    "category": "Sports & Games",
    "difficulty": "medium",
    "question": "How many holes are in a standard full round of golf?",
    "answer": "18"
  },
  {
    "id": "bq-387",
    "category": "Sports & Games",
    "difficulty": "medium",
    "question": "What is the distance of a marathon in kilometers?",
    "answer": "42.195 kilometers"
  },
  {
    "id": "bq-388",
    "category": "Sports & Games",
    "difficulty": "medium",
    "question": "What three disciplines make up a standard triathlon?",
    "answer": "Swimming, cycling, and running"
  },
  {
    "id": "bq-389",
    "category": "Sports & Games",
    "difficulty": "medium",
    "question": "What are the five colors of the Olympic rings?",
    "answer": "Blue, yellow, black, green, and red"
  },
  {
    "id": "bq-390",
    "category": "Sports & Games",
    "difficulty": "medium",
    "question": "Which sport uses a pommel horse and balance beam?",
    "answer": "Gymnastics"
  },
  {
    "id": "bq-391",
    "category": "Food & Everyday",
    "difficulty": "medium",
    "question": "What is the main ingredient in traditional hummus?",
    "answer": "Chickpeas"
  },
  {
    "id": "bq-392",
    "category": "Food & Everyday",
    "difficulty": "medium",
    "question": "Which fruit is dried to make raisins?",
    "answer": "Grapes"
  },
  {
    "id": "bq-393",
    "category": "Food & Everyday",
    "difficulty": "medium",
    "question": "What fruit is the main ingredient in guacamole?",
    "answer": "Avocado"
  },
  {
    "id": "bq-394",
    "category": "Food & Everyday",
    "difficulty": "medium",
    "question": "What bean is used to make tofu?",
    "answer": "Soybean"
  },
  {
    "id": "bq-395",
    "category": "Food & Everyday",
    "difficulty": "medium",
    "question": "What grain is traditionally used to make risotto?",
    "answer": "Rice"
  },
  {
    "id": "bq-396",
    "category": "Food & Everyday",
    "difficulty": "medium",
    "question": "What grain is used to make traditional polenta?",
    "answer": "Corn (maize)"
  },
  {
    "id": "bq-397",
    "category": "Food & Everyday",
    "difficulty": "medium",
    "question": "What ingredient makes bread dough rise through fermentation?",
    "answer": "Yeast"
  },
  {
    "id": "bq-398",
    "category": "Food & Everyday",
    "difficulty": "medium",
    "question": "What process turns sugar into alcohol and carbon dioxide in brewing?",
    "answer": "Fermentation"
  },
  {
    "id": "bq-399",
    "category": "Food & Everyday",
    "difficulty": "medium",
    "question": "What dairy product is churned to make butter?",
    "answer": "Cream"
  },
  {
    "id": "bq-400",
    "category": "Food & Everyday",
    "difficulty": "medium",
    "question": "What is the name for clarified butter used in South Asian cooking?",
    "answer": "Ghee"
  },
  {
    "id": "bq-401",
    "category": "Food & Everyday",
    "difficulty": "medium",
    "question": "What is the main ingredient of tahini?",
    "answer": "Sesame seeds"
  },
  {
    "id": "bq-402",
    "category": "Food & Everyday",
    "difficulty": "medium",
    "question": "What nut is traditionally used in marzipan?",
    "answer": "Almond"
  },
  {
    "id": "bq-403",
    "category": "Food & Everyday",
    "difficulty": "medium",
    "question": "What nut is traditionally used in classic basil pesto?",
    "answer": "Pine nut"
  },
  {
    "id": "bq-404",
    "category": "Food & Everyday",
    "difficulty": "medium",
    "question": "What herb gives classic basil pesto its name?",
    "answer": "Basil"
  },
  {
    "id": "bq-405",
    "category": "Food & Everyday",
    "difficulty": "medium",
    "question": "What is the main spice that gives many curries a yellow color?",
    "answer": "Turmeric"
  },
  {
    "id": "bq-406",
    "category": "Food & Everyday",
    "difficulty": "medium",
    "question": "What spice comes from the dried stigmas of a crocus flower?",
    "answer": "Saffron"
  },
  {
    "id": "bq-407",
    "category": "Food & Everyday",
    "difficulty": "medium",
    "question": "What spice is made from the dried bark of certain trees?",
    "answer": "Cinnamon"
  },
  {
    "id": "bq-408",
    "category": "Food & Everyday",
    "difficulty": "medium",
    "question": "What spice consists of dried flower buds?",
    "answer": "Cloves"
  },
  {
    "id": "bq-409",
    "category": "Food & Everyday",
    "difficulty": "medium",
    "question": "What spice gives gingerbread its name?",
    "answer": "Ginger"
  },
  {
    "id": "bq-410",
    "category": "Food & Everyday",
    "difficulty": "medium",
    "question": "What ingredient supplies most chocolate's characteristic flavor?",
    "answer": "Cocoa from cacao beans"
  },
  {
    "id": "bq-411",
    "category": "Food & Everyday",
    "difficulty": "medium",
    "question": "What is an espresso diluted with hot water commonly called?",
    "answer": "An Americano"
  },
  {
    "id": "bq-412",
    "category": "Food & Everyday",
    "difficulty": "medium",
    "question": "What is a mixture of flour and fat cooked as a sauce base called?",
    "answer": "A roux"
  },
  {
    "id": "bq-413",
    "category": "Food & Everyday",
    "difficulty": "medium",
    "question": "What cooking method uses simmering liquid below a full boil to cook delicate food?",
    "answer": "Poaching"
  },
  {
    "id": "bq-414",
    "category": "Food & Everyday",
    "difficulty": "medium",
    "question": "What cooking method browns food quickly in a small amount of fat?",
    "answer": "Sautéing"
  },
  {
    "id": "bq-415",
    "category": "Food & Everyday",
    "difficulty": "medium",
    "question": "What cooking method surrounds food with steam?",
    "answer": "Steaming"
  },
  {
    "id": "bq-416",
    "category": "Food & Everyday",
    "difficulty": "medium",
    "question": "What is cooking pasta al dente intended to leave it?",
    "answer": "Firm to the bite"
  },
  {
    "id": "bq-417",
    "category": "Food & Everyday",
    "difficulty": "medium",
    "question": "What kitchen tool is used to drain pasta?",
    "answer": "A colander"
  },
  {
    "id": "bq-418",
    "category": "Food & Everyday",
    "difficulty": "medium",
    "question": "What kitchen tool removes the colored outer peel of citrus in fine pieces?",
    "answer": "A zester"
  },
  {
    "id": "bq-419",
    "category": "Food & Everyday",
    "difficulty": "medium",
    "question": "What tool measures the internal temperature of cooked food?",
    "answer": "A food thermometer"
  },
  {
    "id": "bq-420",
    "category": "Food & Everyday",
    "difficulty": "medium",
    "question": "What utensil is commonly used to beat eggs by hand?",
    "answer": "A whisk"
  },
  {
    "id": "bq-421",
    "category": "Food & Everyday",
    "difficulty": "medium",
    "question": "What is the name for a list of ingredients and preparation instructions?",
    "answer": "A recipe"
  },
  {
    "id": "bq-422",
    "category": "Food & Everyday",
    "difficulty": "medium",
    "question": "How many minutes are in one hour?",
    "answer": "60"
  },
  {
    "id": "bq-423",
    "category": "Food & Everyday",
    "difficulty": "medium",
    "question": "How many hours are in one day?",
    "answer": "24"
  },
  {
    "id": "bq-424",
    "category": "Food & Everyday",
    "difficulty": "medium",
    "question": "How many days are in a leap year?",
    "answer": "366"
  },
  {
    "id": "bq-425",
    "category": "Food & Everyday",
    "difficulty": "medium",
    "question": "How many months are in one year?",
    "answer": "12"
  },
  {
    "id": "bq-426",
    "category": "Food & Everyday",
    "difficulty": "medium",
    "question": "Which month has an extra day in a leap year?",
    "answer": "February"
  },
  {
    "id": "bq-427",
    "category": "Food & Everyday",
    "difficulty": "medium",
    "question": "What are the three primary colors of light in the RGB system?",
    "answer": "Red, green, and blue"
  },
  {
    "id": "bq-428",
    "category": "Food & Everyday",
    "difficulty": "medium",
    "question": "What do red and blue light combine to make in additive color mixing?",
    "answer": "Magenta"
  },
  {
    "id": "bq-429",
    "category": "Food & Everyday",
    "difficulty": "medium",
    "question": "What do green and blue light combine to make in additive color mixing?",
    "answer": "Cyan"
  },
  {
    "id": "bq-430",
    "category": "Food & Everyday",
    "difficulty": "medium",
    "question": "What do red and green light combine to make in additive color mixing?",
    "answer": "Yellow"
  },
  {
    "id": "bq-431",
    "category": "Technology & Language",
    "difficulty": "medium",
    "question": "What does HTML stand for?",
    "answer": "HyperText Markup Language"
  },
  {
    "id": "bq-432",
    "category": "Technology & Language",
    "difficulty": "medium",
    "question": "What does CSS stand for?",
    "answer": "Cascading Style Sheets"
  },
  {
    "id": "bq-433",
    "category": "Technology & Language",
    "difficulty": "medium",
    "question": "What does CPU stand for?",
    "answer": "Central Processing Unit"
  },
  {
    "id": "bq-434",
    "category": "Technology & Language",
    "difficulty": "medium",
    "question": "What does RAM stand for?",
    "answer": "Random Access Memory"
  },
  {
    "id": "bq-435",
    "category": "Technology & Language",
    "difficulty": "medium",
    "question": "What does USB stand for?",
    "answer": "Universal Serial Bus"
  },
  {
    "id": "bq-436",
    "category": "Technology & Language",
    "difficulty": "medium",
    "question": "What does URL stand for?",
    "answer": "Uniform Resource Locator"
  },
  {
    "id": "bq-437",
    "category": "Technology & Language",
    "difficulty": "medium",
    "question": "What does HTTP stand for?",
    "answer": "Hypertext Transfer Protocol"
  },
  {
    "id": "bq-438",
    "category": "Technology & Language",
    "difficulty": "medium",
    "question": "What does the S in HTTPS stand for?",
    "answer": "Secure"
  },
  {
    "id": "bq-439",
    "category": "Technology & Language",
    "difficulty": "medium",
    "question": "What does SQL stand for?",
    "answer": "Structured Query Language"
  },
  {
    "id": "bq-440",
    "category": "Technology & Language",
    "difficulty": "medium",
    "question": "What does PDF stand for?",
    "answer": "Portable Document Format"
  },
  {
    "id": "bq-441",
    "category": "Technology & Language",
    "difficulty": "medium",
    "question": "What does GPU stand for?",
    "answer": "Graphics Processing Unit"
  },
  {
    "id": "bq-442",
    "category": "Technology & Language",
    "difficulty": "medium",
    "question": "What does SSD stand for?",
    "answer": "Solid-State Drive"
  },
  {
    "id": "bq-443",
    "category": "Technology & Language",
    "difficulty": "medium",
    "question": "What does DNS stand for?",
    "answer": "Domain Name System"
  },
  {
    "id": "bq-444",
    "category": "Technology & Language",
    "difficulty": "medium",
    "question": "What does LAN stand for?",
    "answer": "Local Area Network"
  },
  {
    "id": "bq-445",
    "category": "Technology & Language",
    "difficulty": "medium",
    "question": "What does GUI stand for?",
    "answer": "Graphical User Interface"
  },
  {
    "id": "bq-446",
    "category": "Technology & Language",
    "difficulty": "medium",
    "question": "What does API stand for?",
    "answer": "Application Programming Interface"
  },
  {
    "id": "bq-447",
    "category": "Technology & Language",
    "difficulty": "medium",
    "question": "What two digits are used in the binary number system?",
    "answer": "0 and 1"
  },
  {
    "id": "bq-448",
    "category": "Technology & Language",
    "difficulty": "medium",
    "question": "How many bits are in a byte in modern computing?",
    "answer": "Eight"
  },
  {
    "id": "bq-449",
    "category": "Technology & Language",
    "difficulty": "medium",
    "question": "What is a named container for a value in programming commonly called?",
    "answer": "A variable"
  },
  {
    "id": "bq-450",
    "category": "Technology & Language",
    "difficulty": "medium",
    "question": "What programming structure repeats a block of instructions?",
    "answer": "A loop"
  },
  {
    "id": "bq-451",
    "category": "Technology & Language",
    "difficulty": "medium",
    "question": "What data structure commonly follows first-in, first-out order?",
    "answer": "A queue"
  },
  {
    "id": "bq-452",
    "category": "Technology & Language",
    "difficulty": "medium",
    "question": "What data structure commonly follows last-in, first-out order?",
    "answer": "A stack"
  },
  {
    "id": "bq-453",
    "category": "Technology & Language",
    "difficulty": "medium",
    "question": "What is a program error commonly called?",
    "answer": "A bug"
  },
  {
    "id": "bq-454",
    "category": "Technology & Language",
    "difficulty": "medium",
    "question": "What is the process of finding and fixing program errors called?",
    "answer": "Debugging"
  },
  {
    "id": "bq-455",
    "category": "Technology & Language",
    "difficulty": "medium",
    "question": "What is a copy kept for recovery if original data is lost called?",
    "answer": "A backup"
  },
  {
    "id": "bq-456",
    "category": "Technology & Language",
    "difficulty": "medium",
    "question": "What is fraudulent messaging that tries to trick users into revealing secrets commonly called?",
    "answer": "Phishing"
  },
  {
    "id": "bq-457",
    "category": "Technology & Language",
    "difficulty": "medium",
    "question": "What is the name for a secret string used to authenticate a user?",
    "answer": "A password"
  },
  {
    "id": "bq-458",
    "category": "Technology & Language",
    "difficulty": "medium",
    "question": "What is an extra verification factor beyond a password part of?",
    "answer": "Multi-factor authentication"
  },
  {
    "id": "bq-459",
    "category": "Technology & Language",
    "difficulty": "medium",
    "question": "What is a word with the opposite meaning of another word called?",
    "answer": "An antonym"
  },
  {
    "id": "bq-460",
    "category": "Technology & Language",
    "difficulty": "medium",
    "question": "What is a word with a similar meaning to another word called?",
    "answer": "A synonym"
  },
  {
    "id": "bq-461",
    "category": "Technology & Language",
    "difficulty": "medium",
    "question": "What part of speech commonly names a person, place, thing, or idea?",
    "answer": "A noun"
  },
  {
    "id": "bq-462",
    "category": "Technology & Language",
    "difficulty": "medium",
    "question": "What part of speech commonly expresses an action or state?",
    "answer": "A verb"
  },
  {
    "id": "bq-463",
    "category": "Technology & Language",
    "difficulty": "medium",
    "question": "What part of speech commonly describes a noun?",
    "answer": "An adjective"
  },
  {
    "id": "bq-464",
    "category": "Technology & Language",
    "difficulty": "medium",
    "question": "What punctuation mark ends a direct question?",
    "answer": "A question mark"
  },
  {
    "id": "bq-465",
    "category": "Technology & Language",
    "difficulty": "medium",
    "question": "What punctuation mark commonly indicates possession in English?",
    "answer": "An apostrophe"
  },
  {
    "id": "bq-466",
    "category": "Technology & Language",
    "difficulty": "medium",
    "question": "What is a word that reads the same backward and forward called?",
    "answer": "A palindrome"
  },
  {
    "id": "bq-467",
    "category": "Technology & Language",
    "difficulty": "medium",
    "question": "What is rearranging a word's letters to make another word called?",
    "answer": "An anagram"
  },
  {
    "id": "bq-468",
    "category": "Technology & Language",
    "difficulty": "medium",
    "question": "What is an abbreviation pronounced as a word commonly called?",
    "answer": "An acronym"
  },
  {
    "id": "bq-469",
    "category": "Technology & Language",
    "difficulty": "medium",
    "question": "What is a group of words containing a subject and predicate called?",
    "answer": "A clause"
  },
  {
    "id": "bq-470",
    "category": "Technology & Language",
    "difficulty": "medium",
    "question": "What is the plural of child?",
    "answer": "Children"
  },
  {
    "id": "bq-471",
    "category": "Math & Logic",
    "difficulty": "easy",
    "question": "What is 15% of 200?",
    "answer": "30"
  },
  {
    "id": "bq-472",
    "category": "Math & Logic",
    "difficulty": "easy",
    "question": "What is 25% of 80?",
    "answer": "20"
  },
  {
    "id": "bq-473",
    "category": "Math & Logic",
    "difficulty": "easy",
    "question": "What is 10% of 350?",
    "answer": "35"
  },
  {
    "id": "bq-474",
    "category": "Math & Logic",
    "difficulty": "easy",
    "question": "What is one half of three quarters?",
    "answer": "Three eighths (3/8)"
  },
  {
    "id": "bq-475",
    "category": "Math & Logic",
    "difficulty": "easy",
    "question": "What is 3/4 expressed as a decimal?",
    "answer": "0.75"
  },
  {
    "id": "bq-476",
    "category": "Math & Logic",
    "difficulty": "easy",
    "question": "What is 1/5 expressed as a percentage?",
    "answer": "20%"
  },
  {
    "id": "bq-477",
    "category": "Math & Logic",
    "difficulty": "easy",
    "question": "What is 0.125 as a simplified fraction?",
    "answer": "1/8"
  },
  {
    "id": "bq-478",
    "category": "Math & Logic",
    "difficulty": "easy",
    "question": "How many sides does a hexagon have?",
    "answer": "Six"
  },
  {
    "id": "bq-479",
    "category": "Math & Logic",
    "difficulty": "easy",
    "question": "How many sides does an octagon have?",
    "answer": "Eight"
  },
  {
    "id": "bq-480",
    "category": "Math & Logic",
    "difficulty": "easy",
    "question": "How many sides does a pentagon have?",
    "answer": "Five"
  },
  {
    "id": "bq-481",
    "category": "Math & Logic",
    "difficulty": "easy",
    "question": "What is the sum of the interior angles of a triangle?",
    "answer": "180 degrees"
  },
  {
    "id": "bq-482",
    "category": "Math & Logic",
    "difficulty": "easy",
    "question": "How many degrees are in a full turn?",
    "answer": "360 degrees"
  },
  {
    "id": "bq-483",
    "category": "Math & Logic",
    "difficulty": "easy",
    "question": "What is the square root of 144?",
    "answer": "12"
  },
  {
    "id": "bq-484",
    "category": "Math & Logic",
    "difficulty": "easy",
    "question": "What is the cube of 3?",
    "answer": "27"
  },
  {
    "id": "bq-485",
    "category": "Math & Logic",
    "difficulty": "easy",
    "question": "What is 2 to the power of 8?",
    "answer": "256"
  },
  {
    "id": "bq-486",
    "category": "Math & Logic",
    "difficulty": "easy",
    "question": "What is the only even prime number?",
    "answer": "Two"
  },
  {
    "id": "bq-487",
    "category": "Math & Logic",
    "difficulty": "easy",
    "question": "What is the smallest prime number greater than 10?",
    "answer": "11"
  },
  {
    "id": "bq-488",
    "category": "Math & Logic",
    "difficulty": "easy",
    "question": "What is the greatest common divisor of 12 and 18?",
    "answer": "Six"
  },
  {
    "id": "bq-489",
    "category": "Math & Logic",
    "difficulty": "easy",
    "question": "What is the least common multiple of 4 and 6?",
    "answer": "12"
  },
  {
    "id": "bq-490",
    "category": "Math & Logic",
    "difficulty": "easy",
    "question": "What is the mean of 2, 4, and 6?",
    "answer": "Four"
  },
  {
    "id": "bq-491",
    "category": "Math & Logic",
    "difficulty": "easy",
    "question": "What is the median of 1, 3, 9, 12, and 20?",
    "answer": "Nine"
  },
  {
    "id": "bq-492",
    "category": "Math & Logic",
    "difficulty": "easy",
    "question": "What is the mode of 2, 2, 3, 4, and 5?",
    "answer": "Two"
  },
  {
    "id": "bq-493",
    "category": "Math & Logic",
    "difficulty": "easy",
    "question": "What is the area of a rectangle 6 units long and 4 units wide?",
    "answer": "24 square units"
  },
  {
    "id": "bq-494",
    "category": "Math & Logic",
    "difficulty": "easy",
    "question": "What is the perimeter of a square with side length 7?",
    "answer": "28 units"
  },
  {
    "id": "bq-495",
    "category": "Math & Logic",
    "difficulty": "easy",
    "question": "What is the area of a triangle with base 8 and height 5?",
    "answer": "20 square units"
  },
  {
    "id": "bq-496",
    "category": "Math & Logic",
    "difficulty": "easy",
    "question": "What is the volume of a cube with side length 3?",
    "answer": "27 cubic units"
  },
  {
    "id": "bq-497",
    "category": "Math & Logic",
    "difficulty": "easy",
    "question": "What is the probability of heads on one fair coin toss?",
    "answer": "1/2 or 50%"
  },
  {
    "id": "bq-498",
    "category": "Math & Logic",
    "difficulty": "easy",
    "question": "What is the probability of rolling a 6 on a fair six-sided die?",
    "answer": "1/6"
  },
  {
    "id": "bq-499",
    "category": "Math & Logic",
    "difficulty": "easy",
    "question": "How many outcomes are possible when tossing two coins, keeping order?",
    "answer": "Four"
  },
  {
    "id": "bq-500",
    "category": "Math & Logic",
    "difficulty": "easy",
    "question": "What is 7 factorial divided by 6 factorial?",
    "answer": "Seven"
  }
];
