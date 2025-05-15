<?php

namespace App\DataFixtures;

use App\Entity\Observation;
use DateTime;
use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Persistence\ObjectManager;

class ObservationFixtures extends Fixture implements DependentFixtureInterface
{
    public function load(ObjectManager $manager): void
    {
        $distribution = [
            0 => 8,  
            1 => 10,   
            2 => 7,   
            3 => 6,   
            4 => 5,   
            5 => 4,   
            6 => 4,   
            7 => 3,   
            8 => 2,   
            9 => 1,   
        ];

        $descriptions = [
            "Observation en pleine nature.",
            "Spécimen adulte en bonne santé.",
            "Individu observé en train de se nourrir.",
            "Animal accompagné de petits/jeunes.",
            "Comportement territorial observé.",
            "Spécimen en migration.",
            "Comportement de reproduction observé.",
            "Individu au repos.",
            "Animal en train de construire son habitat.",
            "Observation à distance."
        ];

        foreach ($distribution as $animalIndex => $count) {
            $animal = $this->getReference('animal_' . $animalIndex, 'App\Entity\Animal');;
            
            for ($i = 0; $i < $count; $i++) {
                $observation = new Observation();
                
                $daysAgo = rand(1, 730);
                $date = new DateTime();
                $date->modify("-$daysAgo days");
                $hours = rand(0, 23);
                $minutes = rand(0, 59);
                $date->setTime($hours, $minutes);
                
                $observation->setDateHeure($date);
                
                $latitude = rand(-8900, 8900) / 100; 
                $longitude = rand(-17900, 17900) / 100; 
                
                $observation->setLatitude($latitude);
                $observation->setLongitude($longitude);
                $observation->setAnimal($animal);
                $observation->setUser($this->getReference(UserFixtures::USER_REFERENCE, User::class));
                $descriptionIndex = rand(0, count($descriptions) - 1);
                $additionalInfo = " Observation #" . ($i + 1) . " de " . $animal->getNomCommun();
                $observation->setDescription($descriptions[$descriptionIndex] . $additionalInfo);
                
                $manager->persist($observation);
            }
        }

        $manager->flush();
    }

    public function getDependencies():array
    {
        return [
            AnimalFixtures::class,
            UserFixtures::class
        ];
    }
}