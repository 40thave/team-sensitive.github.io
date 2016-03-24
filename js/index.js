'use strict';

var TEAM = {
    'joshblum': {
        'name': 'Josh Blum',
        'photo': 'img/photo.png',
        'hover': 'img/hover.png',
    },
    'kkamalov': {
        'name': 'Kainar Kamalov',
        'photo': 'img/photo.png',
        'hover': 'img/hover.png',
    },
    'jrbotros': {
        'name': 'Joseph Botros',
        'photo': 'img/photo.png',
        'hover': 'img/hover.png',
    },
    'lydiagu': {
        'name': 'Lydia Gu',
        'photo': 'img/photo.png',
        'hover': 'img/hover.png',
    },
    'marcua': {
        'name': 'Adam Marcus',
        'photo': 'img/photo.png',
        'hover': 'img/hover.png',
    },
    'derek-schultz': {
        'name': 'Derek Schultz',
        'photo': 'img/photo.png',
        'hover': 'img/hover.png',
    },
    'thisisdhass': {
        'name': 'Daniel Hass',
        'photo': 'img/photo.png',
        'hover': 'img/hover.png',
    },
    'supermerkat': {
        'name': 'Meredith Blumenstock',
        'photo': 'img/photo.png',
        'hover': 'img/hover.png',
    },
    'malcom-wiley': {
        'name': 'Malcom-Wiley Floyd',
        'photo': 'img/photo.png',
        'hover': 'img/hover.png',
    },
    'nitesh': {
        'name': 'Nitesh Banta',
        'photo': 'img/photo.png',
        'hover': 'img/hover.png',
    },
}

function getTeamHtml(username) {
    var user = TEAM[username];
    var $html = $('#team-template').clone();
    $html.removeClass('hide');
    $html.attr('id', username);

    var $photo = $html.find('.photo');
    $photo.attr('src', user.photo);

    var $name = $html.find('.name');
    $name.html(user.name);
    return $html;
}

function handleHover(e, imgSrc) {
    var username = $(e).attr('id');
    var $html = $('#' + username);
    var user = TEAM[username];
    var $photo = $html.find('.photo');
    $photo.attr('src', user[imgSrc]);
}

function showHover() {
    handleHover(this, 'hover');
}

function hideHover() {
    handleHover(this, 'photo');
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
