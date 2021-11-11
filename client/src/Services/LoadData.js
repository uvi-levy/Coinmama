export default function LoadData() {

  return fetch('http://localhost:8888/coins', {
    method: 'GET', 
    headers: {
      'Content-Type': 'application/json',
    },
   
  })
  .then(response => response.json()
  )
  .then(data => {
    
    console.log('Success:', data);
    
         return data
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}
