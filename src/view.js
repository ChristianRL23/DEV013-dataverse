export const renderItems = (data) => {
  // Aquí comienza tu código y puedes retornar lo que tu necesites GENERACION DINAMICA
  const list = document.createElement("ul");
  data.forEach(data => {

    const itemList = document.createElement("li");
    const itemContainer = document.createElement("dl");
    itemContainer.classList.add("card");

    itemContainer.innerHTML = `
        <img src=${data.imageUrl} alt=${data.name}/> <br><br>
        <dd itemprop="name">${data.name}</dd> <br>
        <dt></dt><dd itemprop="DescripciónC"> ${data.shortDescription}</dd><br><br><br>
        <dt>Fecha de nacimiento:</dt><dd itemprop="fechaNacimiento">${data.facts.yearOfBirth}</dd>
        <dt> Pais de nacimiento:</dt><dd itemprop="country">${data.facts.country}</dd>
        <dt>Fecha de muerte:</dt><dd itemprop="fechaMuerte">${data.facts.yearOfDeath || '----' }</dd>
        <dt>Género:</dt><dd itemprop="genero">${data.facts.mainField}</dd>
        `
    itemContainer.setAttribute("itemscope", "");
    itemContainer.setAttribute("itemtype", "escritoras");

    itemList.appendChild(itemContainer);
    list.appendChild(itemList)
  });

  return list;
};
