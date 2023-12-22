const data = [
    {
        id: 1,
        label: "#1 Spoiler label",
        content: ["Spoiler item #1", "Spoiler item #2", "Spoiler item #3"],
    },

    {
        id: 2,
        label: "#2 Spoiler label",
        content: [
            "Spoiler item #1",
            "Spoiler item #2",
            "Spoiler item #3",
            "Spoiler item #4",
            "Spoiler item #5",
            "Spoiler item #7",
            "Spoiler item #8",
            "Spoiler item #9",
        ],
    },

    {
        id: 3,
        label: "#3 Spoiler label",
        content: ["Spoiler item #1", "Spoiler item #2", "Spoiler item #3"],
    },

    {
        id: 4,
        label: "#4 Spoiler label",
        content: [
            "Spoiler item #1",
            "Spoiler item #2",
            "Spoiler item #3",
            "Spoiler item #4",
            "Spoiler item #5",
            "Spoiler item #7",
            "Spoiler item #8",
            "Spoiler item #9",
        ],
    },

    {
        id: 5,
        label: "#5 Spoiler label",
        content: ["Spoiler item #1", "Spoiler item #2", "Spoiler item #3"],
    },

    {
        id: 6,
        label: "#6 Spoiler label",
        content: [
            "Spoiler item #1",
            "Spoiler item #2",
            "Spoiler item #3",
            "Spoiler item #4",
            "Spoiler item #5",
            "Spoiler item #6",
        ],
    },

    {
        id: 7,
        label: "#7 Spoiler label",
        content: ["Spoiler item #1", "Spoiler item #2", "Spoiler item #3"],
    },

    {
        id: 8,
        label: "#8 Spoiler label",
        content: [
            "Spoiler item #1",
            "Spoiler item #2",
            "Spoiler item #3",
            "Spoiler item #4",
            "Spoiler item #5",
            "Spoiler item #6",
            "Spoiler item #7",
            "Spoiler item #8",
            "Spoiler item #9",
        ],
    },
];

const spoiler = document.getElementById("spoiler");

const spoilerInner = data.map((item, i) => {
    const spoilerBox = document.createElement("div");
    spoilerBox.classList.add("spoiler__box");
    spoilerBox.setAttribute("tabindex", "0");

    const spoilerContent = document.createElement("div");
    spoilerContent.classList.add("spoiler__content");

    const spoilerLabel = document.createElement("div");
    spoilerLabel.classList.add("spoiler__label");
    spoilerLabel.textContent = item.label;

    const spoilerList = document.createElement("ul");
    spoilerList.classList.add("spoiler__list");

    item.content.forEach((contentItem) => {
        const listItem = document.createElement("li");
        listItem.classList.add("spoiler__list-item");
        listItem.textContent = contentItem;
        spoilerList.appendChild(listItem);
    });

    spoilerBox.appendChild(spoilerLabel);
    spoilerContent.appendChild(spoilerList);
    spoilerBox.appendChild(spoilerContent);

    spoilerBox.addEventListener("click", () => {
        spoilerBox.classList.toggle("_active");
        if (spoilerBox.classList.contains("_active")) {
            spoilerContent.style.height = `${spoilerContent.scrollHeight}px`;
        } else {
            spoilerContent.style.height = `0px`;
        }
    });

    spoilerBox.addEventListener("keydown", (event) => {
        if (event.keyCode === 13 || event.key === "Enter") {
            spoilerBox.classList.toggle("_active");
            if (spoilerBox.classList.contains("_active")) {
                spoilerContent.style.height = `${spoilerContent.scrollHeight}px`;
            } else {
                spoilerContent.style.height = `0px`;
            }
        }
    });

    return spoilerBox;
});

const spoilerLeftGrid = document.createElement("div");
spoilerLeftGrid.classList.add("spoiler_left");

const spoilerRightGrid = document.createElement("div");
spoilerRightGrid.classList.add("spoiler_right");

spoiler.appendChild(spoilerLeftGrid);
spoiler.appendChild(spoilerRightGrid);

spoilerInner.forEach((element, i) => {
    if (i % 2 === 0) {
        spoilerLeftGrid.appendChild(element);
    } else {
        spoilerRightGrid.appendChild(element);
    }
});
