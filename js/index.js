'use strict';

var TEAM = {
    'nitesh': {
        'name': 'Nitesh Banta',
        'photo': 'img/nitesh.jpg',
        'hover': 'img/nitesh-hover.jpg',
        'quote': 'I\'d love it if we could...',
        'hover-quote': 'do some quick paperwork.',
    },
    'marcua': {
        'name': 'Adam Marcus',
        'photo': 'img/adam.jpg',
        'hover': 'img/adam-hover.gif',
        'quote': 'I see everything.',
        'hover-quote': 'Hello brother.',
    },
    'supermerkat': {
        'name': 'Meredith Blumenstock',
        'photo': 'img/meredith.jpg',
        'hover': 'img/meredith-hover.png',
        'quote': 'I think it\'s important for the users.',
        'hover-quote': 'Some folks were saying..',
    },
    'kkamalov': {
        'name': 'Kainar Kamalov',
        'photo': 'img/kainar.jpg',
        'hover': 'img/kainar-hover.jpg',
        'quote': 'Bro.',
        'hover-quote': 'In Kyrgyzstan...',
    },
    'derek-schultz': {
        'name': 'Derek Schultz',
        'photo': 'img/derek.jpg',
        'hover': 'img/derek-hover.jpg',
        'quote': 'Hello.',
        'hover-quote': 'Wooow.',
    },
    'jrbotros': {
        'name': 'Joseph Botros',
        'photo': 'img/joseph.jpg',
        'hover': 'img/joseph-hover.jpg',
        'quote': 'I don\'t like: *',
        'hover-quote': 'Jesus Christ.  Why am I incompetent.',
    },
    'thisisdhass': {
        'name': 'Daniel Haas',
        'photo': 'img/dhaas.jpg',
        'hover': 'img/dhass-hover.jpeg',
        'quote': 'I\'m tall, with brown eyes and hair.',
        'hover-quote': 'But you didn\'t care, really.',
    },
    'joshblum': {
        'name': 'Josh Blum',
        'photo': 'img/josh.jpg',
        'hover': 'img/josh-hover.jpg',
        'quote': 'Can I give you some feedback?',
        'hover-quote': 'Go fuck yourself.',
    },
    'lydiagu': {
        'name': 'Lydia Gu',
        'photo': 'img/lydia.jpg',
        'hover': 'img/lydia-hover.jpg',
        'quote': 'Does anyone want to get a bagel?',
        'hover-quote': 'But do you? Do you really?',
    },
    'malcom-wiley': {
        'name': 'Malcom-Wiley Floyd',
        'photo': 'img/mw.jpg',
        'hover': 'img/mw-hover.jpg',
        'quote': 'Guys, this is huge.',
        'hover-quote': '1,2,3: GO TEAM!',
    },
    'dretelny': {
        'name': 'Daniela Retelny',
        'photo': 'img/daniela.jpg',
        'hover': 'img/daniela-hover.jpg',
        'quote': 'Coming soon.',
        'hover-quote': 'Andrew and I...',
    },
}

function getTeamHtml(username) {
    var user = TEAM[username];
    var $html = $('#team-template').clone();
    $html.removeClass('hide');
    $html.attr('id', username);

    var $photo = $html.find('.photo');
    $photo.attr('src', user.photo);

    var $quote = $html.find('.quote');
    $quote.html(user.quote);

    var $name = $html.find('.name');
    $name.html(user.name);
    return $html;
}

function handleHover(e, imgSrc, quoteSrc) {
    var username = $(e).attr('id');
    var $html = $('#' + username);
    var user = TEAM[username];
    var $photo = $html.find('.photo');
    $photo.attr('src', user[imgSrc]);

    var $quote = $html.find('.quote');
    $quote.html(user[quoteSrc]);
}

function showHover() {
    handleHover(this, 'hover', 'hover-quote');
}

function hideHover() {
    handleHover(this, 'photo', 'quote');
}

function showTeam() {
    for (var username in TEAM) {
        var $html = getTeamHtml(username);
        $html.hover(showHover, hideHover);
        $('.team').append($html);
    }
}

(function($) {
    $(function() {

        $('.button-collapse').sideNav();
        $('.parallax').parallax();
        showTeam();

    }); // end of document ready
})(jQuery); // end of jQuery name space
