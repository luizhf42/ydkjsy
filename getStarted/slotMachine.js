const randMax = (max) => Math.trunc(1e9 * Math.random()) % max;

const reel = {
	symbols: ["♠", "♥", "♦", "♣", "☺", "★", "☾", "☀"],
	spin() {
		if (this.position == null) this.position = randMax(this.symbols.length - 1);
		this.position = (this.position + 100 + randMax(100)) % this.symbols.length;
	},
	display() {
		if (this.position == null) this.position = randMax(this.symbols.length - 1);
		return this.symbols[this.position];
	},
};

const slotMachine = {
	reels: [Object.create(reel), Object.create(reel), Object.create(reel)],
	spin() {
		this.reels.forEach((reel) => reel.spin());
	},
	display() {
		const symbolsAbove = [];
		const centerSymbols = [];
		const symbolsBelow = [];

		this.reels.forEach((reel) => {
			const slotAboveSymbol = reel.symbols[this.getIndexCircularly(reel, -1)];
			const slotBelowSymbol = reel.symbols[this.getIndexCircularly(reel, 1)];

			symbolsAbove.push(slotAboveSymbol);
			centerSymbols.push(reel.symbols[reel.position]);
			symbolsBelow.push(slotBelowSymbol);
		});

		return `${symbolsAbove.join(" | ")}\n${centerSymbols.join(" | ")}\n${symbolsBelow.join(" | ")}`;
	},
	getIndexCircularly(reel, step) {
		const length = reel.symbols.length;
		const newIndex = (reel.position + step) % length;
		if (newIndex < 0) return length + newIndex;
		return newIndex;
	},
};

slotMachine.spin();
console.log(slotMachine.display());
// ☾ | ☀ | ★
// ☀ | ♠ | ☾
// ♠ | ♥ | ☀

// slotMachine.spin();
// slotMachine.display();
// ♦ | ♠ | ♣
// ♣ | ♥ | ☺
// ☺ | ♦ | ★
