import type {
  LandingFaq,
  LandingPillar,
  LandingService,
  LandingServiceArea,
} from './types';

export const LANDING_IDENTITY = {
  niche: 'Water Damage Restoration',
  location: 'Elizabeth, NJ',
  fullTitle: 'Water Damage Restoration in Elizabeth, NJ',
  shortTitle: 'Water Damage Restoration in Elizabeth',
  tagline: 'Emergency Standing Water Extraction, Structural Drying & Flood Cleanup',
  phoneDisplay: '908-677-5006',
  phoneHref: 'tel:+19086775006',
  streetAddress: '505 Elizabeth Ave',
  neighborhood: 'Elizabethport',
  city: 'Elizabeth',
  state: 'NJ',
  zip: '07206',
  fullAddress: '505 Elizabeth Ave, Elizabethport, NJ 07206',
  serviceHours: 'Direct Phone Dispatch & Emergency Consultations',
} as const;

export const LANDING_SERVICES: LandingService[] = [
  {
    id: 'water-extraction',
    title: 'Emergency Water Extraction',
    shortDesc:
      'High-capacity standing water pumping and deep moisture extraction for saturated carpets, hardwood floors, and concrete slabs.',
    points: [
      'Industrial submersible pumps for deep water pooling',
      'Weighted rover extractors for multi-layer carpet & pad recovery',
      'Surface squeegee systems for tile, laminate, and hardwood',
      'Immediate containment to halt water migration into framing',
    ],
    image:
      'https://images.pexels.com/photos/33438420/pexels-photo-33438420.png?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Technicians operating water extraction equipment in flooded property',
  },
  {
    id: 'structural-drying',
    title: 'Structural Drying & Dehumidification',
    shortDesc:
      'Targeted moisture removal from wall studs, drywall, sill plates, and subflooring using commercial LGR dehumidifiers and high-velocity air movers.',
    points: [
      'Hospital-grade low-grain refrigerant (LGR) dehumidifiers',
      'Centrifugal air movers creating optimal boundary-layer evaporation',
      'Cavity drying techniques preserving structural drywall when feasible',
      'Daily psychrometric tracking to confirm constant moisture removal',
    ],
    image:
      'https://images.pexels.com/photos/8146330/pexels-photo-8146330.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Restored clean residential room following complete structural drying',
  },
  {
    id: 'basement-cleanup',
    title: 'Flooded Basement Cleanup',
    shortDesc:
      'Fast-acting water pumping and decontamination for lower levels compromised by heavy rainfall, foundation seepage, or sump pump failure.',
    points: [
      'Rapid extraction of standing basement floodwater',
      'Silt, sludge, and water-damaged item clearing',
      'Antimicrobial wash down for foundation masonry and concrete slabs',
      'Targeted drying for finished basement drywall and framing',
    ],
    image:
      'https://images.pexels.com/photos/28447767/pexels-photo-28447767.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Residential property with lower level protected from groundwater flooding',
  },
  {
    id: 'burst-pipe',
    title: 'Burst Pipe Water Damage Cleanup',
    shortDesc:
      'Immediate mitigation after frozen supply pipes, ruptured water heater tanks, or high-pressure plumbing failures flood living spaces.',
    points: [
      'Rapid source tracing and leak volume containment',
      'Ceiling collapse prevention and wet insulation removal',
      'Deep cavity dehumidification inside wet wall assemblies',
      'Documentation of damaged materials for insurance records',
    ],
    image:
      'https://images.pexels.com/photos/12326418/pexels-photo-12326418.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Plaster wall cavity drying following plumbing pipe water break',
  },
  {
    id: 'flood-cleanup',
    title: 'Flood Damage Cleanup',
    shortDesc:
      'Comprehensive cleanup for properties impacted by overland storm water intrusion, street runoff, or river drainage overflow.',
    points: [
      'Removal of exterior flood water and mud deposits',
      'Safe removal of contaminated porous building goods',
      'Thorough structural washing, sanitizing, and odor prevention',
      'Heavy-duty industrial drying to prevent mold incubation',
    ],
    image:
      'https://images.pexels.com/photos/28447806/pexels-photo-28447806.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Flood mitigation barriers and residential property water protection',
  },
  {
    id: 'moisture-inspection',
    title: 'Moisture Assessment & Inspection',
    shortDesc:
      'Scientific diagnostics using calibrated pin and non-penetrating moisture meters to find hidden dampness trapped behind baseboards and flooring.',
    points: [
      'Non-invasive surface moisture mapping across all affected rooms',
      'Penetrating pin testing for subfloor and framing moisture levels',
      'Identification of hidden migration paths along electrical conduits',
      'Clear, written dry-standard verification report upon completion',
    ],
    image:
      'https://images.pexels.com/photos/8293640/pexels-photo-8293640.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Moisture technician testing electrical and wall conditions',
  },
];

