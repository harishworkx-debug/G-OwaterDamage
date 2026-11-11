export type ArticleSegment =
  | string
  | {
      label: string;
      to: string;
    };

export interface ArticleSection {
  heading: string;
  paragraphs: ArticleSegment[][];
  bullets?: string[];
  callout?: {
    title: string;
    text: string;
    tone: 'safety' | 'tip';
  };
}

export interface BlogPost {
  slug: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  category: string;
  targetKeyword: string;
  publishedDate: string;
  displayDate: string;
  readTime: string;
  summary: string;
  intro: ArticleSegment[][];
  sections: ArticleSection[];
  keyTakeaways: string[];
  relatedServiceSlugs: string[];
}

export interface QueuedBlogTopic {
  title: string;
  targetKeyword: string;
  targetServicePath: string;
}

/**
 * Published starter articles (3 foundational guides).
 * Keep new additions peer-reviewed with real service details and original job photos
 * before publishing rather than pushing thin placeholder content.
 */
export const blogPosts: BlogPost[] = [
  {
    slug: 'what-to-do-after-water-damage',
    title: 'What to Do Immediately After Water Damage in Your Home',
    seoTitle: 'What to Do After Water Damage in Your Home | G&OwaterDamage',
    metaDescription:
      'Step-by-step safety, water shutoff, insurance photo, and containment guidance on what to do immediately after water damage inside a New Jersey home.',
    category: 'Emergency Readiness',
    targetKeyword: 'What to do after water damage',
    publishedDate: '2026-11-11',
    displayDate: 'November 11, 2026',
    readTime: '6 min read',
    summary:
      'Practical steps for the first 30 minutes after discovering water indoors—covering electrical hazards, main shutoff valves, claim documentation, and avoiding costly drying mistakes.',
    intro: [
      [
        'Walking into a flooded basement or finding water dripping through a kitchen ceiling feels overwhelming, especially when water keeps spreading underneath furniture and baseboards. The choices you make in the first half hour determine both household safety and how much wall drywall, padding, or hardwood flooring ends up needing replacement.',
      ],
      [
        'Before grabbing mops or pulling carpet up, follow a calm safety-first order. When you need professional help right away in Elizabeth or surrounding communities, call ',
        '908-677-5006 or explore our full process for ',
        { label: 'water damage restoration in Elizabeth, NJ', to: '/water-damage-restoration-elizabeth-nj' },
        ' so mitigation starts on solid footing.',
      ],
    ],
    sections: [
      {
        heading: '1. Confirm electrical, gas, and biological safety before stepping in',
        paragraphs: [
          [
            'Water conducts electricity cleanly, and submerged extension cords, basement power strips, sump cords, or wet electrical outlets create immediate shock risks. Never wade barefoot into standing water or step onto flooded concrete until you check from dry stairs whether outlets or the main breaker panel are near water.',
          ],
          [
            'You should also identify what kind of water entered before touching soaked carpeting. Clean supply water from a bathroom sink hose is handled differently from outdoor storm mud or drain backups carrying bacteria—especially in lower-level spaces needing ',
            { label: 'basement water cleanup and moisture control', to: '/basement-water-cleanup-elizabeth-nj' },
            '.',
          ],
        ],
        callout: {
          title: 'When to stay completely clear of the water',
          text: 'If water reaches your electrical panel, gas water heater pilot, furnace base, or smells like raw sewage from a floor drain backup, stay out of the room and call utility pros and 908-677-5006 before touching anything.',
          tone: 'safety',
        },
      },
      {
        heading: '2. Shut off the water source where safe',
        paragraphs: [
          [
            'If flooding comes from an indoor plumbing fixture, split supply hose, or overflowing toilet, find the nearest shutoff valve right behind the fixture and turn it clockwise (or turn a quarter-turn ball valve perpendicular to the pipe). If water continues flowing or sprays inside a ceiling, close the home’s main water shutoff near the basement meter.',
          ],
          [
            'Active pipe failures require a licensed plumber to repair ruptured copper, PVC, or braided lines before restoration finishes. Coordinating pipe repair early alongside ',
            { label: 'burst pipe water damage cleanup', to: '/burst-pipe-water-damage-elizabeth-nj' },
            ' stops pressured leaks from soaking walls while drying equipment is staged.',
          ],
        ],
      },
      {
        heading: '3. Document rooms clearly for your insurance carrier',
        paragraphs: [
          [
            'Before clearing puddles or hauling soaked area rugs outside, take wide photos of every affected room plus close-ups of high-water lines on basement masonry, swollen trim, and damaged contents. Insurance carriers look carefully at initial photos showing how high water rose and what source triggered the loss.',
          ],
          [
            'Keep all damaged materials documented before throwing anything out, and ask your insurer directly whether your claim falls under standard sudden plumbing coverage or separate outdoor flood insurance.',
          ],
        ],
      },
      {
        heading: '4. Separate dry belongings and slow structural wicking',
        paragraphs: [
          [
            'Once power in the room is confirmed off safely, lift cardboard storage boxes off damp concrete, pull wet floor-length draperies up off window sills, and prop heavy wood furniture legs onto aluminum foil or plastic blocks so wet stain doesn’t bleed permanently into carpet or wood.',
          ],
          [
            'Avoid plugging household shop vacuums into outlets inside wet rooms, and remember that household mops remove surface sheen without clearing water locked under padding and baseboards. Timely ',
            { label: 'emergency water extraction services', to: '/water-extraction-elizabeth-nj' },
            ' remove bulk liquid rapidly before subfloors swell.',
          ],
        ],
        bullets: [
          'Elevate upholstered furniture skirts and cardboard boxes onto raised racks or dry rooms',
          'Open closet doors inside affected rooms so stagnant trapped air can circulate',
          'Never turn on central HVAC or fans if the puddle came from an outdoor flood or sewer drain backup',
          'Write down what time water was discovered and when the valve or leak stopped',
        ],
      },
      {
        heading: '5. Call a local water damage crew with accurate details',
        paragraphs: [
          [
            'Every call to G&OwaterDamage at 908-677-5006 starts with a straightforward conversation: your street address, where water entered, approximate standing depth, and which flooring types are wet. From our nearby Elizabethport office at 505 Elizabeth Ave, we confirm coverage and explain next steps honestly—including what falls under water mitigation versus licensed plumbing or electrical trades.',
          ],
        ],
      },
    ],
    keyTakeaways: [
      'Prioritize breaker and appliance power safety before stepping into flooded areas.',
      'Close fixture or main water shutoffs right away on supply leaks, and keep photos before moving items.',
      'Never run box fans or HVAC blowers over suspected contaminated floodwater or drain backups.',
      'Follow surface pumping quickly with moisture-checked structural drying so wall framing doesn’t hold hidden dampness.',
    ],
    relatedServiceSlugs: [
      'water-damage-restoration',
      'water-extraction',
      'basement-water-cleanup',
      'burst-pipe-water-damage',
    ],
  },
  {
    slug: 'signs-of-hidden-water-damage-behind-walls',
    title: 'Signs of Hidden Water Damage Behind Walls',
    seoTitle: 'Signs of Hidden Water Damage Behind Walls | G&OwaterDamage',
    metaDescription:
      'Learn the early visual, flooring, and odor clues of hidden moisture inside drywall, plaster, and subfloors—and how moisture meters verify damp areas.',
    category: 'Diagnostics & Inspection',
    targetKeyword: 'Hidden water damage signs',
    publishedDate: '2026-11-11',
    displayDate: 'November 11, 2026',
    readTime: '6 min read',
    summary:
      'Slow pipe drips and roof flashing leaks rarely announce themselves with puddles. Spot early wall, ceiling, floor, and odor warning signs before hidden dampness degrades structural framing.',
    intro: [
      [
        'Some of the costliest water losses in Elizabeth homes happen without a single standing puddle on the floor. A slow pinhole spray inside a shower wall, a dripping radiator elbow, or rainwater tracking down chimney flashing can soak wall insulation and wood studs quietly for weeks before paint changes color.',
      ],
      [
        'Recognizing early symptoms helps catch hidden moisture before drywall crumbles or oak floorboards cup across a whole room. When symptoms raise questions, a targeted ',
        { label: 'water damage inspection in Elizabeth, NJ', to: '/water-damage-inspection-elizabeth-nj' },
        ' maps where moisture actually sits behind finished surfaces without knocking down intact dry walls blindly.',
      ],
    ],
    sections: [
      {
        heading: 'Wall and ceiling surface changes you can spot early',
        paragraphs: [
          [
            'Latex wall paint forms an elastic skin that holds tiny amounts of water behind it—producing soft blisters, bubbling seams, or peeling edges along shower walls, window casings, and lower hallways. On ceilings directly under second-story baths or kitchen lines, watch for yellowish-brown halos, sagging tape seams, or dark drywall nail pops.',
          ],
          [
            'In older Union County homes built with wood lath and lime plaster, concealed leaks hold moisture internally far longer before staining surfaces cleanly. Leaving peeling trim painted over simply seals damp framing inside the stud bay.',
          ],
        ],
        bullets: [
          'Expanding tan, yellow, or ring-shaped stains across drywall or plaster ceilings',
          'Blistering paint bubbles, loose wallpaper seams, or damp swollen MDF baseboards',
          'Baseboard trim slightly separating from the wall where wood swells sideways',
          'Soft spongy spots when pressing gently on drywall beside tubs, toilets, or exterior windows',
        ],
      },
      {
        heading: 'Flooring changes & localized odors',
        paragraphs: [
          [
            'Hardwood boards absorb water readily through unsealed bottom faces whenever moisture collects beneath the subfloor. When boards swell along the bottom faster than the finished top face, edges curl upward into a subtle dish known as cupping—a classic clue of slow subfloor dampness near dishwashers, refrigerators, or damp basements.',
          ],
          [
            'Stubborn earthy or musty odors inside under-sink vanities, hall closets, or basement stair landings often signal moisture trapped behind toe-kicks or framing chases. Even slow supply drips frequently need ',
            { label: 'burst pipe and leak damage restoration', to: '/burst-pipe-water-damage-elizabeth-nj' },
            ' once a plumber repairs the leaky line.',
          ],
        ],
      },
      {
        heading: 'Why hand touch cannot tell dry drywall from wet framing',
        paragraphs: [
          [
            'A freshly painted wall or ceramic bathroom tile regularly feels cool to the touch, making hands an unreliable test for trapped moisture. At the same time, water runs along floor joists by gravity and frequently surfaces several feet sideways from the leaking supply pipe or roof tear.',
          ],
          [
            'Inspecting properly pairs visible pathway tracing with moisture meters: pinless dielectric scanners check for elevated readings behind intact drywall and tile without drilling holes, while calibrated pin probes confirm exact moisture content inside wood framing compared to dry unaffected reference walls.',
          ],
        ],
        callout: {
          title: 'Dry baseline comparisons prevent unnecessary tear-outs',
          text: 'Comparing readings in a suspected wet room against an identical dry wall in the same building clarifies whether a stain is leftover old discoloration or active saturation needing drying.',
          tone: 'tip',
        },
      },
      {
        heading: 'Next steps when hidden moisture readings test high',
        paragraphs: [
          [
            'First, determine whether moisture enters continuously from pressurized plumbing (requiring a licensed plumber) or only after rainstorms (requiring a roofer or flashing repair). Once the source is stopped cleanly, ',
            { label: 'structural drying and commercial dehumidification', to: '/structural-drying-elizabeth-nj' },
            ' pull locked vapor out of stud bays and subflooring until meter checks clear.',
          ],
          [
            'If you spot bubbling baseboards or suspicious ceiling stains in Elizabeth or neighboring towns, call 908-677-5006 to describe the signs and location so we can advise whether an inspection fits cleanly.',
          ],
        ],
      },
    ],
    keyTakeaways: [
      'Paint blisters, cupped hardwood, and stubborn cabinet odors often appear long before puddles.',
      'Older lime plaster and laminated subfloors can conceal high moisture while feeling dry outside.',
      'Non-invasive and pin moisture meters establish real wet-to-dry boundaries before opening walls.',
      'Always fix the active plumbing or roof source alongside drying out trapped wall framing.',
    ],
    relatedServiceSlugs: [
      'water-damage-inspection',
      'structural-drying',
      'burst-pipe-water-damage',
      'water-damage-restoration',
    ],
  },
  {
    slug: 'water-extraction-vs-structural-drying',
    title: 'Water Extraction vs. Structural Drying',
    seoTitle: 'Water Extraction vs. Structural Drying Explained | G&OwaterDamage',
    metaDescription:
      'Understand the difference between standing water extraction and structural drying—and why thorough restoration relies on both stages in sequence.',
    category: 'Restoration Process',
    targetKeyword: 'Water extraction vs structural drying',
    publishedDate: '2026-11-11',
    displayDate: 'November 11, 2026',
    readTime: '5 min read',
    summary:
      'Pumping out standing puddles is only stage one. Learn how mechanical extraction differs from structural dehumidification—and why stopping early traps hidden moisture inside walls and subfloors.',
    intro: [
      [
        'Property owners naturally feel relieved once standing water disappears from the living room rug or basement floor. Yet one of the most common reasons secondary damage, warped oak boards, and musty cellar smells return weeks later is treating liquid pumping as the entire restoration job.',
      ],
      [
        'Effective water cleanup relies on two distinct phases working in order: bulk ',
        { label: 'water extraction and standing water removal', to: '/water-extraction-elizabeth-nj' },
        ' first, followed immediately by controlled ',
        { label: 'structural drying services in Elizabeth, NJ', to: '/structural-drying-elizabeth-nj' },
        '. Skipping or shortening either stage makes recovery slower and riskier for structural framing.',
      ],
    ],
    sections: [
      {
        heading: 'Stage 1: Water extraction removes free liquid fast',
        paragraphs: [
          [
            'Mechanical water extraction targets liquid "free water"—water pooling across basement concrete, soaking saturated carpet piles, and sitting under loose floor seams. Using submersible dewatering pumps for deeper basements and high-suction extraction wands for flooring removes bulk gallons hundreds of times faster than household evaporation.',
          ],
          [
            'Extraction also protects structural weight limits and clears saturated carpet cushions when open-cell padding blocks plywood subfloors from breathing. Whether water entered from an overflow or dirty outdoor runoff needing ',
            { label: 'flood damage cleanup', to: '/flood-damage-cleanup-elizabeth-nj' },
            ', clearing liquid rapidly prevents damage from spreading room to room.',
          ],
        ],
      },
      {
        heading: 'Stage 2: Structural drying targets absorbed moisture inside framing',
        paragraphs: [
          [
            'Even the strongest vacuum extractor leaves microscopic "bound moisture" wicked inside wood wall studs, sill plates, drywall gypsum, lime plaster, and layered subflooring. Once free puddles leave, structural drying takes over by controlling indoor humidity and airflow.',
          ],
          [
            'Commercial dehumidifiers pull evaporated water vapor out of sealed indoor air, while targeted high-velocity air movers sweep dry air across damp baseboards, cabinet toe-kicks, and masonry surfaces so materials give up trapped moisture steadily.',
          ],
        ],
        callout: {
          title: 'Why opening windows during drying often backfires',
          text: 'Humid New Jersey outside air frequently carries far more moisture than a closed room running commercial dehumidifiers. Keeping windows shut lets drying machines drop relative humidity smoothly.',
          tone: 'tip',
        },
      },
      {
        heading: 'Key differences between extraction and structural drying',
        paragraphs: [
          [
            'Knowing which step handles what helps clarify realistic expectations before repair contractors hang new drywall or lay vinyl plank flooring.',
          ],
        ],
        bullets: [
          'Goal: Extraction removes liquid puddles and soaked surface moisture; structural drying removes bound internal vapor from framing and subfloors',
          'Timing: Extraction starts immediately for hours; structural drying typically runs over multiple monitored days',
          'Equipment: Submersible pumps and high-lift carpet/hard-floor wands vs. commercial dehumidifiers and targeted air movers',
          'Verification: Extraction ends visually once free water clears; structural drying ends only when moisture meters verify unaffected dry baselines',
        ],
      },
      {
        heading: 'Why both stages protect long-term repairs',
        paragraphs: [
          [
            'Putting fresh primer, trim, or floating plank flooring down right after vacuuming visible water traps bound subfloor moisture underneath—leading to adhesive failure, buckled boards, and musty odors inside closed wall cavities. Pairing fast liquid removal with metered dehumidification is the backbone of dependable ',
            { label: 'full water damage restoration', to: '/water-damage-restoration-elizabeth-nj' },
            '.',
          ],
          [
            'If water soaked rooms at your property in Elizabeth or nearby communities, call 908-677-5006 to describe the depth and flooring affected so we can help plan extraction and drying together.',
          ],
        ],
      },
    ],
    keyTakeaways: [
      'Water extraction handles visible standing liquid, soaked carpets, and bulk basement accumulation.',
      'Structural drying handles bound moisture deep inside wall cavities, drywall, plaster, and subfloors.',
      'Closing windows helps commercial dehumidifiers maintain a dry vapor gradient.',
      'Moisture-meter readings—not surface hand touch—confirm when framing is ready for repairs.',
    ],
    relatedServiceSlugs: [
      'water-extraction',
      'structural-drying',
      'flood-damage-cleanup',
      'water-damage-restoration',
    ],
  },
];

