# ACID

## 001 Introduction to ACID
ACID => Atomicity , Consistency , Isolation and Durability in Relatiion Database Systems


**Agenda**
- What  is a Transaction? 
- Atomicity
- Isolation 
- Consistency
- Durability


## 002 What is a Transaction?
The transaction is a collection of queries that are treated as a single unit to a fork.
Transaction could change data, or it could be only read only as well, right?
- A collection of queries 
- One Unit of work
- E.g Account deposit (SELECT, UPDATE, UPDATE)

**Transaction Lifespan** 
- Transaction `BEGIN`
- Transaction `COMMIIT` (Tills the transaction to commit and to persist. This thing to disk.)
- Transaction `ROLLBACK`
- Transaction unexpected ending = `ROLLBACK` (e.g. crash)

**Nature of Transactions** 
- Usually Transactions are used to change and modify data
- However, it is perfectly normal to have a read only transaction 
- Example, You want to generate a report and you want to get consistent snapshot based at the time of transaction

`Example` Send $100 from Account 1 to Account 2

| account_id | balance |
| ------------- | ------------- |
| 1 | $1000 |
| 2 | $500 |


```sql
BEGIN TX1
	 SELECT balance FROM account WHERE id = 1
	 balance > 100
	 	UPDATE account SET balance = balance - 100 WHERER id = 1
	 	UPDATE account SET balance = balance + 100 WHERER id = 2
COMMIT TX1
```