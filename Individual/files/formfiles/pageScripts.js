var j$ = jQuery.noConflict();
var go = true;
var ieVersion = null;
j$.cookie.json = true;
j$(document).ready(function () {
    // loadstateoptions();
    ieVersion = IeVersion();
    var inFrame = inIframe();
    j$("#AOI").multiselect({
        selectedText: "# selected"
    });
    j$(function(){
        j$("AOI").multiselect();
    });
    if(!inFrame || !ieVersion.IsIE || (ieVersion.TrueVersion > 9  && ieVersion.ActingVersion > 9)){
        j$("#ind_vol_page\\:volunteer_form\\:phone1").mask('(000) 000-0000', {placeholder: "(999) 999-9999",clearIfNotMatch: true});
        j$("#ind_vol_page\\:volunteer_form\\:phone2").mask('(000) 000-0000', {placeholder: "(999) 999-9999",clearIfNotMatch: true});
        j$("#ind_vol_page\\:volunteer_form\\:phone3").mask('(000) 000-0000', {placeholder: "(999) 999-9999",clearIfNotMatch: true});
        j$("#ind_vol_page\\:volunteer_form\\:phone4").mask('(000) 000-0000', {placeholder: "(999) 999-9999",clearIfNotMatch: true});
        j$("#ind_vol_page\\:volunteer_form\\:dob").mask('00/00/0000', {placeholder: "mm/dd/yyyy",clearIfNotMatch: true});
    }
    else{
        j$("#ind_vol_page\\:volunteer_form\\:phone1").attr("onblur", 'javascript:phoneMask(j$(this));');
        j$("#ind_vol_page\\:volunteer_form\\:phone1").attr("onfocus", 'javascript:maskClear(j$(this));');
        j$("#ind_vol_page\\:volunteer_form\\:phone1").attr("maxlength", '14');
        j$("#ind_vol_page\\:volunteer_form\\:phone2").attr("onblur", 'javascript:phoneMask(j$(this));');
        j$("#ind_vol_page\\:volunteer_form\\:phone2").attr("onfocus", 'javascript:maskClear(j$(this));');
        j$("#ind_vol_page\\:volunteer_form\\:phone2").attr("maxlength", '14');
        j$("#ind_vol_page\\:volunteer_form\\:phone3").attr("onblur", 'javascript:phoneMask(j$(this));');
        j$("#ind_vol_page\\:volunteer_form\\:phone3").attr("onfocus", 'javascript:maskClear(j$(this));');
        j$("#ind_vol_page\\:volunteer_form\\:phone3").attr("maxlength", '14');
        j$("#ind_vol_page\\:volunteer_form\\:phone3")[0].value = "(999) 999-9999";
        j$("#ind_vol_page\\:volunteer_form\\:phone4").attr("onblur", 'javascript:phoneMask(j$(this));');
        j$("#ind_vol_page\\:volunteer_form\\:phone4").attr("onfocus", 'javascript:maskClear(j$(this));');
        j$("#ind_vol_page\\:volunteer_form\\:phone4").attr("maxlength", '14');

        j$("#ind_vol_page\\:volunteer_form\\:dob").attr("onblur", 'javascript:dateMask(j$(this));');
        j$("#ind_vol_page\\:volunteer_form\\:dob").attr("onfocus", 'javascript:maskClear(j$(this));');
        j$("#ind_vol_page\\:volunteer_form\\:dob").attr("maxlength", '10');
        j$("#ind_vol_page\\:volunteer_form\\:dob")[0].value = "MM/DD/YYYY";
    }
    j$(".img").tooltip({
        tooltipClass: "custom-tooltip",
        position: {
            my: "left top",
            at: "center-1 center"
        }
    });
    var tables = j$(".multiSelectPicklistTable");
    for(var i = 0; i < tables.length; i++){
        tables.addClass('msplt');
        tables[i].hidden = true;
    }
    j$("#ind_vol_page\\:volunteer_form\\:sub").addClass("btn");
    //Prevent Enter from causing form submission
    j$('input, select, .txt').keydown( function(e) {
        var key = e.charCode ? e.charCode : e.keyCode ? e.keyCode : 0;
        if(key == 13) {
            e.preventDefault();
            //var inputs = j$(this).closest('form').find(':input:visible');
            //inputs.eq( inputs.index(this)+ 1 ).focus();
        }
    });
    j$("#j_id0\\:frm\\:j_id12\\:14\\:j_id16_unselected").multiselect();
    // j$("#ind_vol_page\\:volunteer_form\\:type")[0].value = j$(location)[0].search.split("&")[0].split("=")[1];
    // filloptgrptable();
    // j$("#ind_vol_page\\:volunteer_form\\:newl")[0].checked = true;
    // j$("#state").find("option:contains('Illinois')")[0].selected = true;
    // j$("#ind_vol_page\\:volunteer_form\\:state2")[0].value = 'IL';
    // if(!inFrame){
    //     var hidden = j$(".hid");
    //     for(var i = hidden.length-1; i >= 0; i--){
    //         hidden[i].className = '';
    //     }
    //     j$("#cancel")[0].href = '/volunteers/Manna_Meal_Home_Page'+j$(location)[0].search.split("&")[0];
    //     j$("#main")[0].className = "main";
    // }
    // var type = j$("#ind_vol_page\\:volunteer_form\\:type")[0].value
    // if(inIframe && type.toLowerCase() !== 'men' && type.toLowerCase() !== 'women'){
    //     var unhide = j$(".hida");
    //     for(var i = unhide.length-1; i >= 0; i--){
    //         unhide[i].className = 'hids label';
    //     }
    // }
    // if(ieVersion.IsIE && (ieVersion.TrueVersion <= 10  || ieVersion.ActingVersion <= 10)){
    //     j$("#ind_vol_page\\:volunteer_form\\:email1").removeAttr("hidden");
    //
    //     j$("#ind_vol_page\\:volunteer_form\\:email2").removeAttr("hidden");
    //     j$("#ind_vol_page\\:volunteer_form\\:email2").addClass("hidden");
    //
    //     j$("#ind_vol_page\\:volunteer_form\\:phone1").removeAttr("hidden");
    //     j$("#ind_vol_page\\:volunteer_form\\:phone1").addClass("hidden");
    //
    //     j$("#ind_vol_page\\:volunteer_form\\:phone2").removeAttr("hidden");
    //     j$("#ind_vol_page\\:volunteer_form\\:phone2").addClass("hidden");
    //
    //     j$("#ind_vol_page\\:volunteer_form\\:phone3").removeAttr("hidden");
    //
    //     j$("#ind_vol_page\\:volunteer_form\\:phone4").removeAttr("hidden");
    //     j$("#ind_vol_page\\:volunteer_form\\:phone4").addClass("hidden");
    // }
    retrieve_time();
    // check();
});

