const FACTS = {
  "2026-06-29": {
    fact: 'The oldest written song known, a 3,400-year-old Hurrian hymn, already implies the use of harmony.',
    detail: 'Clay tablets from Ugarit in modern Syria, dating to about 1400 BCE, carry the "Hurrian Hymns" with musical notation that specifies pairs of lyre strings and intervals rather than single notes, hinting at harmony and tuned diatonic scales. That places a sophisticated theoretical system, with named intervals and tuning instructions, at the very start of the written musical record, over a millennium before ancient Greece formalised music theory.',
    source: 'ai'
  },
  "2026-06-28": {
    fact: 'Medieval Damascus sword blades secretly contained carbon nanotubes.',
    detail: 'In 2006 electron microscopy of a 17th-century Damascus blade revealed carbon nanotubes and nanowires woven through the steel, likely formed from trace impurities in the wootz ore during repeated forging and cooling. This nanostructure helped give the blades their legendary sharpness and strength, centuries before nanotechnology was understood.',
    source: 'ai'
  },
  "2026-06-27": {
    fact: 'One deep-sea snail builds armour plating out of iron, the only animal known to do so.',
    detail: 'The scaly-foot gastropod, found only at a few Indian Ocean hydrothermal vents, coats its shell and hundreds of foot scales in iron sulfide minerals like greigite and pyrite, all forged with help from symbiotic bacteria. Its uniquely tough, three-layered armour has been studied by researchers designing better protective materials.',
    source: 'ai'
  },
  "2026-06-25": {
    fact: 'Earth ran natural nuclear reactors by itself about 1.7 billion years ago.',
    detail: 'In the Oklo deposit in Gabon, uranium concentrations sustained self-regulating fission for hundreds of thousands of years, with groundwater acting as a neutron moderator. It was only possible because U-235 was far more abundant then (about 3% versus 0.7% today), and the site is now studied for how nuclear waste migrates through rock.',
    source: 'ai'
  },
  "2026-06-24": {
    fact: 'Prince Rupert\'s Drops can survive a hammer blow to the head but explode into powder when their tail is scratched.',
    detail: 'Dripping molten glass into cold water locks the surface into intense compressive stress while the core stays in tension, making the bulb nearly indestructible. Nick the thin tail and that stored tension releases a crack racing through the glass at about 1,500 metres per second, shattering it instantly.',
    source: 'ai'
  },
  "2026-06-23": {
    fact: 'A single diamond proved Earth hides oceans\' worth of water hundreds of kilometres underground.',
    detail: 'In 2014 a diamond from Brazil was found to contain ringwoodite, a mineral stable only deep in the mantle, holding about 1.5% water by weight. It confirmed the transition zone 410-660 km down could store as much water as all the surface oceans combined, locked inside crystal structures rather than as liquid.',
    source: 'ai'
  },
  "2026-06-22": {
    fact: 'A whole language on a Canary Island is spoken entirely in whistles.',
    detail: 'Silbo Gomero, used on La Gomera, encodes Spanish into whistled tones that carry up to about 5 km across the island\'s deep ravines, far farther than the voice. Nearly lost by the 20th century, it was made mandatory in local schools and recognised by UNESCO in 2009.',
    source: 'ai'
  },
  "2026-06-21": {
    fact: 'Metal can catch a "disease" called tin pest that turns it to powder.',
    detail: 'Below about 13.2°C, metallic white tin slowly converts to a brittle grey powder with a different crystal structure, and the change is autocatalytic, so contact with already-converted tin "infects" healthy metal. It has been blamed for crumbling organ pipes in cold churches and is a renewed concern for modern lead-free electronics solder.',
    source: 'ai'
  },
  "2026-06-20": {
    fact: 'The Mediterranean Sea once almost completely dried up.',
    detail: 'During the Messinian Salinity Crisis about 5-6 million years ago, the Strait of Gibraltar closed and the Mediterranean nearly evaporated, leaving salt deposits up to two kilometres thick.',
    source: 'ai'
  },
  "2026-05-31": {
    fact: 'The shortest war in history was 38 minutes.',
    detail: 'Set in 1896, the Anglo-Zanzibar war was ended quickly as the Zanzibar surrendered to the British.',
    source: 'stumpted'
  },
  "2026-05-30": {
    fact: 'Ketchup was originally medicine.',
    detail: 'Tomtato ketchup was originally used as a pill for indigestion in the 1830s. It only became a condiment in the 1900s.',
    source: 'stumpted'
  },
  "2026-05-29": {
    fact: 'Pyrite can naturally form as a cube.',
    detail: 'Known as "fool\'s gold", the special chemical bonds in its structure connect at a perfect 90 degrees.',
    source: 'stumpted'
  },
  "2026-05-28": {
    fact: 'Chainsaws were originally invented for childbirth.',
    detail: 'Invented in the 1780\'s, they were made to assist in difficult childbirths as hand-cranked saws to cut through pelvic bone.',
    source: 'stumpted'
  },
  "2026-05-27": {
    fact: 'Cockroaches are some of the world\'s oldest animals.',
    detail: 'The earliest cockroach fossils date back to roughly 125 to 150 million years ago. Cockroaches outlived the dinosaurs and have survived multiple mass extinctions.',
    source: 'stumpted'
  },
  "2026-05-26": {
    fact: 'Dreams only last about 5-20 minutes in real time.',
    detail: 'Your brain\'s perception of time changes while you sleep, making each dream feel much longer than they actually are. One dream occurs every REM cycle (about 90 minutes), meaning a normal day of sleep makes you dream 5-6 times.',
    source: 'stumpted'
  },
  "2026-05-25": {
    fact: 'Elephants are the only mammals that cannot jump.',
    detail: 'Defined as "lifting all 4 limbs off the ground at once", the elephants\' downwards pointing leg bones lack the spring-like flexibility seen in other animals, rendering them unable to jump.',
    source: 'stumpted'
  },
  "2026-05-24": {
    fact: 'The Pistol Shrimp is louder than a jet engine.',
    detail: 'A Pistol Shrimp can create shockwaves by exploding bubbles created by shutting its claw, reaching volumes of over 200dB loud. This makes it the loudest animal alive (though some say it\'s the blue/sperm whale).',
    source: 'stumpted'
  },
  "2026-05-23": {
    fact: 'Hippos can easily outpace a human.',
    detail: 'Hippos can reach land speeds of up to 30mph or 48km/h, while Usain Bolt\'s top speed was around 27.78mph or 44.72km/h.',
    source: 'stumpted'
  },
  "2026-05-22": {
    fact: 'Over 99% of species that have ever existed on Earth have gone extinct.',
    detail: 'The average lifespan of a species is between 1 and 10 million years.',
    source: 'stumpted'
  },
  "2026-05-21": {
    fact: 'The word "Dord" was an accidental fake word printed in the 1934 Webster\'s New International Dictionary, Second Edition.',
    detail: 'In 1931, a chemistry editor wanted to add "density" as a word that the letter d can abbreviate to, writing it as "D or d", however this was misinterpreted and "Dord" was incorrectly added to the dictionary.',
    source: 'stumpted'
  },
  "2026-05-20": {
    fact: "The elevator shaft was invented before the elevator.",
    detail: 'In 1853, Fred A. Petersen ordered a vertical shaft to be made throughout the height of a building, preceding the invention of elevators in 1857, though it was made circular compared to the standard rectangular shape.',
    source: 'stumpted'
  },
  "2026-05-19": {
    fact: "Wombat poop is square.",
    detail: 'Caused from a unique digestive system, the cubic shape is used to allow the excrement to stay in place, visible to other wombats in order to mark territory.',
    source: 'stumpted'
  },
  "2026-05-18": {
    fact: "The genus for pig is sus.",
    detail: 'The genus name originates from the latin word for "pig", "boar" or "swine".',
    source: 'stumpted'
  },

};

const FACTS_START_DATE = "2026-05-18";
