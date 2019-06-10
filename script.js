/* For demo purposes, only the coding joke was used for this project
 - not the historical fact nor the coding events.
 Those sections (and corresponding code  for selections 2 and 3) will be completed at a later time.*/

$(document).ready(function() {
$("#OpenDialog").click(function () {
    $("#dialog").dialog({modal: true, height: 300, width: 650 });
        /* alert("data cell works"); */
    });

/*var joke =  $('<img src="https://sp.yimg.com/ib/th?id=JN.z0iT7w%2bD864V3jhsYPqgyQ&pid=15.1&rs=1&c=1&qlt=95&w=84&h=96"/>');
var dayhistory =  $('<a href="http://notebook.com"/></a>');
var dayevent =  $('<a href="http://www.meetup.com/find/events/?allMeetups=false&keywords=programming&radius=5&userFreeform=New+York%2C+NY&mcId=c10001&mcName=New+York%2C+NY&month=8&day=11&year=2015"/></a>');
*/
        $('#selection1').click(function () {

        $('#MasterDialog').hide('close');
        $('img.joke_images').show({height: 390});
        $('img.joke_images').one('click', function() {
            $('img.joke_images').hide();
        });

        });

        $("#selection2").click(function () {
      /*  alert("We got here - selection2");  */
        $('dayhistory').show.dialog({modal: true, height: 390, width: 705});
        });

        $("#selection3").click(function () {
       /* alert("We got here - selection3"); */
        $('dayevent').show.dialog({modal: true, height: 390, width: 705 });
        });

});
