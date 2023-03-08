# 1. úkol
Výplata

Vytvořte funkci salary se třemi parametry

- wage - hrubá mzda v korunách za hodinu
- hours - kolik hodin denně průměrně pracujete
- days - kolik dní v měsící průměrně pracujete
- Funkce spočítá vaši hrubou měsíční mzdu v celých korunách.

Dále vytvořte funkci taxed, která na vstupu obdrží částku a procento zdanění, a vrátí částku v celých korunách zdaněnou podle zadaných procent.

Použítím funkcí salary a taxed spočítejte svoji měsíční mzdu po 15% zdanění.

# 2. úkol
Kalkulačka

Představte si úplně obyčejnou kalkulačku pouze s tlačítky pro čísla, čtyřmi základními operacemi a tlačítkem pro rovná se. Pokud na takové kalkulačce chcete spočítat něco velmi jednoduchého, například 2 + 3, musíme stisknout tlačíko 2, poté +, pak 3 a pak =. Kalkulačka tedy nespočítá náš výsledek ve chvíli, kdy mačkáme +, ale až ve chvíli, kdy mačkáme =. Musí si tedy zapamatovat, co jsme namačkali, a všecho spočítat až ve chvíli, kdy stiskneme =.

Napište funkci calculate se třemi parametry number1, operation a number2, které představují první zadané číslo, zadanou operaci jako řetězec a druhé zadané číslo. Operace může být '+', '-', '*' nebo '/'. Funkce vrátí výsledek výpočtu pro zadanou operaci.

Příklad použití

> calculate(2, '+', 3)  
5  
> calculate(3, '*', 7)  
21  
> calculate(10, '/', 4)  
2.5  

# 3. úkol
Ceník

Naklonujte si repozitář se stránkou, která nabízí předplatné za nějaké služby. Může jít například o internetovou televizi, pravidelné dovážky jídla nebo třeba webový hosting.

Přidejte to stránky soubor s JavaScriptem, tentokrát bez atributu type=module, abyste mohli své funkce volat z konzole.  
Napište funkci selectPlan s jedním parametrem planNumber. Tento parametr bude představovat číslo plánu. Funkce podle čísla plánu vybere ze stránky správný DOM element a přidá k němu CSS třídu plan--selected. Vyzkoušejte vaši funkci v konzoli s různými čísly.  
Opakovaným voláním funkce selectPlan lze na stránce postupně vybrat všechny plány. My bychom však chtěli, aby mohl být vybrát vždy nejvýš jeden. Upravte funkci selectPlan tak, že vybere plán zadaný v parametru a u ostatních plánů výběr zruší. Ke zrušení výběru stačí z příslušného prvku odebrat třídu plan--selected.

# 4. úkol jako bonus
Výplňořez

Napište funkci fillcut, která jako svůj první parametr str očekává řetězec a jako druhý parametr len kladné celé číslo. Úkolem funkce je oříznout nebo prodloužit zadaný řetězec tak, aby měl délku přesně len.  
Pokud je vstupní řetězec delší než len, tak funkce odřízne jeho konec a vrátí výsledek.  
Pokud je vstupní řetězec kratší než len, tak jej doplní od začátku znakem tečky a vrátí výsledek.  
Pokud je vstupní řetězec dlouhý přesně len, funkce jej vrátí beze změny.  

Příklad použití:

> fillcut('petr', 8)  
'....petr'  
> fillcut('petr', 3)  
'pet'  
> fillcut('petr', 4)  
'petr'  

# 5. úkol jako bonus
Přestupný rok jako funkce

Napište funkci isLeapYear, která jako svůj parametr obdrží celé číslo představující rok. Funkce vrátí true, pokud je zadaný rok přestupný. V opačném případě vrátí false.