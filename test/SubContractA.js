import { ContractA } from './ContractA';

const symbolD = Symbol('SubContractA.symbolMethod_D');

export class SubContractA extends ContractA
{
	method4(a,b,c){}
	method5(a,b,c){}
	method6(a,b,c){}

	[ symbolD ]() {}
}

SubContractA.symbolD = symbolD;
