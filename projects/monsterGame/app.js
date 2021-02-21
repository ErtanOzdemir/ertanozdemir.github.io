new Vue({
    el: '#app',
    data: {
        m_heal: 100,
        p_heal: 100,
        logs: [],
    },
    methods: {
        restart: function() {
            if (confirm("Yeniden başlamak ister misiniz?")) {
                this.m_heal = 100;
                this.p_heal = 100;

                this.logs = [];
            }
        },
        attack: function() {
            let monsterScore = (Math.random() * 3);
            let playerScore = (Math.random() * 3);

            monsterScore = Math.ceil(monsterScore);
            playerScore = Math.ceil(playerScore);


            this.m_heal -= monsterScore;
            this.p_heal -= playerScore;


            this.logs.push({ turn: 'p', text: "OYUNCU ATAĞI(" + playerScore + ")" });
            this.logs.push({ turn: 'm', text: "CANAVAR ATAĞI(" + monsterScore + ")" });
        },
        special_attack: function() {
            let monsterScore = (Math.random() * 6);
            let playerScore = (Math.random() * 3);

            monsterScore = Math.ceil(monsterScore);
            playerScore = Math.ceil(playerScore);


            this.m_heal -= monsterScore;
            this.p_heal -= playerScore;

            this.logs.push({ turn: 'p', text: "OYUNCU ATAĞI(" + playerScore + ")" });
            this.logs.push({ turn: 'm', text: "CANAVAR ATAĞI(" + monsterScore + ")" });

        },
        heal: function() {

            let healScore = 100 - this.p_heal;
            this.logs.push({ turn: 'p', text: "İyileştirme (" + "+" + healScore + ")" });
            this.p_heal = 100;

        },
        give_up: function() {
            if (confirm("Pes etmek istediğinizden emin misiniz?")) {
                this.p_heal = 0;

            }
        }
    },
    watch: {
        p_heal: function(value) {
            if (value < 0) {
                this.p_heal = 0;
                if (confirm("KAYBETTİNİZ yeniden başlamak ister misiniz?")) {
                    this.logs = [];

                    this.m_heal = 100;
                    this.p_heal = 100;
                }
            } else if (value > 100) {
                this.p_heal = 100;

            }
        },
        m_heal: function(value) {
            if (value < 0) {
                this.m_heal = 0;
                if (confirm("KAZANDINIZ yeniden başlamak ister misiniz?")) {
                    this.logs = [];

                    this.m_heal = 100;
                    this.p_heal = 100;
                }
            } else if (value > 100) {
                this.m_heal = 100;
            }
        },

    }
})