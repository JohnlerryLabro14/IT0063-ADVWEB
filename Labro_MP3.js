document.addEventListener('DOMContentLoaded', () => {
    const dayButtons = document.querySelectorAll('button');
    const box = document.getElementById('box');

    const colors = {
        'Monday': '#6a0dad',
        'Tuesday': '#f4cccc',
        'Wednesday': '#0000ff',
        'Thursday': '#00ff00',
        'Friday': '#ffff00',
        'Saturday': '#ff9900',
        'Sunday': '#ff0000'
    };

    dayButtons.forEach(button => {
        button.addEventListener('click', () => {
            const day = button.textContent;

            box.style.opacity = '1';

            box.style.transition = 'none'; 
            box.style.transform = 'translateY(-200px)'; 
            setTimeout(() => {
                box.style.transition = 'transform 0.5s ease-in-out, background-color 0.5s ease-in-out 0.5s, opacity 0.3s ease-in'; 
                box.style.transform = 'translateY(300px)';
            }, 10); 


            setTimeout(() => {
                box.style.backgroundColor = colors[day];
            }, 500);
        });
    });
});
