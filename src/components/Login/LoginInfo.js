const User = {
    response: true,
    id: 'user',
    name: 'Demo',
    image: 'https://cdn.pixabay.com/photo/2016/03/31/19/58/avatar-1295430_1280.png',    
  };

const Error = {
    response: false,
    error: "Invalid username or password",
};
    
export function login(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === 'User' && password === 'User') {
        return resolve(JSON.stringify(User));
        }
        else{
          return resolve(JSON.stringify(Error));
        }        
    }, 500);
  });
}
  