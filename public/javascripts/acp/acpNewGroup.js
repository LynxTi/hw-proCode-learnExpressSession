
const formNewGroup = document.querySelector('.formAddFroup');

formNewGroup.addEventListener('submit', async (ev) => {
    ev.preventDefault();

    const formData = new FormData(ev.target);

    const {data} = await axios.post('/acp/addGroup', formData);

    console.log(data);
});
