const formNewGroup = document.querySelector('.formAddNewProduct');


const run = async () => {
    const {data} = await axios.post('/acp/getGroups&categoryes');
    const {categoriyes, groups} = data;
    const htmlCategoryes = categoriyes.reduce((html, item) => {
        html += `<option value="${item._id}">${item.name}</option>`; 

        return html;
    },'');

    const htmlGroups = groups.reduce((html, item) => {
        html += `<option value="${item._id}">${item.name}</option>`; 

        return html;
    },'');

    const selectCategory = document.querySelector('.categoryes').innerHTML = htmlCategoryes;
    const selectGroup = document.querySelector('.groups').innerHTML = htmlGroups;
}

run();

formNewGroup.addEventListener('submit', async (ev) => {
    ev.preventDefault();

    const formData = new FormData(ev.target);

    const {data} = await axios.post('/acp/addProduct', formData);

    console.log(data);
});