function IeVersion() {
    //Set defaults
    var value = {
        IsIE: false,
        TrueVersion: 0,
        ActingVersion: 0,
        CompatibilityMode: false
    };

    //Try to find the Trident version number
    var trident = navigator.userAgent.match(/Trident\/(\d+)/);
    if (trident) {
        value.IsIE = true;
        //Convert from the Trident version number to the IE version number
        value.TrueVersion = parseInt(trident[1], 10) + 4;
    }

    //Try to find the MSIE number
    var msie = navigator.userAgent.match(/MSIE (\d+)/);
    if (msie) {
        value.IsIE = true;
        //Find the IE version number from the user agent string
        value.ActingVersion = parseInt(msie[1]);
    }
    else {
        //Must be IE 11 in "edge" mode
        value.ActingVersion = value.TrueVersion;
    }

    //If we have both a Trident and MSIE version number, see if they're different
    if (value.IsIE && value.TrueVersion > 0 && value.ActingVersion > 0) {
        //In compatibility mode if the trident number doesn't match up with the MSIE number
        value.CompatibilityMode = value.TrueVersion != value.ActingVersion;
    }
    return value;
}

function phoneMask(currentNode){
    var temp = currentNode[0].value;
    var phone;
    if(typeof(temp) !== 'undefined' && (temp !== null || temp !== '')){
        temp = temp.replace(/-|\(|\)|\s+/g, "");
        if(temp.match(/\d{10}/) !== null && temp.length === 10){
            phone = "(" + temp.substr(0,3) + ") " + temp.substr(3,3) + "-" + temp.substr(6,4);
            currentNode[0].value = phone;
            return;
        }
        currentNode[0].value = "";
    }
}

