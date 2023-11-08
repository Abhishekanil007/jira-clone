const createIssue = document.getElementById("create-issue");
const issueInput = document.getElementById("issue-input");
createIssue.addEventListener("click",onCreateClick);

const todoContainer = document.getElementById("todo");

issueInput.addEventListener("blur",onBlurCreateIssueInput);
issueInput.addEventListener("keyup", onEnterInput);

function toggleCreateIssueOptions()
{
    createIssue.classList.toggle("hide");
    issueInput.classList.toggle("hide");

    if(!issueInput.classList.contains("hide"))
    {
        issueInput.focus();
    }
}

function onBlurCreateIssueInput()
{
    toggleCreateIssueOptions();
}

function onCreateClick()
{
    toggleCreateIssueOptions();

}

function onEnterInput(e)
{
    if(e.keyCode === 13)
    {
        // clicked on enter key
        const issueName = issueInput.value;
        if(!issueName)
        {
            return ;
        }

        // create an issue card with issue name

        const issueCard = document.createElement("div");
        issueCard.className = "card";

        issueCard.innerHTML = `
        <span>${issueName}</span>
        <span onclick="deleteCard(this)"><i class="fa-solid fa-trash-can"></i></span> 
        `;

        issueCard.draggable = true;

        issueCard.addEventListener("dragstart", onDragStart);

        issueInput.value = "";
        todoContainer.appendChild(issueCard);
        issueInput.blur();

    }
}

function deleteCard(deleteButton)
{
    const card = deleteButton.parentNode;
    card.remove();

}
