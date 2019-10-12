const checkSymbol      = Symbol('check');
const missingSymbol    = Symbol('missing');
const methodsSymbol    = Symbol('methods');
const contractSymbol   = Symbol('contract');

export class Interface
{
	static implements(baseClass, ...contracts)
	{
		const subclass = class extends baseClass {
			constructor(...args)
			{
				super(...args);

				for(let contract of contracts)
				{
					Interface[checkSymbol](contract, this);
				}
			}
		};

		Object.defineProperty(subclass, contractSymbol, {
			enumerable: false,
			writable:   false,
			value:      contracts
		});

		return subclass;
	}

	static fulfills(classs, contract)
	{
		if(classs[contractSymbol])
		{
			for(let _contract of classs[contractSymbol])
			{
				if(contract === _contract)
				{
					return true;
				}
			}
		}

		if(!Object.getPrototypeOf(classs))
		{
			return false;
		}

		return this.fulfills(Object.getPrototypeOf(classs), contract);
	}

	static [methodsSymbol](classs)
	{
		const methods = [];

		do {
			if(classs === Object.prototype)
			{
				break
			}

			const m = Object.getOwnPropertyNames(classs);
			const s = Object.getOwnPropertySymbols(classs);

			methods.push(...m, ...s);

		} while(classs = Object.getPrototypeOf(classs));

		return Array.from( new Set(methods) );
	}

	static [checkSymbol](contract, instance)
	{
		const missingMethods = this[missingSymbol](contract, instance);

		if(missingMethods.length)
		{
			const name = `${instance.constructor}`.split('\n')[0].split(' ')[1];

			const missingString = missingMethods.map(m => String(m)).join(', ');

			throw new Error(
				`${name} does not implement ${missingString} as per contract.`
			);
		}
	}

	static [missingSymbol](contract, instance)
	{
		const contractMethods = this[methodsSymbol](contract.prototype);
		const instanceMethods = new Set(this[methodsSymbol](instance));

		return contractMethods.filter((x)=>!instanceMethods.has(x));
	}
}

Interface[contractSymbol] = [];
