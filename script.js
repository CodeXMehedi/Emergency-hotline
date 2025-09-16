 const callCoin = document.getElementById('coin');

    
    function decreaseCallCoin() {
      let currentValue = parseInt(callCoin.textContent);
      if (currentValue <= 20) {
        alert("Not enough coins!");
        return;
      }
      callCoin.textContent = currentValue - 20;
    }
document.getElementById('emergency').addEventListener('click', function () {
                
                
  
  const newHistory = document.getElementById('new_history');
  
  const historySection = document.createElement('section');
  historySection.innerHTML = `
<div>
<h3>জাতীয় জরুরি সেবা</h3>
<p>999</p></div>
<p class="time"></p>
`
  
  newHistory.appendChild(historySection);

  historySection.style.width = '250px';
  historySection.style.backgroundColor = '#fafafa';
  historySection.style.height = '60px';
  historySection.style.display = 'flex';
  historySection.style.justifyContent = 'space-between';
  historySection.style.alignItems = 'center';
  historySection.style.marginTop = '10px';
   
          document.title = 'Calling National Emergency Hotline 999';
            
          
            alert( document.title);
       
 
  decreaseCallCoin();
  
   const timePara = historySection.querySelector('.time');
  const now = new Date();
  timePara.textContent = now.toLocaleTimeString();
  
});
document.getElementById('fire').addEventListener('click', function () {
                
                
  
  const newHistory = document.getElementById('new_history');
  
  const historySection = document.createElement('section');
  historySection.innerHTML = `
<div>
<h3>ফায়ার সার্ভিস</h3>
<p>999</p></div>
<p class="time"></p>
`
  
  newHistory.appendChild(historySection);

  historySection.style.width = '250px';
  historySection.style.backgroundColor = '#fafafa';
  historySection.style.height = '60px';
  historySection.style.display = 'flex';
  historySection.style.justifyContent = 'space-between';
  historySection.style.alignItems = 'center';
  historySection.style.marginTop = '10px';
 document.title = 'Calling Fire service 999';
            
          
  alert(document.title);
  
  
  decreaseCallCoin();
   const timePara = historySection.querySelector('.time');
  const now = new Date();
  timePara.textContent = now.toLocaleTimeString();
  
});

document.getElementById('police').addEventListener('click', function () {
                
                
  
  const newHistory = document.getElementById('new_history');
  
  const historySection = document.createElement('section');
  historySection.innerHTML = `
<div>
<h3>পুলিশ</h3>
<p>999</p></div>
<p class="time"></p>
`
  
  newHistory.appendChild(historySection);

  historySection.style.width = '250px';
  historySection.style.backgroundColor = '#fafafa';
  historySection.style.height = '60px';
  historySection.style.display = 'flex';
  historySection.style.justifyContent = 'space-between';
  historySection.style.alignItems = 'center';
  historySection.style.marginTop = '10px';

 document.title = 'Calling Police Station 999';
            
          
  alert(document.title);
  decreaseCallCoin();
  const timePara = historySection.querySelector('.time');
  const now = new Date();
  timePara.textContent = now.toLocaleTimeString();
});
document.getElementById('health').addEventListener('click', function () {
                
                
  
  const newHistory = document.getElementById('new_history');
  
  const historySection = document.createElement('section');
  historySection.innerHTML = `
<div>
<h3>অ্যাম্বুলেন্স</h3>
<p>1994-999999</p></div>
<p class="time"></p>
`
  
  newHistory.appendChild(historySection);

  historySection.style.width = '250px';
  historySection.style.backgroundColor = '#fafafa';
  historySection.style.height = '60px';
  historySection.style.display = 'flex';
  historySection.style.justifyContent = 'space-between';
  historySection.style.alignItems = 'center';
  historySection.style.marginTop = '10px';

 document.title = 'Calling Ambulance 1994-999999';
            
          
  alert(document.title);
  decreaseCallCoin();
  const timePara = historySection.querySelector('.time');
  const now = new Date();
  timePara.textContent = now.toLocaleTimeString();
});
document.getElementById('child').addEventListener('click', function () {
                
                
 
  const newHistory = document.getElementById('new_history');
  
  const historySection = document.createElement('section');
  historySection.innerHTML = `
<div>
<h3>নারী ও শিশু সহায়তা</h3>
<p>109</p></div>
<p class="time"></p>
`
  
  newHistory.appendChild(historySection);

  historySection.style.width = '250px';
  historySection.style.backgroundColor = '#fafafa';
  historySection.style.height = '60px';
  historySection.style.display = 'flex';
  historySection.style.justifyContent = 'space-between';
  historySection.style.alignItems = 'center';
  historySection.style.marginTop = '10px';
 document.title = 'Calling Woman and Child Helpline 109';
            
          
  alert(document.title);
  decreaseCallCoin();
  const timePara = historySection.querySelector('.time');
  const now = new Date();
  timePara.textContent = now.toLocaleTimeString();
  
});
document.getElementById('anti_corruption').addEventListener('click', function () {
                
                
  
  const newHistory = document.getElementById('new_history');
  
  const historySection = document.createElement('section');
  historySection.innerHTML = `
<div>
<h3>দুদক</h3>
<p>106</p></div>
<p class="time"></p>
`
  
  newHistory.appendChild(historySection);

  historySection.style.width = '250px';
  historySection.style.backgroundColor = '#fafafa';
  historySection.style.height = '60px';
  historySection.style.display = 'flex';
  historySection.style.justifyContent = 'space-between';
  historySection.style.alignItems = 'center';
  historySection.style.marginTop = '10px';
 document.title = 'Calling Anti-Corrup55tion Unit 106';
            
          
            alert( document.title);
  decreaseCallCoin();
  const timePara = historySection.querySelector('.time');
  const now = new Date();
  timePara.textContent = now.toLocaleTimeString();

  
});
document.getElementById('current').addEventListener('click', function () {
                
                
  
  const newHistory = document.getElementById('new_history');
  
  const historySection = document.createElement('section');
  historySection.innerHTML = `
<div>
<h3>বিদ্যুৎ বিভ্রাট</h3>
<p>16216</p></div>
<p class="time"></p>
`
  
  newHistory.appendChild(historySection);

  historySection.style.width = '250px';
  historySection.style.backgroundColor = '#fafafa';
  historySection.style.height = '60px';
  historySection.style.display = 'flex';
  historySection.style.justifyContent = 'space-between';
  historySection.style.alignItems = 'center';
  historySection.style.marginTop = '10px';

   document.title = 'Calling Electricity Outage 16216';
            
          
  alert(document.title);
  decreaseCallCoin();
  const timePara = historySection.querySelector('.time');
  const now = new Date();
  timePara.textContent = now.toLocaleTimeString();
  
});

