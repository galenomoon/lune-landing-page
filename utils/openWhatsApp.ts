export function openWhatsApp(
  message: string = "Olá, vim pelo site e gostaria de saber mais sobre as aulas de dança."
) {
  const phone = "+5511953979723";
  const base = phone ? `https://wa.me/${phone}?text=` : `https://wa.me/?text=`;
  const url = base + encodeURIComponent(message);
  window.open(url, "_blank");
}
