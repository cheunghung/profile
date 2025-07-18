// const scrape = require("./scrape.js");
// const XLSX = require('xlsx');

// var array = [];



// var workbook = XLSX.readFile('data.xlsx');
// var sheet_name_list = workbook.SheetNames;
// var xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
//
//
// function populateSelect() {
//
//   var Symptom1 = document.getElementById('Symptom1');
//   for (var i = 0; i < xlData.length; i++) {
//     // POPULATE SELECT ELEMENT WITH JSON.
//     Symptom1.innerHTML = Symptom1.innerHTML +
//       '<option value="' + (i+1) + '">' + xlData[i]['descrip'] + '</option>';
//   }
// }
//




// console.log(xlData);

// xlData.forEach((element) => {
//     console.log(element.descrip);
// });
//


// const printArray = () => {
//   scrape(array).then((a) => {
//     console.log(a);
//   });
// };
//
//
//
// printArray();


var symptoms = [{
    "descrip": "Abdominal guarding",
    "id": "s_1558"
  },
  {
    "descrip": "Abdominal mass",
    "id": "s_299"
  },
  {
    "descrip": "Abdominal pain",
    "id": "s_13"
  },
  {
    "descrip": "Abdominal pain, below belly button",
    "id": "s_1598"
  },
  {
    "descrip": "Abdominal pain, burning or gnawing",
    "id": "s_1802"
  },
  {
    "descrip": "Abdominal pain, colicky",
    "id": "s_1848"
  },
  {
    "descrip": "Abdominal pain, crampy",
    "id": "s_1860"
  },
  {
    "descrip": "Abdominal pain, diffuse",
    "id": "s_1557"
  },
  {
    "descrip": "Abdominal pain, epigastric",
    "id": "s_1387"
  },
  {
    "descrip": "Abdominal pain, exacerbating after caffeine consumption",
    "id": "s_1207"
  },
  {
    "descrip": "Abdominal pain, exacerbating during coughing or movement",
    "id": "s_15"
  },
  {
    "descrip": "Abdominal pain, exacerbating during deep breath",
    "id": "s_1202"
  },
  {
    "descrip": "Abdominal pain, exacerbating on an empty stomach",
    "id": "s_14"
  },
  {
    "descrip": "Abdominal pain, gradual onset",
    "id": "s_1844"
  },
  {
    "descrip": "Abdominal pain, lasting 2 to 7 days",
    "id": "s_1852"
  },
  {
    "descrip": "Abdominal pain, lasting 8 to 14 days",
    "id": "s_1853"
  },
  {
    "descrip": "Abdominal pain, lasting less than 2 days",
    "id": "s_1840"
  },
  {
    "descrip": "Abdominal pain, lasting more than 2 weeks",
    "id": "s_1842"
  },
  {
    "descrip": "Abdominal pain, left lower quadrant",
    "id": "s_1729"
  },
  {
    "descrip": "Abdominal pain, left side",
    "id": "s_1854"
  },
  {
    "descrip": "Abdominal pain, left upper quadrant",
    "id": "s_1591"
  },
  {
    "descrip": "Abdominal pain, localised",
    "id": "s_2275"
  },
  {
    "descrip": "Abdominal pain, midcycle",
    "id": "s_1859"
  },
  {
    "descrip": "Abdominal pain, migrating to the right lower quadrant",
    "id": "s_1851"
  },
  {
    "descrip": "Abdominal pain, mild",
    "id": "s_1782"
  },
  {
    "descrip": "Abdominal pain, moderate",
    "id": "s_1783"
  },
  {
    "descrip": "Abdominal pain, no exacerbation factor",
    "id": "s_2311"
  },
  {
    "descrip": "Abdominal pain, periumbilical",
    "id": "s_1532"
  },
  {
    "descrip": "Abdominal pain, postprandial",
    "id": "s_16"
  },
  {
    "descrip": "Abdominal pain, premenstrual",
    "id": "s_17"
  },
  {
    "descrip": "Abdominal pain, radiating to left shoulder or shoulder blade",
    "id": "s_1845"
  },
  {
    "descrip": "Abdominal pain, radiating to lower or middle part of the back",
    "id": "s_1846"
  },
  {
    "descrip": "Abdominal pain, radiating to right shoulder or shoulder blade",
    "id": "s_471"
  },
  {
    "descrip": "Abdominal pain, recurrent",
    "id": "s_1847"
  },
  {
    "descrip": "Abdominal pain, reduced by defecation or relieving flatulence",
    "id": "s_57"
  },
  {
    "descrip": "Abdominal pain, right lower quadrant",
    "id": "s_1531"
  },
  {
    "descrip": "Abdominal pain, right side",
    "id": "s_1855"
  },
  {
    "descrip": "Abdominal pain, right upper quadrant",
    "id": "s_1528"
  },
  {
    "descrip": "Abdominal pain, severe",
    "id": "s_1195"
  },
  {
    "descrip": "Abdominal pain, sharp and stabbing",
    "id": "s_1369"
  },
  {
    "descrip": "Abdominal pain, sudden onset",
    "id": "s_1843"
  },
  {
    "descrip": "Abdominal pain, unbearable",
    "id": "s_1929"
  },
  {
    "descrip": "Abdominal pain, unknown character",
    "id": "s_2288"
  },
  {
    "descrip": "Abdominal pain, unspecified location",
    "id": "s_2281"
  },
  {
    "descrip": "Abdominal tenderness",
    "id": "s_1514"
  },
  {
    "descrip": "Abdominal tenderness, epigastric region",
    "id": "s_2463"
  },
  {
    "descrip": "Abdominal tenderness, hypogastric region",
    "id": "s_1400"
  },
  {
    "descrip": "Abdominal tenderness, left lower quadrant",
    "id": "s_2252"
  },
  {
    "descrip": "Abdominal tenderness, left upper quadrant",
    "id": "s_1589"
  },
  {
    "descrip": "Abdominal tenderness, right lower quadrant",
    "id": "s_1856"
  },
  {
    "descrip": "Abdominal tenderness, right upper quadrant",
    "id": "s_1392"
  },
  {
    "descrip": "Abnormal vaginal discharge",
    "id": "s_328"
  },
  {
    "descrip": "Abscess",
    "id": "s_598"
  },
  {
    "descrip": "Absence of deep reflexes",
    "id": "s_1072"
  },
  {
    "descrip": "Absence seizure",
    "id": "s_2047"
  },
  {
    "descrip": "Absence seizures, reflex",
    "id": "s_2294"
  },
  {
    "descrip": "Achilles tendon hyperreflexia",
    "id": "s_1502"
  },
  {
    "descrip": "Acid reflux",
    "id": "s_2121"
  },
  {
    "descrip": "Activity related to sex despite negative consequences",
    "id": "s_3"
  },
  {
    "descrip": "Adenoid face",
    "id": "s_1111"
  },
  {
    "descrip": "Agitation",
    "id": "s_145"
  },
  {
    "descrip": "Agnosia",
    "id": "s_833"
  },
  {
    "descrip": "Agoraphobia",
    "id": "s_884"
  },
  {
    "descrip": "Agraphia",
    "id": "s_1012"
  },
  {
    "descrip": "Alcohol craving",
    "id": "s_817"
  },
  {
    "descrip": "Alcohol tolerance",
    "id": "s_588"
  },
  {
    "descrip": "Alcohol withdrawal syndrome",
    "id": "s_818"
  },
  {
    "descrip": "Allen-Cleckley sign",
    "id": "s_1272"
  },
  {
    "descrip": "Alogia",
    "id": "s_837"
  },
  {
    "descrip": "Amenorrhea, primary",
    "id": "s_1458"
  },
  {
    "descrip": "Amenorrhea, secondary",
    "id": "s_1457"
  },
  {
    "descrip": "Amenorrhea, secondary, 12 months or more",
    "id": "s_1370"
  },
  {
    "descrip": "Amusia",
    "id": "s_1032"
  },
  {
    "descrip": "Angular cheilitis",
    "id": "s_608"
  },
  {
    "descrip": "Anhedonia",
    "id": "s_508"
  },
  {
    "descrip": "Anhidrosis",
    "id": "s_1123"
  },
  {
    "descrip": "Anhidrosis, face, unilateral",
    "id": "s_669"
  },
  {
    "descrip": "Anicteric presentation",
    "id": "s_2170"
  },
  {
    "descrip": "Anisocoria",
    "id": "s_497"
  },
  {
    "descrip": "Annular skin lesions",
    "id": "s_1647"
  },
  {
    "descrip": "Anorectal pain",
    "id": "s_436"
  },
  {
    "descrip": "Anxiety",
    "id": "s_120"
  },
  {
    "descrip": "Anxiety attack",
    "id": "s_582"
  },
  {
    "descrip": "Apathy",
    "id": "s_4"
  },
  {
    "descrip": "Aphonia",
    "id": "s_477"
  },
  {
    "descrip": "Appetite for salty foods",
    "id": "s_6"
  },
  {
    "descrip": "Apraxia",
    "id": "s_1010"
  },
  {
    "descrip": "Ascites",
    "id": "s_1116"
  },
  {
    "descrip": "Ataxia",
    "id": "s_651"
  },
  {
    "descrip": "Ataxia, acute",
    "id": "s_2278"
  },
  {
    "descrip": "Ataxia, chronic",
    "id": "s_2280"
  },
  {
    "descrip": "Ataxia, subacute",
    "id": "s_2279"
  },
  {
    "descrip": "Audible wheezing",
    "id": "s_474"
  },
  {
    "descrip": "Auditory verbal agnosia",
    "id": "s_1028"
  },
  {
    "descrip": "Auscultative fine crackles over the thorax",
    "id": "s_857"
  },
  {
    "descrip": "Auscultative rhonchi over the thorax",
    "id": "s_1316"
  },
  {
    "descrip": "Auscultative wheezes over the thorax",
    "id": "s_856"
  },
  {
    "descrip": "Avoiding actions, places, or people that bring back memories of a traumatic experience",
    "id": "s_710"
  },
  {
    "descrip": "Avoiding eating in someone else's presence",
    "id": "s_719"
  },
  {
    "descrip": "Avoiding eating or drinking in public",
    "id": "s_718"
  },
  {
    "descrip": "Avoiding public appearances",
    "id": "s_717"
  },
  {
    "descrip": "Avoiding talking to authority figures",
    "id": "s_720"
  },
  {
    "descrip": "Avoiding thoughts, feelings, or conversations related to a traumatic experience",
    "id": "s_709"
  },
  {
    "descrip": "Axillary or inguinal freckles",
    "id": "s_1322"
  },
  {
    "descrip": "Babinski sign",
    "id": "s_1023"
  },
  {
    "descrip": "Back pain",
    "id": "s_1190"
  },
  {
    "descrip": "Back pain, exacerbated by physical exertion",
    "id": "s_159"
  },
  {
    "descrip": "Back pain, improves with rest",
    "id": "s_1206"
  },
  {
    "descrip": "Back pain, lasting several hours",
    "id": "s_1205"
  },
  {
    "descrip": "Back pain, lumbar",
    "id": "s_53"
  },
  {
    "descrip": "Back pain, lumbar, radiates to back of the thigh",
    "id": "s_38"
  },
  {
    "descrip": "Back pain, lumbar, radiating to the groin",
    "id": "s_663"
  },
  {
    "descrip": "Back pain, lumbar, unknown radiating direction",
    "id": "s_2314"
  },
  {
    "descrip": "Back pain, nocturnal",
    "id": "s_2284"
  },
  {
    "descrip": "Back pain, recurrent",
    "id": "s_1189"
  },
  {
    "descrip": "Back pain, severe",
    "id": "s_1192"
  },
  {
    "descrip": "Back pain, sudden",
    "id": "s_1198"
  },
  {
    "descrip": "Back pain, thoracic",
    "id": "s_1772"
  },
  {
    "descrip": "Back pain, worsens on palpation",
    "id": "s_2085"
  },
  {
    "descrip": "Bedwetting",
    "id": "s_2048"
  },
  {
    "descrip": "Belching",
    "id": "s_561"
  },
  {
    "descrip": "Bilateral absence of Achilles tendon reflex",
    "id": "s_1073"
  },
  {
    "descrip": "Bilateral enophthalmos",
    "id": "s_698"
  },
  {
    "descrip": "Bilateral muscle paralysis",
    "id": "s_1291"
  },
  {
    "descrip": "Bing's sign",
    "id": "s_1257"
  },
  {
    "descrip": "Binge eating",
    "id": "s_137"
  },
  {
    "descrip": "Binge eating, followed by self-disgust",
    "id": "s_568"
  },
  {
    "descrip": "Bizarre delusion",
    "id": "s_769"
  },
  {
    "descrip": "Black coloured stool",
    "id": "s_71"
  },
  {
    "descrip": "Black stool, related to diet or medicine intake",
    "id": "s_2523"
  },
  {
    "descrip": "Bladder sphincter dysfunction",
    "id": "s_1119"
  },
  {
    "descrip": "Bleeding after intercourse",
    "id": "s_152"
  },
  {
    "descrip": "Bleeding from anus",
    "id": "s_115"
  },
  {
    "descrip": "Bleeding from anus, heavy",
    "id": "s_2277"
  },
  {
    "descrip": "Bleeding from anus, light",
    "id": "s_2276"
  },
  {
    "descrip": "Bleeding gums",
    "id": "s_111"
  },
  {
    "descrip": "Bleeding into muscles",
    "id": "s_1386"
  },
  {
    "descrip": "Blepharoptosis",
    "id": "s_192"
  },
  {
    "descrip": "Blepharoptosis, acute",
    "id": "s_2508"
  },
  {
    "descrip": "Blepharoptosis, chronic",
    "id": "s_2511"
  },
  {
    "descrip": "Blisters",
    "id": "s_1807"
  },
  {
    "descrip": "Blisters, bulla",
    "id": "s_1803"
  },
  {
    "descrip": "Blisters, vesicle",
    "id": "s_1804"
  },
  {
    "descrip": "Bloating",
    "id": "s_309"
  },
  {
    "descrip": "Blood oxygen saturation, between 80% and 89%",
    "id": "s_2388"
  },
  {
    "descrip": "Blood oxygen saturation, between 90% and 94%",
    "id": "s_2387"
  },
  {
    "descrip": "Blood oxygen saturation, lower than 80%",
    "id": "s_2389"
  },
  {
    "descrip": "Blood oxygen saturation, normal",
    "id": "s_2376"
  },
  {
    "descrip": "Blood oxygen saturation, not measured",
    "id": "s_2375"
  },
  {
    "descrip": "Blood oxygen saturation, sudden worsening",
    "id": "s_2390"
  },
  {
    "descrip": "Blood pressure, between 140 and 179 mmHg",
    "id": "s_2408"
  },
  {
    "descrip": "Blood pressure, elevated",
    "id": "s_543"
  },
  {
    "descrip": "Blood pressure, more than 180 mmHg",
    "id": "s_1933"
  },
  {
    "descrip": "Blood pressure, normal or prehypertension",
    "id": "s_2272"
  },
  {
    "descrip": "Blood pressure, not measured",
    "id": "s_2273"
  },
  {
    "descrip": "Blunted affect",
    "id": "s_771"
  },
  {
    "descrip": "Body aches",
    "id": "s_1835"
  },
  {
    "descrip": "Bone deformation, non-traumatic",
    "id": "s_2180"
  },
  {
    "descrip": "Bone deformation, post-traumatic",
    "id": "s_2181"
  },
  {
    "descrip": "Bone pain",
    "id": "s_612"
  },
  {
    "descrip": "Bone pain, lasting less than a week",
    "id": "s_2070"
  },
  {
    "descrip": "Bone pain, lasting more than 1 week",
    "id": "s_2071"
  },
  {
    "descrip": "Bone pain, nocturnal",
    "id": "s_2361"
  },
  {
    "descrip": "Bowel incontinence",
    "id": "s_641"
  },
  {
    "descrip": "Bowel sounds, decreased",
    "id": "s_1553"
  },
  {
    "descrip": "Bowel sounds, hyperactive, high-pitched",
    "id": "s_1552"
  },
  {
    "descrip": "Bradycardia",
    "id": "s_534"
  },
  {
    "descrip": "Breast asymmetry in size or shape",
    "id": "s_2234"
  },
  {
    "descrip": "Breast pain or tenderness, bilateral",
    "id": "s_1480"
  },
  {
    "descrip": "Breast pain or tenderness, unilateral",
    "id": "s_609"
  },
  {
    "descrip": "Broken hair",
    "id": "s_1671"
  },
  {
    "descrip": "Brown coloured stool",
    "id": "s_2521"
  },
  {
    "descrip": "Brown nail discolouration",
    "id": "s_1310"
  },
  {
    "descrip": "Brudzinski's sign",
    "id": "s_1690"
  },
  {
    "descrip": "Bruise",
    "id": "s_2341"
  },
  {
    "descrip": "Bruising after trauma",
    "id": "s_1960"
  },
  {
    "descrip": "Bruxism",
    "id": "s_2283"
  },
  {
    "descrip": "Buccofacial or orofacial apraxia",
    "id": "s_1013"
  },
  {
    "descrip": "Bulge protruding through vaginal opening",
    "id": "s_1717"
  },
  {
    "descrip": "Burning skin",
    "id": "s_1165"
  },
  {
    "descrip": "Burning skin, face",
    "id": "s_1684"
  },
  {
    "descrip": "Burning tongue",
    "id": "s_200"
  },
  {
    "descrip": "Buttocks pain",
    "id": "s_1918"
  },
  {
    "descrip": "Café au lait macules",
    "id": "s_1330"
  },
  {
    "descrip": "Calf hypertrophy",
    "id": "s_2261"
  },
  {
    "descrip": "Calf pain",
    "id": "s_1620"
  },
  {
    "descrip": "Calf pain, above the heel",
    "id": "s_1878"
  },
  {
    "descrip": "Calf pain, severe while walking",
    "id": "s_232"
  },
  {
    "descrip": "Calf pain, severe while walking, intermittent claudication",
    "id": "s_732"
  },
  {
    "descrip": "Cardiac murmurs",
    "id": "s_1720"
  },
  {
    "descrip": "Carotid bruit",
    "id": "s_1576"
  },
  {
    "descrip": "Catastrophising",
    "id": "s_2409"
  },
  {
    "descrip": "Ceasing or limiting alcohol consumption",
    "id": "s_589"
  },
  {
    "descrip": "Ceasing or limiting opioid intake",
    "id": "s_2469"
  },
  {
    "descrip": "Cervical dystonia",
    "id": "s_996"
  },
  {
    "descrip": "Chaddock's sign",
    "id": "s_1258"
  },
  {
    "descrip": "Change in colour of a tooth",
    "id": "s_346"
  },
  {
    "descrip": "Change in colour of a tooth, brown",
    "id": "s_2396"
  },
  {
    "descrip": "Change in colour of a tooth, white",
    "id": "s_2393"
  },
  {
    "descrip": "Change in handwriting",
    "id": "s_345"
  },
  {
    "descrip": "Chemical burn",
    "id": "s_2214"
  },
  {
    "descrip": "Chemosis",
    "id": "s_1091"
  },
  {
    "descrip": "Chest pain",
    "id": "s_50"
  },
  {
    "descrip": "Chest pain, burning",
    "id": "s_2096"
  },
  {
    "descrip": "Chest pain, continuing during rest",
    "id": "s_31"
  },
  {
    "descrip": "Chest pain, diffuse",
    "id": "s_51"
  },
  {
    "descrip": "Chest pain, during physical exertion",
    "id": "s_35"
  },
  {
    "descrip": "Chest pain, exacerbated by chest wall movement",
    "id": "s_2051"
  },
  {
    "descrip": "Chest pain, exacerbated by stress",
    "id": "s_1763"
  },
  {
    "descrip": "Chest pain, exacerbating when lying down",
    "id": "s_2006"
  },
  {
    "descrip": "Chest pain, exacerbating with deep breath or cough",
    "id": "s_30"
  },
  {
    "descrip": "Chest pain, lasting between 30 minutes and 8 hours",
    "id": "s_2019"
  },
  {
    "descrip": "Chest pain, lasting less than 30 minutes",
    "id": "s_2018"
  },
  {
    "descrip": "Chest pain, lasting more than 8 hours",
    "id": "s_2022"
  },
  {
    "descrip": "Chest pain, pressure",
    "id": "s_1925"
  },
  {
    "descrip": "Chest pain, radiating between shoulder blades",
    "id": "s_37"
  },
  {
    "descrip": "Chest pain, radiating to left upper limb",
    "id": "s_2074"
  },
  {
    "descrip": "Chest pain, radiating to the neck",
    "id": "s_36"
  },
  {
    "descrip": "Chest pain, recurrent",
    "id": "s_1952"
  },
  {
    "descrip": "Chest pain, severe",
    "id": "s_1197"
  },
  {
    "descrip": "Chest pain, stabbing",
    "id": "s_1601"
  },
  {
    "descrip": "Chest pain, subsides during rest",
    "id": "s_48"
  },
  {
    "descrip": "Chest pain, substernal",
    "id": "s_1509"
  },
  {
    "descrip": "Chest pain, sudden",
    "id": "s_1200"
  },
  {
    "descrip": "Chest pain, worsens on palpation",
    "id": "s_1178"
  },
  {
    "descrip": "Chest pain, worsens on palpation of costochondral joints",
    "id": "s_1580"
  },
  {
    "descrip": "Chest retractions",
    "id": "s_2134"
  },
  {
    "descrip": "Cheyne-Stokes respiration",
    "id": "s_1546"
  },
  {
    "descrip": "Chills",
    "id": "s_81"
  },
  {
    "descrip": "Choking",
    "id": "s_2296"
  },
  {
    "descrip": "Chorea",
    "id": "s_1456"
  },
  {
    "descrip": "Chvostek's sign",
    "id": "s_867"
  },
  {
    "descrip": "Clasp-knife spasticity",
    "id": "s_1281"
  },
  {
    "descrip": "Claudication in upper leg",
    "id": "s_734"
  },
  {
    "descrip": "Clearing the throat",
    "id": "s_1094"
  },
  {
    "descrip": "Clicking or cracking in the jaw when opening or closing the mouth",
    "id": "s_429"
  },
  {
    "descrip": "Clogged ear",
    "id": "s_276"
  },
  {
    "descrip": "Close contact with COVID-19 case",
    "id": "s_2256"
  },
  {
    "descrip": "Close family or friends pointing out excessive drinking",
    "id": "s_288"
  },
  {
    "descrip": "Clubfoot",
    "id": "s_869"
  },
  {
    "descrip": "Coated tonsils",
    "id": "s_610"
  },
  {
    "descrip": "Coating on tongue",
    "id": "s_1184"
  },
  {
    "descrip": "Cognitive disturbances",
    "id": "s_2108"
  },
  {
    "descrip": "Cogwheel muscle rigidity",
    "id": "s_1283"
  },
  {
    "descrip": "Cold and clammy skin",
    "id": "s_1926"
  },
  {
    "descrip": "Cold feet and toes",
    "id": "s_408"
  },
  {
    "descrip": "Cold feet and toes, unilateral",
    "id": "s_2196"
  },
  {
    "descrip": "Cold hands or fingers",
    "id": "s_556"
  },
  {
    "descrip": "Cold sensitivity",
    "id": "s_118"
  },
  {
    "descrip": "Colour vision deficiency",
    "id": "s_1328"
  },
  {
    "descrip": "Coma",
    "id": "s_2109"
  },
  {
    "descrip": "Complete vision loss, recent",
    "id": "s_1934"
  },
  {
    "descrip": "Compulsive behaviour",
    "id": "s_303"
  },
  {
    "descrip": "Confabulation",
    "id": "s_831"
  },
  {
    "descrip": "Confusion, after trauma",
    "id": "s_1345"
  },
  {
    "descrip": "Consciousness disturbances",
    "id": "s_2034"
  },
  {
    "descrip": "Consciousness disturbances, acute",
    "id": "s_2072"
  },
  {
    "descrip": "Consciousness disturbances, chronic",
    "id": "s_2073"
  },
  {
    "descrip": "Constant need for sex",
    "id": "s_181"
  },
  {
    "descrip": "Constipation",
    "id": "s_329"
  },
  {
    "descrip": "Constipation, chronic",
    "id": "s_2162"
  },
  {
    "descrip": "Consumption of expired food or drink",
    "id": "s_2164"
  },
  {
    "descrip": "Contentiousness",
    "id": "s_635"
  },
  {
    "descrip": "Convergent strabismus",
    "id": "s_1228"
  },
  {
    "descrip": "Corn or callus",
    "id": "s_1676"
  },
  {
    "descrip": "Corneal reflex weak or absent",
    "id": "s_1268"
  },
  {
    "descrip": "Cornell's sign",
    "id": "s_1273"
  },
  {
    "descrip": "Cough",
    "id": "s_102"
  },
  {
    "descrip": "Cough, alternating productivity",
    "id": "s_2268"
  },
  {
    "descrip": "Cough, dry",
    "id": "s_105"
  },
  {
    "descrip": "Cough, lasting 3 to 8 weeks",
    "id": "s_1858"
  },
  {
    "descrip": "Cough, lasting less than 3 weeks",
    "id": "s_103"
  },
  {
    "descrip": "Cough, lasting more than 8 weeks",
    "id": "s_106"
  },
  {
    "descrip": "Cough, nocturnal",
    "id": "s_1985"
  },
  {
    "descrip": "Cough, paroxysmal",
    "id": "s_1924"
  },
  {
    "descrip": "Cough, productive",
    "id": "s_104"
  },
  {
    "descrip": "Cough, productive in the morning",
    "id": "s_662"
  },
  {
    "descrip": "Cough, productive with pink, frothy sputum",
    "id": "s_670"
  },
  {
    "descrip": "Cough, productive with yellow or green sputum",
    "id": "s_526"
  },
  {
    "descrip": "Creaking joints during movement",
    "id": "s_270"
  },
  {
    "descrip": "Crotch pain",
    "id": "s_28"
  },
  {
    "descrip": "Crotch pain, glans penis",
    "id": "s_60"
  },
  {
    "descrip": "Crotch pain, sudden",
    "id": "s_34"
  },
  {
    "descrip": "Crotch pain, testicular or scrotal",
    "id": "s_52"
  },
  {
    "descrip": "Crotch pain, vulvovaginal",
    "id": "s_1829"
  },
  {
    "descrip": "Current cigarette smoking",
    "id": "s_195"
  },
  {
    "descrip": "Cyanosis",
    "id": "s_437"
  },
  {
    "descrip": "Cyanosis under the eyes",
    "id": "s_1105"
  },
  {
    "descrip": "Cyanosis, fingers",
    "id": "s_553"
  },
  {
    "descrip": "Cystoid macular edema",
    "id": "s_1413"
  },
  {
    "descrip": "Damage to 2 separate areas of innervation",
    "id": "s_1338"
  },
  {
    "descrip": "Dance's sign",
    "id": "s_1555"
  },
  {
    "descrip": "Dandruff",
    "id": "s_1616"
  },
  {
    "descrip": "Darier's sign",
    "id": "s_1171"
  },
  {
    "descrip": "Dark urine",
    "id": "s_611"
  },
  {
    "descrip": "Dark-red spots in optic disc vessels",
    "id": "s_1417"
  },
  {
    "descrip": "Decreased hearing",
    "id": "s_208"
  },
  {
    "descrip": "Decreased hearing, progressive hearing loss",
    "id": "s_1484"
  },
  {
    "descrip": "Decreased hearing, sudden hearing loss",
    "id": "s_1538"
  },
  {
    "descrip": "Decreased hearing, variable intensity and duration",
    "id": "s_935"
  },
  {
    "descrip": "Decreased intensity of breath sounds",
    "id": "s_1693"
  },
  {
    "descrip": "Decreased intensity of breath sounds, right basilar lung zones",
    "id": "s_1395"
  },
  {
    "descrip": "Decreased libido",
    "id": "s_236"
  },
  {
    "descrip": "Decreased motivation",
    "id": "s_661"
  },
  {
    "descrip": "Decreased need for sleep",
    "id": "s_634"
  },
  {
    "descrip": "Decreased pupillary light reflex",
    "id": "s_535"
  },
  {
    "descrip": "Decreased skin turgor",
    "id": "s_697"
  },
  {
    "descrip": "Decreased tongue motility",
    "id": "s_1277"
  },
  {
    "descrip": "Decreased visual acuity",
    "id": "s_967"
  },
  {
    "descrip": "Deep filling of treated tooth",
    "id": "s_97"
  },
  {
    "descrip": "Deep tendon reflexes, decreased",
    "id": "s_652"
  },
  {
    "descrip": "Deep tendon reflexes, increased",
    "id": "s_878"
  },
  {
    "descrip": "Deepening of periodontal pockets",
    "id": "s_108"
  },
  {
    "descrip": "Deepening of voice",
    "id": "s_422"
  },
  {
    "descrip": "Delayed speech or language development",
    "id": "s_1603"
  },
  {
    "descrip": "Delusion of guilt or sin",
    "id": "s_768"
  },
  {
    "descrip": "Delusion of impoverishment",
    "id": "s_774"
  },
  {
    "descrip": "Delusions",
    "id": "s_2098"
  },
  {
    "descrip": "Delusions of grandeur",
    "id": "s_677"
  },
  {
    "descrip": "Delusions of influence",
    "id": "s_680"
  },
  {
    "descrip": "Delusions of persecution",
    "id": "s_675"
  },
  {
    "descrip": "Delusions of reference",
    "id": "s_676"
  },
  {
    "descrip": "Delusions of thought insertion, thought withdrawal, thought broadcasting",
    "id": "s_839"
  },
  {
    "descrip": "Demarcation of retinal detachment (pigmented or nonpigmented)",
    "id": "s_1409"
  },
  {
    "descrip": "Dennie-Morgan fold",
    "id": "s_1106"
  },
  {
    "descrip": "Dental plaque",
    "id": "s_203"
  },
  {
    "descrip": "Depersonalization",
    "id": "s_1587"
  },
  {
    "descrip": "Depressed mood",
    "id": "s_169"
  },
  {
    "descrip": "Depressed mood, more than 2 weeks",
    "id": "s_916"
  },
  {
    "descrip": "Derealization",
    "id": "s_514"
  },
  {
    "descrip": "Dermatological changes",
    "id": "s_241"
  },
  {
    "descrip": "Dermatological changes, aggravated by stress",
    "id": "s_1761"
  },
  {
    "descrip": "Dermatological changes, entire body",
    "id": "s_398"
  },
  {
    "descrip": "Dermatological changes, exacerbated by alcohol consumption",
    "id": "s_1692"
  },
  {
    "descrip": "Dermatological changes, exacerbated by sunlight exposure",
    "id": "s_1921"
  },
  {
    "descrip": "Dermatological changes, eyelid",
    "id": "s_483"
  },
  {
    "descrip": "Dermatological changes, feet",
    "id": "s_1923"
  },
  {
    "descrip": "Dermatological changes, female genital area",
    "id": "s_2110"
  },
  {
    "descrip": "Dermatological changes, forming a line",
    "id": "s_350"
  },
  {
    "descrip": "Dermatological changes, hands",
    "id": "s_1982"
  },
  {
    "descrip": "Dermatological changes, hot to the touch",
    "id": "s_1510"
  },
  {
    "descrip": "Dermatological changes, hyperpigmentation of the skin",
    "id": "s_1680"
  },
  {
    "descrip": "Dermatological changes, in direct contact with buttons, fasteners, or cosmetics",
    "id": "s_352"
  },
  {
    "descrip": "Dermatological changes, localised",
    "id": "s_2382"
  },
  {
    "descrip": "Dermatological changes, located in genital area, chancre",
    "id": "s_1602"
  },
  {
    "descrip": "Dermatological changes, located in the genital area",
    "id": "s_1810"
  },
  {
    "descrip": "Dermatological changes, located on the face",
    "id": "s_1808"
  },
  {
    "descrip": "Dermatological changes, lower extremities excluding feet",
    "id": "s_2267"
  },
  {
    "descrip": "Dermatological changes, male genital area",
    "id": "s_2111"
  },
  {
    "descrip": "Dermatological changes, mouth",
    "id": "s_694"
  },
  {
    "descrip": "Dermatological changes, on genitals resembling cauliflower",
    "id": "s_221"
  },
  {
    "descrip": "Dermatological changes, painful",
    "id": "s_1571"
  },
  {
    "descrip": "Dermatological changes, preceded by pain or itching",
    "id": "s_400"
  },
  {
    "descrip": "Dermatological changes, recurring during infections or menstrual period",
    "id": "s_402"
  },
  {
    "descrip": "Dermatological changes, rough and irregular surface",
    "id": "s_404"
  },
  {
    "descrip": "Dermatological changes, scabs",
    "id": "s_245"
  },
  {
    "descrip": "Dermatological changes, scalp",
    "id": "s_2059"
  },
  {
    "descrip": "Dermatological changes, spreading",
    "id": "s_1988"
  },
  {
    "descrip": "Dermatological changes, tongue",
    "id": "s_2412"
  },
  {
    "descrip": "Dermatological changes, trunk",
    "id": "s_2060"
  },
  {
    "descrip": "Dermatological changes, upper extremities excluding hands",
    "id": "s_2266"
  },
  {
    "descrip": "Dermatological changes, with flare-ups and remissions",
    "id": "s_1191"
  },
  {
    "descrip": "Destructive thoughts towards other people or things",
    "id": "s_1957"
  },
  {
    "descrip": "Diarrhea",
    "id": "s_8"
  },
  {
    "descrip": "Diarrhea, foamy",
    "id": "s_412"
  },
  {
    "descrip": "Diarrhea, lasting 2 to 14 days",
    "id": "s_2194"
  },
  {
    "descrip": "Diarrhea, lasting 2 to 4 weeks",
    "id": "s_2328"
  },
  {
    "descrip": "Diarrhea, lasting less than 48 hours",
    "id": "s_2126"
  },
  {
    "descrip": "Diarrhea, lasting more than 4 weeks",
    "id": "s_2322"
  },
  {
    "descrip": "Diarrhea, more than 6 stools a day",
    "id": "s_1979"
  },
  {
    "descrip": "Diarrhea, rice water",
    "id": "s_1376"
  },
  {
    "descrip": "Diarrhea, unknown character",
    "id": "s_2316"
  },
  {
    "descrip": "Difference in size of testicles",
    "id": "s_1798"
  },
  {
    "descrip": "Difficulty achieving orgasm",
    "id": "s_1574"
  },
  {
    "descrip": "Difficulty acquiring new information",
    "id": "s_269"
  },
  {
    "descrip": "Difficulty biting and chewing",
    "id": "s_266"
  },
  {
    "descrip": "Difficulty bonding with infant",
    "id": "s_727"
  },
  {
    "descrip": "Difficulty completely closing eye",
    "id": "s_1154"
  },
  {
    "descrip": "Diminished appetite",
    "id": "s_284"
  },
  {
    "descrip": "Diminished fear responses",
    "id": "s_1035"
  },
  {
    "descrip": "Diminished superficial reflexes",
    "id": "s_1021"
  },
  {
    "descrip": "Diplopia",
    "id": "s_207"
  },
  {
    "descrip": "Diplopia while looking down and medially",
    "id": "s_1232"
  },
  {
    "descrip": "Diplopia while looking in any direction",
    "id": "s_1235"
  },
  {
    "descrip": "Diplopia with horizontal image dispersion",
    "id": "s_1229"
  },
  {
    "descrip": "Diplopia, lasting less than 24 hours",
    "id": "s_2200"
  },
  {
    "descrip": "Diplopia, lasting more than 24 hours",
    "id": "s_2201"
  },
  {
    "descrip": "Direct care to COVID-19 case",
    "id": "s_2254"
  },
  {
    "descrip": "Discharge from ear",
    "id": "s_297"
  },
  {
    "descrip": "Discharge from ear, bloody",
    "id": "s_1577"
  },
  {
    "descrip": "Discharge from ear, purulent",
    "id": "s_1994"
  },
  {
    "descrip": "Discharge from periodontal pockets",
    "id": "s_302"
  },
  {
    "descrip": "Discharge from urethra",
    "id": "s_369"
  },
  {
    "descrip": "Discharge in tympanic cavity",
    "id": "s_1109"
  },
  {
    "descrip": "Discharge under foreskin",
    "id": "s_301"
  },
  {
    "descrip": "Disinhibition",
    "id": "s_1007"
  },
  {
    "descrip": "Disorganised behaviour",
    "id": "s_731"
  },
  {
    "descrip": "Dissociated sensory loss",
    "id": "s_1265"
  },
  {
    "descrip": "Distance misjudgment",
    "id": "s_501"
  },
  {
    "descrip": "Diurnal mood variation",
    "id": "s_730"
  },
  {
    "descrip": "Divergent strabismus",
    "id": "s_1236"
  },
  {
    "descrip": "Dix-Hallpike maneuver, rotatory nystagmus",
    "id": "s_1731"
  },
  {
    "descrip": "Dizziness",
    "id": "s_370"
  },
  {
    "descrip": "Dizziness, head rotation",
    "id": "s_1479"
  },
  {
    "descrip": "Dizziness, recurrent",
    "id": "s_2023"
  },
  {
    "descrip": "Dizziness, unbearable",
    "id": "s_2118"
  },
  {
    "descrip": "Dizziness, vertigo",
    "id": "s_936"
  },
  {
    "descrip": "Drinking alcohol alone",
    "id": "s_828"
  },
  {
    "descrip": "Drinking alcohol at work",
    "id": "s_827"
  },
  {
    "descrip": "Drinking alcohol despite awareness of harmful effects",
    "id": "s_819"
  },
  {
    "descrip": "Drinking alcohol to ease hangover",
    "id": "s_109"
  },
  {
    "descrip": "Drinking large quantities of alcohol",
    "id": "s_198"
  },
  {
    "descrip": "Drinking large quantities of alcohol at one time",
    "id": "s_199"
  },
  {
    "descrip": "Drive for muscularity",
    "id": "s_2473"
  },
  {
    "descrip": "Drooping mouth corner",
    "id": "s_432"
  },
  {
    "descrip": "Drop attack",
    "id": "s_974"
  },
  {
    "descrip": "Drunk driving",
    "id": "s_823"
  },
  {
    "descrip": "Dry discharge on eyelids",
    "id": "s_489"
  },
  {
    "descrip": "Dry eyes",
    "id": "s_2094"
  },
  {
    "descrip": "Dry mouth",
    "id": "s_247"
  },
  {
    "descrip": "Dry skin",
    "id": "s_542"
  },
  {
    "descrip": "Dry, cracked skin, bleeding occasionally",
    "id": "s_385"
  },
  {
    "descrip": "Dysmenorrhea",
    "id": "s_59"
  },
  {
    "descrip": "Dyspepsia",
    "id": "s_1432"
  },
  {
    "descrip": "Dysphagia",
    "id": "s_962"
  },
  {
    "descrip": "Dysphagia, esophageal",
    "id": "s_1779"
  },
  {
    "descrip": "Dysphagia, oropharyngeal",
    "id": "s_1776"
  },
  {
    "descrip": "Dysphonia",
    "id": "s_68"
  },
  {
    "descrip": "Dysphonia, more than 2 weeks",
    "id": "s_1958"
  },
  {
    "descrip": "Dyspnea",
    "id": "s_88"
  },
  {
    "descrip": "Dyspnea, acute, after trauma",
    "id": "s_2075"
  },
  {
    "descrip": "Dyspnea, after a few minutes of walking",
    "id": "s_2203"
  },
  {
    "descrip": "Dyspnea, at rest",
    "id": "s_2205"
  },
  {
    "descrip": "Dyspnea, lasting 1 to 24 hours",
    "id": "s_2176"
  },
  {
    "descrip": "Dyspnea, lasting between 1 day and 4 weeks",
    "id": "s_90"
  },
  {
    "descrip": "Dyspnea, lasting more than 4 weeks",
    "id": "s_1625"
  },
  {
    "descrip": "Dyspnea, on exertion",
    "id": "s_2204"
  },
  {
    "descrip": "Dyspnea, orthopnea",
    "id": "s_563"
  },
  {
    "descrip": "Dyspnea, paroxysmal nocturnal",
    "id": "s_1317"
  },
  {
    "descrip": "Dyspnea, started 1 hour ago",
    "id": "s_92"
  },
  {
    "descrip": "Dyspnea, sudden worsening",
    "id": "s_2368"
  },
  {
    "descrip": "Dyspnea, unknown severity",
    "id": "s_2231"
  },
  {
    "descrip": "Dyspnea, with flare-ups and remissions",
    "id": "s_1185"
  },
  {
    "descrip": "Dystonia",
    "id": "s_1298"
  },
  {
    "descrip": "Ear canal swelling",
    "id": "s_291"
  },
  {
    "descrip": "Earache",
    "id": "s_47"
  },
  {
    "descrip": "Earache, tenderness around the ear",
    "id": "s_476"
  },
  {
    "descrip": "Easy bruising",
    "id": "s_234"
  },
  {
    "descrip": "Echolalia",
    "id": "s_1696"
  },
  {
    "descrip": "Edema",
    "id": "s_700"
  },
  {
    "descrip": "Edema, both ankles",
    "id": "s_623"
  },
  {
    "descrip": "Edema, both feet",
    "id": "s_1995"
  },
  {
    "descrip": "Edema, both hands",
    "id": "s_2093"
  },
  {
    "descrip": "Edema, both lower limbs",
    "id": "s_175"
  },
  {
    "descrip": "Edema, costochondral junctions",
    "id": "s_1581"
  },
  {
    "descrip": "Edema, daytime",
    "id": "s_701"
  },
  {
    "descrip": "Edema, dependent on the body position",
    "id": "s_699"
  },
  {
    "descrip": "Edema, elbow joint",
    "id": "s_1635"
  },
  {
    "descrip": "Edema, face",
    "id": "s_616"
  },
  {
    "descrip": "Edema, finger",
    "id": "s_1311"
  },
  {
    "descrip": "Edema, hip joint",
    "id": "s_1652"
  },
  {
    "descrip": "Edema, joint",
    "id": "s_174"
  },
  {
    "descrip": "Edema, knee joint",
    "id": "s_170"
  },
  {
    "descrip": "Edema, lip",
    "id": "s_1433"
  },
  {
    "descrip": "Edema, neck",
    "id": "s_363"
  },
  {
    "descrip": "Edema, nose",
    "id": "s_1996"
  },
  {
    "descrip": "Edema, one ankle",
    "id": "s_171"
  },
  {
    "descrip": "Edema, one foot",
    "id": "s_2103"
  },
  {
    "descrip": "Edema, one hand",
    "id": "s_1464"
  },
  {
    "descrip": "Edema, one lower limb",
    "id": "s_173"
  },
  {
    "descrip": "Edema, penis",
    "id": "s_2207"
  },
  {
    "descrip": "Edema, periorbital",
    "id": "s_1442"
  },
  {
    "descrip": "Edema, pitting",
    "id": "s_562"
  },
  {
    "descrip": "Edema, scrotum",
    "id": "s_176"
  },
  {
    "descrip": "Edema, shoulder joint",
    "id": "s_1655"
  },
  {
    "descrip": "Edema, toe",
    "id": "s_1997"
  },
  {
    "descrip": "Edema, upper limb",
    "id": "s_1447"
  },
  {
    "descrip": "Edema, wrist joint",
    "id": "s_1431"
  },
  {
    "descrip": "Electrical burn",
    "id": "s_1989"
  },
  {
    "descrip": "Elevated mood",
    "id": "s_633"
  },
  {
    "descrip": "Enamel hypomineralization",
    "id": "s_2383"
  },
  {
    "descrip": "Enamel hypoplasia",
    "id": "s_1166"
  },
  {
    "descrip": "Enamel lesions",
    "id": "s_2381"
  },
  {
    "descrip": "Enamel lesions, caries",
    "id": "s_272"
  },
  {
    "descrip": "Enamel lesions, spots",
    "id": "s_2391"
  },
  {
    "descrip": "Enamel lesions, symmetrical",
    "id": "s_2384"
  },
  {
    "descrip": "Enlarged axillary lymph nodes",
    "id": "s_2292"
  },
  {
    "descrip": "Enlarged breasts",
    "id": "s_219"
  },
  {
    "descrip": "Enlarged cervical lymph nodes",
    "id": "s_2248"
  },
  {
    "descrip": "Enlarged front of neck",
    "id": "s_2247"
  },
  {
    "descrip": "Enlarged kidneys",
    "id": "s_1052"
  },
  {
    "descrip": "Enlarged lymph nodes",
    "id": "s_220"
  },
  {
    "descrip": "Enlarged salivary glands",
    "id": "s_1057"
  },
  {
    "descrip": "Enlarged side of neck",
    "id": "s_2465"
  },
  {
    "descrip": "Enlarged vein of limb, chest or abdomen",
    "id": "s_290"
  },
  {
    "descrip": "Enlarged whole neck",
    "id": "s_2467"
  },
  {
    "descrip": "Enlargement of hands, feet, or face",
    "id": "s_480"
  },
  {
    "descrip": "Enlargement of palatine tonsil, unilateral",
    "id": "s_1390"
  },
  {
    "descrip": "Enlargement of palatine tonsils, bilateral",
    "id": "s_1102"
  },
  {
    "descrip": "Enlargement of the lymphoid tissue in the pharynx",
    "id": "s_1103"
  },
  {
    "descrip": "Erectile dysfunction",
    "id": "s_733"
  },
  {
    "descrip": "Erythema",
    "id": "s_229"
  },
  {
    "descrip": "Erythema migrans",
    "id": "s_202"
  },
  {
    "descrip": "Erythema, V-shaped on chest",
    "id": "s_759"
  },
  {
    "descrip": "Erythema, around eyes",
    "id": "s_1955"
  },
  {
    "descrip": "Erythema, chest",
    "id": "s_2484"
  },
  {
    "descrip": "Erythema, facial",
    "id": "s_1468"
  },
  {
    "descrip": "Erythema, facial, butterfly-shaped",
    "id": "s_230"
  },
  {
    "descrip": "Erythema, finger",
    "id": "s_1314"
  },
  {
    "descrip": "Erythema, foreskin or head of the penis",
    "id": "s_433"
  },
  {
    "descrip": "Erythema, hand",
    "id": "s_557"
  },
  {
    "descrip": "Erythema, joint",
    "id": "s_323"
  },
  {
    "descrip": "Erythema, large portion of body",
    "id": "s_1469"
  },
  {
    "descrip": "Erythema, limb",
    "id": "s_325"
  },
  {
    "descrip": "Erythema, limbs, symmetrical",
    "id": "s_2477"
  },
  {
    "descrip": "Erythema, neck",
    "id": "s_2481"
  },
  {
    "descrip": "Erythema, palmar",
    "id": "s_1125"
  },
  {
    "descrip": "Erythema, scalp",
    "id": "s_1791"
  },
  {
    "descrip": "Erythema, scrotum",
    "id": "s_2236"
  },
  {
    "descrip": "Erythema, shoulders and nape of neck",
    "id": "s_758"
  },
  {
    "descrip": "Erythema, toe",
    "id": "s_2003"
  },
  {
    "descrip": "Erythema, unspecified",
    "id": "s_2371"
  },
  {
    "descrip": "Erythema, vulva",
    "id": "s_1999"
  },
  {
    "descrip": "Erythematous tonsils",
    "id": "s_1498"
  },
  {
    "descrip": "Excess hair growth",
    "id": "s_132"
  },
  {
    "descrip": "Excessive fear in public situations",
    "id": "s_723"
  },
  {
    "descrip": "Excessive fear of separation",
    "id": "s_2289"
  },
  {
    "descrip": "Excessive saliva production",
    "id": "s_1304"
  },
  {
    "descrip": "Excessive sweating",
    "id": "s_216"
  },
  {
    "descrip": "Excessive tear production",
    "id": "s_122"
  },
  {
    "descrip": "Excessive worry about the health of a child",
    "id": "s_725"
  },
  {
    "descrip": "Exophthalmos",
    "id": "s_1163"
  },
  {
    "descrip": "Eye discharge",
    "id": "s_2141"
  },
  {
    "descrip": "Eye discharge, purulent",
    "id": "s_2188"
  },
  {
    "descrip": "Eye discharge, thick and clear",
    "id": "s_2329"
  },
  {
    "descrip": "Eye flashes",
    "id": "s_606"
  },
  {
    "descrip": "Eye pain",
    "id": "s_493"
  },
  {
    "descrip": "Eye pain, unbearable",
    "id": "s_2242"
  },
  {
    "descrip": "Eyelid lesion, itching",
    "id": "s_1983"
  },
  {
    "descrip": "Eyelid lesion, painful",
    "id": "s_485"
  },
  {
    "descrip": "Eyelid lesion, red and warm",
    "id": "s_486"
  },
  {
    "descrip": "Eyelid lesion, red lump with yellow tip",
    "id": "s_484"
  },
  {
    "descrip": "Eyelid tremors",
    "id": "s_591"
  },
  {
    "descrip": "Eyelid twitching",
    "id": "s_235"
  },
  {
    "descrip": "Eyes sensitive to light",
    "id": "s_488"
  },
  {
    "descrip": "Facial muscle paresis",
    "id": "s_1156"
  },
  {
    "descrip": "Facial muscle paresis, lasting between 24 hours and 4 weeks",
    "id": "s_2349"
  },
  {
    "descrip": "Facial muscle paresis, lasting less than 24 hours",
    "id": "s_2348"
  },
  {
    "descrip": "Facial muscle paresis, lasting over 4 weeks",
    "id": "s_2350"
  },
  {
    "descrip": "Facial muscle paresis, unilateral",
    "id": "s_149"
  },
  {
    "descrip": "Facial muscle spasms",
    "id": "s_1425"
  },
  {
    "descrip": "Facial pain",
    "id": "s_478"
  },
  {
    "descrip": "Facial pain, longer than a couple of hours",
    "id": "s_1203"
  },
  {
    "descrip": "Facial pain, paranasal sinus",
    "id": "s_1436"
  },
  {
    "descrip": "Facial pain, periodic",
    "id": "s_427"
  },
  {
    "descrip": "Facial pain, severe",
    "id": "s_1194"
  },
  {
    "descrip": "Facial pain, stabbing",
    "id": "s_425"
  },
  {
    "descrip": "Facial pain, triggered by eating, or touching or brushing teeth",
    "id": "s_426"
  },
  {
    "descrip": "Facial pain, unilateral",
    "id": "s_424"
  },
  {
    "descrip": "Fascination with death",
    "id": "s_2415"
  },
  {
    "descrip": "Fatigue",
    "id": "s_2100"
  },
  {
    "descrip": "Fatigue, more than 6 months",
    "id": "s_1547"
  },
  {
    "descrip": "Fatigue, weakness after exercise",
    "id": "s_1332"
  },
  {
    "descrip": "Fear of ageing",
    "id": "s_2470"
  },
  {
    "descrip": "Fear of dying",
    "id": "s_516"
  },
  {
    "descrip": "Fear of going insane",
    "id": "s_1087"
  },
  {
    "descrip": "Fear of losing control",
    "id": "s_1088"
  },
  {
    "descrip": "Fear of obesity",
    "id": "s_157"
  },
  {
    "descrip": "Fear of object, situation, action",
    "id": "s_244"
  },
  {
    "descrip": "Fear of parent",
    "id": "s_2333"
  },
  {
    "descrip": "Fear of public appearances",
    "id": "s_721"
  },
  {
    "descrip": "Feeling hot",
    "id": "s_274"
  },
  {
    "descrip": "Feeling of guilt",
    "id": "s_205"
  },
  {
    "descrip": "Feeling of guilt or shame after drinking alcohol",
    "id": "s_206"
  },
  {
    "descrip": "Feeling of helplessness",
    "id": "s_629"
  },
  {
    "descrip": "Feeling of hopelessness",
    "id": "s_632"
  },
  {
    "descrip": "Feeling of incomplete evacuation of the bladder",
    "id": "s_435"
  },
  {
    "descrip": "Feeling of rectal fullness",
    "id": "s_1565"
  },
  {
    "descrip": "Feeling of sand under eyelids",
    "id": "s_201"
  },
  {
    "descrip": "Feeling of vaginal fullness",
    "id": "s_1716"
  },
  {
    "descrip": "Feeling of weight in scrotum",
    "id": "s_1175"
  },
  {
    "descrip": "Feeling overweight despite normal to low weight",
    "id": "s_419"
  },
  {
    "descrip": "Feeling pressure or pulsation inside the tooth",
    "id": "s_279"
  },
  {
    "descrip": "Female genital burn",
    "id": "s_2186"
  },
  {
    "descrip": "Female infertility",
    "id": "s_7"
  },
  {
    "descrip": "Fetal membranes rupture",
    "id": "s_2010"
  },
  {
    "descrip": "Fetal membranes rupture, purulent or malodorous amniotic fluid",
    "id": "s_2125"
  },
  {
    "descrip": "Fever",
    "id": "s_98"
  },
  {
    "descrip": "Fever, between 100.4 and 104°F or 38 and 40°C",
    "id": "s_100"
  },
  {
    "descrip": "Fever, between 98.6 and 100.4°F or 37 and 38°C",
    "id": "s_99"
  },
  {
    "descrip": "Fever, flare-ups and remissions",
    "id": "s_1186"
  },
  {
    "descrip": "Fever, higher than 104°F or 40°C",
    "id": "s_2000"
  },
  {
    "descrip": "Fever, lasting 3 to 7 days",
    "id": "s_2320"
  },
  {
    "descrip": "Fever, lasting less than 3 days",
    "id": "s_2319"
  },
  {
    "descrip": "Fever, lasting more than 7 days",
    "id": "s_2321"
  },
  {
    "descrip": "Fever, periodic",
    "id": "s_1172"
  },
  {
    "descrip": "Fever, temperature not measured",
    "id": "s_1820"
  },
  {
    "descrip": "Financial recklessness",
    "id": "s_636"
  },
  {
    "descrip": "Fits of anger",
    "id": "s_660"
  },
  {
    "descrip": "Flank pain",
    "id": "s_2182"
  },
  {
    "descrip": "Flat affect",
    "id": "s_772"
  },
  {
    "descrip": "Flat foot",
    "id": "s_2253"
  },
  {
    "descrip": "Foamy urine",
    "id": "s_504"
  },
  {
    "descrip": "Foot drop",
    "id": "s_1909"
  },
  {
    "descrip": "Foot pain",
    "id": "s_578"
  },
  {
    "descrip": "Foot pain, pain in back of foot during single-leg heel raise",
    "id": "s_1645"
  },
  {
    "descrip": "Forgetting names of friends and family",
    "id": "s_146"
  },
  {
    "descrip": "Forward-leaning posture",
    "id": "s_204"
  },
  {
    "descrip": "Foul-smelling stools",
    "id": "s_525"
  },
  {
    "descrip": "Frequent infections",
    "id": "s_505"
  },
  {
    "descrip": "Frequent infections, lower respiratory tract",
    "id": "s_532"
  },
  {
    "descrip": "Frequent infections, upper respiratory tract",
    "id": "s_531"
  },
  {
    "descrip": "Frequent urination",
    "id": "s_215"
  },
  {
    "descrip": "Frontal bossing",
    "id": "s_2366"
  },
  {
    "descrip": "Frontal release signs",
    "id": "s_990"
  },
  {
    "descrip": "Galactorrhea in men",
    "id": "s_2336"
  },
  {
    "descrip": "Galactorrhea in women",
    "id": "s_547"
  },
  {
    "descrip": "Gambling",
    "id": "s_2032"
  },
  {
    "descrip": "Gambling, lying about extent",
    "id": "s_2029"
  },
  {
    "descrip": "Gambling, pathological",
    "id": "s_2024"
  },
  {
    "descrip": "Gastric symptoms, after gluten ingestion",
    "id": "s_2271"
  },
  {
    "descrip": "Gastric symptoms, after lactose ingestion",
    "id": "s_1570"
  },
  {
    "descrip": "Gastric symptoms, stress-related",
    "id": "s_1767"
  },
  {
    "descrip": "General anxiety",
    "id": "s_583"
  },
  {
    "descrip": "Genital injury in female",
    "id": "s_2246"
  },
  {
    "descrip": "Genital injury in male",
    "id": "s_2245"
  },
  {
    "descrip": "Genital itch",
    "id": "s_253"
  },
  {
    "descrip": "Genu varum",
    "id": "s_1226"
  },
  {
    "descrip": "Gingival recession",
    "id": "s_2260"
  },
  {
    "descrip": "Glassy eyes",
    "id": "s_1090"
  },
  {
    "descrip": "Globus sensation",
    "id": "s_513"
  },
  {
    "descrip": "Goldflam's sign",
    "id": "s_1302"
  },
  {
    "descrip": "Gonda-Allen sign",
    "id": "s_1263"
  },
  {
    "descrip": "Gordon's sign",
    "id": "s_1254"
  },
  {
    "descrip": "Gottron's papules",
    "id": "s_756"
  },
  {
    "descrip": "Gowers' sign",
    "id": "s_2262"
  },
  {
    "descrip": "Grandiosity",
    "id": "s_639"
  },
  {
    "descrip": "Gum erythema",
    "id": "s_322"
  },
  {
    "descrip": "Gum pain",
    "id": "s_19"
  },
  {
    "descrip": "Gynecomastia",
    "id": "s_586"
  },
  {
    "descrip": "Hair loss",
    "id": "s_121"
  },
  {
    "descrip": "Hairy leukoplakia",
    "id": "s_618"
  },
  {
    "descrip": "Halitosis",
    "id": "s_65"
  },
  {
    "descrip": "Hallucinations",
    "id": "s_686"
  },
  {
    "descrip": "Hallucinations, auditory",
    "id": "s_682"
  },
  {
    "descrip": "Hallucinations, gustatory",
    "id": "s_683"
  },
  {
    "descrip": "Hallucinations, olfactory",
    "id": "s_684"
  },
  {
    "descrip": "Hallucinations, tactile",
    "id": "s_685"
  },
  {
    "descrip": "Hallucinations, visual",
    "id": "s_681"
  },
  {
    "descrip": "Halos around lights",
    "id": "s_2041"
  },
  {
    "descrip": "Hard lump in inguinal region",
    "id": "s_1246"
  },
  {
    "descrip": "Hard lump in inguinal region, dark or bluish discolouration",
    "id": "s_1248"
  },
  {
    "descrip": "Hard lump in inguinal region, irreducible",
    "id": "s_1247"
  },
  {
    "descrip": "Hard lump in inguinal region, tender",
    "id": "s_1249"
  },
  {
    "descrip": "Hard retinal exudates",
    "id": "s_1346"
  },
  {
    "descrip": "Head drop",
    "id": "s_191"
  },
  {
    "descrip": "Head tilt in order to avoid diplopia",
    "id": "s_1230"
  },
  {
    "descrip": "Head tremors",
    "id": "s_85"
  },
  {
    "descrip": "Headache",
    "id": "s_21"
  },
  {
    "descrip": "Headache, chronic",
    "id": "s_1535"
  },
  {
    "descrip": "Headache, chronic, lasting 3 to 7 days",
    "id": "s_1901"
  },
  {
    "descrip": "Headache, chronic, lasting 4 to 72 hours",
    "id": "s_1870"
  },
  {
    "descrip": "Headache, chronic, lasting 5 minutes to 4 hours",
    "id": "s_1868"
  },
  {
    "descrip": "Headache, chronic, lasting less than 5 minutes",
    "id": "s_1907"
  },
  {
    "descrip": "Headache, exacerbated by increased stress",
    "id": "s_1762"
  },
  {
    "descrip": "Headache, exacerbated by physical activity",
    "id": "s_1871"
  },
  {
    "descrip": "Headache, exacerbated by tilting head forwards",
    "id": "s_625"
  },
  {
    "descrip": "Headache, excruciating",
    "id": "s_1864"
  },
  {
    "descrip": "Headache, forehead",
    "id": "s_1349"
  },
  {
    "descrip": "Headache, generalized",
    "id": "s_24"
  },
  {
    "descrip": "Headache, lancinating",
    "id": "s_604"
  },
  {
    "descrip": "Headache, mild",
    "id": "s_1780"
  },
  {
    "descrip": "Headache, moderate",
    "id": "s_1781"
  },
  {
    "descrip": "Headache, occipital",
    "id": "s_970"
  },
  {
    "descrip": "Headache, pressing",
    "id": "s_23"
  },
  {
    "descrip": "Headache, pulsating",
    "id": "s_25"
  },
  {
    "descrip": "Headache, recent",
    "id": "s_1912"
  },
  {
    "descrip": "Headache, recent, lasting 1 to 24 hours",
    "id": "s_2190"
  },
  {
    "descrip": "Headache, recent, lasting less than 1 hour",
    "id": "s_2189"
  },
  {
    "descrip": "Headache, recent, lasting more than 1 day",
    "id": "s_2191"
  },
  {
    "descrip": "Headache, series over a period of time",
    "id": "s_605"
  },
  {
    "descrip": "Headache, severe",
    "id": "s_1193"
  },
  {
    "descrip": "Headache, sudden onset",
    "id": "s_1905"
  },
  {
    "descrip": "Headache, temporal region",
    "id": "s_1911"
  },
  {
    "descrip": "Headache, unilateral",
    "id": "s_22"
  },
  {
    "descrip": "Headache, waking up from sleep",
    "id": "s_2516"
  },
  {
    "descrip": "Headache, worse in the morning",
    "id": "s_799"
  },
  {
    "descrip": "Hearing voices arguing",
    "id": "s_841"
  },
  {
    "descrip": "Hearing voices commenting",
    "id": "s_840"
  },
  {
    "descrip": "Heartburn",
    "id": "s_338"
  },
  {
    "descrip": "Heavy legs at the end of the day",
    "id": "s_273"
  },
  {
    "descrip": "Heavy or prolonged menstrual periods",
    "id": "s_158"
  },
  {
    "descrip": "Heel drop test",
    "id": "s_1922"
  },
  {
    "descrip": "Hemarthrosis",
    "id": "s_1170"
  },
  {
    "descrip": "Hematemesis",
    "id": "s_306"
  },
  {
    "descrip": "Hemianopsia bitemporalis",
    "id": "s_814"
  },
  {
    "descrip": "Hemoptysis",
    "id": "s_116"
  },
  {
    "descrip": "Hepatomegaly",
    "id": "s_1051"
  },
  {
    "descrip": "Hiccups",
    "id": "s_1295"
  },
  {
    "descrip": "High-arched palate",
    "id": "s_1108"
  },
  {
    "descrip": "History of anemia",
    "id": "s_147"
  },
  {
    "descrip": "Holster sign",
    "id": "s_757"
  },
  {
    "descrip": "Homonymous hemianopsia",
    "id": "s_957"
  },
  {
    "descrip": "Honey-coloured crust on the skin",
    "id": "s_373"
  },
  {
    "descrip": "Hot flashes",
    "id": "s_280"
  },
  {
    "descrip": "Hyperalgesia",
    "id": "s_1481"
  },
  {
    "descrip": "Hyperkeratosis on hands",
    "id": "s_760"
  },
  {
    "descrip": "Hypersensitivity to smells",
    "id": "s_1891"
  },
  {
    "descrip": "Hypersensitivity to sound",
    "id": "s_1150"
  },
  {
    "descrip": "Hypnagogic hallucinations",
    "id": "s_2507"
  },
  {
    "descrip": "Hypochondriacal delusions",
    "id": "s_679"
  },
  {
    "descrip": "Hypomenorrhea",
    "id": "s_1876"
  },
  {
    "descrip": "Hypopigmentation of the skin",
    "id": "s_180"
  },
  {
    "descrip": "Hypopyon",
    "id": "s_570"
  },
  {
    "descrip": "Hypotension",
    "id": "s_533"
  },
  {
    "descrip": "Ignoring consequences and social norms",
    "id": "s_842"
  },
  {
    "descrip": "Illusion of surroundings being bigger or smaller than they actually are",
    "id": "s_341"
  },
  {
    "descrip": "Impaired balance while walking",
    "id": "s_317"
  },
  {
    "descrip": "Impaired concentration",
    "id": "s_631"
  },
  {
    "descrip": "Impaired downward eye motion",
    "id": "s_1241"
  },
  {
    "descrip": "Impaired lateral eye motion",
    "id": "s_1227"
  },
  {
    "descrip": "Impaired medial eye motion",
    "id": "s_1240"
  },
  {
    "descrip": "Impaired memory",
    "id": "s_316"
  },
  {
    "descrip": "Impaired memory, alcohol-related amnesia",
    "id": "s_825"
  },
  {
    "descrip": "Impaired memory, finding everyday objects",
    "id": "s_619"
  },
  {
    "descrip": "Impaired memory, short-term",
    "id": "s_830"
  },
  {
    "descrip": "Impaired smell",
    "id": "s_1095"
  },
  {
    "descrip": "Impaired social functioning",
    "id": "s_716"
  },
  {
    "descrip": "Impaired upward eye motion",
    "id": "s_1239"
  },
  {
    "descrip": "Impaired vision",
    "id": "s_320"
  },
  {
    "descrip": "Impaired vision, bilateral",
    "id": "s_2464"
  },
  {
    "descrip": "Impaired vision, one eye",
    "id": "s_1819"
  },
  {
    "descrip": "Impaired vision, recent onset",
    "id": "s_1818"
  },
  {
    "descrip": "Impaired vision, temple pain on side with vision problem",
    "id": "s_1146"
  },
  {
    "descrip": "Impulsive behaviour",
    "id": "s_1384"
  },
  {
    "descrip": "Inability to bear weight, after trauma",
    "id": "s_2086"
  },
  {
    "descrip": "Inability to complete tasks",
    "id": "s_1385"
  },
  {
    "descrip": "Inability to move mandible sideways",
    "id": "s_1300"
  },
  {
    "descrip": "Inability to pass flatus",
    "id": "s_1551"
  },
  {
    "descrip": "Inability to remember important aspects of a traumatic experience",
    "id": "s_711"
  },
  {
    "descrip": "Inability to stop drinking alcohol",
    "id": "s_150"
  },
  {
    "descrip": "Inability to stop flow of urine",
    "id": "s_223"
  },
  {
    "descrip": "Increased abdominal girth",
    "id": "s_277"
  },
  {
    "descrip": "Increased appetite",
    "id": "s_311"
  },
  {
    "descrip": "Increased expiratory phase",
    "id": "s_1488"
  },
  {
    "descrip": "Increased libido",
    "id": "s_421"
  },
  {
    "descrip": "Increased masseter reflex",
    "id": "s_991"
  },
  {
    "descrip": "Increased need in sexual experiences or sensations to attain desired effect",
    "id": "s_361"
  },
  {
    "descrip": "Increased palatine reflex",
    "id": "s_1278"
  },
  {
    "descrip": "Increased pharyngeal reflex",
    "id": "s_1279"
  },
  {
    "descrip": "Increased thirst",
    "id": "s_310"
  },
  {
    "descrip": "Insect bite or sting",
    "id": "s_506"
  },
  {
    "descrip": "Insertion of foreign body in nose or ear",
    "id": "s_2355"
  },
  {
    "descrip": "Insertion of foreign body, dangerous object",
    "id": "s_2454"
  },
  {
    "descrip": "Insomnia",
    "id": "s_917"
  },
  {
    "descrip": "Intense, non-committal relationships",
    "id": "s_1383"
  },
  {
    "descrip": "Intermittent urine flow",
    "id": "s_358"
  },
  {
    "descrip": "Interosseous muscles atrophy, feet",
    "id": "s_1084"
  },
  {
    "descrip": "Interosseous muscles atrophy, hands",
    "id": "s_1083"
  },
  {
    "descrip": "Interpersonal relationship difficulties",
    "id": "s_1695"
  },
  {
    "descrip": "Intraretinal microvascular abnormalities",
    "id": "s_1416"
  },
  {
    "descrip": "Iris neovascularization",
    "id": "s_1411"
  },
  {
    "descrip": "Irregular menstruations",
    "id": "s_1440"
  },
  {
    "descrip": "Irritability",
    "id": "s_540"
  },
  {
    "descrip": "Irritability, when unable to engage in sexual activities",
    "id": "s_80"
  },
  {
    "descrip": "Itching after a hot shower or bath",
    "id": "s_614"
  },
  {
    "descrip": "Itching around anus",
    "id": "s_249"
  },
  {
    "descrip": "Itching eye",
    "id": "s_1563"
  },
  {
    "descrip": "Itching inside ear",
    "id": "s_255"
  },
  {
    "descrip": "Itching nose or throat",
    "id": "s_252"
  },
  {
    "descrip": "Jacobsohn sign",
    "id": "s_1271"
  },
  {
    "descrip": "Janeway lesion",
    "id": "s_1718"
  },
  {
    "descrip": "Jaundice",
    "id": "s_332"
  },
  {
    "descrip": "Jaundice, during infectious disease",
    "id": "s_336"
  },
  {
    "descrip": "Jaundice, following intense physical exertion",
    "id": "s_335"
  },
  {
    "descrip": "Jaundice, stress-related",
    "id": "s_334"
  },
  {
    "descrip": "Jaw pain",
    "id": "s_1961"
  },
  {
    "descrip": "Joint deformation, non-traumatic",
    "id": "s_359"
  },
  {
    "descrip": "Joint deformation, post-traumatic",
    "id": "s_2087"
  },
  {
    "descrip": "Joint pain",
    "id": "s_44"
  },
  {
    "descrip": "Joint pain, aggravated by cold or damp weather",
    "id": "s_576"
  },
  {
    "descrip": "Joint pain, ankle",
    "id": "s_1621"
  },
  {
    "descrip": "Joint pain, during ankle movement",
    "id": "s_1623"
  },
  {
    "descrip": "Joint pain, during elbow movement",
    "id": "s_1634"
  },
  {
    "descrip": "Joint pain, during hip movement",
    "id": "s_1823"
  },
  {
    "descrip": "Joint pain, during knee movement",
    "id": "s_1610"
  },
  {
    "descrip": "Joint pain, during shoulder movement",
    "id": "s_1805"
  },
  {
    "descrip": "Joint pain, during thumb movement",
    "id": "s_1641"
  },
  {
    "descrip": "Joint pain, during wrist movement",
    "id": "s_1636"
  },
  {
    "descrip": "Joint pain, elbow",
    "id": "s_1632"
  },
  {
    "descrip": "Joint pain, hallux",
    "id": "s_79"
  },
  {
    "descrip": "Joint pain, hip",
    "id": "s_11"
  },
  {
    "descrip": "Joint pain, inflammatory",
    "id": "s_2299"
  },
  {
    "descrip": "Joint pain, knee",
    "id": "s_581"
  },
  {
    "descrip": "Joint pain, mechanical",
    "id": "s_2298"
  },
  {
    "descrip": "Joint pain, severe, after trauma",
    "id": "s_41"
  },
  {
    "descrip": "Joint pain, shoulder",
    "id": "s_1654"
  },
  {
    "descrip": "Joint pain, sudden",
    "id": "s_1201"
  },
  {
    "descrip": "Joint pain, tenderness",
    "id": "s_1656"
  },
  {
    "descrip": "Joint pain, thumb",
    "id": "s_1639"
  },
  {
    "descrip": "Joint pain, wrist",
    "id": "s_1430"
  },
  {
    "descrip": "Joint stiffness",
    "id": "s_575"
  },
  {
    "descrip": "Joint stiffness, hand stiffness in the morning",
    "id": "s_258"
  },
  {
    "descrip": "Joint stiffness, subsides after exercising",
    "id": "s_259"
  },
  {
    "descrip": "Kayser–Fleischer ring",
    "id": "s_1472"
  },
  {
    "descrip": "Kernig's sign",
    "id": "s_1689"
  },
  {
    "descrip": "Knee instability",
    "id": "s_1745"
  },
  {
    "descrip": "Koplik's spots",
    "id": "s_664"
  },
  {
    "descrip": "Kussmaul breathing",
    "id": "s_1451"
  },
  {
    "descrip": "Lack of boundaries in interpersonal relations",
    "id": "s_778"
  },
  {
    "descrip": "Lack of eye contact",
    "id": "s_1698"
  },
  {
    "descrip": "Lack of initiative, motivation, or drive",
    "id": "s_1006"
  },
  {
    "descrip": "Lateropulsion",
    "id": "s_964"
  },
  {
    "descrip": "Lead-pipe rigidity",
    "id": "s_1282"
  },
  {
    "descrip": "Learning disability",
    "id": "s_2152"
  },
  {
    "descrip": "Lens clouding",
    "id": "s_550"
  },
  {
    "descrip": "Leopard-like spots on skin",
    "id": "s_666"
  },
  {
    "descrip": "Lesions located in posterior pharynx",
    "id": "s_2354"
  },
  {
    "descrip": "Levine's sign",
    "id": "s_1378"
  },
  {
    "descrip": "Lhermitte's sign",
    "id": "s_1054"
  },
  {
    "descrip": "Lice eggs or nits on hair shafts",
    "id": "s_1793"
  },
  {
    "descrip": "Lisch nodules",
    "id": "s_1324"
  },
  {
    "descrip": "Livedo reticularis",
    "id": "s_763"
  },
  {
    "descrip": "Local dark retinal blood vessels that lie in folds",
    "id": "s_1407"
  },
  {
    "descrip": "Local elevation of retina",
    "id": "s_1405"
  },
  {
    "descrip": "Local grey discolouration of retina",
    "id": "s_1406"
  },
  {
    "descrip": "Local retinal undulation",
    "id": "s_1408"
  },
  {
    "descrip": "Loose tooth unrelated to a tooth exchange",
    "id": "s_228"
  },
  {
    "descrip": "Loss of body hair",
    "id": "s_1115"
  },
  {
    "descrip": "Loss of consciousness",
    "id": "s_1543"
  },
  {
    "descrip": "Loss of consciousness, during exercise",
    "id": "s_2472"
  },
  {
    "descrip": "Loss of consciousness, during prolonged standing",
    "id": "s_2468"
  },
  {
    "descrip": "Loss of consciousness, in a sitting or lying position",
    "id": "s_2471"
  },
  {
    "descrip": "Loss of consciousness, in a warm place",
    "id": "s_2474"
  },
  {
    "descrip": "Loss of consciousness, more than 1 minute",
    "id": "s_2303"
  },
  {
    "descrip": "Loss of consciousness, transient",
    "id": "s_2302"
  },
  {
    "descrip": "Loss of consciousness, under stress",
    "id": "s_2475"
  },
  {
    "descrip": "Loss of consciousness, with urination or defecation",
    "id": "s_190"
  },
  {
    "descrip": "Loss of interest in activities previously enjoyed, lasting at least 2 weeks",
    "id": "s_287"
  },
  {
    "descrip": "Loss of muscle mass",
    "id": "s_622"
  },
  {
    "descrip": "Loss of muscle mass, hands",
    "id": "s_564"
  },
  {
    "descrip": "Loss of sensation in the face",
    "id": "s_959"
  },
  {
    "descrip": "Loss of sensation in the face, unilateral",
    "id": "s_1159"
  },
  {
    "descrip": "Loss of sense of vibration in distal parts of extremities",
    "id": "s_1070"
  },
  {
    "descrip": "Loss of the lingual papillae",
    "id": "s_1394"
  },
  {
    "descrip": "Loss of vision in the superior quadrant",
    "id": "s_1027"
  },
  {
    "descrip": "Loss or impairment of proprioception",
    "id": "s_746"
  },
  {
    "descrip": "Loss or impairment of temperature sensation",
    "id": "s_747"
  },
  {
    "descrip": "Lost will to live",
    "id": "s_507"
  },
  {
    "descrip": "Low intraocular pressure, 4 to 5mmHg difference in affected eye compared to the other eye",
    "id": "s_1404"
  },
  {
    "descrip": "Low sense of self-worth",
    "id": "s_155"
  },
  {
    "descrip": "Lower limb pallor",
    "id": "s_1725"
  },
  {
    "descrip": "Lower limb tenderness",
    "id": "s_1618"
  },
  {
    "descrip": "Lower limb tenderness, calf",
    "id": "s_1622"
  },
  {
    "descrip": "Lump in popliteal region",
    "id": "s_2309"
  },
  {
    "descrip": "Lump in scrotum",
    "id": "s_1173"
  },
  {
    "descrip": "Lying about eating or hiding food",
    "id": "s_420"
  },
  {
    "descrip": "Lymph node pain",
    "id": "s_1733"
  },
  {
    "descrip": "Major bleeding",
    "id": "s_2077"
  },
  {
    "descrip": "Male genital burn",
    "id": "s_2187"
  },
  {
    "descrip": "Male infertility",
    "id": "s_2052"
  },
  {
    "descrip": "Malocclusions",
    "id": "s_289"
  },
  {
    "descrip": "Mandibular deviation when opening mouth",
    "id": "s_2403"
  },
  {
    "descrip": "Marcus Gunn pupil",
    "id": "s_1403"
  },
  {
    "descrip": "Mathematics difficulties",
    "id": "s_2352"
  },
  {
    "descrip": "Measles rash",
    "id": "s_665"
  },
  {
    "descrip": "Mendel-Bekhterev sign",
    "id": "s_1261"
  },
  {
    "descrip": "Menstrual period more than 3 weeks late",
    "id": "s_415"
  },
  {
    "descrip": "Mental disturbances exacerbated by stress",
    "id": "s_1768"
  },
  {
    "descrip": "Microstomia",
    "id": "s_360"
  },
  {
    "descrip": "Minor uncontrollable bleeding",
    "id": "s_2078"
  },
  {
    "descrip": "Miosis",
    "id": "s_537"
  },
  {
    "descrip": "Miscarriage",
    "id": "s_212"
  },
  {
    "descrip": "Moniz sign",
    "id": "s_1274"
  },
  {
    "descrip": "Mood swings",
    "id": "s_646"
  },
  {
    "descrip": "Motor retardation",
    "id": "s_1297"
  },
  {
    "descrip": "Mouth breathing",
    "id": "s_1104"
  },
  {
    "descrip": "Mouth pain",
    "id": "s_2065"
  },
  {
    "descrip": "Mouth pain, after eating spicy or acidic food",
    "id": "s_2421"
  },
  {
    "descrip": "Mouth ulcer",
    "id": "s_1"
  },
  {
    "descrip": "Mucosal pallor",
    "id": "s_1210"
  },
  {
    "descrip": "Mucosal pallor, sudden",
    "id": "s_1213"
  },
  {
    "descrip": "Mucous secretion in stool",
    "id": "s_642"
  },
  {
    "descrip": "Multiple red areas, larger than 1 cm",
    "id": "s_2357"
  },
  {
    "descrip": "Multiple red changes, different sizes",
    "id": "s_2370"
  },
  {
    "descrip": "Multiple red spots, smaller than 1 cm",
    "id": "s_2359"
  },
  {
    "descrip": "Murphy's sign",
    "id": "s_567"
  },
  {
    "descrip": "Muscle cramps",
    "id": "s_503"
  },
  {
    "descrip": "Muscle cramps, calf",
    "id": "s_117"
  },
  {
    "descrip": "Muscle cramps, hypnagogic",
    "id": "s_2506"
  },
  {
    "descrip": "Muscle cramps, nocturnal",
    "id": "s_2494"
  },
  {
    "descrip": "Muscle weakness",
    "id": "s_650"
  },
  {
    "descrip": "Muscle weakness, general",
    "id": "s_2330"
  },
  {
    "descrip": "Myalgia",
    "id": "s_1142"
  },
  {
    "descrip": "Myalgia, exacerbated by stress",
    "id": "s_1766"
  },
  {
    "descrip": "Myalgia, following intense physical exertion",
    "id": "s_2455"
  },
  {
    "descrip": "Mydriasis",
    "id": "s_536"
  },
  {
    "descrip": "Myringitis",
    "id": "s_1476"
  },
  {
    "descrip": "Nail clubbing",
    "id": "s_603"
  },
  {
    "descrip": "Nail dystrophy",
    "id": "s_1167"
  },
  {
    "descrip": "Nail pain",
    "id": "s_2005"
  },
  {
    "descrip": "Nasal catarrh",
    "id": "s_107"
  },
  {
    "descrip": "Nasal catarrh, mucoid",
    "id": "s_2153"
  },
  {
    "descrip": "Nasal catarrh, purulent",
    "id": "s_2154"
  },
  {
    "descrip": "Nasal congestion",
    "id": "s_331"
  },
  {
    "descrip": "Nasal congestion, acute",
    "id": "s_2307"
  },
  {
    "descrip": "Nasal congestion, chronic",
    "id": "s_1812"
  },
  {
    "descrip": "Nasal congestion, subacute",
    "id": "s_2308"
  },
  {
    "descrip": "Nasal congestion, worsens after briefly improving",
    "id": "s_2226"
  },
  {
    "descrip": "Nasal polyps",
    "id": "s_524"
  },
  {
    "descrip": "Nasal speech",
    "id": "s_1303"
  },
  {
    "descrip": "Nausea",
    "id": "s_156"
  },
  {
    "descrip": "Neck asymmetry",
    "id": "s_1388"
  },
  {
    "descrip": "Neck pain",
    "id": "s_1483"
  },
  {
    "descrip": "Neck pain, during head movement",
    "id": "s_2173"
  },
  {
    "descrip": "Neck pain, unilateral",
    "id": "s_965"
  },
  {
    "descrip": "Neck vein distention",
    "id": "s_671"
  },
  {
    "descrip": "Neglecting duties and hobbies due to alcohol",
    "id": "s_820"
  },
  {
    "descrip": "Neglecting duties and hobbies due to sex",
    "id": "s_326"
  },
  {
    "descrip": "Nervousness or weepiness",
    "id": "s_143"
  },
  {
    "descrip": "Neurological deficit, since less than 24 hours",
    "id": "s_2080"
  },
  {
    "descrip": "Neurological deficit, since more than 24 hours",
    "id": "s_2083"
  },
  {
    "descrip": "Night sweats",
    "id": "s_217"
  },
  {
    "descrip": "Nihilistic delusions",
    "id": "s_678"
  },
  {
    "descrip": "Nipple discharge",
    "id": "s_1422"
  },
  {
    "descrip": "No contact with COVID-19 case",
    "id": "s_2258"
  },
  {
    "descrip": "No history of inflammatory bowel disease",
    "id": "s_2462"
  },
  {
    "descrip": "No signs of upper respiratory infection",
    "id": "s_2172"
  },
  {
    "descrip": "Nocturia",
    "id": "s_182"
  },
  {
    "descrip": "Nodule located in breast",
    "id": "s_300"
  },
  {
    "descrip": "Non-stop alcohol consumption for several days",
    "id": "s_822"
  },
  {
    "descrip": "Nonmenstrual vaginal bleeding or spotting",
    "id": "s_1217"
  },
  {
    "descrip": "Normal body temperature",
    "id": "s_2168"
  },
  {
    "descrip": "Normal heart rate",
    "id": "s_2169"
  },
  {
    "descrip": "Normal lung sounds on auscultation",
    "id": "s_2171"
  },
  {
    "descrip": "Normal vital signs",
    "id": "s_2174"
  },
  {
    "descrip": "Nose pain",
    "id": "s_1605"
  },
  {
    "descrip": "Nosebleed",
    "id": "s_1429"
  },
  {
    "descrip": "Nosebleed, recurrent",
    "id": "s_2017"
  },
  {
    "descrip": "Nosebleed, single episode",
    "id": "s_2016"
  },
  {
    "descrip": "Numbness of tongue",
    "id": "s_1148"
  },
  {
    "descrip": "Numerous nevi",
    "id": "s_377"
  },
  {
    "descrip": "Nystagmus",
    "id": "s_479"
  },
  {
    "descrip": "Nystagmus, horizontal",
    "id": "s_1721"
  },
  {
    "descrip": "Obsessions",
    "id": "s_127"
  },
  {
    "descrip": "Obsessions, compulsive thoughts",
    "id": "s_687"
  },
  {
    "descrip": "Obsessions, intrusive thoughts",
    "id": "s_688"
  },
  {
    "descrip": "Ocular bulb rotation laterally and downward",
    "id": "s_1237"
  },
  {
    "descrip": "Ocular motility disorder",
    "id": "s_750"
  },
  {
    "descrip": "Oculomotor nerve palsy",
    "id": "s_1147"
  },
  {
    "descrip": "Odynophagia",
    "id": "s_509"
  },
  {
    "descrip": "Oily skin",
    "id": "s_362"
  },
  {
    "descrip": "Oligomenorrhea",
    "id": "s_1877"
  },
  {
    "descrip": "Oliguria",
    "id": "s_185"
  },
  {
    "descrip": "Opacified tympanic membrane",
    "id": "s_1107"
  },
  {
    "descrip": "Open comedones",
    "id": "s_389"
  },
  {
    "descrip": "Oppenheim's sign",
    "id": "s_1256"
  },
  {
    "descrip": "Optic disc neovascularization",
    "id": "s_1410"
  },
  {
    "descrip": "Optic nerve disc pallor",
    "id": "s_1329"
  },
  {
    "descrip": "Oral lesions, changes in the location, size, or shape",
    "id": "s_2422"
  },
  {
    "descrip": "Oral lesions, multiple",
    "id": "s_2414"
  },
  {
    "descrip": "Oral lesions, recurrent",
    "id": "s_2424"
  },
  {
    "descrip": "Oral lesions, red",
    "id": "s_2416"
  },
  {
    "descrip": "Oral lesions, well-demarcated borders",
    "id": "s_2413"
  },
  {
    "descrip": "Oral lesions, white plaques",
    "id": "s_1673"
  },
  {
    "descrip": "Orbicularis oris muscle spasm",
    "id": "s_868"
  },
  {
    "descrip": "Organic cause",
    "id": "s_844"
  },
  {
    "descrip": "Orthostatic hypotension",
    "id": "s_541"
  },
  {
    "descrip": "Osler nodes",
    "id": "s_1719"
  },
  {
    "descrip": "Other type of contact with COVID-19 case",
    "id": "s_2257"
  },
  {
    "descrip": "Ovarian enlargement",
    "id": "s_1289"
  },
  {
    "descrip": "Overbite",
    "id": "s_1110"
  },
  {
    "descrip": "Overworked",
    "id": "s_371"
  },
  {
    "descrip": "Pain behind ear",
    "id": "s_1180"
  },
  {
    "descrip": "Pain caused by firm pressure on tibia",
    "id": "s_1382"
  },
  {
    "descrip": "Pain in both lower limbs",
    "id": "s_1453"
  },
  {
    "descrip": "Pain in both lower limbs, both feet",
    "id": "s_2092"
  },
  {
    "descrip": "Pain in both lower limbs, stocking distribution",
    "id": "s_1112"
  },
  {
    "descrip": "Pain in both upper limbs",
    "id": "s_1452"
  },
  {
    "descrip": "Pain in both upper limbs, both hands",
    "id": "s_2091"
  },
  {
    "descrip": "Pain in front of ear",
    "id": "s_2402"
  },
  {
    "descrip": "Pain in groin during coughing, sneezing, laughing, or physical exercises",
    "id": "s_1250"
  },
  {
    "descrip": "Pain in lower limb",
    "id": "s_579"
  },
  {
    "descrip": "Pain in lower limb, limping due to pain",
    "id": "s_1927"
  },
  {
    "descrip": "Pain in lower limb, severe",
    "id": "s_1930"
  },
  {
    "descrip": "Pain in lower limb, shin",
    "id": "s_2335"
  },
  {
    "descrip": "Pain in lower limb, thigh",
    "id": "s_1893"
  },
  {
    "descrip": "Pain in temporomandibular joint during movement",
    "id": "s_430"
  },
  {
    "descrip": "Pain in upper limb",
    "id": "s_580"
  },
  {
    "descrip": "Pain in upper limb, forearm",
    "id": "s_1799"
  },
  {
    "descrip": "Pain in upper limb, hand or fingers",
    "id": "s_554"
  },
  {
    "descrip": "Pain in upper limb, one finger",
    "id": "s_1313"
  },
  {
    "descrip": "Pain in upper limb, severe",
    "id": "s_1935"
  },
  {
    "descrip": "Pain near eye socket",
    "id": "s_54"
  },
  {
    "descrip": "Painful defecation",
    "id": "s_1393"
  },
  {
    "descrip": "Painful ejaculation",
    "id": "s_33"
  },
  {
    "descrip": "Painful intercourse",
    "id": "s_32"
  },
  {
    "descrip": "Painful urination",
    "id": "s_39"
  },
  {
    "descrip": "Palatine petechiae",
    "id": "s_1371"
  },
  {
    "descrip": "Pale and brittle nails",
    "id": "s_10"
  },
  {
    "descrip": "Pale or clay-coloured stool",
    "id": "s_569"
  },
  {
    "descrip": "Pale skin",
    "id": "s_9"
  },
  {
    "descrip": "Pale skin, fingers",
    "id": "s_2282"
  },
  {
    "descrip": "Palpitations",
    "id": "s_110"
  },
  {
    "descrip": "Palpitations, lasting more than 5 minutes",
    "id": "s_2002"
  },
  {
    "descrip": "Palpitations, recurrent",
    "id": "s_2004"
  },
  {
    "descrip": "Panic attacks in public or when talking to strangers",
    "id": "s_722"
  },
  {
    "descrip": "Papilledema",
    "id": "s_803"
  },
  {
    "descrip": "Paralogical thinking",
    "id": "s_838"
  },
  {
    "descrip": "Paranasal sinuses tenderness",
    "id": "s_1496"
  },
  {
    "descrip": "Paraphimosis",
    "id": "s_2206"
  },
  {
    "descrip": "Paraspinal muscle tenderness",
    "id": "s_1486"
  },
  {
    "descrip": "Paresis, ascending",
    "id": "s_744"
  },
  {
    "descrip": "Paresis, both lower limbs",
    "id": "s_2326"
  },
  {
    "descrip": "Paresis, both upper limbs",
    "id": "s_2343"
  },
  {
    "descrip": "Paresis, hemiparesis",
    "id": "s_1005"
  },
  {
    "descrip": "Paresis, limbs",
    "id": "s_148"
  },
  {
    "descrip": "Paresis, limbs, lasting between 24 hours and 4 weeks",
    "id": "s_2346"
  },
  {
    "descrip": "Paresis, limbs, lasting less than 24 hours",
    "id": "s_2345"
  },
  {
    "descrip": "Paresis, limbs, lasting more than 4 weeks",
    "id": "s_2347"
  },
  {
    "descrip": "Paresis, limbs, other",
    "id": "s_2340"
  },
  {
    "descrip": "Paresis, limbs, tetraparesis",
    "id": "s_2339"
  },
  {
    "descrip": "Paresis, localised",
    "id": "s_2331"
  },
  {
    "descrip": "Paresis, one lower limb",
    "id": "s_2318"
  },
  {
    "descrip": "Paresis, one upper limb",
    "id": "s_2342"
  },
  {
    "descrip": "Paresthesia",
    "id": "s_518"
  },
  {
    "descrip": "Paresthesia in both upper limbs, glove distribution",
    "id": "s_1066"
  },
  {
    "descrip": "Paresthesia, around the mouth",
    "id": "s_126"
  },
  {
    "descrip": "Paresthesia, ascending",
    "id": "s_1069"
  },
  {
    "descrip": "Paresthesia, both feet",
    "id": "s_125"
  },
  {
    "descrip": "Paresthesia, both lower limbs",
    "id": "s_1063"
  },
  {
    "descrip": "Paresthesia, both upper limbs",
    "id": "s_973"
  },
  {
    "descrip": "Paresthesia, face",
    "id": "s_971"
  },
  {
    "descrip": "Paresthesia, lower limbs",
    "id": "s_2306"
  },
  {
    "descrip": "Paresthesia, one foot",
    "id": "s_2315"
  },
  {
    "descrip": "Paresthesia, one lower limb",
    "id": "s_2001"
  },
  {
    "descrip": "Paresthesia, one upper limb",
    "id": "s_1449"
  },
  {
    "descrip": "Paresthesia, sudden onset",
    "id": "s_1932"
  },
  {
    "descrip": "Paresthesia, upper limbs",
    "id": "s_2304"
  },
  {
    "descrip": "Paresthesias, symmetrical",
    "id": "s_1068"
  },
  {
    "descrip": "Parotid swelling",
    "id": "s_529"
  },
  {
    "descrip": "Past appendectomy",
    "id": "s_1800"
  },
  {
    "descrip": "Past cholecystectomy",
    "id": "s_1801"
  },
  {
    "descrip": "Pathologic fractures",
    "id": "s_1715"
  },
  {
    "descrip": "Pencil-thin stools",
    "id": "s_795"
  },
  {
    "descrip": "Penile itching",
    "id": "s_2043"
  },
  {
    "descrip": "Pericardial friction rub",
    "id": "s_1380"
  },
  {
    "descrip": "Perionychial pain",
    "id": "s_1312"
  },
  {
    "descrip": "Periorbital ecchymosis",
    "id": "s_2084"
  },
  {
    "descrip": "Perseveration",
    "id": "s_1018"
  },
  {
    "descrip": "Personality changes",
    "id": "s_348"
  },
  {
    "descrip": "Petechiae",
    "id": "s_594"
  },
  {
    "descrip": "Pharyngeal erythema",
    "id": "s_1367"
  },
  {
    "descrip": "Pharyngeal pain",
    "id": "s_20"
  },
  {
    "descrip": "Pharyngeal pain, unilateral",
    "id": "s_1826"
  },
  {
    "descrip": "Pharyngeal swelling",
    "id": "s_2461"
  },
  {
    "descrip": "Phimosis",
    "id": "s_263"
  },
  {
    "descrip": "Phobia",
    "id": "s_915"
  },
  {
    "descrip": "Physical injury",
    "id": "s_2088"
  },
  {
    "descrip": "Physical injury, to self or others after drinking alcohol",
    "id": "s_281"
  },
  {
    "descrip": "Pleural effusion",
    "id": "s_1437"
  },
  {
    "descrip": "Pleural friction rub",
    "id": "s_1396"
  },
  {
    "descrip": "Pleuritic chest pain, after trauma",
    "id": "s_2112"
  },
  {
    "descrip": "Polyuria",
    "id": "s_75"
  },
  {
    "descrip": "Poor personal hygiene",
    "id": "s_770"
  },
  {
    "descrip": "Positive allergy challenge",
    "id": "s_1093"
  },
  {
    "descrip": "Positive prick or patch skin allergy test",
    "id": "s_1092"
  },
  {
    "descrip": "Possible rabies exposure",
    "id": "s_2175"
  },
  {
    "descrip": "Postnasal drip",
    "id": "s_1471"
  },
  {
    "descrip": "Premature greying",
    "id": "s_225"
  },
  {
    "descrip": "Preoccupation with food",
    "id": "s_69"
  },
  {
    "descrip": "Presence of neurofibromas",
    "id": "s_1323"
  },
  {
    "descrip": "Pretibial myxedema",
    "id": "s_1162"
  },
  {
    "descrip": "Priapism",
    "id": "s_1397"
  },
  {
    "descrip": "Problems with everyday tasks",
    "id": "s_123"
  },
  {
    "descrip": "Prolonged bleeding time",
    "id": "s_593"
  },
  {
    "descrip": "Prolonged nighttime sleep",
    "id": "s_777"
  },
  {
    "descrip": "Prostate enlargement",
    "id": "s_1089"
  },
  {
    "descrip": "Pruritus",
    "id": "s_254"
  },
  {
    "descrip": "Pruritus, aggravated by change in temperature, sweating, or wearing wool",
    "id": "s_251"
  },
  {
    "descrip": "Pruritus, foot",
    "id": "s_2033"
  },
  {
    "descrip": "Pruritus, most intense at night",
    "id": "s_250"
  },
  {
    "descrip": "Pruritus, scalp",
    "id": "s_1617"
  },
  {
    "descrip": "Pseudomembrane in nose or throat",
    "id": "s_1548"
  },
  {
    "descrip": "Psychomotor retardation",
    "id": "s_649"
  },
  {
    "descrip": "Pupil dilation variation",
    "id": "s_653"
  },
  {
    "descrip": "Pupil or pupils unreactive to accommodation",
    "id": "s_1238"
  },
  {
    "descrip": "Purpuric rash",
    "id": "s_762"
  },
  {
    "descrip": "Purpuric rash, palpable",
    "id": "s_1915"
  },
  {
    "descrip": "Purulent vaginal discharge",
    "id": "s_2212"
  },
  {
    "descrip": "Pus under the skin of the finger",
    "id": "s_1315"
  },
  {
    "descrip": "Pustule",
    "id": "s_388"
  },
  {
    "descrip": "Pyramidal signs",
    "id": "s_989"
  },
  {
    "descrip": "Quickening of thoughts and speech",
    "id": "s_637"
  },
  {
    "descrip": "Rash or impulsive decisions",
    "id": "s_779"
  },
  {
    "descrip": "Re-experiencing the psychological trauma in nightmares",
    "id": "s_706"
  },
  {
    "descrip": "Re-experiencing the psychological trauma in recurring flashbacks",
    "id": "s_705"
  },
  {
    "descrip": "Re-experiencing the psychological trauma through physiological reactivity",
    "id": "s_708"
  },
  {
    "descrip": "Re-experiencing traumatic event",
    "id": "s_707"
  },
  {
    "descrip": "Reading difficulties",
    "id": "s_2351"
  },
  {
    "descrip": "Rebound tenderness",
    "id": "s_1494"
  },
  {
    "descrip": "Recent alcohol consumption",
    "id": "s_528"
  },
  {
    "descrip": "Recent injury without bleeding",
    "id": "s_2079"
  },
  {
    "descrip": "Recent self-injurious behaviour, major",
    "id": "s_2230"
  },
  {
    "descrip": "Recent self-injurious behaviour, minor",
    "id": "s_2229"
  },
  {
    "descrip": "Recurrent gastric ulcers",
    "id": "s_142"
  },
  {
    "descrip": "Recurrent tonsils inflammation",
    "id": "s_139"
  },
  {
    "descrip": "Red and stinging conjunctivae",
    "id": "s_72"
  },
  {
    "descrip": "Red and swollen oral mucosa",
    "id": "s_692"
  },
  {
    "descrip": "Red coloured stool",
    "id": "s_112"
  },
  {
    "descrip": "Red coloured urine",
    "id": "s_113"
  },
  {
    "descrip": "Red eye",
    "id": "s_492"
  },
  {
    "descrip": "Red macules with silver-white, flaky scales",
    "id": "s_384"
  },
  {
    "descrip": "Red stretch marks on abdomen, hips, or thighs",
    "id": "s_73"
  },
  {
    "descrip": "Redness behind the ear",
    "id": "s_1181"
  },
  {
    "descrip": "Redness in temporal region",
    "id": "s_1145"
  },
  {
    "descrip": "Reduced body temperature",
    "id": "s_410"
  },
  {
    "descrip": "Reduced degree of facial expression",
    "id": "s_572"
  },
  {
    "descrip": "Reduced range of joint motion",
    "id": "s_1713"
  },
  {
    "descrip": "Reduced range of joint motion, passive",
    "id": "s_1903"
  },
  {
    "descrip": "Regular uterine contractions",
    "id": "s_2008"
  },
  {
    "descrip": "Regurgitation",
    "id": "s_330"
  },
  {
    "descrip": "Religious delusion",
    "id": "s_780"
  },
  {
    "descrip": "Respiratory distress, after trauma",
    "id": "s_2076"
  },
  {
    "descrip": "Restless legs, nocturnal",
    "id": "s_1463"
  },
  {
    "descrip": "Restricted interests",
    "id": "s_1697"
  },
  {
    "descrip": "Restricted mobility, difficulty bending over",
    "id": "s_186"
  },
  {
    "descrip": "Retinal artery occlusions",
    "id": "s_1418"
  },
  {
    "descrip": "Retinal hemorrhage",
    "id": "s_1344"
  },
  {
    "descrip": "Retinal microaneurysms",
    "id": "s_1412"
  },
  {
    "descrip": "Retinal neovascularization elsewhere",
    "id": "s_1415"
  },
  {
    "descrip": "Retinal swelling",
    "id": "s_1414"
  },
  {
    "descrip": "Retraction or indentation of nipple",
    "id": "s_343"
  },
  {
    "descrip": "Retrobulbar neuritis",
    "id": "s_1055"
  },
  {
    "descrip": "Rhinitis triggered by environment",
    "id": "s_1533"
  },
  {
    "descrip": "Rhinophyma",
    "id": "s_1682"
  },
  {
    "descrip": "Risky alcohol consumption",
    "id": "s_816"
  },
  {
    "descrip": "Romberg's sign",
    "id": "s_1738"
  },
  {
    "descrip": "Rose spots on lower chest and abdomen",
    "id": "s_1377"
  },
  {
    "descrip": "Rossolimo's sign",
    "id": "s_1255"
  },
  {
    "descrip": "Rovsing's sign",
    "id": "s_1732"
  },
  {
    "descrip": "Russell's sign",
    "id": "s_1141"
  },
  {
    "descrip": "Sagging of the palate ipsilateral to suspected nerve damage",
    "id": "s_1285"
  },
  {
    "descrip": "Scarlet fever rash",
    "id": "s_1544"
  },
  {
    "descrip": "Schaeffer's sign",
    "id": "s_1259"
  },
  {
    "descrip": "Schizophasia",
    "id": "s_836"
  },
  {
    "descrip": "Scleral icterus",
    "id": "s_1492"
  },
  {
    "descrip": "Scotoma",
    "id": "s_124"
  },
  {
    "descrip": "Scrotal transillumination",
    "id": "s_1342"
  },
  {
    "descrip": "Seasonal pattern of depressive symptoms",
    "id": "s_835"
  },
  {
    "descrip": "Secret alcohol consumption",
    "id": "s_829"
  },
  {
    "descrip": "Seizures",
    "id": "s_2045"
  },
  {
    "descrip": "Seizures, recurrent",
    "id": "s_2209"
  },
  {
    "descrip": "Seizures, reflex",
    "id": "s_2259"
  },
  {
    "descrip": "Seizures, with loss of consciousness",
    "id": "s_189"
  },
  {
    "descrip": "Seizures, without loss of consciousness",
    "id": "s_539"
  },
  {
    "descrip": "Self-injurious behaviour, recent",
    "id": "s_2228"
  },
  {
    "descrip": "Self-injurious thoughts or behaviours",
    "id": "s_2213"
  },
  {
    "descrip": "Sense of self-worth dependent on weight",
    "id": "s_423"
  },
  {
    "descrip": "Sensory loss in both arms",
    "id": "s_972"
  },
  {
    "descrip": "Sensory loss in one limb",
    "id": "s_313"
  },
  {
    "descrip": "Serious injury, respiratory difficulty, severe bleeding, new neurological problem",
    "id": "s_2089"
  },
  {
    "descrip": "Severe pain, after trauma",
    "id": "s_2081"
  },
  {
    "descrip": "Sexual activity more often or with more partners than intended",
    "id": "s_74"
  },
  {
    "descrip": "Sexual intercourse in recent months",
    "id": "s_2"
  },
  {
    "descrip": "Shafer's sign",
    "id": "s_1399"
  },
  {
    "descrip": "Shallow breathing",
    "id": "s_1462"
  },
  {
    "descrip": "Short stature",
    "id": "s_2274"
  },
  {
    "descrip": "Simple auditory paradelusions",
    "id": "s_648"
  },
  {
    "descrip": "Simple visual paradelusions",
    "id": "s_647"
  },
  {
    "descrip": "Single red area, larger than 1 cm",
    "id": "s_2356"
  },
  {
    "descrip": "Single red spot, smaller than 1 cm",
    "id": "s_2358"
  },
  {
    "descrip": "Skin desquamation",
    "id": "s_1470"
  },
  {
    "descrip": "Skin mass",
    "id": "s_1831"
  },
  {
    "descrip": "Skin mass, bleeding",
    "id": "s_1931"
  },
  {
    "descrip": "Skin mass, larger than 1 cm",
    "id": "s_1830"
  },
  {
    "descrip": "Skin mass, natal cleft",
    "id": "s_2285"
  },
  {
    "descrip": "Skin mass, smaller than 1 cm",
    "id": "s_101"
  },
  {
    "descrip": "Skin pain",
    "id": "s_1674"
  },
  {
    "descrip": "Skin pain, severe",
    "id": "s_43"
  },
  {
    "descrip": "Skin pallor, sudden",
    "id": "s_1209"
  },
  {
    "descrip": "Skin phototype I or II",
    "id": "s_376"
  },
  {
    "descrip": "Skin thickening",
    "id": "s_1650"
  },
  {
    "descrip": "Skin wound",
    "id": "s_2377"
  },
  {
    "descrip": "Skin wound, after surgery",
    "id": "s_2398"
  },
  {
    "descrip": "Skin wound, non-traumatic ulcer",
    "id": "s_2379"
  },
  {
    "descrip": "Skin wound, self-inflicted",
    "id": "s_2399"
  },
  {
    "descrip": "Skin wound, trauma-related",
    "id": "s_2378"
  },
  {
    "descrip": "Skull lesions",
    "id": "s_1474"
  },
  {
    "descrip": "Sleep disorder",
    "id": "s_319"
  },
  {
    "descrip": "Slower gait",
    "id": "s_238"
  },
  {
    "descrip": "Smoking, during illness",
    "id": "s_196"
  },
  {
    "descrip": "Smoking, in non-smoking areas",
    "id": "s_265"
  },
  {
    "descrip": "Smoking, large quantities",
    "id": "s_93"
  },
  {
    "descrip": "Smoking, mostly in the morning",
    "id": "s_308"
  },
  {
    "descrip": "Smoking, need first cigarette of the day",
    "id": "s_134"
  },
  {
    "descrip": "Smoking, need when waking up",
    "id": "s_327"
  },
  {
    "descrip": "Smooth face without wrinkles",
    "id": "s_271"
  },
  {
    "descrip": "Sneezing",
    "id": "s_715"
  },
  {
    "descrip": "Sneezing attacks",
    "id": "s_136"
  },
  {
    "descrip": "Snoring",
    "id": "s_67"
  },
  {
    "descrip": "Social isolation",
    "id": "s_659"
  },
  {
    "descrip": "Social maladjustment",
    "id": "s_773"
  },
  {
    "descrip": "Soft lump in inguinal region",
    "id": "s_1242"
  },
  {
    "descrip": "Soft lump in inguinal region, decreasing when supine",
    "id": "s_1244"
  },
  {
    "descrip": "Soft lump in inguinal region, increasing with increased abdominal pressure",
    "id": "s_1243"
  },
  {
    "descrip": "Soft lump in inguinal region, reducible",
    "id": "s_1245"
  },
  {
    "descrip": "Soft retinal exudates",
    "id": "s_1347"
  },
  {
    "descrip": "Spasms in upper extremities",
    "id": "s_1426"
  },
  {
    "descrip": "Spasticity",
    "id": "s_571"
  },
  {
    "descrip": "Speech and language impairment, rapid onset",
    "id": "s_2290"
  },
  {
    "descrip": "Spending a lot of time on sex-related activity",
    "id": "s_213"
  },
  {
    "descrip": "Spine asymmetry",
    "id": "s_1536"
  },
  {
    "descrip": "Spine stiffness in the morning",
    "id": "s_257"
  },
  {
    "descrip": "Splenomegaly",
    "id": "s_1045"
  },
  {
    "descrip": "Steatorrhea",
    "id": "s_1434"
  },
  {
    "descrip": "Sterling's sign",
    "id": "s_1270"
  },
  {
    "descrip": "Sternal rub",
    "id": "s_1381"
  },
  {
    "descrip": "Stiff neck",
    "id": "s_418"
  },
  {
    "descrip": "Stransky's sign",
    "id": "s_1260"
  },
  {
    "descrip": "Strawberry tongue",
    "id": "s_1467"
  },
  {
    "descrip": "Strumpell's sign",
    "id": "s_1275"
  },
  {
    "descrip": "Subungual splinter hemorrhages",
    "id": "s_2291"
  },
  {
    "descrip": "Sudden face flushing",
    "id": "s_1067"
  },
  {
    "descrip": "Sudden increase in blood pressure",
    "id": "s_530"
  },
  {
    "descrip": "Suicidal thoughts",
    "id": "s_1139"
  },
  {
    "descrip": "Suicidal thoughts with plan and steps taken",
    "id": "s_1140"
  },
  {
    "descrip": "Sunburn",
    "id": "s_1943"
  },
  {
    "descrip": "Suspicion of intoxication or poisoning",
    "id": "s_2407"
  },
  {
    "descrip": "Suspicious mole or birthmark",
    "id": "s_383"
  },
  {
    "descrip": "Suspicious mole or birthmark, asymmetrical",
    "id": "s_380"
  },
  {
    "descrip": "Suspicious mole or birthmark, change in colour",
    "id": "s_585"
  },
  {
    "descrip": "Suspicious mole or birthmark, change in shape",
    "id": "s_584"
  },
  {
    "descrip": "Suspicious mole or birthmark, irregular border",
    "id": "s_381"
  },
  {
    "descrip": "Suspicious mole or birthmark, larger than 6 mm",
    "id": "s_382"
  },
  {
    "descrip": "Swallowed foreign body",
    "id": "s_2300"
  },
  {
    "descrip": "Sweating on painful side of forehead",
    "id": "s_214"
  },
  {
    "descrip": "Swelling in the mastoid region",
    "id": "s_1182"
  },
  {
    "descrip": "Swelling of nasal concha",
    "id": "s_1099"
  },
  {
    "descrip": "Swelling of nasal mucosa",
    "id": "s_1097"
  },
  {
    "descrip": "Swelling of temporal artery",
    "id": "s_1144"
  },
  {
    "descrip": "Swollen blue or bluish-gray nasal mucosa",
    "id": "s_1098"
  },
  {
    "descrip": "Swollen cheek",
    "id": "s_177"
  },
  {
    "descrip": "Swollen gums",
    "id": "s_172"
  },
  {
    "descrip": "Symptoms appearing after taking painkillers or a change in diet",
    "id": "s_162"
  },
  {
    "descrip": "Symptoms exacerbated by low temperature",
    "id": "s_558"
  },
  {
    "descrip": "Symptoms regularly appearing a few days before menstrual period",
    "id": "s_161"
  },
  {
    "descrip": "Tachycardia",
    "id": "s_261"
  },
  {
    "descrip": "Tachypnea",
    "id": "s_227"
  },
  {
    "descrip": "Taste disorder, anterior two-thirds of tongue",
    "id": "s_1153"
  },
  {
    "descrip": "Taste disorders",
    "id": "s_1096"
  },
  {
    "descrip": "Telangiectasias",
    "id": "s_545"
  },
  {
    "descrip": "Telangiectasias, face",
    "id": "s_1685"
  },
  {
    "descrip": "Temporary blindness",
    "id": "s_1465"
  },
  {
    "descrip": "Tenderness in the scrotum",
    "id": "s_2410"
  },
  {
    "descrip": "Tenesmus",
    "id": "s_640"
  },
  {
    "descrip": "Terry's nails",
    "id": "s_1114"
  },
  {
    "descrip": "Testicular atrophy",
    "id": "s_1117"
  },
  {
    "descrip": "Thickened nails",
    "id": "s_1790"
  },
  {
    "descrip": "Thickened nails, with pits or grooves",
    "id": "s_386"
  },
  {
    "descrip": "Third-degree burn",
    "id": "s_2039"
  },
  {
    "descrip": "Thoughts of harming one's child",
    "id": "s_728"
  },
  {
    "descrip": "Thoughts of killing one's child",
    "id": "s_729"
  },
  {
    "descrip": "Tingling fingers",
    "id": "s_555"
  },
  {
    "descrip": "Tingling fingers, first three digits",
    "id": "s_1899"
  },
  {
    "descrip": "Tingling fingers, fourth and fifth digits",
    "id": "s_1900"
  },
  {
    "descrip": "Tinnitus",
    "id": "s_407"
  },
  {
    "descrip": "Tinnitus, pulsatile",
    "id": "s_1466"
  },
  {
    "descrip": "Toe pain",
    "id": "s_1833"
  },
  {
    "descrip": "Tongue enlargement",
    "id": "s_673"
  },
  {
    "descrip": "Tongue erythema",
    "id": "s_607"
  },
  {
    "descrip": "Tongue muscle atrophy",
    "id": "s_995"
  },
  {
    "descrip": "Tonsil stones",
    "id": "s_1534"
  },
  {
    "descrip": "Tooth loss",
    "id": "s_1050"
  },
  {
    "descrip": "Toothache",
    "id": "s_551"
  },
  {
    "descrip": "Toothache, associated with chewing",
    "id": "s_56"
  },
  {
    "descrip": "Toothache, associated with cold",
    "id": "s_2432"
  },
  {
    "descrip": "Toothache, associated with heat",
    "id": "s_231"
  },
  {
    "descrip": "Toothache, associated with lying down",
    "id": "s_2451"
  },
  {
    "descrip": "Toothache, associated with sweet or acidic foods or drinks",
    "id": "s_2452"
  },
  {
    "descrip": "Toothache, associated with touch",
    "id": "s_2485"
  },
  {
    "descrip": "Toothache, difficulty determining how many teeth hurt",
    "id": "s_2491"
  },
  {
    "descrip": "Toothache, difficulty determining which tooth hurts",
    "id": "s_267"
  },
  {
    "descrip": "Toothache, dull",
    "id": "s_2438"
  },
  {
    "descrip": "Toothache, lasting 48 hours or more",
    "id": "s_2450"
  },
  {
    "descrip": "Toothache, lasting less than 48 hours",
    "id": "s_2456"
  },
  {
    "descrip": "Toothache, mild",
    "id": "s_2429"
  },
  {
    "descrip": "Toothache, moderate",
    "id": "s_2428"
  },
  {
    "descrip": "Toothache, multiple teeth",
    "id": "s_2441"
  },
  {
    "descrip": "Toothache, one tooth",
    "id": "s_2442"
  },
  {
    "descrip": "Toothache, persistent",
    "id": "s_2449"
  },
  {
    "descrip": "Toothache, provoked",
    "id": "s_2430"
  },
  {
    "descrip": "Toothache, pulsating",
    "id": "s_2443"
  },
  {
    "descrip": "Toothache, radiating",
    "id": "s_2446"
  },
  {
    "descrip": "Toothache, severe",
    "id": "s_233"
  },
  {
    "descrip": "Toothache, sharp",
    "id": "s_2440"
  },
  {
    "descrip": "Toothache, spontaneous",
    "id": "s_2431"
  },
  {
    "descrip": "Toothache, transient",
    "id": "s_2433"
  },
  {
    "descrip": "Transverse furrow on the nose",
    "id": "s_1100"
  },
  {
    "descrip": "Tremors",
    "id": "s_538"
  },
  {
    "descrip": "Tremors, both hands",
    "id": "s_87"
  },
  {
    "descrip": "Tremors, flapping",
    "id": "s_1421"
  },
  {
    "descrip": "Tremors, intention",
    "id": "s_1264"
  },
  {
    "descrip": "Tremors, kinetic",
    "id": "s_1454"
  },
  {
    "descrip": "Tremors, one hand",
    "id": "s_86"
  },
  {
    "descrip": "Tremors, pill-rolling",
    "id": "s_1379"
  },
  {
    "descrip": "Tremors, resting",
    "id": "s_1455"
  },
  {
    "descrip": "Tremors, stress-related",
    "id": "s_1765"
  },
  {
    "descrip": "Tremors, subsides after drinking alcohol",
    "id": "s_84"
  },
  {
    "descrip": "Tremors, tongue",
    "id": "s_590"
  },
  {
    "descrip": "Tremors, unspecified location",
    "id": "s_2305"
  },
  {
    "descrip": "Trigeminal neuralgia",
    "id": "s_1056"
  },
  {
    "descrip": "Trismus",
    "id": "s_256"
  },
  {
    "descrip": "Tromner's sign",
    "id": "s_1262"
  },
  {
    "descrip": "Trophic changes",
    "id": "s_1074"
  },
  {
    "descrip": "Trophic ulcer",
    "id": "s_1076"
  },
  {
    "descrip": "Trophic ulcer, plantar side of the foot",
    "id": "s_1078"
  },
  {
    "descrip": "Trouble beginning urination",
    "id": "s_691"
  },
  {
    "descrip": "Trousseau sign of latent tetany",
    "id": "s_866"
  },
  {
    "descrip": "Twisted neck",
    "id": "s_2163"
  },
  {
    "descrip": "Ulcer, completely painless",
    "id": "s_2119"
  },
  {
    "descrip": "Ulcer, nipple",
    "id": "s_194"
  },
  {
    "descrip": "Ulcer, not healing within 6 weeks",
    "id": "s_2208"
  },
  {
    "descrip": "Ulcer, sore, or abscess near the anus",
    "id": "s_351"
  },
  {
    "descrip": "Umbilical discharge",
    "id": "s_2241"
  },
  {
    "descrip": "Uncertainty about physical abuse",
    "id": "s_2478"
  },
  {
    "descrip": "Unhealthy weight loss practices",
    "id": "s_243"
  },
  {
    "descrip": "Unilateral enophthalmos",
    "id": "s_668"
  },
  {
    "descrip": "Unilateral vulval swelling",
    "id": "s_1586"
  },
  {
    "descrip": "Unknown heart rate",
    "id": "s_2251"
  },
  {
    "descrip": "Upper limb pallor",
    "id": "s_2068"
  },
  {
    "descrip": "Urethral discharge when pressing the penis",
    "id": "s_510"
  },
  {
    "descrip": "Urinary incontinence",
    "id": "s_153"
  },
  {
    "descrip": "Urinary retention",
    "id": "s_696"
  },
  {
    "descrip": "Urinary urgency",
    "id": "s_690"
  },
  {
    "descrip": "Urination in small amounts",
    "id": "s_689"
  },
  {
    "descrip": "Urination while coughing, laughing, or during physical exertion",
    "id": "s_183"
  },
  {
    "descrip": "Urticaria",
    "id": "s_393"
  },
  {
    "descrip": "Urticaria, lasting more than 6 weeks",
    "id": "s_2211"
  },
  {
    "descrip": "Urticaria, triggered by cold",
    "id": "s_791"
  },
  {
    "descrip": "Urticaria, triggered by heat",
    "id": "s_793"
  },
  {
    "descrip": "Urticaria, triggered by prolonged pressure on the skin",
    "id": "s_790"
  },
  {
    "descrip": "Urticaria, triggered by scratching",
    "id": "s_789"
  },
  {
    "descrip": "Uvula deviation towards unaffected side",
    "id": "s_1287"
  },
  {
    "descrip": "Vaginal discharge, grey",
    "id": "s_2338"
  },
  {
    "descrip": "Vaginal discharge, unpleasant odour",
    "id": "s_64"
  },
  {
    "descrip": "Vaginal discharge, white and clumpy",
    "id": "s_1569"
  },
  {
    "descrip": "Vaginal dryness",
    "id": "s_1811"
  },
  {
    "descrip": "Vascular compromise",
    "id": "s_2082"
  },
  {
    "descrip": "Vesicular exanthema of mouth or ear",
    "id": "s_1318"
  },
  {
    "descrip": "Violating social norms after drinking alcohol",
    "id": "s_824"
  },
  {
    "descrip": "Visible head lice on scalp or brush",
    "id": "s_1792"
  },
  {
    "descrip": "Visual agnosia",
    "id": "s_1034"
  },
  {
    "descrip": "Visual field narrowing",
    "id": "s_494"
  },
  {
    "descrip": "Vitreous hemorrhage",
    "id": "s_1398"
  },
  {
    "descrip": "Vomiting",
    "id": "s_305"
  },
  {
    "descrip": "Vomiting, 7 days or more",
    "id": "s_2057"
  },
  {
    "descrip": "Vomiting, bilious",
    "id": "s_2055"
  },
  {
    "descrip": "Vomiting, every time after meal",
    "id": "s_1949"
  },
  {
    "descrip": "Vomiting, less than 7 days",
    "id": "s_2056"
  },
  {
    "descrip": "Vomiting, more often in the morning",
    "id": "s_1365"
  },
  {
    "descrip": "Vomiting, projectile",
    "id": "s_801"
  },
  {
    "descrip": "Vulvovaginal burning",
    "id": "s_1875"
  },
  {
    "descrip": "Vulvovaginal itching",
    "id": "s_630"
  },
  {
    "descrip": "Waking up early",
    "id": "s_776"
  },
  {
    "descrip": "Weak or absent pharyngeal reflex",
    "id": "s_1280"
  },
  {
    "descrip": "Weak peripheral pulses",
    "id": "s_1348"
  },
  {
    "descrip": "Weak pulse in legs",
    "id": "s_735"
  },
  {
    "descrip": "Weight faltering",
    "id": "s_2142"
  },
  {
    "descrip": "Weight gain",
    "id": "s_226"
  },
  {
    "descrip": "Weight loss",
    "id": "s_285"
  },
  {
    "descrip": "Weight loss, without loss of appetite",
    "id": "s_237"
  },
  {
    "descrip": "Weiss ring",
    "id": "s_1402"
  },
  {
    "descrip": "Westphal's sign",
    "id": "s_1340"
  },
  {
    "descrip": "Wheezing, acute",
    "id": "s_2166"
  },
  {
    "descrip": "Wheezing, stridor",
    "id": "s_1562"
  },
  {
    "descrip": "White nail discolouration",
    "id": "s_1788"
  },
  {
    "descrip": "White patch on cornea",
    "id": "s_1796"
  },
  {
    "descrip": "Winterbottom's sign",
    "id": "s_1183"
  },
  {
    "descrip": "Worms in stool",
    "id": "s_1937"
  },
  {
    "descrip": "Wound drainage",
    "id": "s_2369"
  },
  {
    "descrip": "Wound infection",
    "id": "s_1981"
  },
  {
    "descrip": "Wound, active bleeding",
    "id": "s_1973"
  },
  {
    "descrip": "Wound, lip",
    "id": "s_2222"
  },
  {
    "descrip": "Wrinkling or dimpling of skin on breast",
    "id": "s_342"
  },
  {
    "descrip": "Wrist drop",
    "id": "s_1910"
  },
  {
    "descrip": "Writing difficulties",
    "id": "s_2344"
  },
  {
    "descrip": "Xanthelasma",
    "id": "s_613"
  },
  {
    "descrip": "Xanthoma",
    "id": "s_1561"
  },
  {
    "descrip": "Yellow nail discolouration",
    "id": "s_1789"
  },
  {
    "descrip": "Yellow or green coloured stool",
    "id": "s_2519"
  }
]


