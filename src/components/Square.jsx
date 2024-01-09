export const Square = ({ children, isSelected, updateBoard, index }) => {
    // Modificar el turno visualmente
    const className = `square ${isSelected ? "is-selected" : ""}`;

    const handleClick = () => {
        updateBoard(index);
    };

    return (
        <div className={className} onClick={handleClick}>
            {children}
        </div>
    );
};