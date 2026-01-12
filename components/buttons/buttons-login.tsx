type ButtonsType = {
    text: string;
    classN: string;
}

const Buttons = ({ text, classN = "", ...props }: ButtonsType) => {

    const baseClass = `outline-none px-4 py-2 bg-blue-500 hover:bg-blue-800 text-white rounded-lg text-lg`;
    const classes = `${baseClass} ${classN}`;

    return (
        <button className={classes} {...props}>{text}</button>
    );
}

export default Buttons;