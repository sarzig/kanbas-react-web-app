let numberArray1 = [1, 2, 3, 4, 5];
let stringArray1 = ['string1', 'string3'];

const fourIndex = numberArray1.findIndex(a => a === 4);
const string3Index = stringArray1.findIndex(a => a === 'string3');

function FindIndex() {
    return (
        <>
            <h2>2.2.7.7 Find Index Function</h2>
            fourIndex = {fourIndex}<br />
            string3Index = {string3Index}<br />
        </>
    )
}
export default FindIndex