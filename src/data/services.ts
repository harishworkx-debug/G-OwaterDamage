export interface Service {
  slug: string;
  path: string;
  name: string;
  summary: string;
  image: string;
  imageAlt: string;
  callLabel: string;
}

export const services: Service[] = [
  {
    slug: 'water-damage-restoration',
    path: '/water-damage-restoration-elizabeth-nj',
    name: 'Water Damage Restoration',
    summary:
      'Restoration support for homes and businesses hit by water intrusion, from the first phone call through removing water, drying the structure, and cleaning the affected areas.',
    image: 'https://images.pexels.com/photos/9617552/pexels-photo-9617552.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Wall with peeling paint and exposed plaster showing water damage',
    callLabel: 'Call for Water Damage Restoration',
  },
  {
    slug: 'water-extraction',
    path: '/water-extraction-elizabeth-nj',
    name: 'Water Extraction and Removal',
    summary:
      'Removal of standing water from floors, basements, and other affected spaces, so the property can move quickly into drying.',
    image: 'https://images.pexels.com/photos/33438420/pexels-photo-33438420.png?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Workers wading through floodwater beside a truck',
    callLabel: 'Call for Water Extraction',
  },
  {
    slug: 'flood-damage-cleanup',
    path: '/flood-damage-cleanup-elizabeth-nj',
    name: 'Flood Damage Cleanup',
    summary:
      'Cleanup of properties affected by flood water, including removing standing water, clearing materials that cannot be dried, and preparing the space for drying.',
    image: 'https://images.pexels.com/photos/28447806/pexels-photo-28447806.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Residential area protected by red flood barriers after heavy rain',
    callLabel: 'Call for Flood Cleanup',
  },
  {
    slug: 'basement-water-cleanup',
    path: '/basement-water-cleanup-elizabeth-nj',
    name: 'Basement Water Cleanup',
    summary:
      'Removal of water from basements and lower levels, followed by drying of walls, floors, and stored building materials.',
    image: 'https://images.pexels.com/photos/28447767/pexels-photo-28447767.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Residential home with basement level affected by floodwater',
    callLabel: 'Call About Basement Water Damage',
  },
  {
    slug: 'structural-drying',
    path: '/structural-drying-elizabeth-nj',
    name: 'Structural Drying',
    summary:
      'Drying of walls, floors, subfloors, and other building materials using dehumidification, so hidden moisture does not turn into rot, warping, or odor.',
    image: 'https://images.pexels.com/photos/8146330/pexels-photo-8146330.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Empty bright room with hardwood floors and a large window',
    callLabel: 'Call for Structural Drying',
  },
  {
    slug: 'water-damage-inspection',
    path: '/water-damage-inspection-elizabeth-nj',
    name: 'Water Damage Inspection',
    summary:
      'Assessment of water-affected rooms to look for the source, check for hidden moisture, and explain what the damage may require.',
    image: 'https://images.pexels.com/photos/8293640/pexels-photo-8293640.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Inspector examining an electrical outlet in a modern room',
    callLabel: 'Call for Water Damage Inspection',
  },
  {
    slug: 'burst-pipe-water-damage',
    path: '/burst-pipe-water-damage-elizabeth-nj',
    name: 'Burst Pipe Water Damage Cleanup',
    summary:
      'Cleanup after a supply line or pipe failure, covering the water released, affected walls and flooring, and drying of the structure.',
    image: 'https://images.pexels.com/photos/12326418/pexels-photo-12326418.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Cracked plaster wall with rough, water-stressed texture',
    callLabel: 'Call for Burst Pipe Cleanup',
  },
  {
    slug: 'sewage-cleanup',
    path: '/sewage-cleanup-elizabeth-nj',
    name: 'Sewage Backup Cleanup',
    summary:
      'Guidance on sewage backups, which need careful handling. Call first to confirm whether this service is available for your property.',
    image: 'https://images.pexels.com/photos/10631759/pexels-photo-10631759.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Abandoned room with a flooded floor and peeling paint',
    callLabel: 'Call About Sewage Backup',
  },
  {
    slug: 'storm-damage-restoration',
    path: '/storm-damage-restoration-elizabeth-nj',
    name: 'Storm Water Damage Restoration',
    summary:
      'Restoration after storm water enters a home or business through roofs, windows, or ground-level openings.',
    image: 'https://images.pexels.com/photos/14000667/pexels-photo-14000667.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Buildings partially submerged in flood damage after a storm',
    callLabel: 'Call for Storm Damage Restoration',
  },
  {
    slug: 'commercial-water-damage-restoration',
    path: '/commercial-water-damage-restoration-elizabeth-nj',
    name: 'Commercial Water Damage Restoration',
    summary:
      'Water damage work for shops, offices, and other commercial spaces, with the schedule discussed around the needs of your business.',
    image: 'https://images.pexels.com/photos/7031599/pexels-photo-7031599.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Spacious empty room with white walls and parquet flooring',
    callLabel: 'Call for Commercial Water Damage',
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
