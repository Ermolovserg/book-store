document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.header__link');

    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();

            // Удаляем класс _selected у всех ссылок
            links.forEach(l => l.classList.remove('header__link_selected'));

            // Добавляем класс _selected к текущей ссылке
            link.classList.add('header__link_selected');
        });
    });
});