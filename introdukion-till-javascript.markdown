introdukion-till-javascript.markdown
# JavaScript #
Viktigaste du behöver veta?

* Du hittar bra information på [Mozilla Developer Network](https://developer.mozilla.org/en/JavaScript/)
*Mycket annat om JavaScript på nätet är dålig information och vilseledande.
*Lättläst, men längre, kod **sparar jobb** jämfört med kort och svårläst kod.

## Kort historik ##

 *Netscape vill ha skript i webbläaren
 *Brendan Elich får bara_två veckor_på sig, innan första versionen presenterades
 *Kallades först_Mocha_, sedan _LiveScript_ (sept 1995)
 *Bytte namn av **marknadsföringsskäl** till JavaScript(dec 1995)
 *Namnet_ ägs av Oracle, som köpt Sun, där Java uppfanns
 *Microsoft kallar sin version JScript

## Användning ##

 *I webbläsaren: "Client side scripting" 
 *På servern: "Server side scripting" (ovanligt fram tills 2010)
 *I andra program, som _makrospråk_ (Adobe Photoshop,m.fl. Open/Libre Office)
 *I Flash under namnet _ActionScript_
 *För utveckling av _widgets_ och mobila _appar_
 *Etc.
Javascript != "Java light"

## Standardisering ##

HTML, CSS och DOM standardiseras av **W3C**.

JavaScript av **ECMA** (European Computer Manufacturers Association)

Därav namnet ECMAScript.

## Versioner ##

Netscape, sedan Mozilla, har alltid varit drivande i utvecklingen och skapat _de facto_
implementeringen som andra följder

[Detaljerad tabell på Wikipedia](http://en.wikipedia.org/wiki/JavaScript#Versions)

Alla webbläsare från 2012 och framår stödjer i **mycket** god utsräckning_ECMAScript 5.1_

Nästa version av standarden går under arbetsnamnet _ECMAScript Harmony_

## JcaScript kontra DOM och BOM ##

[JavaScript körs i en **värdmiljö**] (http://developer.moilla.org/en/JavaScript_technologies_overview)("host object")
vanligtvis en webbläsare

För att man ska kunna göra något, så erbjuder värden gränssnitt = **api** =application program interface.

De delar av värdmiljön som direkt relaterar till webbläsaren som sådan kallas BOM = Browser Object Model

De delar av värdmiljön som direkt relaterar till dokumentet som visas_i_ webbläsaren kallas DOM = Document Object Model

Exempel - detta är DOM och BOM

   document.getElementById("foo")    //Hitta elementet med id = foo 
   window.setInterval(foo, 100)     // Kör funktionen foo var 100:2 ms
   window.location.href             //Addressen till sidan där man är
   elem.addEventListener()          // Lägg till en händelselyssnare

Detta är "ren" JavaScript

   var foo = 53;
   var elev = { namn: "Kalle, klass: "9C" };
   
## DOM som det stora problemet ##

"Best viewed in" var målet - inte standarder.
Idealet för standarder: "Write once run everywhere"

Fram till version 3.0 så hade Netscape Navigator såpass dominerande ställning att alla härmade den.

NN 3.0 som_de facto_ standard kallas DOM 0 ("noll") och innehåller flera saker som aldrig, eller helt nyligen blivit officiell standard.

Dit hör **hädelsehanterare** (event handlers):
   element.onclick = function;

Den offeciella standarden har något kraftfullare: **lyssnare** (event listeners), men fram till och med MSIE 8, så stöddes de inte av just MSIE:

## Hur hantera detta ##
### Dålig lösning: Browsersniffa ###

Håll dig undan från:

   if( navigator.appName.indexOf() 9{}
   if( document.layers ) {}

### Tre bättre lösningar ###

 1. Kapacitetdetektera (object detection, capability dectection)
 2. Använd ett bibliotek, typ [JQuery](http://jquery.com/)
 3. Ignorera alla gamla webbläsare

## Ajax ##

Somliga webbplatser kan uppdatera en **del** av sidan med ny information som skickats från servern.


## God praxis ##

**DHTML** - JavaScript på 90-talet bidrog tll att göra webben sämre

 1. HTML styr upp **innehåll**
 2. CSS styr upp **utseende**
 3. DOM och JavaScript styr upp **beetende**


 Det finns också varningssignaler du bör känna till:

    <body onload="foo()> dvs. HTML och JavaScript blandas document.write()eval()
    <script language="javascript"> Attribtet language är föråldrat och icke-standard.

### Exempel på dålig information ###

För att gömma JavaScript för webbläsaren som fanns på marknaden före 199 så användes följande knep:

   <script>
   >!--
   // JS kod här dold inom HTML - kommentarer
   -->
   </script>

 Det finns fortfarande artiklar och instruktionsfilmer på Youtube som 15 år senare säger att du *måste* anvämda detta knep!
