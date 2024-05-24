import { useState  } from "react";

const DropAndUpload = () => {
    const [isDragging,setIsDragging] = useState(false);
    const [draggedItem, setDraggedItem] = useState(null);

   
    const handleDragStart = (ev, item) => {
        setIsDragging(true);
        setDraggedItem(item);
        ev.dataTransfer.setData("text/plain", ev.target.id);
        ev.dataTransfer.effectAllowed = "move";
    }

    const handleDragEnd = () => {
        setIsDragging(false);
        setDraggedItem(null);
    }


    const handleDragOver = (e) => {
        e.preventDefault();
        const validDropTarget = e.target;
        if (validDropTarget.tagName === "DIV") {
            // Create a new <p> element
            const newParagraph = document.createElement('p');
            // Set the content of the new <p> element (you can set it to anything you want)
            newParagraph.textContent = draggedItem;
            // Apply Tailwind CSS classes to the new <p> element
            newParagraph.classList.add('draggables', 'm-2', 'p-3', 'bg-white', 'text-black');
            if (isDragging && draggedItem === 1) {
                newParagraph.classList.add('opacity-50');
            }
            // Append the new <p> element to the valid drop target
            validDropTarget.appendChild(newParagraph);
        }


    }

    const dropHandler = (ev) => {
        ev.preventDefault();
        const data = ev.dataTransfer.getData("text");
        const validDropTarget = ev.target;
    
        if (validDropTarget.tagName === "DIV") {
            // Append the dragged element to the valid drop target
            validDropTarget.appendChild(document.getElementById(data));
    
            // Apply Tailwind CSS classes to the appended element
            const draggedElement = validDropTarget.lastChild; // Get the newly appended element
            draggedElement.classList.add('draggables', 'm-2', 'p-3', 'bg-white', 'text-black');
    
            // Conditionally apply opacity based on isDragging and draggedItem
            if (isDragging && draggedItem === 1) {
                draggedElement.classList.add('opacity-50');
            }
        }
    }
    
      
      const dragoverHandler =(ev)=> {
        ev.preventDefault();
        ev.dataTransfer.dropEffect = "move";
      }
    
    
    

    return (
        <div className="w-1/2">
            <div className="containers p-4 bg-black text-white" onDragOver={dragoverHandler} onDrop={dropHandler}>
                <p
                    draggable
                    id = 'dragable'
                    onDragStart={(event) => handleDragStart(event, 1)}
                    onDragEnd={handleDragEnd}
                    // onDragOver={handleDragOver}
                    className={`draggables m-2 p-3 bg-white text-black ${isDragging && draggedItem === 1 && 'opacity-50'}`}
                >
                    1
                </p>
                <p
                    draggable
                    id = 'dragable'
                    onDragStart={(event) => handleDragStart(event, 2)}
                    onDragEnd={handleDragEnd}
                    // onDragOver={handleDragOver}
                    className={`draggables m-2 p-3 bg-white text-black ${isDragging && draggedItem === 2 && 'opacity-50'}`}
                >
                    2
                </p>
            </div>
            <div className="containers p-4 bg-black text-white mt-3" onDragOver={dragoverHandler} onDrop={dropHandler}>
                <p
                    draggable
                    id = 'dragable'
                    onDragStart={(event) => handleDragStart(event, 3)}
                    onDragEnd={handleDragEnd}
                    // onDragOver={handleDragOver}
                    className={`draggables m-2 p-3 bg-white text-black ${isDragging && draggedItem === 3 && 'opacity-50'}`}
                >
                    3
                </p>
                <p
                    draggable
                    id = 'dragable'
                    onDragStart={(event) => handleDragStart(event, 4)}
                    onDragEnd={handleDragEnd}
                    // onDragOver={handleDragOver}
                    className={`draggables m-2 p-3 bg-white text-black ${isDragging && draggedItem === 4 && 'opacity-50'}`}
                >
                    4
                </p>
            </div>
        </div>
    );
};

export default DropAndUpload;
