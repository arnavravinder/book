document.addEventListener('DOMContentLoaded', () => {
    AOS.init();

    VanillaTilt.init(document.querySelectorAll(".book-card"), {
        max: 25,
        speed: 400
    });

    const addBookBtn = document.querySelector('.add-book-btn');
    const modal = document.querySelector('.modal');
    const closeBtn = document.querySelector('.close-btn');
    const saveBookBtn = document.querySelector('#save-book-btn');
    const bookTitleInput = document.querySelector('#book-title');
    const bookAuthorInput = document.querySelector('#book-author');
    const bookList = document.querySelector('.book-list');

    addBookBtn.addEventListener('click', () => {
        modal.classList.remove('hidden');
    });

    closeBtn.addEventListener('click', () => {
        modal.classList.add('hidden');
    });

    saveBookBtn.addEventListener('click', () => {
        const bookTitle = bookTitleInput.value.trim();
        const bookAuthor = bookAuthorInput.value.trim();
        if (bookTitle && bookAuthor) {
            addBook(bookTitle, bookAuthor);
            bookTitleInput.value = '';
            bookAuthorInput.value = '';
            modal.classList.add('hidden');
        }
    });

    function addBook(bookTitle, bookAuthor) {
        const bookCard = document.createElement('div');
        bookCard.className = 'book-card';
        bookCard.dataset.aos = 'zoom-in';
        bookCard.dataset.tilt = '';

        bookCard.innerHTML = `
            <h3>${bookTitle}</h3>
            <p>by ${bookAuthor}</p>
            <div class="book-progress">
                <input type="checkbox" class="book-checkbox" id="book-${bookTitle}">
                <label for="book-${bookTitle}">Mark as read</label>
            </div>
        `;

        bookList.appendChild(bookCard);

        VanillaTilt.init(bookCard, {
            max: 25,
            speed: 400
        });
    }
});
