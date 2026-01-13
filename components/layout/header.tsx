type HeaderContent = {
    classN: string;
    text: string;
}




const Header = ({ classN = '', text, ...props }: HeaderContent) => {

    const baseClass = `text-4xl font-bold text-white mb-4`;

    const classes = `${baseClass} ${classN}`;

    return (
        <div className={classes}>
            <label>{text}</label>
        </div>
    );
}

export default Header;