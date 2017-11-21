# Frallappen
version 0.1

Kör ni frukost på jobbet?
Med frallappen kan du enkelt lägga en beställning på en fralla eller flera frallor. Totalen av antal beställda frallor gjorde visas, vilket underlättar när väl alla frallor ska beställas.

Databas: Byggd med firebase

# Hur man installerar och använder webappen
1. Ladda ner eller Forka "frallappen".
2. Skapa ett projekt med valfritt namn på firebase, https://firebase.google.com/
3. På Firebase (https://firebase.google.com/): Gå till databas -> rules och ändra både "read" och "write" till "true", sedan spara.
Såhär:

{
  "rules": {
    ".read": true,
    ".write": true
  }
}


4. Kopiera din firebasekod som finns under "Project Overview" sedan klicka på knappen "Add Firebase to your web app".
5. Klistra in din firebasekod och ersätt all kod i filen, "config.js" som ligger i katalogen: frallappen/assets/js/config.js
6. Klart!
