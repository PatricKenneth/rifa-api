import {
    CreateDateColumn,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from 'typeorm';
  
  export abstract class BaseEntity {
    @PrimaryGeneratedColumn()
    id?: number;
  
    @CreateDateColumn({
      default: () => 'CURRENT_TIMESTAMP',
      type: 'timestamptz',
    })
    createdAt?: Date;
  
    @UpdateDateColumn({
      default: () => 'CURRENT_TIMESTAMP',
      type: 'timestamptz',
    })
    updatedAt?: Date;
  }