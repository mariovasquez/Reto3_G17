const featured = () => {
    const newReleases = document.getElementById('newReleases');
    const popular = document.getElementById('popular');
    const newRealesAlbums = document.getElementById('newReleasesAlbums');
    const popularAlbums = document.getElementById('popularAlbums');

    
    newReleases.addEventListener('click', () => {
        newReleases.classList.add('section__featured-title--selected');
        popular.classList.remove('section__featured-title--selected');
        newReleasesAlbums.classList.remove('section__featured-albums--disabled');
        popularAlbums.classList.add('section__featured-albums--disabled');
    });
    popular.addEventListener('click', () => {
        newReleases.classList.remove('section__featured-title--selected');
        popular.classList.add('section__featured-title--selected');
        newReleasesAlbums.classList.add('section__featured-albums--disabled');
        popularAlbums.classList.remove('section__featured-albums--disabled');
    });
};

export default featured;