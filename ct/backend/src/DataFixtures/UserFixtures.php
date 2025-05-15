<?php

namespace App\DataFixtures;

use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class UserFixtures extends Fixture
{
    public const USER_REFERENCE = 'user';
    private UserPasswordHasherInterface $hasher;

    public function __construct(UserPasswordHasherInterface $hasher)
    {
        $this->hasher = $hasher;
    }


    public function load(ObjectManager $manager): void
    {
        $user = new User();
        $user->setEmail("user@user.me")
            ->setPassword($this->hasher->hashPassword($user, 'user1234'))
            ->setFirstname("U.")
            ->setLastname("User");
        $this->addReference(self::USER_REFERENCE, $user);
        $manager->persist($user);
        $manager->flush();
    }
}