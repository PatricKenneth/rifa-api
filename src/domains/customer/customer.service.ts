import { CustomerRepository } from "./customer.repository";

export class CustomerService {
    constructor(
        private readonly customerRepository: CustomerRepository,
    ){}
}