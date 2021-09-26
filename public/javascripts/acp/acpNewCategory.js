const formNewCategory = document.querySelector('.formNewCategory');

formNewCategory.addEventListener('submit', async (ev) => {
    ev.preventDefault();

    const formData = new FormData(ev.target);

  axios.post('/acp/addCategory', formData);
    const {data} = await axios.post('/acp/addCategory', formData);


    console.log(data);
});
