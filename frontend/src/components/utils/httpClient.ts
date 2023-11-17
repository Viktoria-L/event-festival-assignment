async function getData<T>(url: string) {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch data...');
    }
    const jsonResult = (await response.json()) as unknown;
    return jsonResult as T;
}
  
async function postData<T, R>(url: string, body: T) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
  
    if (response.status !== 201) {
      throw new Error('An error occurred while trying to save data...');
    }
  
    const jsonResult = (await response.json()) as unknown;
    return jsonResult as R;
}
  
export { getData, postData };