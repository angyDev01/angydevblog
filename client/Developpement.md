# JOURNAL DE DEVELOPPEMENT

##  SUIVRE LE PROCESS DU DEV CHAQUE JOUR.

### Jour - #01

Création de la hero section.
Lors de ce process, j'ai rencontré plus d'un problème:
1. Structure ou hiérachie, ce qui m'empecha de mieux styler.
Mais j'ai fini par trouver ma solution, en essayant de styler pour voir si cela correspond au design.

2. Dimentionnement de l'image principale.
Au lieu de :

bash
    .hero{
        display: flex;
        justify-content: space-between;
    }

et moi j'ai fait:
bash
    .hero{
        display: flex;
        float: left;
    }```
Cà fonctionne, mais l'image s'ettend et perd sa valeur initiale.


### Jour - #02

Pour ce jour 2, le but est de créer la carte des articles.

- Problèmes rencontrés:

    J'ai varaiment eu du mal à structurer les éléments du conteneur principal des articles.

    #### Solution
    Mais j'ai fini par trouver un belle parade.
    J'ai d'abord, commencer par afficher du contenu statique sans boucler sur les object JS.
    Lorsque j'ai trouvé le design que je cherchais, j'ai conservé un seul conteneur d'article pour afficher les éléments
    en bouclant sur mon object JS avec (uState) et (.map()).

- Coté style:

    J'ai vraiment pas l'habitude de commenter toutes mes lignes de code, du coup pour ce projet, cela me derange beaucoup.
    Habituellement, je ne le fais pas. Mais ce projet me tient vraiment à coeur donc je met tout mon potentiel, afin de fournir un truc vraiment cool.

    #### Solution
    Pour cela, j'ai réussi à trouver deux temps pour chaque tâches. Je code la nuit de 00h à 05h et soit à 05h ou la journée ou avant de coder une nouvelle partie, 
    je décris en documentant le travaille préaccomplir.



### Jour - #03