function maskClear(currentNode){
    var temp = currentNode[0].value;
    if(typeof(temp) !== 'undefined' && (temp !== null || temp !== '')){
        if(temp === "(999) 999-9999" || temp === "MM/DD/YYYY"){
            currentNode[0].value = "";
        }
    }
}

function dateMask(currentNode){
    var temp = currentNode[0].value;
    if(typeof(temp) !== 'undefined' && (temp !== null || temp !== '')){
        temp = temp.replace(/^\s+|\s+$/g, '');
        temp = temp.replace(/-|\s|\./g, '/');
        if(temp.match(/^(\d{2})\/(\d{2})\/(\d{4})$/) !== null && temp.length === 10){
            currentNode[0].value = temp;
            return;
        }
        if(temp.match(/^(\d{1})\/(\d{2})\/(\d{4})$/) !== null && temp.length === 9){
            currentNode[0].value = "0" + temp;
            return;
        }
        if(temp.match(/^(\d{2})\/(\d{1})\/(\d{4})$/) !== null && temp.length === 9){
            currentNode[0].value = temp.substr(0,3)+ "0" + temp.substr(3);
            return;
        }
        if(temp.match(/^(\d{1})\/(\d{1})\/(\d{4})$/) !== null && temp.length === 8){
            currentNode[0].value = "0" + temp.substr(0,2)+ "0" + temp.substr(2);
            return;
        }
        if(temp.match(/^\d{8}$/) !== null && temp.length === 8){
            currentNode[0].value = temp.substr(0,2) + "/" + temp.substr(2,2) + "/" + temp.substr(4,4);
            return;
        }
        currentNode[0].value = "";
    }
}

function toProperCase(s){
    s.toLowerCase();
    s = s.replace(/\s+/g," ");
    return s.toLowerCase().replace(/^(.)|\s+(.)/g,
        function($1) { return $1.toUpperCase(); });
}

function inIframe () {
    try {
        return window.self !== window.top;
    } catch (e) {
        return true;
    }
}

// function check(){
//     if(j$("#ind_vol_page\\:volunteer_form\\:job-sel").find(":selected")[0].value.indexOf("-VP") != -1){
//         var hidList = j$(".hids");
//         if(hidList.length > 0){
//             for(var i = hidList.length-1; i >= 0; i--){
//                 hidList[i].className = "unhids label";
//             }
//         }
//     }
//     else{
//        var unhidList = j$(".unhids");
//         if(unhidList.length > 0){
//             for(var i = unhidList.length-1; i >= 0; i--){
//                 unhidList[i].className = "hids label";
//             }
//             j$("#ind_vol_page\\:volunteer_form\\:hours")[0].value="";
//         }
//     }
// }

function getHours(){
    var hour1 = parseInt(j$("#s-hour")[0].value);
    var hour2 = parseInt(j$("#e-hour")[0].value);
    var min1 = parseInt(j$("#s-min")[0].value);
    var min2 = parseInt(j$("#e-min")[0].value);
    if(min1 == 15){
        min1 = .25;
    }
    else if(min1 == 30){
        min1 = .50;
    }
    else if(min1 == 45){
        min1 = .75;
    }
    else{
        min1 = .00;
    }
    if(min2 == 15){
        min2 = .25;
    }
    else if(min2 == 30){
        min2 = .50;
    }
    else if(min2 == 45){
        min2 = .75;
    }
    else{
        min2 = .00;
    }
    hour1 = hour1%12;
    hour2 = hour2%12;
    var time1 = hour1+min1;
    var time2 = hour2+min2;
    if(j$("#s-am")[0].value == "AM" && j$("#e-am")[0].value == "PM"){
        time2 += 12;
    }
    if(j$("#s-am")[0].value == "PM" && j$("#e-am")[0].value == "AM"){
        return false;
    }
    if(time2-time1 > 0){
        j$("#ind_vol_page\\:volunteer_form\\:hours")[0].value = time2-time1;
        return true;
    }
    else{
        j$("#ind_vol_page\\:volunteer_form\\:hours")[0].value = "";
        return false;
    }
}

