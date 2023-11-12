export default async function postData() {
    const postData = await fetch('http:localhost:8080/');
    console.log(postData);
}