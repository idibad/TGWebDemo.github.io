function toggleSidebar(){
    var sidebar = document.getElementById("sidebar")
    if(sidebar.style.left === "0px"){
        sidebar.style.left="-250px";
    }else{
        sidebar.style.left = "0"
    }
}

function closeSidebar(){
    var sidebar = document.getElementById("sidebar")
    sidebar.style.left= "-250px"
}

document.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.fade-in, .slide-in-left');
    const viewportHeight = window.innerHeight;

    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < viewportHeight - 100) {
            element.classList.add('visible');
        }
    });
});

document.addEventListener("DOMContentLoaded", function(){
    const fadeElements = document.querySelectorAll('.fade');
    fadeElements.forEach(el => {
        el.classList.add('fade-in');

//Toggle

setInterval(() =>{
    if
        (el.classList.contains('fade-in')) {
    
            el.classList.remove('fade-in');
            el.classList.add('fade-out');
        }else{
            el.classList.remove('fade-out');
            el.classList.add('fade-in');
        }
    }, 1500);
    
    });
});

document.addEventListener('DOMContentLoaded', ()=> {
    const words = ['SAFETY' , ' INTEGRITY' , ' RESPECT', ' QUALITY' ,' COLLABORATION' ,'INNOVATION','SUSTAINABILITY'];
    let index=0;
    const changingText = document.getElementById('changing-text');
    function changeWord(){
        changingText.textContent = words[index];
        index = (index + 1)% words.length;
    }
    setInterval(changeWord,2500);
});

document.getElementById('bookingForm').addEventListener('submit',function(event){
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    document.getElementById('confirmation').classList.remove('hidden');
    document.getElementById('confirmName').textContent = name;
    document.getElementById('confirmEmail').textContent = email;

    document.getElementById('bookingForm').reset();

    
});



function submitForm(event) {
    event.preventDefault(); 
    const name = document.getElementById('name').value;

    document.getElementById('confirmName').textContent = name;
    document.getElementById('confirmation').classList.remove('hidden');
    document.getElementById('bookingForm').reset();

    return false; 
}
document.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.fade-in, .slide-in-left1');
    const viewportHeight = window.innerHeight;

    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < viewportHeight - 100) {
            element.classList.add('visible');
        }
    });
});

// Download Button script

function downloadPDF() {
    const link = document.createElement('a');
    link.href = 'company_profile.pdf'; 
    link.target = '_blank';
    link.download = 'Company Profile.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}