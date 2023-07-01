const counterLikes = async (id) => {
  const paragraph = document.getElementById(id).querySelector('.likeCount');
  const likeCount = parseInt(paragraph.innerText, 10);
  paragraph.innerText = likeCount + 1;
};

export default counterLikes;