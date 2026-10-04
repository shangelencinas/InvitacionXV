export function getGoogleCalendarUrl(): string {
  const title = encodeURIComponent("XV Años Valentina Sofía");
  const details = encodeURIComponent(
    "¡Acompaña a Valentina Sofía Hernández a celebrar sus XV años!\n\nLugar: Jardín Imperial\nCódigo de Vestimenta: Formal / Elegante\nFrase: 'Hay momentos en la vida que se vuelven inolvidables. Hoy quiero compartir uno de ellos contigo.'"
  );
  const location = encodeURIComponent("Jardín Imperial, Blvd. de los Ángeles #250, Hermosillo, Sonora");
  // 2026-11-21 19:00 to 2026-11-22 02:00 in UTC (Hermosillo is UTC-7 => 19:00 + 7 = 02:00 next day UTC)
  const startIso = "20261122T020000Z";
  const endIso = "20261122T090000Z";

  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startIso}/${endIso}&details=${details}&location=${location}`;
}

export function downloadIcsFile(): void {
  const icsContent = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//XV Valentina Sofia//Invitacion Digital//ES",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    "UID:xv-valentina-sofia-20261121@invitacion.com",
    "DTSTAMP:20261001T000000Z",
    "DTSTART:20261122T020000Z",
    "DTEND:20261122T090000Z",
    "SUMMARY:XV Años Valentina Sofía",
    "DESCRIPTION:¡Acompáñanos a celebrar los XV años de Valentina Sofía Hernández! Código de vestimenta: Formal / Elegante.",
    "LOCATION:Jardín Imperial\\, Blvd. de los Ángeles #250\\, Hermosillo\\, Sonora",
    "STATUS:CONFIRMED",
    "END:VEVENT",
    "END:VCALENDAR"
  ].join("\r\n");

  const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", "XV-Años-Valentina-Sofia.ics");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
