// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

Vue.component('add-item', {
    data: function() {
        return {
            charge: 500,
            paid: 0
        }
    },
    props:['resident'],
    template: `
        <table border-collapse="1">
            <tr><td>{{resident.flat}}</td><td>{{resident.name}}</td>
            <td><input placeholder="Amount Paid" v-model="paid"></td>
            <td><checkbox v-on:click="paid = charge">Paid: {{paid}}</button></td></tr>
        </table>
    `
});

var app = new Vue({
    el: '#heading1',
    data: {
        title: 'Apartment Maintanence Record'
    }
});
var adds = new Vue({
    el: '.add-items',
    data: {
        residents: [
            {id: '1', flat:'G1', name: 'Resident G1', },
            {id: '2', flat:'G2', name: 'Resident G2'},
            {id: '3', flat:'F1', name: 'Resident F1'},
            {id: '4', flat:'F2', name: 'Resident F2'},
            {id: '5', flat:'F3', name: 'Resident F3'},
        ]
    }
});