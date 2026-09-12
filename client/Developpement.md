# JOURNAL DE DEVELOPPEMENT

##  SUIVRE LE PROCESS DU DEV CHAQUE JOUR.

### Jour - #01

Création de la hero section.
Lors de ce process, j'ai rencontré plus d'un problème:
1. Structure ou hiérachie, ce qui m'empecha de mieux styler.
Mais j'ai fini par trouver ma solution, en essayant de styler pour voir si cela correspond au design.

2. Dimentionnement de l'image principale.
Au lieu de :

```bash```
    ```.hero{ display: flex; justify-content: space-between }```

et moi j'ai fait:
```bash```
    ```.hero{ display: flex; float: left;}```
Cà fonctionne, mais l'image s'ettend et perd sa valeur initiale.


### Jour - #02

Pour ce jour 2, le but est de créer la carte des articles.

- Problèmes rencontrés:

    J'ai varaiment eu du mal à structurer les éléments du conteneur principal des articles.

    #### Solution
    Mais j'ai fini par trouver un belle parade.
    J'ai d'abord, commencer par afficher du contenu statique sans boucler sur les ```object JS```.
    Lorsque j'ai trouvé le design que je cherchais, j'ai conservé un seul conteneur d'article pour afficher les éléments
    en bouclant sur mon object JS avec ```(uState)``` et ```(.map())```.

- Coté style:

    J'ai vraiment pas l'habitude de commenter toutes mes lignes de code, du coup pour ce projet, cela me derange beaucoup.
    Habituellement, je ne le fais pas. Mais ce projet me tient vraiment à coeur donc je met tout mon potentiel, afin de fournir un truc vraiment cool.

    #### Solution
    Pour cela, j'ai réussi à trouver deux temps pour chaque tâches. Je code la nuit de 00h à 05h et soit à 05h ou la journée ou avant de coder une nouvelle partie, 
    je décris en documentant le travaille préaccomplir.



### Jour - #03 (Navbar)
Contre toute attente, à partir de cet composant de navigation, tout a commencé à me metrre hors d'etat normal.
J'avais jamais eu à plonger entièrement en react ainsi. Chaque fois que j'avais affaire à une fonctionnalité comme le menu de navigation et les lien en react, je ne cherchais pas forcrmrnt loin. J'applique simple ce que j'arrive à faire en ```HTML/CSS/JS``` classique et je m'ensortais, mais jusqu'ici, je viens de comprendre le phénomène le plus merveilleux quand j'utlise la puissance des bibliothèques incluses.

J'ai utilisé :
    1. BrowserRouter
    2. Routes
    3. Route
de la bibliothèque ```@react-router-dom```

En savoir plus via: [react-router-dom](https://www.npmjs.com/package/react-router-dom?activeTab=readme)

### Jour - #04 (Creation de la page detail article)

Le jour était plus épineux que le precedent jour.
Comment récupérer un unique article selon son id ? Là était la question.

Alors, je me souviens avoir faire cà une fois en django lors de la conception de mon tout premier blog. C'était pas si compliqué que ca.
En ```JSX```, c'est légèrement pareil sauf que là, on a comme toujours, besoin d'installer des biblios, puis de gérer la récuperation d'id unique avec ```*useParameters()``` de ```(react-router-dom)``` puis convertir cette chaine de caractère obtenue en nombre afin de faire correspondre exactement à l'id rechercher.


### Jour - #05

# A retenir 🔵

Quelle est difference entre les liens de navigation entre composants du projet en react et l'utilisation des balises classique telle que 
la balise: ```<a href='/lien-de-redirection'> mon lien classique </a>```

La bibliothèque react-router-dom fournie des outils hyper cool à savoir:
1. ```Link``` -> joue le rôle de la balise ```<a>``` classique 
2. ```BrowserRouter``` -> rend la navigation entre composant plus fluide sans avoir à recharger la page toute entière comme le faire la balise ```<a>``` classique. ce qui donne un avantage encore plus intéressante, car l'UX est bien fait grace à la recharge instantanée de composants.

Pour l'instant, c'est que j'ai usé, donc j'en parlerai au fur et à mesure que je découvre l'écosystème.