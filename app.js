const addForm = document.querySelector('#add__form');
const searchInput = document.querySelector('#search__input');
const todosList = document.querySelector('#note__list');
const changeThem = document.querySelector('#change__item');
const wrapper = document.querySelector('#wrapper');
const text = document.querySelector('#text')

let row = null;
let dayornight = true;
let count = 1;


addForm.addEventListener("submit", (e) => {
    e.preventDefault();

    if (searchInput.value.trim() !== "") {
        if (row == null) {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <input type="checkbox" class="w-[26px] h-[26px] rounded-[5px] border-[2px] border-[#6C63FF] uzgacha">
                <p class="w-[88%] text-[20px]">
                    ${searchInput.value.trim()} #<span>${count+1}</span>
                </p>
                <img src="./images/Vector.svg" alt="" class="w-[20px] h-[20px] edit cursor-pointer">
                <img src="./images/trash-svgrepo-com 1.svg" alt="" class="w-[20px] h-[20px] trash cursor-pointer">
            `;

            listItem.classList.add('w-full', 'py-[16px]', 'border-b-[2px]', 'border-[#6C63FF]', 'flex', 'items-center', 'justify-between');
            todosList.appendChild(listItem);
            count++;
        } else {
            row.querySelector("p").childNodes[0].textContent = searchInput.value.trim();
            row = null;
        }
    }

    searchInput.value = "";
});


changeThem.addEventListener("click", () => {
    if (dayornight) {
        document.body.style.background = "#252525";
        text.style.color = "#ffffff"
        todosList.classList.add("text-white");
        searchInput.classList.add("text-white");
        wrapper.classList.add("border-white");
        wrapper.children[1].classList.add("text-white");
        changeThem.innerHTML = `<i class="fa-solid fa-sun text-[22px] text-white"></i>`;
        dayornight = false;
    } else {
        document.body.style.background = "#ffffff";
        text.style.color = "black"
        todosList.classList.remove("text-white");
        wrapper.classList.remove("border-white");
        searchInput.classList.remove("text-white");
        changeThem.innerHTML = `<i class="fa-regular fa-moon text-[22px] text-white"></i>`;
        dayornight = true;
    }
});


todosList.addEventListener("click", (e) => {
    let target = e.target;

    if (target.classList.contains("trash")) {
        target.closest("li").remove();
        count--;
    }

    if (target.classList.contains("edit")) {
        row = target.closest("li");
        searchInput.value = row.querySelector("p").childNodes[0].textContent.trim();
    }
});
