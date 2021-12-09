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
// DRAG
function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    elmnt.onmousedown = dragMouseDown;
  
    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }
  
    function elementDrag(e) {
      //style
      elmnt.style.border = "2px cyan solid"
      //
      e = e || window.event;
      e.preventDefault();
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // set the element's new position:
      elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
      elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }
  
    function closeDragElement() {
      // stop moving when mouse button is released:
      document.onmouseup = null;
      document.onmousemove = null;
      elmnt.onmousedown = null;
      //style
      elmnt.style.border = null;
      //
      etop = Px(document.querySelector("#window").style.top)
      elft = Px(document.querySelector("#window").style.left)
      if (etop<Px(document.querySelector("#dbar").offsetHeight)) {
          console.log(document.querySelector("#dbar").offsetHeight)
          document.querySelector("#window").style.top=(Px(document.querySelector("#dbar").offsetHeight))+"px"
      }
      if (etop+Px(document.querySelector("#window").offsetHeight)>Px(window.innerHeight)-Px(document.getElementById("menubar").offsetHeight)) {
        document.querySelector("#window").style.top=
          (Px(window.innerHeight)-
          Px(document.getElementById("menubar").offsetHeight)-
          Px(document.querySelector("#window").offsetHeight))+"px"
      }
      if (elft<0) {
        document.querySelector("#window").style.left=0
      }
      if (elft+Px(document.querySelector("#window").offsetWidth)>Px(window.innerWidth)) {
        document.querySelector("#window").style.left = 
          (Px(window.innerWidth)-Px(document.querySelector("#window").offsetWidth))+"px"
      }
    }
}
function Px(str) {
  if (str.toString().endsWith("px")) {
    return parseInt(str.toString().slice(0,str.toString().length-2))
  } else {
    return parseInt(str)
  }
}