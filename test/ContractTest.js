import { Test } from 'cv3-test/Test';

import { Interface   } from './Interface';
import { Contract    } from './Contract';
import { SubContract } from './SubContract';
import { Sample      } from './Sample';
import { Contractual } from './Contractual';

export class ContractTest extends Test
{
	testContract()
	{
		const sample      = new Sample;
		const contractual = new Contractual;

		this.assert(
			Interface.fulfills(Sample, Contract)
			, '"Sample" class does not fulfill "Contract" contract.'
		);

		this.assert(
			Interface.fulfills(Contractual, Contract)
			, '"Contractual" class does not fulfill "Contract" contract.'
		);

		this.assert(
			!Interface.fulfills(Sample, SubContract)
			, '"Sample" class incorrectly fulfills "SubContract" contract.'
		);

		this.assert(
			Interface.fulfills(Contractual, SubContract)
			, '"Contractual" class does not fulfill "SubContract" contract.'
		);
	}	
}
