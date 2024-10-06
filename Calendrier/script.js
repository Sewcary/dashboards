// Contenu des concepts à maîtriser par section avec 3 niveaux
const detailsContent = {
    'data-storage': {
        title: 'Concevoir et implémenter le stockage des données (15-20%)',
        items: [
            {
                subTitle: 'Implémenter une stratégie de partition',
                subItems: [
                    'Implémenter une stratégie de partition pour les fichiers',
                    'Implémenter une stratégie de partition pour les charges de travail analytiques',
                    'Implémenter une stratégie de partition pour les charges de travail de streaming',
                    'Implémenter une stratégie de partition pour Azure Synapse Analytics',
                    'Identifier quand le partitionnement est nécessaire dans Azure Data Lake Storage Gen2'
                ]
            },
            {
                subTitle: 'Concevoir et implémenter la couche d’exploration des données',
                subItems: [
                    'Créer et exécuter des requêtes en utilisant une solution de calcul qui tire parti de SQL serverless et des clusters Spark',
                    'Recommander et implémenter des modèles de base de données Azure Synapse Analytics',
                    'Envoyer (push) la traçabilité des données nouvelles ou mises à jour vers Microsoft Purview',
                    'Parcourir et rechercher des métadonnées dans le catalogue de données Microsoft Purview'
                ]
            }
        ]
    },
    'data-processing': {
        title: 'Développer le traitement des données (40-45%)',
        items: [
            {
                subTitle: 'Ingérer et transformer des données',
                subItems: [
                    'Concevoir et implémenter des chargements de données incrémentiels',
                    'Transformer des données en utilisant Apache Spark',
                    'Transformer des données en utilisant Transact-SQL (T-SQL) dans Azure Synapse Analytics',
                    'Ingérer et transformer des données en utilisant des pipelines Azure Synapse ou Azure Data Factory',
                    'Transformer des données à l’aide d’Azure Stream Analytics',
                    'Nettoyer les données',
                    'Gérer les données en doublon',
                    'Éviter les données dupliquées à l’aide de la fonctionnalité Exactement une remise d’Azure Stream Analytics',
                    'Gérer les données manquantes',
                    'Gérer les données tardives',
                    'Fractionner les données',
                    'Fragmenter du code JSON',
                    'Encoder et décoder des données',
                    'Configurer la gestion des erreurs pour une transformation',
                    'Normaliser et dénormaliser des données',
                    'Effectuer une analyse exploratoire des données'
                ]
            },
            {
                subTitle: 'Développer des solutions de traitement par lots',
                subItems: [
                    'Développer des solutions de traitement par lots en utilisant Azure Data Lake Storage Gen2, Azure Databricks, Azure Synapse Analytics et Azure Data Factory',
                    'Utiliser PolyBase pour charger des données dans un pool SQL',
                    'Implémenter Azure Synapse Link et interroger les données répliquées',
                    'Créer des pipelines de données',
                    'Mettre les ressources à l’échelle',
                    'Configurer la taille de lot',
                    'Créer des tests pour les pipelines de données',
                    'Intégrer des notebooks Jupyter ou Python dans un pipeline de données',
                    'Données de lot Upsert',
                    'Rétablir les données à un état précédent',
                    'Configurer la gestion des exceptions',
                    'Configurer la conservation des lots',
                    'Lire et écrire dans un lac delta'
                ]
            },
            {
                subTitle: 'Développer une solution de traitement de flux',
                subItems: [
                    'Créer une solution de traitement de flux en utilisant Stream Analytics et Azure Event Hubs',
                    'Traiter des données en utilisant le streaming structuré Spark',
                    'Créer des agrégats fenêtrés',
                    'Gérer la dérive de schéma',
                    'Traiter des données de série chronologique',
                    'Traiter des données sur plusieurs partitions',
                    'Traiter au sein d’une même partition',
                    'Configurer des points de contrôle et un filigranage pendant le traitement',
                    'Mettre les ressources à l’échelle',
                    'Créer des tests pour les pipelines de données',
                    'Optimiser les pipelines à des fins analytiques ou transactionnelles',
                    'Gestion des interruptions',
                    'Configurer la gestion des exceptions',
                    'Transmettre des données Upsert en continu',
                    'Relire les données de flux archivés',
                    'Lire et écrire dans un lac delta'
                ]
            },
            {
                subTitle: 'Gérer les lots et les pipelines',
                subItems: [
                    'Déclencher des lots',
                    'Gérer les chargements par lots ayant échoué',
                    'Valider les chargements par lots',
                    'Gérer des pipelines de données dans des pipelines Azure Data Factory ou Azure Synapse',
                    'Planifier des pipelines de données dans des pipelines Azure Data Factory ou Azure Synapse',
                    'Implémenter le contrôle de version pour les artefacts de pipeline',
                    'Gérer des travaux Spark dans un pipeline'
                ]
            }
        ]
    },
    'security': {
        title: 'Sécuriser, superviser et optimiser le stockage et le traitement des données (30-35%)',
        items: [
            {
                subTitle: 'Implémenter la sécurité des données',
                subItems: [
                    'Implémenter le masquage des données',
                    'Chiffrer les données au repos ou en déplacement',
                    'Implémenter une sécurité au niveau des lignes et des colonnes',
                    'Implémenter le contrôle d’accès en fonction du rôle (RBAC) Azure',
                    'Implémenter des listes de contrôle d’accès de type POSIX pour Data Lake Storage Gen2',
                    'Implémenter une politique de conservation des données',
                    'Implémenter des points de terminaison sécurisés (privés et publics)',
                    'Implémenter des jetons de ressource dans Azure Databricks',
                    'Charger un DataFrame avec des informations sensibles',
                    'Écrire des données chiffrées dans des tables ou des fichiers Parquet',
                    'Gérer des informations sensibles'
                ]
            },
            {
                subTitle: 'Superviser le stockage des données et le traitement des données',
                subItems: [
                    'Implémenter la journalisation utilisée par Azure Monitor',
                    'Configurer des services de supervision',
                    'Superviser le traitement des flux',
                    'Mesurer les performances du déplacement des données',
                    'Superviser et mettre à jour les statistiques sur les données d’un système',
                    'Superviser les performances des pipelines de données',
                    'Mesurer les performances des requêtes',
                    'Planifier et superviser les tests de pipeline',
                    'Interpréter les métriques et les journaux Azure Monitor',
                    'Implémenter une stratégie d’alerte de pipeline'
                ]
            },
            {
                subTitle: 'Optimiser et résoudre les problèmes de stockage des données et de traitement des données',
                subItems: [
                    'Compacter des petits fichiers',
                    'Gérer l’asymétrie dans les données',
                    'Gérer le déversement de données',
                    'Optimiser la gestion des ressources',
                    'Optimiser les requêtes en utilisant des indexeurs',
                    'Optimiser les requêtes en utilisant un cache',
                    'Résoudre les problèmes d’un travail Spark ayant échoué',
                    'Résoudre les problèmes d’exécution d’un pipeline ayant échoué, y compris les activités exécutées dans des services externes'
                ]
            }
        ]
    }
};