// function loadstateoptions(){
//     var slt = document.getElementById("state");
//     //slt.removeChild(slt[0]);
//     for(var i = 0; i < countryjson.Countries.length; i++){
//         var optgrp = document.createElement("optgroup");
//         optgrp.label = countryjson.Countries[i].Name;
//         for(var j = 0; j< countryjson.Countries[i].States.length; j++){
//             var option = document.createElement("option");
//             option.value = countryjson.Countries[i].States[j].Abbr;
//             option.appendChild(document.createTextNode(countryjson.Countries[i].States[j].Name));
//             optgrp.appendChild(option);
//         }
//         slt.appendChild(optgrp);
//     }
// }

function filloptgrptable(){
    var optgrp = [];
    for (var j = 0; j < 4; j++){
        optgrp[j] = document.createElement("optgroup");
        optgrp[j].id = "opt"+j;
    }
    optgrp[0].label = "Youth Development";
    optgrp[1].label = "Homeless Intervention";
    optgrp[2].label = "Neighborhood Transformation";
    optgrp[3].label = "Behind the Scenes";
    var lists = [];
    lists[0] = j$("#j_id0\\:frm\\:j_id12\\:14\\:j_id16_unselected optgroup")[0];

    for(var outer = 0; outer < lists.length; outer++){
        for(var iter = 0; iter < lists[outer].length; iter++){
                var opt1 = document.createElement("option");
                opt1.value = lists[outer][iter].value;
                opt1.appendChild(document.createTextNode(lists[outer][iter].value));
                optgrp[outer].appendChild(opt1);
        }
        j$("#AOI")[0].appendChild(optgrp[outer]);
    }
    j$("select#AOI").multiselect("refresh");
}

function distributeselections(){
    var vol_ops = j$("#AOI")[0];
    unselectAll(j$("#ind_vol_page\\:volunteer_form\\:yd_selected")[0], "yd");
    unselectAll(j$("#ind_vol_page\\:volunteer_form\\:hi_selected")[0], "hi");
    unselectAll(j$("#ind_vol_page\\:volunteer_form\\:nt_selected")[0], "nt");
    unselectAll(j$("#ind_vol_page\\:volunteer_form\\:bs_selected")[0], "bs");
    unselectAll(j$("#ind_vol_page\\:volunteer_form\\:oi_selected")[0], "oi");
    var youthun = j$("#ind_vol_page\\:volunteer_form\\:yd_unselected")[0];
    var homeun = j$("#ind_vol_page\\:volunteer_form\\:hi_unselected")[0];
    var neighun = j$("#ind_vol_page\\:volunteer_form\\:nt_unselected")[0];
    var behindun = j$("#ind_vol_page\\:volunteer_form\\:bs_unselected")[0];
    var oiun = j$("#ind_vol_page\\:volunteer_form\\:oi_unselected")[0];
    var list1length = j$("#ind_vol_page\\:volunteer_form\\:yd_unselected")[0].length;
    var list2length = j$("#ind_vol_page\\:volunteer_form\\:hi_unselected")[0].length;
    var list3length = j$("#ind_vol_page\\:volunteer_form\\:nt_unselected")[0].length;
    var list4length = j$("#ind_vol_page\\:volunteer_form\\:bs_unselected")[0].length;
    for(var k = 0; k < vol_ops.length; k++){
        /*if(k < list1length){
            if(vol_ops[k].selected){
                j$("#ind_vol_page\\:volunteer_form\\:yd_unselected").find("option:contains('"+vol_ops[k].value+"')")[0].selected = true;
            }
        }
        else if(k >= list1length && k < list1length+list2length){
            if(k == list1length){
                j$("#ind_vol_page\\:volunteer_form\\:yd_right_arrow")[0].click();
            }
            if(vol_ops[k].selected){
                j$("#ind_vol_page\\:volunteer_form\\:hi_unselected").find("option:contains('"+vol_ops[k].value+"')")[0].selected = true;
            }
        }
        else if(k >= list1length+list2length && k < list1length+list2length+list3length){
            if(k == list2length+list1length){
                j$("#ind_vol_page\\:volunteer_form\\:hi_right_arrow")[0].click();
            }
            if(vol_ops[k].selected){
                j$("#ind_vol_page\\:volunteer_form\\:nt_unselected").find("option:contains('"+vol_ops[k].value+"')")[0].selected = true;
            }
        }
        else if(k >= list1length+list2length+list3length && k < list1length+list2length+list3length+list4length){
            if(k == list2length+list1length+list3length){
                j$("#ind_vol_page\\:volunteer_form\\:nt_right_arrow")[0].click();
            }
            if(vol_ops[k].selected){
                j$("#ind_vol_page\\:volunteer_form\\:bs_unselected").find("option:contains('"+vol_ops[k].value+"')")[0].selected = true;
            }
        }*/
        if(vol_ops[k].selected){
            j$("#ind_vol_page\\:volunteer_form\\:oi_unselected").find("option:contains('"+vol_ops[k].value+"')")[0].selected = true;
        }
        if(k == list1length+list2length+list3length+list4length-1){
            //j$("#ind_vol_page\\:volunteer_form\\:bs_right_arrow")[0].click();
            j$("#ind_vol_page\\:volunteer_form\\:oi_right_arrow")[0].click();
        }
    }
}
function unselectAll(picker, id){
    for(var i = 0; i < picker.length; i++){
        picker[i].selected = true;
    }
    j$("#ind_vol_page\\:volunteer_form\\:"+id+"_left_arrow")[0].click();
}

