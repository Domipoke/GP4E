/**
function log(profile) {
    if (!profile) {profile=window.localStorage.getItem("profile")}
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}


function mem(profile) {
    var s = window.localStorage
    s.setItem('ID',profile.getId());
    s.setItem('FullName',profile.getName());
    s.setItem('GivenName',profile.getGivenName());
    s.setItem('FamilyName',profile.getFamilyName());
    s.setItem('ImageURL',profile.getImageUrl());
    s.setItem('Email',profile.getEmail());
}*/
function get(key) {
    var s = window.localStorage
    return s.getItem(key)
}
function set(key,val) {
    var s = window.localStorage
    s.setItem(key,val)
}
function KeyNotNull(key) {
    var x=get(key);
    if (x!==null&&x!==undefined) {
        return true;
    } else return false
}