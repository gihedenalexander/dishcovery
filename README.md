# DishCovery
React-projekt som låter användaren söka efter matrelaterade föremål genom Spoonaculars API. Därefter kan användaren generera historisk eller intressant kuriosa kring dessa föremål genom ett knapptryck, som promptar OpenAIs API (GPT). Användarens favoritkuriosa kan därefter sparas i en lista av dennes favoriter, genom localStorage.

För att använda denna applikation krävs det att man har tillgång till två API-nycklar, en för Spoonacular, och en för OpenAI. Dessa bör läggas i en .env-fil, som i detta projekt ska läggas i den innersta "dishcovery"-mappen. Namnge därefter API-nycklarna enligt följande:
1. För Spoonaculars nyckel, namnge enligt: "VITE_SPOONACULAR_API_KEY".
2. För OpenAIs nyckel, namnge enligt: "OPENAI_API_KEY".

   Alltså kan de se ut enligt följande inuti .env-filen:

   VITE_SPOONACULAR_API_KEY=minspoonacularnyckelhär
   OPENAI_API_KEY=sk_proj_minopenainyckelhär


# För att köra appen:

1. Kör kommandot "npm run dev".
2. Öppna en terminal och navigera till backend-mappen och kör kommandot "node server.js".
3. Öppna ytterligare en terminal och navigera till den innersta "dishcovery"-mappen och kör kommandot "npm run dev".


# Motivation av val av React vs. Angular och Vue för att utveckla DishCovery
Vid utvecklingen av DishCovery, som låter användaren söka på rätter, livsmedel och ingredienser för att sedan generera rolig eller historisk kuriosa kopplat till sökresultatet, och sedan spara detta i en lista av sina favoriter, var valet av frontend ramverk en viktig del av planeringen. Efter att ha jämfört de tre mest populära JavaScript-ramverken React, Angular och Vue, föll valet på React, vilket ansågs passa bäst för just denna applikation och dess användningsfall.

DishCoverys grundläggande funktionalitet är relativt simpel, men kräver samtidigt en snabb och responsiv användarupplevelse. Användaren ska snabbt kunna göra sökningar, få upp relevanta sökresultat, och generera intressant kuriosa kring sökresultatet, vilket kräver smidig interaktion med gränssnittet för att innehållet på sidan ska kunna uppdateras dynamiskt efter varje sökning och knapptryck. 

Reacts kärna, Virtual DOM, möjliggör just detta genom att effektivt och snabbt uppdatera endast de delar av användargränssnittet som förändras [1], vilket tillåter en snabb och smidig responsiv applikation [2], och därigenom en härlig användarupplevelse. Detta är särskilt viktigt och värdefullt för applikationer som hanterar dynamiskt innehåll, vilket stämmer väl överens med DishCovery som projekt.

En annan anledning varför React lämpar sig väl för detta projekt är dess stöd för återanvändbara komponenter [1]. Eftersom att applikationen innehåller en del återkommande element i gränssnittet, som sökresultaten och sparade favoriter byggda som kort/list-komponenter, är det fördelaktigt att kunna skapa dessa som egna komponenter som enkelt kan återanvändas [1] och kombineras på olika sätt. Detta bidrar inte bara till att minska koden, utan leder också till en tydligare och mer underhållbar kod.

Angular, å andra sidan, är ett mer omfattande och tyngre ramverk som passar bättre för stora och komplexa “enterprise”-applikationer med många inbyggda funktioner och strikta strukturer [1]. För en relativt enkel och snabb applikation som DishCovery, hade Angulars större storlek och komplexitet skapat onödig overhead, vilket bland annat skulle göra utvecklingsprocessen av applikationen mer komplex och svår än nödvändigt. Dessutom har Angular, enligt [2] samt [3], en brant inlärningskurva, i jämförelse med React.

Vue är ett kompakt och effektivt ramverk som också är känt för sin snabbhet och enkelhet [1, 3], och hade därför kunnat vara ett alternativ till React. Dock värderades Reacts mer omfattande och bredare community, dess verktyg och resurser, samt mer och större support [2] högre, vilket gjorde att valet till slut föll på React för att utveckla DishCovery.

# Referenser
[1] “Angular vs React vs Vue: Core Differences,” BrowserStack, May 9, 2025. [Online]. Available: https://www.browserstack.com/guide/angular-vs-react-vs-vue. Accessed: Jun. 3, 2025.  
[2] N. Emadamerho-Atori, “Angular vs. React vs. Vue.js: Comparing performance,” LogRocket, Oct 7, 2024. [Online]. Available: https://blog.logrocket.com/angular-vs-react-vs-vue-js-comparing-performance/. Accessed: Jun. 3, 2025.

[3] “Angular Vs React Vs Vue: Which One To Choose,” TatvaSoft, Apr. 28, 2025. [Online]. Available: https://www.tatvasoft.com/blog/angular-vs-react-vs-vue/. Accessed: Jun. 3, 2025. 

