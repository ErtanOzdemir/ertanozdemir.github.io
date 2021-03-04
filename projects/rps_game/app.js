new Vue({
    el: '#app',
    data: {
        scores: {
            yourScore: 0,
            computerScore: 0,
            draw: 0
        },
        imageNumbers: {
            userImage: "assets/0.png",
            computerImage: "assets/0.png",
            user: 0,
            computer: 0,

        }

    },
    methods: {
        getPaper: function() {
            this.imageNumbers.user = 2;
            this.imageNumbers.computer = Math.floor(Math.random() * 3);

            this.imageNumbers.userImage = "assets/" + this.imageNumbers.user + ".png";
            this.imageNumbers.computerImage = "assets/" + this.imageNumbers.computer + ".png";

            if ((this.imageNumbers.computer == 2 && this.imageNumbers.user == 2)) this.scores.draw++;
            else if (this.imageNumbers.computer == 1 && this.imageNumbers.user == 2) this.scores.yourScore++;
            else if (this.imageNumbers.computer == 0 && this.imageNumbers.user == 2) this.scores.computerScore++;



        },

        getScissors: function() {
            this.imageNumbers.user = 0;
            this.imageNumbers.computer = Math.floor(Math.random() * 3);

            this.imageNumbers.userImage = "assets/" + this.imageNumbers.user + ".png";
            this.imageNumbers.computerImage = "assets/" + this.imageNumbers.computer + ".png";

            if ((this.imageNumbers.computer == 0 && this.imageNumbers.user == 0)) this.scores.draw++;
            else if (this.imageNumbers.computer == 1 && this.imageNumbers.user == 0) this.scores.computerScore++;
            else if (this.imageNumbers.computer == 2 && this.imageNumbers.user == 0) this.scores.yourScore++;

        },
        getRock: function() {
            this.imageNumbers.user = 1;
            this.imageNumbers.computer = Math.floor(Math.random() * 3);

            this.imageNumbers.userImage = "assets/" + this.imageNumbers.user + ".png";
            this.imageNumbers.computerImage = "assets/" + this.imageNumbers.computer + ".png";

            if ((this.imageNumbers.computer == 1 && this.imageNumbers.user == 1)) this.scores.draw++;
            else if (this.imageNumbers.computer == 2 && this.imageNumbers.user == 1) this.scores.computerScore++;
            else if (this.imageNumbers.computer == 0 && this.imageNumbers.user == 1) this.scores.yourScore++;

        }

    },

})