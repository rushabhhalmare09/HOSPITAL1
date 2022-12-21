0.
  KEEP 2 FOLDERS and delete rest and do below commands
mkdir FOLDER
  566  npx create-react-app my-app
  567  npm audit fix --force
  568  cd my-app

1. for icon pack -  website - https://react-icons.github.io/react-icons
   npm install react-icons --save
2.
   npm install react-router-dom
3. SCSS - Sassy css
  npm install node-sass --save-dev
4.


HeroSection
   - It is a=making our page responsive all the navbar content footer and all it is on the place bcz of HeroSection

<HeroSection {...homeObjOne} /> 
   = Here in HeroSection we are making how HomePage look,  PatientSection looks i.e homeObjOne here whatever parameter are mentioned,
   they all are defined in HeroSection

Navbar 
    - this links are made in "Navbar.jsx" =  /aboutUs , /Home, /SignUp = 

Button 
   - Helping to make a button 

LOGIN PAGE FOR ADMIN, PATIENT, DOCTOR, RECEPTIONIST
   
   - FOR GIVING LINK TO BUTTON [LOGIN]
         -      {/* Here we are giving [LINK] to text so click on text i.e "log-in" */}
                {/* <buttonPa type="submit"><Link to = "">Login</Link></buttonPa> */}  