function isValidDate(dateStr){
    var datePat = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/;
    var matchArray = dateStr.match(datePat);
    if (matchArray == null) {
        return false;
    }
    var month = matchArray[1];
    var day = matchArray[2];
    var year = matchArray[3];
    if(month < 1 || month > 12){return false;}
    if(day < 1 || day > 31){return false;}
    var cyear = new Date().getFullYear();
    if(year > cyear || year < cyear-120){return false;}
    if ((month==4 || month==6 || month==9 || month==11) && day==31) {return false;}
    if (month == 2) {
        var isleap = (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0));
        if (day>29 || (day==29 && !isleap)) { return false; }
    }
    return true;
}

function validateBoxes(){
    if(go){
        j$("#ind_vol_page\\:volunteer_form\\:submit")[0].src = disa;
        j$("#ind_vol_page\\:volunteer_form\\:submit")[0].disabled = true;
        go = false;
        distributeselections();
        var fname = ((j$("#ind_vol_page\\:volunteer_form\\:fname").val() === "") ? false : true);
        var lname = ((j$("#ind_vol_page\\:volunteer_form\\:lname").val() === "") ? false : true);
        var email = "";
        var emailtype = j$("#ind_vol_page\\:volunteer_form\\:emailt").val();
        if(emailtype == "Personal"){
            email = j$("#ind_vol_page\\:volunteer_form\\:email1").val();
        }
        else if(emailtype == "Work"){
            email = j$("#ind_vol_page\\:volunteer_form\\:email2").val();
        }
        else{
            email = j$("#ind_vol_page\\:volunteer_form\\:email2").val();
        }
        var phone = "";
        var bphonetype = false;
        var phonetype = j$("#ind_vol_page\\:volunteer_form\\:phonet").val();
        if(phonetype == "Home"){
            phone = ((j$("#ind_vol_page\\:volunteer_form\\:phone1").val() === "") ? false : true);
            bphonetype = true;
        }
        else if(phonetype == "Work"){
            phone = ((j$("#ind_vol_page\\:volunteer_form\\:phone3").val() === "") ? false : true);
            bphonetype = true;
        }
        else if(phonetype == "Mobile"){
            phone = ((j$("#ind_vol_page\\:volunteer_form\\:phone2").val() === "") ? false : true);
            bphonetype = true;
        }
        else if(phonetype == "Other"){
            phone = ((j$("#ind_vol_page\\:volunteer_form\\:phone4").val() === "") ? false : true);
            bphonetype = true;
        }
        else{
            phone = ((j$("#ind_vol_page\\:volunteer_form\\:phone3").val() === "") ? false : true);
            bphonetype = false;
        }
        var bday = ((j$("#ind_vol_page\\:volunteer_form\\:dob").val() === "") ? false : true);
        var stre = ((j$("#ind_vol_page\\:volunteer_form\\:add1").val() === "") ? false : true);
        var city = ((j$("#ind_vol_page\\:volunteer_form\\:city").val() === "") ? false : true);
        var state = ((j$("#ind_vol_page\\:volunteer_form\\:state2").val() === "") ? false : true);
        var zip = ((j$("#ind_vol_page\\:volunteer_form\\:zip").val() === "") ? false : true);
        var how = ((j$("#ind_vol_page\\:volunteer_form\\:hdyh").val() === "") ? false : true);
        var job = ((j$("#ind_vol_page\\:volunteer_form\\:job-sel")[0].value == "None") ? false : true);
        var med = document.getElementById("ind_vol_page:volunteer_form:M-release").checked;
        var time = true;
        var res = false;
        var bemail = false;
        var bemailtype = false;
        var li = null;
        if(j$("#error")[0].childElementCount > 0){
            j$("#error").children().remove();
            j$("#error")[0].innerHTML = "";
        }
        var unlist = document.createElement("ul");
        if(!fname){
            li = null;
            li = document.createElement("li");
            li.innerHTML = "First Name is required.";
            unlist.appendChild(li);
        }
        if(!lname){
            li = null;
            li = document.createElement("li");
            li.innerHTML = "Last Name is required.";
            unlist.appendChild(li);
        }
        if(typeof(email) != "undefined" && email !== ""){
            var re = /.*@.*\..*/i;
            if(email.match(re) !== null){
                bemail = true;
            }
            else{
                li = null;
                li = document.createElement("li");
                li.innerHTML = "Please enter a valid email address.";
                unlist.appendChild(li);
            }
        }
        else{
            li = null;
            li = document.createElement("li");
            li.innerHTML = "Email is required.";
            unlist.appendChild(li);
        }
        if(typeof(emailtype) != "undefined" && emailtype !== "" && emailtype != "--None--"){
            bemailtype = true;
        }
        else{
            li = null;
            li = document.createElement("li");
            li.innerHTML = "Email Type is required.";
            unlist.appendChild(li);
        }
        if(phone){
            if(!bphonetype){
                li = null;
                li = document.createElement("li");
                li.innerHTML = "Phone type is required if phone is entered.";
                unlist.appendChild(li);
            }
        }
        else{
            if(bphonetype){
                li = null;
                li = document.createElement("li");
                li.innerHTML = "Phone is required if phone type is entered.";
                unlist.appendChild(li);
            }
        }
        if(!bday){
            li = null;
            li = document.createElement("li");
            li.innerHTML = "Date of Birth is required.";
            unlist.appendChild(li);
        }
        else if(bday){
            if(!isValidDate(j$("#ind_vol_page\\:volunteer_form\\:dob").val())){
                li = null;
                li = document.createElement("li");
                li.innerHTML = "Date of Birth is not valid.";
                unlist.appendChild(li);
            }
        }
        if(!stre){
            li = null;
            li = document.createElement("li");
            li.innerHTML = "Home Address is required.";
            unlist.appendChild(li);
        }
        if(!city){
            li = null;
            li = document.createElement("li");
            li.innerHTML = "Home City is required.";
            unlist.appendChild(li);
        }
        if(!state){
            li = null;
            li = document.createElement("li");
            li.innerHTML = "Home State/Province is required.";
            unlist.appendChild(li);
        }
        if(!zip){
            li = null;
            li = document.createElement("li");
            li.innerHTML = "Home Zip/Postal Code is required.";
            unlist.appendChild(li);
        }
        if(!how){
            li = null;
            li = document.createElement("li");
            li.innerHTML = "Please indicate how you heard about Breakthrough.";
            unlist.appendChild(li);
        }
        if(j$("#ind_vol_page\\:volunteer_form\\:job-sel").find(":selected")[0].value.indexOf("-VP") != -1){
            time = getHours();
        }
        if(!time){
            li = null;
            li = document.createElement("li");
            li.innerHTML = "End time must be greater than start time.";
            unlist.appendChild(li);
        }
        var type = j$("#ind_vol_page\\:volunteer_form\\:type")[0].value.toLowerCase();
        if(!job && !inIframe() && (type === 'men' || type === 'women')){
            li = null;
            li = document.createElement("li");
            li.innerHTML = "Please select a volunteer job.";
            unlist.appendChild(li);
        }
        if(!med){
            li = null;
            li = document.createElement("li");
            li.innerHTML = "Media and Liability Release consent is required before continuing.";
            unlist.appendChild(li);
        }
        if(fname && lname && bemail && bemailtype && bday && stre && city && state && zip && how && med &&((phone && bphonetype)||(!phone && !bphonetype))&&(((!inIframe() || (type === 'men' || type === 'women'))&&(job && time)) || (inIframe() && (type !== 'men' && type !== 'women') && (!job && time)))){
            store_time();
            res = true;
        }
        else{
            j$("#error")[0].innerHTML = "The following requires attention:";
            document.getElementById("error").appendChild(unlist);
            document.body.scrollTop = document.documentElement.scrollTop = 0;
            var inFrame = inIframe();
            if(inFrame){
                //window.parent.window.scrollTo(0,0);
                window.parent.postMessage('scroll', 'http://www.breakthrough.org');
            }
            go = true;
            j$("#ind_vol_page\\:volunteer_form\\:submit")[0].src = active;
            j$("#ind_vol_page\\:volunteer_form\\:submit")[0].disabled = false;
        }
        j$("#ind_vol_page\\:volunteer_form\\:submit")[0].disabled = false;
        return res;
    }
    return false;
}

