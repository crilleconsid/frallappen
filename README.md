![alt text](https://sornmo.se/frallappen/assets/img/logo-with-consid.svg width=100)
# Frallappen
// version 0.1

Kör ni frukost på jobbet?
Med frallappen kan du enkelt lägga en beställning på en fralla eller flera frallor för varje vardag i veckan. Totalen av antalet beställda frallor visas på frallappens startsida: /frallappen, vilket underlättar när väl alla frallor ska beställas.
Historiken för alla beställningar som är gjorda med frallappen visas på adressen: /frallappen/info.

# Hur man installerar och använder webappen
1. Ladda ner eller Forka "frallappen".
2. Skapa ett projekt med valfritt namn på firebase, https://firebase.google.com/
3. På Firebase (https://firebase.google.com/): Gå till databas -> rules och ändra både "read" och "write" till "true", sedan spara.
Såhär:
{<br />
&nbsp;&nbsp;"rules": {<br />
&nbsp;&nbsp;&nbsp;&nbsp;".read": true,<br />
&nbsp;&nbsp;&nbsp;&nbsp;".write": true<br />
&nbsp;&nbsp; }<br />
}<br />

4. Kopiera din firebasekod som finns under "Project Overview" sedan när du klickar på knappen "Add Firebase to your web app".
5. Klistra in din firebasekod och ersätt all kod i filen, "config.js" som ligger i katalogen: frallappen/assets/js/config.js
6. Klart!
