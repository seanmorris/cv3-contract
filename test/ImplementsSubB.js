import { Interface    } from './Interface';
import { SubContractB } from './SubContractB';
import { ImplementsB  } from './ImplementsB';

export class ImplementsSubB extends Interface.implements(ImplementsB, SubContractB)
{
	
}