document.getElementById('brac').addEventListener('click', function () {
                
                
  
  const newHistory = document.getElementById('new_history');
  
  const historySection = document.createElement('section');
  historySection.innerHTML = `
<div>
<h3>ব্র্যাক</h3>
<p>16445</p></div>
<p class="time"></p>
`
  
  newHistory.appendChild(historySection);
       

  historySection.style.width = '250px';
  historySection.style.backgroundColor = '#fafafa';
  historySection.style.height = '60px';
  historySection.style.display = 'flex';
  historySection.style.justifyContent = 'space-between';
  historySection.style.alignItems = 'center';
  historySection.style.marginTop = '10px';

  document.title = 'Calling brac Ngo 16445';
            
          
  alert(document.title);
  decreaseCallCoin();
  const timePara = historySection.querySelector('.time');
  const now = new Date();
  timePara.textContent = now.toLocaleTimeString();
  
});
document.getElementById('railway').addEventListener('click', function () {
                
                
  
  const newHistory = document.getElementById('new_history');
  
  const historySection = document.createElement('section');
  historySection.innerHTML = `
<div>
<h3>বাংলাদেশ রেলওয়ে</h3>
<p>163</p></div>
<p class="time"></p>
`
  
  newHistory.appendChild(historySection);

  historySection.style.width = '250px';
  historySection.style.backgroundColor = '#fafafa';
  historySection.style.height = '60px';
  historySection.style.display = 'flex';
  historySection.style.justifyContent = 'space-between';
  historySection.style.alignItems = 'center';
  historySection.style.marginTop = '10px';

  document.title = 'Calling Bangladesh Railway 163';
            
          
  alert(document.title);
  decreaseCallCoin();
  const timePara = historySection.querySelector('.time');
  const now = new Date();
  timePara.textContent = now.toLocaleTimeString();
});

document.getElementById("clear").addEventListener("click", function () {
  const callHistoryList = document.getElementById("new_history");
  callHistoryList.innerHTML = "";
});


const buttons = document.getElementsByClassName('hearts'); 
console.log(buttons);
  const display = document.getElementById('heart_num');
  let count = 0;
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
      count++;
      display.textContent = count;
      console.log(count);
    });
};
   

document.addEventListener("DOMContentLoaded", function() {
  const copyButtons = document.getElementsByClassName('copy_button');
  const copyCount = document.getElementById('copy');
  let number = 0;

  const textsToCopy = [
    "999",
    "999",
    "999",
    "1994-999999",
    "109",
    "106",
    "16216",
    "16445",
    "163"
  ];

  function easyCopy(text) {
    navigator.clipboard.writeText(text);
  }
  for (let i = 0; i < copyButtons.length; i++) {
    copyButtons[i].addEventListener('click', function() {
      const text = textsToCopy[i];
      easyCopy(text);
      alert("Copied: " + text);
      number++;
      copyCount.textContent = number;
    });
  }
});
  