export async function saveInDb(formData: any): Promise<any> {
    try {
      const response = await fetch('http://localhost:4000/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      console.log(formData)
  
      return await response.json();
    } catch (error) {
      if (error instanceof TypeError) {
        throw new Error('Network error: Could not connect to server');
      } else {
        throw new Error(`Request error:`);
      }
    }
  }
  