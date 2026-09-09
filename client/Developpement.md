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
