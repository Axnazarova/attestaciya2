function gettime() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    return `${hours}:${minutes}`;
}

class Message {
    constructor(author, text) {
        this.author = author;
        this.time = gettime();
        this.text = text;
    }

    toString() {
        return `${this.time} ${this.author}: ${this.text}`;
    }
}

class Messenger {
    constructor() {
        this.history = [];
    }

    show_history() {
        for (let message of this.history) {
            console.log(message.toString());
        }
    }

    send(author, text) {
        let message = new Message(author, text);
        this.history.push(message);
    }
}


let messenger = new Messenger();
messenger.send('Артем', 'Первое сообщение');
messenger.send('Мария', 'Второе сообщение');
messenger.show_history();

