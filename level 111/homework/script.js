// მშობელი კლასი Book
class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
    
    getDescription() {
        return `${this.title} by ${this.author}, ${this.pages} pages.`;
    }
    
    read() {
        return `Reading ${this.title}...`;
    }
}

// სათავგადასავლო ჟანრის კლასი
class AdventureBook extends Book {
    constructor(title, author, pages, difficulty, setting) {
        super(title, author, pages);
        this.difficulty = difficulty;
        this.setting = setting;
    }
    
    getDescription() { // მთლიანად შეცვლილი მეთოდი
        return `Adventure Book: ${this.title} by ${this.author}, set in ${this.setting}.`;
    }
    
    read() { // მშობლის მეთოდზე დაშენებული მეთოდი
        return super.read() + ` Brace yourself for an exciting journey!`;
    }
    
    explore() { // ახალი უნიკალური მეთოდი
        return `Exploring the world of ${this.title}...`;
    }
}

// სატირული ჟანრის კლასი
class SatireBook extends Book {
    constructor(title, author, pages, humorType, target) {
        super(title, author, pages);
        this.humorType = humorType;
        this.target = target;
    }
    
    getDescription() { // მთლიანად შეცვლილი მეთოდი
        return `Satire Book: ${this.title}, a ${this.humorType} satire aimed at ${this.target}.`;
    }
    
    read() { // მშობლის მეთოდზე დაშენებული მეთოდი
        return super.read() + ` Prepare for some sharp wit and critique!`;
    }
    
    laugh() { // ახალი უნიკალური მეთოდი
        return `Laughing at the sharp humor in ${this.title}...`;
    }
}

// ფანტასტიკის ჟანრის კლასი
class FantasyBook extends Book {
    constructor(title, author, pages, magicSystem, creatures) {
        super(title, author, pages);
        this.magicSystem = magicSystem;
        this.creatures = creatures;
    }
    
    getDescription() { // მთლიანად შეცვლილი მეთოდი
        return `Fantasy Book: ${this.title} with a ${this.magicSystem} magic system and creatures like ${this.creatures}.`;
    }
    
    read() { // მშობლის მეთოდზე დაშენებული მეთოდი
        return super.read() + ` Entering a world of magic and wonder!`;
    }
    
    castSpell() { // ახალი უნიკალური მეთოდი
        return `Casting a spell from ${this.title}...`;
    }
}

// კლასების ტესტირება
const adventure = new AdventureBook("Treasure Island", "Robert Louis Stevenson", 300, "Medium", "Caribbean");
console.log(adventure.getDescription());
console.log(adventure.read());
console.log(adventure.explore());

const satire = new SatireBook("Animal Farm", "George Orwell", 150, "Political", "Totalitarianism");
console.log(satire.getDescription());
console.log(satire.read());
console.log(satire.laugh());

const fantasy = new FantasyBook("Harry Potter", "J.K. Rowling", 500, "Wand Magic", "Dragons, Elves");
console.log(fantasy.getDescription());
console.log(fantasy.read());
console.log(fantasy.castSpell());