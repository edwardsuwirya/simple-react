import './App.css';

const ConditionalStyle = () => {
    const amount = 18;

    const styleIndicator = () => {
        let style = 'indicator-label-fontSize';
        if (amount < 10) {
            return `${style} indicator-label-red`;
        }
        return `${style} indicator-label-green`;
    }
    return (
        <div>
            <div
                className={`indicator-label-fontSize ${amount < 10 ? 'indicator-label-red' : 'indicator-label-green'}`}>
                <div>{amount}</div>
            </div>
            <div
                className={styleIndicator()}>
                <div>{amount}</div>
            </div>
        </div>
    )
}

export default ConditionalStyle;
