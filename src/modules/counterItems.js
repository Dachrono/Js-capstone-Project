const counterItems = () => {
  const card = document.querySelectorAll('.card');
  let i = 0;
  card.forEach(() => {
    i += 1;
  });
  return i;
};

export default counterItems;