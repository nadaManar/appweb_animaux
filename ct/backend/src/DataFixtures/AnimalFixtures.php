<?php

namespace App\DataFixtures;

use App\Entity\Animal;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class AnimalFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        $animalsData = [
            [
                'nomCommun' => 'Lion',
                'nomSavant' => 'Panthera leo',
                'embranchement' => 'Chordata',
                'classe' => 'Mammalia',
                'ordre' => 'Carnivora',
                'sousOrdre' => 'Feliformia',
                'famille' => 'Felidae',
                'genre' => 'Panthera',
                'iucn' => 'VU (Vulnérable)',
                'description' => 'Le lion est un grand félin au pelage fauve à crinière imposante pour les mâles. Vivant en groupe appelé pride, il est un prédateur territorial emblématique des savanes africaines.'
            ],
            [
                'nomCommun' => 'Éléphant d\'Afrique',
                'nomSavant' => 'Loxodonta africana',
                'embranchement' => 'Chordata',
                'classe' => 'Mammalia',
                'ordre' => 'Proboscidea',
                'sousOrdre' => 'Elephantiformes',
                'famille' => 'Elephantidae',
                'genre' => 'Loxodonta',
                'iucn' => 'EN (En danger)',
                'description' => 'Plus grand mammifère terrestre actuel, l\'éléphant d\'Afrique est reconnaissable à ses grandes oreilles, sa trompe préhensile et ses défenses en ivoire. C\'est un animal social vivant en troupeau matriarcal.'
            ],
            [
                'nomCommun' => 'Aigle royal',
                'nomSavant' => 'Aquila chrysaetos',
                'embranchement' => 'Chordata',
                'classe' => 'Aves',
                'ordre' => 'Accipitriformes',
                'sousOrdre' => 'Accipitres',
                'famille' => 'Accipitridae',
                'genre' => 'Aquila',
                'iucn' => 'LC (Préoccupation mineure)',
                'description' => 'L\'aigle royal est un rapace majestueux à l\'envergure impressionnante. Excellent chasseur, il possède une vue exceptionnelle et des serres puissantes pour capturer ses proies.'
            ],
            [
                'nomCommun' => 'Baleine à bosse',
                'nomSavant' => 'Megaptera novaeangliae',
                'embranchement' => 'Chordata',
                'classe' => 'Mammalia',
                'ordre' => 'Cetacea',
                'sousOrdre' => 'Mysticeti',
                'famille' => 'Balaenopteridae',
                'genre' => 'Megaptera',
                'iucn' => 'LC (Préoccupation mineure)',
                'description' => 'Cette baleine est connue pour ses chants complexes et ses spectaculaires sauts hors de l\'eau. Elle effectue de longues migrations entre ses zones d\'alimentation et de reproduction.'
            ],
            [
                'nomCommun' => 'Tortue luth',
                'nomSavant' => 'Dermochelys coriacea',
                'embranchement' => 'Chordata',
                'classe' => 'Reptilia',
                'ordre' => 'Testudines',
                'sousOrdre' => 'Cryptodira',
                'famille' => 'Dermochelyidae',
                'genre' => 'Dermochelys',
                'iucn' => 'VU (Vulnérable)',
                'description' => 'Plus grande des tortues marines, la tortue luth peut atteindre 2 mètres de long. Sa carapace est constituée d\'une couche de peau et de cartilage plutôt que d\'écailles.'
            ],
            [
                'nomCommun' => 'Panda géant',
                'nomSavant' => 'Ailuropoda melanoleuca',
                'embranchement' => 'Chordata',
                'classe' => 'Mammalia',
                'ordre' => 'Carnivora',
                'sousOrdre' => 'Caniformia',
                'famille' => 'Ursidae',
                'genre' => 'Ailuropoda',
                'iucn' => 'VU (Vulnérable)',
                'description' => 'Emblème de la conservation, le panda géant est un ursidé au pelage noir et blanc caractéristique. Son régime alimentaire est constitué à 99% de bambou malgré son système digestif de carnivore.'
            ],
            [
                'nomCommun' => 'Loup gris',
                'nomSavant' => 'Canis lupus',
                'embranchement' => 'Chordata',
                'classe' => 'Mammalia',
                'ordre' => 'Carnivora',
                'sousOrdre' => 'Caniformia',
                'famille' => 'Canidae',
                'genre' => 'Canis',
                'iucn' => 'LC (Préoccupation mineure)',
                'description' => 'Prédateur social vivant en meute hiérarchisée, le loup gris est un canidé adaptable présent dans divers habitats. Sa communication complexe inclut vocalisations, postures et expressions faciales.'
            ],
            [
                'nomCommun' => 'Gorille des montagnes',
                'nomSavant' => 'Gorilla beringei beringei',
                'embranchement' => 'Chordata',
                'classe' => 'Mammalia',
                'ordre' => 'Primates',
                'sousOrdre' => 'Haplorrhini',
                'famille' => 'Hominidae',
                'genre' => 'Gorilla',
                'iucn' => 'EN (En danger)',
                'description' => 'Le gorille des montagnes est le plus grand des primates vivants. Malgré sa force impressionnante, c\'est un animal paisible et végétarien qui vit en groupes familiaux dirigés par un mâle à dos argenté.'
            ],
            [
                'nomCommun' => 'Requin blanc',
                'nomSavant' => 'Carcharodon carcharias',
                'embranchement' => 'Chordata',
                'classe' => 'Chondrichthyes',
                'ordre' => 'Lamniformes',
                'sousOrdre' => 'Lamnoidei',
                'famille' => 'Lamnidae',
                'genre' => 'Carcharodon',
                'iucn' => 'VU (Vulnérable)',
                'description' => 'Prédateur majeur des océans, le grand requin blanc est connu pour sa taille impressionnante et sa dentition acérée. Malgré sa réputation, il est rarement responsable d\'attaques contre les humains.'
            ],
            [
                'nomCommun' => 'Ornithorynque',
                'nomSavant' => 'Ornithorhynchus anatinus',
                'embranchement' => 'Chordata',
                'classe' => 'Mammalia',
                'ordre' => 'Monotremata',
                'sousOrdre' => 'Platypoda',
                'famille' => 'Ornithorhynchidae',
                'genre' => 'Ornithorhynchus',
                'iucn' => 'NT (Quasi menacée)',
                'description' => 'L\'ornithorynque est l\'un des rares mammifères qui pond des œufs. Cet animal semi-aquatique possède un bec de canard, une queue de castor, des pattes palmées et les mâles ont un éperon venimeux.'
            ],
        ];

        foreach ($animalsData as $index => $animalData) {
            $animal = new Animal();
            $animal->setNomCommun($animalData['nomCommun']);
            $animal->setNomSavant($animalData['nomSavant']);
            $animal->setEmbranchement($animalData['embranchement']);
            $animal->setClasse($animalData['classe']);
            $animal->setOrdre($animalData['ordre']);
            $animal->setSousOrdre($animalData['sousOrdre']);
            $animal->setFamille($animalData['famille']);
            $animal->setGenre($animalData['genre']);
            $animal->setIucn($animalData['iucn']);
            $animal->setDescription($animalData['description']);
            
            $manager->persist($animal);
            
            $this->addReference('animal_'.$index, $animal);
        }

        $manager->flush();
    }
}