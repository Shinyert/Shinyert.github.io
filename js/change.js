'use strict';
fetch(("https://discord-web-api.glitch.me/discord/user/936458356032413736"), {
  method : "GET",
  mode : "cors"
}).then(function(responseJson) {
  if (responseJson.ok) {
    return responseJson.json();
  }
  return Promise.reject(responseJson);
}).then(function(fieldDescribe) {
  console.log(fieldDescribe.url);
  console.log(fieldDescribe.username);
  document.getElementById("marcola").src = fieldDescribe.url;
  document.getElementById("username").src = fieldDescribe.username;
}).catch(function($ownerNode) {
  console.warn("Something went wrong.", $ownerNode);
  document.getElementById("marcola");
  document.getElementById("username");
});
'use strict';
fetch(("https://discord-web-api.glitch.me/discord/user/936514783761530971"), {
  method : "GET",
  mode : "cors"
}).then(function(responseJson) {
  if (responseJson.ok) {
    return responseJson.json();
  }
  return Promise.reject(responseJson);
}).then(function(fieldDescribe) {
  console.log(fieldDescribe.url);
  console.log(fieldDescribe.username);
  document.getElementById("metralha").src = fieldDescribe.url;
  document.getElementById("username").src = fieldDescribe.username;
}).catch(function($ownerNode) {
  console.warn("Something went wrong.", $ownerNode);
  document.getElementById("metralha");
  document.getElementById("username");
});
'use strict';
fetch(("https://discord-web-api.glitch.me/discord/user/1041803161972768768"), {
  method : "GET",
  mode : "cors"
}).then(function(responseJson) {
  if (responseJson.ok) {
    return responseJson.json();
  }
  return Promise.reject(responseJson);
}).then(function(fieldDescribe) {
  console.log(fieldDescribe.url);
  console.log(fieldDescribe.username);
  document.getElementById("yuri").src = fieldDescribe.url;
  document.getElementById("username").src = fieldDescribe.username;
}).catch(function($ownerNode) {
  console.warn("Something went wrong.", $ownerNode);
  document.getElementById("yuri");
  document.getElementById("username");
});
'use strict';
fetch(("https://discord-web-api.glitch.me/discord/user/281842204799139844"), {
  method : "GET",
  mode : "cors"
}).then(function(responseJson) {
  if (responseJson.ok) {
    return responseJson.json();
  }
  return Promise.reject(responseJson);
}).then(function(fieldDescribe) {
  console.log(fieldDescribe.url);
  console.log(fieldDescribe.username);
  document.getElementById("ecstasy").src = fieldDescribe.url;
  document.getElementById("username").src = fieldDescribe.username;
}).catch(function($ownerNode) {
  console.warn("Something went wrong.", $ownerNode);
  document.getElementById("ecstasy");
  document.getElementById("username");
});
'use strict';
fetch(("https://discord-web-api.glitch.me/discord/user/795378110110629951"), {
  method : "GET",
  mode : "cors"
}).then(function(responseJson) {
  if (responseJson.ok) {
    return responseJson.json();
  }
  return Promise.reject(responseJson);
}).then(function(fieldDescribe) {
  console.log(fieldDescribe.url);
  console.log(fieldDescribe.username);
  document.getElementById("tralha").src = fieldDescribe.url;
  document.getElementById("username").src = fieldDescribe.username;
}).catch(function($ownerNode) {
  console.warn("Something went wrong.", $ownerNode);
  document.getElementById("tralha");
  document.getElementById("username");
});
'use strict';
fetch(("https://discord-web-api.glitch.me/discord/user/795378110110629951"), {
  method : "GET",
  mode : "cors"
}).then(function(responseJson) {
  if (responseJson.ok) {
    return responseJson.json();
  }
  return Promise.reject(responseJson);
}).then(function(fieldDescribe) {
  console.log(fieldDescribe.url);
  console.log(fieldDescribe.username);
  document.getElementById("zit").src = fieldDescribe.url;
  document.getElementById("username").src = fieldDescribe.username;
}).catch(function($ownerNode) {
  console.warn("Something went wrong.", $ownerNode);
  document.getElementById("zit");
  document.getElementById("username");
});