function switchEmailInputs(){
    var home = j$("#ind_vol_page\\:volunteer_form\\:email1");
    var work = j$("#ind_vol_page\\:volunteer_form\\:email2");
    var type = j$("#ind_vol_page\\:volunteer_form\\:emailt")[0].value;
    if(ieVersion !== null && (!ieVersion.IsIE || (ieVersion.TrueVersion > 10  && ieVersion.ActingVersion > 10))){
        if(type == "Personal"){
            if(!work[0].hidden){
                work[0].hidden = true;
                work[0].required = false;
                home[0].value = work[0].value;
                work[0].value = "";
                home[0].hidden = false;
                home[0].required = true;
            }
        }
        else if(type == "Work"){
            if(!home[0].hidden){
                work[0].hidden = false;
                work[0].required = true;
                work[0].value = home[0].value;
                home[0].value = "";
                home[0].hidden = true;
                home[0].required = false;
            }
        }
    }
    else{
        if(type == "Personal"){
            if(!work.hasClass("hidden")){
                work.addClass("hidden");
                work[0].required = false;
                home[0].value = work[0].value;
                work[0].value = "";
                home.removeClass("hidden");
                home[0].required = true;
            }
        }
        else if(type == "Work"){
            if(!home.hasClass("hidden")){
                work.removeClass("hidden");
                work[0].required = true;
                work[0].value = home[0].value;
                home[0].value = "";
                home.addClass("hidden");
                home[0].required = false;
            }
        }
    }
}

