# Best pratique 
/mon-projet-angular  
│── /src  
│   ├── /app  
│   │   ├── /core                 # Module central (services globaux, guards, interceptors...)  
│   │   ├── /shared               # Module partagé (composants réutilisables, pipes, directives)  
│   │   ├── /features             # Modules métier (ex: users, products, orders...)  
│   │   │   ├── /users            # Ex: Module utilisateur  
│   │   │   │   ├── /components   # Composants spécifiques au module  
│   │   │   │   ├── /services     # Services spécifiques au module  
│   │   │   │   ├── users.module.ts  
│   │   │   │   ├── users-routing.module.ts  
│   │   │   ├── /products         # Autre module métier  
│   │   ├── /layouts              # Layouts (ex: admin, public, auth)  
│   │   ├── /auth                 # Authentification et gestion des utilisateurs  
│   │   ├── /state                # Gestion d'état (NgRx, Akita, ou services avec BehaviorSubject)  
│   │   ├── app.module.ts         # Module principal  
│   │   ├── app-routing.module.ts # Routes principales  
│   ├── /assets                   # Fichiers statiques (images, json, icônes...)  
│   ├── /environments             # Configurations des environnements (dev, prod...)  
│── angular.json  
│── package.json  
│── tsconfig.json  
│── README.md  
