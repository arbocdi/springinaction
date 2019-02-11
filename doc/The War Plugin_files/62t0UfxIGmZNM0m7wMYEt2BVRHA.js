;if(CloudflareApps.matchPage(CloudflareApps.installs['lBWa3ECL3bbx'].URLPatterns)){(function(){'use strict'
if(!window.addEventListener)return
var options=CloudflareApps.installs['lBWa3ECL3bbx'].options
var element
function getMaxZIndex(){var max=0
var elements=document.getElementsByTagName('*')
Array.prototype.slice.call(elements).forEach(function(element){var zIndex=parseInt(document.defaultView.getComputedStyle(element).zIndex,10)
max=zIndex?Math.max(max,zIndex):max})
return max}
function hideAlert(e){e.preventDefault()
element.style.display='none'
document.cookie='coockiless=1; expires=Thu, 18 Dec 2050 12:00:00 UTC'
localStorage.coockiless=1}
function updateElement(){if(localStorage.coockiless)return
element=CloudflareApps.createElement({selector:'body',method:'append'},element)
element.setAttribute('app','cookiless')
element.style.zIndex=getMaxZIndex()+1
var ckElement=document.createElement('cookiless-div')
ckElement.className='ckcontent'
ckElement.style.opacity=options.opacity/100
var ckPolicyText=document.createElement('policy-text')
ckPolicyText.textContent=options.policyText
var ckAcceptButton=document.createElement('a')
ckAcceptButton.className='iAccept'
ckAcceptButton.textContent=options.acceptButton
ckElement.appendChild(ckPolicyText)
ckElement.appendChild(ckAcceptButton)
element.appendChild(ckElement)
element.querySelectorAll('.iAccept')[0].addEventListener('click',hideAlert)}
if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',updateElement)}else{updateElement()}
window.CloudflareApps.installs['lBWa3ECL3bbx'].scope={setOptions:function setOptions(nextOptions){options=nextOptions
updateElement()}}}())};(function(){try{var link=document.createElement('link');link.rel='stylesheet';link.href='data:text/css;charset=utf-8;base64,LyogU2V0IHRoZSBhcHAgYXR0cmlidXRlIHRvIHlvdXIgYXBwJ3MgZGFzaC1kZWxpbWl0ZWQgYWxpYXMuICovDQpjbG91ZGZsYXJlLWFwcFthcHA9ImNvb2tpbGVzcyJdIHsNCiBwb3NpdGlvbjogZml4ZWQ7DQogd2lkdGg6MTAwJTsNCiBib3R0b206MDsNCiBsZWZ0OjA7DQogei1pbmRleDogMTAwMDA7DQogbGluZS1oZWlnaHQ6IDI0cHg7DQp9DQoNCi8qIFVzZSBuYXRpdmUgZWxlbWVudHMgd2hlbiB5b3UnZCBsaWtlIHRvIGluaGVyaXQgc29tZSBzdHlsZXMgZnJvbSB0aGUgcGFnZS4gKi8NCmNsb3VkZmxhcmUtYXBwW2FwcD0iY29va2lsZXNzIl0gY29va2lsZXNzLWRpdiB7DQogIHdpZHRoOjEwMCU7DQogIGJhY2tncm91bmQtY29sb3I6ICMwMDA7DQogIGNvbG9yOiNmZmY7DQogIHBhZGRpbmc6MTBweDsNCiAgdGV4dC1hbGlnbjogY2VudGVyOw0KICBkaXNwbGF5OiBibG9jazsNCn0NCmNsb3VkZmxhcmUtYXBwW2FwcD0iY29va2lsZXNzIl0gY29va2lsZXNzLWRpdiAuaUFjY2VwdCB7DQogIGN1cnNvcjogcG9pbnRlcjsNCiAgbWFyZ2luLWxlZnQ6IDEwcHg7DQogIGNvbG9yOiMxNTlDRDg7DQoNCn0NCg==';document.getElementsByTagName('head')[0].appendChild(link);}catch(e){}})();