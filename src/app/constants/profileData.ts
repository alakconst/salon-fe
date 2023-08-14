// profileData.ts

export interface UserProfile {
  username: string;
  name: string;
  email: string;
  info: string;
}

const profileData: UserProfile[] = [
  
  {
    username:'alaksen',
    name: "Alak sen",
    email: "alak@example.com",
    info: "Intern Pottersmap",
  },
  {
    username:'shafinsir',
    name: "Shafin Ahmed",
    email: "sirshafin@example.com",
    info: "Intern Pottersmap",
  },
   {
    username:'roushanraj',
    name: "Roushan Raj",
    email: "roushan@example.com",
    info: "Pottersmap",
  },
   {
    username:'ashish',
    name: "Ashish",
    email: "ashish@example.com",
    info: "Pottersmap",
  },
  // Add more user profiles
];

export default profileData;
