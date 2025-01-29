document.querySelectorAll('.post').forEach(post =>{
    post.addEventListener('click', () =>{
        const modalId = post.getAttribute('data-modal');
        document.getElementById(modalId).classList.add('active');
    });
});

function closeModal(modalId){
    document.getElementById(modalId).classList.remove('active');
}

document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', (event) => {
        if(event.target === modal) {
            modal.classList.remove('active');
        }
    });
});