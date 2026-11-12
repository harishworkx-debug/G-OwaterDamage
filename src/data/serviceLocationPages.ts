export type ServiceContentSection =
  | {
      kind: 'cards';
      eyebrow: string;
      title: string;
      description?: string;
      columns?: 2 | 3;
      items: { title: string; text: string }[];
    }
  | {
      kind: 'steps';
      eyebrow: string;
      title: string;
      description?: string;
      steps: { title: string; text: string }[];
    }
  | {
      kind: 'comparison';
      eyebrow: string;
      title: string;
      description?: string;
      left: {
        heading: string;
        summary?: string;
        tone?: 'positive' | 'caution' | 'neutral';
        items: string[];
      };
      right: {
        heading: string;
        summary?: string;
        tone?: 'positive' | 'caution' | 'neutral';
        items: string[];
      };
    }
  | {
      kind: 'checklist';
      eyebrow: string;
      title: string;
      description?: string;
      tone?: 'default' | 'warning';
      items: string[];
      panel?: {
        heading: string;
        items: string[];
        note?: string;
      };
    };

export interface ServiceLocationPage {
  slug: string;
  serviceSlug: string;
  title: string;
  description: string;
  h1: string;
  eyebrow: string;
  heroDescription?: string;
  intro: string[];
  reviewQuote?: {
    author: string;
    text: string;
  };
  sections: ServiceContentSection[];
  faqHeading: string;
  faqs: { question: string; answer: string }[];
  relatedSlugs: string[];
}

