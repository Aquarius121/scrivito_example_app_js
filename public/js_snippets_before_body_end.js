// This file is for executing JavaScript code immediately before the body element is closed.
// Here you can, for example, var third-party code render additional markup.
function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = `; expires=${date.toUTCString()}`;
  }
  document.cookie = `${name}=${value || ""}${expires}; path=/`;
}
function getCookie(name) {
  var nameEQ = `${name}=`;
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) === " ") {
      c = c.substring(1, c.length);
    }
    if (c.indexOf(nameEQ) === 0) {
      return c.substring(nameEQ.length, c.length);
    }
  }
  return null;
}
function eraseCookie(name) {
  document.cookie = `${name}=; Max-Age=-99999999;`;
}
var ckie = getCookie("scrivitobarryform");

function showTerms() {
  document.getElementById("terms-condition").className = "active";
  document.body.className = "fixed";
}
function closeTerms() {
  document.getElementById("terms-condition").className = "";
}

function showUX() {
  document.body.className = "fixed";
  document.getElementById("first-popup-wrapper").style.display = "block";
}

function closeUX() {
  document.getElementById("first-popup-wrapper").style.display = "none";
  document
    .getElementById("first-popup-wrapper")
    .getElementsByClassName("thanks")[0].style.display = "none";
  document
    .getElementById("first-popup-wrapper")
    .getElementsByClassName("first-popup")[0].style.display = "block";
  document.body.className = "";
}

function addUXList() {
  setTimeout(function() {
    document
      .getElementById("first-popup-wrapper")
      .getElementsByClassName("thanks")[0].style.display = "block";
    document
      .getElementById("first-popup-wrapper")
      .getElementsByClassName("first-popup")[0].style.display = "none";
  }, 500);
}

function zEWidgetOpen(tag) {
  window.$zopim.livechat.window.show();
  window.$zopim.livechat.addTags(tag);
}

function showchatbot(ind) {
  var frame = document.getElementById("chatbot").childNodes[3];
  path = ind == 1 ? 'https://me.botxo.co/webchat/81f74b1f-f58a-422a-8582-6b9ff2f39af5/?ref=181649&botxo-unbranded' : 'https://me.botxo.co/webchat/81f74b1f-f58a-422a-8582-6b9ff2f39af5/?ref=181648&botxo-unbranded';
  frame.contentWindow.location.replace(path);
  document.getElementById("chatbot").style.display = "block";
}

function closeChatbot(ind) {
  document.getElementById("chatbot").style.display = "none";
  var frame = document.getElementById("chatbot").childNodes[3];
  frame.contentWindow.location.replace("");
}

function addWaitingList() {
  var params = {
    email: document.getElementsByClassName("send-link-input1")[0].value,
    source: "homepage",
  };
  var xmlhttp = new XMLHttpRequest(); // new HttpRequest instance
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState === 4) {
      var res = JSON.parse(xmlhttp.response);
      document
        .getElementById("signup_confirmation")
        .getElementsByClassName("error")[0].style.display = "none";
      document
        .getElementById("signup_confirmation")
        .getElementsByClassName("success")[0].style.display = "none";
      if (res.error) {
        document.getElementById("signup_confirmation").className = "active";
        document
          .getElementById("signup_confirmation")
          .getElementsByClassName("error")[0].style.display = "block";
        document
          .getElementById("signup_confirmation")
          .getElementsByClassName("error")[0].innerHTML = res.messages[0];
        document.body.className = "fixed";
      } else {
        // alert("Email successfully registered");
        document.getElementById("signup_confirmation").className = "active";
        document
          .getElementById("signup_confirmation")
          .getElementsByClassName("success")[0].style.display = "block";
        document.body.className = "fixed";
      }
    }
  };
  xmlhttp.open(
    "POST",
    "https://wpk2il4zj0.execute-api.eu-central-1.amazonaws.com/dev/user/add"
  );
  xmlhttp.setRequestHeader("Content-Type", "application/json");
  xmlhttp.send(JSON.stringify(params));
}

