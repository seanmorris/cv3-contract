import { Interface   } from './Interface';
import { Sample      } from './Sample';
import { SubContract } from './SubContract';

export class Contractual extends Interface.implements(Sample, SubContract)
{
	
	[ SubContract.symbolA ](){}
	[ SubContract.symbolB ](){}
	[ SubContract.symbolC ](){}
}
