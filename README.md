## Personal Tech Portfolio
This is a personal tech portfolio project. This is also the place where I'll be applying my learning and practicing. This portoflio will be the single source for all fo my works.

## Directory Rules
All the code related to UI will be inside `src` folder.
src folder will have the following structure:
```
src
├── components
│   ├── Button|Checkbox|Input|Radio|Select|Textarea|...
│   ├── Card|Container|Divider|Grid|Header|Icon|...
│   ├── Header
│   ├── Footer
│   ├── Input
│   ├── List
│   ├── Loader
│   ├── Modal
│   ├── Navbar
│   ├── Pagination
│   ├── Table
│   ├── Tabs
│   ├── Tooltip
│   ├── Typography
│   ├── ...
├── pages
│   ├── Home
│          ├── homesections
│          │   ├── homesection1
│          │   │      ├── HomeSection1.jsx
│          │   │      ├── HomeSection1.module.scss
│          ├── Home.jsx
│          ├── Home.scss
│   ├── About
│          ├── aboutsections
│          │   ├── aboutsection1
│          │      ├── AboutSection1.jsx
│          │      ├── AboutSection1.module.scss
│          ├── About.jsx
│          ├── About.scss
│    
├── globals (This will have all the globals such as helpers, constants, etc.)
├── utils (This will have all the utils such as Home, About, etc.)
├── config (This will have all the config such as routes, etc.)
├── assets (This will have all the assets such as images, fonts, etc.)
├── redux (This will have all the redux related code such as reducers, actions, etc.)
├── styles (This will have all the styles such as global, components, etc.)
├── services (This will have all the services such as api, etc.)
├── __tests__ (This will have all the tests such as unit, integration, etc.)
```