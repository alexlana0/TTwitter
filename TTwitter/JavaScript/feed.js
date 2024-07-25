document.addEventListener('DOMContentLoaded', function() {
    // BOTÃO CURTIR
    const likeIcons = document.querySelectorAll('.like-icon');
    const defaultLikeIcon = '../img/like-white.svg';
    const blueLikeIcon = '../img/like-blue.svg';

    likeIcons.forEach(likeIcon => {
        let isLiked = false;
        
        likeIcon.addEventListener('click', function() {
            if (isLiked) {
                likeIcon.src = defaultLikeIcon;
            } else {
                likeIcon.src = blueLikeIcon;
            }
            isLiked = !isLiked;
        });
    });

    // BOTÃO FAVORITAR
    const favoriteIcons = document.querySelectorAll('.favorite-icon');
    const defaultFavoriteIcon = '../img/favorite-white.svg';
    const redFavoriteIcon = '../img/favorite-red.svg';

    favoriteIcons.forEach(favoriteIcon => {
        let isFavorited = false;

        favoriteIcon.addEventListener('click', function() {
            if (isFavorited) {
                favoriteIcon.src = defaultFavoriteIcon;
            } else {
                favoriteIcon.src = redFavoriteIcon;
            }
            isFavorited = !isFavorited;
        });
    });

    // BOTÃO ADICIONAR/SEGUINDO
    const followButtons = document.querySelectorAll('.follow-button');

    followButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (this.classList.contains('following')) {
                this.textContent = 'Adicionar';
                this.classList.remove('following');
            } else {
                this.textContent = 'Seguindo';
                this.classList.add('following');
            }
        });
    });
});