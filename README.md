# Projet - Observations Animalières


# Question1: 

`` Modélisation de l'entité Observations 
## Coordonnées GPS est représentée par deux propriété : latitude et longitude
- dateHeure : Date et heure de l'observation
- latitude : float (coordonnée GPS)
- longitude : float(coordonnée GPS)
- description : Text (description textuelle de l'observation)
- animal : relation vers l'entité Animal (ManyToOne), chaque animal peut avoir plusieurs observations , mais chaque observation est concerné par un seul animal.

Commandes:

- npm install 
- ng serve --host 0.0.0.0
- composer install 
- symfony server:start --no-tls --listen-ip=0.0.0.0 --d


# Question2:

- Création des deux entités Animal et Observation.

## Migrations :
- php bin/console make:migration
- php bin/console doctrine:migrations:migrate

## Les points d’entrée pour les animaux et pour les observations de l’API proposée.

Animal: 

- GET /api/animals : Retrieves the collection of Animal resources.

- POST /api/animals : Creates a Animal resource.

- GET /api/animals/{id} : Retrieves a Animal resource.

- DELETE /api/animals/{id} : Removes the Animal resource.

- PATCH /api/animals/{id} : Updates the Animal resource.

Observation

- GET /api/observations : Retrieves the collection of Observation resources.

- POST /api/observations : Creates a Observation resource.

- GET /api/observations/{id} : Retrieves a Observation resource.

- DELETE /api/observations/{id} : Removes the Observation resource.

- PATCH /api/observations/{id} : Updates the Observation resource.



# Question 3: Fixtures pour les animaux et observations:

## Installation du bundle des fixtures:

- symfony composer require --dev doctrine/doctrine-fixtures-bundle

## Creation de la fixtures pour les animaux:

- php bin/console make:fixture AnimalFixtures

## Creation de la fixtures pour les observations:

- php bin/console make:fixture ObservationFixtures

## chargement des fixtures :

- php bin/console doctrine:fixtures:load


# Question 4: composant about et qui donne une descriptionde l’application et les concepteurs de l’application:
- ng generate component about

## instalation de mlateriel design:

- ng add @angular/material
- ng serve --host 0.0.0.0

## Question 5. Création un ou plusieurs services pour manipuler les données du backend.

  . src/services , src/entity

 - ng generate service animal
 - ng generate service observation
 - ng generate interfaces/entity/Obsarvation
 - ng generate interfaces entity/animal

 ## Question 6. Créationdes  composants pour afficher l’ensemble des animaux, un seul animal spécifique le modifier ou bien supprimer 

  src/animal
- ng generate component list_animals
- ng generate component show_animal
- ng generate component add_animal
- ng generate component edit_animal

aa(la suppresion inclus au componenet show_animal)

## Question 7. creation des components pour l'ajout, affichage , mise a jour des observations.
    src/components 
    -ng generate component observation-detail
    -ng generate component observation-form
    -ng generate component observation-list
    -ng generate component observation-update
 
 
## Question 8. Ajout de la barre de navigartion
   - ng serve 
   - symfony server:start 


## Question 9.  un système d’authentification  et de connection à l’application et se déconnecter. 
   -  ng serve 
   ## dans le backend  pour login 
   -  symfony server:start 
   -  symfony php bin/console make:user
   -  symfony php bin/console make:migration
   -  symfony php bin/console doctrine:migrations:migrate
   -  symfony php bin/console make:fixtures UserFixtures
   -  symfony php bin/console doctrine:fixtures:load
   -  symfony composer require lexik/jwt-authentication-bundle
   -  symfony php bin/console lexik:jwt:generate-keypair
   ## dans le frontend  pour login et logout
   -  ng generate service services/authentification
   -  ng generate component login
   -  ng generate interceptor interceptor/jwt
   ## dans le backend pour register 
   -  touch src/Controller/RegisterController.php
   -  touch src/Controller/SecurityController.php
   ## dans le frontend pour register 
   -  ng generate component register
   
## Question 11. : creation d'une extention 
   - l'idée est de permettre aux utilisateurs de choisir leurs animaux favoris parmi ceux affichés. Cela inclut deux actions principales : ajout et suppression 
   - Ajout d'une animation pour les favoris .

   
