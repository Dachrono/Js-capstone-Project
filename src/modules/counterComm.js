const counterModule = (message) => {
  let counter;
  if (message === 'whitout comments') {
    counter = 0;
  } else {
    const items = document.querySelectorAll('.userCom');
    counter = items.length;
  }
  return counter;
};

export default counterModule;