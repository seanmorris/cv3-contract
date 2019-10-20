import { ContractB } from './ContractB';

const symbolD = Symbol('SubContractB.symbolMethod_D');

export class SubContractB extends ContractB
{
	method4(a,b,c){}
	method5(a,b,c){}
	method6(a,b,c){}

	[ symbolD ]() {}
}

SubContractB.symbolD = symbolD;
