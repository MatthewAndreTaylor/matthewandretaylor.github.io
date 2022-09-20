// Page buttons
const body = document.querySelector('body');
const sidebar = body.querySelector('nav');
const toggle = body.querySelector(".toggle");
const modeSwitch = body.querySelector(".toggle-switch");
const modeText = body.querySelector(".mode-text");

// Sidebar toggle
toggle.addEventListener("click", () =>{
  if(localStorage.closed != "close" ){
    sidebar.classList.toggle("close", true);
    localStorage.closed = "close"
  }
  else{
    sidebar.classList.toggle("close", false);
    localStorage.closed = "open"
  }
})

// Toggle Dark Mode (part in html to not flash on page load)
if (localStorage.toggled != "dark" ){
  modeText.innerText = "Dark mode";
} else {
  modeText.innerText = "Light mode";
}

modeSwitch.addEventListener("click" ,function(){
	//localstorage values are always strings (no booleans!)  
	if (localStorage.toggled != "dark" ){
		$('body').toggleClass("dark", true );
		localStorage.toggled = "dark";
		modeText.innerText = "Light mode";
	} else {
		$('body').toggleClass("dark", false );
		localStorage.toggled = "light";
		modeText.innerText = "Dark mode";
	}
});

// Adjust sidebar for screensize (mobile)
$(window).resize(function(){
	if($(window).width()<900){
	  localStorage.setItem('closed', 'close');
	  $('.sidebar').addClass('close');
	}
});

if($(window).width()<900){
	localStorage.setItem('closed', 'close');
	$('.sidebar').addClass('close');
}

$(function () {
  $("[rel='tooltip']").tooltip();
});

// Data: (generic,success,error,warning,info)
function createToast(data,str){
	$.toast(data,str);
}
  
  // Return custom toast
  (function(window, $){
	"use strict";
  
	var defaultConfig = {
	  type: '',
	  autoDismiss: true,
	  container: '#toasts',
	  autoDismissDelay: 5000,
	  transitionDuration: 500
	};
  
	$.toast = function(config){
	  var size = arguments.length;
	  var isString = typeof(config) === 'string';
	  
	  if(isString && size === 1){
		config = {
		  message: config
		};
	  }
  
	  if(isString && size === 2){
		config = {
		  message: arguments[1],
		  type: arguments[0]
		};
	  }
	  return new toast(config);
	};
  
	var toast = function(config){
	  config = $.extend({}, defaultConfig, config);
	  // show "x" or not (leave first blank to not show the x )
	  var close = $(window).width()<850 ? '' : '&times;';
	  
	  // toast template
	  var toast = $([
		'<div class="toast ' + config.type + '">',
		'<p>' + config.message + '</p>',
		'<div class="close">' + close + '</div>',
		'</div>'
	  ].join(''));
	  
	  // handle dismiss
	  toast.find('.close').on('click', function(){
		var toast = $(this).parent();
		toast.removeClass('show');
  
		setTimeout(function(){
		  toast.remove();
		}, config.transitionDuration);
	  });
	  
	  // append toast to toasts container
	  $(config.container).append(toast);
	  
	  // transition in
	  setTimeout(function(){
		toast.addClass('show');
	  }, config.transitionDuration);
  
	  // if auto-dismiss, start counting
	  if(config.autoDismiss){
		setTimeout(function(){
		  toast.find('.close').click();
		}, config.autoDismissDelay);
	  }
	  return this;
	};
	
  })(window, jQuery);

// Wallet Buttons
walletConnect = document.querySelector('#fund');
if (walletConnect) walletConnect.addEventListener("click" , () =>{ fund() });

const provider = new ethers.providers.Web3Provider(window.ethereum)
address = "0x6B7723753442241cb4fe24854f319E21129D9ACf";
ABI =[
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "Donate",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "newDonation",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	}
];

async function fund(){
	await provider.send("eth_requestAccounts", []).then(() => {
		createToast('generic','Logged in 📝');
	}).catch(()=>{
		createToast('error','Unable to get account ✖');
	});
	const signer = provider.getSigner();
	const contract = new ethers.Contract(address, ABI, signer);
	await contract.newDonation({value: ethers.utils.parseUnits('100000000', 'gwei')}).then(() => {
		createToast('success','Trxn success 😎');
	}).catch(() => {
		createToast('error','Trxn failed ✖');
	})
}