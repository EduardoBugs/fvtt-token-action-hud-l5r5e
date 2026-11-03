/**
 * Module-based constants
 */
export const MODULE = {
  ID: 'token-action-hud-l5r5e'
}

/**
 * Core module
 */
export const CORE_MODULE = {
  ID: 'token-action-hud-core'
}

/**
 * Core module version required by the system module
 */
export const REQUIRED_CORE_MODULE_VERSION = '2.1'

/**
 * Action types
 */
export const ACTION_TYPE = {
  item: 'tokenActionHud.template.item',
  utility: 'tokenActionHud.utility'
}

/**
 * Groups
 */
export const GROUP = {
  armor: { id: 'armor', name: 'l5r5e.armors.title', type: 'system' },
  equipment: { id: 'equipment', name: 'l5r5e.items.title', type: 'system' },
  equipped: { id: 'equipped', name: 'Equipped', type: 'system' }, //bugs
  unequipped: { id: 'unequipped', name: 'Unequipped', type: 'system' }, //bugs
  weapons: { id: 'weapons', name: 'l5r5e.weapons.title', type: 'system' },
  combat: { id: 'combat', name: 'tokenActionHud.combat', type: 'system' },
  token: { id: 'token', name: 'tokenActionHud.token', type: 'system' },
  utility: { id: 'utility', name: 'tokenActionHud.utility', type: 'system' },
  rings: { id: 'rings', name: 'l5r5e.rings.title', type: 'system' },
  derived: { id: 'derived', name: 'l5r5e.attributes.title', type: 'system' },
  standing: { id: 'standing', name: 'l5r5e.social.title', type: 'system' },
  artisan: { id: 'artisan', name: 'l5r5e.skills.artisan.title', type: 'system' },
  martial: { id: 'martial', name: 'l5r5e.skills.martial.title', type: 'system' },
  scholar: { id: 'scholar', name: 'l5r5e.skills.scholar.title', type: 'system' },
  social: { id: 'social', name: 'l5r5e.skills.social.title', type: 'system' },
  trade: { id: 'trade', name: 'l5r5e.skills.trade.title', type: 'system' },
  kata: { id: 'kata', name: 'l5r5e.techniques.kata', type: 'system' },
  kiho: { id: 'kiho', name: 'l5r5e.techniques.kiho', type: 'system' },
  inversion: { id: 'inversion', name: 'l5r5e.techniques.inversion', type: 'system' },
  invocation: { id: 'invocation', name: 'l5r5e.techniques.invocation', type: 'system' },
  ritual: { id: 'ritual', name: 'l5r5e.techniques.ritual', type: 'system' },
  shuji: { id: 'shuji', name: 'l5r5e.techniques.shuji', type: 'system' },
  maho: { id: 'maho', name: 'l5r5e.techniques.maho', type: 'system' },
  ninjutsu: { id: 'ninjutsu', name: 'l5r5e.techniques.ninjutsu', type: 'system' },
  mantra: { id: 'mantra', name: 'l5r5e.techniques.mantra', type: 'system' },
  school_ability: { id: 'school-ability', name: 'l5r5e.techniques.school_ability', type: 'system' },
  mastery_ability: { id: 'mastery-ability', name: 'l5r5e.techniques.mastery_ability', type: 'system' },
  title_ability: { id: 'title-ability', name: 'l5r5e.techniques.title_ability', type: 'system' }
}

/**
 * Item types
 */
export const ITEM_TYPE = {
  armor: { groupId: 'armor' },
  equipment: { groupId: 'equipment' },
  weapon: { groupId: 'weapons' }
}

/**
 * Item types
 */
export const SKILL_TYPE = {
  artisan: { groupId: 'artisan' },
  martial: { groupId: 'martial' },
  scholar: { groupId: 'scholar' },
  social: { groupId: 'social' },
  trade: { groupId: 'trade' }
}

/**
 * Item Qualities
 */
export const ITEM_QUALITIES = {
  razor_edged: 'Razor-Edged',
  ceremonial: 'Ceremonial',
  damaged: 'Damaged',
  destroyed: 'Destroyed',
  concealable: 'Concealable',
  cumbersome: 'Cumbersome',
  snaring: 'Snaring',
  unholy: 'Unholy',
  forbidden: 'Forbidden',
  resplendent: 'Resplendent',
  wargear: 'Wargear',
  mundane: 'Mundane',
  prepare: 'Prepare',
  sacred: 'Sacred',
  durable: 'Durable',
  subtle: 'Subtle',
  kenzo_blade: 'Kenzō Blade'
}

/**
 * Item Patterns
 */
export const ITEM_PATTERN = {
  jade_inlay: 'Shirogane Jade Inlay',
  uchema: 'Uchema’s Technique',
  yasunori: 'Yasunori Steel',
  akodo: 'Akodo Pattern',
  burning_water: 'Burning Watter Pattern',
  concealment: 'Concealment Pattern',
  deadly_fangs: 'Deadly Fangs Pattern',
  fearsome_snarl: 'Fearsome Snarl Pattern',
  ichiro: 'Ichirō Pattern',
  mountain_silk: 'Mountain Silk Pattern',
  screaming_fire: 'Screaming Fire Pattern',
  toriyama: 'Toriyama Endurance Pattern',
  qamarist: 'Spirit of the Qamarist Pattern',
  yodhaniya: 'Ghostlands Yodhaniya Pattern',
  kokejin: 'Kökejin’s Heart of the Wind Pattern',
  agasha: 'Agasha Pattern'

}