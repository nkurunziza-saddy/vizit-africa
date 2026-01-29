import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// English translations
const enTranslations = {
  hero: {
    title: "Discover Rwanda's Beauty",
    subtitle: "Book hotels, cars, and tours for your perfect African adventure",
  },
  search: {
    where: "Where",
    when: "When",
    who: "Who",
    from: "From",
    to: "To",
    locationPlaceholder: "Search destinations",
    addDates: "Add dates",
    button: "Search",
    getTicket: "Get ticket",
  },
  featured: {
    title: "Featured Listings",
    subtitle: "Handpicked accommodations and experiences",
    viewAll: "View all",
  },
  listing: {
    night: "night",
    guests: "Guests",
    guest: "Guest",
  },
  nav: {
    home: "Home",
    listings: "Listings",
    destinations: "Destinations",
    gallery: "Gallery",
    dashboard: "Dashboard",
    profile: "Profile",
    settings: "Settings",
    myBookings: "My Bookings",
    savedTrips: "Saved Trips",
    becomeVendor: "Become a Vendor",
    login: "Login",
    logout: "Logout",
  },
  common: {
    loading: "Loading...",
    error: "Error",
    success: "Success",
    cancel: "Cancel",
    confirm: "Confirm",
    close: "Close",
    save: "Save",
    delete: "Delete",
    edit: "Edit",
    view: "View",
    back: "Back",
    next: "Next",
    submit: "Submit",
  },
  currency: {
    USD: "US Dollar",
    EUR: "Euro",
    RWF: "Rwandan Franc",
    GBP: "British Pound",
  },
};

// French translations
const frTranslations = {
  hero: {
    title: "Découvrez la Beauté du Rwanda",
    subtitle:
      "Réservez des hôtels, voitures et visites pour votre aventure africaine parfaite",
  },
  search: {
    where: "Où",
    when: "Quand",
    who: "Qui",
    from: "De",
    to: "À",
    locationPlaceholder: "Rechercher des destinations",
    addDates: "Ajouter des dates",
    button: "Rechercher",
    getTicket: "Obtenir un billet",
  },
  featured: {
    title: "Annonces en Vedette",
    subtitle: "Hébergements et expériences sélectionnés",
    viewAll: "Voir tout",
  },
  listing: {
    night: "nuit",
    guests: "Invités",
    guest: "Invité",
  },
  nav: {
    home: "Accueil",
    listings: "Annonces",
    destinations: "Destinations",
    gallery: "Galerie",
    dashboard: "Tableau de Bord",
    profile: "Profil",
    settings: "Paramètres",
    myBookings: "Mes Réservations",
    savedTrips: "Voyages Sauvegardés",
    becomeVendor: "Devenir Vendeur",
    login: "Connexion",
    logout: "Déconnexion",
  },
  common: {
    loading: "Chargement...",
    error: "Erreur",
    success: "Succès",
    cancel: "Annuler",
    confirm: "Confirmer",
    close: "Fermer",
    save: "Sauvegarder",
    delete: "Supprimer",
    edit: "Modifier",
    view: "Voir",
    back: "Retour",
    next: "Suivant",
    submit: "Soumettre",
  },
  currency: {
    USD: "Dollar Américain",
    EUR: "Euro",
    RWF: "Franc Rwandais",
    GBP: "Livre Sterling",
  },
};

// Kinyarwanda translations
const rwTranslations = {
  hero: {
    title: "Menya Ubwiza bw'u Rwanda",
    subtitle: "Fata ubwato, imodoka, n'ingendo zawe zo mu Africa",
  },
  search: {
    where: "Hehe",
    when: "Ryari",
    who: "Ndewe",
    from: "Kuva",
    to: "Kugera",
    locationPlaceholder: "Shakisha aho",
    addDates: "Ongeraho iminsi",
    button: "Shakisha",
    getTicket: "Fata itike",
  },
  featured: {
    title: "Ibirimo Byatoranyijwe",
    subtitle: "Aho kuba n'ibyiza byatoranyijwe",
    viewAll: "Reba byose",
  },
  listing: {
    night: "ijoro",
    guests: "Abashyitsi",
    guest: "Umushyitsi",
  },
  nav: {
    home: "Ahabanza",
    listings: "Ibirimo",
    destinations: "Aho Kugera",
    gallery: "Amashusho",
    dashboard: "Dashboard",
    profile: "Umwirondoro",
    settings: "Igenamiterere",
    myBookings: "Ibyo Nafashe",
    savedTrips: "Ingendo Nafashe",
    becomeVendor: "Ba Umucuruzi",
    login: "Injira",
    logout: "Sohoka",
  },
  common: {
    loading: "Birimo gukorerwa...",
    error: "Ikosa",
    success: "Byagenze neza",
    cancel: "Hagarika",
    confirm: "Emeza",
    close: "Funga",
    save: "Bika",
    delete: "Siba",
    edit: "Hindura",
    view: "Reba",
    back: "Subira",
    next: "Komeza",
    submit: "Ohereza",
  },
  currency: {
    USD: "Dollar y'Amerika",
    EUR: "Euro",
    RWF: "Franc y'u Rwanda",
    GBP: "Pound y'Ubwongereza",
  },
};

// Currency configuration
export const currencies = {
  USD: { code: "USD", symbol: "$", locale: "en-US", rate: 1 },
  EUR: { code: "EUR", symbol: "€", locale: "de-DE", rate: 0.92 },
  RWF: { code: "RWF", symbol: "RF", locale: "rw-RW", rate: 1300 },
  GBP: { code: "GBP", symbol: "£", locale: "en-GB", rate: 0.79 },
};

export type CurrencyCode = keyof typeof currencies;

// Format price with currency
export function formatPrice(
  amount: number,
  currencyCode: CurrencyCode = "USD",
  language: string = "en",
): string {
  const currency = currencies[currencyCode];

  // Convert amount based on exchange rate
  const convertedAmount = amount * currency.rate;

  // Use Intl.NumberFormat for proper localization
  return new Intl.NumberFormat(currency.locale, {
    style: "currency",
    currency: currency.code,
    minimumFractionDigits: currency.code === "RWF" ? 0 : 2,
    maximumFractionDigits: currency.code === "RWF" ? 0 : 2,
  }).format(convertedAmount);
}

// Convert price without formatting (for calculations)
export function convertPrice(
  amount: number,
  fromCurrency: CurrencyCode,
  toCurrency: CurrencyCode,
): number {
  const fromRate = currencies[fromCurrency].rate;
  const toRate = currencies[toCurrency].rate;

  // Convert to USD first (base), then to target currency
  const amountInUSD = amount / fromRate;
  return amountInUSD * toRate;
}

// Initialize i18n
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslations },
      fr: { translation: frTranslations },
      rw: { translation: rwTranslations },
    },
    fallbackLng: "en",
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });

export default i18n;
