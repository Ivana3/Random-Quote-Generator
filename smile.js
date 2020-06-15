var quotes = [
            {content: "Don’t cry because it’s over, smile because it happened.", source: "– Dr. Seuss" },
	        {content: "If you’re reading this… Congratulations, you’re alive. If that’s not something to smile about, then I don’t know what is.", source: " – Chad Sugg" },
		    {content: "I love those who can smile in trouble.", source: "– Leonardo da Vinci" },
			{content: "A smile is happiness you’ll find right under your nose. ", source: "– Tom Wilson" },
			{content: "A gentle word, a kind look, a good-natured smile can work wonders and accomplish miracles.", source: "– William Hazlitt" },
			{content: "When things are difficult, smile by faith. Don’t wait until you feel better.", source: "– Joel Osteen" },
			{content: "A smile is the best makeup any girl can wear.", source: "– Marilyn Monroe" },
			{content: "Use your smile to change the world; don’t let the world change your smile.", source: "– Chinese Proverb" },
			{content: "Sometimes your joy is the source of your smile, but sometimes your smile can be the source of your joy.", source: "– Thich Nhat Hanh" },
			{content: "You shouldn’t never regret something that made you smile.", source: "– Mei Maejor" },
			{content: "Smiling is the best way to face every problem, to crush every fear and to hide every pain.", source: "– Unknown" },
			{content: "Teeth aren’t pearly, until you smile.", source: "– Anthony Liccione" },
			{content: "Always find opportunities to make someone smile, and to offer random acts of kindness in everyday life.", source: "– Roy T. Bennett" },
			{content: "Smile more. Smiling can make you and others happy.", source: "– Roy T. Bennett" },
			{content: "Everyone smiles in the same language.", source: "– George Carlin" },
			{content: "Strong people are ones who can smile for others’ happiness.", source: "– Veronica Purcell" },
			{content: "It’s hard not to feel happy when you make someone smile.", source: "– Roy T. Bennett" },
			{content: "Share your smile with the world. It’s a symbol of friendship and peace.", source: "– Christie Brinkley" },
			{content: "If you smile when you are alone, then you really mean it.", source: "– Andy Rooney" },
				]
function getQuote() {
var randomNumber = Math.floor(Math.random() * quotes.length + 1);
var quoteContent = quotes[randomNumber].content;
var quoteSource = quotes[randomNumber].source;
document.getElementById("quote-text").innerHTML = quoteContent;
document.getElementById("quote-source").innerHTML = quoteSource;	
};																	