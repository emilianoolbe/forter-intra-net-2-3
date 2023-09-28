export const getUser = async() => {
    
    const request = await fetch(URL);
    const {data} = await request.json();
    console.log(data);
    
};
l