const API_URL = 'https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api'

export async function fetch () {
    const response = await fetch (`${API_URL}/books`);
    const data = await response.json();
    return data;
}

