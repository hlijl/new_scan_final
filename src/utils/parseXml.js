export function parseXml(xml) {
  const parser = new DOMParser();
  const html = parser.parseFromString(xml, "text/xml");
  
  const result = Array.from(html.getElementsByTagName("scandoc")[0].childNodes)
    .slice(0, 3)
    .map(node => (node.innerHTML).match(/[а-я ]/gi)?.join('') || '')
    .join('');

  return result + '...';
}
