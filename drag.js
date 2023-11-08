const containers = document.querySelectorAll(".container");

const dragState = {
    draggedElement : null,
    parentContainer : null
}

function onDragStart(event)
{
    const draggedCard = event.target;
    dragState.draggedElement = draggedCard;
    dragState.parentContainer = draggedCard.parentNode;
}

function onDragOver(event)
{
    const currentContainer = event.target.closest(".container");
    if(dragState.parentContainer.id === currentContainer.id)
    {
        return;
    }
    event.preventDefault();
}

function onDrop(event)
{
    const dropContainer = event.target.closest(".container");
    dropContainer.appendChild(dragState.draggedElement);
}

for(let i=0; i<containers.length; i++)
{
    containers[i].addEventListener("dragover", onDragOver);
    containers[i].addEventListener("drop", onDrop);

}