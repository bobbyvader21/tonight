'use strict';

// Observe or photograph only; leave objects and wildlife undisturbed.
const builtInHuntItems = [
  {
    "id": "bh-indoor-001",
    "setting": "indoor",
    "text": "Something that tells time"
  },
  {
    "id": "bh-indoor-002",
    "setting": "indoor",
    "text": "An object with three colors"
  },
  {
    "id": "bh-indoor-003",
    "setting": "indoor",
    "text": "Something made of wood"
  },
  {
    "id": "bh-indoor-004",
    "setting": "indoor",
    "text": "A book with a person's name on its cover"
  },
  {
    "id": "bh-indoor-005",
    "setting": "indoor",
    "text": "Something that makes a sound"
  },
  {
    "id": "bh-indoor-006",
    "setting": "indoor",
    "text": "An object smaller than your thumb"
  },
  {
    "id": "bh-indoor-007",
    "setting": "indoor",
    "text": "Something with a repeating pattern"
  },
  {
    "id": "bh-indoor-008",
    "setting": "indoor",
    "text": "An item that can be recycled locally"
  },
  {
    "id": "bh-indoor-009",
    "setting": "indoor",
    "text": "Something soft"
  },
  {
    "id": "bh-indoor-010",
    "setting": "indoor",
    "text": "A useful object that needs no batteries"
  },
  {
    "id": "bh-indoor-011",
    "setting": "indoor",
    "text": "Something that reminds you of a friend"
  },
  {
    "id": "bh-indoor-012",
    "setting": "indoor",
    "text": "An object shaped like a circle"
  },
  {
    "id": "bh-indoor-013",
    "setting": "indoor",
    "text": "A square object"
  },
  {
    "id": "bh-indoor-014",
    "setting": "indoor",
    "text": "A rectangular container"
  },
  {
    "id": "bh-indoor-015",
    "setting": "indoor",
    "text": "Something triangular"
  },
  {
    "id": "bh-indoor-016",
    "setting": "indoor",
    "text": "An object with a spiral"
  },
  {
    "id": "bh-indoor-017",
    "setting": "indoor",
    "text": "Something transparent"
  },
  {
    "id": "bh-indoor-018",
    "setting": "indoor",
    "text": "Something translucent"
  },
  {
    "id": "bh-indoor-019",
    "setting": "indoor",
    "text": "Something reflective"
  },
  {
    "id": "bh-indoor-020",
    "setting": "indoor",
    "text": "Something with a matte finish"
  },
  {
    "id": "bh-indoor-021",
    "setting": "indoor",
    "text": "An object with a rough surface"
  },
  {
    "id": "bh-indoor-022",
    "setting": "indoor",
    "text": "An object with a smooth surface"
  },
  {
    "id": "bh-indoor-023",
    "setting": "indoor",
    "text": "Something flexible"
  },
  {
    "id": "bh-indoor-024",
    "setting": "indoor",
    "text": "Something rigid"
  },
  {
    "id": "bh-indoor-025",
    "setting": "indoor",
    "text": "Something made of metal"
  },
  {
    "id": "bh-indoor-026",
    "setting": "indoor",
    "text": "Something made of glass"
  },
  {
    "id": "bh-indoor-027",
    "setting": "indoor",
    "text": "Something made of fabric"
  },
  {
    "id": "bh-indoor-028",
    "setting": "indoor",
    "text": "Something made of paper"
  },
  {
    "id": "bh-indoor-029",
    "setting": "indoor",
    "text": "Something made of cardboard"
  },
  {
    "id": "bh-indoor-030",
    "setting": "indoor",
    "text": "Something made of ceramic"
  },
  {
    "id": "bh-indoor-031",
    "setting": "indoor",
    "text": "Something with a zipper"
  },
  {
    "id": "bh-indoor-032",
    "setting": "indoor",
    "text": "Something with a button"
  },
  {
    "id": "bh-indoor-033",
    "setting": "indoor",
    "text": "Something with a hinge"
  },
  {
    "id": "bh-indoor-034",
    "setting": "indoor",
    "text": "Something with a handle"
  },
  {
    "id": "bh-indoor-035",
    "setting": "indoor",
    "text": "Something with wheels"
  },
  {
    "id": "bh-indoor-036",
    "setting": "indoor",
    "text": "Something with a lid"
  },
  {
    "id": "bh-indoor-037",
    "setting": "indoor",
    "text": "Something with a pocket"
  },
  {
    "id": "bh-indoor-038",
    "setting": "indoor",
    "text": "Something with a hook"
  },
  {
    "id": "bh-indoor-039",
    "setting": "indoor",
    "text": "Something with a knot"
  },
  {
    "id": "bh-indoor-040",
    "setting": "indoor",
    "text": "Something with a woven texture"
  },
  {
    "id": "bh-indoor-041",
    "setting": "indoor",
    "text": "A handwritten note you have permission to view"
  },
  {
    "id": "bh-indoor-042",
    "setting": "indoor",
    "text": "A printed date"
  },
  {
    "id": "bh-indoor-043",
    "setting": "indoor",
    "text": "An item showing a number greater than 100"
  },
  {
    "id": "bh-indoor-044",
    "setting": "indoor",
    "text": "A word containing the letter Z"
  },
  {
    "id": "bh-indoor-045",
    "setting": "indoor",
    "text": "A word containing two of the same letter in a row"
  },
  {
    "id": "bh-indoor-046",
    "setting": "indoor",
    "text": "An item with a measurement printed on it"
  },
  {
    "id": "bh-indoor-047",
    "setting": "indoor",
    "text": "A label with a country name"
  },
  {
    "id": "bh-indoor-048",
    "setting": "indoor",
    "text": "A label with care instructions"
  },
  {
    "id": "bh-indoor-049",
    "setting": "indoor",
    "text": "A symbol that is not a letter or number"
  },
  {
    "id": "bh-indoor-050",
    "setting": "indoor",
    "text": "An object with an arrow on it"
  },
  {
    "id": "bh-indoor-051",
    "setting": "indoor",
    "text": "Something that folds"
  },
  {
    "id": "bh-indoor-052",
    "setting": "indoor",
    "text": "Something that stacks"
  },
  {
    "id": "bh-indoor-053",
    "setting": "indoor",
    "text": "Something that rolls when placed on its side"
  },
  {
    "id": "bh-indoor-054",
    "setting": "indoor",
    "text": "Something that clips shut"
  },
  {
    "id": "bh-indoor-055",
    "setting": "indoor",
    "text": "Something that can be tied"
  },
  {
    "id": "bh-indoor-056",
    "setting": "indoor",
    "text": "Something that can hold water without leaking"
  },
  {
    "id": "bh-indoor-057",
    "setting": "indoor",
    "text": "Something used to measure length"
  },
  {
    "id": "bh-indoor-058",
    "setting": "indoor",
    "text": "Something used to measure time"
  },
  {
    "id": "bh-indoor-059",
    "setting": "indoor",
    "text": "Something used to measure temperature"
  },
  {
    "id": "bh-indoor-060",
    "setting": "indoor",
    "text": "Something used to fasten two things together"
  },
  {
    "id": "bh-indoor-061",
    "setting": "indoor",
    "text": "An object used for drawing"
  },
  {
    "id": "bh-indoor-062",
    "setting": "indoor",
    "text": "An object used for writing"
  },
  {
    "id": "bh-indoor-063",
    "setting": "indoor",
    "text": "Something used to erase a mark"
  },
  {
    "id": "bh-indoor-064",
    "setting": "indoor",
    "text": "Something used to organize papers"
  },
  {
    "id": "bh-indoor-065",
    "setting": "indoor",
    "text": "Something used for carrying items"
  },
  {
    "id": "bh-indoor-066",
    "setting": "indoor",
    "text": "Something used for cleaning"
  },
  {
    "id": "bh-indoor-067",
    "setting": "indoor",
    "text": "Something used when cooking"
  },
  {
    "id": "bh-indoor-068",
    "setting": "indoor",
    "text": "Something used for serving food"
  },
  {
    "id": "bh-indoor-069",
    "setting": "indoor",
    "text": "Something used for storing food"
  },
  {
    "id": "bh-indoor-070",
    "setting": "indoor",
    "text": "Something used for drinking"
  },
  {
    "id": "bh-indoor-071",
    "setting": "indoor",
    "text": "Something yellow"
  },
  {
    "id": "bh-indoor-072",
    "setting": "indoor",
    "text": "Something purple"
  },
  {
    "id": "bh-indoor-073",
    "setting": "indoor",
    "text": "Something orange"
  },
  {
    "id": "bh-indoor-074",
    "setting": "indoor",
    "text": "Something green"
  },
  {
    "id": "bh-indoor-075",
    "setting": "indoor",
    "text": "Something blue"
  },
  {
    "id": "bh-indoor-076",
    "setting": "indoor",
    "text": "Something black and white"
  },
  {
    "id": "bh-indoor-077",
    "setting": "indoor",
    "text": "Something with polka dots"
  },
  {
    "id": "bh-indoor-078",
    "setting": "indoor",
    "text": "Something with stripes"
  },
  {
    "id": "bh-indoor-079",
    "setting": "indoor",
    "text": "Something with a floral design"
  },
  {
    "id": "bh-indoor-080",
    "setting": "indoor",
    "text": "Something with a geometric design"
  },
  {
    "id": "bh-indoor-081",
    "setting": "indoor",
    "text": "Two objects of the same shape but different sizes"
  },
  {
    "id": "bh-indoor-082",
    "setting": "indoor",
    "text": "Two objects of the same color but different materials"
  },
  {
    "id": "bh-indoor-083",
    "setting": "indoor",
    "text": "Two items that fit neatly inside one another"
  },
  {
    "id": "bh-indoor-084",
    "setting": "indoor",
    "text": "A matching pair of objects"
  },
  {
    "id": "bh-indoor-085",
    "setting": "indoor",
    "text": "An object with an uneven edge"
  },
  {
    "id": "bh-indoor-086",
    "setting": "indoor",
    "text": "An object with a rounded corner"
  },
  {
    "id": "bh-indoor-087",
    "setting": "indoor",
    "text": "An object with a hole through it"
  },
  {
    "id": "bh-indoor-088",
    "setting": "indoor",
    "text": "Something with a removable part"
  },
  {
    "id": "bh-indoor-089",
    "setting": "indoor",
    "text": "Something with more than one purpose"
  },
  {
    "id": "bh-indoor-090",
    "setting": "indoor",
    "text": "Something you have repaired"
  },
  {
    "id": "bh-indoor-091",
    "setting": "indoor",
    "text": "Something you made yourself"
  },
  {
    "id": "bh-indoor-092",
    "setting": "indoor",
    "text": "Something given to you as a gift"
  },
  {
    "id": "bh-indoor-093",
    "setting": "indoor",
    "text": "Something you borrowed with permission"
  },
  {
    "id": "bh-indoor-094",
    "setting": "indoor",
    "text": "Something you use every day"
  },
  {
    "id": "bh-indoor-095",
    "setting": "indoor",
    "text": "Something you rarely use"
  },
  {
    "id": "bh-indoor-096",
    "setting": "indoor",
    "text": "Something designed to keep another thing safe"
  },
  {
    "id": "bh-indoor-097",
    "setting": "indoor",
    "text": "Something that casts an interesting shadow"
  },
  {
    "id": "bh-indoor-098",
    "setting": "indoor",
    "text": "Something associated with a hobby"
  },
  {
    "id": "bh-indoor-099",
    "setting": "indoor",
    "text": "Something you can identify by touch without looking"
  },
  {
    "id": "bh-indoor-100",
    "setting": "indoor",
    "text": "Something you can identify by its sound"
  },
  {
    "id": "bh-outdoor-001",
    "setting": "outdoor",
    "text": "A leaf with an interesting edge"
  },
  {
    "id": "bh-outdoor-002",
    "setting": "outdoor",
    "text": "A bird seen from a distance"
  },
  {
    "id": "bh-outdoor-003",
    "setting": "outdoor",
    "text": "A public sign with an arrow"
  },
  {
    "id": "bh-outdoor-004",
    "setting": "outdoor",
    "text": "A shadow longer than its object"
  },
  {
    "id": "bh-outdoor-005",
    "setting": "outdoor",
    "text": "A repeating pattern"
  },
  {
    "id": "bh-outdoor-006",
    "setting": "outdoor",
    "text": "A plant growing through a gap"
  },
  {
    "id": "bh-outdoor-007",
    "setting": "outdoor",
    "text": "Three different textures"
  },
  {
    "id": "bh-outdoor-008",
    "setting": "outdoor",
    "text": "Something naturally red"
  },
  {
    "id": "bh-outdoor-009",
    "setting": "outdoor",
    "text": "A reflection"
  },
  {
    "id": "bh-outdoor-010",
    "setting": "outdoor",
    "text": "A public bench"
  },
  {
    "id": "bh-outdoor-011",
    "setting": "outdoor",
    "text": "Something moved by the wind"
  },
  {
    "id": "bh-outdoor-012",
    "setting": "outdoor",
    "text": "A sound you can identify without seeing its source"
  },
  {
    "id": "bh-outdoor-013",
    "setting": "outdoor",
    "text": "A tree with rough bark"
  },
  {
    "id": "bh-outdoor-014",
    "setting": "outdoor",
    "text": "A tree with relatively smooth bark"
  },
  {
    "id": "bh-outdoor-015",
    "setting": "outdoor",
    "text": "A branch that forks into a Y shape"
  },
  {
    "id": "bh-outdoor-016",
    "setting": "outdoor",
    "text": "A fallen leaf with visible veins"
  },
  {
    "id": "bh-outdoor-017",
    "setting": "outdoor",
    "text": "A leaf that has been nibbled by an insect"
  },
  {
    "id": "bh-outdoor-018",
    "setting": "outdoor",
    "text": "Two leaves of different shapes"
  },
  {
    "id": "bh-outdoor-019",
    "setting": "outdoor",
    "text": "A plant with a woody stem"
  },
  {
    "id": "bh-outdoor-020",
    "setting": "outdoor",
    "text": "A patch of grass"
  },
  {
    "id": "bh-outdoor-021",
    "setting": "outdoor",
    "text": "A flower bud"
  },
  {
    "id": "bh-outdoor-022",
    "setting": "outdoor",
    "text": "An open flower"
  },
  {
    "id": "bh-outdoor-023",
    "setting": "outdoor",
    "text": "A seed or seed pod observed without picking it"
  },
  {
    "id": "bh-outdoor-024",
    "setting": "outdoor",
    "text": "A vine growing along a support"
  },
  {
    "id": "bh-outdoor-025",
    "setting": "outdoor",
    "text": "Moss growing on a surface"
  },
  {
    "id": "bh-outdoor-026",
    "setting": "outdoor",
    "text": "Lichen growing on a surface"
  },
  {
    "id": "bh-outdoor-027",
    "setting": "outdoor",
    "text": "A fungus observed without touching it"
  },
  {
    "id": "bh-outdoor-028",
    "setting": "outdoor",
    "text": "A tree stump"
  },
  {
    "id": "bh-outdoor-029",
    "setting": "outdoor",
    "text": "A fallen twig on the ground"
  },
  {
    "id": "bh-outdoor-030",
    "setting": "outdoor",
    "text": "A patch of exposed soil"
  },
  {
    "id": "bh-outdoor-031",
    "setting": "outdoor",
    "text": "A pebble with more than one color"
  },
  {
    "id": "bh-outdoor-032",
    "setting": "outdoor",
    "text": "A rock with visible layers"
  },
  {
    "id": "bh-outdoor-033",
    "setting": "outdoor",
    "text": "A rock with an unusual shape"
  },
  {
    "id": "bh-outdoor-034",
    "setting": "outdoor",
    "text": "A patch of sand or fine gravel"
  },
  {
    "id": "bh-outdoor-035",
    "setting": "outdoor",
    "text": "A puddle viewed from the path"
  },
  {
    "id": "bh-outdoor-036",
    "setting": "outdoor",
    "text": "Water moving in a permitted viewing area"
  },
  {
    "id": "bh-outdoor-037",
    "setting": "outdoor",
    "text": "Ripples on a water surface"
  },
  {
    "id": "bh-outdoor-038",
    "setting": "outdoor",
    "text": "A cloud with a recognizable shape"
  },
  {
    "id": "bh-outdoor-039",
    "setting": "outdoor",
    "text": "Two clouds of different shapes"
  },
  {
    "id": "bh-outdoor-040",
    "setting": "outdoor",
    "text": "A patch of blue sky"
  },
  {
    "id": "bh-outdoor-041",
    "setting": "outdoor",
    "text": "A visible change in light between sun and shade"
  },
  {
    "id": "bh-outdoor-042",
    "setting": "outdoor",
    "text": "A shadow crossing a different texture"
  },
  {
    "id": "bh-outdoor-043",
    "setting": "outdoor",
    "text": "A moving shadow"
  },
  {
    "id": "bh-outdoor-044",
    "setting": "outdoor",
    "text": "A reflection of a plant"
  },
  {
    "id": "bh-outdoor-045",
    "setting": "outdoor",
    "text": "A reflection of a building"
  },
  {
    "id": "bh-outdoor-046",
    "setting": "outdoor",
    "text": "A small insect observed without disturbing it"
  },
  {
    "id": "bh-outdoor-047",
    "setting": "outdoor",
    "text": "A spider web observed from a distance"
  },
  {
    "id": "bh-outdoor-048",
    "setting": "outdoor",
    "text": "A butterfly or moth"
  },
  {
    "id": "bh-outdoor-049",
    "setting": "outdoor",
    "text": "A bee visiting a flower"
  },
  {
    "id": "bh-outdoor-050",
    "setting": "outdoor",
    "text": "A line of ants"
  },
  {
    "id": "bh-outdoor-051",
    "setting": "outdoor",
    "text": "A feather left where you found it"
  },
  {
    "id": "bh-outdoor-052",
    "setting": "outdoor",
    "text": "A bird perched on a structure"
  },
  {
    "id": "bh-outdoor-053",
    "setting": "outdoor",
    "text": "A bird in flight"
  },
  {
    "id": "bh-outdoor-054",
    "setting": "outdoor",
    "text": "A bird call you can hear"
  },
  {
    "id": "bh-outdoor-055",
    "setting": "outdoor",
    "text": "Animal tracks or footprints in soft ground"
  },
  {
    "id": "bh-outdoor-056",
    "setting": "outdoor",
    "text": "A squirrel or other small wild mammal seen from a distance"
  },
  {
    "id": "bh-outdoor-057",
    "setting": "outdoor",
    "text": "A pet being walked without approaching it"
  },
  {
    "id": "bh-outdoor-058",
    "setting": "outdoor",
    "text": "A sign reminding people about wildlife"
  },
  {
    "id": "bh-outdoor-059",
    "setting": "outdoor",
    "text": "A nest viewed from a safe distance without approaching"
  },
  {
    "id": "bh-outdoor-060",
    "setting": "outdoor",
    "text": "Evidence that an animal has eaten a plant"
  },
  {
    "id": "bh-outdoor-061",
    "setting": "outdoor",
    "text": "A street name sign"
  },
  {
    "id": "bh-outdoor-062",
    "setting": "outdoor",
    "text": "A building number visible from a public path"
  },
  {
    "id": "bh-outdoor-063",
    "setting": "outdoor",
    "text": "A sign with more than one language"
  },
  {
    "id": "bh-outdoor-064",
    "setting": "outdoor",
    "text": "A sign with a pictogram"
  },
  {
    "id": "bh-outdoor-065",
    "setting": "outdoor",
    "text": "A sign giving a distance"
  },
  {
    "id": "bh-outdoor-066",
    "setting": "outdoor",
    "text": "A sign giving a rule"
  },
  {
    "id": "bh-outdoor-067",
    "setting": "outdoor",
    "text": "A map displayed for visitors"
  },
  {
    "id": "bh-outdoor-068",
    "setting": "outdoor",
    "text": "A public notice board"
  },
  {
    "id": "bh-outdoor-069",
    "setting": "outdoor",
    "text": "A marked pedestrian crossing"
  },
  {
    "id": "bh-outdoor-070",
    "setting": "outdoor",
    "text": "A bicycle rack"
  },
  {
    "id": "bh-outdoor-071",
    "setting": "outdoor",
    "text": "A designated bike lane or path"
  },
  {
    "id": "bh-outdoor-072",
    "setting": "outdoor",
    "text": "A public rubbish bin"
  },
  {
    "id": "bh-outdoor-073",
    "setting": "outdoor",
    "text": "A public recycling bin"
  },
  {
    "id": "bh-outdoor-074",
    "setting": "outdoor",
    "text": "A storm drain viewed without opening it"
  },
  {
    "id": "bh-outdoor-075",
    "setting": "outdoor",
    "text": "A public drinking fountain"
  },
  {
    "id": "bh-outdoor-076",
    "setting": "outdoor",
    "text": "A handrail"
  },
  {
    "id": "bh-outdoor-077",
    "setting": "outdoor",
    "text": "A ramp on a public route"
  },
  {
    "id": "bh-outdoor-078",
    "setting": "outdoor",
    "text": "A staircase visible from a public route"
  },
  {
    "id": "bh-outdoor-079",
    "setting": "outdoor",
    "text": "A bridge viewed from a permitted path"
  },
  {
    "id": "bh-outdoor-080",
    "setting": "outdoor",
    "text": "A gate viewed without entering private property"
  },
  {
    "id": "bh-outdoor-081",
    "setting": "outdoor",
    "text": "A fence with a repeating design"
  },
  {
    "id": "bh-outdoor-082",
    "setting": "outdoor",
    "text": "A wall made from more than one material"
  },
  {
    "id": "bh-outdoor-083",
    "setting": "outdoor",
    "text": "A window reflecting the sky"
  },
  {
    "id": "bh-outdoor-084",
    "setting": "outdoor",
    "text": "A doorway with an unusual shape"
  },
  {
    "id": "bh-outdoor-085",
    "setting": "outdoor",
    "text": "A roofline with an interesting silhouette"
  },
  {
    "id": "bh-outdoor-086",
    "setting": "outdoor",
    "text": "A chimney visible from a public area"
  },
  {
    "id": "bh-outdoor-087",
    "setting": "outdoor",
    "text": "A solar panel visible from a public path"
  },
  {
    "id": "bh-outdoor-088",
    "setting": "outdoor",
    "text": "A streetlight"
  },
  {
    "id": "bh-outdoor-089",
    "setting": "outdoor",
    "text": "A flag or banner"
  },
  {
    "id": "bh-outdoor-090",
    "setting": "outdoor",
    "text": "A wind chime heard from a public path"
  },
  {
    "id": "bh-outdoor-091",
    "setting": "outdoor",
    "text": "A public mural"
  },
  {
    "id": "bh-outdoor-092",
    "setting": "outdoor",
    "text": "A public sculpture"
  },
  {
    "id": "bh-outdoor-093",
    "setting": "outdoor",
    "text": "An artist's credit on public artwork"
  },
  {
    "id": "bh-outdoor-094",
    "setting": "outdoor",
    "text": "A historic marker"
  },
  {
    "id": "bh-outdoor-095",
    "setting": "outdoor",
    "text": "A tree-identification label"
  },
  {
    "id": "bh-outdoor-096",
    "setting": "outdoor",
    "text": "A community-garden sign"
  },
  {
    "id": "bh-outdoor-097",
    "setting": "outdoor",
    "text": "A structure providing shade"
  },
  {
    "id": "bh-outdoor-098",
    "setting": "outdoor",
    "text": "A seating area arranged for conversation"
  },
  {
    "id": "bh-outdoor-099",
    "setting": "outdoor",
    "text": "A place where two paths meet"
  },
  {
    "id": "bh-outdoor-100",
    "setting": "outdoor",
    "text": "Something in the landscape you had never noticed before"
  }
];
