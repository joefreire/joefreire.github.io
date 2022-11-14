const asyncGetCall = async () => {
    try {
        const url = 'https://analytics.webmarketing.company/analytics'
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                location: window.location
            })
        });
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error, '3')
    }
}
asyncGetCall();