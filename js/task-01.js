function getCategoriesCount() {
  const allCategories = document.querySelectorAll(".item");
  console.log(`Number of categories: ${allCategories.length}`);
}
function getCategoryInfo() {
  const categories = document.querySelectorAll(".item");
  for (const category of categories) {
    const title = category.querySelector("h2");
    const allELements = category.querySelectorAll("li").length;
    console.log(`Category: ${title.textContent}`);
    console.log(`ELements: ${allELements}`);
  }
}

getCategoriesCount();
getCategoryInfo();
