import { Test } from 'cv3-test/Test';

import { Interface    } from './Interface';

import { ContractA    } from './ContractA';
import { ContractB    } from './ContractB';

import { SubContractA } from './SubContractA';
import { SubContractB } from './SubContractB';

import { ImplementsA  } from './ImplementsA';
import { ImplementsB  } from './ImplementsB';
import { ImplementsAB } from './ImplementsAB';

import { FulfillsA } from './FulfillsA';
import { FulfillsB } from './FulfillsB';

import { FailureA } from './FailureA';
import { FailureB } from './FailureB';

import { ImplementsSubA } from './ImplementsSubA';
import { ImplementsSubB } from './ImplementsSubB';

export class ContractTest extends Test
{
	testImplementsContractA()
	{
		this.assert(
			Interface.fulfills(ImplementsA, ContractA)
			, '"ImplementsA" class does not fulfill contract "ContractA".'
		);

		this.assert(
			!Interface.fulfills(ImplementsA, SubContractA)
			, '"ImplementsA" class incorectly fulfills contract "SubContractA".'
		);

		this.assert(
			!Interface.fulfills(ImplementsA, ContractB)
			, '"ImplementsA" class incorectly fulfills contract "ContractB".'
		);

		this.assert(
			!Interface.fulfills(ImplementsA, SubContractB)
			, '"ImplementsA" class incorectly fulfills contract "SubContractB".'
		);

		this.assert(
			Interface.fulfills(ImplementsSubA, ContractA)
			, '"ImplementsSubA" class does not fulfill contract "ContractA".'
		);

		this.assert(
			Interface.fulfills(ImplementsSubA, SubContractA)
			, '"ImplementsSubA" class does not fulfill contract "SubContractA".'
		);

		this.assert(
			!Interface.fulfills(ImplementsSubA, ContractB)
			, '"ImplementsSubA" class incorectly fulfills contract "ContractB".'
		);

		this.assert(
			!Interface.fulfills(ImplementsSubA, SubContractB)
			, '"ImplementsSubA" class incorectly fulfills contract "SubContractB".'
		);
	}

	testImplementsContractB()
	{
		this.assert(
			Interface.fulfills(ImplementsB, ContractB)
			, '"ImplementsB" class does not fulfill contract "ContractB".'
		);

		this.assert(
			!Interface.fulfills(ImplementsB, SubContractB)
			, '"ImplementsB" class incorectly fulfills contract "SubContractB".'
		);

		this.assert(
			!Interface.fulfills(ImplementsB, ContractA)
			, '"ImplementsB" class incorectly fulfills contract "ContractA".'
		);

		this.assert(
			!Interface.fulfills(ImplementsB, SubContractA)
			, '"ImplementsB" class incorectly fulfills contract "SubContractA".'
		);

		this.assert(
			Interface.fulfills(ImplementsSubB, ContractB)
			, '"ImplementsSubA" class does not fulfill contract "ContractA".'
		);

		this.assert(
			Interface.fulfills(ImplementsSubB, SubContractB)
			, '"ImplementsSubA" class does not fulfill contract "SubContractA".'
		);

		this.assert(
			!Interface.fulfills(ImplementsSubB, ContractA)
			, '"ImplementsSubA" class incorectly fulfills contract "ContractB".'
		);

		this.assert(
			!Interface.fulfills(ImplementsSubB, SubContractA)
			, '"ImplementsSubA" class incorectly fulfills contract "SubContractB".'
		);
	}

	testImplementsContractAB()
	{
		this.assert(
			Interface.fulfills(ImplementsAB, ContractB)
			, '"ImplementsAB" class does not fulfill contract "ContractB".'
		);

		this.assert(
			!Interface.fulfills(ImplementsAB, SubContractB)
			, '"ImplementsAB" class incorectly fulfills contract "SubContractB".'
		);

		this.assert(
			Interface.fulfills(ImplementsAB, ContractA)
			, '"ImplementsAB" class incorectly fulfills contract "ContractA".'
		);

		this.assert(
			!Interface.fulfills(ImplementsAB, SubContractA)
			, '"ImplementsAB" class incorectly fulfills contract "SubContractA".'
		);

		this.assert(
			Interface.fulfills(ImplementsAB, ContractB)
			, '"ImplementsAB" class does not fulfill contract "ContractA".'
		);

		this.assert(
			!Interface.fulfills(ImplementsAB, SubContractB)
			, '"ImplementsAB" class does not fulfill contract "SubContractA".'
		);

		this.assert(
			Interface.fulfills(ImplementsAB, ContractA)
			, '"ImplementsAB" class incorectly fulfills contract "ContractB".'
		);

		this.assert(
			!Interface.fulfills(ImplementsAB, SubContractA)
			, '"ImplementsAB" class incorectly fulfills contract "SubContractB".'
		);
	}

	testFailContractA()
	{
		this.assert(
			Interface.fulfills(FailureA, ContractA)
			, '"FailureA" class does not fulfill contract "ContractA".'
		);

		this.expect(Error);

		new FailureA;
	}

	testFailContractB()
	{
		this.assert(
			Interface.fulfills(FailureB, ContractB)
			, '"FailureB" class does not fulfill contract "ContractB".'
		);

		this.expect(Error);

		new FailureB;
	}

	testImplementsContractB()
	{}
}
