$(document).ready(function (e) {
    var $countup = $("#countup");
    function update() {
        var myTime = $countup.html();
        if( myTime == "10:00" ) { 
        return;
           }
        var ss = myTime.split(":");
        var dt = new Date();
        dt.setHours(0);
        dt.setMinutes(ss[0]);
        dt.setSeconds(ss[1]);
        
        var dt2 = new Date(dt.valueOf() + 1000);
        var temp = dt2.toTimeString().split(" ");
        var ts = temp[0].split(":");
        
        $countup.html(ts[1]+":"+ts[2]);
        setTimeout(update, 1000);
 
    }

    setTimeout(update, 1000);

});