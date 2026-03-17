export type ProductKey = 'auto' | 'habitation' | 'sante' | 'accident' | 'rc' | 'transport' | 'construction' | 'cyber' | 'flotte';

export const PRODUCTS: { key: ProductKey; icon: string; label: string }[] = [
  { key: 'auto', icon: '🚗', label: 'Auto' },
  { key: 'habitation', icon: '🏠', label: 'Habitation' },
  { key: 'sante', icon: '❤️', label: 'Santé' },
  { key: 'accident', icon: '🏗️', label: 'Acc. Travail' },
  { key: 'rc', icon: '⚖️', label: 'RC' },
  { key: 'transport', icon: '🚢', label: 'Transport' },
  { key: 'construction', icon: '🏛️', label: 'Construction' },
  { key: 'cyber', icon: '🔐', label: 'Cyber' },
  { key: 'flotte', icon: '🚌', label: 'Flotte' },
];

export function calcAuto(data: Record<string, string>): number {
  const valeur = Number(data.valeur) || 0;
  const puissance = Number(data.puissance) || 6;
  const usage = Number(data.usage) || 1;
  const formule = Number(data.formule) || 1;
  const sinistres = Number(data.sinistres) || 0;
  let base = puissance > 7 ? 3500 : 2000;
  return Math.round((base * usage * formule) + (valeur * 0.01) + sinistres * 500);
}

export function calcHabitation(data: Record<string, string>): number {
  const surface = Number(data.surface) || 0;
  const valeurBien = Number(data.valeurBien) || 0;
  const valeurContenu = Number(data.valeurContenu) || 0;
  const type = data.type === 'villa' ? 1.3 : 1;
  const securite = data.securite === 'alarme' ? 0.9 : 1;
  return Math.round(((valeurBien + valeurContenu) * 0.002 + surface * 5) * type * securite);
}

export function calcSante(data: Record<string, string>): number {
  const age = Number(data.age) || 30;
  const beneficiaires = Number(data.beneficiaires) || 1;
  const niveau = data.niveau === 'eco' ? 1 : 1.6;
  const antecedents = data.antecedents === 'oui' ? 1.3 : 1;
  return Math.round(2000 * (age / 30) * beneficiaires * niveau * antecedents);
}

export function calcAccident(data: Record<string, string>): number {
  const employes = Number(data.employes) || 1;
  const salaireMoyen = Number(data.salaireMoyen) || 5000;
  const secteur = data.secteur === 'btp' ? 2.5 : 1;
  const risque = data.risque === 'eleve' ? 1.5 : 1;
  return Math.round(employes * salaireMoyen * 0.02 * secteur * risque * 12);
}

export function calcRC(data: Record<string, string>): number {
  const ca = Number(data.ca) || 0;
  const employes = Number(data.employes) || 1;
  const risque = data.risque === 'eleve' ? 1.5 : 1;
  const couverture = data.couverture === 'etendue' ? 1.8 : 1;
  return Math.round((ca * 0.003 + employes * 200) * risque * couverture);
}

export function calcTransport(data: Record<string, string>): number {
  const valeur = Number(data.valeur) || 0;
  const mode = data.mode === 'maritime' ? 1.5 : 1;
  const typeMarch = data.typeMarch === 'perissable' ? 1.4 : 1;
  const frequence = data.frequence === 'regulier' ? 0.85 : 1;
  return Math.round(valeur * 0.005 * mode * typeMarch * frequence);
}

export function calcConstruction(data: Record<string, string>): number {
  const valeurChantier = Number(data.valeurChantier) || 0;
  const duree = Number(data.duree) || 6;
  const risqueTech = data.risqueTech === 'eleve' ? 1.5 : 1;
  const localisation = data.localisation === 'inondable' ? 1.4 : 1;
  return Math.round(valeurChantier * 0.004 * (duree / 12) * risqueTech * localisation);
}

export function calcCyber(data: Record<string, string>): number {
  const ca = Number(data.ca) || 0;
  const employes = Number(data.employes) || 1;
  const securite = data.securite === 'faible' ? 1.6 : 1;
  const incidents = data.incidents === 'oui' ? 1.5 : 1;
  return Math.round((ca * 0.002 + employes * 300) * securite * incidents);
}

export function calcFlotte(data: Record<string, string>): number {
  const nb = Number(data.nbVehicules) || 1;
  const valeurTotale = Number(data.valeurTotale) || 0;
  const accidents = Number(data.accidents) || 0;
  const type = data.typeVehicules === 'utilitaires' ? 1.3 : 1;
  return Math.round((valeurTotale * 0.015 + nb * 1000 + accidents * 800) * type);
}

export function calculatePrime(product: ProductKey, data: Record<string, string>): number {
  switch (product) {
    case 'auto': return calcAuto(data);
    case 'habitation': return calcHabitation(data);
    case 'sante': return calcSante(data);
    case 'accident': return calcAccident(data);
    case 'rc': return calcRC(data);
    case 'transport': return calcTransport(data);
    case 'construction': return calcConstruction(data);
    case 'cyber': return calcCyber(data);
    case 'flotte': return calcFlotte(data);
  }
}
