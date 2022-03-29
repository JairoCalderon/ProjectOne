const formEl = document.querySelector("form")

formEl.addEventListener(`submit`, function (event) {
    event.preventDefault();

    const userName = formEl[0].value;
    const userCommentContent = formEl[2].value;

    formEl[0].value = "";
    formEl[1].value = "";
    formEl[2].value = "";

    function todayDate() {

        const dateFormat = {
            weekday: "long",
            month: "long",
            day: "2-digit",
            year: "numeric"
        };

        const currentDate = new Date();
        return currentDate.toLocaleDateString("en-US", dateFormat)
    }

    const newUser = document.createElement("div")
    newUser.classList.add("user1")

    const oldUser = document.querySelector(".user1")

    oldUser.before(newUser)

    newUser.innerHTML = `
        <div class="userImgContainer">
            <img src="https://picsum.photos/125/125" alt="profile head picture of lastest user">
        </div>
        <div class="userCommentContainer">
            <p id="userHeadline"></p>
            <p id="userBodyParagraph"></p>
        </div>`

    const userHeadline = document.querySelector("#userHeadline")
    userHeadline.textContent = `${todayDate()} by ${userName}`

    const userBodyParagraph = document.querySelector("#userBodyParagraph")
    userBodyParagraph.textContent = userCommentContent

})



