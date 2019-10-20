import { Interface    } from './Interface';
import { SubContractA } from './SubContractA';
import { ImplementsA  } from './ImplementsA';

export class ImplementsSubA extends Interface.implements(ImplementsA, SubContractA)
{
	
}
