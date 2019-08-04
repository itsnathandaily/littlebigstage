document.addEventListener('DOMContentLoaded', () => {
    const contents = [
        {
            Title: 'Title 1',
            Image: 'picture',
            Rating: "8/10"
        },
        {
            Title: 'Title 2',
            Image: 'picture',
            Rating: "8/10"
        },
        {
            Title: 'Title 3',
            Image: 'picture',
            Rating: "8/10"
        },
        {
            Title: 'Title 4',
            Image: 'picture',
            Rating: "8/10"
        },
        {
            Title: 'Title 5',
            Image: 'picture',
            Rating: "8/10"
        }
    ]
    const contentDiv = document.createElement('div');
    const contentUl = document.getElementById('invitedList');
    
    contents.forEach((item) => {
        const li = document.createElement('li');
        const span = document.createElement('span');
        span.textContent = item.Title;
        const label = document.createElement('label');
        label.textContent = item.Rating
        li.appendChild(span);
        li.appendChild(label);
        contentUl.appendChild(li);
    })
    
    })