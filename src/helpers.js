export const randomFirstPlayer = () => {
  const randomNumber = Math.random() * 100;
  return (randomNumber > 50) ? 'player' : 'computer';
}
