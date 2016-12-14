import { Template } from 'meteor/templating';

import './body.html';

import { states } from '../api/states.js';
import { users } from '../api/users.js';
import { Raphael } from '../js/raphael.js';
import { Session } from 'meteor/session';

$(document).ready(function() {

    $('#map').usmap({

        'stateStyles': {
            fill: "#99cdfa",
            stroke: "#ffffff",
            "stroke-width": 1,
            "stroke-linejoin": "round",
            scale: [1, 1]
        },

        'stateHoverStyles': {
            fill: "#c9e3fa",
            stroke: "#000",
            scale: [1, 1]
        },

        'mouseover' : function(event, data) {

            // console.log(data);
            var state = states.findOne({acro:data.name});
            // console.log(state.name);
            console.log(users.findOne({_id:Session.get('userId')})[states.findOne({acro:data.name})]);
            $('#vote').html(users.findOne({_id:Session.get('userId')})[states.findOne({acro:data.name}).name])
        },

        'click' : function myFunction(event, data) {
            // console.log(states.findOne({acro:data.name}));
            var State = states.findOne({acro:data.name});
            console.log(State);
            var User = users.findOne({_id:Session.get('userId')});
            var inc = User[State.name]+1;
            users.update(User._id ,{ $set:{[State.name]: inc }});
            console.log(users.findOne({_id:Session.get('userId')}));
            $('#vote').html(users.findOne({_id:Session.get('userId')})[states.findOne({acro:data.name}).name])
        }

    });

});

setTimeout(function() {
    $('.map-pop').fadeOut(2000);
}, 5000);
