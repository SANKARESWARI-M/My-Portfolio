function showTab(tabId){
    document.querySelectorAll('.tab-content').forEach(tab=>tab.style.display="none" )
    document.getElementById(tabId).style.display='block';
    document.querySelectorAll('.tab-btn').forEach(btn=>btn.classList.remove('active'));
    event.target.classList.add('active');
}