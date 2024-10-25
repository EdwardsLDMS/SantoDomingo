document.getElementById('phone-btn').addEventListener('click', function() {
    document.getElementById('phone-info').classList.remove('hidden');
    document.getElementById('email-info').classList.add('hidden');
    this.classList.add('active');
    document.getElementById('email-btn').classList.remove('active');
});

document.getElementById('email-btn').addEventListener('click', function() {
    document.getElementById('email-info').classList.remove('hidden');
    document.getElementById('phone-info').classList.add('hidden');
    this.classList.add('active');
    document.getElementById('phone-btn').classList.remove('active');
});