// copyright year

var date = new Date();
var year = date.getFullYear()
document.querySelector(".year").innerHTML = year;

// populate dropdowns

function populateSelect() {


  var ageSelect = [...Array(121).keys()];
  var Age = document.getElementById('Age');


  for (var i = 1; i < ageSelect.length; i++) {
    Age.innerHTML = Age.innerHTML +
      '<option value="' + (i) + '">' + ageSelect[i] + '</option>';
  }


  var datalistOptions = document.getElementById('datalistOptions');

  for (var i = 0; i < symptoms.length; i++) {
    if (symptoms[i]['descrip'].split(" ").length <= 3) {

      datalistOptions.innerHTML = datalistOptions.innerHTML +
        '<option value="' + symptoms[i]['descrip'] + '">' + '</option>';



  // var Symptom1 = document.getElementById('Symptom1');
  // var Symptom2 = document.getElementById('Symptom2');
  // var Symptom3 = document.getElementById('Symptom3');
  //
  // for (var i = 0; i < symptoms.length; i++) {
  //   if (symptoms[i]['descrip'].split(" ").length <= 3) {
  //
  //     Symptom1.innerHTML = Symptom1.innerHTML +
  //       '<option value="' + (i + 1) + '">' + symptoms[i]['descrip'] + '</option>';
  //
  //     Symptom2.innerHTML = Symptom2.innerHTML +
  //         '<option value="' + (i + 1) + '">' + symptoms[i]['descrip'] + '</option>';
  //
  //     Symptom3.innerHTML = Symptom3.innerHTML +
  //             '<option value="' + (i + 1) + '">' + symptoms[i]['descrip'] + '</option>';

    // }


    }
  }

}
