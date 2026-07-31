/** Shared contact details */
export const CONTACT = {
  phoneLabel: "040 000 0012",
  phoneHref: "tel:+358400000012",
  emailLabel: "info@paakaupungin-putkihuolto.fi",
  emailHref: "mailto:info@paakaupungin-putkihuolto.fi",
  addressLabel: "Esimerkkikatu 1, 00100 Helsinki",
  mapHref: "https://maps.google.com/?q=Esimerkkikatu+1,+00100+Helsinki",
} as const;

export const MAP_EMBED_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1984.8!2d24.9384!3d60.1699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46920bc796210691%3A0xcd4ebd84351efe9!2sHelsinki!5e0!3m2!1sfi!2sfi!4v1700000000000!5m2!1sfi!2sfi";

export const OPENING_HOURS = [
  { day: "Päivystys", hours: "24/7" },
] as const;

export const SERVICE_AREA = ["Pääkaupunkiseutu", "Uusimaa", "Etelä-Suomi"] as const;
