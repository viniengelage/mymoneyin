export default function generateColor(opacity = 1): string {
  const r = Math.random() * 255;

  const g = Math.random() * 255;

  const b = Math.random() * 255;

  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}