/**
 * Remaining 12 editorial topics from Section 13 queued for gradual publication
 * after expert review and original project imagery—kept out of public navigation
 * until full, non-thin articles are ready.
 */
export const queuedBlogTopics: QueuedBlogTopic[] = [
  {
    title: 'How to Handle a Burst Pipe Emergency',
    targetKeyword: 'Burst pipe emergency',
    targetServicePath: '/burst-pipe-water-damage-elizabeth-nj',
  },
  {
    title: 'Common Causes of Basement Flooding in New Jersey',
    targetKeyword: 'Basement flooding NJ',
    targetServicePath: '/basement-water-cleanup-elizabeth-nj',
  },
  {
    title: 'How Long Does Water Damage Restoration Take?',
    targetKeyword: 'Water damage restoration time',
    targetServicePath: '/water-damage-restoration-elizabeth-nj',
  },
  {
    title: 'What Happens During a Water Damage Inspection?',
    targetKeyword: 'Water damage inspection',
    targetServicePath: '/water-damage-inspection-elizabeth-nj',
  },
  {
    title: 'How to Handle a Sewage Backup Safely',
    targetKeyword: 'Sewage backup cleanup',
    targetServicePath: '/sewage-cleanup-elizabeth-nj',
  },
  {
    title: 'What to Do After Heavy Rain Causes Basement Flooding',
    targetKeyword: 'Basement flooding after rain',
    targetServicePath: '/basement-water-cleanup-elizabeth-nj',
  },
  {
    title: 'Commercial Water Damage: What Businesses Should Do',
    targetKeyword: 'Commercial water damage',
    targetServicePath: '/commercial-water-damage-restoration-elizabeth-nj',
  },
  {
    title: 'Does Homeowners Insurance Cover Water Damage?',
    targetKeyword: 'Water damage insurance coverage',
    targetServicePath: '/water-damage-restoration-elizabeth-nj',
  },
  {
    title: 'How Professional Dehumidifiers Help Dry Buildings',
    targetKeyword: 'Structural drying equipment',
    targetServicePath: '/structural-drying-elizabeth-nj',
  },
  {
    title: 'Water Damage vs. Flood Damage: What’s the Difference?',
    targetKeyword: 'Water damage vs flood damage',
    targetServicePath: '/flood-damage-cleanup-elizabeth-nj',
  },
  {
    title: 'How to Identify a Water Leak Before It Gets Worse',
    targetKeyword: 'Signs of water leaks',
    targetServicePath: '/water-damage-inspection-elizabeth-nj',
  },
  {
    title: 'Preventing Water Damage During Winter in New Jersey',
    targetKeyword: 'Winter water damage prevention NJ',
    targetServicePath: '/burst-pipe-water-damage-elizabeth-nj',
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

