import React from 'react';
import { login } from '../components/Login/LoginInfo';

describe("get user login response", () => {    
    it("retrieves correct user response", async () => {
      const user = "User";
      const pass = "User";
  
      // Then, you can await for the results
      const result = await login(user, pass);
      //const result = <login username={user} password={pass}/>

      const data = JSON.parse(result);

      expect(data.response).toBe(true);
      //expect(result.length).toBe(4);
    });
      
    it("returns error due to incorrect user login", async () => {
        const user = "no";
        const pass = "no";
    
        // Then, you can await for the results
        const result = await login(user, pass);
          
        const data = JSON.parse(result);
  
        expect(data.response).toBe(false);
    });
  });