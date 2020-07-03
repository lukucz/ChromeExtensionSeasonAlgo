console.log("Background running");
chrome.webNavigation.onCompleted.addListener(function(details) {
    chrome.tabs.executeScript(details.tabId, {
        code: ' if (document.body.innerText.indexOf("Cat") !=-1) {' +
              '     var spreads = document.getElementsByClassName("searchName");' +
			  '		for(spread of spreads){' +
			  '			var txt = spread.innerText; '+
			  '			var res = txt.split(\'-\'); '+
			  '			if (res.length == 2){ '+
			  '				var Y0 = res[0].slice(-2); '+
			  '				var Y1 = res[1].slice(-2); '+
			  '				var bear = true; '+
			  '				if(Y0>Y1){ '+
			  '					bear = true; '+
			  '				}else{ '+
			  '					bear = false; '+
			  '				}'+
			  '				if(Y0 == Y1){'+
			  '					var M0 = res[0].slice(-3,-2); '+
			  '					var N0 = M0.charCodeAt(0); '+
			  '					var M1 = res[1].slice(-3,-2); '+
			  '					var N1 = M1.charCodeAt(0); '+
			  '					if(N0>N1){ '+
			  '						bear = true; '+
			  '					}else{ '+
			  '						bear = false; '+
			  '					}'+
			  '				}'+
			  '				if(bear){'+
			  '					spread.parentNode.style[\'background-color\'] = \'#ffcccc\'; '+
			  '				}else{'+
			  '					spread.parentNode.style[\'background-color\'] = \'#e6ffe6\'; ' +
			  '				}'+
			  '			}' +
			  '		}' +
              ' }'
    });
}, {
    url: [{
        hostContains: '.seasonalgo.'
    }],
});