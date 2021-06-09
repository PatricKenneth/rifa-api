import { EntityRepository, Repository } from "typeorm";
import { Numbers } from "./number.entity";
import { NumbersStatus } from "./numbers-status.enum";

@EntityRepository(Numbers)
export class NumbersRepository extends Repository<Numbers> {
    async findByStatus(status = ''): Promise<Numbers[]> {
      const query = this.createQueryBuilder('numbers')
      if(status){
        return query.where({ status }).orderBy('numbers.num', 'ASC').getMany();
      } else {
        return query.orderBy('numbers.num', 'ASC').getMany();
      }
    }

    async findBy(mobilePhone = ''): Promise<Numbers[]> {
      const query = this.createQueryBuilder('numbers')
      if(mobilePhone){
        query.where(`numbers.customer ::jsonb @> '{"mobilePhone":"${mobilePhone}"}'`);
      }
      return query.orderBy('numbers.num', 'ASC').getMany();
    }
}