export const serviceLocationPages: ServiceLocationPage[] = [
  {
    slug: 'water-damage-restoration-elizabeth-nj',
    serviceSlug: 'water-damage-restoration',
    title: 'Water Damage Restoration Elizabeth NJ | G&O',
    description:
      'Water damage repair and emergency restoration in Elizabeth, NJ—assessment, water extraction, structural drying, and repair readiness. Call 908-677-5006.',
    h1: 'Water Damage Restoration in Elizabeth, NJ',
    eyebrow: 'Water Damage Repair & Emergency Restoration',
    intro: [
      'Water damage rarely stops where the puddle ends. Within hours of a burst supply line, overflowing appliance, or storm-flooded basement, water wicks upward into drywall, saturates carpet padding, and settles beneath hardwood or tile subflooring where household towels and fans cannot reach.',
      'Complete water damage repair and emergency restoration in Elizabeth, NJ requires handling the full chain cleanly—stopping or isolating the moisture source, extracting standing water, dehumidifying hidden building cavities with moisture verification, cleaning affected areas, and identifying which materials can be dried versus replaced. Every job starts with a direct phone assessment at 908-677-5006.',
    ],
    reviewQuote: {
      author: 'Adam Morrison',
      text: 'Their water damage repair service was dependable, and the house felt back to normal quickly. Highly recommend.',
    },
    sections: [
      {
        kind: 'steps',
        eyebrow: 'Restoration Process',
        title: 'How full water damage restoration works from call to dry verification',
        description:
          'Rather than just drying visible surfaces, restoration follows five clear stages tailored to how water entered your Elizabeth property.',
        steps: [
          {
            title: 'Phone intake & initial damage assessment',
            text: 'You tell us where the water came from, how high it reached, and which rooms are affected. We explain practical safety precautions right away and confirm current availability.',
          },
          {
            title: 'Source control & electrical hazard check',
            text: 'Before active cleanup begins, the water source must be stopped—by closing a shutoff valve, coordinating a plumber or roofer if needed—and electrical circuits near wet floors or ceilings must be secured.',
          },
          {
            title: 'Standing water removal & clearing wet contents',
            text: 'Bulk water is pumped and extracted from concrete, tile, carpet, and subfloor seams so liquid stops migrating sideways into adjacent rooms.',
          },
          {
            title: 'Structural drying, dehumidification & cleaning',
            text: 'Air movement and commercial dehumidification draw trapped dampness out of stud cavities, lower walls, and framing while affected hard surfaces are cleaned and checked with moisture meters.',
          },
          {
            title: 'Final moisture verification & repair readiness review',
            text: 'Once materials reach dry targets against unaffected reference readings, we review clearly with you what remained intact and what damaged drywall, pad, or trim is ready for repair or replacement.',
          },
        ],
      },
      {
        kind: 'cards',
        eyebrow: 'Common Causes',
        title: 'Why Elizabeth properties suffer water damage',
        description: 'Understanding the source helps determine whether cleanup involves clean plumbing water, dirty runoff, or multi-room saturation.',
        items: [
          {
            title: 'Storm & basement flooding',
            text: 'Heavy rain, high ground water, failed sump pumps, or street runoff push water through foundation coves, window wells, and lower-level doors.',
          },
          {
            title: 'Burst or pinhole-leaking pipes',
            text: 'Aging copper, galvanized fittings, and winter-frozen exterior lines rupture behind kitchen cabinets, bathrooms, and second-story ceilings.',
          },
          {
            title: 'Appliance & water heater failures',
            text: 'Burst braided washing-machine hoses, leaking dishwashers, and rusting basement hot water tanks flood utility areas while occupants are away.',
          },
          {
            title: 'Roof, gutter & window intrusion',
            text: 'Damaged flashing, clogged gutters, and wind-driven storms allow rainwater into attic insulation and top-floor wall cavities.',
          },
        ],
      },
      {
        kind: 'checklist',
        eyebrow: 'Warning Signs',
        title: 'Signs hidden moisture is still inside walls or floors',
        description:
          'Not every leak leaves deep standing water. Call for an assessment if you notice any of these early symptoms around bathrooms, kitchens, or lower levels.',
        items: [
          'Brown, yellow, or ring-shaped ceiling stains—or drywall seams beginning to bulge or crack',
          'Bubbling, blistering, or peeling paint along baseboards, window sills, or shower walls',
          'Wood floorboards cupping along the edges or subfloor panels feeling soft underfoot',
          'Persistent earthy or musty odors lingering days after an overflow was mopped up',
          'Baseboard trim separating slightly from walls or nail heads darkening in lower hallways',
          'Increased indoor humidity or damp condensation collecting inside basement closets',
        ],
      },
      {
        kind: 'comparison',
        eyebrow: 'Property Scope',
        title: 'Residential vs. commercial water damage situations',
        description: 'Our Elizabethport crew handles both single/multi-family residences and commercial spaces, adjusting setup to how each building is constructed.',
        left: {
          heading: 'Homes, Two-Family Houses & Apartments',
          summary: 'Focused on living areas, older wood framing, plaster walls, and family belongings:',
          tone: 'positive',
          items: [
            'Checking vertically across stacked baths, kitchens, and downstairs ceilings in multi-unit buildings',
            'Protecting finished basements, hardwood subfloors, and lower-level furnaces or water heaters',
            'Advising carefully on wet plaster, lath, carpet pad, and drywall bottom cuts',
            'Documenting room conditions clearly so you have records for homeowners or renters insurance',
          ],
        },
        right: {
          heading: 'Storefronts, Offices & Warehouses',
          summary: 'Focused on business continuity, wide floorplans, and inventory safety:',
          tone: 'neutral',
          items: [
            'Managing flat-roof and HVAC drop-ceiling leaks above workstations, lighting, and electronics',
            'Clearing standing water off wide VCT tile, warehouse concrete, and low-pile commercial carpet',
            'Separating wet mitigation areas from clean customer or employee zones where layout allows',
            'Scheduling equipment setup and check-ins around business hours by phone coordination',
          ],
        },
      },
      {
        kind: 'checklist',
        eyebrow: 'First Steps & Scope',
        title: 'What to handle before our crew arrives',
        tone: 'default',
        items: [
          'Keep clear of standing water near live outlets, power strips, or submerged electrical panels.',
          'Shut off the water supply valve or call a plumber/roofer if water is still actively entering.',
          'Take wide and close-up photos of all affected rooms before shifting soaked furniture or tearing out materials.',
          'Move undamaged valuables, cardboard boxes, and electronics to dry raised surfaces if safe.',
        ],
        panel: {
          heading: 'What our restoration service covers',
          items: [
            'Direct phone evaluation of source, rooms affected, and coverage',
            'Standing water extraction across hard floors, basements, and carpet',
            'Structural drying with moisture-meter verification before repairs',
            'Cleaning of salvaged structural surfaces and honest replacement guidance',
            'Transparent phone discussion of what requires a plumber, roofer, or builder',
          ],
          note: 'Availability and scheduling windows for Elizabeth and surrounding neighborhoods are confirmed directly when you call 908-677-5006.',
        },
      },
    ],
    faqHeading: 'Water damage restoration FAQs for Elizabeth properties',
    faqs: [
      {
        question: 'How quickly can you respond for emergency restoration?',
        answer:
          'Arrival windows depend on your Elizabeth neighborhood and active crew schedule at the time of your call. Call 908-677-5006 right away so our team can give you an honest dispatch window.',
      },
      {
        question: 'Should I dry the surface myself first and wait to call?',
        answer:
          'No. Surface mopping leaves water trapped behind baseboards, beneath carpet backing, and inside wall cavities. Early professional extraction and drying usually reduce how much drywall or flooring ends up needing replacement.',
      },
      {
        question: 'What if mold is already starting to show after a leak?',
        answer:
          'Call 908-677-5006 and describe where visible growth appears and how long the room stayed damp. Our crew will explain safe precautions (avoiding dry brushing or running box fans) and what remediation or drying steps apply.',
      },
      {
        question: 'Will my insurance cover water damage repair?',
        answer:
          'Coverage depends on your specific policy and whether water came from a sudden internal pipe burst or outdoor flooding. Keep all photos intact before discarding items, contact your carrier, and let us know if a claim is open when you call.',
      },
    ],
    relatedSlugs: ['water-extraction-elizabeth-nj', 'structural-drying-elizabeth-nj'],
  },
  {
    slug: 'water-extraction-elizabeth-nj',
    serviceSlug: 'water-extraction',
    title: 'Water Extraction Elizabeth NJ | G&O',
    description:
      'Emergency water removal and standing water removal in Elizabeth, NJ. Pumping floodwater from floors, carpets, and basements. Call 908-677-5006.',
    h1: 'Water Extraction Services in Elizabeth, NJ',
    eyebrow: 'Emergency & Standing Water Removal',
    intro: [
      'Physical water extraction is hundreds of times more efficient than waiting for pooled water to evaporate. Left sitting even a few hours, standing water wicks up baseboard trim, swells laminate seams, saturates subflooring, and turns a localized overflow into a multi-room tear-out.',
      'G&OwaterDamage provides prompt emergency water removal and standing water removal in Elizabeth, NJ for flooded basements, soaked carpeting, and hard-floor spills. Call 908-677-5006 and tell us the approximate water depth, flooring type, and rooms impacted so we can plan extraction equipment.',
    ],
    sections: [
      {
        kind: 'cards',
        eyebrow: 'When Extraction Is Needed',
        title: 'Situations that require mechanical water extraction',
        description:
          'Any time liquid covers a floor, pools in a lower level, or squishes beneath carpet, shop vacs and mops leave gallons behind.',
        items: [
          {
            title: 'Deep basement flooding',
            text: 'Storm surges, driveway runoff, or stairwell inflows can leave inches of standing water across basement slabs, boiler rooms, and finished lower levels.',
          },
          {
            title: 'Sump pump or power failure',
            text: 'When a basement pump trips a breaker or quits during heavy rainfall, groundwater accumulates quickly around furnaces and laundry hookups.',
          },
          {
            title: 'Burst supply lines & water heaters',
            text: 'Ruptured pipes or split 40-gallon hot water tanks dump pressurized water across kitchens, hallways, and rooms directly below.',
          },
          {
            title: 'Tub, toilet & washer overflows',
            text: 'Unattended appliance fill cycles or blocked drains soak bathroom tile, bedroom carpets, and subfloor joints in minutes.',
          },
        ],
      },
      {
        kind: 'steps',
        eyebrow: 'Extraction Process',
        title: 'How our standing water removal workflow runs',
        description:
          'Removing bulk liquid safely prepares the structure so dehumidifiers and air movers can finish the job efficiently.',
        steps: [
          {
            title: 'Safety & electrical clearance',
            text: 'Before stepping into standing water, we check water height relative to floor outlets, appliances, and basement electrical panels and verify the leak source is stopped.',
          },
          {
            title: 'Bulk standing water pumping',
            text: 'Dewatering pumps draw down inches of deep water from basements, garages, and sunken rooms rapidly toward an approved discharge path.',
          },
          {
            title: 'Subsurface carpet & padding extraction',
            text: 'High-suction extraction tools pull trapped water up out of carpet fibers and compression layers rather than leaving damp padding soaking the wood subfloor.',
          },
          {
            title: 'Edge, baseboard & hard-floor squeegee clearing',
            text: 'Crevice and hard-surface wands remove residual liquid along drywall toes, tile grout, and closet tracks where water settles last.',
          },
          {
            title: 'Pad evaluation & transition to structural drying',
            text: 'If sponge carpet padding or buckled laminate prevents subfloor evaporation, we explain removal options before immediately transitioning into dehumidification.',
          },
        ],
      },
      {
        kind: 'cards',
        eyebrow: 'Equipment & Flooring',
        title: 'Extraction equipment and how different flooring responds',
        description: 'Matching tool suction to the floor surface prevents further damage while pulling out as much liquid water as possible.',
        items: [
          {
            title: 'Submersible pumps for deep pooling',
            text: 'Used first when standing basement or ground-level water exceeds shallow floor puddles so high-suction wands can finish the slab cleanly.',
          },
          {
            title: 'Weighted & portable carpet extractors',
            text: 'Weighted or high-lift extraction tools compress clean-water carpet fibers to pull moisture out of backing without stretching or delaminating carpet seams.',
          },
          {
            title: 'Wet-floor squeegee & crevice wands',
            text: 'Gentle hard-surface attachments evacuate water along concrete slabs, vinyl, and ceramic tile edges cleanly without scratching finished surfaces.',
          },
          {
            title: 'Carpet pad vs. solid flooring care',
            text: 'Open-cell foam padding and swollen MDF laminate absorb contaminants and trap water against wood subfloors, often requiring removal, whereas intact hardwood or carpet may dry after clean extraction.',
          },
        ],
      },
      {
        kind: 'comparison',
        eyebrow: 'What Happens Afterward',
        title: 'Why water extraction is only half the fix',
        description: 'Even the strongest extractor removes free liquid—not the bound moisture absorbed into wood framing and drywall.',
        left: {
          heading: 'What Extraction Accomplishes Immediately',
          tone: 'positive',
          items: [
            'Drops standing depth and stops liquid spreading to hallways and adjacent suites',
            'Takes thousands of pounds of water weight off joists and saturated floor coverings',
            'Shortens total structural drying time significantly once dehumidifiers start',
            'Reduces slippery hazards and immediate humidity spikes indoors',
          ],
        },
        right: {
          heading: 'What Happens Immediately Afterward',
          tone: 'neutral',
          items: [
            'Wet carpet padding, swollen baseboards, or laminate blocking evaporation may need controlled lifting',
            'Air movers and commercial dehumidifiers are positioned to dry subfloors and wall bottoms',
            'Moisture-meter baselines track dampness inside stud cavities until safe dry readings return',
            'Dirty floodwater or sewage floors receive cleaning and sanitization before drying completes',
          ],
        },
      },
      {
        kind: 'checklist',
        eyebrow: 'Precautions & Scope',
        title: 'Before extraction starts',
        tone: 'default',
        items: [
          'Do not wade barefoot in standing water—hidden debris, slick slabs, and live electricity pose real risks.',
          'Avoid plugging household wet/dry vacuums into wall outlets inside flooded rooms.',
          'Wait before throwing out wet carpet or padding until we discuss salvageability and your insurance photos.',
          'Call 908-677-5006 right away if drain water smells like sewage so we confirm safe scope first.',
        ],
        panel: {
          heading: 'Water extraction work included',
          items: [
            'Prompt phone assessment of standing water height and source',
            'Bulk pumping of deep flooded basements and lower floors',
            'Carpet, padding, and hard-surface water extraction',
            'Floor prep and clean handoff into structural drying equipment',
          ],
        },
      },
    ],
    faqHeading: 'Questions about emergency water removal',
    faqs: [
      {
        question: 'How much standing water can be pumped out?',
        answer:
          'Extraction handles everything from shallow soaked carpets up to inches of standing basement floodwater. Share the room size and rough water depth when calling 908-677-5006.',
      },
      {
        question: 'Can my wet carpet be saved after standing water removal?',
        answer:
          'If the leak was clean supply water and extraction begins rapidly, carpet face fiber can often be extracted and dried in place—though inexpensive foam padding frequently needs replacement so the subfloor dries cleanly. Outdoor floodwater or sewage usually requires carpet disposal for hygiene.',
      },
      {
        question: 'Is it safe to walk through standing water while waiting for help?',
        answer:
          'Only if power is verified off cleanly at the breaker and you know the water source is clean. Stay out completely if water reaches outlets, electrical panels, furnaces, or smells like sewer backup.',
      },
      {
        question: 'What if the standing water came from a sewage backup?',
        answer:
          'Sewage water carries harmful bacteria and requires dedicated biohazard handling rather than clean-water extraction. Call 908-677-5006 first so we can confirm availability for sewage backup cleanup.',
      },
    ],
    relatedSlugs: ['structural-drying-elizabeth-nj', 'basement-water-cleanup-elizabeth-nj'],
  },
  {
    slug: 'structural-drying-elizabeth-nj',
    serviceSlug: 'structural-drying',
    title: 'Structural Drying Elizabeth NJ | G&O',
    description:
      'Structural drying services and professional dehumidification in Elizabeth, NJ for wet walls, framing, and subfloors. Call 908-677-5006.',
    h1: 'Structural Drying Services in Elizabeth, NJ',
    eyebrow: 'Structural Drying Services & Professional Dehumidification',
    intro: [
      'A room almost always feels dry to the touch long before the building materials behind the paint are actually dry. Moisture wicked inside drywall gypsum, trapped behind cabinets, or absorbed into hardwood tongue-and-groove subfloors stays locked in the structure unless actively pulled out with controlled airflow and dehumidification.',
      'G&OwaterDamage provides structural drying services and professional dehumidification across Elizabeth, NJ after standing water is extracted. Rather than guessing by touch or relying on box fans, our process pairs drying equipment with moisture-meter verification so you know when framing is truly ready for rebuilding.',
    ],
    sections: [
      {
        kind: 'cards',
        eyebrow: 'Why Structural Drying Matters',
        title: 'What happens when trapped structural dampness is left behind',
        description:
          'Closing up damp wall cavities or laying new vinyl over wet subfloors almost always creates secondary damage weeks later.',
        items: [
          {
            title: 'Cupped and buckled hardwood floors',
            text: 'When damp subflooring slowly feeds moisture upward into the bottom of oak or maple planks, boards swell along the bottom and dish upward permanently.',
          },
          {
            title: 'Swollen drywall & trapped mold risk',
            text: 'Paper-faced sheetrock, damp sill plates, and wet wall insulation stay within mold-friendly humidity windows if not dried out cleanly within days.',
          },
          {
            title: 'Wood rot along sill plates & joists',
            text: 'Prolonged elevated moisture along masonry-contact framing weakens structural wood members and triggers lingering damp basement odors.',
          },
          {
            title: 'Peeling paint & failed new flooring',
            text: 'Repainting or gluing down new plank flooring traps moisture vapor underneath, causing adhesive failure, bubbling paint, and callbacks.',
          },
        ],
      },
      {
        kind: 'comparison',
        eyebrow: 'Affected Materials',
        title: 'How building materials hold and release moisture differently',
        description: 'Effective structural drying adjusts airflow, removal access, and drying duration based on material porosity.',
        left: {
          heading: 'Porous Interior Finishes & Insulation',
          tone: 'neutral',
          items: [
            'Drywall gypsum absorbs water fast along the bottom cut line and softens when oversaturated',
            'Fiberglass and cellulose batts inside wall cavities hold water against wood studs and often must come out to let framing breathe',
            'Older Elizabeth plaster-over-lath walls are denser than sheetrock and require patient, sustained dehumidification',
            'Pressed MDF trim and particleboard baseboards swell irreversibly once wet',
          ],
        },
        right: {
          heading: 'Framing Lumber, Subfloors & Masonry',
          tone: 'positive',
          items: [
            'Plywood and plank subflooring dry slowly whenever vinyl, tile, or thick carpet slows upward evaporation',
            'Pine wall studs, sill plates, and floor joists absorb moisture deeply and need dry-baseline comparisons',
            'Hardwood flooring benefits from controlled dehumidification from above and unfinished basement access below',
            'Concrete slabs and block foundation walls release residual dampness steadily into basement air',
          ],
        },
      },
      {
        kind: 'cards',
        eyebrow: 'Drying Equipment',
        title: 'Equipment used in professional structural drying',
        columns: 3,
        items: [
          {
            title: 'High-velocity air movers',
            text: 'Positioned along walls, subfloors, and cabinet toe-kicks to strip away the stagnant humid air layer clinging to wet materials and accelerate evaporation.',
          },
          {
            title: 'Commercial dehumidifiers',
            text: 'Work alongside air movers inside a closed room to pull evaporated water vapor continuously out of the air—otherwise wet room humidity just re-absorbs into dry walls nearby.',
          },
          {
            title: 'Calibrated moisture meters',
            text: 'Pin and non-invasive meters measure internal moisture percentages inside studs, drywall, and wood floors rather than relying on hand touch.',
          },
        ],
      },
      {
        kind: 'steps',
        eyebrow: 'Moisture Monitoring',
        title: 'How moisture monitoring and drying verification work',
        description: 'Every drying job follows repeatable meter measurements rather than an arbitrary calendar guess.',
        steps: [
          {
            title: 'Establish an unaffected dry standard',
            text: 'We measure dry wood, drywall, or subflooring in an unaffected room of the same home so we know the normal baseline moisture level for your building.',
          },
          {
            title: 'Map wet boundary lines before setup',
            text: 'Initial meter readings mark how far water wicked up drywall or traveled under flooring so air movers and dehumidifiers target every wet edge.',
          },
          {
            title: 'Control the drying environment & monitor progress',
            text: 'Windows and exterior doors stay closed while dehumidifiers run, and airflow is adjusted as high-moisture spots begin drying down.',
          },
          {
            title: 'Final drying verification before teardown',
            text: 'Drying equipment stays in place until readings on damp framing and subfloors return in line with unaffected baseline targets—confirming spaces are safe to rebuild.',
          },
        ],
      },
      {
        kind: 'checklist',
        eyebrow: 'Homeowner Guidance',
        title: 'Helping structural drying finish faster',
        items: [
          'Keep exterior doors and windows shut while commercial dehumidifiers are running so humid NJ outside air stays out.',
          'Leave equipment running continuously as instructed rather than switching units off overnight.',
          'Do not install new baseboard, paint, or carpet pad until moisture readings verify framing and subfloors have cleared.',
          'Let us know right away if a lingering musty spot or tight cabinet base feels cool or clammy.',
        ],
        panel: {
          heading: 'Structural drying work included',
          items: [
            'Targeted air movement across wet walls, baseboards, and subfloor assemblies',
            'Commercial dehumidification matched to room volume and wet material class',
            'Non-invasive and pin moisture monitoring during the drying cycle',
            'Dry-standard confirmation before repairs or rebuilding start',
          ],
        },
      },
    ],
    faqHeading: 'Questions about structural drying services',
    faqs: [
      {
        question: 'How long does structural drying usually take?',
        answer:
          'Most clean drying jobs take a few days depending on how deeply framing, hardwood, or plaster soaked and ambient indoor humidity. We judge completion by moisture readings—not fixed timers.',
      },
      {
        question: 'How do I know when walls and subfloors are truly dry?',
        answer:
          'True dryness is confirmed using moisture-meter measurements compared against unaffected wood and drywall in your property rather than surface touch alone.',
      },
      {
        question: 'Can I run household box fans and a store-bought dehumidifier instead?',
        answer:
          'A home dehumidifier may cope with slight surface dampness in a tiny bath or closet, but typical residential units remove far less moisture and often leave studs, wall insulation, and hardwood subfloors wet underneath.',
      },
      {
        question: 'When can my contractor start replacing drywall and flooring?',
        answer:
          'Reconstruction should begin only after structural moisture checks confirm lumber and subflooring are back to dry target levels so mold or warped boards are not sealed inside.',
      },
    ],
    relatedSlugs: ['water-damage-inspection-elizabeth-nj', 'water-damage-restoration-elizabeth-nj'],
  },
  {
    slug: 'flood-damage-cleanup-elizabeth-nj',
    serviceSlug: 'flood-damage-cleanup',
    title: 'Flood Damage Cleanup Elizabeth NJ | G&O',
    description:
      'Flood water removal and residential flood cleanup in Elizabeth, NJ. Clearing overland storm water, mud, and soaked materials. Call 908-677-5006.',
    h1: 'Flood Damage Cleanup in Elizabeth, NJ',
    eyebrow: 'Flood Water Removal & Residential Flood Cleanup',
    intro: [
      'Flooding from overflowing streets, saturated yards, or backed-up storm basins is far more complex than a clean interior pipe leak. Once stormwater crosses sidewalks, lawns, or driveways into a house, it brings fine silt, soil contaminants, road oils, and organic debris that soak straight into porous lower-level walls and flooring.',
      'G&OwaterDamage provides flood water removal and residential flood cleanup in Elizabeth and Elizabethport—starting with clear phone guidance on safety, removing floodwater and mud, deciding honestly with you which soaked materials cannot stay, and thoroughly cleaning and drying structural framing before rebuilding. Call 908-677-5006 as soon as it is safe.',
    ],
    reviewQuote: {
      author: 'Damian Walsh',
      text: 'When we needed flood cleanup, the crew arrived prepared and organized. They checked everything to make sure nothing was missing, and we felt confident that our home was in good hands.',
    },
    sections: [
      {
        kind: 'cards',
        eyebrow: 'Flooding Sources',
        title: 'Common ways overland flooding enters Elizabeth properties',
        description:
          'Knowing how storm water entered determines what contaminants may be mixed inside and which materials must be removed.',
        items: [
          {
            title: 'Street & catch-basin runoff',
            text: 'Intense rainstorms overwhelm street storm sewers and push muddy roadway runoff down driveways, garage thresholds, and ground-level doors.',
          },
          {
            title: 'Coastal tides & groundwater surges',
            text: 'Low-lying areas near Newark Bay, the Arthur Kill, and river corridors face slow drainage during nor’easters when high tide holds rainwater back.',
          },
          {
            title: 'Blocked yard & stairwell drains',
            text: 'Leaves and storm debris clog exterior basement stairwell drains, filling exterior wells faster than doors can hold water back.',
          },
          {
            title: 'Combined sewer or contaminated intrusion',
            text: 'When outdoor storm flooding triggers municipal sewer backups simultaneously, floodwater shifts into hazardous bio-contaminated waste requiring strict handling.',
          },
        ],
      },
      {
        kind: 'checklist',
        eyebrow: 'Safety First',
        title: 'Immediate precautions before flood cleanup starts',
        tone: 'warning',
        description:
          'Outdoor floodwater carries electrical, structural, and biological hazards—prioritize safety before stepping downstairs or moving heavy items.',
        items: [
          'Never step into floodwater near submerged breaker panels, water heaters, gas furnaces, or live floor outlets.',
          'Wear waterproof boots, heavy rubber gloves, and protective clothing—overland stormwater carries mud, road runoff, and bacteria.',
          'Photograph the highest water mark on walls, stairs, and appliances before removing water or discarding contents for flood-insurance records.',
          'Keep children, older family members, and pets completely out of muddy flooded rooms until cleanup and drying complete.',
          'If floodwater smells like sewage or rose from toilet/floor drains, stop and confirm availability by calling 908-677-5006 first.',
        ],
      },
      {
        kind: 'steps',
        eyebrow: 'Cleanup Process',
        title: 'How residential flood cleanup & restoration proceed',
        steps: [
          {
            title: 'High-water, electrical & source check',
            text: 'Verify utility safety first and trace whether flooding came cleanly over door thresholds, through cove joints, or backed up from floor drains.',
          },
          {
            title: 'Bulk flood water removal & silt clearing',
            text: 'Pump standing water off lower floors and shovel or rinse out loose flood mud, grit, and outdoor debris trapped in corners.',
          },
          {
            title: 'Removal of unsalvageable porous materials',
            text: 'Flood-soaked carpet, foam pad, saturated fiberglass insulation, and swollen drywall past the flood line are cut out and cleared—confirmed with you first.',
          },
          {
            title: 'Washing solid framing & concrete surfaces',
            text: 'Structural joists, masonry block, tile, and concrete slabs exposed to muddy outdoor floodwater are cleaned thoroughly before airflow pushes dust around.',
          },
          {
            title: 'Commercial dehumidification & dry checks',
            text: 'Run dehumidifiers and air movers until concrete slabs, sill plates, and remaining wall framing read completely dry.',
          },
        ],
      },
      {
        kind: 'comparison',
        eyebrow: 'Damaged Materials',
        title: 'What floodwater typically ruins vs. what can be cleaned and dried',
        description:
          'Porous finishes soak up fine silt and bacteria deeply inside pores where surface washing cannot reach.',
        left: {
          heading: 'Can Typically Be Cleaned & Structural Dried',
          tone: 'positive',
          items: [
            'Poured concrete floors, block basement walls, and brick piers',
            'Solid pressure-treated sill plates, floor joists, and exposed framing wood once washed and verified dry',
            'Glazed ceramic tile and solid non-porous metal or glass surfaces',
            'Elevated shelving and intact building frames sitting clearly above the waterline',
          ],
        },
        right: {
          heading: 'Often Unsalvageable After Dirty Overland Floodwater',
          tone: 'caution',
          items: [
            'Wall-to-wall carpet, area rugs, and open-cell sponge padding saturated in muddy water',
            'Swollen drywall bottom courses and wet wall insulation sitting at or below the flood line',
            'Particleboard vanities, laminated hollow-core doors, and MDF closet shelving',
            'Cardboard storage boxes, mattresses, upholstered furniture, and unsealed paper records',
          ],
        },
        // Rendered cleanly via panel below or dedicated check list
      },
      {
        kind: 'checklist',
        eyebrow: 'Flood Recovery Scope',
        title: 'Preparing for residential flood cleanup',
        items: [
          'Contact your insurance carrier right away—standard homeowner policies often differ from NFIP/separate flood policies.',
          'Ask a licensed electrician or HVAC technician to inspect submerged furnaces, water heaters, and outlets before restoring power.',
          'Hold off on throwing away major flood-damaged appliances or flooring until photographed for your adjuster.',
        ],
        panel: {
          heading: 'Flood damage cleanup work included',
          items: [
            'Phone intake covering flood height, mud/debris load, and room count',
            'Bulk flood water removal and loose outdoor silt clearing',
            'Confirmed removal of contaminated porous materials',
            'Cleaning of solid lower-level surfaces and full structural drying',
          ],
        },
      },
    ],
    faqHeading: 'Questions about residential flood cleanup',
    faqs: [
      {
        question: 'Is outdoor flood damage covered by standard homeowners insurance?',
        answer:
          'Most standard homeowners policies exclude rising outdoor storm or river floodwater unless you carry separate flood coverage. Photograph the high-water line immediately and call your agent to verify your policy terms.',
      },
      {
        question: 'Can carpet or lower drywall be saved if storm water only came in 2 inches?',
        answer:
          'Because overland stormwater carries bacteria and fine silt, porous materials like foam carpet pad, soaked carpet, and the bottom band of drywall usually cannot be sanitized safely in place. Call 908-677-5006 before cutting materials so we can walk through your options.',
      },
      {
        question: 'When is it safe to turn our furnace or basement breakers back on?',
        answer:
          'Never turn submerged electrical panels, outlets, or gas heating controls back on yourself. Have a licensed electrician and heating technician verify them dry and safe first.',
      },
      {
        question: 'What if mud came in with the storm runoff?',
        answer:
          'Tell us when calling 908-677-5006. Silt settles in wall track crevices and under floor coverings, so mud clearing and surface washing are factored in before high-velocity drying blowers run.',
      },
    ],
    relatedSlugs: ['water-extraction-elizabeth-nj', 'storm-damage-restoration-elizabeth-nj'],
  },
  {
    slug: 'basement-water-cleanup-elizabeth-nj',
    serviceSlug: 'basement-water-cleanup',
    title: 'Basement Water Cleanup Elizabeth NJ | G&O',
    description:
      'Basement flooding cleanup and basement water removal in Elizabeth, NJ for sump pump failures, foundation seepage, and floor drains. Call 908-677-5006.',
    h1: 'Basement Water Cleanup in Elizabeth, NJ',
    eyebrow: 'Basement Flooding Cleanup & Water Removal',
    intro: [
      'Because basements sit below street and yard grades, almost every storm runoff issue, sump failure, or utility-tank leak drains downward to the lowest slab first. In Elizabeth homes, flooded basements immediately threaten hot water tanks, boilers, laundry units, electrical panels, and finished basement family rooms.',
      'Effective basement flooding cleanup and basement water removal in Elizabeth, NJ do more than vacuum visible puddles off concrete. Lower-level spaces have limited natural cross-ventilation, so trapped humidity lingers behind paneling, under carpet padding, and inside cinderblock joints unless handled with deliberate moisture control.',
    ],
    sections: [
      {
        kind: 'cards',
        eyebrow: 'Basement Water Problems',
        title: 'Why Elizabeth basements take on water',
        items: [
          {
            title: 'Sump pump & power failures',
            text: 'A burned-out float switch, clogged discharge pipe, or storm blackout allows groundwater pit levels to rise rapidly across the floor.',
          },
          {
            title: 'Foundation cracks & cove seepage',
            text: 'Waterlogged soil around older fieldstone, block, or poured walls forces hydrostatic seepage through cracks, tie-rod holes, and the floor-wall joint.',
          },
          {
            title: 'Floor drain & laundry backups',
            text: 'Blocked main lines or surcharged neighborhood drains push gray or dirty wastewater backward through basement floor drains and utility tubs.',
          },
          {
            title: 'Hot water heater & boiler leaks',
            text: 'Corroded tank seams, burst washer hoses, and faulty pressure valves release continuous warm water onto unfinished or finished basement floors.',
          },
        ],
      },
      {
        kind: 'steps',
        eyebrow: 'What To Do First',
        title: 'First steps when you discover basement water—from discovery to drying',
        steps: [
          {
            title: 'Stop at the bottom step & check utility hazards',
            text: 'Look for water near your main breaker panel, furnace, gas water heater, or extension cords before stepping onto wet concrete.',
          },
          {
            title: 'Determine whether water is clean plumbing or external/drain backup',
            text: 'Close a cold-water shutoff if a washing machine or water heater failed; note if rain is pushing through walls or rising up a floor drain.',
          },
          {
            title: 'Lift dry belongings onto shelves or blocks',
            text: 'If power is safe, elevate cardboard boxes, fabric bins, and wooden furniture legs out of shallow water before capillary wicking climbs higher.',
          },
          {
            title: 'Execute bulk basement water removal',
            text: 'Our crew pumps deeper water and extracts soaked basement carpet, tile, or concrete slabs before dampness spreads up perimeter drywall.',
          },
          {
            title: 'Below-grade structural drying & moisture control',
            text: 'Closed-space commercial dehumidifiers lower damp basement humidity and dry framing plates, paneled walls, and masonry where natural air stands still.',
          },
        ],
      },
      {
        kind: 'comparison',
        eyebrow: 'Unfinished vs. Finished',
        title: 'How basement cleanup differs by layout',
        left: {
          heading: 'Unfinished Concrete & Utility Basements',
          tone: 'neutral',
          items: [
            'Clearing water quickly away from furnace burners, water heater bases, and washer platforms',
            'Removing saturated cardboard storage while leaving open framing accessible for airflow',
            'Pumping stagnant concrete depressions and cove joints clean',
            'Monitoring masonry block moisture so stored items don’t grow musty later',
          ],
        },
        right: {
          heading: 'Finished Basements & Lower-Level Apartments',
          tone: 'caution',
          items: [
            'Checking moisture wicking upward behind drywall, wood paneling, and vinyl baseboards',
            'Assessing saturated carpet padding or warped floating laminate/vinyl plank joints',
            'Removing waterlogged trim or relief-venting wet wall bottoms when cavities hold trapped moisture',
            'Dehumidifying enclosed basement closets, stair stringers, and bathroom alcoves thoroughly',
          ],
        },
      },
      {
        kind: 'checklist',
        eyebrow: 'Prevention & Scope',
        title: 'Practical steps to help prevent repeat basement water problems',
        description:
          'Cleanup fixes today’s water damage—pairing good drying with simple exterior and utility habits lowers the odds of repeat basement flooding.',
        items: [
          'Keep roof gutters clean and add downspout extensions discharging several feet away from your foundation walls.',
          'Clear leaves from exterior stairwell trench drains and cover below-grade window wells securely before heavy rain.',
          'Test your sump pump float regularly and ask a licensed plumber about a battery-backed pump before storm season.',
          'Replace cardboard basement storage boxes on concrete with sealed plastic totes on raised metal or resin shelving.',
        ],
        panel: {
          heading: 'Basement cleanup work included',
          items: [
            'Basement water removal from concrete, tile, and carpeted lower levels',
            'Drying of finished drywall bottoms, wood framing plates, and subfloor assemblies',
            'Moisture checks behind paneling and around basement utility chases',
            'Coordination guidance whenever sump pump or drain plumbing repair is also needed',
          ],
        },
      },
    ],
    faqHeading: 'Basement flooding cleanup questions',
    faqs: [
      {
        question: 'Can you help if my sump pump stopped working during a storm?',
        answer:
          'Yes—our team removes the standing basement water and dries wet lower walls and flooring. Replacing or upgrading the sump pump itself requires a licensed plumber, so ask about coordinating both.',
      },
      {
        question: 'Why does my basement still smell musty weeks after mopping up puddles?',
        answer:
          'Surface mopping misses water soaked underneath foam carpet pad, inside hollow paneling furring strips, or inside wood framing plates touching damp concrete slabs. Commercial dehumidification and moisture checks find and resolve hidden pockets.',
      },
      {
        question: 'If water seeped through concrete block walls, does concrete need drying too?',
        answer:
          'Cinderblock and concrete stay damp longer than upper-level wood. While solid concrete isn’t harmed like drywall, basement dehumidification lowers airborne humidity so dampness doesn’t condense on stored belongings or framing.',
      },
      {
        question: 'What if water backed up out of our basement floor drain?',
        answer:
          'Floor drain backups may carry contaminated sewer water rather than clean storm runoff. Avoid skin contact, call a drain plumber to clear the blockage, and call 908-677-5006 so we can confirm availability for contaminated cleanup.',
      },
    ],
    relatedSlugs: ['water-extraction-elizabeth-nj', 'structural-drying-elizabeth-nj'],
  },
  {
    slug: 'water-damage-inspection-elizabeth-nj',
    serviceSlug: 'water-damage-inspection',
    title: 'Water Damage Inspection Elizabeth NJ | G&O',
    description:
      'Water damage assessment and moisture inspection in Elizabeth, NJ for ceiling stains, warped floors, and hidden leaks. Call 908-677-5006.',
    h1: 'Water Damage Inspection in Elizabeth, NJ',
    eyebrow: 'Water Damage Assessment & Moisture Inspection',
    intro: [
      'Many water losses never flood an entire room at once. Instead, a slow shower-pan drip, pin-hole copper line, or roof flashing gap signals trouble quietly through a discolored ceiling ring, blistering baseboard paint, buckled oak floorboards, or a stubborn musty odor near cabinets.',
      'Scheduling a water damage assessment and moisture inspection in Elizabeth, NJ gives you real measurements before tearing open undamaged drywall—or covering damp framing with fresh paint. Call 908-677-5006 to describe the signs you noticed.',
    ],
    sections: [
      {
        kind: 'cards',
        eyebrow: 'Inspection Signs',
        title: 'Clues that point to hidden moisture behind finished surfaces',
        items: [
          {
            title: 'Stains, rings & bubbling paint',
            text: 'Discolored halos on drywall ceilings or paint peeling near shower trims and exterior windows reveal slow migration above or behind the wall.',
          },
          {
            title: 'Cupped hardwood & soft spots',
            text: 'Hardwood planks curling upward at edges, loose vinyl seams, or spongy subfloors near dishwashers and refrigerators indicate subfloor saturation.',
          },
          {
            title: 'Recurring musty odors',
            text: 'Damp smells inside sink vanities, hallway closets, or finished basements often come from hidden wet framing behind cabinets or paneling.',
          },
          {
            title: 'Verifying a prior repair dried cleanly',
            text: 'Before contractors hang new sheetrock or install flooring after a pipe break, moisture checks confirm residual wood framing is actually safe.',
          },
        ],
      },
      {
        kind: 'comparison',
        eyebrow: 'Moisture Detection',
        title: 'What eyes miss vs. what moisture inspection tools verify',
        left: {
          heading: 'Visible Clues & Surface Touch',
          tone: 'caution',
          items: [
            'Latex paint and glazed bathroom tile feel cool and completely dry even when gypsum and studs behind them are soaked',
            'Water tracks downward along beams and joists and frequently stains a ceiling several feet away from the actual plumbing leak',
            'Touching wet insulation or concrete by hand cannot distinguish safe humidity from active saturation',
          ],
        },
        right: {
          heading: 'Pin & Non-Invasive Moisture Meters',
          tone: 'positive',
          items: [
            'Pinless dielectric scanners detect elevated moisture behind finished drywall, tile, and hardwood without poking holes in dry sections',
            'Calibrated pin meters test deeper inside exposed lumber, sill plates, and subfloor joints to measure exact moisture percentage',
            'Reading unaffected dry areas in the same house provides an accurate local target so damp zones aren’t misdiagnosed',
          ],
        },
      },
      {
        kind: 'steps',
        eyebrow: 'Inspection Procedure',
        title: 'How a moisture inspection runs on site',
        steps: [
          {
            title: 'Phone symptom & leak history intake',
            text: 'When you call 908-677-5006, we review when stains appeared, past plumbing fixes, and whether moisture returns only during storms or daily fixture use.',
          },
          {
            title: 'Visual path trace from potential sources',
            text: 'Inspect rooms directly above, adjacent to, and beneath discolored surfaces—checking under sinks, around radiator valves, and along exterior walls.',
          },
          {
            title: 'Dry reference baseline testing',
            text: 'Measure unaffected drywall, plaster, and flooring in a dry section of your property so meter readings have an honest baseline.',
          },
          {
            title: 'Systematic moisture mapping',
            text: 'Move outward from the center of visible damage until readings drop back to normal dry levels, pinpointing exact wet boundaries.',
          },
          {
            title: 'Plain-language review of practical options',
            text: 'Explain clearly what is actively wet versus historic staining, whether a licensed plumber or roofer is needed to stop an active leak, and whether drying in place makes sense.',
          },
        ],
      },
      {
        kind: 'checklist',
        eyebrow: 'Documentation & Clarity',
        title: 'What assessment observations help you decide cleanly',
        items: [
          'Distinguishes active ongoing plumbing or roof seepage from older stains that are already dry.',
          'Pinpoints exactly which wall bays, ceiling joists, or flooring boards hold trapped moisture rather than guessing.',
          'Helps clarify whether targeted structural drying is sufficient or whether wet drywall/cabinets must come out.',
          'Provides factual moisture findings and observations you can share clearly with repair contractors or insurers.',
        ],
        panel: {
          heading: 'Inspection assessment work included',
          items: [
            'Phone intake covering leak history and visible symptoms',
            'Visual and moisture-meter inspection across affected walls, ceilings, and floors',
            'Mapping wet perimeter zones against dry reference readings',
            'Straightforward guidance on plumbing checks, drying steps, or repair readiness',
          ],
        },
      },
    ],
    faqHeading: 'Questions about moisture inspections',
    faqs: [
      {
        question: 'Is a water damage inspection the same as full restoration?',
        answer:
          'No. A water damage assessment diagnoses where moisture is located and how far it spread. Structural drying or removal only begins if needed and approved after reviewing the findings with you.',
      },
      {
        question: 'Can you fix a hidden leaking pipe during the inspection?',
        answer:
          'Repairing active supply lines, shower pans, or drain pipes requires a licensed plumber, and roof gaps require a roofer. We trace moisture impact across building materials so you and your plumber know where the wet zone starts and ends.',
      },
      {
        question: 'Will a moisture inspection damage my walls or tile?',
        answer:
          'Non-invasive scanning meters check behind painted drywall and tile without holes. Minimal pin checks or access openings are only discussed with you when wood depth or hidden cavity confirmation requires them.',
      },
      {
        question: 'My ceiling stain is completely dry to the touch—do I still need a check?',
        answer:
          'Often old dry stains only need cosmetic priming once the roof or pipe fix is confirmed, while intermittent leaks stay wet inside ceiling joists between uses. A moisture check settles whether hidden framing is still damp.',
      },
    ],
    relatedSlugs: ['structural-drying-elizabeth-nj', 'burst-pipe-water-damage-elizabeth-nj'],
  },
  {
    slug: 'burst-pipe-water-damage-elizabeth-nj',
    serviceSlug: 'burst-pipe-water-damage',
    title: 'Burst Pipe Water Damage Elizabeth NJ | G&O',
    description:
      'Burst pipe cleanup and water leak damage restoration in Elizabeth, NJ after frozen pipes or ruptured supply lines. Call 908-677-5006.',
    h1: 'Burst Pipe Water Damage Cleanup in Elizabeth, NJ',
    eyebrow: 'Burst Pipe Cleanup & Water Leak Damage Restoration',
    intro: [
      'A residential water supply line holds constant household pressure—so when an exterior-wall pipe splits during a hard freeze or an under-sink braided hose fails, water pours continuously inside stud bays, floor joists, and lower ceilings until the main shutoff closes.',
      'Even after a licensed plumber stops the leak, gallons of water remain trapped inside ceiling cavities, soaked insulation, cabinet bases, and carpet pads. G&OwaterDamage provides burst pipe cleanup and water leak damage restoration in Elizabeth, NJ to extract water and dry structural framing properly. Call 908-677-5006 once shutoff is underway.',
    ],
    sections: [
      {
        kind: 'cards',
        eyebrow: 'Burst Pipe Signs',
        title: 'Warning signs of an active or thawing pipe break',
        items: [
          {
            title: 'Sudden drop in faucet pressure',
            text: 'If water trickles weakly from taps—or only cold/hot pressure drops abruptly during freezing weather—an upstream pipe may be leaking inside a wall.',
          },
          {
            title: 'Hissing or running water inside walls',
            text: 'Hearing faint spraying behind drywall or basement ceilings when every faucet and appliance is turned off points to an active supply rupture.',
          },
          {
            title: 'Bulging ceiling drywall & active drips',
            text: 'Paint blistering into water-filled bubbles or water dripping around light cans signals pooled water above an upstairs pipe break.',
          },
          {
            title: 'Frozen exterior-wall pipes thawing',
            text: 'Many winter breaks happen in uninsulated kitchens, crawlspaces, or garage walls—often staying silent until daytime temperatures thaw the ice plug.',
          },
        ],
      },
      {
        kind: 'steps',
        eyebrow: 'Immediate Shutoff & Safety',
        title: 'What to do immediately when a pipe bursts',
        description: 'Every second the valve stays open adds volume behind walls—take these five steps in order.',
        steps: [
          {
            title: 'Close the fixture valve or main home water shutoff',
            text: 'Turn the quarter-turn ball lever perpendicular to the pipe—or spin the round gate valve clockwise—near where the water meter enters your basement.',
          },
          {
            title: 'Turn off electrical breakers in wet zones',
            text: 'If water drips near ceiling lights, fans, outlets, or basement electrical panels, shut off those circuits at the main breaker safely.',
          },
          {
            title: 'Relieve line pressure & contain ceiling drips',
            text: 'Once the main shutoff is closed, opening the lowest cold faucet in the basement helps drain remaining pipe pressure; set buckets under ceiling drips.',
          },
          {
            title: 'Call a licensed plumber to repair the ruptured pipe',
            text: 'Permanent pipe clamping, soldering, or repiping ensures water stays off cleanly while drying begins.',
          },
          {
            title: 'Photograph rooms & call 908-677-5006',
            text: 'Capture wide photos for your insurer and call G&OwaterDamage so bulk extraction and wall cavity drying get scheduled promptly.',
          },
        ],
      },
      {
        kind: 'comparison',
        eyebrow: 'Extraction vs. Structural Recovery',
        title: 'Addressing surface water vs. trapped wall and ceiling dampness',
        left: {
          heading: 'Prompt Water Extraction on Floors',
          tone: 'positive',
          items: [
            'Pumping and extracting pooled supply water off hardwood planks, tile, and carpet right away',
            'Evaluating soaked carpet padding so trapped moisture doesn’t soak plywood subfloors overnight',
            'Moving base trim or furniture blocks gently to protect wood flooring from black stain marks',
          ],
        },
        right: {
          heading: 'Damaged Drywall, Insulation & Structural Drying',
          tone: 'caution',
          items: [
            'Inspecting sagging ceiling sheetrock safely rather than leaving wet insulation holding weight overhead',
            'Removing waterlogged insulation batts inside burst-pipe stud bays when wet material cannot dry in place',
            'Injecting controlled airflow and dehumidification across framing joists and under kitchen toe-kicks',
          ],
        },
      },
      {
        kind: 'checklist',
        eyebrow: 'Restoration Scope',
        title: 'Why wall and ceiling cavities still need drying after pipe repair',
        items: [
          'A plumber stops new pressurized water—they do not extract soaked carpet or dry saturated subflooring and ceiling joists.',
          'Water from a second-floor bathroom pipe break often travels across basement ceiling beams far from the room directly below.',
          'Closed drywall cavities and toe-kick spaces under vanities need moisture checks so trapped water does not trigger odor weeks later.',
          'Waiting for dry-meter verification before patching sheetrock prevents tape blisters and concealed framing rot.',
        ],
        panel: {
          heading: 'Burst pipe cleanup work included',
          items: [
            'Standing water extraction from carpets, hard floors, and lower rooms',
            'Guided removal of sagging ceiling drywall or soaked cavity insulation when needed',
            'Structural drying across stud bays, floor joists, and cabinet toe-kicks',
            'Moisture verification across rooms above and below the rupture',
          ],
        },
      },
    ],
    faqHeading: 'Questions about water leak damage restoration',
    faqs: [
      {
        question: 'Should I call a plumber first or G&OwaterDamage first when a pipe bursts?',
        answer:
          'Shut off your main water valve right away, then contact a licensed plumber to repair the broken line and call 908-677-5006 so burst pipe cleanup and structural drying can start promptly once water is stopped.',
      },
      {
        question: 'Do soaked drywall ceilings always have to be torn down after a pipe leak?',
        answer:
          'Sagging, waterlogged sheetrock holding heavy soaked fiberglass insulation usually needs controlled removal for safety and proper drying. Mildly damp walls without sagging can sometimes be dried in place depending on moisture checks.',
      },
      {
        question: 'Can frozen pipes burst without flooding until they thaw?',
        answer:
          'Yes—ice expands and splits copper or PVC silently inside cold walls, but water stays frozen behind the plug until temperatures rise and pressurized flow suddenly releases.',
      },
      {
        question: 'What about water trapped underneath our kitchen island or bathroom vanity?',
        answer:
          'Toe-kick cavities hold pooled water directly against wood subfloors and cabinet frames. Drying inspections check behind base trim and toe-kicks so hidden dampness is vented and dried.',
      },
    ],
    relatedSlugs: ['water-extraction-elizabeth-nj', 'structural-drying-elizabeth-nj'],
  },
  {
    slug: 'sewage-cleanup-elizabeth-nj',
    serviceSlug: 'sewage-cleanup',
    title: 'Sewage Cleanup Elizabeth NJ | G&O',
    description:
      'Sewage backup cleanup and contaminated water cleanup guidance in Elizabeth, NJ. Call 908-677-5006 to confirm availability before handling sewage.',
    h1: 'Sewage Cleanup Services in Elizabeth, NJ',
    eyebrow: 'Sewage Backup & Contaminated Water Cleanup',
    intro: [
      'A backup from a toilet, basement floor drain, or main sewer stack introduces untreated wastewater carrying pathogens, hazardous bacteria, and gases—classified strictly as contaminated water rather than a clean plumbing leak. Everyday cleaning supplies, shop vacs, and household fans can spread contamination rather than contain it.',
      'Because sewage backup cleanup and contaminated water cleanup depend on the site conditions and exact scope involved, availability must be confirmed directly by phone. Do not wade into or scrub raw sewage yourself—call 908-677-5006 first so our team can confirm whether we can handle your situation and walk through immediate safety steps.',
    ],
    sections: [
      {
        kind: 'cards',
        eyebrow: 'Backup Causes',
        title: 'Why sewage backups occur in Elizabeth properties',
        items: [
          {
            title: 'Root-blocked or settled sewer laterals',
            text: 'Mature street trees send roots into older clay or cast-iron main lines running from the house to the municipal street sewer, choking waste flow backward.',
          },
          {
            title: 'Surging storm & combined drains',
            text: 'Heavy downpours can overload older urban combined sewer systems and force wastewater backward up through the lowest basement floor drains or toilets.',
          },
          {
            title: 'Grease, scale & wipe clogs',
            text: 'Accumulated kitchen grease, rust scale, and non-degradable wipes form stubborn blockages that send sink and shower drain water into lower units.',
          },
          {
            title: 'Broken drain stacks & check-valve failures',
            text: 'Cracked cellar waste lines or stuck backwater valves release raw sewage directly into crawlspaces, utility rooms, or lower halls.',
          },
        ],
      },
      {
        kind: 'checklist',
        eyebrow: 'Health & Safety Rules',
        title: 'Critical health precautions during a sewage backup',
        tone: 'warning',
        description:
          'Protecting household occupants or tenants comes first—contaminated water spreads illness via direct skin contact and airborne aerosols.',
        items: [
          'Vacate affected rooms immediately and keep children, elderly residents, and pets completely out of the contaminated zone.',
          'NEVER run central HVAC heating/cooling blowers or household box fans near sewage—airflow distributes contaminants through ductwork and hallways.',
          'Do not flush toilets, run washing machines, or drain tubs until a licensed drain plumber verifies the main sewer line is clear.',
          'Avoid trying to mop soaked carpet or porous materials with household bleach alone; bleach loses effectiveness on heavy organic waste and misses porous backing.',
          'Isolate electrical breakers serving lower rooms from a dry spot if safe, and call 908-677-5006 before disturbing waste.',
        ],
      },
      {
        kind: 'steps',
        eyebrow: 'Cleanup Procedure',
        title: 'How proper sewage cleanup, removal and sanitization work',
        description:
          'When sewage service is confirmed for your property, contaminated water cleanup follows strict containment and removal order.',
        steps: [
          {
            title: 'Phone availability confirmation & line clearance',
            text: 'Call 908-677-5006 to confirm sewage availability for your Elizabeth property while arranging a licensed plumber to snake and clear the clogged drain line.',
          },
          {
            title: 'Contaminated waste extraction',
            text: 'Bulk sewage liquid and solid residue are extracted cleanly under containment precautions rather than pushed into household floor drains.',
          },
          {
            title: 'Removal & sealed disposal of porous materials',
            text: 'Unsalvageable carpet, pad, soaked drywall, insulation, and contaminated soft goods are carefully removed and bagged for sanitary disposal.',
          },
          {
            title: 'Thorough washing & sanitization of solid surfaces',
            text: 'Remaining concrete slabs, ceramic tile, brick, and solid structural lumber receive physical washing and antimicrobial sanitization treatment.',
          },
          {
            title: 'Controlled structural drying & odor checks',
            text: 'Once sanitized surfaces are safe, drying and dehumidification bring structural wood and concrete back to normal moisture levels.',
          },
        ],
      },
      {
        kind: 'comparison',
        eyebrow: 'Affected Materials',
        title: 'Materials touched by sewage: discard vs. sanitize',
        description:
          'With raw sewage contact, health standards draw a firm line between porous materials that trap pathogens and hard surfaces that can be cleaned.',
        left: {
          heading: 'Porous Items That Require Removal',
          tone: 'caution',
          items: [
            'Carpeting, foam cushions, area rugs, and upholstery touched by sewer water',
            'Sheetrock, plaster, wallpaper, and wall insulation touched at or near the backup level',
            'Cardboard boxes, paper files, stuffed toys, and unfinished particleboard trim',
            'Exposed mattresses, linens, or porous wood furniture legs sitting in wastewater',
          ],
        },
        right: {
          heading: 'Non-Porous & Structural Materials Sanitized',
          tone: 'positive',
          items: [
            'Poured concrete basement slabs and masonry block walls after physical soil removal',
            'Glazed ceramic tile, porcelain fixtures, and sealed metal shelving',
            'Solid framing wood studs and joists after contaminated porous cladding is cleared, cleaned, and sanitized',
            'Glass, hard plastic bins, and washable tools cleaned and disinfected outside the zone',
          ],
        },
      },
      {
        kind: 'checklist',
        eyebrow: 'Phone Confirmation',
        title: 'Details to share when calling about a sewage backup',
        items: [
          'Which basement drain, toilet, or lower-level room overflowed and roughly how wide it spread.',
          'Whether sewage is still rising or a plumber has already cleared or diagnosed the main drain line.',
          'Whether affected floors are bare concrete, tile, carpet, or finished living rooms.',
        ],
        panel: {
          heading: 'Confirm sewage cleanup by phone first',
          items: [
            'Direct phone review of backup conditions and location in Elizabeth',
            'Immediate safety guidance to protect residents and shut down HVAC circulation',
            'Honest confirmation of whether G&OwaterDamage is available for your sewage cleanup scope',
          ],
          note: 'Please call 908-677-5006 before entering or touching backup water so we can confirm availability for your property.',
        },
      },
    ],
    faqHeading: 'Questions about sewage backup cleanup & safety',
    faqs: [
      {
        question: 'Can I clean a small basement sewer backup myself with bleach and a mop?',
        answer:
          'Attempting contaminated water cleanup yourself carries serious bacterial and respiratory exposure risks, and porous drywall or carpet cannot be made safe with household bleach. Call 908-677-5006 first to confirm whether our team can assist.',
      },
      {
        question: 'Does G&OwaterDamage snake or clear the clogged main sewer pipe?',
        answer:
          'Clearing root blockages, collapsed sewer laterals, or broken drain stacks requires a licensed plumber or drain specialist. Once the line flow is restored, cleanup and sanitization can finish cleanly.',
      },
      {
        question: 'Why must I turn off the furnace or AC fans when sewage backs up in the basement?',
        answer:
          'Basement HVAC return leaks or circulation fans pull contaminated mist and sewer gas upward into bedrooms and living rooms throughout the entire building.',
      },
      {
        question: 'Is greywater from a washing machine backup treated the same as raw toilet sewage?',
        answer:
          'Drain backups that sit stagnant or carry mixed drain-pipe waste still harbor contaminants and odors. Tell us the exact source when you call 908-677-5006 so we can advise accurately.',
      },
    ],
    relatedSlugs: ['basement-water-cleanup-elizabeth-nj', 'water-damage-restoration-elizabeth-nj'],
  },
  {
    slug: 'storm-damage-restoration-elizabeth-nj',
    serviceSlug: 'storm-damage-restoration',
    title: 'Storm Damage Restoration Elizabeth NJ | G&O',
    description:
      'Storm water damage cleanup after rainwater intrusion, roof leaks, and wind damage in Elizabeth, NJ. Drying wet attics and ceilings. Call 908-677-5006.',
    h1: 'Storm Damage Restoration in Elizabeth, NJ',
    eyebrow: 'Storm Water Damage Cleanup & Rainwater Intrusion',
    intro: [
      'Coastal nor’easters, heavy windstorms, and rapid summer downpours attack buildings from top to bottom at the exact same moment—peeling roof shingles or valley flashing overhead, driving rainwater intrusion past upper window frames, overflowing clogged gutters, and pushing runoff toward basement entries.',
      'Once exterior openings are secured against new rain, G&OwaterDamage helps Elizabeth property owners with interior storm water damage cleanup—removing standing indoor water, protecting drenched ceilings, and drying wet attic joists, insulation bays, and wall framing thoroughly. Call 908-677-5006 once safe.',
    ],
    sections: [
      {
        kind: 'cards',
        eyebrow: 'Types of Storm Damage',
        title: 'How severe weather sends rainwater inside Elizabeth buildings',
        items: [
          {
            title: 'Roof shingle, valley & flashing leaks',
            text: 'High wind gusts lift aged shingles or pry loose flashing around chimneys, vent boots, and skylights, sending rainwater across attic rafters.',
          },
          {
            title: 'Wind-driven window & siding breaches',
            text: 'Driving sideways rain forces water through weathered window glazing, loose trim, or cracked siding joints straight into wall stud cavities.',
          },
          {
            title: 'Overflowing gutters & fascia backup',
            text: 'Storm-clogged gutters overflow behind fascia boards and along exterior walls, soaking upper soffits while cascading down toward foundation walls.',
          },
          {
            title: 'Storm flooding in lower entries',
            text: 'Intense rainfall exceeds yard and street drainage, sending muddy stormwater under walk-out basement doors and low garage thresholds.',
          },
        ],
      },
      {
        kind: 'steps',
        eyebrow: 'Immediate Storm Steps',
        title: 'Safe response steps during and right after a storm',
        steps: [
          {
            title: 'Prioritize lightning, wind & sagging-ceiling safety',
            text: 'Never climb onto wet roofs during storms or stand directly underneath heavy sagging wet drywall ceilings near light fixtures.',
          },
          {
            title: 'Contain indoor drips & protect belongings',
            text: 'Catch active leaks with wide tubs or buckets, pull drapes up off wet sills, and shift furniture, rugs, and electronics to dry interior rooms.',
          },
          {
            title: 'Secure exterior roof tarping or boarding once winds drop',
            text: 'Have a licensed roofer or storm contractor install temporary tarping over roof breaches or seal broken glass so subsequent rain stays outside.',
          },
          {
            title: 'Document exterior openings & interior rooms',
            text: 'Take clear photos of fallen branches, missing shingles visible from ground level, and every stained ceiling or soaked carpet for insurance claims.',
          },
          {
            title: 'Call 908-677-5006 for interior cleanup & drying',
            text: 'Share whether water entered the attic, upper walls, basement, or all three so our crew can discuss interior water removal and drying.',
          },
        ],
      },
      {
        kind: 'comparison',
        eyebrow: 'Water Intrusion Paths',
        title: 'How rainwater travels from roof leaks vs. window/wall leaks',
        left: {
          heading: 'Attics, Rafters & Top-Floor Ceilings',
          tone: 'caution',
          items: [
            'Wet attic fiberglass or blown cellulose insulation acts like a thick sponge resting directly on top of upstairs bedroom ceilings',
            'Rainwater tracks sideways along pitched roof rafters and drips through ceiling drywall light boxes far from the roof tear',
            'Unconditioned attic framing can develop dark wood staining quickly if saturated insulation isn’t opened or dried cleanly',
          ],
        },
        right: {
          heading: 'Window Bays, Exterior Walls & Lower Floors',
          tone: 'neutral',
          items: [
            'Wind-blown rain slipping behind window framing runs straight down vertical studs without staining upper drywall until it pools on lower sills or baseboards',
            'Multi-story walls collect moisture inside exterior fiberglass batts where simple room fans cannot circulate',
            'When upper runoff merges with basement storm seepage, lower walls absorb water from both sides simultaneously',
          ],
        },
      },
      {
        kind: 'checklist',
        eyebrow: 'Storm Cleanup & Restoration',
        title: 'How interior storm water damage cleanup finishes cleanly',
        items: [
          'Exterior roof patching or window boarding must keep new rain out so structural dehumidification does not fight fresh leaks.',
          'Waterlogged attic insulation and bulging ceiling sheetrock are evaluated honestly with you rather than left dripping overhead.',
          'Attic rafters, wall cavities, and lower flooring are dried down to normal moisture targets before painters or drywall contractors close rooms.',
          'We stay clear about scope boundaries—handling interior water removal and drying while exterior roofing/siding work goes to licensed roofers.',
        ],
        panel: {
          heading: 'Storm water cleanup work included',
          items: [
            'Phone assessment of storm intrusion points across attics, walls, and basements',
            'Standing water extraction and ceiling-leak cleanup inside residential or commercial interiors',
            'Dehumidification and targeted airflow for soaked joists, studs, and subfloors',
            'Moisture-meter verification once exterior openings are temporarily or permanently covered',
          ],
        },
      },
    ],
    faqHeading: 'Questions about storm water damage cleanup',
    faqs: [
      {
        question: 'Do you perform exterior roof patching, shingle replacement, or window installation?',
        answer:
          'Exterior structural roofing, siding, and window replacement are handled by licensed roofing and glazing contractors. G&OwaterDamage focuses on interior storm water damage cleanup, water extraction, and structural drying once the opening is covered.',
      },
      {
        question: 'Should I wait until a multi-day storm stops completely before calling?',
        answer:
          'Stay safe indoors during lightning and high winds, then call 908-677-5006 as soon as safe so we can advise on safe drip containment and schedule assessment promptly as weather clears.',
      },
      {
        question: 'Why does roof rainwater dripping through an attic sometimes smell worse than a pipe leak?',
        answer:
          'Rainwater washing through dusty attic rafters, bird/animal-exposed soffits, and aged insulation carries organic dust and debris downward, requiring thorough cleanup of soggy drywall/insulation and proper drying.',
      },
      {
        question: 'A ceiling bubble feels soft after heavy rain—should I puncture it myself?',
        answer:
          'Be very cautious—only consider carefully catching water if electrical fixtures are powered off and the ceiling isn’t bowing dangerously. Large soaked sheetrock spans can collapse unexpectedly if heavy insulation sits on top.',
      },
    ],
    relatedSlugs: ['flood-damage-cleanup-elizabeth-nj', 'structural-drying-elizabeth-nj'],
  },
  {
    slug: 'commercial-water-damage-restoration-elizabeth-nj',
    serviceSlug: 'commercial-water-damage-restoration',
    title: 'Commercial Water Damage Restoration Elizabeth NJ | G&O',
    description:
      'Commercial flood cleanup and business water damage restoration for retail stores, offices, and warehouses in Elizabeth, NJ. Call 908-677-5006.',
    h1: 'Commercial Water Damage Restoration in Elizabeth, NJ',
    eyebrow: 'Commercial Flood Cleanup & Business Restoration',
    intro: [
      'When water enters a storefront, office suite, medical clinic, restaurant, or warehouse in Elizabeth, damage extends far beyond drywall and flooring—every hour wet disrupts daily revenue, threatens inventory and IT hardware, and complicates landlord or multi-tenant coordination.',
      'G&OwaterDamage delivers commercial flood cleanup and business water damage restoration tailored to commercial layouts, large floor extraction, suspended ceiling leaks, and practical scheduling discussions. Call 908-677-5006 to share your square footage, building access needs, and affected zones.',
    ],
    sections: [
      {
        kind: 'cards',
        eyebrow: 'Commercial Water Causes',
        title: 'Frequent water damage causes in commercial properties',
        items: [
          {
            title: 'Flat-roof ponding & clogged drains',
            text: 'Blocked scuppers or cracked rubber membranes on commercial roofs saturate suspended acoustic ceiling grids across large bays.',
          },
          {
            title: 'Rooftop HVAC & condensate overflows',
            text: 'Clogged condensate pans or burst chilled-water coils dump water quietly above server closets, lighting grids, and hallway suites.',
          },
          {
            title: 'Restroom, breakroom & ice-line failures',
            text: 'High-traffic flush valves, commercial water heaters, coffee-line tees, and ice makers fail overnight and flood neighboring tenant spaces.',
          },
          {
            title: 'Storefront & loading dock storm runoff',
            text: 'Heavy rain pushing across flat commercial parking lots enters ground-level retail thresholds and warehouse loading bays.',
          },
        ],
      },
      {
        kind: 'steps',
        eyebrow: 'Business Response & Extraction',
        title: 'First-hour business response through large-scale extraction & drying',
        steps: [
          {
            title: 'Protect electrical panels, POS stations & server rooms',
            text: 'Shut down power safely around submerged floor boxes, computer workstations, and commercial breaker panels before staff enter wet rooms.',
          },
          {
            title: 'Close building water or mechanical unit valves',
            text: 'Isolate the leaking restroom riser, breakroom supply, or rooftop condensate unit—or alert building management immediately.',
          },
          {
            title: 'Elevate boxed stock & preserve commercial records',
            text: 'Shift palletized inventory, client files, and retail displays out of damp bays and keep separate photo logs of property vs. damaged merchandise.',
          },
          {
            title: 'Large-scale standing water extraction',
            text: 'Extract pooled water rapidly across open VCT tile, warehouse concrete, and low-pile commercial glue-down carpet to halt corridor spread.',
          },
          {
            title: 'Commercial drying & drop-ceiling dehumidification',
            text: 'Safely clear sagging wet acoustic ceiling tiles, ventilate metal/wood partition walls, and deploy commercial dehumidification calibrated for larger open cubic volume.',
          },
        ],
      },
      {
        kind: 'comparison',
        eyebrow: 'Drying vs. Continuity',
        title: 'Handling wide commercial buildings while minimizing operational downtime',
        left: {
          heading: 'Large-Scale Commercial Extraction & Drying',
          tone: 'positive',
          items: [
            'Clearing water along long corridor base coves, partition drywall, and wide open retail floors',
            'Removing water-logged acoustic ceiling tiles rather than letting damp insulation collapse onto desks',
            'Managing larger commercial air volume so residual humidity doesn’t rust metal racking or warp office doors',
            'Tracking moisture completion cleanly so commercial flooring and drywall vendors can mobilize promptly',
          ],
        },
        right: {
          heading: 'Business Continuity & Recovery Planning',
          tone: 'neutral',
          items: [
            'Keeping unaffected offices or retail aisles open when wet rooms can be physically isolated cleanly',
            'Confirming after-hours, loading-dock, or early-morning arrival availability by phone based on crew schedule',
            'Coordinating clear phone communication between tenants, property managers, and commercial building owners',
            'Providing clear scope descriptions and factual observations to streamline commercial claim discussions',
          ],
        },
      },
      {
        kind: 'checklist',
        eyebrow: 'Recovery Planning',
        title: 'What helps speed up your commercial recovery call',
        items: [
          'Confirm who holds authorization (business tenant, commercial property manager, or building owner) so site access isn’t delayed.',
          'Note affected square footage, flooring surfaces (tile, concrete, commercial carpet), and any critical IT/server rooms nearby.',
          'Let us know building security rules, keyholder contacts, or loading-bay hours when scheduling checks.',
          'Arrange qualified HVAC or commercial plumbing/roofing pros in parallel when roof membranes or mechanical units caused the leak.',
        ],
        panel: {
          heading: 'Commercial mitigation work included',
          items: [
            'Phone intake covering facility layout, floor materials, and access requirements',
            'Commercial flood cleanup and wide-area water extraction',
            'Partition wall, stockroom, and ceiling-drop structural drying',
            'Flexible scheduling options discussed around your business operations',
          ],
        },
      },
    ],
    faqHeading: 'Business water damage restoration questions',
    faqs: [
      {
        question: 'Can work or equipment checks be arranged outside regular customer hours?',
        answer:
          'Scheduling windows depend on building access and active crew availability. Call 908-677-5006 to discuss low-traffic, early-morning, or after-hours scheduling for your shop or office.',
      },
      {
        question: 'An overhead HVAC unit leaked across our suspended drop ceiling—can drying stay open for staff?',
        answer:
          'Whether unaffected office bays stay usable depends on electrical safety, damp ceiling tile containment, and equipment layout. Removing wet drop tiles and isolating the wet wing often preserves partial access safely.',
      },
      {
        question: 'What documentation should our business keep for a commercial property claim?',
        answer:
          'Keep clear before-cleanup photos of wet building surfaces separately from damaged inventory lists, invoices for temporary plumbing/HVAC shutdowns, and contact details for your commercial policy carrier or landlord.',
      },
      {
        question: 'Do we need landlord approval before scheduling commercial cleanup as a tenant?',
        answer:
          'Commercial lease terms vary—many leases assign structure, roof, and shared riser responsibilities to the landlord while interior buildouts fall on the tenant. Confirming building owner or property manager sign-off prevents delays.',
      },
    ],
    relatedSlugs: ['water-extraction-elizabeth-nj', 'structural-drying-elizabeth-nj'],
  },
];

export function getServiceLocationPage(slug: string): ServiceLocationPage | undefined {
  return serviceLocationPages.find((page) => page.slug === slug);
}