document.body.getElementsByClassName("content-wrapper")[0].addEventListener(
  "DOMSubtreeModified",
  function() {
    if (window.location.hash != "") {
      if (document.getElementById(window.location.hash.replace("#", ""))) {
        setTimeout(function() {
          document
            .getElementById(window.location.hash.replace("#", ""))
            .scrollIntoView();
        }, 500);
      }
    }

    if (( window.location.pathname === "/signup2" || window.location.pathname === "/skift-til-barry2") &&
        document.getElementsByClassName("zEWidget-launcher").length > 0)
     {
      document.getElementsByClassName("zEWidget-launcher")[0].style =
        "display: none";
    }

    if ((window.location.pathname === "/app-vilkaar-og-betingelser" || window.location.pathname === "/leveringsbetingelser-privat" || window.location.pathname === "/france") &&
        document.getElementsByClassName("cookieConsent").length > 0)
    {
      document.getElementsByClassName("cookieConsent")[0].style="display:none !important"
    }

    if ((window.location.pathname === "/skift-til-barry5" || window.location.pathname === "/Pristjek3" || window.location.pathname === "/Pristjek-done3") && document.getElementsByClassName("footer-widget").length > 0)
    {
      document.getElementsByClassName("footer-widget")[0].className = "footer-widget type2";
    }

    if (window.location.pathname === "/france")
    {
      document.body.className = "french";
    }

    if (window.location.pathname === "/skift-til-barry6b")
    {
      document.body.className = "footer-hide";
    }

    if (window.location.pathname === "/skift-til-barry-nu" && document.getElementsByClassName("bg-dark-image").length > 0) {
      document.getElementsByClassName("bg-dark-image")[0].style="background: #FFF";
    }
    
    // if (
    //   window.location.pathname === "/signup2" &&
    //   window.location.search === "?step=2"
    // ) {
    //   if (document.getElementById("5ixrcodf")) {
    //     document.getElementById("5ixrcodf").style.display = "none";
    //   }
    //   if (document.getElementById("pxzirt4l")) {
    //     document.getElementById("pxzirt4l").style.display = "block";
    //   }
    //   setTimeout(function() {
    //     var elem = document.getElementById("pxzirt4l");
    //     if (elem) {
    //       elem.scrollIntoView();
    //     }
    //   }, 1500);
    // } else if (window.location.pathname === "/signup2") {
    //   if (document.getElementById("5ixrcodf")) {
    //     document.getElementById("5ixrcodf").style.display = "block";
    //   }
    //   if (document.getElementById("pxzirt4l")) {
    //     document.getElementById("pxzirt4l").style.display = "none";
    //   }
    // }

    if (
      window.location.pathname === "/signup4" &&
      window.location.search === "?step=2"
    ) {
      if (document.getElementById("5ixrcodf")) {
        document.getElementById("5ixrcodf").style.display = "none";
      }
      if (document.getElementById("pxzirt4l")) {
        document.getElementById("pxzirt4l").style.display = "block";
      }
      setTimeout(function() {
        var elem = document.getElementById("pxzirt4l");
        if (elem) {
          elem.scrollIntoView();
        }
      }, 1500);
    } else if (window.location.pathname === "/signup4") {
      if (document.getElementById("5ixrcodf")) {
        document.getElementById("5ixrcodf").style.display = "block";
      }
      if (document.getElementById("pxzirt4l")) {
        document.getElementById("pxzirt4l").style.display = "none";
      }
    }
  },
  false
);

setTimeout(function() {
  moreBlock = document.getElementsByClassName("more-block");
  for (index in moreBlock) {
    moreBlock[index].onclick = function(evt) {
      if (evt.target.className.indexOf("closed") >= 0) {
        evt.target.className = evt.target.className.replace("closed", "open");
      } else {
        evt.target.className = evt.target.className.replace("open", "closed");
      }
    };
  }

  if (document.getElementsByClassName("expand-more-link").length > 0) {
    expandBlock = document.getElementsByClassName("expand-more-link");
    for (index in expandBlock) {
      expandBlock[index].onclick = function(evt) {
        evt.target.nextElementSibling.className = "";
        evt.target.className += " hide-p";
      };
    }
  }

  if (document.getElementById("close_term")) {
    document.getElementById("close_term").onclick = function() {
      closeTerms();
    };
  }
  if (document.getElementById("show_term")) {
    document.getElementById("show_term").onclick = function() {
      showTerms();
    };
  }
  if (document.getElementsByClassName("send-link-button1").length > 0) {
    document.getElementsByClassName(
      "send-link-button1"
    )[0].onclick = function() {
      addWaitingList();
    };
  }
  if (document.getElementById("close_signup")) {
    document.getElementById("close_signup").onclick = function() {
      document.getElementById("signup_confirmation").className = "";
      document.body.className = "";
    };
  }

  if (document.getElementById("first-popup-close1")) {
    popupClose = document.getElementById("first-popup-close1");
    popupClose.onclick = function() {
      document.getElementById("first-popup-wrapper").style.display = "none";
      document
        .getElementById("first-popup-wrapper")
        .getElementsByClassName("thanks")[0].style.display = "none";
      document
        .getElementById("first-popup-wrapper")
        .getElementsByClassName("first-popup")[0].style.display = "block";
      document.body.className = "";
    };
  }
  if (document.getElementById("first-popup-close2")) {
    popupClose = document.getElementById("first-popup-close2");
    popupClose.onclick = function() {
      document.getElementById("first-popup-wrapper").style.display = "none";
      document.body.className = "";
    };
  }

  if (
    document.getElementById("roadmap-content") &&
    document.getElementsByClassName("navbar-fixed").length > 0
  ) {
    document
      .getElementsByClassName("navbar-fixed")[0]
      .classList.add("header-fixed");
  } else if (document.getElementsByClassName("navbar-fixed").length > 0) {
    document
      .getElementsByClassName("navbar-fixed")[0]
      .classList.remove("header-fixed");
  }

  if (document.getElementById("view-all-0")) {
    document.getElementById("view-all-0").onclick = function() {
      document.getElementById("roadmap-content").classList.add("view-all");
      document.getElementById("view-all-0").style.display = "none";
    };
  }
  if (document.getElementById("view-all-1")) {
    document.getElementById("view-container-1").onclick = function() {
      document.getElementById("view-container-1").classList.add("view-all");
    };
  }
  if (document.getElementById("view-all-2")) {
    document.getElementById("view-container-2").onclick = function() {
      document.getElementById("view-container-2").classList.add("view-all");
    };
  }
  if (document.getElementById("view-all-3")) {
    document.getElementById("view-container-3").onclick = function() {
      document.getElementById("view-container-3").classList.add("view-all");
    };
  }

  if (document.getElementById("roadmap-header-fixed")) {
    document.body.onscroll = function() {
      var rect = document
        .getElementById("sticky-point")
        .getBoundingClientRect();
      console.log(document.documentElement.scrollTop, rect.bottom);
      if (rect.top < 75) {
        document.getElementById("roadmap-header-fixed").classList.add("show");
      } else {
        document
          .getElementById("roadmap-header-fixed")
          .classList.remove("show");
      }
    };
  }
}, 5000);

var script = document.createElement("script");
script.src = "https://paperform.co/__embed";
document.body.appendChild(script);
