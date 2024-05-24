import { useState } from 'react';

const Swap = () => {
    const [boxes, setBoxes] = useState([
        { id: 1, title: 'BBC',players: ['Bale','Benzema','Cristiano']},
        { id: 2, title: 'MSN',players: ['Messi','Suarez','Neymar'] },
        { id: 3, title: 'RRR',players: ['Ronaldo','Rivaldo','Ronaldinho'] },
        { id: 4, title: 'XIB',players: ['Xavi','Iniesta','Busquets'] },
        { id: 5, title: 'VJC',players: ['Vini','Jude','Camavinga'] },
        { id: 6, title: 'HFB',players: ['Halland','Foden','Bruyne'] }
    ]);

    const [draggingIndex, setDraggingIndex] = useState(null);
    const [hoveringIndex, setHoveringIndex] = useState(null);
    const [checkedBoxes, setCheckedBoxes] = useState([]);

    const handleCheckboxChange = (id) => {
        const isChecked = checkedBoxes.includes(id);
        if (isChecked) {
            setCheckedBoxes(checkedBoxes.filter(boxId => boxId !== id));
        } else {
            setCheckedBoxes([...checkedBoxes, id]);
        }
    };

    const handleDragStart = (index) => {
        setDraggingIndex(index);
    };

    const handleDragEnter = (index) => {
        if (index !== draggingIndex) {
            setHoveringIndex(index);
        }
    };

    const handleDragOver = (event) => {
        event.preventDefault(); // Necessary to allow a drop
    };

    const handleDragLeave = () => {
        setHoveringIndex(null);
    };

    const handleDrop = (index) => {
        if (index !== draggingIndex) {
            const newBoxes = [...boxes];
            const draggedBox = newBoxes[draggingIndex];
            newBoxes.splice(draggingIndex, 1);
            newBoxes.splice(index, 0, draggedBox);
            setBoxes(newBoxes);
        }
        setDraggingIndex(null);
        setHoveringIndex(null);
    };

    const handleDragEnd = () => {
        setDraggingIndex(null);
        setHoveringIndex(null);
    };

     const deleteCheckedBoxes = () => {
    // return boxes.filter(box => checkedBoxes.includes(box.id));
    setBoxes(boxes.filter(box => !checkedBoxes.includes(box.id)));
    setCheckedBoxes([]); // Clear the checked boxes after deletion
    };
 
    return (
        <div className="">
             {
                checkedBoxes.length > 0 && (
                    <button
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                        onClick={deleteCheckedBoxes}
                    >
                        Delete
                    </button>
                )
             }
            <div className='grid grid-cols-3 border rounded-md size'>
            {boxes.map((box, index) => (
                <div
                    key={box.id}
                    draggable
                    onDragStart={() => handleDragStart(index)}
                    onDragEnter={() => handleDragEnter(index)}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={() => handleDrop(index)}
                    onDragEnd={handleDragEnd}
                    style={{
                        padding: '20px',
                        margin: '10px',
                        border: '1px solid blue',
                        borderRadius: '5px',
                        backgroundColor: hoveringIndex === index ? 'lightcoral' : (box.id === 1 && 'lightblue' || box.id ===2 && 'lightgreen' || box.id ===3 && 'lightyellow' ||box.id === 4 && 'cyan' || box.id ===5 && '#7FFF00'
                        || box.id ===6 && '#556B2F'),
                        cursor: 'move'
                    }}
                    
                >
                    <input
                        type="checkbox"
                        id={box.id}
                        checked={checkedBoxes.includes(box.id)}
                        onChange={() => handleCheckboxChange(box.id)}
                    />
                    <h1 className='font-bold'>{box.title}</h1>
                    {
                        box.players.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))
                    }
                </div>
            ))}

        </div>
        </div>
    );
};

export default Swap;
