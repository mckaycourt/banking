let dragSrcEl = null;

function updateTransactionCategory(description, category){
    $.ajax({
        url: `/updateTransaction?oldDescription=${description}&Category=${category}`,
        success: result => {
            console.log(result);
        }
    })
}

function handleDragStart(e) {
    this.style.backgroundColor = 'grey';  // this / e.target is the source node.
    dragSrcEl = this;

    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
}

function handleDragOver(e) {
    if (e.preventDefault) {
        e.preventDefault(); // Necessary. Allows us to drop.
    }

    e.dataTransfer.dropEffect = 'move';  // See the section on the DataTransfer object.

    return false;
}

function handleDragEnter(e) {
    // this / e.target is the current hover target.
    this.classList.add('over');
}

function handleDragLeave(e) {
    e.target.classList.remove('over');  // this / e.target is previous target element.
}

function handleDrop(e) {
    // this/e.target is current target element.

    if (e.stopPropagation) {
        e.stopPropagation(); // Stops some browsers from redirecting.
    }

    // Don't do anything if dropping the same column we're dragging.
    if (dragSrcEl !== this) {
        // Set the source column's HTML to the HTML of the column we dropped on.
        console.log(e.dataTransfer.getData('text/html').replace(/\s/g, ''));
        let remove = document.querySelector(`#${e.dataTransfer.getData('text/html').replace(/\s/g, '')}`);
        remove.remove();
        console.log(e.dataTransfer.getData('text/html'));
        console.log(this.innerHTML);
        updateTransactionCategory(e.dataTransfer.getData('text/html'), this.innerHTML);
    }

    return false;
}

function handleDragEnd(e) {
    // this/e.target is the source node.
    this.style.backgroundColor = 'white';
    [].forEach.call(categories, function (category) {
        category.classList.remove('over');
    });
}

let categories = document.querySelectorAll('.category');
[].forEach.call(categories, function (category) {
    category.addEventListener('dragenter', handleDragEnter, false);
    category.addEventListener('dragover', handleDragOver, false);
    category.addEventListener('dragleave', handleDragLeave, false);
    category.addEventListener('drop', handleDrop, false);
});

let items = document.querySelectorAll('.item');
[].forEach.call(items, function (item) {
    item.addEventListener('dragstart', handleDragStart, false);
    item.addEventListener('dragend', handleDragEnd, false);
});