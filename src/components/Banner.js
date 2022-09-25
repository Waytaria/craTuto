import '../styles/Banner.css';

const Banner = ({selected}) => {
    console.log([...selected])
    return (
        <div className='lmj-banner'>
            <ul>
                {[...selected].map((x) => {
                    return <li key={"selected_" + x}>{x}</li>
                })}
            </ul>
        </div>
    )
};

export default Banner;