// Fonction pour générer un nom de fichier en fonction du texte du lien
function generateFileName(text) {
    return text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '') + '.html';
}

// Fonction pour afficher les détails de la section avec des liens cliquables
function showDetails(section) {
    const details = detailsContent[section];
    document.getElementById('details-title').textContent = details.title;
    const detailsList = document.getElementById('details-list');
    detailsList.innerHTML = ''; // On vide la liste avant d'ajouter les nouveaux éléments

    details.items.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${item.subTitle}</strong>`;

        const subList = document.createElement('ul');
        item.subItems.forEach(subItem => {
            const subLi = document.createElement('li');

            if (typeof subItem === 'string') {
                const link = document.createElement('a');
                link.textContent = subItem;
                link.style.cursor = 'pointer';

                // Utilisation de onclick pour naviguer vers une nouvelle page en générant dynamiquement le nom du fichier
                link.onclick = () => {
                    const fileName = generateFileName(subItem);  // Génère le nom du fichier dynamiquement
                    alert(`Vous avez cliqué sur : ${subItem}`);
                    window.location.href = fileName;  // Redirige vers la page générée
                };
                subLi.appendChild(link);
            } else {
                subLi.textContent = subItem;
            }
            subList.appendChild(subLi);
        });

        li.appendChild(subList);
        detailsList.appendChild(li);
    });

    document.getElementById('details-section').style.display = 'block';
}

// Fonction pour cacher les détails et revenir à la vue principale
function hideDetails() {
    document.getElementById('details-section').style.display = 'none';
}

// Gestion de la navigation des onglets
document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.tab-button').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));

        button.classList.add('active');
        document.getElementById(button.getAttribute('data-tab')).classList.add('active');
    });
});