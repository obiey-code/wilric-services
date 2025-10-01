<?php
// Informations de connexion à la base de données
$serveur = "localhost";
$utilisateur = "root";
$mot_de_passe = "";
$base_de_donnees = "wilric_services";




try {
    
    // Connexion à la base de données avec PDO
    $connexion = new PDO("mysql:host=$serveur;dbname=$base_de_donnees", $utilisateur, $mot_de_passe);
    // Configuration pour afficher les erreurs PDO
    $connexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Récupération des données du formulaire
    
    $nom = $_POST['nom'];
    $email = $_POST['email'];
    $telephone = $_POST['telephone'];
    $objet = $_POST['objet'];
    $textes = $_POST['message'];
   


    // Préparation de la requête SQL
    $requete = $connexion->prepare("INSERT INTO contact (nom, email,telephone,objet,textes) VALUES (:nom, :email, :telephone, :objet, :textes)");

    // Liaison des paramètres
    $requete->bindParam(':nom', $nom);
    $requete->bindParam(':email', $email);
    $requete->bindParam(':telephone', $telephone);
    $requete->bindParam(':objet', $objet);
    $requete->bindParam(':textes', $textes);


    // Exécution de la requête
    $requete->execute();

    echo "Nouvel enregistrement ajouté avec succès";
} catch(PDOException $e) {
    echo "Erreur : " . $e->getMessage();
}

// Fermeture de la connexion
$connexion = null;

header("Location: contact.html");














exit;
?>