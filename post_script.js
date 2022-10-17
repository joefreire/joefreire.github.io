const asyncGetCall = async () => {
    try {
        const url = 'https://analytics.dev.kokos.io/'
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type': 'application/json",
                "Access-Control-Allow-Headers" : "Content-Type",
                "Access-Control-Allow-Origin": "https://www.example.com",
                "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
            },
            body: JSON.stringify({
                location: window.location
            })
        });
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error)
    }
}
asyncGetCall();