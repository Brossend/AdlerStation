document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.button');

    buttons.forEach((e) => {
        e.addEventListener('click', () => {
            const text = e.querySelector('.text');

            if(e.classList.contains('blue')) {
                if (e.classList.contains('blue__isActive')) {
                    e.classList.remove('blue__isActive');
                    text.classList.remove('text__isActive');
                } else {
                    e.classList.add('blue__isActive');
                    text.classList.add('text__isActive');
                }
            }

            if(e.classList.contains('green')) {
                if (e.classList.contains('green__isActive')) {
                    e.classList.remove('green__isActive');
                    text.classList.remove('text__isActive');
                } else {
                    e.classList.add('green__isActive');
                    text.classList.add('text__isActive');
                }
            }
        });
    });
});