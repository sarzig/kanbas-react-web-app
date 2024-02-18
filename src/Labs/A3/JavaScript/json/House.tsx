function House() {
    const house = {
        bedrooms: 4,
        bathrooms: 2.5,
        squareFeet: 2000,
        address: {
            street: "Via Roma",
            city: "Roma",
            state: "RM",
            zip: "00100",
            country: "Italy",
        },
        owners: ["Alice", "Bob"],
    };
    return (
        <div>
            <h1>2.2.9 JavaScript Object Notation (JSON)</h1>
            <h2>House</h2>
            <h3>bedrooms</h3>
            {house.bedrooms}
            <h3>bathrooms</h3>
            {house.bathrooms}
            <h3>Data</h3>
            <pre>{JSON.stringify(house, null, 2)}</pre>
        </div>
    );
}
export default House;