function switchPhoneInputs(){
    var homep = j$("#ind_vol_page\\:volunteer_form\\:phone1");
    var mobilep = j$("#ind_vol_page\\:volunteer_form\\:phone2");
    var workp = j$("#ind_vol_page\\:volunteer_form\\:phone3");
    var otherp = j$("#ind_vol_page\\:volunteer_form\\:phone4");
    var typep = j$("#ind_vol_page\\:volunteer_form\\:phonet")[0].value;
    var input = "";
    if(ieVersion !== null && (!ieVersion.IsIE || (ieVersion.TrueVersion > 10  && ieVersion.ActingVersion > 10))){
        if(homep[0].value != ""){
            input = homep[0].value;
            homep[0].value = "";
        }
        if(mobilep[0].value != ""){
            input = mobilep[0].value;
            mobilep[0].value = "";
        }
        if(workp[0].value != ""){
            input = workp[0].value;
            workp[0].value = "";
        }
        if(otherp[0].value != ""){
            input = otherp[0].value;
            otherp[0].value = "";
        }
        if(typep=="Work"){
            workp[0].value = input;
            if(workp[0].hidden == true){
                workp[0].hidden = false;
                homep[0].hidden = true;
                mobilep[0].hidden = true;
                otherp[0].hidden = true;
            }
        }
        else if(typep=="Household"){
            homep[0].value = input;
            if(homep[0].hidden == true){
                workp[0].hidden = true;
                homep[0].hidden = false;
                mobilep[0].hidden = true;
                otherp[0].hidden = true;
            }
        }
        else if(typep=="Mobile"){
            mobilep[0].value = input;
            if(mobilep[0].hidden == true){
                workp[0].hidden = true;
                homep[0].hidden = true;
                mobilep[0].hidden = false;
                otherp[0].hidden = true;
            }
        }
        else if(typep=="Other"){
            otherp[0].value = input;
            if(otherp[0].hidden == true){
                workp[0].hidden = true;
                homep[0].hidden = true;
                mobilep[0].hidden = true;
                otherp[0].hidden = false;
            }
        }
        else{
            workp[0].value = input;
            if(workp[0].hidden == true){
                workp[0].hidden = false;
                homep[0].hidden = true;
                mobilep[0].hidden = true;
                otherp[0].hidden = true;
            }
        }
    }
    else{
        if(homep[0].value != ""){
            input = homep[0].value;
            homep[0].value = "";
        }
        if(mobilep[0].value != ""){
            input = mobilep[0].value;
            mobilep[0].value = "";
        }
        if(workp[0].value != ""){
            input = workp[0].value;
            workp[0].value = "";
        }
        if(otherp[0].value != ""){
            input = otherp[0].value;
            otherp[0].value = "";
        }
        if(typep=="Work"){
            workp[0].value = input;
            if(workp.hasClass("hidden")){
                workp.removeClass("hidden");
                homep.addClass("hidden");
                mobilep.addClass("hidden");
                otherp.addClass("hidden");
            }
        }
        else if(typep=="Household"){
            homep[0].value = input;
            if(homep.hasClass("hidden")){
                workp.addClass("hidden");
                homep.removeClass("hidden");
                mobilep.addClass("hidden");
                otherp.addClass("hidden");
            }
        }
        else if(typep=="Mobile"){
            mobilep[0].value = input;
            if(mobilep.hasClass("hidden")){
                workp.addClass("hidden");
                homep.addClass("hidden");
                mobilep.removeClass("hidden");
                otherp.addClass("hidden");
            }
        }
        else if(typep=="Other"){
            otherp[0].value = input;
            if(otherp.hasClass("hidden")){
                workp.addClass("hidden");
                homep.addClass("hidden");
                mobilep.addClass("hidden");
                otherp.removeClass("hidden");
            }
        }
        else{
            workp[0].value = input;
            if(workp.hasClass("hidden")){
                workp.removeClass("hidden");
                homep.addClass("hidden");
                mobilep.addClass("hidden");
                otherp.addClass("hidden");
            }
        }
    }
}

function store_time(){
    var time_obj = {};
    time_obj.stime = {};
    time_obj.etime = {};
    time_obj.stime.hour = j$("#s-hour").val();
    time_obj.stime.minute = j$("#s-min").val();
    time_obj.stime.am = j$("#s-am").val();
    time_obj.etime.hour = j$("#e-hour").val();
    time_obj.etime.minute = j$("#e-min").val();
    time_obj.etime.am = j$("#e-am").val();
    j$.cookie('time', time_obj);
}

function retrieve_time(){
    if(typeof(j$.cookie('time')) !== 'undefined'){
        var time_obj = j$.cookie('time');
        j$("#s-hour").val(time_obj.stime.hour);
        j$("#s-min").val(time_obj.stime.minute);
        j$("#s-am").val(time_obj.stime.am);
        j$("#e-hour").val(time_obj.etime.hour);
        j$("#e-min").val(time_obj.etime.minute);
        j$("#e-am").val(time_obj.etime.am);
        j$.removeCookie('time');
    }
}
