import { username, password } from '../key'
import $ from 'jquery'

$.getJSON(siteurl+"/login/token.php", {
    username: username,
    password: password,
    service: "moodle_mobile_app"                       
},function(json) {
    if(typeof(json.token) != 'undefined') {   
        mytoken = json.token
        
        var data = {}
        var preSets = {
            wstoken: mytoken,
            siteurl: siteurl
        }                    
        moodleWSCall('moodle_webservice_get_siteinfo', data, addSite, preSets)
        
    } else {                            
        popErrorMessage("Problem connecting to the Moodle site")
    }
})
