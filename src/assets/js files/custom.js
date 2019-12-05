function Instagram() {


    var userFeed = new Instafeed({
        get: 'user',
        userId: '12494311822',
        limit: 12,
        resolution: 'standard_resolution',
        accessToken: '12494311822.1677ed0.569e11e0cf574263b8b0082163a5ce1b',
        sortBy: 'most-recent',
        template: '<img src="{{image}}" alt="{{caption}}" class="img-fluid"/>',
    });


    userFeed.run();

    /*
    // This will create a single gallery from all elements that have class "gallery-item"
    $('.gallery').magnificPopup({
        type: 'image',
        delegate: 'a',
        gallery: {
            enabled: true
        }
    });*/


};
