import { Entity,BaseEntity , Column, PrimaryGeneratedColumn, QueryResult } from 'typeorm';


@Entity('products')
export  class Product extends BaseEntity{
  

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  categoryid:  string;
}