<?php
namespace App\Controller;

use ApiPlatform\Metadata\ApiResource;
use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\HttpKernel\Attribute\AsController;

#[AsController]
class RegisterController extends AbstractController
{
    public function __invoke(Request $request, UserPasswordHasherInterface $passwordHasher, EntityManagerInterface $entityManager): JsonResponse
    {
        try {
            $data = json_decode($request->getContent(), true);

            if (!isset($data['email']) || !isset($data['password']) || !isset($data['firstname']) || !isset($data['lastname'])) {
                return new JsonResponse(['error' => 'Email, password, firstname and lastname are required'], 400);
            }

            // Create and configure the new user entity
            $user = new User();
            $user->setEmail($data['email']);
            $user->setFirstname($data['firstname']);
            $user->setLastname($data['lastname']);
            
            // Set roles if provided
            if (isset($data['roles']) && is_array($data['roles'])) {
                $user->setRoles($data['roles']);
            } else {
                $user->setRoles(['ROLE_USER']);
            }
            
            // Hash the password
            $hashedPassword = $passwordHasher->hashPassword($user, $data['password']);
            $user->setPassword($hashedPassword);

            // Persist the user entity in the database
            $entityManager->persist($user);
            $entityManager->flush();

            return new JsonResponse(['message' => 'User created successfully'], 201);
        } catch (\Exception $e) {
            return new JsonResponse(['error' => 'An error occurred: ' . $e->getMessage()], 500);
        }
    }
}