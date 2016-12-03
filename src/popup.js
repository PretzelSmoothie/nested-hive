// Copyright (c) 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

document.addEventListener('DOMContentLoaded', onInit, false);
var update;
var updateMe;
var myUrl = "";
function onInit(){
  alert("running");
  update = document.getElementById("update");
  updateMe = document.getElementById("updateMe");

  /*update.addEventListener('click', function() {
    getCurrentTabUrl(function(url) {
      //set updateMe URL
      updateMe = document.getElementById("linkToUpdate");
      updateMe.setAttribute("href", url);
    });
  });*/

  update.addEventListener('click', function () {
    getTab();
  });

}


/**
 * Get the current URL.
 *
 * @param {function(string)} callback - called when the URL of the current tab
 *   is found.
 */

 /* When the user clicks on the button,
 toggle between hiding and showing the dropdown content */
//console.log(output);



function getCurrentTabUrl(callback) {
  // Query filter to be passed to chrome.tabs.query - see
  // https://developer.chrome.com/extensions/tabs#method-query
  var queryInfo = {
    active: true,
    currentWindow: true
  };

  chrome.tabs.query(queryInfo, function(tabs) {

    var tab = tabs[0];

    // A tab is a plain object that provides information about the tab.
    // See https://developer.chrome.com/extensions/tabs#type-Tab
    var url = tab.url;

    // tab.url is only available if the "activeTab" permission is declared.
    // If you want to see the URL of other tabs (e.g. after removing active:true
    // from |queryInfo|), then the "tabs" permission is required to see their
    // "url" properties.
    console.assert(typeof url == 'string', 'tab.url should be a string');



    callback(url);
  });
  }


function getTab() {
  var queryInfo = {
    active: true,
    currentWindow: true
  };
  chrome.tabs.query(queryInfo, function(tabs) {
    myUrl = tabs[0].url;
    alert(myUrl);

  });

}



//ADDITION FOR TESTING

//when UPDATE is clicked, we want to change the url of UPDATEME
