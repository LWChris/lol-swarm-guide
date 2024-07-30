const weapons = [
    {
        id: "meow-meow",
        baseName: "Meow Meow",
        evolveName: "Battle Cat Barrage",
        signature: "jinx",
        evolve: "ability-haste",
        scale: [
            "damage",
            "ability-haste",
            "crit-chance",
            "projectile-count",
        ]
    },
    {
        id: "sound-wave",
        baseName: "Sound Wave",
        evolveName: "Anima Echo",
        signature: "seraphine",
        evolve: "projectile-count",
        scale: [
            "damage",
            "ability-haste",
            "crit-chance",
            "projectile-count",
            "duration",
        ]
    },
    {
        id: "shield-slam",
        baseName: "Shield Slam",
        evolveName: "Light of the Lion",
        signature: "leona",
        evolve: "armor",
        scale: [
            "damage",
            "ability-haste",
            "area-size",
            "crit-chance",
            "armor",
        ]
    },
    {
        id: "tentacle-slam",
        baseName: "Tentacle Slam",
        evolveName: "Grizzly Smash",
        signature: "illaoi",
        evolve: "duration",
        scale: [
            "damage",
            "ability-haste",
            "area-size",
            "duration",
        ]
    },
    {
        id: "pillory-swipe",
        baseName: "Pillory Swipe",
        evolveName: "Savage Slice",
        signature: "briar",
        evolve: "max-health",
        scale: [
            "damage",
            "ability-haste",
            "area-size",
            "crit-chance",
            "max-health",
        ]
    },
    {
        id: "steel-tempest",
        baseName: "Steel Tempest",
        evolveName: "Wandering Storms",
        signature: "yasuo",
        evolve: "crit-chance",
        scale: [
            "damage",
            "ability-haste",
            "crit-chance",
            "projectile-count",
        ]
    },
    {
        id: "bunny-hop",
        baseName: "Bunny Hop",
        evolveName: "Carrot Crash",
        signature: "riven",
        evolve: "movement-speed",
        scale: [
            "damage",
            "area-size",
            "crit-chance",
            "duration",
            "movement-speed",
        ]
    },
    {
        id: "guiding-hex",
        baseName: "Guiding Hex",
        evolveName: "Hopped-Up Hex",
        signature: "aurora",
        evolve: "exp",
        scale: [
            "damage",
            "ability-haste",
            "crit-chance",
            "projectile-count",
            "exp",
        ]
    },
    {
        id: "winged-dagger",
        baseName: "Winged Dagger",
        evolveName: "Lover's Ricochet",
        signature: "xayah",
        evolve: "pickup-radius",
        scale: [
            "damage",
            "ability-haste",
            "crit-chance",
            "projectile-count",
            "duration",
            "pickup-radius",
        ]
    },
    {
        id: "uwu-blaster",
        baseName: "UwU Blaster",
        evolveName: "OwO Blaster",
        signature: false,
        evolve: "ability-haste",
        scale: [
            "damage",
            "ability-haste",
            "crit-chance",
            "projectile-count",
        ]
    },
    {
        id: "lioness-lament",
        baseName: "Lioness's Lament",
        evolveName: "Enveloping Light",
        signature: false,
        evolve: "ability-haste",
        scale: [
            "damage",
            "ability-haste",
            "crit-chance",
            "projectile-count",
        ]
    },
    {
        id: "echoing-batblades",
        baseName: "Echoing Batblades",
        evolveName: "Vayne's Chromablades",
        signature: false,
        evolve: "projectile-count",
        scale: [
            "damage",
            "ability-haste",
            "crit-chance",
            "projectile-count",
        ]
    },
    {
        id: "iceblast-armor",
        baseName: "Iceblast Armor",
        evolveName: "Deep Freeze",
        signature: false,
        evolve: "armor",
        scale: [
            "damage",
            "ability-haste",
            "area-size",
            "duration",
            "armor",
        ]
    },
    {
        id: "gatling-bunny-guns",
        baseName: "Gatling Bunny-Guns",
        evolveName: "Double Bun-Bun Barrage",
        signature: false,
        evolve: "duration",
        scale: [
            "damage",
            "ability-haste",
            "duration",
        ]
    },
    {
        id: "tibbers",
        baseName: "T.I.B.B.E.R.S",
        evolveName: "T.I.B.B.E.R.S (B.E.E.G Edition)",
        signature: false,
        evolve: "duration",
        scale: [
            "damage",
            "ability-haste",
            "area-size",
            "duration",
            "movement-speed",
        ]
    },
    {
        id: "statikk-sword",
        baseName: "Statikk Sword",
        evolveName: "Prumbis's Electrocarver",
        signature: false,
        evolve: "max-health",
        scale: [
            "damage",
            "ability-haste",
            "area-size",
            "crit-chance",
            "duration",
        ]
    },
    {
        id: "radiant-field",
        baseName: "Radiant Field",
        evolveName: "Explosive Embrace",
        signature: false,
        evolve: "max-health",
        scale: [
            "damage",
            "area-size",
            "max-health",
        ]
    },
    {
        id: "battle-bunny-crossbow",
        baseName: "Battle Bunny Crossbow",
        evolveName: "Bunny Prime Ballista",
        signature: false,
        evolve: "crit-chance",
        scale: [
            "damage",
            "ability-haste",
            "crit-chance",
            "projectile-count",
        ]
    },
    {
        id: "bunny-mega-blast",
        baseName: "Bunny Mega-Blast",
        evolveName: "Rapid Rabbit Raindown",
        signature: false,
        evolve: "crit-chance",
        scale: [
            "damage",
            "ability-haste",
            "area-size",
            "crit-chance",
        ]
    },
    {
        id: "blade-o-rang",
        baseName: "Blade-o-rang",
        evolveName: "Quad-o-rang",
        signature: false,
        evolve: "movement-speed",
        scale: [
            "damage",
            "ability-haste",
            "crit-chance",
            "projectile-count",
        ]
    },
    {
        id: "paw-print-poisoner",
        baseName: "Paw Print Poisoner",
        evolveName: "Bearfoot Chem-Dispenser",
        signature: false,
        evolve: "movement-speed",
        scale: [
            "damage",
            "area-size",
            "duration",
            "movement-speed",
        ]
    },
    {
        id: "the-annihilator",
        baseName: "The Annihilator",
        evolveName: "Animapocalypse",
        signature: false,
        evolve: "exp",
        scale: [
            "damage",
            "ability-haste",
            "area-size",
        ]
    },
    {
        id: "yuumibot",
        baseName: "YuumiBot",
        evolveName: "YuumiBot_Final_FINAL",
        signature: false,
        evolve: "pickup-radius",
        scale: [
            "damage",
            "ability-haste",
            "area-size",
            "duration",
            "pickup-radius",
        ]
    },
    {
        id: "final-city-transit",
        baseName: "Final City Transit",
        evolveName: "FC Limited Express",
        signature: false,
        evolve: "damage",
        scale: [
            "damage",
            "ability-haste",
            "crit-chance",
            "armor",
        ]
    },
    {
        id: "anti-shark-sea-mine",
        baseName: "Anti-Shark Sea Mine",
        evolveName: "Neverending Mobstomper",
        signature: false,
        evolve: "damage",
        scale: [
            "damage",
            "ability-haste",
            "area-size",
        ]
    },
    {
        id: "searing-shortbow",
        baseName: "Searing Shortbow",
        evolveName: "Evolved Embershot",
        signature: false,
        evolve: "area-size",
        scale: [
            "damage",
            "ability-haste",
            "area-size",
            "projectile-count",
            "duration",
            "armor",
        ]
    },
    {
        id: "ani-mines",
        baseName: "Ani-Mines",
        evolveName: "Jinx's Tri-Namite",
        signature: false,
        evolve: "area-size",
        scale: [
            "damage",
            "ability-haste",
            "area-size",
            "crit-chance",
        ]
    },
    {
        id: "cyclonic-slicers",
        baseName: "Cyclonic Slicers",
        evolveName: "Unceasing Cyclone",
        signature: false,
        evolve: "health-regeneration",
        scale: [
            "damage",
            "ability-haste",
            "area-size",
            "projectile-count",
            "duration",
        ]
    },
    {
        id: "vortex-glove",
        baseName: "Vortex Glove",
        evolveName: "Temptest's Gauntlet",
        signature: false,
        evolve: "health-regeneration",
        scale: [
            "damage",
            "crit-chance",
            "projectile-count",
        ]
    }
];