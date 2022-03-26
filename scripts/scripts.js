const formEl = document.querySelector("form")
// console.log(formEl)

formEl.addEventListener(`submit`, function (event) {
    event.preventDefault();

    const userName = formEl[0].value;
    console.log(userName)

    const userCommentContent = formEl[2].value;
    console.log(userCommentContent)

    formEl[0].value = "";
    formEl[1].value = "";
    formEl[2].value = "";

    const todayDate = Date()
    // const todayDate = (Date(), `format`, `l - F - d - y`)
    // todayDate.toDate()
    console.log(todayDate)


    const newComment = document.querySelector(".user1");
    console.log(newComment)

    newComment.innerHTML = `
            <div class="userImgContainer">
                <img src="https://picsum.photos/125/125" alt="profile head picture of lastest user">
            </div>
            <div class="userCommentContainer">
                <p>${todayDate} by ${userName}</p>
                <p>${userCommentContent}</p>
            </div>`;

    // const newUserImg = document.createElement("img")
    // newUserImg.setAttribute(`src`, `https://picsum.photos/500/500`)
    // newUserImg.setAttribute(`alt`, `profile head picture of latest user`)


    // const dateNameParagraph = document.createElement("p")
    // dateNameParagraph = (`todayDate by userName}`)
    // const paragraph = document.createElement("p")
    // paragraph.textContent = userCommentContent



    // const newUserImgContainer = document.createElement("div")
    // newUserImgContainer.setAttribute(`class`, `userImgContainer`)

    // const newUserCommentContainer = document.createElement("div")
    // newUserCommentContainer.setAttribute(`class`, `userCommentContainer`)


    // document.querySelector(newUserImgContainer).appendChild(newUserImg)

    // document.querySelector(newUserCommentContainer).appendChild(dateNameParagraph)
    // document.querySelector(newUserCommentContainer).appendChild(paragraph)


    // const newUser = document.createElement("div")
    // newUser.setAttribute(`class`, `user1`)

    // document.querySelector(newUser).appendChild(newUserImgContainer)
    // document.querySelector(newUser).appendChild(newUserCommentContainer)

    // document.querySelector(`.comments`).prepend(newUser)




})