export const LANDING_SERVICE_AREAS: LandingServiceArea[] = [
  { name: 'Elizabeth (Central & North)', zip: '07201, 07208', distanceNote: 'Primary Hub' },
  { name: 'Elizabethport', zip: '07206', distanceNote: 'Dispatch Base' },
  { name: 'Elmora & Bayway', zip: '07202', distanceNote: 'Elizabeth District' },
  { name: 'Linden', zip: '07036', distanceNote: 'Direct Neighbor South' },
  { name: 'Roselle', zip: '07203', distanceNote: 'Direct Neighbor West' },
  { name: 'Roselle Park', zip: '07204', distanceNote: '5-10 min dispatch' },
  { name: 'Hillside', zip: '07205', distanceNote: 'Direct Neighbor North' },
  { name: 'Union Township', zip: '07083', distanceNote: 'Route 22 Corridor' },
  { name: 'Rahway', zip: '07065', distanceNote: 'South Union County' },
  { name: 'Cranford', zip: '07016', distanceNote: 'Central Union County' },
  { name: 'Newark (South / Airport)', zip: '07114', distanceNote: 'Adjacent Essex County' },
];

export const LANDING_PILLARS: LandingPillar[] = [
  {
    title: 'Direct Phone Triage',
    desc: 'Speak directly with restoration specialists who guide you through emergency water shutoff, electrical safety, and damage limitation while dispatch is initiated.',
    iconName: 'phone',
  },
  {
    title: 'Union County Local Expertise',
    desc: 'Intimate familiarity with regional building types—from historic Elizabethport multi-family residences to split-level basements along the Elizabeth River basin.',
    iconName: 'shield',
  },
  {
    title: 'Upfront Transparent Scope',
    desc: 'Before any demolition or equipment setup, you receive an honest evaluation separating salvageable building materials from items requiring sanitary removal.',
    iconName: 'check',
  },
  {
    title: 'Scientific Dry Diagnostics',
    desc: 'Drying is never a visual guess. We establish unaffected dry baselines and monitor daily with calibrated moisture meters until materials hit standard equilibrium.',
    iconName: 'gauge',
  },
];

export const LANDING_FAQS: LandingFaq[] = [
  {
    question: 'How quickly should water extraction start after an emergency?',
    answer:
      'Water extraction should commence within the first 24 to 48 hours. Water begins absorbing into drywall, subfloors, and wood framing within minutes. Swift physical extraction prevents wood warping, structural delamination, and microbial amplification.',
  },
  {
    question: 'What immediate safety measures should I take before help arrives?',
    answer:
      'First, prioritize human safety. Never enter a room with standing water if it has contacted electrical outlets or extension cords. If safe, shut off your main water valve to halt active pressure leaks. Avoid running standard household vacuums on water, and keep occupants and pets away from damp areas.',
  },
  {
    question: 'How do you verify when building materials are completely dry?',
    answer:
      'We use calibrated pin and non-penetrating moisture meters to measure electrical resistance and capacitance within building materials. We take baseline readings from unaffected dry rooms and monitor affected zones daily until moisture levels match normal regional equilibrium.',
  },
  {
    question: 'Do you service homes and commercial buildings throughout Union County?',
    answer:
      'Yes. Our physical dispatch location at 505 Elizabeth Ave in Elizabethport provides immediate transit to properties in Elizabeth, Linden, Roselle, Roselle Park, Hillside, Union, Rahway, Cranford, and nearby Newark.',
  },
  {
    question: 'Will standard homeowners insurance cover water extraction and drying?',
    answer:
      'Most standard property insurance policies cover sudden and accidental water discharges (such as burst supply lines or water heater tank ruptures), while overland floodwater typically requires dedicated flood policies. We photograph high-water marks and provide detailed moisture logs to assist your claim documentation.',
  },
];
