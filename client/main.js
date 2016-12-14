import '../imports/ui/body.js';
import '../imports/js/jquery.usmap.js';
import { Session } from 'meteor/session';
import { users } from '../imports/api/users.js';

if( users.findOne({ _id : Session.get("userId")}) == null ){
    users.insert({
        name : "No Name",
        Alaska : 0,
        Arizona : 0,
        Arkansas : 0,
        California : 0,
        Colorado : 0,
        Connecticut : 0,
        Delaware : 0,
        District_of_Columbia : 0,
        Florida : 0,
        Atlanta : 0,
        Hawaii : 0,
        Idaho : 0,
        Illinois : 0,
        Indiana : 0,
        Iowa : 0,
        Kansas : 0,
        Kentucky : 0,
        Louisiana : 0,
        Maine : 0,
        Maryland : 0,
        Massachusetts : 0,
        Michigan : 0,
        Minnesota : 0,
        Mississippi : 0,
        Missouri : 0,
        Montana : 0,
        Nebraska : 0,
        Nevada : 0,
        New_Hampshire : 0,
        New_Jersey : 0,
        New_Mexico : 0,
        New_York : 0,
        North_Carolina : 0,
        North_Dakota : 0,
        Ohio : 0,
        Oklahoma : 0,
        Oregon : 0,
        Pennsylvania : 0,
        Rhode_Island : 0,
        South_Carolina : 0,
        South_Dakota : 0,
        Tennessee : 0,
        Texas : 0,
        Utah : 0,
        Vermont : 0,
        Virginia : 0,
        Washington : 0,
        West_Virginia : 0,
        Wisconsin : 0,
        Wyoming : 0
    }, function(err,docsInserted){
        Session.set("userId", docsInserted);
        console.log(Session.get("userId"));
    });
}