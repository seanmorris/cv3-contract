import { Interface } from './Interface';
import { Contract  } from './Contract';

export class Sample extends Interface.implements(class{}, Contract)
{
	method0(){}
	method1(a){}
	method2(a,b){}
	method3(a,b,c){}

	[ Contract.symbolA ](){}
	[ Contract.symbolB ](){}
	[ Contract.symbolC ](){}
}
